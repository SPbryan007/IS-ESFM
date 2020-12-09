<?php

namespace App\Http\Controllers;

use App\Models\Articulo;
use App\Models\Lote;
use App\Models\Periodo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class AppController extends Controller
{


    /**
     * @return \Illuminate\Http\Response
     */
    public function test()
    {
        $articulo = 3;
        $query = Lote::select('lote.*')
        ->whereHas('articulo',function ($query) use($articulo) {
            $query->where('id','=',$articulo);
        })
        ->leftjoin('detalle_ingreso as di','di.lote_id','=','lote.id')
        //->leftjoin('detalle_salida as ds','ds.lote_id','=','lote.id')
        ->leftjoin('ingreso as i','i.id','=','di.ingreso_id')
        // ->leftjoin('salida as s','s.id','=','ds.salida_id')
        ->where('i.periodo_id', '=', Periodo::latest()->first()->id)
        ->whereNull('i.deleted_at')
        // ->whereNull('s.deleted_at')
        ->where('stock','<>',0)
        ->with('articulo')
        ->oldest()
        ->get();
            return response()->json($query);

    }


}
