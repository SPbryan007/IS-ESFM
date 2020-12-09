<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Movimiento de almacen formato B</title>

    <style>

        .invoice-box {
            max-width: 900px;
            margin: auto;
            margin-left: 10px;
            /*   padding: 30px;*/
            /*  border: 1px solid #eee;
              box-shadow: 0 0 10px rgba(0, 0, 0, .15);*/
            font-size: 16px;
            line-height: 18px;
            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
            color: #555;
        }

        .invoice-box table {
            width: 100%;
            line-height: inherit;
            text-align: left;
        }

        .invoice-box table tbody tr td {
            padding-left: 3px;
            padding-right: 3px;
            vertical-align: top;
        }
        .invoice-box table tbody tr th {
            padding-left: 3px;
            padding-right: 3px;
            vertical-align: top;
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
            color: #333;
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
<!--<tr class="top">
    <td colspan="2">
        <table>
            <tr>
                <td class="title">
                    <img src="./public/img/logo.jpeg" style="width:35%; max-width:300px;">
                </td>

                <td class="text-center">
                    <h1>ALMACEN</h1>
                    <h2>ESCUELA SUPERIOR DE FORMACIÓN DE MAESTROS <br/> <b>"MARISCAL SUCRE"</b></h2>
                    <h2>RECURSOS PROPIOS</h2>
                </td>
            </tr>
        </table>
    </td>
</tr>-->

<div class="invoice-box">
    <header class="">
        <table>
            <tr>
                <td  style="width: 100px;vertical-align: inherit">
                    <div style="width: 140px; margin-left: 100px">
                        <img src="{{ public_path('img/logo.jpeg')  }}" style="width:110%; max-width:300px;">
                    </div>
                </td>
                <td style="text-align: center">
                    {{--<h4>ALMACEN</h4>--}}
                    <h5>ESCUELA SUPERIOR DE FORMACIÓN DE MAESTROS "MARISCAL SUCRE" <br>
                        ESTADO DEL MOVIMIENTO DE ALMACEN DE MATERIALES Y SUMINISTROS <br> DEL {{ date('d/m/Y',strtotime($del)) }} AL {{ date('d/m/Y',strtotime($al)) }}
                        <br> (Expresado en bolivianos)
                    </h5>
                    <h5></h5>
                </td>
            </tr>
        </table>
    </header>
    <br>
    <table style=" font-size: 10px;" cellpadding="0" border="1" cellspacing="0">
        <thead>
        <tr class="heading">
            <th rowspan="3" scope="col"  style="width: 30px">N°</th>
            <th rowspan="3" scope="col" style="width: 60px">PARTIDA PRESUP.</th>
            <th rowspan="3" scope="col" style="width: 210px">DESCRIPCIÓN</th>
            <th rowspan="2" scope="col" style="width: 80px"><span>SALDO INICIAL <br>Al  {{ date('d/m/Y',strtotime($del)) }}</span></th>
            <th rowspan="2" scope="col" style="width: 80px">SALDO INICIAL <br> Al  {{ date('d/m/Y',strtotime($del)) }}</th>
            <th colspan="4" scope="col" style="width: 200px"> Movimiento durante {{ $periodo  }}</th>
            <th rowspan="2" scope="col"  style="width: 80px">SALDO FINAL <br>  {{ date('d/m/Y',strtotime($al)) }}</th>
            <th rowspan="2" scope="col"  style="width: 60px">VALOR <br>UNITARIO</th>
            <th rowspan="2" scope="col"  style="width: 80px">SALDO FINAL <br> Al {{ date('d/m/Y',strtotime($al)) }}</th>
        </tr>
        <tr class="heading">
            <th colspan="2" scope="col">ENTRADAS</th>
            <th colspan="2" scope="col">SALIDAS</th>
        </tr>
        <tr class="heading">
            <th scope="col" class="pa">CANTIDAD</th>
            <th scope="col" class="pa">Bs</th>
            <th scope="col" class="pa" style="width: 70px">CANTIDAD</th>
            <th scope="col" class="pa">Bs</th>
            <th scope="col" class="pa" style="width: 70px">CANTIDAD</th>
            <th scope="col" class="pa">Bs</th>
            <th scope="col" class="pa">CANTIDAD</th>
            <th scope="col" class="pa">Bs</th>
            <th scope="col" class="pa">Bs</th>
        </tr>
        </thead>
        <tbody>
        @foreach($data as $item)
            <tr class="item">
                <th scope="row" style="text-align: center;">{{ $loop->iteration  }}</th>
                <td style="text-align: center;">{{ $item->partida }}</td>
                <td style="text-align: left;">{{ $item->articulo }}</td>
                <td style="text-align: right;">{{ $item->c_inicial  }}</td>
                <td style="text-align: right;">{{ round($item->s_inicial,2) }}</td>

                <td style="text-align: right;">{{ $item->c_entrada  }}</td>
                <td style="text-align: right;">{{ round($item->s_entrada,2) }}</td>
                <td style="text-align: right;">{{ $item->c_salida  }}</td>
                <td style="text-align: right;">{{ round($item->s_salida,2) }}</td>

                <td style="text-align: right;">{{ $item->c_final  }}</td>
                <td style="text-align: right;">{{ round($item->precio_u,2) }}</td>
                <td style="text-align: right;">{{ round($item->s_final,2)  }}</td>
            </tr>
        @endforeach
        </tbody>
        <tfoot>
        <tr >
            <th colspan="3" scope="row" style="text-align: center;font-weight: bold">TOTALES</th>
            <td  style="text-align: right;font-weight: bold"></td>
            <td  style="padding-right: 3px;text-align: right;font-weight: bold">{{ round($ts_inicial,2)  }}</td>

            <td  style="text-align: right;font-weight: bold"></td>
            <td  style="padding-right: 3px;text-align: right;font-weight: bold">{{ round($ts_entrada,2)  }}</td>
            <td  style="text-align: right;font-weight: bold"></td>
            <td  style="padding-right: 3px;text-align: right;font-weight: bold">{{ round($ts_salida,2) }}</td>

            <td  style="text-align: right;font-weight: bold"></td>
            <td style=""></td>
            <td style="padding-right: 3px;text-align: right;font-weight: bold">{{ round($ts_final,2) }}</td>
        </tr>
        </tfoot>
    </table>
    <br>
    <table style=" font-size: 10px;width: 40%;" cellpadding="0" border="1" cellspacing="0">
        <thead>
            <tr class="heading">
                <th scope="col" style="width: 50px">LINEA</th>
                <th scope="col" style="width: 85px">SALDO INICIAL</th>
                <th scope="col" style="width: 70px">INGRESOS</th>
                <th scope="col" style="width: 70px">SALIDAS</th>
                <th scope="col" >SALDO FINAL</th>
            </tr>
        </thead>
        <tr>
            <td style="text-align: center">1</td>
            <td style="text-align: right">{{ round($l1s_inicial,2) }}</td>
            <td style="text-align: right">{{ round($l1s_entradas,2) }}</td>
            <td style="text-align: right">{{ round($l1s_salidas,2) }}</td>
            <td style="text-align: right">{{ round($l1s_final ,2) }}</td>
        </tr>
        <tr>
            <td style="text-align: center">2</td>
            <td style="text-align: right">{{ round($l2s_inicial,2) }}</td>
            <td style="text-align: right">{{ round($l2s_entradas,2) }}</td>
            <td style="text-align: right">{{ round($l2s_salidas,2) }}</td>
            <td style="text-align: right">{{ round($l2s_final,2) }}</td>
        </tr>
        <tr>
            <td style="text-align: center">3</td>
            <td style="text-align: right">{{ round($l3s_inicial,2) }}</td>
            <td style="text-align: right">{{ round($l3s_entradas,2) }}</td>
            <td style="text-align: right">{{ round($l3s_salidas,2) }}</td>
            <td style="text-align: right">{{ round($l3s_final,2) }}</td>
        </tr>
        <tr>
            <th style="text-align: center;font-weight: bold">TOTALES</th>
            <th style="text-align: right;font-weight: bold">{{ round($ts_inicial,2) }}</th>
            <td style="text-align: right;font-weight: bold">{{ round($ts_entrada,2) }}</td>
            <td style="text-align: right;font-weight: bold">{{ round($ts_salida,2) }}</td>
            <th style="text-align: right;font-weight: bold">{{ round($ts_final,2) }}</th>
        </tr>
    </table>





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
