<?php


namespace App\Repositories;



use App\Models\Articulo;
use App\Models\Lote;
use App\Models\Periodo;
use App\Models\Unidad;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ArticuloRepository
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
    ){

        $this->partidaRepository = $partidaRepository;
        $this->unidadMedidaRepository = $unidadMedidaRepository;
    }

    /**
     * @param $withTrashed
     * @return Articulo|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     */
    public function getAll($withTrashed)
    {
        $periodo = Periodo::latest()->withTrashed()
            ->where('estado','=',Periodo::FINALIZADO)
            ->orWhere('estado','=',Periodo::EN_CURSO)
            ->first();
        $periodo = $periodo ? $periodo->id : NULL;
        $articulos = Articulo::select('articulo.*',DB::raw('0 as stock,0 as saldo'))->with(['partida' => function($query){
            $query->withTrashed();
        }])
            ->whereDoesntHave('lotes',function($query) use($periodo){
                $query->withoutTrashed();
                $query->whereDoesntHave('detalleingreso',function($query) use($periodo){
                    $query->withoutTrashed();
                    $query->whereDoesntHave('ingreso',function($query) use($periodo){
                        $query->withoutTrashed();
                        $query->where('periodo_id',$periodo);
                    });
                });
            })
            ->withTrashed(filter_var($withTrashed,FILTER_VALIDATE_BOOLEAN))
            ->orderBy('id','DESC');

        return Articulo::select('articulo.*',
            DB::raw('ROUND(IFNULL(SUM(lote.stock),0),2) as stock,ROUND(IFNULL(SUM(lote.stock*lote.precio_u),0),2) as saldo')
        )
            ->leftjoin('lote as lote','lote.articulo_id','=','articulo.id')
            ->leftjoin('detalle_ingreso as ds','ds.lote_id','=','lote.id')
            ->leftjoin('ingreso as i','ds.ingreso_id','=','i.id')

            ->with(['partida' => function($query){
            $query->withTrashed();
        },'lotes' => function($query) use($periodo){
                $query->withTrashed(false);
                $query->with(['detalleingreso','unidad_medida' => function($query){
                    $query->withTrashed();
                }]);
                $query->whereHas('detalleingreso',function ($query) use($periodo){
                    $query->whereHas('ingreso',function ($query) use($periodo){
                        $query->whereNull('deleted_at');
                        $query->where('periodo_id',$periodo);
                    });
                });
                $query->where('stock','<>',0);
                $query->where('precio_u','<>',0);
                $query->orderBy('stock','DESC');

            }])
//            ->whereHas('lotes',function ($query){
//                $query->withTrashed(false);
//                $query->whereHas('detalleingreso',function ($query){
//                    $query->whereHas('ingreso',function ($query){
//                        $query->whereNull('deleted_at');
//                    });
//                });
//            })
            ->where('i.periodo_id',$periodo)
            ->whereNull('lote.deleted_at')
            ->whereNull('i.deleted_at')
            ->withTrashed(filter_var($withTrashed,FILTER_VALIDATE_BOOLEAN))
            ->union($articulos)

            ->groupBy('id')
            ->orderBy('id','DESC')
            ->get();

//        return Articulo::select('articulo.*',
//            DB::raw('SUM(lote.stock) as stock')
//        )
//            ->leftjoin('lote as lote','lote.id','=','articulo.id')
//            ->with(['partida' => function($query){
//            $query->withTrashed();
//        },'unidad_medida' => function($query){
//            $query->withTrashed();
//        }])
//            ->whereNull('lote.deleted_at')
//            ->withTrashed(filter_var($withTrashed,FILTER_VALIDATE_BOOLEAN))
//            ->groupBy('articulo.id')
//            ->orderBy('id','DESC')
//            ->get();
//        return Articulo::with(['partida' => function($query){
//            $query->withTrashed();
//        },'unidad_medida' => function($query){
//            $query->withTrashed();
//        }])
//            ->withTrashed(filter_var($withTrashed,FILTER_VALIDATE_BOOLEAN))
//            ->orderBy('id','DESC')
//            ->get();
    }

    public function getTotal($articulo)
    {

        $periodo = Periodo::latest()->withTrashed()
            ->where('estado','=',Periodo::FINALIZADO)
            ->orWhere('estado','=',Periodo::EN_CURSO)
            ->first();
        $periodo = $periodo ? $periodo->id : NULL;

        return Articulo::select(DB::raw('IFNULL(SUM(lote.stock),0) as stock,IFNULL(SUM(lote.saldo),0) as saldo'),
            'articulo.nombre as nombre','articulo.id as id')
            ->leftjoin('lote','lote.articulo_id','=','articulo.id')
            ->leftjoin('detalle_ingreso as di','di.lote_id','=','lote.id')
            ->leftjoin('ingreso as i','i.id','=','di.ingreso_id')
            ->where('articulo.id',$articulo)
            ->where('i.periodo_id', '=', $periodo) //Periodo::latest()->first()->id
            ->whereNull('i.deleted_at')
            ->groupBy('articulo.id')
            ->first();

//        $periodo = Periodo::latest()->withTrashed()
//            ->where('estado','=',Periodo::FINALIZADO)
//            ->orWhere('estado','=',Periodo::EN_CURSO)
//            ->first();
//        $periodo = $periodo ? $periodo->id : NULL;
//
//        return Articulo::select(DB::raw('IFNULL(SUM(lote.stock),0) as stock,IFNULL(SUM(lote.saldo),0) as saldo'),
//            'articulo.nombre as nombre','articulo.id as id','um.nombre as unidad')
//            ->leftjoin('lote','lote.articulo_id','=','articulo.id')
//            ->leftjoin('unidad_medida as um','um.id','=','lote.unidad_medida_id')
//            ->leftjoin('detalle_ingreso as di','di.lote_id','=','lote.id')
//            ->leftjoin('ingreso as i','i.id','=','di.ingreso_id')
//            ->where('articulo.id',$articulo)
//            ->where('i.periodo_id', '=', $periodo) //Periodo::latest()->first()->id
//            ->whereNull('i.deleted_at')
//            ->groupBy('articulo.id')
//            ->first();
//        return Articulo::select(DB::raw('IFNULL(SUM(lote.stock),0) as stock,IFNULL(SUM(lote.saldo),0) as saldo'),
//            'articulo.nombre as nombre','articulo.id as id','um.nombre as unidad')
//            ->leftjoin('lote','lote.articulo_id','=','articulo.id')
//            ->leftjoin('unidad_medida as um','um.id','=','articulo.unidad_medida_id')
//            ->leftjoin('detalle_ingreso as di','di.lote_id','=','lote.id')
//            ->leftjoin('ingreso as i','i.id','=','di.ingreso_id')
//            ->where('articulo.id',$articulo)
//            ->where('i.periodo_id', '=', Periodo::latest()->first()->id)
//            ->whereNull('i.deleted_at')
//            ->groupBy('articulo.id')
//            ->first();
    }


    /**
     * @param $id
     * @return Articulo
     */
    public function getById($id) : Articulo
    {
        $articulo = Articulo::find($id);
        if(!$articulo)
            throw new NotFoundHttpException("No existe el articulo con ID : {$id}");
        return $articulo;
    }


    public function register($data)
    {
//        $this->unidadMedidaRepository->getById($data->unidad_medida_id);
        $this->partidaRepository->getById($data->partida_id);

        $articulo                   =  new Articulo();
        $articulo->nombre           =  $data->nombre;
        $articulo->linea            =  $data->linea;
        $articulo->partida_id       =  $data->partida_id;
//        $articulo->unidad_medida_id = $data->unidad_medida_id;
        $articulo->save();
    }

    /**
     * @param $id
     * @param $data
     */
    public function update($id, $data)
    {

        $this->partidaRepository->getById($data->partida_id);
//        $this->unidadMedidaRepository->getById($data->unidad_medida_id);
        $articulo                 = $this->getById($id);
        $articulo->nombre           =  $data->nombre;
        $articulo->linea            =  $data->linea;
        $articulo->partida_id       =  $data->partida_id;
//        $articulo->unidad_medida_id = $data->unidad_medida_id;
        $articulo->save();
    }


    /**
     * @param $id
     * @throws \Exception
     */
    public function setStatus($id)
    {
        $articulo = Articulo::withTrashed()->find($id);
        if($articulo){
            if($articulo->trashed()){
                $articulo->restore();
                return ['message' => 'Ariculo activo'];
            }
            $articulo->delete();
            return ['message' => 'Se ha dado de baja al articulo.'];
        }
        throw new NotFoundHttpException("No existe el articulo con el ID : {$id}");
    }

}
