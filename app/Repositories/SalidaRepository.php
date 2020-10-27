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
     * SalidaRepository constructor.
     * @param LoteRepository $loteRepository
     * @param DetalleSalidaRepository $detalleSalidaRepository
     */
    public function __construct(
        LoteRepository $loteRepository,
        DetalleSalidaRepository $detalleSalidaRepository
    ){
        $this->loteRepository = $loteRepository;
        $this->detalleSalidaRepository = $detalleSalidaRepository;
    }

    /**
     * @param $withTrashed
     * @return mixed
     */
    public function getAll($withTrashed)
    {
        $periodo = Periodo::latest()->first();
        $periodo = $periodo ? $periodo->id : NULL;
        return Salida::select(DB::raw('ROUND(SUM((ds.cantidad*ds.precio_u)), 2) as total'),
            'salida.*'
        )->join('detalle_salida as ds','ds.salida_id','=','salida.id')
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

    public function register($data)
    {
        try {
            DB::beginTransaction();

            $salida = Salida::create([
                'cantidad' => $data->cantidad,
                'precio_u' => $data
            ]);

            $ingreso = $this->register(Ingreso::COMPRA,$data->proveedor,Periodo::latest()->first()->id);
            $compra = new Compra();
            $compra->id_compra          = $ingreso->id;
            $compra->tipo_compra        = $data->tipo_compra;
            $compra->nro_solicitud      = $data->nro_solicitud;
            $compra->tipo_comprobante   = $data->tipo_comprobante;
            $compra->nro_comprobante    = $data->nro_comprobante;
            $compra->nro_autorizacion   = $data->nro_autorizacion;
            $compra->fecha_comprobante  = $data->fecha_comprobante;
            $compra->fecha_solicitud    = $data->fecha_solicitud;
            $compra->save();
            foreach ($data->detalle_ingreso as $detalle){
                $lote = $this->loteRepository->register(
                    $detalle['cantidad'],
                    $detalle['precio'],
                    $detalle['articulo']
                );
                $this->detalleIngresoRepository->register(
                    $detalle['cantidad'],
                    $detalle['precio']/$detalle['cantidad'],
                    null,$lote->id,$ingreso->id
                );
            }
            DB::commit();
            return ['message' => 'El ingreso se ha registrado con éxito','id' => $ingreso->id,'status' => 201];
        }catch (NotFoundHttpException $e){
            DB::rollBack();
            return ['message' => $e->getMessage(),'status' => 404];
        }catch (\Exception $e){
            DB::rollBack();
            return ['message' => 'Ha ocurrido un error inesperado. >'.$e->getMessage(),'status' => 500];
        }
    }
    /**
     * @param $tipo_ingreso
     * @param $proveedor_id
     * @param $periodo_id
     * @return Ingreso
     */
    public function register(
        $tipo_ingreso,
        $proveedor_id,
        $periodo_id
    ): Ingreso {
        $ingreso = new Ingreso();
        $ingreso->tipo_ingreso  = $tipo_ingreso;
        $ingreso->usuario_id    = Auth::user()->id_usuario;
        $ingreso->nro_ingreso   = 01;
        $ingreso->proveedor_id  = $proveedor_id;
        $ingreso->periodo_id    = $periodo_id;
        $ingreso->save();
        return $ingreso;
    }

    /**
     * @param $id
     * @param $data
     */
    public function update($id, $data)
    {
        Ingreso::where('id',$id)
            ->update([
                'proveedor_id' => $data->proveedor_id,
            ]);
    }

    public function setStatus($id)
    {
        /*$partida = Partida::withTrashed()->find($id);
        if($partida){
            if($partida->trashed()){
                $partida->restore();
                return ['message' => 'Partida activada.'];
            }
            $partida->delete();
            return ['message' => 'Se ha dado de baja a la partida.'];
        }
        throw new NotFoundHttpException("No existe la partida con el ID : {$id}");*/
    }

    public function delete($id)
    {
        $ingreso = $this->getById($id);
        foreach ($ingreso->detalleingresos()->get() as $detalle){
            $devolucion = Ingreso::join('detalle_ingreso as di','di.ingreso_id','=','ingreso.id')
                ->where('di.lote_id', $detalle->lote()->first()->id)
                ->where('ingreso.tipo_ingreso',Ingreso::DONACION)
                ->where('ingreso.periodo_id',Periodo::latest()->first()->id)
                ->first();
            if(($detalle->cantidad != $detalle->lote()->first()->stock) || $devolucion){
                throw new ConflictHttpException('No se puede anular el ingreso debido a que ya se realizaron movimientos.');
            }
        }
        $ingreso->delete();
    }

    public function getShowById($id)
    {
        return Ingreso::select(DB::raw('ROUND(SUM((di.cantidad*di.precio_u)), 2) as total'),
            'ingreso.*'
        )
            ->join('detalle_ingreso as di','di.ingreso_id','=','ingreso.id')
            ->with(['proveedor','compra',
                'usuario' => function($query){
                    $query->with('funcionario');
                },'detalleingresos'=> function($query){
                    $query->with(['lote' => function($query2){
                        $query2->with(['articulo' => function($query3){
                            $query3->with('unidad_medida');
                        }]);
                    }]);
                }])
            ->where('ingreso.id',$id)
            ->orderBy('ingreso.id','DESC')
            ->groupBy('ingreso.id')
            ->first();
    }

}
