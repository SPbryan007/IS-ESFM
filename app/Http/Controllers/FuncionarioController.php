<?php

namespace App\Http\Controllers;

use App\Repositories\FuncionarioRepository;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;


class FuncionarioController extends Controller
{
    /**
     * @var FuncionarioRepository
     */
    private $funRepository;

    /**
     * FuncionarioController constructor.
     * @param FuncionarioRepository $funRepository
     */
    public function __construct(FuncionarioRepository  $funRepository)
    {
        $this->funRepository = $funRepository;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function getAll(Request $request)
    {
        try {
            $funcionarios = $this->funRepository->getAllFuncionario($request->query('withTrashed'));
            return response()->json($funcionarios,200);
        }catch (\Exception $e) {
            return response()->json(['message' => 'Error al cargar datos, verifique la conexión con la base de datos.'],500);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function BuscarFuncionario(Request $request)
    {
        //return response()->json($request->input('query'),200);
        try {
            $fun = Funcionario::where('documento','like','%'.$request->input('query').'%')->get();
            return response()->json($fun,200);
        } catch (\Exception $th) {
            return response()->json($th->getMessage(),200);
        }
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:70',
            'apellido' => 'required|string|max:100',
            'documento' => 'required|string|max:15',
            'telefono' => 'string|max:20',
            'direccion' => 'string|max:255'
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Bad request'],400);
        }
        try {
            $this->funRepository->register($request);
            return response()->json(['message' => 'El funcionario se ha registrado con éxito.'],201);
        }catch (QueryException $e){
            $errorCode = $e->errorInfo[1];
            if($errorCode == 1062){
                return response()->json(['message' => 'el funcionario ya se encuentra registrado.'],409);
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:70',
            'apellido' => 'required|string|max:100',
            'documento' => 'required|string|max:15',
            'telefono' => 'string|max:20',
            'direccion' => 'string|max:255'
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Bad request'],400);
        }
        try{
            $this->funRepository->update($id,$request);
            return response()->json(['message' => 'Datos actualizados exitosamente.'],201);
        }catch (NotFoundHttpException $e){
            return response()->json(['message' => $e->getMessage()],404);
        }catch (QueryException $e){
            $errorCode = $e->errorInfo[1];
            if($errorCode == 1062){
                return response()->json(['message' => 'el funcionario ya se encuentra registrado.'],409);
            }
        }catch (\Exception $e) {
            return response()->json(['message'=>'Ha ocurrido un error inesperado, verifique la conexion con la base de datos.'.$e->getMessage()],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $status = $this->funRepository->setStatus($id);
            return response()->json($status,201);
        }catch (NotFoundHttpException $e){
            return response()->json(['message' => $e->getMessage()],404);
        }catch (\Exception $e){
            return response()->json(['message' => 'Ha ocurrido un error inesperado, verifique la conexion con la base de datos'],500);
        }
    }
}
