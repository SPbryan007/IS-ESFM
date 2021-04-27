<br><br>
<table>
    <tr>
        <td colspan="3" rowspan="4"></td>
        <td colspan="10" rowspan="4" style="font-size: 14px;font-weight:bold;text-align: center;vertical-align: center">
            ESCUELA SUPERIOR DE FORMACIÓN DE MAESTROS "MARISCAL SUCRE"
            <br>REPORTE INDIVIDUAL

        </td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    {{--<tr>
        <td colspan="6">ESTADO DEL MOVIMIENTO DE ALMACEN DE MATERIALES Y SUMINISTROS</td>

    </tr>
    <tr>
        <td colspan="6">DEL 01/01/2020 AL 31/12/2020</td>
    </tr>
    <tr>
        <td colspan="6"> (Expresado en bolivianos)</td>
    </tr>--}}

</table>
<br><br><br>
<table>
    <tr style="">
        <th colspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 5px;font-weight: bold;text-align: left;vertical-align: center">ARTICULO:</th>
        <th colspan="10" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 14px;font-weight: bold;text-align: center;vertical-align: center">{{ $data['data'][0]->articulo  }}</th>
    </tr>
    <tr style="">
        <th colspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 5px;font-weight: bold;text-align: left;vertical-align: center">CÓDIGO:</th>
        <th colspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 14px;font-weight: bold;text-align: center;vertical-align: center">{{ $data['data'][0]->codigo  }}</th>
        <th colspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 5px;font-weight: bold;text-align: left;vertical-align: center">PARTIDA:</th>
        <th colspan="6" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 14px;font-weight: bold;text-align: center;vertical-align: center">{{ $data['data'][0]->partida_codigo+' - '+$data['data'][0]->partida  }}</th>
    </tr>
    <tr style="">
        <th colspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 5px;font-weight: bold;text-align: left;vertical-align: center">LINEA:</th>
        <th colspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 14px;font-weight: bold;text-align: center;vertical-align: center">{{ $data['data'][0]->linea  }}</th>
        <th colspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 5px;font-weight: bold;text-align: left;vertical-align: center">GESTION:</th>
        <th colspan="6" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 14px;font-weight: bold;text-align: center;vertical-align: center">{{ $data['periodo']->nombre  }}</th>
    </tr>
</table>
<table>
    <thead>
    <tr style="">
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 5px;font-weight: bold;text-align: center;vertical-align: center">N°</th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 14px;font-weight: bold;text-align: center;vertical-align: center">FECHA</th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 20px;font-weight: bold;text-align: center;vertical-align: center">DESCRIPCIÓN</th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 6px;font-weight: bold;text-align: center;vertical-align: center">NI</th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 6px;font-weight: bold;text-align: center;vertical-align: center">NS</th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">MEDIDA</th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 20px;font-weight: bold;text-align: center;vertical-align: center">UNIDAD/PROVEEDOR </th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">VALOR <br>UNITARIO</th>
        <th rowspan="1" scope="col" colspan="2" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">INGRESOS</th>
        <th rowspan="1" scope="col" colspan="2" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">SALIDAS</th>
        <th rowspan="1" scope="col" colspan="2" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">SALDO</th>
    </tr>
    <tr>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">Cantidad</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">Bs</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">Cantidad</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">Bs</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">Cantidad</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">Bs</th>
    </tr>
    </thead>
    <tbody>
    @foreach($data['data'] as $item)
        <tr class="item">
            <th scope="row" style="border: 15px solid #000000;font-size: 9px;text-align: center;">{{ $loop->iteration  }}</th>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: center;">{{ date('d/m/Y',strtotime($item->fecha))  }}</td>
            @if($item->ni)
                @if($item->ni == '000')
                    <td style="border: 15px solid #000000;font-size: 9px;text-align: center;">INVENTARIO INICIAL</td>
                @else
                    <td style="border: 15px solid #000000;font-size: 9px;text-align: center;">INGRESO AL ALMACEN</td>
                @endif
            @endif
            @if($item->ns)
                <td style="border: 15px solid #000000;font-size: 9px;text-align: center;">SALIDA DEL ALMACEN</td>
            @endif
            <td style="border: 15px solid #000000;font-size: 9px;text-align: center;" class="pa">{{ $item->ni == '000' ? '-': $item->ni }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: center;" class="pa">{{ $item->ns  }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: center;" class="pa">{{ $item->medida  }}</td>
            @if($item->proveedor)
                <td style="border: 15px solid #000000;font-size: 9px;text-align: center;" class="pa"> {{ $item->proveedor }}</td>
            @else
                <td style="border: 15px solid #000000;font-size: 9px;text-align: center;" class="pa"> {{ $item->unidad }}</td>
            @endif

            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;" class="pa">{{ number_format(round($item->precio_u,2),2)  }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;" class="pa">{{ number_format(round($item->c_ingreso,2),2)  }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;" class="pa">{{ number_format(round($item->s_ingreso,2),2)  }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;" class="pa">{{ number_format(round($item->c_salida,2),2)  }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;" class="pa">{{ number_format(round($item->s_salida,2),2)  }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;" class="pa">{{ number_format(round($item->c_final,2),2)  }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;" class="pa">{{ number_format(round($item->s_final,2),2)  }}</td>
        </tr>
    @endforeach
    </tbody>
    <tfoot>
    <tr >
        <th colspan="8" scope="row" style="border: 15px solid #000000;text-align: right;font-weight: bold">TOTALES</th>
        <td  style="border: 15px solid #000000;text-align: right;font-weight: bold"></td>
        <td  style="border: 15px solid #000000;text-align: right;font-weight: bold">{{ number_format(round($data['ts_entrada'],2),2)  }}</td>
        <td  style="border: 15px solid #000000;text-align: right;font-weight: bold"></td>
        <td  style="border: 15px solid #000000;text-align: right;font-weight: bold">{{ number_format(round($data['ts_salida'],2),2) }}</td>
        <td  style="border: 15px solid #000000;text-align: right;font-weight: bold"></td>
        <td style="border: 15px solid #000000;text-align: right;font-weight: bold">{{ number_format(round($data['ts_final'],2),2) }}</td>
    </tr>
    </tfoot>
</table>
<br>

