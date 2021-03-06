<br><br>
<table>
    <tr>
        <td colspan="2" rowspan="4"></td>
        <td colspan="5" rowspan="4" style="font-size: 11px;font-weight:bold;text-align: center;vertical-align: center">
            ESCUELA SUPERIOR DE FORMACIÓN DE MAESTROS "MARISCAL SUCRE"
            <br>SALDOS DE ALMACEN AL {{ date('d/m/Y',strtotime($data['al'])) }}
            <br>(Expresado en bolivianos)
        </td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>
<br><br><br><br>
<table>
    <thead>
    <tr style="">
        <th rowspan="3" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 5px;font-weight: bold;text-align: center;vertical-align: center">N°</th>
        <th rowspan="3" scope="col"  style="border: 15px solid #000000;font-size: 9px; width: 16px;font-weight: bold;text-align: center;vertical-align: center">PARTIDA <br> PRESUP.</th>
        <th rowspan="3" scope="col"  style="border: 15px solid #000000;font-size: 9px; width: 16px;font-weight: bold;text-align: center;vertical-align: center">CÓDIGO</th>
        <th rowspan="3" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 45px;font-weight: bold;text-align: center;vertical-align: center">DESCRIPCIÓN</th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">SALDO INICIAL <br>  {{ date('d/m/Y',strtotime($data['al']))  }}</th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">VALOR <br>UNITARIO</th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">SALDO INICIAL <br> Al {{ date('d/m/Y',strtotime($data['al']))  }}</th>
    </tr>
    <tr>
    </tr>
    <tr>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">CANTIDAD</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">Bs</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">Bs</th>
    </tr>
    </thead>
    <tbody>
    @foreach($data['data'] as $item)
        <tr class="item">
            <th scope="row" style="border: 15px solid #000000;font-size: 9px;text-align: center;">{{ $loop->iteration  }}</th>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: center;">{{ $item->partida }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: center;">{{ $item->codigo }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: left;">{{ $item->articulo }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ number_format(round($item->c_final,2),2)  }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ number_format(round($item->precio_u ,2),2) }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ number_format(round($item->s_final,2),2)  }}</td>
        </tr>
    @endforeach
    </tbody>
    <tfoot>
    <tr>
        <th colspan="4" scope="row" style="border: 15px solid #000000;text-align: center;font-size: 9px;font-weight: bold">TOTALES</th>
        <td colspan="2" style="border: 15px solid #000000;"></td>
        <td style="border: 15px solid #000000;text-align: right;font-weight: bold">{{ number_format(round($data['ts_final'],2) ,2) }}</td>
    </tr>
    </tfoot>

</table>
<br>
<table>
    <thead>
    <tr>
        <th scope="col" colspan="2" style="border: 15px solid #000000;font-size: 9px;font-weight: bold;text-align: center;">LINEA</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;font-weight: bold;text-align: center;">SALDO INICIAL</th>
    </tr>
    </thead>
    <tr>
        <td colspan="2" style="text-align: center;border: 15px solid #000000;font-size: 9px;">1</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ number_format(round($data['l1s_final'],2),2) }}</td>
    </tr>
    <tr>
        <td colspan="2" style="text-align: center;border: 15px solid #000000;font-size: 9px;">2</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ number_format(round($data['l2s_final'],2) ,2) }}</td>
    </tr>
    <tr>
        <td colspan="2" style="text-align: center;border: 15px solid #000000;font-size: 9px;">3</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ number_format(round($data['l3s_final'],2),2) }}</td>
    </tr>
    <tr>
        <th colspan="2"  style="text-align: center;font-weight: bold;border: 15px solid #000000;font-size: 9px;">TOTALES</th>
        <th style="text-align: right;font-weight: bold;border: 15px solid #000000;font-size: 9px;">{{ number_format(round($data['ts_final'],2),2) }}</th>
    </tr>
</table>
