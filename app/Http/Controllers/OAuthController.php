<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
// use App\Http\Requests\AppFormRequest;
use \App\Http\Requests\Auth\LoginRequestForm;
use App\Repositories\AuthRepository;
// use App\User;
// use App\Funcionario;
// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    //@param AuthRepository $authRepository
    //@param  \Illuminate\Repositories\AuthRepository $authRepository
    protected $authRepository;
    /**
     * Se inicializa el contructor con la inyeccion de dependencia del repositorui Auth
     */
    public function __contruct(AuthRepository $authRepository)
    {
        $this->authRepository = $authRepository;
    }

    /**
     * Este metodo inicia sesion con las credenciales del usuario
     *
     * @param  LoginRequestForm $request
     * @return \Illuminate\Http\Response
     */
    public function login(LoginRequestForm $request)
    {
       // $obj = new AuthRepository();
       // $obj = new \App\Repositories\AuthRepository();
        //Auth::attempt(['username' => $request->username, 'password' => $request->password],true);
        $user = $this->authRepository->all();
        // return response()->json($user,200);
        return response()->json($user,200);
            // if(!$user)
            //     return response()->json(['error' => 'Unauthorized'], 401);
            // return response()->json($user, 200);
    }

    public function register(Request $request)
    {
        // $user_exists = User::where('username','=',$request->username)->first();
        // if(isset($user_exists)){
        //    return response()->json(['error'=>'El nombre de usuario ya existe'],401);
        // }

        $fun = new Funcionario();
        $fun->nombre = 'Bryan';
        $fun->apellido = 'Fernandez';
        $fun->documento = '12589444'; 
        $fun->save();

        $user = new User();
        $user->idUsuario = $fun->idFuncionario;
        $user->username = 'bryan.guns';
        $user->password = bcrypt('12345678');
        $user->save();
        Auth::login($user);

        return response()->json($user,200);
    }

    public function logout()
    {
        Auth::logout();
    }

}
