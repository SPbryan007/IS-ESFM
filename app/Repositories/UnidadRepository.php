<?php


namespace App\Repositories;



use App\Models\Unidad;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class UnidadRepository
{
    /**
     * @var FuncionarioRepository
     */
    private $funRepository;

    /**
     * UnidadRepository constructor.
     * @param FuncionarioRepository $funRepository
     */
    public function __construct(FuncionarioRepository $funRepository)
    {
        $this->funRepository = $funRepository;
    }

    public function getAllUnidad($withTrashed)
    {
        return Unidad::with(['funcionario' => function($query){
            $query->withTrashed();
        }])
            ->withTrashed(filter_var($withTrashed,FILTER_VALIDATE_BOOLEAN))
            ->orderBy('id','DESC')
            ->get();
    }
    /**
     * @param $id
     * @return Unidad
     */
    public function getById($id) : Unidad
    {
        $unidad = Unidad::find($id);
        if(!$unidad)
            throw new NotFoundHttpException("No existe la unidad con ID : {$id}");
        return $unidad;
    }

    /**
     * @param $funcionario_id
     * @param $nombre
     */
    public function register($funcionario_id, $nombre)
    {
        $this->funRepository->getAllById($funcionario_id);
        $unidad                 =  new Unidad();
        $unidad->nombre         =  $nombre;
        $unidad->funcionario_id =  $funcionario_id;
        $unidad->save();
    }

    /**
     * @param $id
     * @param $data
     */
    public function update($id, $data)
    {
        $fun = $this->funRepository->getAllById($data->funcionario_id);
        $unidad                 = $this->getById($id);
        $unidad->nombre         = $data->nombre;
        $unidad->funcionario_id = $fun->id;
        $unidad->save();
    }


    /**
     * @param $id
     * @throws \Exception
     */
    public function setStatus($id)
    {
        $unidad = Unidad::withTrashed()->find($id);
        if($unidad){
            if($unidad->trashed()){
                $unidad->restore();
                return ['message' => 'Unidad activa'];
            }
            $unidad->delete();
            return ['message' => 'Se ha dado de baja a la unidad.'];
        }
        throw new NotFoundHttpException("No existe la unidad con el ID : {$id}");
    }

    /**
     * @param $id
     */
    public function removeFun($id)
    {
        $unidad = Unidad::where('funcionario_id',$id)->first();
        if($unidad){
            $unidad->funcionario_id = NULL;
            $unidad->save();
        }
        throw  new NotFoundHttpException('El funcionario no es responsable de inguna unidad');

    }


}
