<?php

namespace App\Http\Controllers;

use App\Repositories\SolicitanteRepository;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\ConflictHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class SolicitanteController extends Controller
{
    /**
     * @var SolicitanteRepository
     */
    private $solRepository;


    /**
     * SolicitanteController constructor.
     * @param SolicitanteRepository $solRepository
     */
    public function __construct(SolicitanteRepository $solRepository)
    {

        $this->solRepository = $solRepository;
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function getAll(Request $request)
    {
        try {
            $data = $this->solRepository->getAllSolicitante($request->query('withTrashed'));
            return response()->json($data,200);
        }catch (\Exception $e) {
            return response()->json(
                ['message' => 'Ha ocurrido un error inesperado, verifique la conexión con la base de datos.'],500);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'funcionario_id' => 'required|integer',
            'cargo' => 'required|string|max:50',
            'unidad_id' => 'required|integer'
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Bad request'],400);
        }
        try {
            $this->solRepository->register(
                $request->funcionario_id,
                $request->unidad_id,
                $request->cargo
            );
            return response()->json(['message' => 'El solicitante se ha registrado con éxito.'],201);
        }catch (NotFoundHttpException $e){
            return response()->json(['message' => $e->getMessage()],404);
        }catch (QueryException $e){
            $errorCode = $e->errorInfo[1];
            if($errorCode == 1062){
                return response()->json(['message' => 'el funcionario ya se encuentra registrado como solicitante.'],409);
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
            'funcionario_id' => 'integer',
            'cargo' => 'required|string|max:50',
            'unidad_id' => 'required|integer'
        ]);
        if($validator->fails()){
            return response()->json(['error' => 'Bad request'],400);
        }
        try{
            $this->solRepository->update($id,$request);
            return response()->json(['message' => 'Datos actualizados exitosamente.'],201);
        }catch (NotFoundHttpException $e){
            return response()->json(['message' => $e->getMessage()],404);
        }catch (QueryException $e){
            $errorCode = $e->errorInfo[1];
            if($errorCode == 1062){
                return response()->json(['message' => 'el funcionario ya se encuentra registrado como solicitante.'],409);
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
            $status = $this->solRepository->setStatus($id);
            return response()->json($status,201);
        }catch (NotFoundHttpException $e){
            return response()->json(['message' => $e->getMessage()],404);
        }catch (\Exception $e){
            return response()->json(['message' => 'Ha ocurrido un error inesperado, verifique la conexion con la base de datos'],500);
        }

    }
}
