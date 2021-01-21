<?php

namespace App\Http\Controllers;

use App\Models\Ingreso;
use App\Models\Periodo;
use App\Models\Proveedor;
use App\Models\Salida;
use App\Models\Solicitante;
use App\Repositories\GraphicsRepository;
use App\Repositories\ReporteRepository;
use Illuminate\Http\Request;

class GraphicController extends Controller
{
    /**
     * @var GraphicsRepository
     */
    private $graphicsRepository;

    /**
     * GraphicController constructor.
     * @param GraphicsRepository $graphicsRepository
     */
    public function __construct(GraphicsRepository $graphicsRepository)
   {

       $this->graphicsRepository = $graphicsRepository;
   }

    /**
     * @return \Illuminate\Http\Response
     */
    public function getDashboardGraphics()
    {
        try {
            $stockLinea = $this->graphicsRepository->getStockLinea();
            $iss = $this->graphicsRepository->getCashFlowMothly();
            $flow = $this->graphicsRepository->getCashFlow();
            $periodo = Periodo::latest()->withTrashed()
                ->where('estado','=',Periodo::FINALIZADO)
                ->orWhere('estado','=',Periodo::EN_CURSO)
                ->first();
            $periodo_id = $periodo ? $periodo->id : NULL;
            $cant_prov      = Proveedor::withoutTrashed()->count();
            $cant_sol       = Solicitante::withoutTrashed()->count();
            $cant_in        = Ingreso::withoutTrashed()
                                    ->where('tipo_ingreso','<>',Ingreso::INV_INICIAL)
                                    ->where('periodo_id',$periodo_id)
                                    ->count();
            $cant_sa        = Salida::withoutTrashed()
                                    ->where('periodo_id',$periodo_id)
                                    ->count();
            $data = [
                'periodo'   => $periodo ? $periodo->nombre : NULL,
                'cant_prov' => $cant_prov,
                'cant_sol'  => $cant_sol,
                'cant_in'   => $cant_in,
                'cant_sa'   => $cant_sa,
                'cash_flow'      => $flow,
                'ingreso_salida'   => $iss,
                'stock_linea' => $stockLinea
            ];
            return response()->json($data,200);
        }catch (\Exception $e){
            return response()->json(['message' => 'Error al cargar datos, verifique la conexión con la base de datos.'.$e->getMessage()],500);
        }
    }
}
