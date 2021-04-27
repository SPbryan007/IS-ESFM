<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Reporte individual</title>

    <style>
        @page { size: letter landscape }
        body{
            margin-top: 2cm;
        }
        .invoice-box {

            margin: auto;
            /*margin-left: 10px;*/
            /*margin-top: -40px;*/
            /*   padding: 30px;*/
            /*  border: 1px solid #eee;
              box-shadow: 0 0 10px rgba(0, 0, 0, .15);*/
            font-size: 16px;
            line-height: 18px;
            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
            color:#0a0a0a; /*color: #555;*/
        }

        .invoice-box table {
            width: 100%;
            line-height: inherit;
            text-align: left;
        }

        .invoice-box table tbody tr td {

            vertical-align: middle;
            padding: 4px;
        }
        .invoice-box table tbody tr th {
            padding-left: 3px;
            padding-right: 3px;
            vertical-align: middle;

        }

        .invoice-box table tr td:nth-child(2) {
            text-align: right;
        }

        .invoice-box table tr.top table td {
            padding-bottom: 20px;
        }

        .invoice-box table tr.top table td.title {
            font-size: 45px;
            line-height: 45px;
            color:#0a0a0a; /*color: #333;*/
        }

        .invoice-box table tr.information table td {
            padding-bottom: 10px;
        }

        /*.invoice-box table tr.heading td {
            background: #eee;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
            text-align: center;
        }*/

        .invoice-box table thead tr.heading th {
            background: #eee;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
            text-align: center;
            padding-top: 2px;
            padding-bottom: 2px;
        }

        .invoice-box table tr.details td {
            padding-bottom: 1px;
        }

        .invoice-box table tbody tr.item td{

            text-align: left;
            font-weight: normal;
        }

        .invoice-box table tr.item.last td {
            border-bottom: none;
        }

        .invoice-box table tr.total td:nth-child(2) {
            border-top: 2px solid #eee;
            font-weight: bold;
        }

        @media only screen and (max-width: 600px) {
            .invoice-box table tr.top table td {
                width: 100%;
                display: block;
                text-align: center;
            }

            .invoice-box table tr.information table td {
                width: 100%;
                display: block;
                text-align: center;
            }
        }

        /** RTL **/
        .rtl {
            direction: rtl;
            font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
        }

        .rtl table {
            text-align: right;
        }

        .rtl table tr td:nth-child(2) {
            text-align: left;
        }
        .text-center{
            text-align: center;
        }
        header{
            position: fixed;
            top: -40px;
            left: 0cm;
            right:0cm;
            height: 3cm;
            color:#0a0a0a;/*color: #555;*/
            font-size: 16px;
            line-height: 16px;
            text-align: center;
            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
        }
        /* footer{
             margin-top: 80px;
             position: absolute;
             bottom: 0cm;
             left: 0cm;
             right: 0cm;
             height: 2cm;
           !*  background-color: red;
              color: white;*!
             text-align:center;
             line-height: 25px;
         }*/
        /* table,tr,td{
             border: 2px solid #000;
             border-collapse: collapse;
             padding: 50px;
         }*/
    </style>
</head>

<body>
<header class="">
    <table>
        <tr>
            <td  style="width: 100px;vertical-align: inherit">
                <div style="width: 130px; margin-left: 140px">
                    <img src="{{ public_path('img/logo.jpeg')  }}" style="width:110%; max-width:300px;">
                </div>
            </td>
            <td style="text-align: center">
                {{--<h4>ALMACEN</h4>--}}
                <h5 style="margin-left: 50px">ESCUELA SUPERIOR DE FORMACIÓN DE MAESTROS "MARISCAL SUCRE" <br>
                    REPORTE INDIVIDUAL <br> DEL {{ date('d/m/Y',strtotime($periodo['fecha_inicio'])) }} AL {{ date('d/m/Y',strtotime($periodo['fecha_fin'])) }}
                </h5>
                <h5></h5>
            </td>
        </tr>
    </table>
</header>

<div class="invoice-box">
    <table style="font-size: 13px;" cellpadding="0" cellspacing="0">
        <tr class="details">
            <td style="text-align: left;width: 140px"><b>Articulo:</b></td>
            <td style="text-align: left">{{ $data[0]->articulo }}</td>
        </tr>
    </table>
    <table style="font-size: 13px;" cellpadding="0" cellspacing="0">
        <tr class="details">
            <td style="text-align: left;width: 140px"><b>Código:</b></td>
            <td style="text-align: left;width: 140px"> {{ $data[0]->codigo }}</td>
            <td style="width: 60px"><b>Partida:</b></td>
            <td style="text-align: left;">{{ $data[0]->partida_codigo." - ".$data[0]->partida }}</td>
            <td style="width: 60px"><b>Linea:</b></td>
            <td style="text-align: left;">{{ $data[0]->linea }}</td>
        </tr>
    </table>
    <table style="font-size: 13px;" cellpadding="0" cellspacing="0">

        <tr class="details">
            <td style="text-align: left;width: 140px"><b>Periodo:</b></td>
            <td style="text-align: left">{{ $periodo['nombre'] }}</td>
        </tr>
    </table>
    <br>

    <table style="  font-size: 9px; border-collapse: collapse; line-height: 12px;" cellpadding="0" border="1" cellspacing="0">
        <thead>
        <tr class="heading">
            <th rowspan="2" scope="col"  style="width: 30px">N°</th>
            <th rowspan="2" class="pa" scope="col" style="width: 40px">FECHA</th>
            <th rowspan="2" scope="col" style="width: 160px">DESCRIPCIÓN</th>
            <th rowspan="2" class="pa" scope="col" style="width: 25px">NI</th>
            <th rowspan="2" class="pa" scope="col" style="width: 25px">NS</th>
            <th rowspan="2" class="pa" scope="col" style="width: 45px">MEDIDA</th>
            <th rowspan="2" class="pa" scope="col" style="width: 115px">UNIDAD / PROVEEDOR </th>
            <th rowspan="2" scope="col"  style="width: 70px">VALOR <br>UNITARIO</th>
            <th rowspan="1" class="pa" colspan="2" scope="col" style="width: 80px">INGRESOS</th>
            <th rowspan="1" class="pa" colspan="2"  scope="col" style="width: 80px">SALIDAS</th>
            <th rowspan="1" class="pa" colspan="2" scope="col" style="width: 80px"><span>SALDO FINAL</span></th>
        </tr>
        <tr class="heading">
            <th scope="col" class="pa" style="width: 50px">CANTIDAD</th>
            <th scope="col" class="pa" style="width: 50px">C. TOTAL</th>
            <th scope="col" class="pa" style="width: 50px">CANTIDAD</th>
            <th scope="col" class="pa" style="width: 50px">C. TOTAL</th>
            <th scope="col" class="pa" style="width: 50px">CANTIDAD</th>
            <th scope="col" class="pa" style="width: 50px">C. TOTAL</th>
        </tr>
        </thead>
        <tbody>
        @foreach($data as $item)
            <tr class="item">
                <th scope="row" style="text-align: center;">{{ $loop->iteration  }}</th>
                <td style="text-align: center;">{{ date('d/m/Y',strtotime($item->fecha))  }}</td>
                @if($item->ni)
                    @if($item->ni == '000')
                        <td style="text-align: left;">INVENTARIO INICIAL</td>
                    @else
                        <td style="text-align: left;">INGRESO AL ALMACEN</td>
                    @endif
                @endif
                @if($item->ns)
                    <td style="text-align: left;">SALIDA DEL ALMACEN</td>
                @endif
                <td style="text-align: center;" class="pa">{{ $item->ni  }}</td>
                <td style="text-align: center;" class="pa">{{ $item->ns  }}</td>
                <td style="text-align: left;font-size: 8px" class="pa">{{ $item->medida  }}</td>
                @if($item->proveedor)
                    <td style="text-align: left;font-size: 8px" class="pa"> {{ $item->proveedor }}</td>
                @else
                    <td style="text-align: left;font-size: 8px" class="pa"> {{ $item->unidad }}</td>
                @endif

                <td style="text-align: right;font-size: 9px" class="pa">{{ number_format(round($item->precio_u,2),2)  }}</td>
                <td style="text-align: right;font-size: 9px" class="pa">{{ number_format(round($item->c_ingreso,2),2)  }}</td>
                <td style="text-align: right;font-size: 9px" class="pa">{{ number_format(round($item->s_ingreso,2),2)  }}</td>
                <td style="text-align: right;font-size: 9px" class="pa">{{ number_format(round($item->c_salida,2),2)  }}</td>
                <td style="text-align: right;font-size: 9px" class="pa">{{ number_format(round($item->s_salida,2),2)  }}</td>
                <td style="text-align: right;font-size: 9px" class="pa">{{ number_format(round($item->c_final,2),2)  }}</td>
                <td style="text-align: right;font-size: 9px" class="pa">{{ number_format(round($item->s_final,2),2)  }}</td>
            </tr>
        @endforeach
        </tbody>
        <tfoot>
        <tr >
            <th colspan="8" scope="row" style="text-align: center;font-weight: bold;padding: 3px;">TOTALES</th>
            <td  style="text-align: right;font-weight: bold"></td>
            <td  style="padding-right: 3px;text-align: right;font-weight: bold;font-size: 9px">{{ number_format(round($ts_entrada,2),2)  }}</td>
            <td  style="text-align: right;font-weight: bold"></td>
            <td  style="padding-right: 3px;text-align: right;font-weight: bold;font-size: 9px">{{ number_format(round($ts_salida,2),2) }}</td>
            <td  style="text-align: right;font-weight: bold"></td>
            <td style="padding-right: 3px;text-align: right;font-weight: bold;font-size: 9px">{{ number_format(round($ts_final,2),2) }}</td>
        </tr>
        </tfoot>

    </table>
    <br>




    {{--    <footer style="margin-top: 2.5cm">--}}
    {{--        <table style="text-align: center">--}}
    {{--            <tr>--}}
    {{--                <td style="text-align: center;width: 200px">--}}
    {{--                    <div style="">--}}
    {{--                        <hr style="width: 170px;">--}}
    {{--                        Recibido por--}}
    {{--                    </div>--}}
    {{--                </td>--}}
    {{--                <td style="text-align: center;width: 200px">--}}
    {{--                    <div style="">--}}
    {{--                        <hr style="width: 170px;">--}}
    {{--                        Verificado por--}}
    {{--                    </div>--}}
    {{--                </td>--}}
    {{--            </tr>--}}
    {{--        </table>--}}
    {{--    </footer>--}}





</div>
