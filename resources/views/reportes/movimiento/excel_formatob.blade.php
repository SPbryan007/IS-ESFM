<br><br>
<table>
    <tr>
        <td colspan="3" rowspan="4"></td>
        <td colspan="10" rowspan="4" style="font-size: 14px;font-weight:bold;text-align: center;vertical-align: center">
            ESCUELA SUPERIOR DE FORMACIÓN DE MAESTROS "MARISCAL SUCRE"
            <br>ESTADO DEL MOVIMIENTO DE ALMACEN DE MATERIALES Y SUMINISTROS
            <br>DEL {{ date('d/m/Y',strtotime($data['del'])) }} AL {{ date('d/m/Y',strtotime($data['al'])) }}
            <br>(Expresado en bolivianos)
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
    <thead>
    <tr style="">
        <th rowspan="3" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 5px;font-weight: bold;text-align: center;vertical-align: center">N°</th>
        <th rowspan="3" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 5px;font-weight: bold;text-align: center;vertical-align: center">Linea</th>
        <th rowspan="3" scope="col"  style="border: 15px solid #000000;font-size: 9px; width: 16px;font-weight: bold;text-align: center;vertical-align: center">PARTIDA <br> PRESUP.</th>
        <th rowspan="3" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 20px;font-weight: bold;text-align: center;vertical-align: center">DESCRIPCIÓN</th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center"><span>SALDO INICIAL <br>Al  {{ date('d/m/Y',strtotime($data['del']))  }}</span></th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">SALDO INICIAL <br> Al  {{ date('d/m/Y',strtotime($data['del']))  }}</th>
        <th colspan="4" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center"> Movimiento durante {{ $data['periodo'] }}</th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">SALDO FINAL <br>  {{ date('d/m/Y',strtotime($data['al']))  }}</th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">VALOR <br>UNITARIO</th>
        <th rowspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">SALDO FINAL <br> Al {{ date('d/m/Y',strtotime($data['al']))  }}</th>
    </tr>
    <tr>
         <th  colspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">Entradas</th>
         <th  colspan="2" scope="col"  style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">Salidas</th>
    </tr>
    <tr>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">CANTIDAD</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">Bs</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">Cantidad</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">Bs</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">Cantidad</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">Bs</th>


        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">CANTIDAD</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">Bs</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;width: 15px;font-weight: bold;text-align: center;vertical-align: center">Bs</th>
    </tr>
    </thead>
    <tbody>
    @foreach($data['data'] as $item)
        <tr class="item">
            <th scope="row" style="border: 15px solid #000000;font-size: 9px;text-align: center;">{{ $loop->iteration  }}</th>
            <th scope="row" style="border: 15px solid #000000;font-size: 9px;text-align: center;">{{ $item->linea  }}</th>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: center;">{{ $item->partida }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: left;">{{ $item->articulo }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ $item->c_inicial  }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ $item->s_inicial }}</td>

            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ $item->c_entrada  }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ $item->s_entrada }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ $item->c_salida  }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ $item->s_salida }}</td>

            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ $item->c_final  }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ $item->precio_u }}</td>
            <td style="border: 15px solid #000000;font-size: 9px;text-align: right;">{{ $item->s_final  }}</td>
        </tr>
    @endforeach
    </tbody>
    <tfoot>
    <tr>
        <th colspan="4" scope="row" style="border: 15px solid #000000;text-align: center;font-size: 9px;font-weight: bold">TOTALES</th>
        <td  style="border: 15px solid #000000;text-align: right;font-weight: bold"></td>
        <td  style="border: 15px solid #000000;text-align: right;font-weight: bold">{{ $data['ts_inicial']  }}</td>

        <td  style="border: 15px solid #000000;text-align: right;font-weight: bold"></td>
        <td  style="border: 15px solid #000000;text-align: right;font-weight: bold">{{ $data['ts_entrada']  }}</td>
        <td  style="border: 15px solid #000000;text-align: right;font-weight: bold"></td>
        <td  style="border: 15px solid #000000;text-align: right;font-weight: bold">{{ $data['ts_salida'] }}</td>

        <td  style="border: 15px solid #000000;text-align: right;font-weight: bold"></td>
        <td style="border: 15px solid #000000;"></td>
        <td style="border: 15px solid #000000;text-align: right;font-weight: bold">{{ $data['ts_final'] }}</td>
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
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;font-weight: bold;text-align: center;">SALIDAS</th>
        <th scope="col" style="border: 15px solid #000000;font-size: 9px;font-weight: bold;text-align: center;">SALDO FINAL</th>
    </tr>
    </thead>
    <tr>
        <td colspan="2" style="text-align: center;border: 15px solid #000000;font-size: 9px;">1</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ $data['l1s_inicial'] }}</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ $data['l1s_entradas'] }}</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ $data['l1s_salidas'] }}</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ $data['l1s_final'] }}</td>
    </tr>
    <tr>
        <td colspan="2" style="text-align: center;border: 15px solid #000000;font-size: 9px;">2</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ $data['l2s_inicial'] }}</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ $data['l2s_entradas'] }}</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ $data['l2s_salidas'] }}</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ $data['l2s_final']}}</td>
    </tr>
    <tr>
        <td colspan="2" style="text-align: center;border: 15px solid #000000;font-size: 9px;">3</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ $data['l3s_inicial'] }}</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ $data['l2s_entradas'] }}</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ $data['l2s_salidas'] }}</td>
        <td style="text-align: right;border: 15px solid #000000;font-size: 9px;">{{ $data['l3s_final'] }}</td>
    </tr>
    <tr>
        <th colspan="2"  style="text-align: center;font-weight: bold;border: 15px solid #000000;font-size: 9px;">TOTALES</th>
        <th style="text-align: right;font-weight: bold;border: 15px solid #000000;font-size: 9px;">{{ $data['ts_inicial'] }}</th>
        <th style="text-align: right;font-weight: bold;border: 15px solid #000000;font-size: 9px;">{{ $data['ts_entrada'] }}</th>
        <th style="text-align: right;font-weight: bold;border: 15px solid #000000;font-size: 9px;">{{ $data['ts_salida'] }}</th>
        <th style="text-align: right;font-weight: bold;border: 15px solid #000000;font-size: 9px;">{{ $data['ts_final'] }}</th>
    </tr>
</table>