<?php

namespace App\Http\Controllers;

use App\Repositories\PartidaRepository;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;


class PartidaController extends Controller
{
    /**
     * @var PartidaRepository
     */
    private $partidaRepository;

    /**
     * PartidaController constructor.
     * @param PartidaRepository $partidaRepository
     */
    public function __construct(PartidaRepository $partidaRepository)
    {
        $this->partidaRepository = $partidaRepository;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function getAll(Request $request)
    {
        try {
            $partidas = $this->partidaRepository->getAll($request->query('withTrashed'));
            return response()->json($partidas,200);
        }catch (\Exception $e) {
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
            'nombre' => 'required|string|max:100',
            'codigo' => 'required|string|max:10',
            'descripcion' => 'string|max:255',
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Bad request'],400);
        }

        try {
            $ola = $this->partidaRepository->register($request);
            return response()->json(['message' => 'La partida se ha registrado con éxito.'.$ola],201);
        }catch (QueryException $e){
            $errorCode = $e->errorInfo[1];
            if($errorCode == 1062){
                return response()->json(['message' => 'La partida ya se encuentra registrada.'],409);
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
            'nombre' => 'required|string|max:100',
            'codigo' => 'required|string|max:10',
            'descripcion' => 'string|max:255',
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Bad request'],400);
        }
        try{
            $this->partidaRepository->update($id,$request);
            return response()->json(['message' => 'Datos actualizados exitosamente.'],201);
        }catch (NotFoundHttpException $e){
            return response()->json(['message' => $e->getMessage()],404);
        }catch (QueryException $e){
            $errorCode = $e->errorInfo[1];
            if($errorCode == 1062){
                return response()->json(['message' => 'La partida ya se encuentra registrada.'],409);
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
            $status = $this->partidaRepository->setStatus($id);
            return response()->json($status,201);
        }catch (NotFoundHttpException $e){
            return response()->json(['message' => $e->getMessage()],404);
        }catch (\Exception $e){
            return response()->json(['message' => 'Ha ocurrido un error inesperado, verifique la conexion con la base de datos'],500);
        }
    }
}
