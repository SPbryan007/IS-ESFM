<?php


namespace App\Repositories;

use App\Models\Periodo;
use App\Models\Salida;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\ConflictHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class SalidaRepository
{
    /**
     * @var LoteRepository
     */
    private $loteRepository;
    /**
     * @var DetalleSalidaRepository
     */
    private $detalleSalidaRepository;
    /**
     * @var ArticuloRepository
     */
    private $articuloRepository;

    /**
     * SalidaRepository constructor.
     * @param LoteRepository $loteRepository
     * @param DetalleSalidaRepository $detalleSalidaRepository
     * @param ArticuloRepository $articuloRepository
     */
    public function __construct(
        LoteRepository $loteRepository,
        DetalleSalidaRepository $detalleSalidaRepository,
        ArticuloRepository $articuloRepository
    ){
        $this->loteRepository = $loteRepository;
        $this->detalleSalidaRepository = $detalleSalidaRepository;
        $this->articuloRepository = $articuloRepository;
    }

    /**
     * @param $withTrashed
     * @return mixed
     */
    public function getAll($withTrashed)
    {
        $periodo = Periodo::latest()->first();
        $periodo = $periodo ? $periodo->id : NULL;
        return Salida::select(DB::raw('ROUND(SUM((ds.cantidad*lote.precio_u)), 2) as total'),
            'salida.*'
        )->join('detalle_salida as ds','ds.salida_id','=','salida.id')
            ->leftjoin('lote','lote.id','=','ds.lote_id')
            ->with(['solicitante'=> function($query){
                $query->with(['funcionario','unidad']);
            },'autorizador','verificador'])
            ->where('periodo_id',$periodo)
            ->orderBy('salida.id','DESC')
            ->groupBy('salida.id')
            ->withTrashed(filter_var($withTrashed,FILTER_VALIDATE_BOOLEAN))
            ->get();
    }


    /**
     * @param $id
     * @return Salida
     */
    public function getById($id) : Salida
    {
        $salida = Salida::find($id);
        if(!$salida){
            throw new NotFoundHttpException("No existe la salida con el ID : {$id}");
        }
        return $salida;
    }

    public function  register($data)
    {
        try {
            DB::beginTransaction();
            $salida = new Salida();
            $salida->nro_salida     = '000';
            $salida->nro_pedido     = $data->nro_pedido;
            $salida->finalidad      = $data->finalidad;
            $salida->observacion    = $data->observacion;
            $salida->fecha_pedido   = $data->fecha_pedido;
            $salida->solicitante_id = $data->solicitante_id;
            $salida->usuario_id     = Auth::user()->id_usuario;
            $salida->autorizador_id = $data->autorizador_id;
            $salida->verificador_id = $data->verificador_id;
            $salida->periodo_id     = Periodo::latest()->first()->id;
            $salida->save();
            foreach ($data->detalle_salida as $detalle){
                $cantidad = $detalle['cantidad']; // 50
                $articulo = $this->articuloRepository->getTotal($detalle['articulo']);
                if($detalle['cantidad'] > $articulo->stock) // 50 > 140 |
                    throw new NotFoundHttpException('No existen suficientes suministros del articulo '.$detalle['articulo']);
                $lotes = $this->loteRepository->getOldestByArticulo($detalle['articulo']);
                foreach ($lotes as $lote){
                    if($cantidad <= $lote->stock){ // 50 <= 40
                        $this->loteRepository->setStockSaldo(
                            $lote->id,
                            $lote->stock-$cantidad,
                            ($lote->stock-$cantidad)*$lote->precio_u
                        );
                        $this->detalleSalidaRepository->register(
                            $cantidad,null,$lote->id,$salida->id
                        );
                        break;
                    }else{
                        $cantidad = $cantidad-$lote->stock;
                        $this->loteRepository->setStockSaldo($lote->id,0,0);
                        $this->detalleSalidaRepository->register(
                            $lote->stock,null,$lote->id,$salida->id
                        );
                    }

                }
            }
            DB::commit();
            return ['message' => 'El ingreso se ha registrado con éxito','id' => $salida->id,'status' => 201];
        }catch (NotFoundHttpException $e){
            DB::rollBack();
            return ['message' => $e->getMessage(),'status' => 404];
        }catch (\Exception $e){
            DB::rollBack();
            return ['message' => 'Ha ocurrido un error inesperado. >'.$e->getMessage(),'status' => 500];
        }
    }


    /**
     * @param $id
     * @param $data
     */
    public function update($id, $data)
    {

    }

    public function setStatus($id)
    {

    }

    public function delete($id)
    {
        $salida = $this->getById($id);
        foreach ($salida->detallesalidas()->get() as $detalle){
            $this->loteRepository->setStockSaldo($detalle->lote()->first()->id,$detalle,0);
        }
        $salida->delete();
    }

    public function getShowById($id)
    {
        return Salida::select(DB::raw('ROUND(SUM((ds.cantidad*lote.precio_u)), 2) as total'),
            'salida.*',DB::raw('SUM(ds.cantidad) as cantidad')
        )
            ->leftjoin('detalle_salida as ds','ds.salida_id','=','salida.id')
            ->leftjoin('lote','lote.id','=','ds.lote_id')
            ->with(['autorizador','usuario' =>function($query){
                $query->with('funcionario');
            },'verificador','solicitante' => function($query){
                    $query->with(['funcionario','unidad']);
                    },'detallesalidas'=> function($query){
                    $query->with(['lote' => function($query2){
                        $query2->with(['articulo' => function($query3){
                            $query3->with('unidad_medida');
                        }]);
                    }]);
                }])
            ->where('salida.id',$id)
            ->orderBy('salida.id','DESC')
            ->groupBy('salida.id')
            ->first();
    }

}
