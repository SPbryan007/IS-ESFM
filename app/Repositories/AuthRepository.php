<?php

namespace App\Repositories;


use App\Role;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\UnauthorizedException;
use PhpParser\Node\Stmt\TryCatch;
use Symfony\Component\HttpKernel\Exception\ConflictHttpException;

class AuthRepository
{
    /**
     * @var UserRepository
     */
    private $userRepository;
    /**
     * @var FuncionarioRepository
     */
    private $funRepository;

    /**
     * AuthRepository constructor.
     * @param UserRepository $userRepository
     * @param FuncionarioRepository $funRepository
     */
    public function __construct(
        UserRepository $userRepository,
        FuncionarioRepository $funRepository
    ){

        $this->userRepository = $userRepository;
        $this->funRepository = $funRepository;
    }

    /**
     * @param String $username
     * @param String $password
     *
     */
    public function authenticate(String $username, String $password)
    {
        if(!Auth::attempt(['username' => $username, 'password' => $password],false))
            throw new UnauthorizedException('Nombre de usuario o contraseña incorrectos.');
        return $this->userRepository->getById(Auth::user()->id_usuario);
    }

    public  function getUserLogged(){
        if(Auth::check()){
            return $this->userRepository->getById(Auth::user()->id_usuario);
        }
        throw new UnauthorizedException('No ha iniciado sesion.');
    }

    /**
     * @param $data
     * @return array
     */
    public function register($data)
    {
        try {
            DB::beginTransaction();
            $func = $this->funRepository->register($data);
            $this->userRepository->register($func->id,$data->rol);
            DB::commit();
            return ['message' => 'Usuario creado exitosamente.','status' => 200];
        }catch (ConflictHttpException $e){
            DB::rollBack();
            return ['message' => $e->getMessage(),'status' => 409];
        }catch (\Exception $e){
            DB::rollBack();
            return ['message' => 'Ha ocurrido un error inesperado. > '.$e->getMessage(),'status' => 500];
        }
    }

    /**
     * @param $id
     * @throws \ErrorException
     */
    public function resetDefaultPassword($id)
    {
        $data = $this->funRepository->getAllById($id);
        $this->resetPassword($id,$data->documento,$data->documento);
    }

    public function resetPassword($id,$password,$username)
    {
        $user = $this->userRepository->getAllById($id);
        $user->username = $username;
        $user->password = bcrypt($password);
        $user->save();
     }
}

