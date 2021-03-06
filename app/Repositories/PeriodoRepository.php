<?php


namespace App\Repositories;

use App\Models\Ingreso;
use App\Models\Periodo;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class PeriodoRepository
{
    /**
     * @var LoteRepository
     */
    private $loteRepository;
    /**
     * @var IngresoRepository
     */
    private $ingresoRepository;
    /**
     * @var DetalleIngresoRepository
     */
    private $detalleIngresoRepository;
    /**
     * @var ArticuloRepository
     */
    private $articuloRepository;

    /**
     * PeriodoRepository constructor.
     * @param LoteRepository $loteRepository
     * @param IngresoRepository $ingresoRepository
     * @param DetalleIngresoRepository $detalleIngresoRepository
     * @param ArticuloRepository $articuloRepository
     */
    public function __construct(
        LoteRepository $loteRepository,
        IngresoRepository $ingresoRepository,
        DetalleIngresoRepository  $detalleIngresoRepository,
        ArticuloRepository $articuloRepository
    ){

        $this->loteRepository = $loteRepository;
        $this->ingresoRepository = $ingresoRepository;
        $this->detalleIngresoRepository = $detalleIngresoRepository;
        $this->articuloRepository = $articuloRepository;
    }

    /**
     * @param $withTrashed
     * @return mixed
     */
    public function getAll($withTrashed)
    {
        return Periodo::withTrashed(filter_var($withTrashed,FILTER_VALIDATE_BOOLEAN))
            ->orderBy('id','DESC')
            ->get();
    }



    public function getById($id) : Periodo
    {
        $periodo = Periodo::withTrashed()->find($id);
        if (!$periodo) {
            throw new NotFoundHttpException("No existe el periodo con el ID : {$id}");
        }
        return $periodo;
    }

    /**
     * @param $data
     * @return Periodo
     */
    public function register($data)
    {
        $periodo =  Periodo::latest()->first();
        if($periodo)
            $this->setStatus($periodo->id);
        $periodo = new Periodo();
        $periodo->nombre        = $data->nombre;
        $periodo->fecha_inicio  = $data->fecha_inicio;
        $periodo->fecha_fin     = $data->fecha_fin;
        $periodo->estado        = Periodo::EN_CURSO;
        $periodo->descripcion   = $data->descripcion;
        $periodo->save();
        return $periodo;
    }

    /**
     * @param $id
     * @param $data
     */
    public function update($id, $data)
    {
        Periodo::where('id',$id)
            ->update([
                'nombre'        => $data->nombre,
                'fecha_inicio'  => $data->fecha_inicio,
                'fecha_fin'     => $data->fecha_fin,
                'descripcion'   => $data->descripcion,
            ]);
    }

    /**
     * @param $id
     * @throws \Exception
     */
    public function setStatus($id)
    {
        $periodo = $this->getById($id);
        $periodo->estado = Periodo::FINALIZADO;
        $periodo->save();
        $periodo->delete();
    }

    /**
     * @param $request
     * @return array
     */
    public function Start($request)
    {
        try {
            DB::beginTransaction();
            $articulos = $this->loteRepository->getAll();
            if($articulos->isEmpty())
                throw new NotFoundHttpException('No se encontraron articulos registrados.');
            $periodo = $this->register($request);
            $ingreso = $this->ingresoRepository->register(
                Ingreso::INV_INICIAL,
                NULL,
                $periodo->id,
                $periodo->fecha_inicio,
                'NUEVA APERTURA'
            );
            switch ($request->tipo_inventario){
                case 'APERTURA_INVENTARIO':
                    $detalles = [];
                    $items = [];
                    foreach ($request->detalle_apertura as $detalle){
                            $new_lote = $this->loteRepository->register(
                                $detalle['cantidad'],
                                $detalle['total'],
                                $detalle['total']/$detalle['cantidad'],
                                $detalle['unidad_medida'],
                                $detalle['marca'],
                                $detalle['articulo']
                            );
                            $this->detalleIngresoRepository->register(
                                $detalle['cantidad'],
                                'Inventario inicial',
                                $new_lote->id,
                                $ingreso->id
                            );
                            array_push($detalles,$detalle['articulo']);
                    }
                    foreach ($articulos as $articulo){
                        array_push($items ,$articulo->id);
                    }
                    $items = array_diff($items,$detalles);
                    if(!empty($items)){
                        foreach ($items as $item){
                            $new_lote = $this->loteRepository->register(0,0,0,null,null,$item);
                            $this->detalleIngresoRepository->register(0,
                                'Inventario inicial',
                                $new_lote->id,
                                $ingreso->id
                            );
                        }
                    }
                    break;
                case 'INICIO_INVENTARIO':
                    foreach ($articulos as $articulo){
                        if(!$articulo->lotes->isEmpty()){
                            foreach ($articulo->lotes as $lote){
                                $new_lote = $this->loteRepository->register(
                                    $lote->stock,
                                    $lote->saldo,
                                    $lote->precio_u,
                                    $lote->unidad_medida_id,
                                    $lote->marca,
                                    $lote->articulo_id
                                );
                                $this->detalleIngresoRepository->register(
                                    $lote->stock,
                                    'Inventario inicial',
                                    $new_lote->id,
                                    $ingreso->id
                                );
                            }
                        }else{
                            $new_lote = $this->loteRepository->register(0,0,0,null,null,$articulo->id);
                            $this->detalleIngresoRepository->register(0,
                                'Inventario inicial',
                                $new_lote->id,
                                $ingreso->id
                            );
                        }

                    }
                    break;
            }

            DB::commit();
            return ['message' => 'Se ha iniciado un nuevo periodo contable','status' => 201];
        }catch (NotFoundHttpException $e){
            DB::rollBack();
            return ['message' => $e->getMessage(),'status' => 404];
        }catch (\Exception $e){
            DB::rollBack();
            return ['message' => $e->getMessage(),'status' => 500];
        }
    }

    /**
     * @param $id
     */
    public function delete($id)
    {
        $periodo = $this->getById($id);
        $periodo->forceDelete();
    }

    public function validateDate($date)
    {
        $periodo = Periodo::latest()->first();
        if(!$periodo)
            return ['message' => true,'status'=> 201];
        $date_end_db = date($periodo->fecha_fin);
        $date_start =  date($date);
        if($date_start > $date_end_db)
            return ['message' => true,'status' => 201];
        return ['message' => false, 'status' => 201];
    }

    public function Current()
    {
        $periodo = Periodo::where('estado','=',Periodo::EN_CURSO)->latest()->first();
        if(!$periodo)
            return null;
        return $periodo;
    }

}
