<?php

namespace App\Http\Controllers;
use App\Repositories\ArticuloRepository;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ArticuloController extends Controller
{
    /**
     * @var ArticuloRepository
     */
    private $articuloRepository;

    /**
     * ArticuloControllerController constructor.
     * @param ArticuloRepository $articuloRepository
     */
    public function __construct(ArticuloRepository $articuloRepository)
    {
        $this->articuloRepository = $articuloRepository;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function getAll(Request $request)
    {
        try {
            $articulos = $this->articuloRepository->getAll($request->query('withTrashed'));
            return response()->json($articulos,200);
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
            'nombre' => 'required|string|max:100',
            'linea' => 'required|string|max:2',
            'partida_id' => 'required|integer',
            'unidad_medida_id' => 'required|integer',
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Bad request'],400);
        }
        try {
            $this->articuloRepository->register($request);
            return response()->json(['message' => 'El articulo se ha registrado con éxito.'],200);
        }catch (NotFoundHttpException $e){
            return response()->json(['message' => $e->getMessage()],404);
        }catch (QueryException $e){
            $errorCode = $e->errorInfo[1];
            if($errorCode == 1062){
                return response()->json(['message' => 'el articulo ya se encuentro registrado.'],500);
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
            'nombre' => 'required|string|max:100',
            'linea' => 'required|string|max:2',
            'partida_id' => 'required|integer',
            'unidad_medida_id' => 'required|integer',
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Bad request'],400);
        }
        try{
            $this->articuloRepository->update($id,$request);
            return response()->json(['message' => 'Datos actualizados exitosamente.'],201);
        }catch (NotFoundHttpException $e){
            return response()->json(['message' => $e->getMessage()],404);
        }catch (QueryException $e){
            $errorCode = $e->errorInfo[1];
            if($errorCode == 1062){
                return response()->json(['message' => 'el articulo ya se encuentro registrado.'],500);
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
            $status = $this->articuloRepository->setStatus($id);
            return response()->json($status,201);
        }catch (NotFoundHttpException $e){
            return response()->json(['message' => $e->getMessage()],404);
        }catch (\Exception $e){
            return response()->json('Ha ocurrido un error inesperado, verifique la conexion con la base de datos',500);
        }
    }
}
