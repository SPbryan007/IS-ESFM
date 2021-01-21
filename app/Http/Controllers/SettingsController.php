<?php

namespace App\Http\Controllers;
use App\Repositories\SalidaRepository;
use App\Repositories\SettingsRepository;
use http\Env\Response;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\ConflictHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class SettingsController extends Controller
{
    /**
     * @var SettingsRepository
     */
    private $settingsRepository;

    /**
     * SettingsController constructor.
     * @param SettingsRepository $settingsRepository
     */
    public function __construct(SettingsRepository $settingsRepository)
    {
        $this->settingsRepository = $settingsRepository;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function importFile(Request $request)
    {
        try {
            //$salidas = true;
            $salidas = $this->settingsRepository->restoreBackup($request->file);
            return response()->json($salidas,200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al cargar datos, verifique la conexión con la base de datos.'.$e->getMessage()],500);
        }
    }

    /**
     * @return bool|\Illuminate\Http\Response
     */
    public function backup()
    {
        try {
            $file_path = $this->settingsRepository->getBackup();
            $header =  array(
                'Content-Type: application/sql'
            );

            return response()->download($file_path,'hola.sql',$header);
//            return  Response::download($file_path,$file_path);
//            return response()->json(true,200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al cargar datos, verifique la conexión con la base de datos.'.$e->getMessage()],500);
        }
    }


//    /**
//     * @param Request $request
//     * @param $id
//     * @return \Illuminate\Http\Response
//     */
//    public function update(Request $request, $id){
//        try {
//            //1ER MANERA
//            Persona::where('id',$id)
//                ->update([
//                    'nombre'    => $request->nombre,
//                    'apellido'  => $request->apellido
//                ]);
//            //2DA MANERA
//            $persona = Persona::find($id);
//            $persona->nombre   = $request->nombre;
//            $persona->apellido = $request->apellido;
//            $persona->save();
//            return response()->json($persona,200);
//        }catch (\Exception $e){
//            return \response()->json(['message' => 'ERRORRR..'.$e->getMessage()],500);
//        }
//    }
//

    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {

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
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

    }


    /**
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

    }
}
