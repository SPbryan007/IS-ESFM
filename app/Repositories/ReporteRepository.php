<?php


namespace App\Repositories;



use App\Models\Articulo;
use App\Models\Lote;
use App\Models\Partida;
use App\Models\Periodo;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ReporteRepository
{
    /**
     * @var PartidaRepository
     */
    private $partidaRepository;
    /**
     * @var UnidadMedidaRepository
     */
    private $unidadMedidaRepository;

    /**
     * ArticuloRepository constructor.
     * @param PartidaRepository $partidaRepository
     * @param UnidadMedidaRepository $unidadMedidaRepository
     */
    public function __construct(
        PartidaRepository $partidaRepository,
        UnidadMedidaRepository $unidadMedidaRepository
    )
    {

        $this->partidaRepository = $partidaRepository;
        $this->unidadMedidaRepository = $unidadMedidaRepository;
    }
//date('Y-m-d H:i:s',strtotime($data->del))

    /**
     * @param $del
     * @param $al
     * @param $id
     * @return Articulo[]|\Illuminate\Database\Eloquent\Collection
     */
    public function SaldosAlmacen($del, $al, $periodo)
    {
        $inicial = Lote::select(


            DB::raw("IFNULL((SELECT SUM(DISTINCT IFNULL (di.cantidad,0))
                           WHERE  i.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($al))) . "
                           GROUP BY a.id , lote.precio_u),0) as c_entrada"),
            DB::raw("IFNULL((SELECT SUM(DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0))
                           WHERE  i.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($al))) . "
                           GROUP BY a.id,lote.precio_u),0) as s_entrada"),
            DB::raw("IFNULL((SELECT SUM(IFNULL (ds.cantidad,0))
                           WHERE  i.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($al))) . "
                           GROUP BY a.id,lote.precio_u),0) as c_salida"),
            DB::raw("IFNULL((SELECT SUM(IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0))
                           WHERE  i.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($al))) . "
                           GROUP BY a.id,lote.precio_u),0) as s_salida"),



            //     DB::raw('SUM(IFNULL(ds.cantidad,0)) as c_salida,SUM(IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0)) as s_salida'),
//            DB::raw("IFNULL((SELECT (SUM(DISTINCT IFNULL(di.cantidad,0)))
//                FROM lote as l
//                WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($al))) . "
//                GROUP BY `a`.`id`,`l`.`precio_u`,l.id),0)
//                as c_entrada"),
//            DB::raw("IFNULL((SELECT (SUM(DISTINCT IFNULL(di.cantidad,0)) - SUM(IFNULL(ds.cantidad,0)))
//                FROM lote as l
//                WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
//                GROUP BY `a`.`id`,`l`.`precio_u`,l.id),0)
//                as c_inicial"),
//DB::raw('0 as s_final'),

            DB::raw("IFNULL((SELECT (SUM(DISTINCT IFNULL(di.cantidad,0)) - SUM(IFNULL(ds.cantidad,0)))
                WHERE i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
                ),0)
                as c_inicial"),
            DB::raw("SUM(DISTINCT IFNULL(di.cantidad,0)) - SUM(IFNULL(ds.cantidad,0)) as c_final"),
            DB::raw("IFNULL((SELECT (SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u))

                    WHERE  i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
                    ),0)
                    as s_inicial"),
            DB::raw("(SUM(DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u)) as s_final"),

//   DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u ) as s_inicial'),
            'p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea")

        )
            ->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
            ->leftjoin('partida as p', 'p.id', '=', 'a.partida_id')
            ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
            ->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
            ->leftjoin('salida as s', 's.id', '=', 'ds.salida_id')
            ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
            ->where('i.periodo_id', 1)
           // ->where('i.created_at', '>=', date('Y-m-d H:i:s', strtotime($del)) )
            ->where('i.created_at', '<=', date('Y-m-d H:i:s', strtotime($al)) ) //Revisar porque pude que salidas no exista
            ->whereNull('i.deleted_at')
            ->whereNull('s.deleted_at')
            ->where('lote.precio_u', '<>', 0)
            ->groupBy('a.id','lote.precio_u','i.created_at');


        return DB::query()->fromSub($inicial, 'q')
            ->select(
                DB::raw('SUM(q.c_entrada) as c_entrada ,SUM(q.c_salida) as c_salida,SUM(q.s_entrada) as s_entrada,SUM(q.s_salida) as s_salida'),
                DB::raw('SUM(q.c_inicial) as c_inicial'),
                DB::raw('SUM(q.c_final) as c_final'),
                DB::raw('SUM(q.s_inicial) as s_inicial'),
                DB::raw('SUM(q.s_final) as s_final'),
                'q.articulo','q.partida','q.precio_u', 'q.linea','q.num_linea'
            )
            ->groupBy('q.articulo','q.partida','q.linea','q.precio_u','q.num_linea')->get();

        $entradas = Lote::select(
            DB::raw( 'a.id as id'),
            DB::raw('IFNULL(di.cantidad,0) as c_entrada,IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0) as s_entrada'),
            DB::raw('0 as c_salida, 0 as s_salida'),
            DB::raw('0 as c_inicial'),
            DB::raw('0 as c_final'),
            DB::raw('0 as s_inicial'),
            DB::raw('0 as s_final')
        )
            ->join('articulo as a', 'lote.articulo_id', '=', 'a.id')
            ->join('partida as p', 'p.id', '=', 'a.partida_id')
            ->join('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
            ->join('ingreso as i', 'i.id', '=', 'di.ingreso_id')
            ->where('i.periodo_id', 1)
            ->whereNull('i.deleted_at')
            ->where('lote.precio_u', '<>', 0);
//            ->groupBy('a.id','p.codigo','a.linea','lote.precio_u','lote.id','i.created_at')
//            ->orderBy('p.codigo', 'asc')
//            ->orderBy('a.nombre', 'asc');

        $salidas = Lote::select(
            DB::raw( 'a.id as id'),
            DB::raw('0 as c_entrada, 0 as s_entrada'),
            DB::raw('IFNULL(ds.cantidad,0) as c_salida,IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0) as s_salida'),
            DB::raw('0 as c_inicial'),
            DB::raw('0 as c_final'),
            DB::raw('0 as s_inicial'),
            DB::raw('0 as s_final')

        )
            ->join('articulo as a', 'lote.articulo_id', '=', 'a.id')
            ->join('partida as p', 'p.id', '=', 'a.partida_id')
            ->join('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
            ->join('salida as s', 's.id', '=', 'ds.salida_id')
            ->where('s.periodo_id',1)
            ->whereNull('s.deleted_at')
            ->where('lote.precio_u', '<>', 0)
//            ->groupBy('a.id', 'p.codigo','a.linea','lote.precio_u' ,'lote.id','s.created_at')
//            ->orderBy('p.codigo', 'asc')
//            ->orderBy('a.nombre', 'asc')
            ->unionAll($entradas);

//        return DB::query()->fromSub($inicial,'q')
//            ->select('q.*')
//            ->whereDate('i.created_at', '>=', $del)
//            ->whereDate('i.created_at', '<=', $al)


//        return DB::query()->fromSub($inicial, 'q')
//            ->select(
//                DB::raw('SUM(q.c_entrada) as c_entrada ,SUM(q.s_entrada) as s_entrada'),
//                DB::raw('SUM(q.c_salida) as c_salida,SUM(q.s_salida) as s_salida'),
//                DB::raw('SUM(q.c_inicial) as c_inicial'),
//                DB::raw('SUM(q.c_final) as c_final'),
//                DB::raw('SUM(q.s_inicial) as s_inicial'),
//                DB::raw('SUM(q.s_final) as s_final'),
//
////'q.lote as lote','q.partida as partida', 'q.articulo as articulo', 'q.precio_u as precio_u', 'q.linea as linea', 'q.num_linea as num_linea'
//                'lote.id as lote', 'p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea")
//            )
//            ->join('articulo as a', 'a.id', '=', 'q.id')
//            ->join('lote','lote.articulo_id','=','a.id')
//            ->join('partida as p', 'p.id', '=', 'a.partida_id')
//            ->join('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
//            ->join('ingreso as i', 'i.id', '=', 'di.ingreso_id')
//            ->whereDate('i.created_at', '>=', $del)
//            ->whereDate('i.created_at', '<=', $al)
//            ->where('i.periodo_id', $periodo)
//            ->whereNull('i.deleted_at')
//            ->where('lote.precio_u', '<>', 0)
//
//            ->groupBy('a.id','p.codigo', 'a.linea','lote.id')->get();

//        return DB::query()->fromSub($query, 'q')
//            ->select(
//                DB::raw('SUM(q.c_entrada) as c_entrada ,SUM(q.c_salida) as c_salida,SUM(q.s_entrada) as s_entrada,SUM(q.s_salida) as s_salida'),
//                DB::raw('SUM(q.c_inicial) as c_inicial'),
//                DB::raw('SUM(q.c_final) as c_final'),
//                DB::raw('SUM(q.s_inicial) as s_inicial'),
//                DB::raw('SUM(q.s_final) as s_final'),
//
//                'q.articulo','q.partida','q.precio_u', 'q.linea','q.num_linea'
//
//            )
//            ->groupBy('q.articulo','q.partida','q.linea','q.precio_u','q.num_linea')->get();

    }

    public function ReporteGeneral($del,$al,$periodo)
    {
        $ingresos =  Lote::select(
            DB::raw('a.linea as linea,a.codigo as codigo,a.nombre as articulo,i.nro_ingreso as ni,null as ns,um.nombre as medida,i.created_at as fecha,lote.precio_u as precio_u'),
            DB::raw("CONCAT('linea',a.linea) as num_linea"),
            DB::raw('null as unidad,0 as c_inicial,0 as s_inicial,di.cantidad as c_ingreso'),
            DB::raw('(di.cantidad*lote.precio_u) as s_ingreso'),
            DB::raw('0 as c_salida,0 as s_salida, di.cantidad as c_final,(di.cantidad*lote.precio_u) as s_final')
        )
            ->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
            ->leftjoin('unidad_medida as um', 'um.id', '=', 'a.unidad_medida_id')
            ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
            ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
            ->where('i.periodo_id', $periodo)
            ->whereNull('i.deleted_at')
            ->whereBetween('i.created_at',[date('Y-m-d H:i:s', strtotime($del)),date('Y-m-d H:i:s', strtotime($al))])
            ->where('lote.precio_u', '<>', 0);

        $salidas =  Lote::select(
            DB::raw('a.linea as linea,a.codigo as codigo,a.nombre as articulo,null as ni,s.nro_salida as ns,um.nombre as medida,s.created_at as fecha,lote.precio_u as precio_u'),
            DB::raw("CONCAT('linea',a.linea) as num_linea"),
            DB::raw('unidad.nombre as unidad,
                di.cantidad - ( SUM(ds.cantidad) OVER (PARTITION BY lote.id  ORDER BY s.created_at)) + (ds.cantidad) as c_inicial,
                (di.cantidad*lote.precio_u) - (SUM(ds.cantidad*lote.precio_u) OVER (PARTITION BY lote.id  ORDER BY s.created_at)) + ds.cantidad*lote.precio_u as s_inicial
                ,0 as c_ingreso,0 as s_ingreso'),
            DB::raw('ds.cantidad as c_salida,ds.cantidad*lote.precio_u as s_salida,
                (di.cantidad) - (SUM(ds.cantidad) OVER (PARTITION BY lote.id  ORDER BY s.created_at)) as c_final,
                (di.cantidad*lote.precio_u) - (SUM(ds.cantidad*lote.precio_u) OVER (PARTITION BY lote.id  ORDER BY s.created_at)) as s_final'
            )
        )
            ->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
            ->leftjoin('unidad_medida as um', 'um.id', '=', 'a.unidad_medida_id')
            ->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
            ->leftjoin('salida as s', 's.id', '=', 'ds.salida_id')
            ->leftjoin('solicitante as so','so.id','=','s.solicitante_id')
            ->leftjoin('unidad as unidad','unidad.id','=','so.unidad_id')
            ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
            ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
            ->where('s.periodo_id', $periodo)
            ->whereNull('i.deleted_at')
            ->whereNull('s.deleted_at')
            ->whereBetween('s.created_at',[date('Y-m-d H:i:s', strtotime($del)),date('Y-m-d H:i:s', strtotime($al))])
            ->where('lote.precio_u', '<>', 0)
            ->unionAll($ingresos)
            ->orderBy('fecha', 'asc')
            ->get();
        return $salidas;
//        return DB::query()->fromSub($salidas, '






//        $ingresos =  Lote::select(
//            DB::raw('a.linea as linea,a.codigo as codigo,a.nombre as articulo,i.nro_ingreso as ni,null as ns,um.nombre as medida,i.created_at as fecha,lote.precio_u as precio_u'),
//            DB::raw("CONCAT('linea',a.linea) as num_linea"),
//            DB::raw('null as unidad,0 as c_inicial,0 as s_inicial,di.cantidad as c_ingreso'),
//            DB::raw('(di.cantidad*lote.precio_u) as s_ingreso'),
//            DB::raw('0 as c_salida,0 as s_salida, di.cantidad as c_final,(di.cantidad*lote.precio_u) as s_final')
//        )
//            ->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
//            ->leftjoin('unidad_medida as um', 'um.id', '=', 'a.unidad_medida_id')
//            ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
//            ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
//            ->where('i.periodo_id', $periodo)
//            ->whereNull('i.deleted_at')
//            ->whereBetween('i.created_at',[date('Y-m-d H:i:s', strtotime($del)),date('Y-m-d H:i:s', strtotime($al))])
//            ->where('lote.precio_u', '<>', 0);
//
//        $salidas =  Lote::select(
//            DB::raw('a.linea as linea,a.codigo as codigo,a.nombre as articulo,null as ni,s.nro_salida as ns,um.nombre as medida,s.created_at as fecha,lote.precio_u as precio_u'),
//            DB::raw("CONCAT('linea',a.linea) as num_linea"),
//            DB::raw('unidad.nombre as unidad,
//                (LAG(di.cantidad,0,0) OVER (PARTITION BY lote.id  ORDER BY s.created_at)) - ( LAG(ds.cantidad,1,0) OVER (PARTITION BY lote.id  ORDER BY s.created_at)) as c_inicial,
//                (LAG(di.cantidad*lote.precio_u,0,0) OVER (PARTITION BY lote.id  ORDER BY s.created_at) - LAG(ds.cantidad*lote.precio_u,1,0) OVER (PARTITION BY lote.id  ORDER BY s.created_at)) as s_inicial
//                ,0 as c_ingreso,0 as s_ingreso'),
//            DB::raw('ds.cantidad as c_salida,ds.cantidad*lote.precio_u as s_salida,
//                (di.cantidad) - (LAG(ds.cantidad,1,0) OVER (PARTITION BY lote.id  ORDER BY s.created_at) + (ds.cantidad)) as c_final,
//                (di.cantidad*lote.precio_u) - (LAG(ds.cantidad*lote.precio_u,1,0) OVER (PARTITION BY lote.id  ORDER BY s.created_at) + (ds.cantidad*lote.precio_u)) as s_final'
//            )
//        )
//            ->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
//            ->leftjoin('unidad_medida as um', 'um.id', '=', 'a.unidad_medida_id')
//            ->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
//            ->leftjoin('salida as s', 's.id', '=', 'ds.salida_id')
//            ->leftjoin('solicitante as so','so.id','=','s.solicitante_id')
//            ->leftjoin('unidad as unidad','unidad.id','=','so.unidad_id')
//            ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
//            ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
//            ->where('s.periodo_id', $periodo)
//            ->whereNull('i.deleted_at')
//            ->whereNull('s.deleted_at')
//            ->whereBetween('s.created_at',[date('Y-m-d H:i:s', strtotime($del)),date('Y-m-d H:i:s', strtotime($al))])
//            ->where('lote.precio_u', '<>', 0)
//            ->unionAll($ingresos)
//            ->orderBy('fecha', 'asc')
//            ->get();
    }
}



//return Lote::select(
//    DB::raw("IFNULL((SELECT (SUM(  DISTINCT IFNULL(di.cantidad,0)) - SUM(IFNULL(ds.cantidad,0)))
//                FROM lote as l
//                WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote($del) . "
//                GROUP BY `a`.`id`,`l`.`precio_u`),0)
//                as c_inicial"),
//    DB::raw("IFNULL((SELECT (SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u))
//                FROM lote as l
//                WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
//                GROUP BY `a`.`id`,`l`.`precio_u`),0)
//                as s_inicial"),
//    DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)) as c_entrada,SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) as s_entrada'),
//    DB::raw('SUM(IFNULL(ds.cantidad,0)) as c_salida,SUM(IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0)) as s_salida'),
//    DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)) - SUM(IFNULL(ds.cantidad,0)) as c_final'),
//    DB::raw('SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0)) as s_final'),
//    'p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea"))
//    //->whereDoesntHave('detalle_salida')
////            ->whereHas('detallesalida',function($query){
////                $query->whereHas('salida',function ($query){
////                    $query->whereNull('deleted_at');
////                });
////            })
////            ->whereHas('articulo',function ($query){
////                $query->where('id','=',1);
////            })
//    ->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
//    ->leftjoin('partida as p', 'p.id', '=', 'a.partida_id')
//    ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
//    ->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
//    ->leftjoin('salida as s', 's.id', '=', 'ds.salida_id')
//    ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
//    ->whereDate('i.created_at', '<=', $al)
//    ->whereDate('i.created_at', '>=', $del)
//    ->whereNull('i.deleted_at')
//    //  ->where('i.id','<>',3)
//    ->where('i.periodo_id', $periodo)
//    ->where('lote.precio_u', '<>', 0)
//    ->groupBy('a.id', 'a.linea', 'lote.precio_u', 'i.created_at')
//    ->orderBy('p.codigo', 'asc')
//    ->orderBy('a.nombre', 'asc')
//    ->get();




//
//$inicial = Lote::select(
//    DB::raw('0 as c_entrada,0 as s_entrada'),
//    DB::raw('0 as c_salida, 0 as s_salida'),
//    DB::raw('0 as c_final,0 as s_final'),
//    DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u ) as s_inicial'),
//    'p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea")
//)
//    ->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
//    ->leftjoin('partida as p', 'p.id', '=', 'a.partida_id')
//    ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
//    ->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
//    ->leftjoin('salida as s', 's.id', '=', 'ds.salida_id')
//    ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
//    ->where('i.periodo_id', 1)
//    ->whereDate('i.created_at', '<=', $del)
//    ->whereNull('i.deleted_at')
//    ->whereNull('s.deleted_at')
//    ->where('lote.precio_u', '<>', 0)
//
//    ->groupBy('a.id', 'a.linea', 'lote.id', 'i.created_at')
//    ->orderBy('p.codigo', 'asc')
//    ->orderBy('a.nombre', 'asc');
//
//$entradas = Lote::select(
//    DB::raw( 'lote.id as lote'),
//    DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)) as c_entrada,SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) as s_entrada'),
//    DB::raw('0 as c_salida, 0 as s_salida'),
//    DB::raw('0 as s_inicial')
//)
//    ->join('articulo as a', 'lote.articulo_id', '=', 'a.id')
//    ->join('partida as p', 'p.id', '=', 'a.partida_id')
//    ->join('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
//    ->join('ingreso as i', 'i.id', '=', 'di.ingreso_id')
//    ->where('i.periodo_id', 1)
//    ->whereNull('i.deleted_at')
//    ->where('lote.precio_u', '<>', 0)
//    ->groupBy('a.id', 'a.linea', 'lote.id', 'i.created_at')
//    ->orderBy('p.codigo', 'asc')
//    ->orderBy('a.nombre', 'asc');
//
//$salidas = Lote::select(
//    DB::raw( 'lote.id as lote'),
//    DB::raw('0 as c_entrada, 0 as s_entrada'),
//    DB::raw('SUM(IFNULL(ds.cantidad,0)) as c_salida,SUM(IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0)) as s_salida'),
//    DB::raw('0 as s_inicial')
//)
//    ->join('articulo as a', 'lote.articulo_id', '=', 'a.id')
//    ->join('partida as p', 'p.id', '=', 'a.partida_id')
//    ->join('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
//    ->join('salida as s', 's.id', '=', 'ds.salida_id')
//    ->where('s.periodo_id',1)
//    ->whereNull('s.deleted_at')
//    ->where('lote.precio_u', '<>', 0)
//    ->groupBy('a.id', 'a.linea', 'lote.id', 's.created_at')
//    ->orderBy('p.codigo', 'asc')
//    ->orderBy('a.nombre', 'asc')
//    ->unionAll($entradas);
//
//return DB::query()->fromSub($salidas, 'q')
//    ->select(
//        DB::raw('SUM(q.c_entrada) as c_entrada ,SUM(q.c_salida) as c_salida,SUM(q.s_entrada) as s_entrada,SUM(q.s_salida) as s_salida'),
//        DB::raw('SUM(q.c_entrada - q.c_salida) as c_final'),
//        DB::raw('SUM(q.s_entrada - q.s_salida) as s_final'),
//        DB::raw('SUM(q.s_inicial) as s_inicial'),
////                DB::raw('
////                    (SELECT SUM(q.s_entrada - q.s_salida)
////                        FROM detalle_ingreso as dis
////                        INNER JOIN ingreso as in
////                            ON dis.ingreso_id = in.id
////                        WHERE in.periodo_id = 1 AND dis.id = di.id AND in.created_at <= "2020-12-13 20:06:43"
////                    ) as s_inicial
////                '),
//        'p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea")
//    )
//    ->join('lote','lote.id','=','q.lote')
//    ->join('articulo as a', 'lote.articulo_id', '=', 'a.id')
//    ->join('partida as p', 'p.id', '=', 'a.partida_id')
//    ->join('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
//    ->join('ingreso as i', 'i.id', '=', 'di.ingreso_id')
//    ->whereDate('i.created_at', '>=', $del)
//    ->whereDate('i.created_at', '<=', $al)
//    ->where('i.periodo_id', $periodo)
//    ->whereNull('i.deleted_at')
//    ->where('lote.precio_u', '<>', 0)
//    ->groupBy('a.id', 'a.linea', 'lote.id', 'i.created_at')
//    ->orderBy('p.codigo', 'asc')
//    ->orderBy('a.nombre', 'asc')
//    ->unionAll($inicial)
//    ->get();



























//$inicial =  Lote::select(
////DB::raw( 'lote.id as lote'),
//    DB::raw('0 as c_entrada,0 as s_entrada'),
//    DB::raw('0 as c_salida, 0 as s_salida'),
//    //DB::raw('0 as s_final'),
//    DB::raw("IFNULL((SELECT (SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u))
//                FROM lote as l
//                WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($al))) . "
//                ),0)
//                as s_final"),
//    DB::raw("IFNULL((SELECT (SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u))
//                FROM lote as l
//                WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
//                ),0)
//                as s_inicial"),
//    //   DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u ) as s_inicial'),
//    'lote.id as lote', 'p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea")
//
//
//)
//    ->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
//    ->leftjoin('partida as p', 'p.id', '=', 'a.partida_id')
//    ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
//    ->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
//    ->leftjoin('salida as s', 's.id', '=', 'ds.salida_id')
//    ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
//    ->where('i.periodo_id', 1)
//    // ->where('i.created_at', '<=', date('Y-m-d H:i:s', strtotime($del)) )
//    ->whereNull('i.deleted_at')
//    ->whereNull('s.deleted_at')
//    ->where('lote.precio_u', '<>', 0)
//    ->groupBy('a.id', 'a.linea','lote.precio_u','lote.id','i.created_at');
////            ->orderBy('p.codigo', 'asc')
////            ->orderBy('a.nombre', 'asc');
//
////        $final = Lote::select(
////            DB::raw('0 as c_entrada,0 as s_entrada'),
////            DB::raw('0 as c_salida, 0 as s_salida'),
////            DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u ) as s_final'),
////            DB::raw('0 as s_inicial'),
////            'p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea")
////        )
////            ->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
////            ->leftjoin('partida as p', 'p.id', '=', 'a.partida_id')
////            ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
////            ->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
////            ->leftjoin('salida as s', 's.id', '=', 'ds.salida_id')
////            ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
////            ->where('i.periodo_id', 1)
////            ->where('i.created_at', '<=', date('Y-m-d H:i:s', strtotime($al)) )
////            ->whereNull('i.deleted_at')
////            ->whereNull('s.deleted_at')
////            ->where('lote.precio_u', '<>', 0)
////            ->unionAll($inicial)
////            ->groupBy('a.id', 'a.linea', 'lote.id', 'i.created_at');
////            ->orderBy('p.codigo', 'asc')
////            ->orderBy('a.nombre', 'asc')
//
//
//$entradas = Lote::select(
//    DB::raw( 'a.id as id'),
//    DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)) as c_entrada,SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) as s_entrada'),
//    DB::raw('0 as c_salida, 0 as s_salida'),
//    DB::raw('0 as s_inicial'),
//    DB::raw('0 as s_final')
//)
//    ->join('articulo as a', 'lote.articulo_id', '=', 'a.id')
//    ->join('partida as p', 'p.id', '=', 'a.partida_id')
//    ->join('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
//    ->join('ingreso as i', 'i.id', '=', 'di.ingreso_id')
//    ->where('i.periodo_id', 1)
//    ->whereNull('i.deleted_at')
//    ->where('lote.precio_u', '<>', 0)
//    ->groupBy('a.id', 'a.linea','lote.precio_u','i.created_at')
//    ->orderBy('p.codigo', 'asc')
//    ->orderBy('a.nombre', 'asc');
//
//$salidas = Lote::select(
//    DB::raw( 'a.id as id'),
//    DB::raw('0 as c_entrada, 0 as s_entrada'),
//    DB::raw('SUM(IFNULL(ds.cantidad,0)) as c_salida,SUM(IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0)) as s_salida'),
//    DB::raw('0 as s_inicial'),
//    DB::raw('0 as s_final')
//
//)
//    ->join('articulo as a', 'lote.articulo_id', '=', 'a.id')
//    ->join('partida as p', 'p.id', '=', 'a.partida_id')
//    ->join('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
//    ->join('salida as s', 's.id', '=', 'ds.salida_id')
//    ->where('s.periodo_id',1)
//    ->whereNull('s.deleted_at')
//    ->where('lote.precio_u', '<>', 0)
//    ->groupBy('a.id', 'a.linea','lote.precio_u' ,'s.created_at')
//    ->orderBy('p.codigo', 'asc')
//    ->orderBy('a.nombre', 'asc')
//    ->unionAll($entradas);
////->union($inicial);
//
//$query =  DB::query()->fromSub($salidas, 'q')
//    ->select(
//        DB::raw('SUM(q.c_entrada) as c_entrada ,SUM(q.c_salida) as c_salida,SUM(q.s_entrada) as s_entrada,SUM(q.s_salida) as s_salida'),
//        // DB::raw('SUM(q.c_entrada - q.c_salida) as c_final'),
//        DB::raw('SUM(q.s_final) as s_final'),
//        DB::raw('SUM(q.s_inicial) as s_inicial'),
////                DB::raw('
////                    (SELECT SUM(q.s_entrada - q.s_salida)
////                        FROM detalle_ingreso as dis
////                        INNER JOIN ingreso as in
////                            ON dis.ingreso_id = in.id
////                        WHERE in.periodo_id = 1 AND dis.id = di.id AND in.created_at <= "2020-12-13 20:06:43"
////                    ) as s_inicial
////                '),
//        'q.lote as lote','q.partida as partida', 'q.articulo as articulo', 'q.precio_u as precio_u', 'q.linea as linea', 'q.num_linea as num_linea'
//    )
////            ->join('articulo as a', 'a.id', '=', 'q.id')
////            ->join('lote','lote.articulo_id','=','a.id')
////            ->join('partida as p', 'p.id', '=', 'a.partida_id')
////            ->join('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
////            ->join('ingreso as i', 'i.id', '=', 'di.ingreso_id')
////            ->whereDate('i.created_at', '>=', $del)
////            ->whereDate('i.created_at', '<=', $al)
////            ->where('i.periodo_id', $periodo)
////            ->whereNull('i.deleted_at')
////            ->where('lote.precio_u', '<>', 0)
//    ->unionAll($inicial);
//// ->groupBy('a.id', 'a.linea','lote.precio_u','lote.id');
//
//return DB::query()->fromSub($query, 'q')
//    ->select(
//        DB::raw('SUM(q.c_entrada) as c_entrada ,SUM(q.c_salida) as c_salida,SUM(q.s_entrada) as s_entrada,SUM(q.s_salida) as s_salida'),
//        // DB::raw('SUM(q.c_entrada - q.c_salida) as c_final'),
//        DB::raw('SUM(q.s_final) as s_final'),
//        DB::raw('SUM(q.s_inicial) as s_inicial'),
////                DB::raw('
////                    (SELECT SUM(q.s_entrada - q.s_salida)
////                        FROM detalle_ingreso as dis
////                        INNER JOIN ingreso as in
////                            ON dis.ingreso_id = in.id
////                        WHERE in.periodo_id = 1 AND dis.id = di.id AND in.created_at <= "2020-12-13 20:06:43"
////                    ) as s_inicial
////                '),
//
//    )
//    ->join('articulo as a', 'a.id', '=', 'q.id')
//    ->join('lote','lote.articulo_id','=','a.id')
//    ->join('partida as p', 'p.id', '=', 'a.partida_id')
//    ->join('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
//    ->join('ingreso as i', 'i.id', '=', 'di.ingreso_id')
//    ->whereDate('i.created_at', '>=', $del)
//    ->whereDate('i.created_at', '<=', $al)
//    ->where('i.periodo_id', $periodo)
//    ->whereNull('i.deleted_at')
//    ->where('lote.precio_u', '<>', 0)
//    ->groupBy('q.articulo', 'q.linea','q.precio_u')->get();
