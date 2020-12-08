<?php

namespace App\Repositories;

use App\Models\Funcionario;
use App\Models\Solicitante;
use App\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\ConflictHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class SolicitanteRepository
{
    /**
     * @var FuncionarioRepository
     */
    private $funRepository;
    /**
     * @var UnidadRepository
     */
    private $unidadRepository;


    /**
     * SolicitanteRepository constructor.
     * @param FuncionarioRepository $funRepository
     * @param UnidadRepository $unidadRepository
     */
    public function __construct(FuncionarioRepository $funRepository, UnidadRepository $unidadRepository)
    {
        $this->funRepository = $funRepository;
        $this->unidadRepository = $unidadRepository;
    }

    /**
     * @return mixed
     */
    public function getAllSolicitante($withTrashed)
    {

        /*return Solicitante::select(
                    'solicitante.id_solicitante AS id_solicitante',
                     DB::raw("CONCAT(fun.nombre,' ', fun.apellido) AS nombre"),
                    'solicitante.cargo AS cargo',
                    'u.id AS unidad_id',
                    'u.nombre AS unidad_nombre',
                    'solicitante.deleted_at as estado'
                )
                ->join('funcionario as fun','fun.id','=','solicitante.id_solicitante')
                ->join('unidad as u', 'solicitante.unidad_id', '=', 'u.id')
                ->withTrashed()
                ->get();*/

               /* return Solicitante::with(['funcionario' => function ($q){
                    return $q->withoutTrashed();
                },'unidad'])->get();*/
        return Solicitante::with(['funcionario' => function($query){
                        $query->withTrashed();
                    },'unidad' => function($query){
                        $query->withTrashed();
                    }])
                    ->whereHas('funcionario' ,function($query){
                        //$query->withoutTrashed();
                        $query->withTrashed();
                    })
                    ->withTrashed(filter_var($withTrashed,FILTER_VALIDATE_BOOLEAN))
                    ->orderBy('id','DESC')
                    ->get();

        /*return Solicitante::with(['funcionario','unidad'])
                    ->withTrashed(filter_var($withTrashed,FILTER_VALIDATE_BOOLEAN))
                    ->orderBy('id_solicitante','DESC')
                    ->get();*/

       /* return Solicitante::with(array('funcionario'=>function($query){
            $query->select('id','nombre');
        }))->get();*/
    }

    /**
     * @param $id
     * @return Solicitante
     */
    public function getById($id) : Solicitante
    {
        $solicitante = Solicitante::find($id);
        if(!$solicitante){
            throw new NotFoundHttpException("No existe el solicitante con el ID : {$id}");
        }
        return $solicitante;
    }

    /**
     * @param $funcionario_id
     * @param $unidad_id
     * @param $cargo
     */
    public function register($funcionario_id, $unidad_id, $cargo)
    {
        $fun    = $this->funRepository->getAllById($funcionario_id);
        $unidad = $this->unidadRepository->getById($unidad_id);
        $sol = Solicitante::where('funcionario_id',$fun->id)->first();
        if(!$sol){
            $solicitante                    = new Solicitante();
            $solicitante->funcionario_id    = $fun->id;
            $solicitante->cargo             = $cargo;
            $solicitante->unidad_id         = $unidad->id;
            $solicitante->save();
        }else{
            throw new ConflictHttpException("El solicitante ya se encuentra registrado.");
        }


      /*  try {

        } finally {
            throw new ConflictHttpException("El solicitante  {$fun->apellido} {$fun->nombre}  ya se encuentra registrado.");

        }*/
        /*if(!){
           throw new ConflictHttpException("El solicitante  {$fun->apellido} {$fun->nombre}  ya se encuentra registrado.");
           // throw  new QueryException('')
        }*/
        /*$data = Solicitante::select('solicitante.*','fun.*','u.nombre as unidad_nombre','u.idUnidad as unidad_id')
            ->join('funcionario as fun','fun.idFuncionario','=','solicitante.idSolicitante')
            ->join('unidad as u', 'solicitante.unidad_id', '=', 'u.idUnidad')
            ->where("funx.documento","=",$funcionario->documento)
            ->get()
            ->first();*/
    }

    /**
     * @param $id
     * @param $data
     */
    public function update($id, $data)
    {
        $unidad = $this->unidadRepository->getById($data->unidad_id);
        $solicitante            = $this->getById($id);

        if($unidad->id == $solicitante->unidad_id){
            $solicitante->cargo     = $data->cargo;
            $solicitante->save();
        }else{
            $exists = Solicitante::where('funcionario_id',$solicitante->funcionario_id)
                ->where('unidad_id',$unidad->id)
                ->withTrashed()
                ->first();
            if($exists){
                $this->setStatus($solicitante->id);
                $this->setStatus($exists->id);
            }else{
                $this->setStatus($solicitante->id);
                $sol                    = new Solicitante();
                $sol->funcionario_id    = $solicitante->funcionario_id;
                $sol->cargo             = $data->cargo;
                $sol->unidad_id         = $unidad->id;
                $sol->save();
            }
        }
    }


    /**
     * @param $id
     * @return string[]
     * @throws \Exception
     */
    public function setStatus($id)
    {
        $solicitante = Solicitante::withTrashed()->find($id);
        if($solicitante){
            if($solicitante->trashed()){
                $solicitante->restore();
                return ['message' => 'Solicitante activo'];
            }
            $solicitante->delete();
            return ['message' => 'Se ha dado de baja al solicitante.'];
        }
        throw new NotFoundHttpException("No existe el solicitante con el ID : {$id}");
    }

}

