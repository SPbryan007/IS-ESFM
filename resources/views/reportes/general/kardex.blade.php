<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Reporte general del {{ date('d/m/Y',strtotime($del)) }} al {{ date('d/m/Y',strtotime($al)) }} </title>
    <style>
        /*@page {*/
        /*    size: 612pt 936pt landscape;*/
        /*    !*size: legal landscape;*!*/
        /*    !*margin-right: 10mm;*!*/
        /*}*/
        body{
            margin-top: 2.5cm;
        }
        .invoice-box {

            margin:auto;
            /*margin-top: -30px;*/

            /*margin-rigth: 150px;*/


            /*   padding: 30px;*/
            /*  border: 1px solid #eee;
              box-shadow: 0 0 10px rgba(0, 0, 0, .15);*/
            font-size: 16px;
            line-height: 18px;
            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
            color:#0a0a0a;/*color: #555;*/
        }

        .invoice-box table {
            width: 100%;
            line-height: inherit;
            text-align: left;
        }

        .invoice-box table tbody tr td {
            padding-left: 4px;
            padding-right: 4px;
            padding-bottom: 2px;
            padding-top: 2px;
            vertical-align: middle;
            /*padding: 2px;*/
        }
        .invoice-box table tbody tr th {
            padding-left: 5px;
            padding-right: 5px;
            vertical-align:  middle;
            padding-bottom: 4px;
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
            color:#0a0a0a;/*color: #333;*/
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
            padding: 2px;
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
        .pa{
            border: 0.5px solid #00000099;
            border-bottom: 0.5px solid #00000099 !important;
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
            line-height: 20px;
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
<header >
    <table style="">
        <tr>
            <td  style="width: 140px;vertical-align: inherit">
                <div style="width: 130px;margin-left: 250px">
                    <img src="{{ public_path('img/logo.jpeg')  }}" style="width:110%; max-width:300px;">
                </div>
            </td>
            <td style="text-align: center;">
                {{--<h4>ALMACEN</h4>--}}
                <h4 style="margin-left:80px ">ESCUELA SUPERIOR DE FORMACIÓN DE MAESTROS <br> "MARISCAL SUCRE" <br>
                    REPORTE GENERAL <br> DEL {{ date('d/m/Y',strtotime($del)) }} AL {{ date('d/m/Y',strtotime($al)) }}

                </h4>
            </td>
        </tr>
    </table>
</header>

    <div class="invoice-box">
{{--    <header >--}}
{{--        <table style="margin-left: 120px">--}}
{{--            <tr>--}}
{{--                <td  style="width: 140px;vertical-align: inherit">--}}
{{--                    <div style="width: 130px;float: right;margin-left: 140px">--}}
{{--                        <img src="{{ public_path('img/logo.jpeg')  }}" style="width:110%; max-width:300px;">--}}
{{--                    </div>--}}
{{--                </td>--}}
{{--                <td style="text-align: center;">--}}
{{--                    --}}{{--<h4>ALMACEN</h4>--}}
{{--                    <h4>ESCUELA SUPERIOR DE FORMACIÓN DE MAESTROS <br> "MARISCAL SUCRE" <br>--}}
{{--                        REPORTE GENERAL <br> DEL {{ date('d/m/Y',strtotime($del)) }} AL {{ date('d/m/Y',strtotime($al)) }}--}}

{{--                    </h4>--}}
{{--                </td>--}}
{{--            </tr>--}}
{{--        </table>--}}
{{--    </header>--}}

    <table style=" font-size: 7px; border-collapse: collapse; line-height: 14px;" cellpadding="0"  cellspacing="0">
        <thead>
        <tr class="heading">
            <th rowspan="2" class="pa" scope="col" style="width: 30px">LINEA</th>
            <th rowspan="2" class="pa" scope="col" style="  width: 45px">CODIGO</th>
            <th rowspan="2" class="pa" scope="col" style="width: 220px;">PRODUCTO</th>
            <th rowspan="2" class="pa" scope="col" style="width: 25px">NI</th>
            <th rowspan="2" class="pa" scope="col" style="width: 25px">NS</th>
            <th rowspan="2" class="pa" scope="col" style="width: 40px">FECHA</th>
            <th rowspan="2" class="pa" scope="col" style="width: 45px">MEDIDA</th>
            <th rowspan="1" class="pa" colspan="3" scope="col" style="width: 80px;max-width: 80px !important;"><span>SALDO INICIAL</span></th>
            <th rowspan="1" class="pa" colspan="3" scope="col" style="width: 80px">INGRESOS</th>
            <th rowspan="1" class="pa" colspan="3"  scope="col" style="width: 80px">SALIDAS</th>
            <th rowspan="2" class="pa" scope="col" style="width: 115px">UNIDAD <br>SOLICITANTE </th>
            <th rowspan="1" class="pa" colspan="3" scope="col" style="width: 80px"><span>SALDO FINAL</span></th>

        </tr>
        <tr class="heading pa" >
            <th scope="col" class="pa" style="width: 40px">CANT.</th>
            <th scope="col" class="pa" style="width: 40px">P.U.</th>
            <th scope="col" class="pa" style="width: 50px">C. TOTAL</th>
            <th scope="col" class="pa" style="width: 40px">CANT.</th>
            <th scope="col" class="pa" style="width: 40px">P.U.</th>
            <th scope="col" class="pa" style="width: 50px">C. TOTAL</th>
            <th scope="col" class="pa" style="width: 40px">CANT.</th>
            <th scope="col" class="pa" style="width: 40px">P.U.</th>
            <th scope="col" class="pa" style="width: 50px">C. TOTAL</th>
            <th scope="col" class="pa" style="width: 40px">CANT.</th>
            <th scope="col" class="pa" style="width: 40px">P.U.</th>
            <th scope="col" class="pa" style="width: 50px">C. TOTAL</th>
        </tr>
        </thead>
        <tbody >
        @foreach($data as $item)

            <tr class="item">
                <td style="text-align: center;font-size: 8px" class="pa">{{ $item->linea }}</td>
                <td style="text-align: center;font-size: 8px" class="pa">{{ $item->codigo }}</td>
                <td style="text-align: left;font-size: 7px" class="pa">{{ $item->articulo  }}</td>
                <td style="text-align: center;font-size: 8px" class="pa">{{ $item->ni  }}</td>
                <td style="text-align: center;font-size: 8px" class="pa">{{ $item->ns  }}</td>
                <td style="text-align: center;font-size: 8px" class="pa">{{ date('d/m/Y',strtotime($item->fecha))  }}</td>
                <td style="text-align: left;font-size: 7px" class="pa">{{ $item->medida  }}</td>

                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round($item->c_inicial,2),2)  }}</td>
                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round($item->precio_u,2),2)  }}</td>
                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round($item->s_inicial,2) ,2) }}</td>

                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round($item->c_ingreso,2),2)  }}</td>
                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round($item->precio_u,2),2)  }}</td>
                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round($item->s_ingreso,2),2)  }}</td>

                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round($item->c_salida,2),2) }}</td>
                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round($item->precio_u,2),2)  }}</td>
                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round($item->s_salida,2),2)  }}</td>

{{--                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round(10000,2),2)  }}</td>--}}
{{--                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round(55000,2),2)  }}</td>--}}
{{--                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round(100000,2) ,2) }}</td>--}}
{{--                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round(100000,2),2)  }}</td>--}}
{{--                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round(55000,2),2)  }}</td>--}}
{{--                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round(100000,2) ,2) }}</td>--}}
{{--                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round(100000,2),2)  }}</td>--}}
{{--                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round(55000,2),2)  }}</td>--}}
{{--                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round(100000,2) ,2) }}</td>--}}


                <td style="text-align: left;font-size: 7px" class="pa">
                    {{ $item->unidad }}
                 </td>
{{--                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round(100000,2),2)  }}</td>--}}
{{--                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round(55000,2),2)  }}</td>--}}
{{--                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round(100000,2) ,2) }}</td>--}}
                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round($item->c_final,2),2)  }}</td>
                <td style="text-align: right;font-size: 9px" class="pa">{{ number_format(round($item->precio_u,2),2)  }}</td>
                <td style="text-align: right;font-size: 8px" class="pa">{{ number_format(round($item->s_final,2),2)  }}</td>
            </tr>
        @endforeach
        </tbody>
        <tfoot>
        <tr >
            <th  class="pa" colspan="7" scope="row" style="text-align: center;font-weight: bold;padding: 4px;font-size: 8px">TOTALES</th>
            <td  class="pa" colspan="2" ></td>
            <td  class="pa" style="padding-right: 3px;text-align: right;font-weight: bold;font-size: 9px">{{ number_format(round($ts_inicial,2) ,2) }}</td>
            <td  class="pa" colspan="2" style="text-align: right;font-weight: bold"></td>
            <td  class="pa" style="padding-right: 3px;text-align: right;font-weight: bold;font-size: 9px">{{ number_format(round($ts_ingreso,2),2)  }}</td>
            <td  class="pa" colspan="2" style="text-align: right;font-weight: bold"></td>
            <td  class="pa" style="padding-right: 3px;text-align: right;font-weight: bold;font-size: 9px">{{ number_format(round($ts_salida,2),2) }}</td>
            <td  class="pa" colspan="3" style="text-align: right;font-weight: bold"></td>
            <td  class="pa" style="padding-right: 3px;text-align: right;font-weight: bold;font-size: 9px">{{ number_format(round($ts_final,2),2) }}</td>
        </tr>
        </tfoot>
    </table>
    <br>
    <table style=" font-size: 8px;width: 42%; margin-left: 110px;line-height: 13px" cellpadding="0" cellspacing="0">
        <thead>
        <tr class="heading">
            <th class="pa" scope="col" style="width: 50px">LINEA</th>
            <th class="pa" scope="col" style="width: 85px">SALDO INICIAL</th>
            <th class="pa" scope="col" style="width: 70px">INGRESOS</th>
            <th class="pa" scope="col" style="width: 70px">SALIDAS</th>
            <th class="pa" scope="col" >SALDO FINAL</th>
        </tr>
        </thead>
        <tr>
            <td class="pa" style="text-align: center;padding: 2px !important;">1</td>
            <td class="pa" style="text-align: right;padding: 2px !important;">{{ number_format(round($l1s_inicial,2),2) }}</td>
            <td class="pa" style="text-align: right;padding: 2px !important;">{{ number_format(round($l1s_entradas,2),2) }}</td>
            <td class="pa" style="text-align: right;padding: 2px !important;">{{ number_format(round($l1s_salidas,2),2) }}</td>
            <td class="pa" style="text-align: right;padding: 2px !important;">{{ number_format(round($l1s_final ,2),2) }}</td>
        </tr>
        <tr>
            <td class="pa" style="text-align: center;padding: 2px !important;">2</td>
            <td class="pa" style="text-align: right;padding: 2px !important;">{{ number_format(round($l2s_inicial,2),2) }}</td>
            <td class="pa" style="text-align: right;padding: 2px !important;">{{ number_format(round($l2s_entradas,2),2) }}</td>
            <td class="pa" style="text-align: right;padding: 2px !important;">{{ number_format(round($l2s_salidas,2),2) }}</td>
            <td class="pa" style="text-align: right;padding: 2px !important;">{{ number_format(round($l2s_final,2),2) }}</td>
        </tr>
        <tr>
            <td class="pa" style="text-align: center;padding: 2px !important;">3</td>
            <td class="pa" style="text-align: right;padding: 2px !important;">{{ number_format(round($l3s_inicial,2),2) }}</td>
            <td class="pa" style="text-align: right;padding: 2px !important;">{{ number_format(round($l3s_entradas,2),2) }}</td>
            <td class="pa" style="text-align: right;padding: 2px !important;">{{ number_format(round($l3s_salidas,2),2) }}</td>
            <td class="pa" style="text-align: right;padding: 2px !important;">{{ number_format(round($l3s_final,2),2) }}</td>
        </tr>
        <tr>
            <th class="pa" style="text-align: center;font-weight: bold;padding: 2px !important;">TOTALES</th>
            <th class="pa" style="text-align: right;font-weight: bold;padding: 2px !important;font-size: 9px">{{ number_format(round($ts_inicial,2),2) }}</th>
            <td class="pa" style="text-align: right;font-weight: bold;padding: 2px !important;font-size: 9px">{{ number_format(round($ts_ingreso,2),2) }}</td>
            <td class="pa" style="text-align: right;font-weight: bold;padding: 2px !important;font-size: 9px">{{ number_format(round($ts_salida,2),2) }}</td>
            <th class="pa" style="text-align: right;font-weight: bold;padding: 2px !important;font-size: 9px">{{ number_format(round($ts_final,2),2) }}</th>
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

    </body>
</html>
