<?php


namespace App\Repositories;


use App\Models\Articulo;
use App\Models\Ingreso;
use App\Models\Lote;
use App\Models\Periodo;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class LoteRepository
{


    /**
     * @return mixed
     */
    public function getAll()
    {

//        Lote::select(
//           DB::raw('lote.*')
//       )
//            ->leftjoin('detalle_ingreso as di','di.lote_id','=','lote.id')
//           ->leftjoin('articulo as a','a.id','=','lote.articulo_id')
//            ->leftjoin('ingreso as i','i.id','=','di.ingreso_id')
//
//            ->with(['detalleingreso' => function($query){
//                    $query->withTrashed();
//                    $query->oldest();
//            }])
//           ->where('i.periodo_id', '=', 2)
//           ->whereNull('i.deleted_at')
////            ->groupBy('a.id','i.created_at')
//
//            ->get();

//        $entradas = Lote::select(
//            DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)) as c_entrada,SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) as s_entrada'),
//            DB::raw('0 as c_salida, 0 as s_salida'),
//            'a.nombre as articulo'
//        )
//            ->join('articulo as a', 'lote.articulo_id', '=', 'a.id')
//            ->join('partida as p', 'p.id', '=', 'a.partida_id')
//            ->join('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
//            ->join('ingreso as i', 'i.id', '=', 'di.ingreso_id')
//            ->where('i.periodo_id', 1)
//            ->whereNull('i.deleted_at')
//            ->where('lote.precio_u', '<>', 0)
//            ->groupBy('a.id', 'a.linea', 'lote.precio_u', 'i.created_at')
//            ->orderBy('p.codigo', 'asc')
//            ->orderBy('a.nombre', 'asc');
//        $salidas = Lote::select(
//            DB::raw('0 as c_entrada, 0 as s_entrada'),
//            DB::raw('SUM(IFNULL(ds.cantidad,0)) as c_salida,SUM(IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0)) as s_salida'),
//            'a.nombre as articulo'
//        )
//            ->join('articulo as a', 'lote.articulo_id', '=', 'a.id')
//            ->join('partida as p', 'p.id', '=', 'a.partida_id')
//            ->join('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
//            ->join('salida as s', 's.id', '=', 'ds.salida_id')
//            ->where('s.periodo_id',1)
//            ->whereNull('s.deleted_at')
//            ->where('lote.precio_u', '<>', 0)
//            ->groupBy('a.id', 'a.linea', 'lote.precio_u', 's.created_at')
//            ->orderBy('p.codigo', 'asc')
//            ->orderBy('a.nombre', 'asc')
//            ->unionAll($entradas);
//
//        return DB::query()->fromSub($salidas, 'q')
//            ->select(
//                DB::raw('SUM(c_entrada) as  cantidad_entrada')
//
//            )
//            ->groupBy('articulo')
//            ->get();


//        $periodo = Periodo::latest()->withTrashed()->first();
//        $periodo = $periodo ? $periodo->id : NULL;
//        $query = Articulo::select(DB::raw('0 as stock,0 as saldo'),
//            'articulo.nombre as nombre','articulo.id as id','articulo.codigo as codigo','um.sigla as sigla','um.nombre as unidad')
//            ->leftjoin('unidad_medida as um','um.id','=','articulo.unidad_medida_id')
//            ->doesntHave('lotes.detalleingreso.ingreso')
//            ->groupBy('articulo.id');
//        return Articulo::select(DB::raw('IFNULL(SUM(lote.stock),0) as stock,IFNULL(SUM(lote.saldo),0) as saldo'),
//            'articulo.nombre as nombre','articulo.id as id','articulo.codigo as codigo','um.sigla as sigla','um.nombre as unidad')
//            ->leftjoin('lote','lote.articulo_id','=','articulo.id')
//            ->leftjoin('unidad_medida as um','um.id','=','articulo.unidad_medida_id')
//            ->leftjoin('detalle_ingreso as di','di.lote_id','=','lote.id')
//            ->leftjoin('ingreso as i','i.id','=','di.ingreso_id')
//            ->where('i.periodo_id', '=', $periodo)
//            ->whereNull('i.deleted_at')
//            ->groupBy('articulo.id')
//            ->union($query)
//            ->with(['lotes' => function($query) use($periodo){
//                $query->with('detalleingreso');
//                $query->where('stock','<>',0);
//                $query->whereHas('detalleingreso',function ($query2) use($periodo){
//                    return $query2->whereHas('ingreso',function ($query3) use($periodo){
//                        return  $query3->where('periodo_id',$periodo);
//                    });
//                });
//            }])
//            ->get();









        $periodo = Periodo::latest()->withTrashed()
                        ->where('estado','=',Periodo::FINALIZADO)
                        ->orWhere('estado','=',Periodo::EN_CURSO)
                        ->first();
        $periodo = $periodo ? $periodo->id : NULL;
        $query = Articulo::select(DB::raw('0 as stock,0 as saldo'),
            'articulo.nombre as nombre','articulo.id as id','articulo.codigo as codigo')
                            ->doesntHave('lotes.detalleingreso.ingreso')
                            ->groupBy('articulo.id');
        return Articulo::select(DB::raw('IFNULL(SUM(lote.stock),0) as stock,IFNULL(SUM(lote.saldo),0) as saldo'),
            'articulo.nombre as nombre','articulo.id as id','articulo.codigo as codigo')
            ->leftjoin('lote','lote.articulo_id','=','articulo.id')
            ->leftjoin('detalle_ingreso as di','di.lote_id','=','lote.id')
            ->leftjoin('ingreso as i','i.id','=','di.ingreso_id')
            ->where('i.periodo_id', '=', $periodo)
            ->whereNull('i.deleted_at')
            ->groupBy('articulo.id')
            ->union($query)
            ->with(['lotes' => function($query) use($periodo){
                $query->with(['detalleingreso','unidad_medida']);
                $query->where('stock','<>',0);
                $query->whereHas('detalleingreso',function ($query2) use($periodo){
                    return $query2->whereHas('ingreso',function ($query3) use($periodo){
                        return  $query3->where('periodo_id',$periodo);
                    });
                });
            }])
            ->get();
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
