<?php

namespace App\Http\Controllers;
use App\Models\Ingreso;
use App\Repositories\IngresoRepository;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\ConflictHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class SalidaController extends Controller
{


    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function getAll(Request $request)
    {
        try {
            $ingresos = $this->ingresoRepository->getAll($request->query('withTrashed'));
            return response()->json($ingresos,200);
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
        /* $validator = Validator::make($request->all(), [
             'acta' => 'nullable|string|max:100',
             'tipo_ingreso' => 'required|string',
             'tipo_comprobante' => 'required|string',
             'tipo_compra' => 'required|string',
             'nro_compra' => 'nullable|integer',
             'nro_solicitud' => 'nullable|string',
             'fecha_solicitud' => 'nullable|date',
             'nro_comprobante' => 'required|string',
             'proveedor' => 'required|integer',
             'fecha_comprobante' => 'nullable|date',
             'detalle_ingreso' => 'required|array'
         ]);*/
        switch ($request->tipo_ingreso)
        {
            case Ingreso::COMPRA:
                $compra = $this->ingresoRepository->compra($request);
                break;
        }
        return response()->json($compra,$compra['status']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            /*$tipo = $this->ingresoRepository->getById($id);
            switch ($tipo->tipo_ingreso){
                case Ingreso::COMPRA:
                    $ingresos = $this->ingresoRepository->getShowCompraById($id);
                    break;
            }*/
            $ingresos = $this->ingresoRepository->getShowById($id);
            return response()->json($ingresos,201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al cargar datos, verifique la conexión con la base de datos.'],500);
        }
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
            $this->ingresoRepository->delete($id);
            return response()->json(['message' => 'Se ha anulado el ingreso con éxito. '],201);
        }catch (NotFoundHttpException $e){
            return response()->json(['message' => $e->getMessage()],404);
        }catch (ConflictHttpException $e){
            return response()->json(['message' => $e->getMessage()],409);
        }catch (\Exception $e){
            return response()->json('Ha ocurrido un error inesperado, verifique la conexion con la base de datos',500);
        }
    }
}
