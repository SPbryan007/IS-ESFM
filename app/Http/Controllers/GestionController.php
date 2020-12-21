$inicial =  Lote::select(
//DB::raw( 'lote.id as lote'),
DB::raw('0 as c_entrada,0 as s_entrada'),
DB::raw('0 as c_salida, 0 as s_salida'),
//DB::raw('0 as s_final'),
DB::raw("IFNULL((SELECT (SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u))
FROM lote as l
WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($al))) . "
),0)
as s_final"),
DB::raw("IFNULL((SELECT (SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u))
FROM lote as l
WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
),0)
as s_inicial"),
//   DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u ) as s_inicial'),
'lote.id as lote', 'p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea")


)
->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
->leftjoin('partida as p', 'p.id', '=', 'a.partida_id')
->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
->leftjoin('salida as s', 's.id', '=', 'ds.salida_id')
->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
->where('i.periodo_id', 1)
// ->where('i.created_at', '<=', date('Y-m-d H:i:s', strtotime($del)) )
->whereNull('i.deleted_at')
->whereNull('s.deleted_at')
->where('lote.precio_u', '<>', 0)
->groupBy('a.id', 'a.linea','lote.precio_u','lote.id','i.created_at');
//            ->orderBy('p.codigo', 'asc')
//            ->orderBy('a.nombre', 'asc');

//        $final = Lote::select(
//            DB::raw('0 as c_entrada,0 as s_entrada'),
//            DB::raw('0 as c_salida, 0 as s_salida'),
//            DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u ) as s_final'),
//            DB::raw('0 as s_inicial'),
//            'p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea")
//        )
//            ->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
//            ->leftjoin('partida as p', 'p.id', '=', 'a.partida_id')
//            ->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
//            ->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
//            ->leftjoin('salida as s', 's.id', '=', 'ds.salida_id')
//            ->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
//            ->where('i.periodo_id', 1)
//            ->where('i.created_at', '<=', date('Y-m-d H:i:s', strtotime($al)) )
//            ->whereNull('i.deleted_at')
//            ->whereNull('s.deleted_at')
//            ->where('lote.precio_u', '<>', 0)
//            ->unionAll($inicial)
//            ->groupBy('a.id', 'a.linea', 'lote.id', 'i.created_at');
//            ->orderBy('p.codigo', 'asc')
//            ->orderBy('a.nombre', 'asc')


$entradas = Lote::select(
DB::raw( 'a.id as id'),
DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)) as c_entrada,SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) as s_entrada'),
DB::raw('0 as c_salida, 0 as s_salida'),
DB::raw('0 as s_inicial'),
DB::raw('0 as s_final'),
'lote.id as lote', 'p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea")
)
->join('articulo as a', 'lote.articulo_id', '=', 'a.id')
->join('partida as p', 'p.id', '=', 'a.partida_id')
->join('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
->join('ingreso as i', 'i.id', '=', 'di.ingreso_id')
->where('i.periodo_id', 1)
->whereNull('i.deleted_at')
->where('lote.precio_u', '<>', 0)
->groupBy('a.id', 'a.linea','lote.precio_u','lote.id','i.created_at')
->orderBy('p.codigo', 'asc')
->orderBy('a.nombre', 'asc');

$salidas = Lote::select(
DB::raw( 'a.id as id'),
DB::raw('0 as c_entrada, 0 as s_entrada'),
DB::raw('SUM(IFNULL(ds.cantidad,0)) as c_salida,SUM(IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0)) as s_salida'),
DB::raw('0 as s_inicial'),
DB::raw('0 as s_final'),
'lote.id as lote', 'p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea")

)
->join('articulo as a', 'lote.articulo_id', '=', 'a.id')
->join('partida as p', 'p.id', '=', 'a.partida_id')
->join('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
->join('salida as s', 's.id', '=', 'ds.salida_id')
->where('s.periodo_id',1)
->whereNull('s.deleted_at')
->where('lote.precio_u', '<>', 0)
->groupBy('a.id', 'a.linea','lote.precio_u','lote.id' ,'s.created_at')
->orderBy('p.codigo', 'asc')
->orderBy('a.nombre', 'asc')
->unionAll($entradas);
//->union($inicial);

return DB::query()->fromSub($salidas, 'q')
->select(
DB::raw('SUM(q.c_entrada) as c_entrada ,SUM(q.c_salida) as c_salida,SUM(q.s_entrada) as s_entrada,SUM(q.s_salida) as s_salida'),
// DB::raw('SUM(q.c_entrada - q.c_salida) as c_final'),
DB::raw('SUM(q.s_final) as s_final'),
DB::raw('SUM(q.s_inicial) as s_inicial'),
'q.lote as lote', 'q.partida as partida', 'q.articulo as articulo', 'q.precio_u as precio_u', 'q.linea as linea', 'q.num_linea as num_linea'
)

->join('lote','lote.id','=','q.lote')
->join('articulo as a', 'a.id', '=', 'lote.articulo_id')
->join('partida as p', 'p.id', '=', 'a.partida_id')
->join('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
->join('ingreso as i', 'i.id', '=', 'di.ingreso_id')
->whereDate('i.created_at', '>=', $del)
->whereDate('i.created_at', '<=', $al)
->where('i.periodo_id', $periodo)
->whereNull('i.deleted_at')
->where('lote.precio_u', '<>', 0)
->unionAll($inicial)
//  ->groupBy('a.id', 'a.linea','lote.precio_u','lote.id' ,'i.created_at')->get();
->groupBy('q.articulo','q.partida', 'q.linea','q.precio_u','q.lote','q.num_linea')->get();





















$inicial =  Lote::select(
//  DB::raw( 'lote.id as lote'),
DB::raw('0 as c_entrada,0 as s_entrada'),
DB::raw('0 as c_salida, 0 as s_salida'),
//DB::raw('0 as s_final'),
DB::raw("IFNULL((SELECT (SUM(DISTINCT IFNULL(di.cantidad,0)) - SUM(IFNULL(ds.cantidad,0)))
FROM lote as l
WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
GROUP BY `a`.`id`,`l`.`precio_u`),0)
as c_inicial"),
DB::raw("IFNULL((SELECT (SUM(DISTINCT IFNULL(di.cantidad,0)) - SUM(IFNULL(ds.cantidad,0)))
FROM lote as l
WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($al))) . "
GROUP BY `a`.`id`,`l`.`precio_u`),0)
as c_final"),
DB::raw("IFNULL((SELECT (SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u))
FROM lote as l
WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
GROUP BY `a`.`id`,`l`.`precio_u`),0)
as s_inicial"),
DB::raw("IFNULL((SELECT (SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u))
FROM lote as l
WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($al))) . "
GROUP BY `a`.`id`,`l`.`precio_u`),0)
as s_final"),



//   DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u ) as s_inicial'),
'lote.id as lote', 'p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea")


)
->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
->leftjoin('partida as p', 'p.id', '=', 'a.partida_id')
->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
->leftjoin('salida as s', 's.id', '=', 'ds.salida_id')
->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
->where('i.periodo_id', 1)
// ->where('i.created_at', '<=', date('Y-m-d H:i:s', strtotime($del)) )
->whereNull('i.deleted_at')
->whereNull('s.deleted_at')
->where('lote.precio_u', '<>', 0)
->groupBy('a.id','p.codigo', 'a.linea','lote.precio_u','lote.id','i.created_at');

$entradas = Lote::select(
DB::raw( 'a.id as id'),
DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)) as c_entrada,SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) as s_entrada'),
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
->where('lote.precio_u', '<>', 0)
->groupBy('a.id','p.codigo','a.linea','lote.precio_u','i.created_at')
->orderBy('p.codigo', 'asc')
->orderBy('a.nombre', 'asc');

$salidas = Lote::select(
DB::raw( 'a.id as id'),
DB::raw('0 as c_entrada, 0 as s_entrada'),
DB::raw('SUM(IFNULL(ds.cantidad,0)) as c_salida,SUM(IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0)) as s_salida'),
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
->groupBy('a.id', 'p.codigo','a.linea','lote.precio_u' ,'s.created_at')
->orderBy('p.codigo', 'asc')
->orderBy('a.nombre', 'asc')
->unionAll($entradas);

$query =  DB::query()->fromSub($salidas, 'q')
->select(
DB::raw('SUM(q.c_entrada) as c_entrada ,SUM(q.c_salida) as c_salida,SUM(q.s_entrada) as s_entrada,SUM(q.s_salida) as s_salida'),
DB::raw('SUM(q.c_inicial) as c_inicial'),
DB::raw('SUM(q.c_final) as c_final'),
DB::raw('SUM(q.s_inicial) as s_inicial'),
DB::raw('SUM(q.s_final) as s_final'),

//'q.lote as lote','q.partida as partida', 'q.articulo as articulo', 'q.precio_u as precio_u', 'q.linea as linea', 'q.num_linea as num_linea'
'lote.id as lote', 'p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea")
)
->join('articulo as a', 'a.id', '=', 'q.id')
->join('lote','lote.articulo_id','=','a.id')
->join('partida as p', 'p.id', '=', 'a.partida_id')
->join('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
->join('ingreso as i', 'i.id', '=', 'di.ingreso_id')
->whereDate('i.created_at', '>=', $del)
->whereDate('i.created_at', '<=', $al)
->where('i.periodo_id', $periodo)
->whereNull('i.deleted_at')
->where('lote.precio_u', '<>', 0)
->unionAll($inicial)
->groupBy('a.id','p.codigo', 'a.linea','lote.precio_u','lote.id');

return DB::query()->fromSub($query, 'q')
->select(
DB::raw('SUM(q.c_entrada) as c_entrada ,SUM(q.c_salida) as c_salida,SUM(q.s_entrada) as s_entrada,SUM(q.s_salida) as s_salida'),
DB::raw('SUM(q.c_inicial) as c_inicial'),
DB::raw('SUM(q.c_final) as c_final'),
DB::raw('SUM(q.s_inicial) as s_inicial'),
DB::raw('SUM(q.s_final) as s_final'),

'q.articulo','q.partida','q.precio_u', 'q.linea','q.num_linea'

)
->groupBy('q.articulo','q.partida','q.linea','q.precio_u','q.num_linea')->get();
















$inicial = Lote::select(
//  DB::raw( 'lote.id as lote'),
DB::raw('0 as c_entrada,0 as s_entrada'),
DB::raw('0 as c_salida, 0 as s_salida'),
//DB::raw('0 as s_final'),
DB::raw("IFNULL((SELECT (SUM(DISTINCT IFNULL(di.cantidad,0)) - SUM(IFNULL(ds.cantidad,0)))
FROM lote as l
WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
GROUP BY `a`.`id`,`l`.`precio_u`,l.id),0)
as c_inicial"),
DB::raw("SUM(DISTINCT IFNULL(di.cantidad,0)) - SUM(IFNULL(ds.cantidad,0)) as c_final"),
DB::raw("IFNULL((SELECT (SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u))
FROM lote as l
WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
GROUP BY `a`.`id`,`l`.`precio_u`,l.id),0)
as s_inicial"),
DB::raw("(SUM(DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u)) as s_final"),



//   DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u ) as s_inicial'),
'lote.id as lote', 'p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea")


)































$inicial = Lote::select(
//  DB::raw( 'lote.id as lote'),
DB::raw('0 as c_entrada,0 as s_entrada'),
DB::raw('0 as c_salida, 0 as s_salida'),
//DB::raw('0 as s_final'),
DB::raw("IFNULL((SELECT (SUM(DISTINCT IFNULL(di.cantidad,0)) - SUM(IFNULL(ds.cantidad,0)))
FROM lote as l
WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
GROUP BY `a`.`id`,`l`.`precio_u`,l.id),0)
as c_inicial"),
DB::raw("SUM(DISTINCT IFNULL(di.cantidad,0)) - SUM(IFNULL(ds.cantidad,0)) as c_final"),
DB::raw("IFNULL((SELECT (SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u))
FROM lote as l
WHERE `l`.`precio_u` <> 0 AND `l`.`articulo_id` = `a`.`id` AND i.created_at <=  " . DB::getPdo()->quote(date('Y-m-d H:i:s', strtotime($del))) . "
GROUP BY `a`.`id`,`l`.`precio_u`,l.id),0)
as s_inicial"),
DB::raw("(SUM(DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u)) as s_final"),

//   DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) - SUM(IFNULL(ds.cantidad,0)*lote.precio_u ) as s_inicial'),
'lote.id as lote', 'p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea")

)
->leftjoin('articulo as a', 'lote.articulo_id', '=', 'a.id')
->leftjoin('partida as p', 'p.id', '=', 'a.partida_id')
->leftjoin('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'lote.id')
->leftjoin('salida as s', 's.id', '=', 'ds.salida_id')
->leftjoin('ingreso as i', 'i.id', '=', 'di.ingreso_id')
->where('i.periodo_id', 1)
->where('i.created_at', '<=', date('Y-m-d H:i:s', strtotime($al)) )
->whereNull('i.deleted_at')
->whereNull('s.deleted_at')
->where('lote.precio_u', '<>', 0)
->groupBy('a.id','p.codigo', 'a.linea','lote.precio_u','lote.id','i.created_at');

$entradas = Lote::select(
DB::raw( 'a.id as id'),
DB::raw('SUM(DISTINCT IFNULL(di.cantidad,0)) as c_entrada,SUM( DISTINCT IFNULL(di.cantidad,0)*IFNULL(lote.precio_u,0)) as s_entrada'),
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
->where('lote.precio_u', '<>', 0)
->groupBy('a.id','p.codigo','a.linea','lote.precio_u','lote.id','i.created_at')
->orderBy('p.codigo', 'asc')
->orderBy('a.nombre', 'asc');

$salidas = Lote::select(
DB::raw( 'a.id as id'),
DB::raw('0 as c_entrada, 0 as s_entrada'),
DB::raw('SUM(IFNULL(ds.cantidad,0)) as c_salida,SUM(IFNULL(ds.cantidad,0)*IFNULL(lote.precio_u,0)) as s_salida'),
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
->groupBy('a.id', 'p.codigo','a.linea','lote.precio_u' ,'lote.id','s.created_at')
->orderBy('p.codigo', 'asc')
->orderBy('a.nombre', 'asc')
->unionAll($entradas);

$query =  DB::query()->fromSub($salidas, 'q')
->select(
DB::raw('SUM(q.c_entrada) as c_entrada ,SUM(q.c_salida) as c_salida,SUM(q.s_entrada) as s_entrada,SUM(q.s_salida) as s_salida'),
DB::raw('SUM(q.c_inicial) as c_inicial'),
DB::raw('SUM(q.c_final) as c_final'),
DB::raw('SUM(q.s_inicial) as s_inicial'),
DB::raw('SUM(q.s_final) as s_final'),

//'q.lote as lote','q.partida as partida', 'q.articulo as articulo', 'q.precio_u as precio_u', 'q.linea as linea', 'q.num_linea as num_linea'
'lote.id as lote', 'p.codigo as partida', 'a.nombre as articulo', 'lote.precio_u as precio_u', 'a.linea as linea', DB::raw("CONCAT('linea',a.linea) as num_linea")
)
->join('articulo as a', 'a.id', '=', 'q.id')
->join('lote','lote.articulo_id','=','a.id')
->join('partida as p', 'p.id', '=', 'a.partida_id')
->join('detalle_ingreso as di', 'di.lote_id', '=', 'lote.id')
->join('ingreso as i', 'i.id', '=', 'di.ingreso_id')
->whereDate('i.created_at', '>=', $del)
->whereDate('i.created_at', '<=', $al)
->where('i.periodo_id', $periodo)
->whereNull('i.deleted_at')
->where('lote.precio_u', '<>', 0)
->unionAll($inicial)
->groupBy('a.id','p.codigo', 'a.linea','lote.precio_u','lote.id');

return DB::query()->fromSub($query, 'q')
->select(
DB::raw('SUM(q.c_entrada) as c_entrada ,SUM(q.c_salida) as c_salida,SUM(q.s_entrada) as s_entrada,SUM(q.s_salida) as s_salida'),
DB::raw('SUM(q.c_inicial) as c_inicial'),
DB::raw('SUM(q.c_final) as c_final'),
DB::raw('SUM(q.s_inicial) as s_inicial'),
DB::raw('SUM(q.s_final) as s_final'),

'q.articulo','q.partida','q.precio_u', 'q.linea','q.num_linea'

)
->groupBy('q.articulo','q.partida','q.linea','q.precio_u','q.num_linea')->get();
