<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Saldos de almacen al {{ date('d/m/Y',strtotime($al)) }} </title>

    <style>
        @page { size: letter}
        body{
            margin-top: 2cm;
        }
        .invoice-box {

            margin: auto;
            /*   padding: 30px;*/
            /*  border: 1px solid #eee;
              box-shadow: 0 0 10px rgba(0, 0, 0, .15);*/
            font-size: 16px;
            line-height: 16px;
            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
            color:#0a0a0a;/*color: #555;*/
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
<header>
    <table>
        <tr>
            <td  style="width: 100px;vertical-align: inherit">
                <div style="width: 130px;">
                    <img src="{{ public_path('img/logo.jpeg')  }}" style="width:110%; max-width:300px;">
                </div>
            </td>
            <td style="text-align: center">
                {{--<h4>ALMACEN</h4>--}}
                <h5 style="margin-left: 120px">ESCUELA SUPERIOR DE FORMACIÓN DE MAESTROS <br> "MARISCAL SUCRE" <br>
                    SALDOS DE ALMACEN AL {{ date('d/m/Y',strtotime($al)) }}
                    <br> (Expresado en bolivianos)
                </h5>
                <h5></h5>
            </td>
        </tr>
    </table>
</header>

<div class="invoice-box">
    <table style="  font-size: 8px; border-collapse: collapse; line-height: 12px;" cellpadding="0" border="1" cellspacing="0">
        <thead class="heading">
        <tr class="heading">
            <th rowspan="3" scope="col" class="pa" style="width: 30px">N°</th>
            <th rowspan="3" scope="col" class="pa" style="width: 60px">PARTIDA PRESUP.</th>
            <th rowspan="3" scope="col" class="pa" style="width: 60px">CÓDIGO</th>
            <th rowspan="3" scope="col"  style="width: 320px">DESCRIPCIÓN</th>
            <th rowspan="2" scope="col"  style="width: 80px">SALDO INICIAL <br> AL {{ date('d/m/Y',strtotime($al)) }}</th>
            <th rowspan="2" scope="col"  style="width: 60px">VALOR <br>UNITARIO</th>
            <th rowspan="2" scope="col"  style="width: 80px">SALDO INICIAL <br> Al {{ date('d/m/Y',strtotime($al)) }}</th>

        </tr>
        <tr></tr>
        <tr class="heading">
            <th scope="col" class="pa">CANTIDAD</th>
            <th scope="col" class="pa">Bs</th>
            <th scope="col" class="pa">Bs</th>
        </tr>
        </thead>
        <tbody>
        @foreach($data as $item)
            <tr class="item">
                <th scope="row" style="text-align: center">{{ $loop->iteration}}</th>
                <td style="text-align: center">{{ $item->partida }}</td>
                <td style="text-align: center">{{ $item->codigo }}</td>
                <td style="text-align: left">{{ $item->articulo }}</td>
                <td style="text-align: right;font-size: 9px">{{ number_format(round($item->c_final,2),2)}}</td>
                <td style="text-align: right;font-size: 9px">{{ number_format(round($item->precio_u,2),2) }}</td>
                <td style="text-align: right;font-size: 9px">{{ number_format(round($item->s_final,2),2) }}</td>
            </tr>
        @endforeach

        </tbody>
        <tfoot >
        <tr>
            <th colspan="4" scope="row" style="text-align: center;font-weight: bold;padding: 3px;">TOTALES</th>
{{--            <td scope="row" style="text-align: right;font-weight: bold;font-size: 9px"></td>--}}
{{--            <td scope="row" style="padding-right:3px;text-align: right;font-weight: bold;font-size: 9px">{{ round($ts_inicial,2)  }}</td>--}}
{{--            <td scope="row" style="text-align: right;font-weight: bold;font-size: 9px"></td>--}}
            <td scope="row" colspan="2"></td>
            <td scope="row"style="padding-right:3px;text-align: right;font-weight: bold;font-size: 9px">{{ number_format(round($ts_final,2),2)  }}</td>
        </tr>
        </tfoot>

    </table>
    <br>
    <table style=" font-size: 9px;width: 40%;line-height: 12px" cellpadding="0" border="1" cellspacing="0">
        <thead>
        <tr class="heading">
            <th scope="col" style="width: 30px">LINEA</th>
            <th scope="col" style="width: 90px">SALDO INICIAL</th>
        </tr>
        </thead>
        <tr>
            <td style="text-align: center;padding: 2px !important;">1</td>
            <td style="text-align: right;padding: 2px !important;">{{ number_format(round($l1s_final,2),2) }}</td>
        </tr>
        <tr>
            <td style="text-align: center;padding: 2px !important;">2</td>
            <td style="text-align: right;padding: 2px !important;">{{ number_format(round($l2s_final,2),2) }}</td>
        </tr>
        <tr>
            <td style="text-align: center;padding: 2px !important;">3</td>
            <td style="text-align: right;padding: 2px !important;">{{ number_format(round($l3s_final,2),2) }}</td>
        </tr>
        <tr>
            <th style="text-align: center;font-weight: bold;padding: 2px !important;">TOTALES</th>
            <th style="text-align: right;font-weight: bold;padding: 2px !important;">{{ number_format(round($ts_final,2),2) }}</th>
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
