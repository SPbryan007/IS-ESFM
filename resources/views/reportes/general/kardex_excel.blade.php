<br><br>
<table>
    <tr>
        <td colspan="7" rowspan="5"></td>
        <td colspan="10" rowspan="5" style="font-size: 14px;font-weight:bold;text-align: center;vertical-align: center">
            ESCUELA SUPERIOR DE FORMACIÓN DE MAESTROS <br> "MARISCAL SUCRE"
            <br>REPORTE GENERAL
            <br>DEL {{ date('d/m/Y',strtotime($data['del'])) }} AL {{ date('d/m/Y',strtotime($data['al'])) }}
        </td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>
<br><br><br>
<table>
    <thead>
    <tr style="">
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 5px;font-weight: bold;text-align: center;vertical-align: center">N°</th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 5px;font-weight: bold;text-align: center;vertical-align: center">Linea</th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 16px;font-weight: bold;text-align: center;vertical-align: center">CODIGO</th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 30px;font-weight: bold;text-align: center;vertical-align: center">PRODUCTO</th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 6px;font-weight: bold;text-align: center;vertical-align: center">NI</th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 6px;font-weight: bold;text-align: center;vertical-align: center">NS</th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 14px;font-weight: bold;text-align: center;vertical-align: center">FECHA</th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">MEDIDA</th>
        <th rowspan="1" scope="col" colspan="3" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center"><span>SALDO INICIAL</span></th>
        <th rowspan="1" scope="col" colspan="3" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">INGRESOS</th>
        <th rowspan="1" scope="col" colspan="3" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">SALIDAS</th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 20px;font-weight: bold;text-align: center;vertical-align: center">UNIDAD
            <br>SOLICITANTE </th>
        <th rowspan="1" scope="col" colspan="3" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">SALDO</th>
    </tr>
    <tr>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 10px;font-weight: bold;text-align: center;vertical-align: center">CANTIDAD</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 10px;font-weight: bold;text-align: center;vertical-align: center">P.U.</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 10px;font-weight: bold;text-align: center;vertical-align: center">C. TOTAL</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 10px;font-weight: bold;text-align: center;vertical-align: center">CANTIDAD</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 10px;font-weight: bold;text-align: center;vertical-align: center">P.U.</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 10px;font-weight: bold;text-align: center;vertical-align: center">C. TOTAL</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 10px;font-weight: bold;text-align: center;vertical-align: center">CANTIDAD</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 10px;font-weight: bold;text-align: center;vertical-align: center">P.U.</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 10px;font-weight: bold;text-align: center;vertical-align: center">C. TOTAL</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 10px;font-weight: bold;text-align: center;vertical-align: center">CANTIDAD</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 10px;font-weight: bold;text-align: center;vertical-align: center">P.U.</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 10px;font-weight: bold;text-align: center;vertical-align: center">C. TOTAL</th>
    </tr>
    </thead>
    <tbody>
    @foreach($data['data'] as $item)
        <tr class="item">
            <th scope="row" style="border: 15px solid #000000;font-size: 9px;text-align: center;">{{ $loop->iteration  }}</th>
            <th style="border: 15px solid #000000;font-size: 9px;text-align: center;">{{ $item->linea  }}</th>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: center;">{{ $item->codigo }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: left;">{{ $item->articulo }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: center;">{{ $item->ni }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: center;">{{ $item->ns }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: center;">{{ date('d/m/Y',strtotime($item->fecha )) }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: center;">{{ $item->medida }}</td>

            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ number_format(round($item->c_inicial,2),2)  }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ number_format(round($item->precio_u,2),2)  }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ number_format(round($item->s_inicial,2),2) }}</td>

            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ number_format(round($item->c_ingreso,2),2)  }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ number_format(round($item->precio_u,2),2)  }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ number_format(round($item->s_ingreso,2),2)  }}</td>

            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ number_format(round($item->c_salida,2),2) }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ number_format(round($item->precio_u,2),2)  }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ number_format(round($item->s_salida,2),2)  }}</td>

            <td style="border: 15px solid #000000;font-size: 9px;text-align: left;">
                {{ $item->unidad  }}
            </td>

            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ number_format(round($item->c_final,2),2)  }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ number_format(round($item->precio_u,2),2)  }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ number_format(round($item->s_final,2),2)  }}</td>
        </tr>
    @endforeach
    </tbody>
    <tfoot>
    <tr>
        <th colspan="8" scope="row" style="border: 15px solid #000000;text-align: center;font-size: 9px;font-weight: bold">TOTALES</th>

        <td  colspan="2" style="border: 15px solid #000000;text-align: right;font-weight: bold"></td>
        <td  style="border: 15px solid #000000;text-align: right;font-weight: bold">{{ number_format(round($data['ts_inicial'],2),2)  }}</td>

        <td  colspan="2" style="border: 15px solid #000000;text-align: right;font-weight: bold"></td>
        <td  style="border: 15px solid #000000;text-align: right;font-weight: bold">{{ number_format(round($data['ts_ingreso'],2),2)  }}</td>

        <td  colspan="2" style="border: 15px solid #000000;text-align: right;font-weight: bold"></td>
        <td  style="border: 15px solid #000000;text-align: right;font-weight: bold">{{ number_format(round($data['ts_salida'],2),2) }}</td>

        <td  colspan="3" style="border: 15px solid #000000;"></td>
        <td style="border: 15px solid #000000;text-align: right;font-weight: bold">{{ number_format(round($data['ts_final'],2),2) }}</td>
    </tr>
    </tfoot>

</table>
<br>
<table>
    <thead>
    <tr>
        <th scope="col" colspan="2" style="border: 15px solid #000000;font-size: 9px;font-weight: bold;text-align: center;">LINEA</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;font-weight: bold;text-align: center;">SALDO INICIAL</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;font-weight: bold;text-align: center;">INGRESOS</th>
        <th scope="col" colspan="2" style="border: 15px solid #000000;font-size: 9px;font-weight: bold;text-align: center;">SALIDAS</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;font-weight: bold;text-align: center;">SALDO FINAL</th>
    </tr>
    </thead>
    <tr>
        <td colspan="2" style="text-align: center;border: 15px solid #000000;font-size: 9px;">1</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ number_format(round($data['l1s_inicial'],2),2) }}</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ number_format(round($data['l1s_entradas'],2),2) }}</td>
        <td colspan="2" style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ number_format(round($data['l1s_salidas'],2),2) }}</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ number_format(round($data['l1s_final'],2),2) }}</td>
    </tr>
    <tr>
        <td colspan="2" style="text-align: center;border: 15px solid #000000;font-size: 9px;">2</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ number_format(round($data['l2s_inicial'],2),2) }}</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ number_format(round($data['l2s_entradas'],2),2) }}</td>
        <td colspan="2" style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ number_format(round($data['l2s_salidas'],2),2) }}</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ number_format(round($data['l2s_final'],2),2) }}</td>
    </tr>
    <tr>
        <td colspan="2" style="text-align: center;border: 15px solid #000000;font-size: 9px;">3</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ number_format(round($data['l3s_inicial'],2),2) }}</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ number_format(round($data['l3s_entradas'],2),2) }}</td>
        <td colspan="2" style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ number_format(round($data['l3s_salidas'],2),2) }}</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ number_format(round($data['l3s_final'],2) ,2)}}</td>
    </tr>
    <tr>
        <th colspan="2"  style="text-align: center;font-weight: bold;border: 15px solid #000000;font-size: 9px;">TOTALES</th>
        <th style="text-align: right;font-weight: bold;border: 15px solid #000000;font-size: 9px;">{{ number_format(round($data['ts_inicial'],2),2) }}</th>
        <th style="text-align: right;font-weight: bold;border: 15px solid #000000;font-size: 9px;">{{ number_format(round($data['ts_ingreso'],2),2) }}</th>
        <th colspan="2" style="text-align: right;font-weight: bold;border: 15px solid #000000;font-size: 9px;">{{ number_format(round($data['ts_salida'],2),2) }}</th>
        <th style="text-align: right;font-weight: bold;border: 15px solid #000000;font-size: 9px;">{{ number_format(round($data['ts_final'],2),2) }}</th>
    </tr>
</table>
