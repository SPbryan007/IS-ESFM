<?php


namespace App\Repositories;
use App\Models\Donacion;
use App\Models\Compra;
use App\Models\Ingreso;

use App\Models\Periodo;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\ConflictHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class IngresoRepository
{
    /**
     * @var DetalleIngresoRepository
     */
    private $detalleIngresoRepository;
    /**
     * @var LoteRepository
     */
    private $loteRepository;

    /**
     * IngresoRepository constructor.
     * @param DetalleIngresoRepository $detalleIngresoRepository
     * @param LoteRepository $loteRepository
     */
    public function __construct(DetalleIngresoRepository $detalleIngresoRepository, LoteRepository $loteRepository)
   {
       $this->detalleIngresoRepository = $detalleIngresoRepository;
       $this->loteRepository = $loteRepository;
   }

    public function getAll($withTrashed)
    {
        $periodo = Periodo::latest()->first();
        $periodo = $periodo ? $periodo->id : NULL;
       return Ingreso::select(DB::raw('ROUND(SUM((di.cantidad*lote.precio_u)), 2) as total'),
                'ingreso.*'
            )
            ->leftjoin('detalle_ingreso as di','di.ingreso_id','=','ingreso.id')
            ->leftjoin('lote','lote.id','=','di.lote_id')
            ->with(['proveedor' => function($query){
                $query->withTrashed();
            },'compra','donacion'])
            ->where('periodo_id',$periodo)
            ->orderBy('ingreso.id','DESC')
            ->groupBy('ingreso.id')
            ->withTrashed(filter_var($withTrashed,FILTER_VALIDATE_BOOLEAN))
            ->get();
    }

    public function queryAll($del,$al,$periodo)
    {
        return Ingreso::select(DB::raw('ROUND(SUM((di.cantidad*lote.precio_u)), 2) as total'),
            'ingreso.*'
        )
            ->leftjoin('detalle_ingreso as di','di.ingreso_id','=','ingreso.id')
            ->leftjoin('lote','lote.id','=','di.lote_id')
            ->with(['proveedor' => function($query){
                $query->withTrashed();
            },'compra','donacion','usuario' => function($query){
                $query->with(['funcionario' => function($query){
                    $query->withTrashed();
                }]);
                $query->withTrashed();
            }])
            ->where('periodo_id',$periodo)
            ->whereBetween('ingreso.created_at', [date('Y-m-d H:i:s', strtotime($del)), date('Y-m-d 23:59:59', strtotime($al))])
            ->orderBy('ingreso.id','DESC')
            ->groupBy('ingreso.id')
            ->get();
    }


    /**
     * @param $id
     * @return Ingreso
     */
    public function getById($id) : Ingreso
    {
        $ingreso = Ingreso::find($id);
        if(!$ingreso){
            throw new NotFoundHttpException("No existe el ingreso con el ID : {$id}");
        }
        return $ingreso;
    }

    public function compra($data)
    {
        try {
            $periodo = Periodo::latest()->first();

            $now = Carbon::now();
            $last_date= Ingreso::latest()->first();

            if($last_date){
                if(!$now->greaterThan($last_date->created_at) ){
                    return ['message' => 'No se puede realizar el ingreso en fecha '.$now->format('d-m-Y').' debido a que ya exiten ingresos efectuados hasta la fecha '.date('d/m/Y',strtotime($last_date->created_at)),'status' => 409];
                }
            }
            if(!Carbon::now()->between($periodo->fecha_inicio, $periodo->fecha_fin)){
                return ['message' => 'No se puede realizar el ingreso en fecha '.$now->format('d-m-Y').', La fecha actual no se encuentra dentro el rango de fechas del periodo contable en curso','status' => 409];
            }
            DB::beginTransaction();
            $ingreso = $this->register(Ingreso::COMPRA,$data->proveedor,Periodo::latest()->first()->id,null,$data->observacion);
            $compra = new Compra();
            $compra->id_compra          = $ingreso->id;
            $compra->tipo_compra        = $data->tipo_compra;
            $compra->tipo_comprobante   = $data->tipo_comprobante;
            $compra->nro_comprobante    = $data->nro_comprobante;
            $compra->nro_solicitud    = $data->nro_solicitud;
            $compra->nro_autorizacion   = $data->nro_autorizacion;
            $compra->fecha_comprobante  = $data->fecha_comprobante;
            $compra->fecha_solicitud    = $data->fecha_solicitud;
            $compra->save();
            foreach ($data->detalle_ingreso as $detalle){
                $lote = $this->loteRepository->register(
                    $detalle['cantidad'],
                    $detalle['total'],
                    ($detalle['total']/$detalle['cantidad']),
                    $detalle['unidad_medida'],
                    $detalle['marca'],
                    $detalle['articulo']
                );
                $this->detalleIngresoRepository->register(
                    $detalle['cantidad'],
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

    public function donacion($data)
    {
        try {
            $periodo = Periodo::latest()->first();
            $now = Carbon::now();
            $last_date= Ingreso::latest()->first();
            if($last_date){
                if(!$now->greaterThan($last_date->created_at) ){
                    return ['message' => 'No se puede realizar el ingreso en fecha '.$now->format('d-m-Y').' debido a que ya exiten ingresos efectuados hasta la fecha '.date('d/m/Y',strtotime($last_date->created_at)),'status' => 409];
                }
            }
            if(!Carbon::now()->between($periodo->fecha_inicio, $periodo->fecha_fin)){
                return ['message' => 'No se puede realizar el ingreso en fecha '.$now->format('d-m-Y').', La fecha actual no se encuentra dentro el rango de fechas del periodo contable en curso','status' => 409];
            }
            DB::beginTransaction();
            $ingreso = $this->register(Ingreso::DONACION,$data->proveedor,Periodo::latest()->first()->id,null,$data->observacion);
            $compra = new Donacion();

            $compra->id_donacion     = $ingreso->id;
            $compra->tipo_donacion   = $data->tipo_donacion;
            $compra->nro_acta        = $data->nro_acta;
            $compra->fecha_acta      = $data->fecha_acta;
            $compra->save();
            foreach ($data->detalle_ingreso as $detalle){
                $lote = $this->loteRepository->register(
                    $detalle['cantidad'],
                    $detalle['total'],
                    ($detalle['total']/$detalle['cantidad']),
                    $detalle['unidad_medida'],
                    $detalle['marca'],
                    $detalle['articulo']
                );
                $this->detalleIngresoRepository->register(
                    $detalle['cantidad'],
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
        $periodo_id,
        $fecha_inicio,
        $observacion
    ): Ingreso {


        $ingreso = new Ingreso();
        $ingreso->tipo_ingreso  = $tipo_ingreso;
        $ingreso->usuario_id    = Auth::user()->id_usuario;
        $ingreso->nro_ingreso   = '000';
        $ingreso->observacion   = $observacion;
        $ingreso->proveedor_id  = $proveedor_id;
        $ingreso->periodo_id    = $periodo_id;
        if($tipo_ingreso == Ingreso::INV_INICIAL){
            $ingreso->created_at = date('Y-m-d 00:00:00', strtotime($fecha_inicio));
        }
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
        $last= Ingreso::where('periodo_id',Periodo::where('estado',Periodo::EN_CURSO)->latest()->first()->id)->latest()->first();
        if($last->id != $id){
            throw new ConflictHttpException('No se puede anular el ingreso debido a que ya se registraron ingresos');
        }
        $ingreso = $this->getById($id);
        if($ingreso->tipo_ingreso == Ingreso::INV_INICIAL){

            throw new ConflictHttpException('No se puede anular el inventario inicial.');
        }
        DB::beginTransaction();
        foreach ($ingreso->detalleingresos()->get() as $detalle){
            $devolucion = Ingreso::join('detalle_ingreso as di','di.ingreso_id','=','ingreso.id')
                ->where('di.lote_id', $detalle->lote()->first()->id)
                ->where('ingreso.tipo_ingreso',$ingreso->tipo_ingreso)
                ->where('ingreso.periodo_id',Periodo::latest()->first()->id)
//                ->where('ingreso.periodo_id',Periodo::latest()->first()->id)
                ->first();
            if(($detalle->cantidad != $detalle->lote()->first()->stock) || !$devolucion){
                DB::rollBack();
                throw new ConflictHttpException('No se puede anular el ingreso debido a que ya se realizaron movimientos.');
            }
            $this->loteRepository->Delete($detalle->lote()->first()->id);
        }
//        if($ingreso->detalleingresos()->get()[0]->cantidad != $total){
//            throw new ConflictHttpException('No se puede anular el ingreso debido a que ya se realizaron movimientos.');
//        }
        $ingreso->delete();
        DB::commit();
    }

    public function getShowById($id)
    {
        return Ingreso::select(DB::raw('ROUND(SUM((di.cantidad*lote.precio_u)), 2) as total'),
            'ingreso.*'
        )
            ->leftjoin('detalle_ingreso as di','di.ingreso_id','=','ingreso.id')
            ->leftjoin('lote','lote.id','=','di.lote_id')
            ->with(['proveedor' => function($query){
                $query->withTrashed();
            },'compra','donacion',
                'usuario' => function($query){
                    $query->with(['funcionario' => function($query){
                        $query->withTrashed();
                    }]);
                    $query->withTrashed();
            },'detalleingresos'=> function($query){
                $query->where('cantidad','<>',0);
                $query->with(['lote' => function($query2){
                    $query2->with(['articulo' => function($query3){
//                        $query3->with(['unidad_medida' => function($query){
//                            $query->withTrashed();
//                        }]);
                        $query3->withTrashed();
                    },'unidad_medida' => function($query){
                        $query->withTrashed();
                    }]);

                    $query2->withTrashed();
                }]);
            }])
            ->withTrashed()

            ->where('ingreso.id',$id)
            ->orderBy('ingreso.id','DESC')
            ->groupBy('ingreso.id')
          //  ->groupBy('lote.unidad_medida_id','ingreso.id')
            ->first();
    }

}
