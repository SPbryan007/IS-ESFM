<?php


namespace App\Repositories;


use App\Models\Proveedor;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ProveedorRepository
{

    /**
     * @param $withTrashed
     * @return Proveedor[]|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Query\Builder[]|\Illuminate\Support\Collection
     */
    public function getAll($withTrashed)
    {
        return Proveedor::withTrashed(filter_var($withTrashed,FILTER_VALIDATE_BOOLEAN))
            ->orderBy('id','DESC')
            ->get();
    }

    public function getById($id) : Proveedor
    {
        $proveedor = Proveedor::find($id);
        if(!$proveedor){
            throw new NotFoundHttpException("No existe el proveedor con el ID : {$id}");
        }
        return $proveedor;
    }


    public function register($data)
    {
        $proveedor = new Proveedor();
        $proveedor->nombre      = $data->nombre;
        $proveedor->nit         = $data->nit;
        $proveedor->rubro       = $data->rubro;
        $proveedor->direccion   = $data->direccion;
        $proveedor->telefono    = $data->telefono;
        $proveedor->responsable = $data->responsable;
        $proveedor->save();
    }

    /**
     * @param $id
     * @param $data
     */
    public function update($id, $data)
    {
        Proveedor::where('id',$id)
            ->update([
                'nombre'      => $data->nombre,
                'nit'         => $data->nit,
                'rubro'       => $data->rubro,
                'telefono'    => $data->telefono,
                'direccion'   => $data->direccion,
                'responsable' => $data->responsable
            ]);
    }


    /**
     * @param $id
     * @return string[]
     * @throws \Exception
     */
    public function setStatus($id)
    {
        $proveedor = Proveedor::withTrashed()->find($id);
        if($proveedor){
            if($proveedor->trashed()){
                $proveedor->restore();
                return ['message' => 'Proveedor activo'];
            }
            $proveedor->delete();
            return ['message' => 'Se ha dado de baja al proveedor.'];
        }
        throw new NotFoundHttpException("No existe el proveedor con el ID : {$id}");
    }

}
