<?php


namespace App\Repositories;


use App\Models\Ingreso;
use App\Models\Lote;
use App\Models\Periodo;
use App\Models\Salida;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class GraphicsRepository
{

    public function getStockLinea()
    {
        $periodo = Periodo::latest()->withTrashed()
            ->where('estado','=',Periodo::FINALIZADO)
            ->orWhere('estado','=',Periodo::EN_CURSO)
            ->first();
        $ingreso = Lote::select(DB::raw("IFNULL(di.cantidad,0) as ingreso,0 as salida,a.linea as linea"))
            ->leftjoin('articulo as a','a.id','=','lote.articulo_id')
            ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
            ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
            ->where('i.periodo_id', $periodo? $periodo->id : NULL)
            ->whereBetween('i.created_at', [date('Y-m-d H:i:s', strtotime($periodo? $periodo->fecha_inicio : date("Y/m/d"))), date('Y-m-d 23:59:59', strtotime($periodo? $periodo->fecha_fin : date("Y/m/d")))])
            ->whereNull('i.deleted_at');

        $salida = Lote::select(DB::raw("0 as ingreso,IFNULL(ds.cantidad,0) as salida,a.linea as linea"))
            ->leftjoin('articulo as a','a.id','=','lote.articulo_id')
            ->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
            ->leftjoin('salida as s', 's.id', '=', 'ds.salida_id')
            ->where('s.periodo_id', $periodo? $periodo->id : NULL)
            ->whereBetween('s.created_at', [date('Y-m-d H:i:s', strtotime($periodo? $periodo->fecha_inicio : date("Y/m/d"))), date('Y-m-d 23:59:59', strtotime($periodo? $periodo->fecha_fin: date("Y/m/d")))])
            ->whereNull('s.deleted_at')
            ->unionAll($ingreso);
        return DB::query()->fromSub($salida, 'q')
            ->select(
                DB::raw("SUM(q.ingreso-q.salida) as stock,q.linea")
            )
            ->groupBy('q.linea')
            ->orderBy('q.linea','ASC')
            ->get();
    }

        /**
     * @return array
     */

    public function getCashFlowMothly()
    {
                $periodo = Periodo::latest()->withTrashed()
                    ->where('estado','=',Periodo::FINALIZADO)
                    ->orWhere('estado','=',Periodo::EN_CURSO)
                    ->first();
                $Moths  = ['01','02','03','04','05','06','07','08','09','10','11','12'];
                $data = [];

                foreach ($Moths as $moth){
                    $ingreso = Lote::select(
                        DB::raw("SUM(di.cantidad*lote.precio_u) as ingreso,0 as salida")
                    )
                        ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
                        ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
                        ->where('i.periodo_id', $periodo? $periodo->id : NULL)
                        ->whereMonth('i.created_at', '=', $moth)
                        //->whereBetween('i.created_at', [date('Y-m-d H:i:s', strtotime($periodo->fecha_inicio)), date('Y-m-d H:i:s', strtotime($fecha->created_at))])
                        ->whereNull('i.deleted_at');

                    $salida = Lote::select(
                        DB::raw("0 as ingreso,IFNULL(SUM(ds.cantidad*lote.precio_u),0) as salida")
                    )
                        ->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
                        ->leftjoin('salida as s', 's.id', '=', 'ds.salida_id')
                        ->where('s.periodo_id', $periodo? $periodo->id : NULL)
                        ->whereMonth('s.created_at', '=', $moth)
                        //->whereBetween('S.created_at', [date('Y-m-d H:i:s', strtotime($periodo->fecha_inicio)), date('Y-m-d H:i:s', strtotime($fecha->created_at))])
                        ->whereNull('s.deleted_at')
                        ->unionAll($ingreso);
                    $result = DB::query()->fromSub($salida, 'q')
                        ->select(
                            DB::raw("SUM(q.ingreso)as ingresos,SUM(q.salida) as salidas")
                        )->first();

                    array_push($data,$result);
                }
                return $data;
    }
    /**
     * @return array
     */
    public function getCashFlow()
    {
        $periodo = Periodo::latest()->withTrashed()
            ->where('estado','=',Periodo::FINALIZADO)
            ->orWhere('estado','=',Periodo::EN_CURSO)
            ->first();
        $periodo = $periodo ? $periodo : NULL;
        $ingreso = Ingreso::select('created_at')->where('periodo_id',$periodo? $periodo->id : NULL);
        $salidas  = Salida::select('created_at')
            ->where('periodo_id',$periodo? $periodo->id : NULL)
            ->unionAll($ingreso)
            ->oldest()
            ->get();
        $saldo = [];
        $fechas = [];
        foreach ($salidas as $fecha){
            $ingreso = Lote::select(
                DB::raw("di.cantidad*lote.precio_u as ingreso,0 as salida,'".$fecha->created_at."' as fecha")
            )
                ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
                ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
                ->where('i.periodo_id', $periodo? $periodo->id : NULL)
                ->whereBetween('i.created_at', [date('Y-m-d H:i:s', strtotime($periodo? $periodo->fecha_inicio : date("Y/m/d"))), date('Y-m-d H:i:s', strtotime($fecha->created_at))])
                ->whereNull('i.deleted_at');

            $salida = Lote::select(
                DB::raw("0 as ingreso,IFNULL(ds.cantidad*lote.precio_u,0) as salida,'".$fecha->created_at."' as fecha")
            )
                ->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
                ->leftjoin('salida as s', 's.id', '=', 'ds.salida_id')
                ->where('s.periodo_id', $periodo? $periodo->id : NULL)
                ->whereBetween('s.created_at', [date('Y-m-d H:i:s', strtotime($periodo ? $periodo->fecha_inicio : date("Y/m/d"))), date('Y-m-d H:i:s', strtotime($fecha->created_at))])
                ->whereNull('s.deleted_at')
                ->unionAll($ingreso);
            $value = DB::query()->fromSub($salida, 'q')
                ->select(
                    DB::raw('SUM(q.ingreso-q.salida) as saldo,q.fecha')
                )->groupBy('q.fecha')->first();
            array_push($saldo,$value);
        }
        return $saldo;
    }

    /**
     * @return mixed
     */
    public function getLotesSalida() {


        $periodo = Periodo::latest()->withTrashed()
            ->where('estado','=',Periodo::FINALIZADO)
            ->orWhere('estado','=',Periodo::EN_CURSO)
            ->first();
        $periodo = $periodo ? $periodo->id : NULL;
        return Articulo::select(DB::raw('IFNULL(SUM(lote.stock),0) as stock,IFNULL(SUM(lote.saldo),0) as saldo'),
            'articulo.nombre as nombre','articulo.id as id','articulo.codigo as codigo','um.nombre as unidad_nombre','um.id as unidad_id')
            ->leftjoin('lote','lote.articulo_id','=','articulo.id')
            ->leftjoin('unidad_medida as um','um.id','=','lote.unidad_medida_id')
            ->leftjoin('detalle_ingreso as di','di.lote_id','=','lote.id')
            ->leftjoin('ingreso as i','i.id','=','di.ingreso_id')
            ->where('i.periodo_id', '=', $periodo)
            ->whereNull('i.deleted_at')
            ->groupBy('lote.unidad_medida_id','lote.articulo_id')
            ->where('lote.stock','<>',0)
            ->get();
    }


    /**
     * @param $id
     * @return Lote
     */
    public function getById($id) : Lote
    {
        $lote = Lote::find($id);
        if(!$lote){
            throw new NotFoundHttpException("No existe el lote con el ID : {$id}");
        }
        return $lote;
    }

    public function getOldestByArticulo($articulo)
    {
        return Lote::select('lote.*')
            ->whereHas('articulo',function ($query) use($articulo) {
                $query->where('id','=',$articulo);

            })
            ->leftjoin('detalle_ingreso as di','di.lote_id','=','lote.id')
            //->leftjoin('detalle_salida as ds','ds.lote_id','=','lote.id')
            ->leftjoin('ingreso as i','i.id','=','di.ingreso_id')
            // ->leftjoin('salida as s','s.id','=','ds.salida_id')
            ->where('i.periodo_id', '=', Periodo::latest()->first()->id)
            ->whereNull('i.deleted_at')
            // ->whereNull('s.deleted_at')
            ->where('stock','<>',0)
            ->with('articulo')
            ->oldest()
            ->get();

    }


    /**
     * @param $stock
     * @param $saldo
     * @param $articulo_id
     * @return Lote
     */
    public function register(
        $stock, $saldo, $precio,$medida,$marca, $articulo_id
    ): Lote {
        $lote = new Lote();
        $lote->stock                = $stock;
        $lote->saldo                = $saldo;
        $lote->precio_u             = $precio;
        $lote->marca                = $marca;
        $lote->unidad_medida_id     = $medida;
        $lote->articulo_id          = $articulo_id;
        $lote->save();
        return $lote;
    }


    /**
     * @param $id
     * @param $stock
     * @param $saldo
     */
    public function update($id, $stock,$precio, $saldo)
    {
        Lote::where('id',$id)
            ->update([
                'stock'        => $stock,
                'saldo'        => $saldo,
                'precio_u'     => $precio,
            ]);
    }

    public function Delete($id)
    {
        $lote = Lote::find($id);
        if($lote){
            $lote->delete();
            return ['message' => 'Se ha dado de baja al lote'];
        }
        throw new NotFoundHttpException("No existe el lote con el ID : {$id}");
    }

    public function setStockSaldo($id,$stock,$saldo)
    {
        $lote = Lote::find($id);
        $lote->stock = $lote->stock + $stock;
        $lote->saldo = $lote->saldo + $saldo;
        $lote->save();
    }

    public function setStockSaldoSalida($id,$stock,$saldo)
    {
        Lote::where('id',$id)->update([
            'stock' => $stock,
            'saldo' => $saldo
        ]);
    }


}
