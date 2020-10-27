<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppFormRequest;
use App\User;
use App\Funcionario;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AppController extends Controller
{
    public function init()
    {
        return response()->json($user,200);
    }

    /**
     * @param AppFormRequest $request
     * @return \Illuminate\Http\Response
     */
    public function login(AppFormRequest $request)
    {
        if(Auth::attempt(['username' => $request->username, 'password' => $request->password],true))
        {
            return response()->json(Auth::user(),200);
        }else{
            //return response()->json(['error','No se pudo inicar session'],401);
            return response()->json(['error' => 'error'],401);
        }
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
