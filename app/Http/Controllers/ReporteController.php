<?php

namespace App\Http\Controllers;
use App\Exports\MovimientoAlmacenView;
use App\Repositories\IngresoRepository;
use App\Repositories\PeriodoRepository;
use App\Repositories\ReporteRepository;
use App\Repositories\SalidaRepository;
use App\Repositories\SettingsRepository;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Database\QueryException;

use Illuminate\Http\Request;
use Luecano\NumeroALetras\NumeroALetras;
use Illuminate\Support\Facades\Validator;
use Maatwebsite\Excel\Facades\Excel;
use Symfony\Component\HttpKernel\Exception\ConflictHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ReporteController extends Controller
{
    /**
     * @var ReporteRepository
     */
    private $reporteRepository;
    /**
     * @var PeriodoRepository
     */
    private $periodoRepository;

    /**
     * ReporteController constructor.
     * @param ReporteRepository $reporteRepository
     * @param PeriodoRepository $periodoRepository
     */
    public function __construct(ReporteRepository $reporteRepository, PeriodoRepository $periodoRepository)
    {
        $this->reporteRepository = $reporteRepository;
        $this->periodoRepository = $periodoRepository;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function MovimientoAlmacen(Request $request)
    {
        try {
            $query = $this->reporteRepository->SaldosAlmacen($request->del,$request->al,$request->periodo,$request->conSaldo);
            $s_inicial = $query->sum->s_inicial;
            $l1s_inicial   = isset($query->groupBy('num_linea')['linea1']) ? $query->groupBy('num_linea')['linea1']->sum->s_inicial : 0;
            $l2s_inicial   = isset($query->groupBy('num_linea')['linea2']) ? $query->groupBy('num_linea')['linea2']->sum->s_inicial : 0;
            $l3s_inicial   = isset($query->groupBy('num_linea')['linea3']) ? $query->groupBy('num_linea')['linea3']->sum->s_inicial : 0;

            $l1s_entradas   = isset($query->groupBy('num_linea')['linea1']) ? $query->groupBy('num_linea')['linea1']->sum->s_entrada : 0;
            $l2s_entradas   = isset($query->groupBy('num_linea')['linea2']) ? $query->groupBy('num_linea')['linea2']->sum->s_entrada : 0;
            $l3s_entradas   = isset($query->groupBy('num_linea')['linea3']) ? $query->groupBy('num_linea')['linea3']->sum->s_entrada : 0;

            $l1s_salidas   = isset($query->groupBy('num_linea')['linea1'])  ? $query->groupBy('num_linea')['linea1']->sum->s_salida : 0;
            $l2s_salidas   = isset($query->groupBy('num_linea')['linea2']) ? $query->groupBy('num_linea')['linea2']->sum->s_salida : 0;
            $l3s_salidas   = isset($query->groupBy('num_linea')['linea3']) ? $query->groupBy('num_linea')['linea3']->sum->s_salida : 0;

            $l1s_final   = $l1s_inicial+$l1s_entradas-$l1s_salidas;
            $l2s_final   = $l2s_inicial+$l2s_entradas-$l2s_salidas;
            $l3s_final   = $l3s_inicial+$l3s_entradas-$l3s_salidas;
            $data = [
                'data'          => $query,
                'ts_inicial' => $s_inicial,
                'ts_entrada' => $query->sum->s_entrada,
                'ts_salida'  => $query->sum->s_salida,
                'ts_final'   => ($s_inicial+$query->sum->s_entrada)-$query->sum->s_salida,
                'l1s_inicial'   => $l1s_inicial,
                'l2s_inicial'   => $l2s_inicial,
                'l3s_inicial'   => $l3s_inicial,
                'l1s_final'   => $l1s_final,
                'l2s_final'   => $l2s_final,
                'l3s_final'   => $l3s_final,
                'l1s_entradas'   => $l1s_entradas,
                'l2s_entradas'   => $l2s_entradas,
                'l3s_entradas'   => $l3s_entradas,
                'l1s_salidas'   => $l1s_salidas,
                'l2s_salidas'   => $l2s_salidas,
                'l3s_salidas'   => $l3s_salidas,
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al cargar datos, verifique la conexión con la base de datos.'.$e],500);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function MovimientoAlmacenPDF(Request $request){
        try {
            $query = $this->reporteRepository->SaldosAlmacen(
                $request->query('del'),
                $request->query('al'),
                $request->query('periodo'),
                $request->query('conSaldo')
            );
            $periodo = $this->periodoRepository->getById($request->periodo);
            $s_inicial = $query->sum->s_inicial;
            $l1s_inicial   = isset($query->groupBy('num_linea')['linea1']) ? $query->groupBy('num_linea')['linea1']->sum->s_inicial : 0;
            $l2s_inicial   = isset($query->groupBy('num_linea')['linea2']) ? $query->groupBy('num_linea')['linea2']->sum->s_inicial : 0;
            $l3s_inicial   = isset($query->groupBy('num_linea')['linea3']) ? $query->groupBy('num_linea')['linea3']->sum->s_inicial : 0;

            $l1s_entradas   = isset($query->groupBy('num_linea')['linea1']) ? $query->groupBy('num_linea')['linea1']->sum->s_entrada : 0;
            $l2s_entradas   = isset($query->groupBy('num_linea')['linea2']) ? $query->groupBy('num_linea')['linea2']->sum->s_entrada : 0;
            $l3s_entradas   = isset($query->groupBy('num_linea')['linea3']) ? $query->groupBy('num_linea')['linea3']->sum->s_entrada : 0;

            $l1s_salidas   = isset($query->groupBy('num_linea')['linea1'])  ? $query->groupBy('num_linea')['linea1']->sum->s_salida : 0;
            $l2s_salidas   = isset($query->groupBy('num_linea')['linea2']) ? $query->groupBy('num_linea')['linea2']->sum->s_salida : 0;
            $l3s_salidas   = isset($query->groupBy('num_linea')['linea3']) ? $query->groupBy('num_linea')['linea3']->sum->s_salida : 0;

            $l1s_final   = $l1s_inicial+$l1s_entradas-$l1s_salidas;
            $l2s_final   = $l2s_inicial+$l2s_entradas-$l2s_salidas;
            $l3s_final   = $l3s_inicial+$l3s_entradas-$l3s_salidas;

            $data = [
                'data'      => $query,
                'del'       => $request->query('del'),
                'al'        => $request->query('al'),
                'periodo'   => $periodo->nombre,
                'ts_inicial' => $s_inicial,
                'ts_entrada' => $query->sum->s_entrada,
                'ts_salida'  => $query->sum->s_salida,
                'ts_final'   => ($s_inicial+$query->sum->s_entrada)-$query->sum->s_salida,
                'l1s_inicial'   => $l1s_inicial,
                'l2s_inicial'   => $l2s_inicial,
                'l3s_inicial'   => $l3s_inicial,
                'l1s_final'   => $l1s_final,
                'l2s_final'   => $l2s_final,
                'l3s_final'   => $l3s_final,
                'l1s_entradas'   => $l1s_entradas,
                'l2s_entradas'   => $l2s_entradas,
                'l3s_entradas'   => $l3s_entradas,
                'l1s_salidas'   => $l1s_salidas,
                'l2s_salidas'   => $l2s_salidas,
                'l3s_salidas'   => $l3s_salidas,
            ];
            switch ($request->query('formato')){
                case 'A':
                    //$pdf = PDF::loadView('reportes.ingresos.compra',['data'=> $ingreso,'converted' => $converted]);
                    $pdf = PDF::loadView('reportes.movimiento.formatoa',$data);
                    return $pdf->setPaper('letter')->stream('movimiento_almacen_formato_a.pdf');
                    break;
                case 'B':
                    $pdf = PDF::loadView('reportes.movimiento.formatob',$data);
                    return $pdf->setPaper('letter','landscape')->stream('movimiento_almacen_formato_b.pdf');
                    break;
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al cargar datos, verifique la conexión con la base de datos.'.$e],500);
        }
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\Response|\Illuminate\Http\Response|\Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public function MovimientoAlmacenToExcel(Request $request){
        try {
            $query = $this->reporteRepository->SaldosAlmacen(
                $request->del,
                $request->al,
                $request->periodo,
                $request->conSaldo
            );
            $periodo = $this->periodoRepository->getById($request->periodo);
            $s_inicial = $query->sum->s_inicial;
            $l1s_inicial   = isset($query->groupBy('num_linea')['linea1']) ? $query->groupBy('num_linea')['linea1']->sum->s_inicial : 0;
            $l2s_inicial   = isset($query->groupBy('num_linea')['linea2']) ? $query->groupBy('num_linea')['linea2']->sum->s_inicial : 0;
            $l3s_inicial   = isset($query->groupBy('num_linea')['linea3']) ? $query->groupBy('num_linea')['linea3']->sum->s_inicial : 0;

            $l1s_entradas   = isset($query->groupBy('num_linea')['linea1']) ? $query->groupBy('num_linea')['linea1']->sum->s_entrada : 0;
            $l2s_entradas   = isset($query->groupBy('num_linea')['linea2']) ? $query->groupBy('num_linea')['linea2']->sum->s_entrada : 0;
            $l3s_entradas   = isset($query->groupBy('num_linea')['linea3']) ? $query->groupBy('num_linea')['linea3']->sum->s_entrada : 0;

            $l1s_salidas   = isset($query->groupBy('num_linea')['linea1'])  ? $query->groupBy('num_linea')['linea1']->sum->s_salida : 0;
            $l2s_salidas   = isset($query->groupBy('num_linea')['linea2']) ? $query->groupBy('num_linea')['linea2']->sum->s_salida : 0;
            $l3s_salidas   = isset($query->groupBy('num_linea')['linea3']) ? $query->groupBy('num_linea')['linea3']->sum->s_salida : 0;

            $l1s_final   = $l1s_inicial+$l1s_entradas-$l1s_salidas;
            $l2s_final   = $l2s_inicial+$l2s_entradas-$l2s_salidas;
            $l3s_final   = $l3s_inicial+$l3s_entradas-$l3s_salidas;

            $data = [
                'data'       => $query,
                'del'        => $request->del,
                'al'         => $request->al,
                'periodo'    => $periodo->nombre,
                'ts_inicial' => $s_inicial,
                'ts_entrada' => $query->sum->s_entrada,
                'ts_salida'  => $query->sum->s_salida,
                'ts_final'   => ($s_inicial+$query->sum->s_entrada)-$query->sum->s_salida,
                'l1s_inicial'   => $l1s_inicial,
                'l2s_inicial'   => $l2s_inicial,
                'l3s_inicial'   => $l3s_inicial,
                'l1s_final'   => $l1s_final,
                'l2s_final'   => $l2s_final,
                'l3s_final'   => $l3s_final,
                'l1s_entradas'   => $l1s_entradas,
                'l2s_entradas'   => $l2s_entradas,
                'l3s_entradas'   => $l3s_entradas,
                'l1s_salidas'   => $l1s_salidas,
                'l2s_salidas'   => $l2s_salidas,
                'l3s_salidas'   => $l3s_salidas,
                'formato' => $request->formato,
            ];
            switch ($request->formato){
                case 'A':
                    return (new MovimientoAlmacenView($data,'reportes.movimiento.excel_formatoa'))->download('lote.xlsx');
                    break;
                case 'B':
                    return (new MovimientoAlmacenView($data,'reportes.movimiento.excel_formatob'))->download('lote.xlsx');
                    break;
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'Ha ocurrido un error inesperado en la descarga'.$e],500);
        }
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function ReporteGeneral(Request $request){
        try {

            $query = $this->reporteRepository->ReporteGeneral(
                $request->del,
                $request->al,
                $request->periodo,
                $request->conSaldo
            );
            $periodo = $this->periodoRepository->getById($request->periodo);
            $saldos = $this->reporteRepository->SaldosAlmacen($request->del,$request->al,$request->periodo,$request->conSaldo);
            $s_inicial = $saldos->sum->s_inicial;
            $l1s_inicial   = isset($saldos->groupBy('num_linea')['linea1']) ? $saldos->groupBy('num_linea')['linea1']->sum->s_inicial : 0;
            $l2s_inicial   = isset($saldos->groupBy('num_linea')['linea2']) ? $saldos->groupBy('num_linea')['linea2']->sum->s_inicial : 0;
            $l3s_inicial   = isset($saldos->groupBy('num_linea')['linea3']) ? $saldos->groupBy('num_linea')['linea3']->sum->s_inicial : 0;

            $l1s_entradas   = isset($saldos->groupBy('num_linea')['linea1']) ? $saldos->groupBy('num_linea')['linea1']->sum->s_entrada : 0;
            $l2s_entradas   = isset($saldos->groupBy('num_linea')['linea2']) ? $saldos->groupBy('num_linea')['linea2']->sum->s_entrada : 0;
            $l3s_entradas   = isset($saldos->groupBy('num_linea')['linea3']) ? $saldos->groupBy('num_linea')['linea3']->sum->s_entrada : 0;

            $l1s_salidas   = isset($saldos->groupBy('num_linea')['linea1'])  ? $saldos->groupBy('num_linea')['linea1']->sum->s_salida : 0;
            $l2s_salidas   = isset($saldos->groupBy('num_linea')['linea2']) ? $saldos->groupBy('num_linea')['linea2']->sum->s_salida : 0;
            $l3s_salidas   = isset($saldos->groupBy('num_linea')['linea3']) ? $saldos->groupBy('num_linea')['linea3']->sum->s_salida : 0;

            $l1s_final   = $l1s_inicial+$l1s_entradas-$l1s_salidas;
            $l2s_final   = $l2s_inicial+$l2s_entradas-$l2s_salidas;
            $l3s_final   = $l3s_inicial+$l3s_entradas-$l3s_salidas;
//            $is = $this->reporteRepository->TIngresoSalida( $request->del, $request->al,$request->periodo);
//            $s_inicial = $query->sum->total_inicial;
//
//            $l1s_inicial   = isset($query->groupBy('num_linea')['linea1']) ? $query->groupBy('num_linea')['linea1']->sum->total_inicial : 0;
//            $l2s_inicial   = isset($query->groupBy('num_linea')['linea2']) ? $query->groupBy('num_linea')['linea2']->sum->total_inicial : 0;
//            $l3s_inicial   = isset($query->groupBy('num_linea')['linea3']) ? $query->groupBy('num_linea')['linea3']->sum->total_inicial : 0;
//
//            $l1s_entradas   = isset($is->groupBy('num_linea')['linea1']) ? $is->groupBy('num_linea')['linea1']->sum->s_ingreso : 0;
//            $l2s_entradas   = isset($is->groupBy('num_linea')['linea2']) ? $is->groupBy('num_linea')['linea2']->sum->s_ingreso : 0;
//            $l3s_entradas   = isset($is->groupBy('num_linea')['linea3']) ? $is->groupBy('num_linea')['linea3']->sum->s_ingreso : 0;
//
//            $l1s_salidas   = isset($is->groupBy('num_linea')['linea1'])  ? $is->groupBy('num_linea')['linea1']->sum->s_salida : 0;
//            $l2s_salidas   = isset($is->groupBy('num_linea')['linea2']) ? $is->groupBy('num_linea')['linea2']->sum->s_salida : 0;
//            $l3s_salidas   = isset($is->groupBy('num_linea')['linea3']) ? $is->groupBy('num_linea')['linea3']->sum->s_salida : 0;
//
//            $l1s_final   = $l1s_inicial+$l1s_entradas-$l1s_salidas;
//            $l2s_final   = $l2s_inicial+$l2s_entradas-$l2s_salidas;
//            $l3s_final   = $l3s_inicial+$l3s_entradas-$l3s_salidas;
//

            $data = [
                'data'       => $query,
                'del'        => $request->del,
                'al'         => $request->al,
                'periodo'    => $periodo->nombre,
                'ts_inicial' => $s_inicial,
                'ts_ingreso' => $saldos->sum->s_entrada,
                'ts_salida'  => $saldos->sum->s_salida,
                'ts_final'   => ($s_inicial+$saldos->sum->s_entrada)-$saldos->sum->s_salida,
                'l1s_inicial'   => $l1s_inicial,
                'l2s_inicial'   => $l2s_inicial,
                'l3s_inicial'   => $l3s_inicial,
                'l1s_final'   => $l1s_final,
                'l2s_final'   => $l2s_final,
                'l3s_final'   => $l3s_final,
                'l1s_entradas'   => $l1s_entradas,
                'l2s_entradas'   => $l2s_entradas,
                'l3s_entradas'   => $l3s_entradas,
                'l1s_salidas'   => $l1s_salidas,
                'l2s_salidas'   => $l2s_salidas,
                'l3s_salidas'   => $l3s_salidas,
            ];
            return response()->json($data);
        }catch (\Exception $e){
            return response()->json(['message' => 'Ha ocurrido un error inesperado en la descarga'.$e],500);
        }
    }

    public function ReporteGeneralToPDF(Request $request)
    {
        try {
            $query = $this->reporteRepository->ReporteGeneral(
                $request->query('del'),
                $request->query('al'),
                $request->query('periodo'),
                $request->query('conSaldo')
            );
            $periodo = $this->periodoRepository->getById($request->query('periodo'));
            $saldos = $this->reporteRepository->SaldosAlmacen($request->del,$request->al,$request->periodo,$request->conSaldo);
            $s_inicial = $saldos->sum->s_inicial;
            $l1s_inicial   = isset($saldos->groupBy('num_linea')['linea1']) ? $saldos->groupBy('num_linea')['linea1']->sum->s_inicial : 0;
            $l2s_inicial   = isset($saldos->groupBy('num_linea')['linea2']) ? $saldos->groupBy('num_linea')['linea2']->sum->s_inicial : 0;
            $l3s_inicial   = isset($saldos->groupBy('num_linea')['linea3']) ? $saldos->groupBy('num_linea')['linea3']->sum->s_inicial : 0;

            $l1s_entradas   = isset($saldos->groupBy('num_linea')['linea1']) ? $saldos->groupBy('num_linea')['linea1']->sum->s_entrada : 0;
            $l2s_entradas   = isset($saldos->groupBy('num_linea')['linea2']) ? $saldos->groupBy('num_linea')['linea2']->sum->s_entrada : 0;
            $l3s_entradas   = isset($saldos->groupBy('num_linea')['linea3']) ? $saldos->groupBy('num_linea')['linea3']->sum->s_entrada : 0;

            $l1s_salidas   = isset($saldos->groupBy('num_linea')['linea1'])  ? $saldos->groupBy('num_linea')['linea1']->sum->s_salida : 0;
            $l2s_salidas   = isset($saldos->groupBy('num_linea')['linea2']) ? $saldos->groupBy('num_linea')['linea2']->sum->s_salida : 0;
            $l3s_salidas   = isset($saldos->groupBy('num_linea')['linea3']) ? $saldos->groupBy('num_linea')['linea3']->sum->s_salida : 0;

            $l1s_final   = $l1s_inicial+$l1s_entradas-$l1s_salidas;
            $l2s_final   = $l2s_inicial+$l2s_entradas-$l2s_salidas;
            $l3s_final   = $l3s_inicial+$l3s_entradas-$l3s_salidas;

            $data = [
                'data'       => $query,
                'del'        => $request->del,
                'al'         =>  $request->query('al'),
                'periodo'    => $periodo->nombre,
                'ts_inicial' => $s_inicial,
                'ts_ingreso' => $saldos->sum->s_entrada,
                'ts_salida'  => $saldos->sum->s_salida,
                'ts_final'   => ($s_inicial+$saldos->sum->s_entrada)-$saldos->sum->s_salida,
                'l1s_inicial'   => $l1s_inicial,
                'l2s_inicial'   => $l2s_inicial,
                'l3s_inicial'   => $l3s_inicial,
                'l1s_final'   => $l1s_final,
                'l2s_final'   => $l2s_final,
                'l3s_final'   => $l3s_final,
                'l1s_entradas'   => $l1s_entradas,
                'l2s_entradas'   => $l2s_entradas,
                'l3s_entradas'   => $l3s_entradas,
                'l1s_salidas'   => $l1s_salidas,
                'l2s_salidas'   => $l2s_salidas,
                'l3s_salidas'   => $l3s_salidas,
            ];
            //return $data;
            //return view('reportes.general.kardex',$data);
            $paper_size = array(0,0,612.00,936.00);

            $pdf = PDF::loadView('reportes.general.kardex',$data);
            return $pdf->setPaper($paper_size,'landscape')->stream('kardex.pdf');

        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al cargar datos, verifique la conexión con la base de datos.'.$e],500);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response|\Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public function ReporteGeneralToExcel(Request $request){
        try {
            $query = $this->reporteRepository->ReporteGeneral(
                $request->del,
                $request->al,
                $request->periodo,
                $request->conSaldo
            );
            $periodo = $this->periodoRepository->getById($request->periodo);
            $saldos = $this->reporteRepository->SaldosAlmacen($request->del,$request->al,$request->periodo,$request->conSaldo);
            $s_inicial = $saldos->sum->s_inicial;
            $l1s_inicial   = isset($saldos->groupBy('num_linea')['linea1']) ? $saldos->groupBy('num_linea')['linea1']->sum->s_inicial : 0;
            $l2s_inicial   = isset($saldos->groupBy('num_linea')['linea2']) ? $saldos->groupBy('num_linea')['linea2']->sum->s_inicial : 0;
            $l3s_inicial   = isset($saldos->groupBy('num_linea')['linea3']) ? $saldos->groupBy('num_linea')['linea3']->sum->s_inicial : 0;

            $l1s_entradas   = isset($saldos->groupBy('num_linea')['linea1']) ? $saldos->groupBy('num_linea')['linea1']->sum->s_entrada : 0;
            $l2s_entradas   = isset($saldos->groupBy('num_linea')['linea2']) ? $saldos->groupBy('num_linea')['linea2']->sum->s_entrada : 0;
            $l3s_entradas   = isset($saldos->groupBy('num_linea')['linea3']) ? $saldos->groupBy('num_linea')['linea3']->sum->s_entrada : 0;

            $l1s_salidas   = isset($saldos->groupBy('num_linea')['linea1'])  ? $saldos->groupBy('num_linea')['linea1']->sum->s_salida : 0;
            $l2s_salidas   = isset($saldos->groupBy('num_linea')['linea2']) ? $saldos->groupBy('num_linea')['linea2']->sum->s_salida : 0;
            $l3s_salidas   = isset($saldos->groupBy('num_linea')['linea3']) ? $saldos->groupBy('num_linea')['linea3']->sum->s_salida : 0;

            $l1s_final   = $l1s_inicial+$l1s_entradas-$l1s_salidas;
            $l2s_final   = $l2s_inicial+$l2s_entradas-$l2s_salidas;
            $l3s_final   = $l3s_inicial+$l3s_entradas-$l3s_salidas;

            $data = [
                'data'       => $query,
                'del'        => $request->del,
                'al'         => $request->al,
                'periodo'    => $periodo->nombre,
                'ts_inicial' => $s_inicial,
                'ts_ingreso' => $saldos->sum->s_entrada,
                'ts_salida'  => $saldos->sum->s_salida,
                'ts_final'   => ($s_inicial+$saldos->sum->s_entrada)-$saldos->sum->s_salida,
                'l1s_inicial'   => $l1s_inicial,
                'l2s_inicial'   => $l2s_inicial,
                'l3s_inicial'   => $l3s_inicial,
                'l1s_final'   => $l1s_final,
                'l2s_final'   => $l2s_final,
                'l3s_final'   => $l3s_final,
                'l1s_entradas'   => $l1s_entradas,
                'l2s_entradas'   => $l2s_entradas,
                'l3s_entradas'   => $l3s_entradas,
                'l1s_salidas'   => $l1s_salidas,
                'l2s_salidas'   => $l2s_salidas,
                'l3s_salidas'   => $l3s_salidas,
                'formato' => 'KARDEX'
            ];
            return (new MovimientoAlmacenView($data,'reportes.general.kardex_excel'))->download('kardex.xlsx');
        } catch (\Exception $e) {
            return response()->json('Ha ocurrido un error inesperado en la descarga'.$e->getMessage(),500);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function SaldosAlmacen(Request $request){
        try {
            $periodo = $this->periodoRepository->getById($request->periodo);
            $query = $this->reporteRepository->SaldosAlmacen(
                $periodo->fecha_inicial,
                $request->al,
                $periodo->id,
                $request->conSaldo
            );

            $s_inicial = $query->sum->s_inicial;
            $l1s_inicial   = isset($query->groupBy('num_linea')['linea1']) ? $query->groupBy('num_linea')['linea1']->sum->s_inicial : 0;
            $l2s_inicial   = isset($query->groupBy('num_linea')['linea2']) ? $query->groupBy('num_linea')['linea2']->sum->s_inicial : 0;
            $l3s_inicial   = isset($query->groupBy('num_linea')['linea3']) ? $query->groupBy('num_linea')['linea3']->sum->s_inicial : 0;

            $l1s_entradas   = isset($query->groupBy('num_linea')['linea1']) ? $query->groupBy('num_linea')['linea1']->sum->s_entrada : 0;
            $l2s_entradas   = isset($query->groupBy('num_linea')['linea2']) ? $query->groupBy('num_linea')['linea2']->sum->s_entrada : 0;
            $l3s_entradas   = isset($query->groupBy('num_linea')['linea3']) ? $query->groupBy('num_linea')['linea3']->sum->s_entrada : 0;

            $l1s_salidas   = isset($query->groupBy('num_linea')['linea1'])  ? $query->groupBy('num_linea')['linea1']->sum->s_salida : 0;
            $l2s_salidas   = isset($query->groupBy('num_linea')['linea2']) ? $query->groupBy('num_linea')['linea2']->sum->s_salida : 0;
            $l3s_salidas   = isset($query->groupBy('num_linea')['linea3']) ? $query->groupBy('num_linea')['linea3']->sum->s_salida : 0;

            $l1s_final   = $l1s_inicial+$l1s_entradas-$l1s_salidas;
            $l2s_final   = $l2s_inicial+$l2s_entradas-$l2s_salidas;
            $l3s_final   = $l3s_inicial+$l3s_entradas-$l3s_salidas;

            $data = [
                'data'          => $query,
                'ts_inicial' => $s_inicial,
                'ts_entrada' => $query->sum->s_entrada,
                'ts_salida'  => $query->sum->s_salida,
                'ts_final'   => ($s_inicial+$query->sum->s_entrada)-$query->sum->s_salida,
                'l1s_inicial'   => $l1s_inicial,
                'l2s_inicial'   => $l2s_inicial,
                'l3s_inicial'   => $l3s_inicial,
                'l1s_final'   => $l1s_final,
                'l2s_final'   => $l2s_final,
                'l3s_final'   => $l3s_final,
                'l1s_entradas'   => $l1s_entradas,
                'l2s_entradas'   => $l2s_entradas,
                'l3s_entradas'   => $l3s_entradas,
                'l1s_salidas'   => $l1s_salidas,
                'l2s_salidas'   => $l2s_salidas,
                'l3s_salidas'   => $l3s_salidas,
            ];
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al cargar datos, verifique la conexión con la base de datos.'.$e],500);
        }

    }


    public function SaldosAlmacenToPdf(Request $request){
        try {
            $periodo = $this->periodoRepository->getById($request->query('periodo'));
            $query = $this->reporteRepository->SaldosAlmacen(
                $periodo->fecha_inicial,
                $request->query('al'),
                $periodo->id,
                $request->query('conSaldo')
            );
            $s_inicial = $query->sum->s_inicial;
            $l1s_inicial   = isset($query->groupBy('num_linea')['linea1']) ? $query->groupBy('num_linea')['linea1']->sum->s_inicial : 0;
            $l2s_inicial   = isset($query->groupBy('num_linea')['linea2']) ? $query->groupBy('num_linea')['linea2']->sum->s_inicial : 0;
            $l3s_inicial   = isset($query->groupBy('num_linea')['linea3']) ? $query->groupBy('num_linea')['linea3']->sum->s_inicial : 0;

            $l1s_entradas   = isset($query->groupBy('num_linea')['linea1']) ? $query->groupBy('num_linea')['linea1']->sum->s_entrada : 0;
            $l2s_entradas   = isset($query->groupBy('num_linea')['linea2']) ? $query->groupBy('num_linea')['linea2']->sum->s_entrada : 0;
            $l3s_entradas   = isset($query->groupBy('num_linea')['linea3']) ? $query->groupBy('num_linea')['linea3']->sum->s_entrada : 0;

            $l1s_salidas   = isset($query->groupBy('num_linea')['linea1'])  ? $query->groupBy('num_linea')['linea1']->sum->s_salida : 0;
            $l2s_salidas   = isset($query->groupBy('num_linea')['linea2']) ? $query->groupBy('num_linea')['linea2']->sum->s_salida : 0;
            $l3s_salidas   = isset($query->groupBy('num_linea')['linea3']) ? $query->groupBy('num_linea')['linea3']->sum->s_salida : 0;

            $l1s_final   = $l1s_inicial+$l1s_entradas-$l1s_salidas;
            $l2s_final   = $l2s_inicial+$l2s_entradas-$l2s_salidas;
            $l3s_final   = $l3s_inicial+$l3s_entradas-$l3s_salidas;

            $data = [
                'data'       => $query,
                'del'        => $periodo->fecha_inicial,
                'al'         => $request->query('al'),
                'periodo'    => $periodo->nombre,
                'ts_inicial' => $s_inicial,
                'ts_entrada' => $query->sum->s_entrada,
                'ts_salida'  => $query->sum->s_salida,
                'ts_final'   => ($s_inicial+$query->sum->s_entrada)-$query->sum->s_salida,
                'l1s_inicial'   => $l1s_inicial,
                'l2s_inicial'   => $l2s_inicial,
                'l3s_inicial'   => $l3s_inicial,
                'l1s_final'   => $l1s_final,
                'l2s_final'   => $l2s_final,
                'l3s_final'   => $l3s_final,
                'l1s_entradas'   => $l1s_entradas,
                'l2s_entradas'   => $l2s_entradas,
                'l3s_entradas'   => $l3s_entradas,
                'l1s_salidas'   => $l1s_salidas,
                'l2s_salidas'   => $l2s_salidas,
                'l3s_salidas'   => $l3s_salidas,
            ];

            $pdf = PDF::loadView('reportes.saldos.saldos_almacen',$data);
            return $pdf->setPaper('letter')->stream('saldos_almacen.pdf');

            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al cargar datos, verifique la conexión con la base de datos.'.$e],500);
        }

    }

    public function SaldosAlmacenToExcel(Request $request){
        try {
            $periodo = $this->periodoRepository->getById($request->periodo);
            $query = $this->reporteRepository->SaldosAlmacen(
                $periodo->fecha_inicio,
                $request->al,
                $request->periodo,
                $request->conSaldo
            );
            $s_inicial = $query->sum->s_inicial;
            $l1s_inicial   = isset($query->groupBy('num_linea')['linea1']) ? $query->groupBy('num_linea')['linea1']->sum->s_inicial : 0;
            $l2s_inicial   = isset($query->groupBy('num_linea')['linea2']) ? $query->groupBy('num_linea')['linea2']->sum->s_inicial : 0;
            $l3s_inicial   = isset($query->groupBy('num_linea')['linea3']) ? $query->groupBy('num_linea')['linea3']->sum->s_inicial : 0;

            $l1s_entradas   = isset($query->groupBy('num_linea')['linea1']) ? $query->groupBy('num_linea')['linea1']->sum->s_entrada : 0;
            $l2s_entradas   = isset($query->groupBy('num_linea')['linea2']) ? $query->groupBy('num_linea')['linea2']->sum->s_entrada : 0;
            $l3s_entradas   = isset($query->groupBy('num_linea')['linea3']) ? $query->groupBy('num_linea')['linea3']->sum->s_entrada : 0;

            $l1s_salidas   = isset($query->groupBy('num_linea')['linea1'])  ? $query->groupBy('num_linea')['linea1']->sum->s_salida : 0;
            $l2s_salidas   = isset($query->groupBy('num_linea')['linea2']) ? $query->groupBy('num_linea')['linea2']->sum->s_salida : 0;
            $l3s_salidas   = isset($query->groupBy('num_linea')['linea3']) ? $query->groupBy('num_linea')['linea3']->sum->s_salida : 0;

            $l1s_final   = $l1s_inicial+$l1s_entradas-$l1s_salidas;
            $l2s_final   = $l2s_inicial+$l2s_entradas-$l2s_salidas;
            $l3s_final   = $l3s_inicial+$l3s_entradas-$l3s_salidas;

            $data = [
                'data'       => $query,
                'del'        => $periodo->fecha_inicio,
                'al'         => $request->al,
                'periodo'    => $periodo->nombre,
                'ts_inicial' => $s_inicial,
                'ts_entrada' => $query->sum->s_entrada,
                'ts_salida'  => $query->sum->s_salida,
                'ts_final'   => ($s_inicial+$query->sum->s_entrada)-$query->sum->s_salida,
                'l1s_inicial'   => $l1s_inicial,
                'l2s_inicial'   => $l2s_inicial,
                'l3s_inicial'   => $l3s_inicial,
                'l1s_final'   => $l1s_final,
                'l2s_final'   => $l2s_final,
                'l3s_final'   => $l3s_final,
                'l1s_entradas'   => $l1s_entradas,
                'l2s_entradas'   => $l2s_entradas,
                'l3s_entradas'   => $l3s_entradas,
                'l1s_salidas'   => $l1s_salidas,
                'l2s_salidas'   => $l2s_salidas,
                'l3s_salidas'   => $l3s_salidas,
                'formato' => 'SALDOS'
            ];
            return (new MovimientoAlmacenView($data,'reportes.saldos.saldos_almacen_excel'))->download('saldos_almacen.xlsx');
        } catch (\Exception $e) {
            return response()->json(['message' => 'Ha ocurrido un error inesperado en la descarga'.$e],500);
        }
    }

    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

    }


    /**
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

    }
}
