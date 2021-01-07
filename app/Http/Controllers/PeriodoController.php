<?php

namespace App\Http\Controllers;

use App\Repositories\PeriodoRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;


class PeriodoController extends Controller
{

    /**
     * @var PeriodoRepository
     */
    private $periodoRepository;

    /**
     * PeriodoController constructor.
     * @param PeriodoRepository $periodoRepository
     */
    public function __construct(PeriodoRepository $periodoRepository)
   {
       $this->periodoRepository = $periodoRepository;
   }

    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function getAll(Request $request)
    {
        try {
            $periodo = $this->periodoRepository->getAll($request->query('withTrashed'));
            return response()->json($periodo,200);
        }catch (\Exception $e) {
            return response()->json(['message' => 'Error al cargar datos, verifique la conexión con la base de datos.'],500);
        }
    }



    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string',
            'fecha_inicio' => 'required|date',
            'fecha_fin' => 'required|date',
            'descripcion' => 'string|max:255',
            'tipo_inventario' => 'required|string|max:20',
            'detalle_apertura' => 'array'
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Bad request'],400);
        }

        try {
            $periodo = $this->periodoRepository->Start($request);
            return response()->json($periodo,$periodo['status']);
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
            'nombre' => 'required|string',
            'fecha_inicio' => 'required|date',
            'fecha_fin' => 'required|date',
            'descripcion' => 'string|max:255'
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Bad request'],400);
        }
        try{
            $this->periodoRepository->update($id,$request);
            return response()->json(['message' => 'Datos actualizados exitosamente.'],201);
        }catch (NotFoundHttpException $e){
            return response()->json(['message' => $e->getMessage()],404);
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
            $this->periodoRepository->setStatus($id);
            return response()->json(['message' => 'El periodo ha finalizado'],201);
        }catch (NotFoundHttpException $e){
            return response()->json(['message' => $e->getMessage()],404);
        }catch (\Exception $e){
            return response()->json(['message' => 'Ha ocurrido un error inesperado, verifique la conexion con la base de datos'],500);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function ValidateDate(Request $request)
    {
        try {
            $validate = $this->periodoRepository->validateDate($request->query('date'));
            return  response()->json($validate['message'],$validate['status']);
        } catch (\Exception $th) {
            return response()->json($th->getMessage(),500);
        }
    }



    /**
     * @return \Illuminate\Http\Response
     */
    public function Current()
    {
        try {
            $periodo = $this->periodoRepository->Current();
            return  response()->json($periodo,201);
        } catch (\Exception $th) {
            return response()->json($th->getMessage(),500);
        }
    }
}
