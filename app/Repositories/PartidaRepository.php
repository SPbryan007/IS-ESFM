<?php


namespace App\Repositories;
use App\Models\Partida;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class PartidaRepository
{

    /**
     * @param $withTrashed
     * @return Partida[]|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Query\Builder[]|\Illuminate\Support\Collection
     */
    public function getAll($withTrashed)
    {
        return Partida::withTrashed(filter_var($withTrashed,FILTER_VALIDATE_BOOLEAN))
            ->orderBy('id','DESC')
            ->get();
    }


    /**
     * @param $id
     * @return Partida
     */
    public function getById($id) : Partida
    {
        $fun = Partida::withTrashed()->find($id);
        if(!$fun){
            throw new NotFoundHttpException("No existe la partida con el ID : {$id}");
        }
        return $fun;
    }


    /**
     * @param $data
     * @return Partida
     */
    public function register($data)
    {
        $partida = new Partida();
        $partida->nombre = $data->nombre;
        $partida->codigo = $data->codigo;
        $partida->descripcion = $data->descripcion;
        $partida->save();
    }

    /**
     * @param $id
     * @param $data
     */
    public function update($id, $data)
    {
        Partida::where('id',$id)
            ->update([
                'nombre'        => $data->nombre,
                'codigo'        => $data->codigo,
                'descripcion'   => $data->descripcion,
            ]);
    }

    public function setStatus($id)
    {
        $partida = Partida::withTrashed()->find($id);
        if($partida){
            if($partida->trashed()){
                $partida->restore();
                return ['message' => 'Partida activada.'];
            }
            $partida->delete();
            return ['message' => 'Se ha dado de baja a la partida.'];
        }
        throw new NotFoundHttpException("No existe la partida con el ID : {$id}");
    }

}
