<?php


namespace App\Repositories;

use App\Models\Periodo;
use App\Models\Salida;
use Carbon\Carbon;
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
                $query->with(['funcionario' => function($query2){
                    $query2->withTrashed();
                }, 'unidad' => function($query3){
                    $query3->withTrashed();
                }]);
                $query->withTrashed();
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
            $periodo = Periodo::latest()->first();

            $now = Carbon::now();
            $last_date= Salida::latest()->first();
            if($last_date){
                if(!$now->greaterThan($last_date->created_at) ){
                    return ['message' => 'No se puede realizar la salida en fecha '.$now->format('d-m-Y').' debido a que ya exiten salidas efectuados hasta la fecha '.date('d/m/Y',strtotime($last_date)),'status' => 409];
                }
            }
            if(!Carbon::now()->between($periodo->fecha_inicio, $periodo->fecha_fin)){
                return ['message' => 'No se puede realizar el ingreso en fecha '.$now->format('d-m-Y').', La fecha actual no se encuentra dentro el rango de fechas del periodo contable en curso','status' => 409];
            }
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
                $cantidad = $detalle['cantidad']; // 14
                $articulo = $this->articuloRepository->getTotal($detalle['articulo']);
                if($detalle['cantidad'] > $articulo->stock) // 50 > 140 |
                    throw new NotFoundHttpException('No existen suficientes suministros del articulo '.$detalle['articulo']);
                $lotes = $this->loteRepository->getOldestByArticulo($detalle['articulo']);
                foreach ($lotes as $lote){
                    if($cantidad <= $lote->stock){ // 14 <= 10
                        $this->loteRepository->setStockSaldoSalida(
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
                        $this->loteRepository->setStockSaldoSalida($lote->id,0,0);
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
        $last= Salida::where('periodo_id',Periodo::where('estado',Periodo::EN_CURSO)->latest()->first()->id)->latest()->first();
        if($last->id != $id){
            throw new ConflictHttpException('No se puede anular la salida debido a que ya se registraron otras salidas');
        }
        $salida = $this->getById($id);
        DB::beginTransaction();
        foreach ($salida->detallesalidas()->get() as $detalle){
            try {
                $this->loteRepository->setStockSaldo(
                    $detalle->lote()->first()->id,
                    $detalle->cantidad,
                    $detalle->lote()->first()->precio_u*$detalle->cantidad
                );
            }catch (\Exception $e){
                DB::rollBack();
                throw new \Exception('Ha ocurrido un error al anular la salida '.$e->getMessage());
            }
        }
        DB::commit();
        $salida->delete();
    }

    public function getShowById($id)
    {
        return Salida::select(DB::raw('ROUND(SUM((ds.cantidad*lote.precio_u)), 2) as total'),
            'salida.*',DB::raw('SUM(ds.cantidad) as cantidad')
        )
            ->leftjoin('detalle_salida as ds','ds.salida_id','=','salida.id')
            ->leftjoin('lote','lote.id','=','ds.lote_id')
            ->with(['autorizador' => function($query){ $query->withTrashed();},
                'usuario' =>function($query){
                $query->with(['funcionario' => function($query){
                    $query->withTrashed();
                }]);
                $query->withTrashed();
            },'verificador' => function($query){
                $query->withTrashed();
            },'solicitante' => function($query){
                    $query->with(['funcionario' => function($query){
                        $query->withTrashed();
                    },'unidad' => function($query){
                        $query->withTrashed();
                    }]);
                    $query->withTrashed();
                    },
                'detallesalidas'=> function($query){
                    $query->with(['lote' => function($query2){
                        $query2->with(['articulo' => function($query3){
                            $query3->withTrashed();
                        },'unidad_medida' => function($query){
                            $query->withTrashed();
                        }]);
                        $query2->withTrashed();
                    }]);
                }

                ])
            ->withTrashed()
            ->where('salida.id',$id)
            ->orderBy('salida.id','DESC')
            ->groupBy('salida.id')
            ->first();

//        $detalle = Salida::select(DB::raw('ROUND(SUM((ds.cantidad*lote.precio_u)), 2) as subtotal'),
//            DB::raw('SUM(ds.cantidad) as cantidad'),
//            DB::raw('a.nombre as articulo,a.codigo as codigo,um.nombre as unidad_medida,lote.precio_u as precio_u')
//        )
//            ->leftjoin('detalle_salida as ds','ds.salida_id','=','salida.id')
//            ->leftjoin('lote','lote.id','=','ds.lote_id')
//            ->leftjoin('unidad_medida as um','um.id','=','lote.unidad_medida_id')
//            ->leftjoin('articulo as a','lote.articulo_id','=','a.id')
//            ->withTrashed()
//            ->where('salida.id',$id)
//            ->orderBy('salida.id','DESC')
//            ->groupBy('lote.unidad_medida_id','lote.precio_u','a.id','salida.id')
//            ->get();
//
//        return ['salida' => $salida,'detallesalidas' => $detalle];
    }

}
