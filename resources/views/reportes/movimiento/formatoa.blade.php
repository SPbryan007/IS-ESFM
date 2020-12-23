<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Movimiento de almacen formato A</title>

    <style>
        @page { size: letter}
        .invoice-box {
            max-width: 900px;
            margin: auto;
            margin-left: -10px;
            margin-top:-40px;
            /*   padding: 30px;*/
            /*  border: 1px solid #eee;
              box-shadow: 0 0 10px rgba(0, 0, 0, .15);*/
            font-size: 16px;
            line-height: 16px;
            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
            color: #555;
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
    <header>
        <table>
            <tr>
                <td  style="width: 100px;vertical-align: inherit">
                    <div style="width: 130px;margin-left: 20px">
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
        <!--        <div class="" style="float: left;text-align: left;width: 300">
                    <img src="./public/img/logo.jpeg" style="width:65%; max-width:300px;">
                </div>
                <div class="text-center">
                    <h2>ALMACEN</h2>
                    <h3>ESCUELA SUPERIOR DE FORMACIÓN DE MAESTROS <br/> <b>"MARISCAL SUCRE"</b> <br>RECURSOS PROPIOS</h3>
                </div>-->
    </header>
    <table style="  font-size: 8px; border-collapse: collapse; line-height: 12px;" cellpadding="0" border="1" cellspacing="0">
        <thead class="heading">
        <tr class="heading">
            <th rowspan="3" scope="col" class="pa" style="width: 30px">N°</th>
            <th rowspan="3" scope="col" class="pa" style="width: 60px">PARTIDA PRESUP.</th>
            <th rowspan="3" scope="col"  style="width: 265px">DESCRIPCIÓN</th>
            <th rowspan="2" scope="col" style="width: 80px"><span>SALDO INICIAL <br>Al  {{ date('d/m/Y',strtotime($del)) }}</span></th>
            <th rowspan="2" scope="col"  style="width: 80px">SALDO INICIAL <br> Al  {{ date('d/m/Y',strtotime($del)) }}</th>

{{--            <th v-if="consulta.formato == 'B'" colspan="4" scope="col" class="pa"> Movimiento durante la gestion 2020</th>--}}

            <th rowspan="2" scope="col"  style="width: 80px">SALDO FINAL <br>  {{ date('d/m/Y',strtotime($al)) }}</th>
            <th rowspan="2" scope="col"  style="width: 60px">VALOR <br>UNITARIO</th>
            <th rowspan="2" scope="col"  style="width: 80px">SALDO FINAL <br> Al {{ date('d/m/Y',strtotime($al)) }}</th>


        </tr>
        <tr>

{{--            <th v-if="consulta.formato == 'B'" colspan="2" scope="col" class="pa">Entradas</th>--}}
{{--            <th v-if="consulta.formato == 'B'" colspan="2" scope="col" class="pa">Salidas</th>--}}

        </tr>
        <tr class="heading">
            <th scope="col" class="pa">CANTIDAD</th>
            <th scope="col" class="pa">Bs</th>

{{--            <th v-if="consulta.formato == 'B'" scope="col" class="pa">Cantidad</th>--}}
{{--            <th v-if="consulta.formato == 'B'" scope="col" class="pa">Bs</th>--}}
{{--            <th v-if="consulta.formato == 'B'" scope="col" class="pa">Cantidad</th>--}}
{{--            <th v-if="consulta.formato == 'B'" scope="col" class="pa">Bs</th>--}}

            <th scope="col" class="pa">CANTIDAD</th>
            <th scope="col" class="pa">Bs</th>
            <th scope="col" class="pa">Bs</th>
        </tr>
        </thead>


   {{--     <thead>
        <tr class="heading">
            <th scope="col" style="width:25px">N°</th>
            <th scope="col"  style="width:70px">CÓDIGO</th>
            <th scope="col"  style="width:280px">ARTICULO</th>
            <th scope="col"  style="width:80px">MEDIDA</th>
            <th scope="col"  style="width:70px">CANTIDAD</th>
            <th scope="col"  style="width:60px">P. UNIT</th>
            <th scope="col"  style="width:70px">SUBTOTAL</th>
        </tr>
        </thead>--}}
        <tbody>
        @foreach($data as $item)
            <tr class="item">
                <th scope="row" style="text-align: center">{{ $loop->iteration}}</th>
                <td style="text-align: center">{{ $item->partida }}</td>
                <td style="text-align: left">{{ $item->articulo }}</td>
                <td style="text-align: right;font-size: 9px">{{ $item->c_inicial }}</td>
                <td style="text-align: right;font-size: 9px">{{ round($item->s_inicial,2) }}</td>
                <td style="text-align: right;font-size: 9px">{{ $item->c_final}}</td>
                <td style="text-align: right;font-size: 9px">{{ round($item->precio_u,2) }}</td>
                <td style="text-align: right;font-size: 9px">{{ round($item->s_final,2) }}</td>
            </tr>
        @endforeach

        </tbody>
        <tfoot >
        <tr>
            <th colspan="3" scope="row" style="text-align: center;font-weight: bold;padding: 3px;">TOTALES</th>
            <td scope="row" style="text-align: right;font-weight: bold;font-size: 9px"></td>
            <td scope="row" style="padding-right:3px;text-align: right;font-weight: bold;font-size: 9px">{{ round($ts_inicial,2)  }}</td>
            <td scope="row" style="text-align: right;font-weight: bold;font-size: 9px"></td>
            <td scope="row" ></td>
            <td scope="row"style="padding-right:3px;text-align: right;font-weight: bold;font-size: 9px">{{ round($ts_final,2)  }}</td>
        </tr>
        </tfoot>

    </table>
    <br>
    <table style=" font-size: 9px;width: 40%;line-height: 12px" cellpadding="0" border="1" cellspacing="0">
        <thead>
        <tr class="heading">
            <th scope="col" style="width: 60px">LINEA</th>
            <th scope="col" style="width: 90px">SALDO INICIAL</th>
            <th scope="col" style="width: 90px">SALDO FINAL</th>
        </tr>
        </thead>
        <tr>
            <td style="text-align: center;padding: 2px !important;">1</td>
            <td style="text-align: right;padding: 2px !important;">{{ round($l1s_inicial,2) }}</td>
            <td style="text-align: right;padding: 2px !important;">{{ round($l1s_final,2) }}</td>
        </tr>
        <tr>
            <td style="text-align: center;padding: 2px !important;">2</td>
            <td style="text-align: right;padding: 2px !important;">{{ round($l2s_inicial,2) }}</td>
            <td style="text-align: right;padding: 2px !important;">{{ round($l2s_final,2) }}</td>
        </tr>
        <tr>
            <td style="text-align: center;padding: 2px !important;">3</td>
            <td style="text-align: right;padding: 2px !important;">{{ round($l3s_inicial,2) }}</td>
            <td style="text-align: right;padding: 2px !important;">{{ round($l3s_final,2) }}</td>
        </tr>
        <tr>
            <th style="text-align: center;font-weight: bold;padding: 2px !important;">TOTALES</th>
            <th style="text-align: right;font-weight: bold;padding: 2px !important;">{{ round($ts_inicial,2) }}</th>
            <th style="text-align: right;font-weight: bold;padding: 2px !important;">{{ round($ts_final,2) }}</th>
        </tr>
    </table>
{{--    <table>--}}
{{--        <!-- style="border-bottom: 2px dotted rgb(0, 0, 0); text-decoration: none;"-->--}}
{{--        <tr >--}}
{{--            <td style="width:30px"><b>Total: </b></td>--}}
{{--            <td style="border-bottom: 2px dotted rgb(0, 0, 0); text-decoration: none;"><span style="font-size: 14px;" > Mil quienestos <b> --- Bs.</b> <u>1500</u></span></td>--}}
{{--        </tr>--}}
{{--    </table>--}}




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
