<?php


namespace App\Repositories;
use App\Models\UnidadMedida;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class UnidadMedidaRepository
{


    /**
     * @param $withTrashed
     * @return UnidadMedida[]|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Query\Builder[]|\Illuminate\Support\Collection
     */
    public function getAll($withTrashed)
    {
        return UnidadMedida::withTrashed(filter_var($withTrashed,FILTER_VALIDATE_BOOLEAN))
            ->orderBy('id','DESC')
            ->get();
    }


    /**
     * @param $id
     * @return UnidadMedida
     */
    public function getById($id) : UnidadMedida
    {
        $unidad_medida = UnidadMedida::find($id);
        if(!$unidad_medida){
            throw new NotFoundHttpException("No existe la unidad de medida con ID : {$id}");
        }
        return $unidad_medida;
    }


    /**
     * @param $data
     */
    public function register($data)
    {
        $unidad_medida = new UnidadMedida();
        $unidad_medida->nombre = $data->nombre;
        $unidad_medida->sigla = $data->sigla;
        $unidad_medida->descripcion = $data->descripcion;
        $unidad_medida->save();
    }


    /**
     * @param $id
     * @param $data
     */
    public function update($id, $data)
    {
        UnidadMedida::where('id',$id)
            ->update([
                'nombre'        => $data->nombre,
                'sigla'         => $data->sigla,
                'descripcion'   => $data->descripcion,
            ]);
    }

    /**
     * @param $id
     * @return string[]
     * @throws \Exception
     */
    public function setStatus($id)
    {
        $unidad_medida = UnidadMedida::withTrashed()->find($id);
        if($unidad_medida){
            if($unidad_medida->trashed()){
                $unidad_medida->restore();
                return ['message' => 'Unidad de medida activada.'];
            }
            $unidad_medida->delete();
            return ['message' => 'Se ha dado de baja a la unidad de medida.'];
        }
        throw new NotFoundHttpException("No existe la unidad de medida con ID : {$id}");
    }

}
