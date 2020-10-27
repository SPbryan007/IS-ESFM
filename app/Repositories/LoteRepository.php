<?php


namespace App\Repositories;


use App\Models\Articulo;
use App\Models\Ingreso;
use App\Models\Lote;
use App\Models\Periodo;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class LoteRepository
{


    /**
     * @return mixed
     */
    public function getAll()
    {
        $periodo = Periodo::latest()->withTrashed()->first();
        $periodo = $periodo ? $periodo->id : NULL;
        $query = Articulo::select(DB::raw('0 as stock,0 as saldo'),'articulo.nombre','articulo.id','um.sigla as unidad')
                            ->leftjoin('unidad_medida as um','um.id','=','articulo.unidad_medida_id')
                            ->doesntHave('lotes.detalleingreso.ingreso')
                            ->groupBy('articulo.id');
        return Articulo::select(DB::raw('IFNULL(SUM(lote.stock),0) as stock,IFNULL(SUM(lote.saldo),0) as saldo'),
            'articulo.nombre as nombre','articulo.id as id','um.sigla as unidad')
            ->leftjoin('lote','lote.articulo_id','=','articulo.id')
            ->leftjoin('unidad_medida as um','um.id','=','articulo.unidad_medida_id')
            ->leftjoin('detalle_ingreso as di','di.lote_id','=','lote.id')
            ->leftjoin('ingreso as i','i.id','=','di.ingreso_id')
            ->where('i.periodo_id', '=', $periodo)
            ->whereNull('i.deleted_at')
            ->groupBy('articulo.id')
            ->union($query)
            ->with(['lotes' => function($query) use($periodo){
                $query->with('detalleingreso');
                $query->where('stock','<>',0);
                $query->whereHas('detalleingreso',function ($query2) use($periodo){
                    return $query2->whereHas('ingreso',function ($query3) use($periodo){
                        return  $query3->where('periodo_id',$periodo);
                    });
                });
            }])
            ->get();
    }


    /**
     * @param $id
     * @return Lote
     */
    public function getById($id) : Lote
    {
        $lote = Lote::find($id);
        if(!$lote){
            throw new NotFoundHttpException("No existe el lote con el ID : {$id}");
        }
        return $lote;
    }


    /**
     * @param $stock
     * @param $saldo
     * @param $articulo_id
     * @return Lote
     */
    public function register(
        $stock, $saldo,$articulo_id
    ): Lote {
        $lote = new Lote();
        $lote->stock       = $stock;
        $lote->saldo       = $saldo;
        $lote->articulo_id = $articulo_id;
        $lote->save();
        return $lote;
    }


    /**
     * @param $id
     * @param $stock
     * @param $saldo
     */
    public function update($id, $stock, $saldo)
    {
        Lote::where('id',$id)
            ->update([
                'stock'        => $stock,
                'saldo'        => $saldo,
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
