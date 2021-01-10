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
        $del = '2021-08-01';
        $al = '2021-01-31';

        $periodo = Periodo::where('id',5)
            ->where('estado','=',Periodo::FINALIZADO)
            ->orWhere('estado','=',Periodo::EN_CURSO)
            ->withTrashed()
            ->first();
        $result = Lote::select(DB::raw("0 as s_salida,SUM(di.cantidad*lote.precio_u) as s_ingreso,a.linea as linea,CONCAT('linea',a.linea) as num_linea"))
            ->leftjoin('detalle_ingreso as di','di.lote_id','=','lote.id')
//            ->leftjoin('detalle_salida as ds','ds.lote_id','=','lote.id')
            ->leftjoin('ingreso as i','i.id','=','di.ingreso_id')
//            ->leftjoin('salida as s','s.id','=','ds.salida_id')
            ->leftjoin('articulo as a','a.id','=','lote.articulo_id')
            ->where('i.id', function($q) use ($del,$al,$periodo)
            {
                $q->from('ingreso as ig')
                    ->select('ig.id')
                    ->join('detalle_ingreso as dt','dt.ingreso_id','=','ig.id')
                    ->join('lote as l','l.id','=','dt.lote_id')
                    ->join('articulo as ar','ar.id','=','l.articulo_id')
                    ->where('ig.periodo_id',$periodo->id)
                    ->where('ig.created_at','<=',date('Y-m-d 03:00:00', strtotime($del)))
//                    ->whereBetween('ig.created_at',[
//                        date('Y-m-d H:s:i', strtotime($periodo->fecha_inicio)),
//                        date('Y-m-d 23:59:59', strtotime($del))
//                    ])
                    ->whereNull('ig.deleted_at')
                    ->whereColumn('ar.id','a.id')
                    ->orderBy('ig.id','ASC')
                    ->limit(1);
            })
            ->where('i.periodo_id',$periodo->id)
//            ->whereBetween('i.created_at',[
//                date('Y-m-d H:s:i', strtotime($periodo->fecha_inicio)),
//                date('Y-m-d 23:59:59', strtotime($periodo->fecha_fin))
//            ])
//            ->whereBetween('s.created_at',[
//                date('Y-m-d H:s:i', strtotime($periodo->fecha_inicio)),
//                date('Y-m-d 23:59:59', strtotime($periodo->fecha_fin))
//            ])
            //->where('s.periodo_id',$periodo->id)
            ->whereNull('i.deleted_at')
            //->whereNull('s.deleted_at')
            ->groupBy('a.id');

        $result2 = Lote::select(DB::raw("SUM(ds.cantidad*lote.precio_u) as s_salida,0 as s_ingreso,a.linea as linea,CONCAT('linea',a.linea) as num_linea"))
            ->leftjoin('detalle_salida as ds','ds.lote_id','=','lote.id')
            ->leftjoin('salida as s','s.id','=','ds.salida_id')
            ->leftjoin('articulo as a','a.id','=','lote.articulo_id')
            ->where('s.id', function($q) use ($del,$al,$periodo)
            {
                $q->from('salida as sa')
                    ->select('sa.id')
                    ->join('detalle_salida as dt','dt.salida_id','=','sa.id')
                    ->join('lote as l','l.id','=','dt.lote_id')
                    ->join('articulo as ar','ar.id','=','l.articulo_id')
                    ->where('sa.periodo_id',$periodo->id)
                    ->where('sa.created_at','<=',date('Y-m-d 03:00:00', strtotime($al)))
                    ->whereNull('sa.deleted_at')
                    ->whereColumn('ar.id','a.id')
                    ->orderBy('sa.id','ASC')
                    ->limit(1);
            })
            ->where('s.periodo_id',$periodo->id)
            ->whereNull('s.deleted_at')
            //->whereNull('s.deleted_at')
            ->groupBy('a.id')
            ->unionAll($result)
            ->get();

//        return DB::query()->fromSub($result2, 'q')
//            ->select('q.*')
//            ->get();

        return $result2->sum->s_ingreso - $result2->sum->s_salida;

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
