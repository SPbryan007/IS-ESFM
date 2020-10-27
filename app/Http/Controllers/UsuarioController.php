<?php

namespace App\Http\Controllers;
use App\Repositories\UserRepository;
use App\User;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class UsuarioController extends Controller
{
    /**
     * @var UserRepository
     */
    private $userRepository;

    /**
     * UsuarioController constructor.
     * @param UserRepository $userRepository
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAll(Request $request)
    {
        try {
            $users = $this->userRepository->getAllUsers($request->query('withTrashed'));
            return response()->json($users,200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al cargar datos, verifique la conexión con la base de datos.'],500);
        }
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'funcionario_id' => 'required|integer',
            'rol' => 'required|bool',
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Bad request'],400);
        }
        try {
            $this->userRepository->register($request->funcionario_id,$request->rol);
            return response()->json(['message' => 'El usuario se ha registrado con éxito.'],201);
        }catch (QueryException $e){
            $errorCode = $e->errorInfo[1];
            if($errorCode == 1062){
                return response()->json(['message' => 'El usuario ya se encuentra registrado.'],409);
            }
        }catch (\Exception $e) {
            return response()->json(['message'=>'Ha ocurrido un error inesperado, verifique la conexion con la base de datos.'.$e->getMessage()],500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }


    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateRole($id)
    {
        try {
            $this->userRepository->changeRole($id);
            return response()->json(['message' => 'Se ha cambiando el rol con éxito.'], 200);
        } catch (NotFoundHttpException $e) {
            return response()->json(['message' => $e->getMessage()], 404);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    /**
     * Da de baja del sistema al usuario.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $this->userRepository->setStatus($id);
            return response()->json(['message' => 'Usuario inactivo'], 200);
        } catch (NotFoundHttpException $e) {
            return response()->json(['message' => $e->getMessage()], 404);
        } catch (\Exception $e) {
            return response()->json(['message' => 'ha ocurrido un error inesperado, verifique la conexion con la base de datos.'], 500);
        }
    }

}
