<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Gestion;
use App\Articulo;
use App\Ingreso;
use App\Almacen;
use App\DetalleIngreso;
use Illuminate\Http\Request;

class GestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $gestion = Gestion::all();
            return response()->json($gestion,200);
        } catch (\Exception $th) {
            return response()->json($th->getMessage(),500);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            if(Articulo::all()->count() == 0){
                return response()->json('NO ITEMS',400);
            }
            $gestion =  Gestion::latest()->first();

            //$gestion_id = !$periodo ? NULL : $periodo->idGestion;

            DB::beginTransaction();

            if($gestion){
                $gestion_id = $gestion->idGestion;
                $gestion->estado = Gestion::FINALIZADO;
                $gestion->save();
            }else{
                $gestion_id = NULL;
            }


            $gestion = new Gestion();
            $gestion->nombre = $request->nombre;
            $gestion->estado =  Gestion::EN_CURSO;
            $gestion->descripcion = $request->descripcion;
            $gestion->fecha_inicio = $request->fecha_inicio;
            $gestion->fecha_fin = $request->fecha_fin;
            $gestion->save();

            $ingreso = new Ingreso();
            $ingreso->tipo_ingreso = Ingreso::INV_INICIAL;
            $ingreso->usuario_id = Auth::user()->idUsuario;
            $ingreso->gestion_id = $gestion->idGestion;
            $ingreso->save();

            $articulo = Articulo::all();
            foreach ($articulo as $art){

                $result = Articulo::select('item.idItem as item_id','di.precio_u as precio',DB::raw('(di.cantidad + IFNULL( dd.cantidad,0)) - IFNULL(ds.cantidad,0) as stock'))
                ->leftjoin('detalle_ingreso as di', 'di.item_id', '=', 'item.idItem')
                ->leftjoin('detalle_salida as ds', 'ds.lote_id', '=', 'di.idDetalle_ingreso')
                ->leftjoin('detalle_devolucion as dd', 'dd.detalle_salida_id', '=', 'ds.idDetalle_salida')
                ->leftjoin('ingreso as ig', 'ig.idIngreso', '=', 'di.ingreso_id')
                ->leftjoin('periodo as g', 'g.idGestion', '=', 'ig.gestion_id')
                ->where('g.idGestion','=',$gestion_id)
                ->where('item.idItem','=',$art->idItem)
                ->whereRaw('IFNULL( ds.cantidad,0) != (di.cantidad + IFNULL( dd.cantidad,0))')
                ->orderBy('item.nombre', 'ASC')
                ->get();

                if (!$result->isEmpty()) {
                    foreach ($result as $item) {
                        $detalle_ingreso = new DetalleIngreso();
                        $detalle_ingreso->cantidad = $item->stock;
                        $detalle_ingreso->precio_u = $item->precio;
                        $detalle_ingreso->descripcion = 'INVENTARIO INICIAL';
                        $detalle_ingreso->item_id = $item->item_id;
                        $detalle_ingreso->ingreso_Id = $ingreso->idIngreso;
                        $detalle_ingreso->save();
                    }
                }

                if($result->isEmpty()){
                        $detalle_ingreso = new DetalleIngreso();
                        $detalle_ingreso->cantidad = 0;
                        $detalle_ingreso->precio_u = 0;
                        $detalle_ingreso->descripcion = 'INVENTARIO INICIAL';
                        $detalle_ingreso->item_id = $art->idItem;
                        $detalle_ingreso->ingreso_Id = $ingreso->idIngreso;
                        $detalle_ingreso->save();
                }
            }

            DB::commit();
            $gestion = Gestion::all();

            return response()->json( $gestion,200);
        } catch (\Exception $th) {
            DB::rollback();
            return response()->json($th->getMessage(),200);
        }


        // $ingreso = new Ingreso();
        // $ingreso->tipo_ingreso = Ingreso::COMPRA;
        // $ingreso->usuario_id = Auth::user()->idUsuario;
        // $ingreso->gestion_id = $periodo->idGestion;


        // $resp;
        // $items = Articulo::all();
        // foreach ($items as $item) {

        // }

        // $detalle_ingreso = new DetalleIngreso();
        // $detalle_ingreso->cantidad
        // $detalle_ingreso->precio_u;

        // $almacen = new Almacen();



        // $articulo->nombre = $request->nombre;
        // $articulo->codigo = $request->codigo;
        // $articulo->linea = $request->linea;
        // $articulo->partida_id = $request->partida['value'];;
        // $articulo->unidad_medida_id = $request->unidad_medida['value'];
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function valid_date(Request $request)
    {
        try {
            $gestion = Gestion::latest()->first();
            if(!$gestion){
                return response()->json(true,200);
            }
            // if($request->fin){

            // }
            // $date_end = date($request->fin);
            $date_end_db = date($gestion->fecha_fin);
            $date_start =  date($request->inicio);
            if($date_start > $date_end_db){
                return response()->json(true,200);
            }else{
                return response()->json(false,200);
            }
            // return response()->json($periodo,200);
        } catch (\Exception $th) {
            return response()->json($th->getMessage(),500);
        }
    }
}
