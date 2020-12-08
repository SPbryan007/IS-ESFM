<?php


namespace App\Repositories;


use App\Models\Funcionario;
use App\Models\Unidad;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class FuncionarioRepository
{

    public function getAllFuncionario($withTrashed)
    {
        return Funcionario::withTrashed(filter_var($withTrashed,FILTER_VALIDATE_BOOLEAN))
                        ->with('user')
                        ->orderBy('id','DESC')
                        ->get();
    }

    /**
     * @param $id
     * @return Funcionario
     */
    public function getAllById($id) : Funcionario
    {
        $fun = Funcionario::find($id);
        if(!$fun){
            throw new NotFoundHttpException("No existe el funcionario con el ID : {$id}");
        }
        return $fun;
    }

    /**
     * @param $data
     * @return Funcionario
     */
    public function register($data)
    {
        $funcionario = new Funcionario();
        $funcionario->documento  = $data->documento;
        $funcionario->nombre     = $data->nombre;
        $funcionario->apellido   = $data->apellido;
        $funcionario->direccion  = $data->direccion;
        $funcionario->telefono   = $data->telefono;
        $funcionario->save();
        return $funcionario;
    }

    /**
     * @param $id
     * @param $data
     */
    public function update($id, $data)
    {
        Funcionario::where('id',$id)
            ->update([
                'nombre'    => $data->nombre,
                'apellido'  => $data->apellido,
                'documento' => $data->documento,
                'telefono'  => $data->telefono,
                'direccion' => $data->direccion
            ]);
    }

    /**
     * @param UnidadRepository $unidadRepository
     */
    public function hola()
    {

    }


    /**
     * @param $id
     * @return string[]
     * @throws \Exception
     */
    public function setStatus($id)
    {
        $funcionario = Funcionario::withTrashed()->find($id);
        if($funcionario){
            if($funcionario->trashed()){
                $funcionario->restore();
                return ['message' => 'Funcionario activo'];
            }
            Unidad::where('funcionario_id',$funcionario->id)
                    ->update(['funcionario_id' => NULL]);
            $funcionario->delete();
            return ['message' => 'Se ha dado de baja al funcionario.'];
        }
        throw new NotFoundHttpException("No existe el funcionario con el ID : {$id}");
    }

}
