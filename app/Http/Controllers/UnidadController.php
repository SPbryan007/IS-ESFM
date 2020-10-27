<?php

namespace App\Http\Controllers;
use App\Repositories\UnidadRepository;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class UnidadController extends Controller
{
    /**
     * @var UnidadRepository
     */
    private $unidadRepository;

    /**
     * UnidadController constructor.
     * @param UnidadRepository $unidadRepository
     */
    public function __construct(UnidadRepository  $unidadRepository)
    {
        $this->unidadRepository = $unidadRepository;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function getAll(Request $request)
    {
        try {
            $unidad = $this->unidadRepository->getAllUnidad($request->query('withTrashed'));
            return response()->json($unidad,200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al cargar datos, verifique la conexión con la base de datos.'],500);
        }
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:50',
            'funcionario_id' => 'required|integer',
        ]);
        if($validator->fails()){
            return response()->json(['error' => 'Bad request'],400);
        }
        try {
            $this->unidadRepository->register($request->funcionario_id,$request->nombre);
            return response()->json(['message' => 'La unidad se ha registrado con éxito.'],200);
        }catch (NotFoundHttpException $e){
            return response()->json(['message' => $e->getMessage()],404);
        }catch (QueryException $e){
            $errorCode = $e->errorInfo[1];
            if($errorCode == 1062){
                return response()->json(['message' => 'el funcionario ya se encuentro registrado responsable de unidad.'],409);
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
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:50',
            'funcionario_id' => 'required|integer',
        ]);
        if($validator->fails()){
            return response()->json(['error' => 'Bad request'],400);
        }
        try{
            $this->unidadRepository->update($id,$request);
            return response()->json(['message' => 'Datos actualizados exitosamente.'],201);
        }catch (NotFoundHttpException $e){
            return response()->json(['message' => $e->getMessage()],404);
        }catch (QueryException $e){
            $errorCode = $e->errorInfo[1];
            if($errorCode == 1062){
                return response()->json(['message' => 'el funcionario ya se encuentro registrado responsable de unidad.'],409);
            }
        }catch (\Exception $e) {
            return response()->json(['message'=>'Ha ocurrido un error inesperado, verifique la conexion con la base de datos.'.$e->getMessage()],500);
        }

    }


    /**
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $status = $this->unidadRepository->setStatus($id);
            return response()->json($status,201);
        }catch (NotFoundHttpException $e){
            return response()->json(['error' => $e->getMessage()],404);
        }catch (\Exception $e){
            return response()->json('Ha ocurrido un error inesperado, verifique la conexion con la base de datos',500);
        }
    }
}
