<?php


namespace App\Repositories;



use App\Models\Articulo;
use App\Models\Lote;
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
        return Articulo::with(['partida','unidad_medida'])
            ->withTrashed(filter_var($withTrashed,FILTER_VALIDATE_BOOLEAN))
            ->orderBy('id','DESC')
            ->get();
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
        $this->unidadMedidaRepository->getById($data->unidad_medida_id);
        $this->partidaRepository->getById($data->partida_id);

        $articulo                   =  new Articulo();
        $articulo->nombre           =  $data->nombre;
        $articulo->linea            =  $data->linea;
        $articulo->partida_id       =  $data->partida_id;
        $articulo->unidad_medida_id = $data->unidad_medida_id;
        $articulo->save();
    }

    /**
     * @param $id
     * @param $data
     */
    public function update($id, $data)
    {
        $this->partidaRepository->getById($data->partida_id);
        $this->unidadMedidaRepository->getById($data->unidad_medida_id);
        $articulo                 = $this->getById($id);
        $articulo->nombre           =  $data->nombre;
        $articulo->linea            =  $data->linea;
        $articulo->partida_id       =  $data->partida_id;
        $articulo->unidad_medida_id = $data->unidad_medida_id;
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
