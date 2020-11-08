<?php


namespace App\Repositories;


use App\Models\DetalleSalida;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class DetalleSalidaRepository
{
    /**
     * @var LoteRepository
     */
    private $loteRepository;

    /**
     * DetalleSalidaRepository constructor.
     * @param LoteRepository $loteRepository
     */
    public function __construct(LoteRepository $loteRepository)
    {
        $this->loteRepository = $loteRepository;
    }

    public function getAll()
    {

    }


    /**
     * @param $id
     * @return DetalleSalida
     */
    public function getById($id) : DetalleSalida
    {
        $detalle_salida = DetalleSalida::find($id);
        if(!$detalle_salida){
            throw new NotFoundHttpException("No existe el detalle de desalida con ID : {$id}");
        }
        return $detalle_salida;
    }


    /**
     * @param $cantidad
     * @param $precio
     * @param $descripcion
     * @param $lote_id
     * @param $salida_id
     * @return DetalleSalida
     */
    public function register(
        $cantidad,
        $descripcion,
        $lote_id,
        $salida_id
    ): DetalleSalida{
        $this->loteRepository->getById($lote_id);
        $detalle_salida = DetalleSalida::create([
            'cantidad'      => $cantidad,
            'descripcion'   => $descripcion,
            'lote_id'       => $lote_id,
            'salida_id'    => $salida_id
        ]);
        return $detalle_salida;
    }


    public function update()
    {

    }

    public function setStatus($id)
    {

    }


}
