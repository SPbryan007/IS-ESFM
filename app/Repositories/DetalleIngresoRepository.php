<?php


namespace App\Repositories;


use App\Models\DetalleIngreso;
use App\Models\Lote;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class DetalleIngresoRepository
{
    /**
     * @var LoteRepository
     */
    private $loteRepository;

    /**
     * DetalleIngresoRepository constructor.
     * @param LoteRepository $loteRepository
     */
    public function __construct(LoteRepository $loteRepository)
    {
        $this->loteRepository = $loteRepository;
    }

    public function getAll()
    {
   /*     return DetalleIngreso::with(['articulo','detalleingreso' => function($q) {
            $q->with('ingreso');
        }])->get();*/
        /*return Lote::withTrashed(filter_var($withTrashed,FILTER_VALIDATE_BOOLEAN))
            ->orderBy('id','DESC')
            ->get();*/
    }


    /**
     * @param $id
     * @return DetalleIngreso
     */
    public function getById($id) : DetalleIngreso
    {
        $detalle_ingreso = DetalleIngreso::find($id);
        if(!$detalle_ingreso){
            throw new NotFoundHttpException("No existe el detalle de ingreso con el ID : {$id}");
        }
        return $detalle_ingreso;
    }


    /**
     * @param $cantidad
     * @param $descripcion
     * @param $lote_id
     * @param $ingreso_id
     * @return DetalleIngreso
     */
    public function register(
        $cantidad,
        $descripcion,
        $lote_id,
        $ingreso_id
    ): DetalleIngreso {
        $this->loteRepository->getById($lote_id);
        $detalle_ingreso = DetalleIngreso::create([
            'cantidad'      => $cantidad,
            'descripcion'   => $descripcion,
            'lote_id'       => $lote_id,
            'ingreso_id'    => $ingreso_id
        ]);
        return $detalle_ingreso;
    }


    /**
     * @param $id
     * @param $stock
     * @param $saldo
     */
    public function update($id, $cantidad, $descripcion)
    {
        DetalleIngreso::where('id',$id)
            ->update([
                'cantidad'      => $cantidad,
                'descripcion'   => $descripcion,
            ]);
    }

    public function setStatus($id)
    {
        /*$partida = Partida::withTrashed()->find($id);
        if($partida){
            if($partida->trashed()){
                $partida->restore();
                return ['message' => 'Partida activada.'];
            }
            $partida->delete();
            return ['message' => 'Se ha dado de baja a la partida.'];
        }
        throw new NotFoundHttpException("No existe la partida con el ID : {$id}");*/
    }


}
