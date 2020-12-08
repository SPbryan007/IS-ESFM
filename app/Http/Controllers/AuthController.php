<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Repositories\AuthRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\UnauthorizedException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class AuthController extends Controller
{
    /**
     * @var AuthRepository
     */
    protected $authRepository;

    /**
     * AuthController constructor.
     * @param AuthRepository $authRepository
     */
    public function __construct(AuthRepository $authRepository)
    {
        $this->authRepository = $authRepository;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|max:25',
            'password' => 'required|string|max:25'
        ]);
        if($validator->fails()){
            return response()->json(['error' => 'Bad request'],400);
        }
        try {
            $user = $this->authRepository->authenticate($request->username, $request->password);
            return response()->json($user,200);
        }catch (UnauthorizedException $e){
            return response()->json(['error' => $e->getMessage()],401);
        }catch (\Exception $e){
            return response()->json(['error' => 'Ha ocurrido un error inesperado. Error > '.$e->getMessage()],500);
        }
    }

    public function getUserLogged(){
        try {
            $user = $this->authRepository->getUserLogged();
            return response()->json($user,200);
        }catch (UnauthorizedException $e){
            return response()->json(['error' => $e->getMessage()],401);
        }catch (\Exception $e){
            return response()->json(['error' => 'Ha ocurrido un error inesperado. Error > '.$e->getMessage()],500);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:50',
            'apellido' => 'required|string|max:150',
            'documento' => 'required|string|max:15',
            'rol' => 'required|string|max:25',
            'direccion' => 'nullable|string|max:155',
            'telefono' => 'nullable|string|max:15',
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Bad request'],400);
        }
        $registered = $this->authRepository->register($request);
        return response()->json($registered,$registered['status']);
    }

    /**
     * @return \Illuminate\Http\Response
     */
    public function logout()
    {
        if(!Auth::check()){
            return response()->json(['error' => 'No se ha iniciado sesión.'],400);
        }
        Auth::logout();
        return response()->json(['message' => 'Se ha cerrado la sesión.'],200);
    }

    /**
     * @param $user
     * @return \Illuminate\Http\Response
     */
    public function resetDefaultPassword($user)
    {
        try {
            $this->authRepository->resetDefaultPassword($user);
            return response()->json(['message' => 'Se ha restablecito la contraseña con exito'],200);
        }catch (\Exception $e){
            return response()->json(['message' => $e->getMessage()],500);
        }
    }

    public function resetPassword($user,Request $request)
    {
        $validator = Validator::make($request->all(), [
            'password' => 'required|string|max:30',
            'username'     => 'required|string|max:30'
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Bad request'],400);
        }
        try {
            $this->authRepository->resetPassword($user,$request->password,$request->username);
            return response()->json(['message' => 'Se ha restablecito la contraseña con exito'],200);
        }catch (NotFoundHttpException $e){
            return response()->json(['message' => $e->getMessage()],404);
        }catch (\Exception $e){
            return response()->json(['message' => $e->getMessage()],500);
        }
    }


}


