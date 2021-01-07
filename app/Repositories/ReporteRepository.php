<?php


namespace App\Repositories;



use App\Models\Articulo;
use App\Models\Ingreso;
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

    public  function TotalAlmacen($del, $al, $periodo){

    }
    /**
     * @param $del
     * @param $al
     * @param $id
     * @return Articulo[]|\Illuminate\Database\Eloquent\Collection
     */
    public function SaldosAlmacen($del, $al, $periodo,$conSaldo)
    {
       // AND  i.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($periodo->fecha_inicio))) . " AND " . DB::getPdo()->quote(date('Y-m-d 23:59:59', strtotime($periodo->fecha_fin))) . "

        $periodo = Periodo::where('id',$periodo)->withTrashed()
            ->where('estado','=',Periodo::FINALIZADO)
            ->orWhere('estado','=',Periodo::EN_CURSO)
            ->first();
//        $inv_inicial = Ingreso::where('tipo_ingreso',Ingreso::INV_INICIAL)
//                            ->where('periodo_id',$periodo->id)
//                            ->first();

        $saldo = filter_var($conSaldo,FILTER_VALIDATE_BOOLEAN) ? '>=' : '<>';

        $ingresos = Lote::select(
            DB::raw("IFNULL((SELECT IFNULL (di.cantidad,0)
                           WHERE  i.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d 06:00:00', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d 23:59:59', strtotime($al))) . "
                           ),0) as c_entrada"),
            DB::raw("IFNULL((SELECT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)
                           WHERE  i.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d 06:00:00', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d 23:59:59', strtotime($al))) . "
                           ),0) as s_entrada"),

            DB::raw("0 as c_salida,0 as s_salida"),
            DB::raw('0 as ci_salida,0 as si_salida'),
            DB::raw("IFNULL((SELECT IFNULL(di.cantidad,0)
                WHERE i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d 06:00:00', strtotime($del))) . "
                ),0)
                as ci_ingreso"),
            DB::raw("IFNULL((SELECT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)
                WHERE i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d 06:00:00', strtotime($del))) . "
                ),0)
                as si_ingreso"),

            'lote.id as lote','p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea"),'a.codigo as codigo'
        )
            ->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
            ->leftjoin('partida as p', 'p.id', '=', 'a.partida_id')
            ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
            ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
            ->where('i.periodo_id', $periodo->id)
//            ->whereBetween('i.created_at',[date('Y-m-d H:i:s', strtotime($del)),date('Y-m-d 23:59:59', strtotime($al))])
            ->whereBetween('i.created_at',[date('Y-m-d H:i:s', strtotime($periodo->fecha_inicio)),date('Y-m-d 23:59:59', strtotime($periodo->fecha_fin))])

            ->whereNull('i.deleted_at')
            ->where('lote.precio_u', '<>', 0);

        $salidas = Lote::select(
            DB::raw("0 as c_entrada,0 as s_entrada"),
            DB::raw("IFNULL((SELECT IFNULL (ds.cantidad,0)
                           WHERE  s.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d 06:00:00', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d 23:59:59', strtotime($al))) . "
                           ),0) as c_salida"),
            DB::raw("IFNULL((SELECT IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0)
                           WHERE  s.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d 06:00:00', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d 23:59:59', strtotime($al))) . "
                           ),0) as s_salida"),


            DB::raw("IFNULL((SELECT IFNULL(ds.cantidad,0)
                WHERE s.created_at <=  " . DB::getPdo()->quote(date('Y-m-d 06:00:00', strtotime($del))) . "
                ),0)
                as ci_salida"),
            DB::raw("IFNULL((SELECT IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0)
                WHERE s.created_at <=  " . DB::getPdo()->quote(date('Y-m-d 06:00:00', strtotime($del))) . "
                ),0)
                as si_salida"),
            DB::raw('0 as ci_ingreso,0 as si_ingreso'),


            'lote.id as lote','p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea"),'a.codigo as codigo'
        )
            ->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
            ->leftjoin('partida as p', 'p.id', '=', 'a.partida_id')
            ->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
            ->leftjoin('salida as s', 's.id', '=', 'ds.salida_id')
            ->where('s.periodo_id', $periodo->id)
           // ->whereBetween('s.created_at',[date('Y-m-d H:i:s', strtotime($del)),date('Y-m-d 23:59:59', strtotime($al))])
            ->whereBetween('s.created_at',[date('Y-m-d H:i:s', strtotime($periodo->fecha_inicio)),date('Y-m-d 23:59:59', strtotime($periodo->fecha_fin))])

            ->whereNull('s.deleted_at')
            ->where('lote.precio_u', '<>', 0)
            ->unionAll($ingresos);

        $query = DB::query()->fromSub($salidas, 'q')
            ->select(
                DB::raw('SUM(q.c_entrada) as c_entrada ,SUM(q.c_salida) as c_salida,SUM(q.s_entrada) as s_entrada,SUM(q.s_salida) as s_salida'),
                DB::raw("SUM(q.ci_ingreso-q.ci_salida) as c_inicial"),
                DB::raw("SUM(q.si_ingreso-q.si_salida) as s_inicial"),
                DB::raw('SUM(q.c_entrada-q.c_salida) + SUM(q.ci_ingreso-q.ci_salida) as c_final'),
                DB::raw('SUM(q.s_entrada-q.s_salida) + SUM(q.si_ingreso-q.si_salida) as s_final'),
                'q.lote','q.articulo','q.partida','q.precio_u', 'q.linea','q.num_linea','q.codigo'
            )
            ->groupBy('q.lote','q.partida','q.articulo','q.linea','q.precio_u','q.num_linea','q.codigo');

        return DB::query()->fromSub($query, 'q')
            ->select('q.*')
            ->whereRaw('q.s_final '.$saldo.' ? ',[0])
            ->orderBy('q.partida','ASC')
            ->orderBy('q.codigo','ASC')
            //->orderBy('q.fecha','ASC')
            ->orderBy('q.lote','ASC')
            ->get();





//        $inicial = Lote::select(
//    DB::raw("IFNULL((SELECT SUM(DISTINCT IFNULL (di.cantidad,0))
//                           WHERE  i.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d 23:59:59', strtotime($al))) . "
//                           GROUP BY a.id , lote.precio_u),0) as c_entrada"),
//    DB::raw("IFNULL((SELECT SUM(DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0))
//                           WHERE  i.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d 23:59:59', strtotime($al))) . "
//                           GROUP BY a.id,lote.precio_u),0) as s_entrada"),
//    DB::raw("IFNULL((SELECT SUM(IFNULL (ds.cantidad,0))
//                           WHERE  i.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d 23:59:59', strtotime($al))) . "
//                           GROUP BY a.id,lote.precio_u),0) as c_salida"),
//    DB::raw("IFNULL((SELECT SUM(IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0))
//                           WHERE  i.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d 23:59:59', strtotime($al))) . "
//                           GROUP BY a.id,lote.precio_u),0) as s_salida"),
//
//
//    DB::raw("IFNULL((SELECT (SUM(DISTINCT IFNULL(di.cantidad,0)) - SUM(IFNULL(ds.cantidad,0)))
//                WHERE i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
//                ),0)
//                as c_inicial"),
//    DB::raw("SUM(DISTINCT IFNULL(di.cantidad,0)) - SUM(IFNULL(ds.cantidad,0)) as c_final"),
//    DB::raw("IFNULL((SELECT (SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u))
//
//                    WHERE  i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
//                    ),0)
//                    as s_inicial"),
//    DB::raw("(SUM(DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u)) as s_final"),
//
//   'lote.id as lote','p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea"),'a.codigo as codigo'
//
//)
//    ->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
//    ->leftjoin('partida as p', 'p.id', '=', 'a.partida_id')
//    ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
//    ->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
//    ->leftjoin('salida as s', 's.id', '=', 'ds.salida_id')
//    ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
//    ->where('i.periodo_id', $periodo)
//
//    ->whereBetween('i.created_at',[date('Y-m-d H:i:s', strtotime($del)),date('Y-m-d 23:59:59', strtotime($al))])
//
//    ->whereNull('i.deleted_at')
//    ->whereNull('s.deleted_at')
//    ->where('lote.precio_u', '<>', 0)
//    ->groupBy('lote.id','p.id','a.id','lote.precio_u','i.created_at','a.codigo');
//
//
//return DB::query()->fromSub($inicial, 'q')
//    ->select(
//        DB::raw('SUM(q.c_entrada) as c_entrada ,SUM(q.c_salida) as c_salida,SUM(q.s_entrada) as s_entrada,SUM(q.s_salida) as s_salida'),
//        DB::raw('SUM(q.c_inicial) as c_inicial'),
//        DB::raw('SUM(q.c_final) as c_final'),
//        DB::raw('SUM(q.s_inicial) as s_inicial'),
//        DB::raw('SUM(q.s_final) as s_final'),
//        'q.articulo','q.partida','q.precio_u', 'q.linea','q.num_linea','q.codigo'
//    )
//    ->where('q.s_final',$saldo,0)
//    //->orderBy('q.lote','ASC')
//    ->orderBy('q.partida','ASC')
//    ->orderBy('q.codigo','ASC')
//    //->orderBy('q.fecha','ASC')
//    ->orderBy('q.lote','ASC')
//    ->groupBy('q.lote','q.partida','q.articulo','q.linea','q.precio_u','q.num_linea','q.codigo')->get();
//


//        $inicial = Lote::select(
//
//            DB::raw("IFNULL((SELECT di.cantidad
//                           WHERE  i.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($al))) . "
//                           ),0) as c_entrada"),
//            DB::raw("IFNULL((SELECT  IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)
//                           WHERE  i.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($al))) . "
//                           ),0) as s_entrada"),
//            DB::raw("IFNULL((SELECT IFNULL (ds.cantidad,0)
//                           WHERE  i.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($al))) . "
//                           ),0) as c_salida"),
//            DB::raw("IFNULL((SELECT IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0)
//                           WHERE  i.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($al))) . "
//                           ),0) as s_salida"),
//
//
//            DB::raw("IFNULL((SELECT IFNULL(di.cantidad,0) - IFNULL(ds.cantidad,0)
//                WHERE i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
//                ),0)
//                as c_inicial"),
//            DB::raw("IFNULL(di.cantidad,0) - IFNULL(ds.cantidad,0) as c_final"),
//            DB::raw("IFNULL((  SELECT (IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - (IFNULL(ds.cantidad,0)*lote.precio_u)
//
//                    WHERE  i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
//                    ),0)
//                    as s_inicial"),
//            DB::raw("( IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - (IFNULL(ds.cantidad,0)*lote.precio_u) as s_final"),
//
//           'lote.id as lote','p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea"),'a.codigo as codigo'
//
//        )
//            ->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
//            ->leftjoin('partida as p', 'p.id', '=', 'a.partida_id')
//            ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
//            ->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
//            ->leftjoin('salida as s', 's.id', '=', 'ds.salida_id')
//            ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
//            ->where('i.periodo_id', $periodo)
//           // ->where('i.created_at', '>=', date('Y-m-d H:i:s', strtotime($del)) )
//            ->where('i.created_at', '<=', date('Y-m-d H:i:s', strtotime($al)) ) //Revisar porque pude que salidas no exista
//            ->whereNull('i.deleted_at')
//            ->whereNull('s.deleted_at')
//            ->where('lote.precio_u', '<>', 0);
//            //->groupBy('p.id','i.created_at','a.codigo')->get();
//
//        return DB::query()->fromSub($inicial, 'q')
//            ->select(
//                DB::raw('SUM(q.c_entrada) as c_entrada ,SUM(q.c_salida) as c_salida,SUM(q.s_entrada) as s_entrada,SUM(q.s_salida) as s_salida'),
//                DB::raw('SUM(q.c_inicial) as c_inicial'),
//                DB::raw('SUM(q.c_final) as c_final'),
//                DB::raw('SUM(q.s_inicial) as s_inicial'),
//                DB::raw('SUM(q.s_final) as s_final'),
//                'q.articulo','q.partida','q.precio_u', 'q.linea','q.num_linea','q.codigo'
//            )
//            ->orderBy('q.partida','ASC')
//            ->groupBy('q.lote','q.partida','q.articulo','q.linea','q.precio_u','q.num_linea','q.codigo')->get();


















//        $entradas = Lote::select(
//            DB::raw( 'a.id as id'),
//            DB::raw('IFNULL(di.cantidad,0) as c_entrada,IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0) as s_entrada'),
//            DB::raw('0 as c_salida, 0 as s_salida'),
//            DB::raw('0 as c_inicial'),
//            DB::raw('0 as c_final'),
//            DB::raw('0 as s_inicial'),
//            DB::raw('0 as s_final')
//        )
//            ->join('articulo as a', 'lote.articulo_id', '=', 'a.id')
//            ->join('partida as p', 'p.id', '=', 'a.partida_id')
//            ->join('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
//            ->join('ingreso as i', 'i.id', '=', 'di.ingreso_id')
//            ->where('i.periodo_id', 1)
//            ->whereNull('i.deleted_at')
//            ->where('lote.precio_u', '<>', 0);


//            ->groupBy('a.id','p.codigo','a.linea','lote.precio_u','lote.id','i.created_at')
//            ->orderBy('p.codigo', 'asc')
//            ->orderBy('a.nombre', 'asc');

//        $salidas = Lote::select(
//            DB::raw( 'a.id as id'),
//            DB::raw('0 as c_entrada, 0 as s_entrada'),
//            DB::raw('IFNULL(ds.cantidad,0) as c_salida,IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0) as s_salida'),
//            DB::raw('0 as c_inicial'),
//            DB::raw('0 as c_final'),
//            DB::raw('0 as s_inicial'),
//            DB::raw('0 as s_final')
//
//        )
//            ->join('articulo as a', 'lote.articulo_id', '=', 'a.id')
//            ->join('partida as p', 'p.id', '=', 'a.partida_id')
//            ->join('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
//            ->join('salida as s', 's.id', '=', 'ds.salida_id')
//            ->where('s.periodo_id',1)
//            ->whereNull('s.deleted_at')
//            ->where('lote.precio_u', '<>', 0)
////            ->groupBy('a.id', 'p.codigo','a.linea','lote.precio_u' ,'lote.id','s.created_at')
////            ->orderBy('p.codigo', 'asc')
////            ->orderBy('a.nombre', 'asc')
//            ->unionAll($entradas);

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

    //    public function saldo_inicial($del,$al,$periodo,$articulo){
//        return  Ingreso::leftjoin('detalle_ingreso as di','di.ingreso_id','=','ingreso.id')
//            ->join('lote','lote.id','=','di.lote_id')
//            ->join('articulo as a','a.id','=','lote.articulo_id')
//            ->where('ingreso.periodo_id', $periodo)
//            ->whereNull('ingreso.deleted_at')
//            ->with(['detalleingresos'])
//            ->where('a.id',$articulo)
//            ->whereBetween('ingreso.created_at',[date('Y-m-d H:i:s', strtotime($del)),date('Y-m-d H:i:s', strtotime($al))])
//            ->oldest()
//            ->first();
//    }


    public function TotalInicial($del,$al,$periodo)
    {

        $periodo = Periodo::where('id',$periodo)
            ->where('estado','=',Periodo::FINALIZADO)
            ->orWhere('estado','=',Periodo::EN_CURSO)
            ->withTrashed()
            ->first();
        return  Lote::select(DB::raw("SUM(di.cantidad*lote.precio_u) - SUM(ds.cantidad*lote.precio_u) as s_inicial,a.linea as linea,CONCAT('linea',a.linea) as num_linea"))
            ->leftjoin('detalle_ingreso as di','di.lote_id','=','lote.id')
            ->leftjoin('detalle_salida as ds','ds.lote_id','=','lote.id')
            ->leftjoin('ingreso as i','i.id','=','di.ingreso_id')
            ->leftjoin('salida as s','s.id','=','ds.salida_id')
            ->leftjoin('articulo as a','a.id','=','lote.articulo_id')
            ->where('i.id', function($q) use ($del,$al,$periodo)
            {
                $q->from('ingreso as ig')
                    ->select('ig.id')
                    ->join('detalle_ingreso as dt','dt.ingreso_id','=','ig.id')
                    ->join('lote as l','l.id','=','dt.lote_id')
                    ->join('articulo as ar','ar.id','=','l.articulo_id')
                    ->where('ig.periodo_id',$periodo->id)
                    ->where('ig.created_at','<=',date('Y-m-d 06:00:00', strtotime($del)))
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
            ->where('s.periodo_id',$periodo->id)
            ->whereNull('i.deleted_at')
            ->whereNull('s.deleted_at')
            ->groupBy('a.id')
            ->get();


//        return DB::query()->fromSub($cant_saldo, 'q')
//            ->select(DB::raw('SUM(q.cantidad) as cantidad_inicial,SUM(q.cantidad*precio_u) as saldo_inicial'))
//            ->first();

//        $totales =  DB::query()->fromSub($cant_saldo, 'q')
//            ->select(DB::raw('SUM(q.cantidad) as cantidad_inicial,SUM(q.cantidad*precio_u) as saldo_inicial'))
//            ->first();
//        $totales_linea =  DB::query()->fromSub($cant_saldo, 'q')
//            ->select(DB::raw('SUM(q.cantidad) as cantidad_inicial,SUM(q.cantidad*precio_u) as saldo_inicial,q.linea as linea'))
//            ->groupBy('q.linea')
//            ->get();
//
//        return ['totales' => $totales,'t_linea' => $totales_linea];
    }
    public function TIngresoSalida($del,$al,$periodo){

        $periodo = Periodo::where('id',$periodo)->withTrashed()
            ->where('estado','=',Periodo::FINALIZADO)
            ->orWhere('estado','=',Periodo::EN_CURSO)
            ->first();

        $ingresos= Lote::select(
            DB::raw("IFNULL(SUM(di.cantidad),0) as c_ingreso,0 as c_salida "),
            DB::raw("IFNULL(SUM(di.cantidad*lote.precio_u),0) as s_ingreso,0 as s_salida"),
            'a.linea as linea',DB::raw("CONCAT('linea',a.linea) as num_linea"),'a.nombre as articulo'
        )
            ->leftjoin('detalle_ingreso as di','di.lote_id','=','lote.id')
            ->leftjoin('ingreso as i','i.id','=','di.ingreso_id')
            ->leftjoin('articulo as a','a.id','=','lote.articulo_id')

            ->whereRaw('i.created_at >= ?',[date('Y-m-d 03:00:00', strtotime($del))])
            ->where('i.periodo_id',$periodo->id)
            ->whereBetween('i.created_at',[
                date('Y-m-d H:i:s', strtotime($periodo->fecha_inicio)),
                date('Y-m-d 23:59:59', strtotime($periodo->fecha_fin))
            ])
            ->whereNull('i.deleted_at')
            ->groupBy('lote.id');

        $salidas = Lote::select(
            DB::raw("0 as c_ingreso,IFNULL(SUM(ds.cantidad),0) as c_salida"),
            DB::raw("0 as s_ingreso,IFNULL(SUM(ds.cantidad*lote.precio_u),0) as s_salida"),
            'a.linea as linea',DB::raw("CONCAT('linea',a.linea) as num_linea"),'a.nombre as articulo'
        )
            ->leftjoin('detalle_salida as ds','ds.lote_id','=','lote.id')
            ->leftjoin('salida as s','s.id','=','ds.salida_id')
            ->leftjoin('articulo as a','a.id','=','lote.articulo_id')
            // ->whereRaw('s.created_at >= ?',[date('Y-m-d 03:00:00', strtotime($del))])
            ->where('s.periodo_id',$periodo->id)
            ->whereBetween('s.created_at',[
                date('Y-m-d H:i:s', strtotime($periodo->fecha_inicio)),
                date('Y-m-d 23:59:59', strtotime($periodo->fecha_fin))
            ])
            ->whereNull('s.deleted_at')
            ->unionAll($ingresos)
            ->groupBy('lote.id');

        return DB::query()->fromSub($salidas, 'q')
            ->select(DB::raw("SUM(q.c_ingreso) as c_ingreso,SUM(q.c_salida) as c_salida,SUM(q.s_ingreso) as s_ingreso,SUM(q.s_salida) as s_salida,q.linea,CONCAT('linea',q.linea) as num_linea"))
            ->groupBy('q.articulo','q.linea')
            ->get();
    }
    public function ReporteGeneral($del,$al,$periodo,$conSaldo)
    {

        $periodo = Periodo::where('id',$periodo)->withTrashed()
            ->where('estado','=',Periodo::FINALIZADO)
            ->orWhere('estado','=',Periodo::EN_CURSO)
            ->first();

        $saldo = filter_var($conSaldo,FILTER_VALIDATE_BOOLEAN) ? '>=' : '<>';
        $ingresos =  Lote::select(
            DB::raw('a.linea as linea,a.codigo as codigo,a.nombre as articulo,i.nro_ingreso as ni,null as ns,um.nombre as medida,i.created_at as fecha,lote.precio_u as precio_u,lote.id as lote'),
            DB::raw("CONCAT('linea',a.linea) as num_linea"),
            DB::raw(" IFNULL((SELECT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)
                WHERE i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d 03:00:00', strtotime($del))) . "
                ),0) as total_inicial"),
            DB::raw("null as unidad,
            IFNULL((SELECT IFNULL(di.cantidad,0)
                WHERE i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d 03:00:00', strtotime($del))) . "

                ),0) as c_inicial,
            IFNULL((SELECT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)
                WHERE i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d 03:00:00', strtotime($del))) . "
                ),0) as s_inicial,
            IFNULL((SELECT di.cantidad
                WHERE i.created_at >=  " . DB::getPdo()->quote(date('Y-m-d 03:00:00', strtotime($del))) . "
                ),0) as c_ingreso"),
            DB::raw("
            IFNULL((SELECT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)
                WHERE i.created_at >=  " . DB::getPdo()->quote(date('Y-m-d 03:00:00', strtotime($del))) . "
                ),0) as s_ingreso"),
            DB::raw('0 as c_salida,0 as s_salida, di.cantidad as c_final,(di.cantidad*lote.precio_u) as s_final')
        )
            ->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
            ->leftjoin('unidad_medida as um', 'um.id', '=', 'lote.unidad_medida_id')
            ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
            ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
            ->where('i.periodo_id', $periodo->id)
            ->whereNull('i.deleted_at')
            ->whereHas('articulo')
           // ->whereRaw('i.created_at >= ?',[date('Y-m-d 06:00:00', strtotime($del))])
            ->whereBetween('i.created_at',[
                date('Y-m-d H:i:s', strtotime($periodo->fecha_inicio)),
                date('Y-m-d 23:59:59', strtotime($periodo->fecha_fin))
            ])
         //   ->whereBetween('i.created_at',[date('Y-m-d H:i:s', strtotime($del)),date('Y-m-d 23:59:59', strtotime($al))])
            ->where('lote.precio_u', '<>', 0);


        $salidas =  Lote::select(
            DB::raw('a.linea as linea,a.codigo as codigo,a.nombre as articulo,null as ni,s.nro_salida as ns,um.nombre as medida,s.created_at as fecha,lote.precio_u as precio_u,lote.id as lote'),
            DB::raw("CONCAT('linea',a.linea) as num_linea,0 as total_inicial"),
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
            ->leftjoin('unidad_medida as um', 'um.id', '=', 'lote.unidad_medida_id')
            ->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
            ->leftjoin('salida as s', 's.id', '=', 'ds.salida_id')
            ->leftjoin('solicitante as so','so.id','=','s.solicitante_id')
            ->leftjoin('unidad as unidad','unidad.id','=','so.unidad_id')
            ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
            ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
            ->where('s.periodo_id', $periodo->id)
            ->whereNull('i.deleted_at')
            ->whereNull('s.deleted_at')
            ->whereBetween('i.created_at',[
                date('Y-m-d H:i:s', strtotime($periodo->fecha_inicio)),
                date('Y-m-d 23:59:59', strtotime($periodo->fecha_fin))
            ])
            ->whereBetween('s.created_at',[
                date('Y-m-d H:i:s', strtotime($periodo->fecha_inicio)),
                date('Y-m-d 23:59:59', strtotime($periodo->fecha_fin))
            ])
         //   ->whereBetween('s.created_at',[date('Y-m-d H:i:s', strtotime($del)),date('Y-m-d 23:59:59', strtotime($al))])
            ->where('lote.precio_u', '<>', 0)
            ->unionAll($ingresos)

            ->orderBy('codigo', 'asc')
            ->orderBy('fecha', 'asc')
            ->orderBy('lote', 'asc');
            //->orderBy('ni', 'asc')


//        return $salidas;

        return DB::query()->fromSub($salidas, 'q')
            ->select('q.*')
            ->where('q.s_final',$saldo,0)
            ->get();


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









//
//$inicial = Lote::select(
//
//
//    DB::raw("IFNULL((SELECT SUM(DISTINCT IFNULL (di.cantidad,0))
//                           WHERE  i.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($al))) . "
//                           GROUP BY a.id , lote.precio_u),0) as c_entrada"),
//    DB::raw("IFNULL((SELECT SUM(DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0))
//                           WHERE  i.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($al))) . "
//                           GROUP BY a.id,lote.precio_u),0) as s_entrada"),
//    DB::raw("IFNULL((SELECT SUM(IFNULL (ds.cantidad,0))
//                           WHERE  i.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($al))) . "
//                           GROUP BY a.id,lote.precio_u),0) as c_salida"),
//    DB::raw("IFNULL((SELECT SUM(IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0))
//                           WHERE  i.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($al))) . "
//                           GROUP BY a.id,lote.precio_u),0) as s_salida"),
//
//
//
//    //     DB::raw('SUM(IFNULL(ds.cantidad,0)) as c_salida,SUM(IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0)) as s_salida'),
////            DB::raw("IFNULL((SELECT (SUM(DISTINCT IFNULL(di.cantidad,0)))
////                FROM lote as l
////                WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($al))) . "
////                GROUP BY `a`.`id`,`l`.`precio_u`,l.id),0)
////                as c_entrada"),
////            DB::raw("IFNULL((SELECT (SUM(DISTINCT IFNULL(di.cantidad,0)) - SUM(IFNULL(ds.cantidad,0)))
////                FROM lote as l
////                WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
////                GROUP BY `a`.`id`,`l`.`precio_u`,l.id),0)
////                as c_inicial"),
////DB::raw('0 as s_final'),
//
//    DB::raw("IFNULL((SELECT (SUM(DISTINCT IFNULL(di.cantidad,0)) - SUM(IFNULL(ds.cantidad,0)))
//                WHERE i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
//                ),0)
//                as c_inicial"),
//    DB::raw("SUM(DISTINCT IFNULL(di.cantidad,0)) - SUM(IFNULL(ds.cantidad,0)) as c_final"),
//    DB::raw("IFNULL((SELECT (SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u))
//
//                    WHERE  i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
//                    ),0)
//                    as s_inicial"),
//    DB::raw("(SUM(DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u)) as s_final"),
//
////   DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u ) as s_inicial'),
//    'p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea"),'a.codigo as codigo'
//
//)
//    ->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
//    ->leftjoin('partida as p', 'p.id', '=', 'a.partida_id')
//    ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
//    ->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
//    ->leftjoin('salida as s', 's.id', '=', 'ds.salida_id')
//    ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
//    ->where('i.periodo_id', $periodo)
//    // ->where('i.created_at', '>=', date('Y-m-d H:i:s', strtotime($del)) )
//    ->where('i.created_at', '<=', date('Y-m-d H:i:s', strtotime($al)) ) //Revisar porque pude que salidas no exista
//    ->whereNull('i.deleted_at')
//    ->whereNull('s.deleted_at')
//    ->where('lote.precio_u', '<>', 0)
//    ->groupBy('p.id','a.id','lote.precio_u','i.created_at','a.codigo');
//
//
//return DB::query()->fromSub($inicial, 'q')
//    ->select(
//        DB::raw('SUM(q.c_entrada) as c_entrada ,SUM(q.c_salida) as c_salida,SUM(q.s_entrada) as s_entrada,SUM(q.s_salida) as s_salida'),
//        DB::raw('SUM(q.c_inicial) as c_inicial'),
//        DB::raw('SUM(q.c_final) as c_final'),
//        DB::raw('SUM(q.s_inicial) as s_inicial'),
//        DB::raw('SUM(q.s_final) as s_final'),
//        'q.articulo','q.partida','q.precio_u', 'q.linea','q.num_linea','q.codigo'
//    )
//    ->orderBy('q.partida','ASC')
//    ->groupBy('q.partida','q.articulo','q.linea','q.precio_u','q.num_linea','q.codigo')->get();






















































//$ingresos = Lote::select(
//    DB::raw("IFNULL((SELECT IFNULL (di.cantidad,0)
//                           WHERE  i.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d 23:59:59', strtotime($al))) . "
//
//                           ),0) as c_entrada"),
//    DB::raw("IFNULL((SELECT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)
//                           WHERE  i.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d 23:59:59', strtotime($al))) . "
//                           ),0) as s_entrada"),
//    DB::raw("0 as c_salida,0 as s_salida"),
//    DB::raw('0 as ci_salida,0 as si_salida'),
//    DB::raw("IFNULL((SELECT IFNULL(di.cantidad,0)
//                WHERE i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
//
//                ),0)
//                as ci_ingreso"),
//    DB::raw("IFNULL((SELECT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)
//                WHERE i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
//                ),0)
//                as si_ingreso"),
//    'lote.id as lote','p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea"),'a.codigo as codigo'
//)
//    ->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
//    ->leftjoin('partida as p', 'p.id', '=', 'a.partida_id')
//    ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
//    ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
//    ->where('i.periodo_id', $periodo)
//    ->whereBetween('i.created_at',[date('Y-m-d H:i:s', strtotime($del)),date('Y-m-d 23:59:59', strtotime($al))])
//    ->whereNull('i.deleted_at')
//    ->where('lote.precio_u', '<>', 0);
//
//$salidas = Lote::select(
//    DB::raw("0 as c_entrada,0 as s_entrada"),
//    DB::raw("IFNULL((SELECT IFNULL (ds.cantidad,0)
//                           WHERE  s.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d 23:59:59', strtotime($al))) . "
//                           ),0) as c_salida"),
//    DB::raw("IFNULL((SELECT IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0)
//                           WHERE  s.created_at BETWEEN  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . " AND " . DB::getPdo()->quote(date('Y-m-d 23:59:59', strtotime($al))) . "
//                           ),0) as s_salida"),
//
//
//    DB::raw("IFNULL((SELECT IFNULL(ds.cantidad,0)
//                WHERE s.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
//                ),0)
//                as ci_salida"),
//    DB::raw("IFNULL((SELECT IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0)
//                WHERE s.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
//                ),0)
//                as si_salida"),
//    DB::raw('0 as ci_ingreso,0 as si_ingreso'),
//
//
//    'lote.id as lote','p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea"),'a.codigo as codigo'
//)
//    ->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
//    ->leftjoin('partida as p', 'p.id', '=', 'a.partida_id')
//    ->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
//    ->leftjoin('salida as s', 's.id', '=', 'ds.salida_id')
//    ->where('s.periodo_id', $periodo)
//    ->whereBetween('s.created_at',[date('Y-m-d H:i:s', strtotime($del)),date('Y-m-d 23:59:59', strtotime($al))])
//    ->whereNull('s.deleted_at')
//    ->where('lote.precio_u', '<>', 0)
//    ->unionAll($ingresos);
//
//$query = DB::query()->fromSub($salidas, 'q')
//    ->select(
//        DB::raw('SUM(q.c_entrada) as c_entrada ,SUM(q.c_salida) as c_salida,SUM(q.s_entrada) as s_entrada,SUM(q.s_salida) as s_salida'),
//        DB::raw("SUM(q.ci_ingreso-q.ci_salida) as c_inicial"),
//        DB::raw("SUM(q.si_ingreso-q.si_salida) as s_inicial"),
//        DB::raw('SUM(q.c_entrada-q.c_salida) as c_final'),
//        DB::raw('SUM(q.s_entrada-q.s_salida) as s_final'),
//        'q.lote','q.articulo','q.partida','q.precio_u', 'q.linea','q.num_linea','q.codigo'
//    )
//    ->groupBy('q.lote','q.partida','q.articulo','q.linea','q.precio_u','q.num_linea','q.codigo');
//
//return DB::query()->fromSub($query, 'q')
//    ->select('q.*')
//    ->whereRaw('q.s_final '.$saldo.' ? ',[0])
//    ->orderBy('q.partida','ASC')
//    ->orderBy('q.codigo','ASC')
//    //->orderBy('q.fecha','ASC')
//    ->orderBy('q.lote','ASC')
//    ->get();

























//$periodo = Periodo::where('id',$periodo)->withTrashed()
//    ->where('estado','=',Periodo::FINALIZADO)
//    ->orWhere('estado','=',Periodo::EN_CURSO)
//    ->first();
//
//$saldo = filter_var($conSaldo,FILTER_VALIDATE_BOOLEAN) ? '>=' : '<>';
//
//$ingresos =  Lote::select(
//    DB::raw('a.linea as linea,a.codigo as codigo,a.nombre as articulo,i.nro_ingreso as ni,null as ns,um.nombre as medida,i.created_at as fecha,lote.precio_u as precio_u,lote.id as lote'),
//    DB::raw("CONCAT('linea',a.linea) as num_linea"),
//    DB::raw('null as unidad,0 as c_inicial,0 as s_inicial,di.cantidad as c_ingreso'),
//    DB::raw('(di.cantidad*lote.precio_u) as s_ingreso'),
//    DB::raw('0 as c_salida,0 as s_salida, di.cantidad as c_final,(di.cantidad*lote.precio_u) as s_final')
//)
//    ->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
//    ->leftjoin('unidad_medida as um', 'um.id', '=', 'lote.unidad_medida_id')
//    ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
//    ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
//    ->where('i.periodo_id', $periodo->id)
//    ->whereNull('i.deleted_at')
//    ->whereBetween('i.created_at',[
//        date('Y-m-d H:i:s', strtotime($periodo->fecha_inicio)),
//        date('Y-m-d 23:59:59', strtotime($periodo->fecha_fin))
//    ])
//    ->whereBetween('i.created_at',[date('Y-m-d H:i:s', strtotime($del)),date('Y-m-d 23:59:59', strtotime($al))])
//    ->where('lote.precio_u', '<>', 0);
//
//$salidas =  Lote::select(
//    DB::raw('a.linea as linea,a.codigo as codigo,a.nombre as articulo,null as ni,s.nro_salida as ns,um.nombre as medida,s.created_at as fecha,lote.precio_u as precio_u,lote.id as lote'),
//    DB::raw("CONCAT('linea',a.linea) as num_linea"),
//    DB::raw('unidad.nombre as unidad,
//                di.cantidad - ( SUM(ds.cantidad) OVER (PARTITION BY lote.id  ORDER BY s.created_at)) + (ds.cantidad) as c_inicial,
//                (di.cantidad*lote.precio_u) - (SUM(ds.cantidad*lote.precio_u) OVER (PARTITION BY lote.id  ORDER BY s.created_at)) + ds.cantidad*lote.precio_u as s_inicial
//                ,0 as c_ingreso,0 as s_ingreso'),
//    DB::raw('ds.cantidad as c_salida,ds.cantidad*lote.precio_u as s_salida,
//                (di.cantidad) - (SUM(ds.cantidad) OVER (PARTITION BY lote.id  ORDER BY s.created_at)) as c_final,
//                (di.cantidad*lote.precio_u) - (SUM(ds.cantidad*lote.precio_u) OVER (PARTITION BY lote.id  ORDER BY s.created_at)) as s_final'
//    )
//)
//    ->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
//    ->leftjoin('unidad_medida as um', 'um.id', '=', 'lote.unidad_medida_id')
//    ->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
//    ->leftjoin('salida as s', 's.id', '=', 'ds.salida_id')
//    ->leftjoin('solicitante as so','so.id','=','s.solicitante_id')
//    ->leftjoin('unidad as unidad','unidad.id','=','so.unidad_id')
//    ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
//    ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
//    ->where('s.periodo_id', $periodo->id)
//    ->whereNull('i.deleted_at')
//    ->whereNull('s.deleted_at')
//    ->whereBetween('i.created_at',[
//        date('Y-m-d H:i:s', strtotime($periodo->fecha_inicio)),
//        date('Y-m-d 23:59:59', strtotime($periodo->fecha_fin))
//    ])
//    ->whereBetween('s.created_at',[
//        date('Y-m-d H:i:s', strtotime($periodo->fecha_inicio)),
//        date('Y-m-d 23:59:59', strtotime($periodo->fecha_fin))
//    ])
//    ->whereBetween('s.created_at',[date('Y-m-d H:i:s', strtotime($del)),date('Y-m-d 23:59:59', strtotime($al))])
//    ->where('lote.precio_u', '<>', 0)
//    ->unionAll($ingresos)
//
//    ->orderBy('codigo', 'asc')
//    ->orderBy('fecha', 'asc')
//    ->orderBy('lote', 'asc');
////->orderBy('ni', 'asc')
//
//
////        return $salidas;
//
//return DB::query()->fromSub($salidas, 'q')
//    ->select('q.*')
//    ->where('q.s_final',$saldo,0)
//    ->get();
