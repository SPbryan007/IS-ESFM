<?php

namespace App\Http\Controllers;

use App\Repositories\ProveedorRepository;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;


class ProveedorController extends Controller
{
    /**
     * @var ProveedorRepository
     */
    private $proveedorRepository;

    /**
     * ProveedorController constructor.
     * @param ProveedorRepository $proveedorRepository
     */
    public function __construct(ProveedorRepository $proveedorRepository)
    {
        $this->proveedorRepository = $proveedorRepository;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function getAll(Request $request)
    {
        try {
            $proveedores = $this->proveedorRepository->getAll($request->query('withTrashed'));
            return response()->json($proveedores,200);
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
            'nit' => 'required|string|max:20',
            'rubro' => 'required|string|max:100',
            'telefono' => 'string|max:50',
            'direccion' => 'string|max:255',
            'responsable' => 'string|max:255'
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Bad request'],400);
        }
        try {
            $this->proveedorRepository->register($request);
            return response()->json(['message' => 'El proveedor se ha registrado con éxito.'],201);
        }catch (QueryException $e){
            $errorCode = $e->errorInfo[1];
            if($errorCode == 1062){
                return response()->json(['message' => 'El proveedor ya se encuentra registrado.'],409);
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
            'nit' => 'required|string|max:20',
            'rubro' => 'string|max:100',
            'telefono' => 'string|max:50',
            'direccion' => 'string|max:255',
            'responsable' => 'string|max:255'
        ]);
        if($validator->fails()){
            return response()->json(['message' => 'Bad request'],400);
        }
        try{
            $this->proveedorRepository->update($id,$request);
            return response()->json(['message' => 'Datos actualizados exitosamente.'],201);
        }catch (NotFoundHttpException $e){
            return response()->json(['message' => $e->getMessage()],404);
        }catch (QueryException $e){
            $errorCode = $e->errorInfo[1];
            if($errorCode == 1062){
                return response()->json(['message' => 'el proveedor ya se encuentra registrado.'],409);
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
            $status = $this->proveedorRepository->setStatus($id);
            return response()->json($status,201);
        }catch (NotFoundHttpException $e){
            return response()->json(['message' => $e->getMessage()],404);
        }catch (\Exception $e){
            return response()->json(['message' => 'Ha ocurrido un error inesperado, verifique la conexion con la base de datos'],500);
        }
    }
}
