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
        $entradas = Lote::select(
            DB::raw( 'lote.id as lote'),
            DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)) as c_entrada,SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) as s_entrada'),
            DB::raw('0 as c_salida, 0 as s_salida')
        )
            ->join('articulo as a', 'lote.articulo_id', '=', 'a.id')
            ->join('partida as p', 'p.id', '=', 'a.partida_id')
            ->join('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
            ->join('ingreso as i', 'i.id', '=', 'di.ingreso_id')
            ->where('i.periodo_id', 1)
            ->whereNull('i.deleted_at')
            ->where('lote.precio_u', '<>', 0)
            ->groupBy('a.id', 'a.linea', 'lote.id', 'i.created_at')
            ->orderBy('p.codigo', 'asc')
            ->orderBy('a.nombre', 'asc');
        $salidas = Lote::select(
           DB::raw( 'lote.id as lote'),
            DB::raw('0 as c_entrada, 0 as s_entrada'),
            DB::raw('SUM(IFNULL(ds.cantidad,0)) as c_salida,SUM(IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0)) as s_salida')
        )
            ->join('articulo as a', 'lote.articulo_id', '=', 'a.id')
            ->join('partida as p', 'p.id', '=', 'a.partida_id')
            ->join('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
            ->join('salida as s', 's.id', '=', 'ds.salida_id')
            ->where('s.periodo_id',1)
            ->whereNull('s.deleted_at')
            ->where('lote.precio_u', '<>', 0)
            ->groupBy('a.id', 'a.linea', 'lote.id', 's.created_at')
            ->orderBy('p.codigo', 'asc')
            ->orderBy('a.nombre', 'asc')
            ->unionAll($entradas);

        return DB::query()->fromSub($salidas, 'q')
            ->select(
                DB::raw('a.nombre as articulo'),
                DB::raw('SUM(q.c_entrada) as c_entrada ,SUM(q.c_salida) as c_salida,SUM(q.s_entrada) as s_entrada,SUM(q.s_salida) as s_salida'),
                DB::raw('SUM(q.c_entrada - q.c_salida) as c_final'),
                DB::raw('SUM(q.s_entrada - q.s_salida) as s_final'),
                DB::raw("IFNULL((SELECT SUM(c_entrada - c_salida)
                FROM lote as l
                WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote($del) . "
                GROUP BY `a`.`id`,`l`.`precio_u`),0)
                as c_inicial"),  
                DB::raw("IFNULL((SELECT SUM(s_entrada - s_salida) as s_inicial
                FROM lote as l
                WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
                GROUP BY `a`.`id`,`l`.`precio_u`),0)
                as s_inicial"),
                'p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea")
            )
            ->join('lote','lote.id','=','q.lote')
            ->join('articulo as a', 'lote.articulo_id', '=', 'a.id')
            ->join('partida as p', 'p.id', '=', 'a.partida_id')
            ->join('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
            ->join('ingreso as i', 'i.id', '=', 'di.ingreso_id')
            ->whereDate('i.created_at', '<=', $al)
            ->whereDate('i.created_at', '>=', $del)
            ->where('i.periodo_id', $periodo)
            ->whereNull('i.deleted_at')
            ->where('lote.precio_u', '<>', 0)
            ->groupBy('a.id', 'a.linea', 'lote.id', 'i.created_at')
            ->orderBy('p.codigo', 'asc')
            ->orderBy('a.nombre', 'asc')
            ->get();



//        return Lote::select(
//
//            DB::raw("IFNULL((SELECT (SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u))
//                FROM lote as l
//                WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
//                GROUP BY `a`.`id`,`l`.`precio_u`),0)
//                as s_inicial"),
//            DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)) as c_entrada,SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) as s_entrada'),
//
////            DB::raw("IFNULL((SELECT (SUM(IFNULL(ds.cantidad,0)))
////                FROM lote as l
////                WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND s.deleted_at IS NULL  AND i.created_at <=  " . DB::getPdo()->quote($del) . "
////                GROUP BY `a`.`id`,`l`.`precio_u`),0)
////                as c_salida"),
//
//            DB::raw('SUM(IFNULL(ds.cantidad,0)) as c_salida,SUM(IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0)) as s_salida'),
//            DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)) - SUM(IFNULL(ds.cantidad,0)) as c_final'),
//            DB::raw('SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0)) as s_final'),
//            'p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea"))
//            //->whereDoesntHave('detalle_salida')
//            ->whereHas('detallesalida',function($query){
//                $query->whereHas('salida',function ($query){
//                    $query->whereNull('deleted_at');
//                });
//            })
////            ->whereHas('articulo',function ($query){
////                $query->where('id','=',1);
////            })
//            ->join('articulo as a', 'lote.articulo_id', '=', 'a.id')
//            ->join('partida as p', 'p.id', '=', 'a.partida_id')
//            ->join('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
//            ->join('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
//            ->join('salida as s', 's.id', '=', 'ds.salida_id')
//            ->join('ingreso as i', 'i.id', '=', 'di.ingreso_id')
//            ->whereDate('i.created_at', '<=', $al)
//            ->whereDate('i.created_at', '>=', $del)
//            ->where('i.periodo_id', $periodo)
//            ->whereNull('i.deleted_at')
//          //  ->whereNull('s.deleted_at')
//            //  ->where('i.id','<>',3)
//
//            ->where('lote.precio_u', '<>', 0)
//            ->groupBy('a.id', 'a.linea', 'lote.precio_u', 'i.created_at','s.created_at')
//            ->orderBy('p.codigo', 'asc')
//            ->orderBy('a.nombre', 'asc')
//            ->get();
    }

    public function ReporteGeneral($del,$al,$periodo)
    {
        return Lote::select(
            DB::raw("IFNULL((SELECT (SUM(  DISTINCT IFNULL(di.cantidad,0)) - SUM(IFNULL(ds.cantidad,0)))
                FROM lote as l
                WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote($del) . "
                GROUP BY `a`.`id`,`l`.`precio_u`),0)
                as c_inicial"),
            DB::raw("IFNULL((SELECT (SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u))
                FROM lote as l
                WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
                GROUP BY `a`.`id`,`l`.`precio_u`),0)
                as s_inicial"),
            DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)) as c_entrada,SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) as s_entrada'),
            DB::raw('SUM(IFNULL(ds.cantidad,0)) as c_salida,SUM(IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0)) as s_salida'),
            DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)) - SUM(IFNULL(ds.cantidad,0)) as c_final'),
            DB::raw('SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0)) as s_final'),
            'p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea"))
            ->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
            ->leftjoin('partida as p', 'p.id', '=', 'a.partida_id')
            ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
            ->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
            ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
            ->whereDate('i.created_at', '<=', $al)
            ->whereDate('i.created_at', '>=', $del)
            ->whereNull('i.deleted_at')
            //  ->where('i.id','<>',3)
            ->where('i.periodo_id', $periodo)
            ->where('lote.precio_u', '<>', 0)
            ->groupBy('i.id')
            //->groupBy('a.id', 'a.linea', 'lote.precio_u', 'i.created_at')
            ->orderBy('p.codigo', 'asc')
            ->orderBy('a.nombre', 'asc')
            ->get();
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
