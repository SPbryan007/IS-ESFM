<?php

namespace App\Repositories;

use App\Models\User;
use App\Role;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\ConflictHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class UserRepository
{
    /**
     * @var FuncionarioRepository
     */
    private $funRepository;

    /**
     * UserRepository constructor.
     * @param FuncionarioRepository $funRepository
     */
    public function __construct(FuncionarioRepository  $funRepository)
    {
        $this->funRepository = $funRepository;
    }

    /**
     * @return mixed
     */
    public function getAllUsers($withTrashed)
    {
        return User::with('funcionario')->withTrashed(filter_var($withTrashed,FILTER_VALIDATE_BOOLEAN))
            ->orderBy('id_usuario','DESC')
            ->get();
    }

    public function getById($id){
        $user = User::with('funcionario')->find($id);
        if(!$user){
            throw new NotFoundHttpException("No existe el usuario con el ID : {$id}");
        }
        return $user;
    }

    /**
     * @param $id
     * @return User
     */
    public function getAllById($id) : User
    {
        $user = User::find($id);
        if(!$user){
            throw new NotFoundHttpException("No existe el usuario con el ID : {$id}");
        }
        return $user;
    }

    /**
     * @param $id
     * @param $document
     * @param $rol
     */
    public function register($id,$rol){

        $fun = $this->funRepository->getAllById($id);
        $user = new User();
        $user->id_usuario = $fun->id;
        $user->username   = $fun->documento;
        $user->password   = bcrypt($fun->documento);
        $user->rol        = filter_var($rol,FILTER_VALIDATE_BOOLEAN) ? Role::ADMIN : Role::DEFAULT;
        $user->save();
    }

    /**
     * @param $id
     */
    public function changeRole($id)
    {
        $user = $this->getAllById($id);
        $rol = $user->rol;
        $user->rol = $rol === Role::ADMIN ? Role::DEFAULT : Role::ADMIN;
        $user->save();
    }

    public function setStatus($id)
    {
        $usuario = User::withTrashed()->find($id);
        if($usuario){
            if($usuario->trashed()){
                $usuario->restore();
                return ['message' => 'Usuario activo'];
            }
            $usuario->delete();
            return ['message' => 'Se ha dado de baja al usuario.'];
        }
        throw new NotFoundHttpException("No existe el usuario con el ID : {$id}");
    }

}

