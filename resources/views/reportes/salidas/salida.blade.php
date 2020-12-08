

<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Formulario de salida {{ date('m/d/Y',strtotime($data->created_at)) }}</title>

    <style>

        .invoice-box {
            max-width: 900px;
            margin: auto;
            /*   padding: 30px;*/
            /*  border: 1px solid #eee;
              box-shadow: 0 0 10px rgba(0, 0, 0, .15);*/
            font-size: 16px;
            line-height: 24px;
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
        /*footer{*/
        /*    margin-top: 80px;*/
        /*    position: absolute;*/
        /*    bottom: 0cm;*/
        /*    left: 0cm;*/
        /*    right: 0cm;*/
        /*    height: 2cm;*/
        /*    !*  background-color: red;*/
        /*       color: white;*!*/
        /*    text-align:center;*/
        /*    line-height: 25px;*/
        /*}*/
        /* table,tr,td{
             border: 2px solid #000;
             border-collapse: collapse;
             padding: 50px;
         }*/
    </style>
</head>

<body>
<div class="invoice-box">
    <header class="">
        <table>
            <tr>
                <td  style="width: 150px;vertical-align: inherit">
                    <div style="width: 150px">
                        <img src="{{ public_path('img/logo.jpeg')  }}" style="width:110%; max-width:300px;">
                    </div>
                </td>
                <td style="text-align: center">
                    <h2>ALMACEN</h2>
                    <h3>ESCUELA SUPERIOR DE FORMACIÓN DE MAESTROS <br/> <b>"MARISCAL SUCRE"</b> <br>
                        FORMULARIO DE SALIDA
                    </h3>
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

    <table style="font-size: 13px" cellpadding="0" cellspacing="0">
        <tr class="details">
            <td></td>
            <td colspan="5" style="text-align: right;font-size: 25px;font-weight: bold">NSA: {{ $data->nro_salida  }}</td>
        </tr>
        <tr class="details">
            <td style="width: 140px"><b>Expedido por:</b></td>
            <td colspan="4" style="text-align: left;">     {{ $data->usuario->funcionario->nombre." ".$data->usuario->funcionario->apellido  }}</td>
            <td style="text-align: right">{{ date('m/d/Y',strtotime($data->created_at)) }}</td>
        </tr>
    </table>
    <table style="font-size: 13px" cellpadding="0" cellspacing="0">
        <tr class="details">

            <td style="text-align: left;width: 140px"><b>Fecha de salida:</b></td>
            <td style="text-align: left;width: 140px"> {{ date('m/d/Y',strtotime($data->created_at)) }}</td>
            <td style="width: 60px"><b>Solicitante:</b></td>
            <td style="text-align: left;">{{ $data->solicitante->funcionario->nombre." ".$data->solicitante->funcionario->apellido }}</td>
        </tr>
    </table>
    <table style="font-size: 13px" cellpadding="0" cellspacing="0">
        <tr class="details">
            <td style="text-align: left;width: 140px"><b>Autorizado por:</b></td>
            <td style="text-align: left">{{ $data->autorizador->nombre." ".$data->autorizador->apellido }}</td>
        </tr>
        <tr class="details">
            <td style="text-align: left;width: 140px"><b>Verificado por:</b></td>
            <td style="text-align: left">{{ $data->verificador->nombre." ".$data->verificador->apellido }}</td>
        </tr>
        <tr class="details">
            <td style="text-align: left;width: 140px"><b>Finalidad de pedido:</b></td>
            <td style="text-align: left">{{ $data->finalidad}}</td>
        </tr>
    </table>

    <h3 class="text-center">Detalle de Salida</h3>
    <table style=" font-size: 10px;" cellpadding="0" border="1" cellspacing="0">
        <thead>
        <tr class="heading">
            <th scope="col" style="width:25px">N°</th>
            <th scope="col"  style="width:70px">CÓDIGO</th>
            <th scope="col"  style="width:280px">ARTICULO</th>
            <th scope="col"  style="width:80px">MEDIDA</th>
            <th scope="col"  style="width:70px">CANTIDAD</th>
            <th scope="col"  style="width:60px">P. UNIT</th>
            <th scope="col"  style="width:70px">SUBTOTAL</th>
        </tr>
        </thead>
        <tbody>
        @foreach($data->detallesalidas as $item)
            <tr class="item">
                <th scope="row" style="text-align: center">{{ $item->id  }}</th>
                <td >{{ $item->lote->articulo->codigo }}</td>
                <td>{{ $item->lote->articulo->nombre}}</td>
                <td>{{ $item->lote->articulo->unidad_medida->nombre }}</td>
                <td style="text-align: right">{{ $item->cantidad  }}</td>
                <td style="text-align: right">{{ $item->lote->precio_u }}</td>
                <td style="text-align: right">{{ $item->lote->precio_u*$item->cantidad }}</td>
            </tr>
        @endforeach

        </tbody>

    </table>
    <br>
    <table>
        <!-- style="border-bottom: 2px dotted rgb(0, 0, 0); text-decoration: none;"-->
        <tr >
            <td style="width:30px"><b>Total: </b></td>
            <td style="border-bottom: 2px dotted rgb(0, 0, 0); text-decoration: none;"><span style="font-size: 14px;" >{{ $converted }}<b> - Bs.</b> <u>{{ $data->total  }}</u></span></td>
        </tr>
    </table>


    <footer style="margin-top: 2.5cm">

        <table style="text-align: center">
            <tr>
                <td style="text-align: center;width: 200px">
                    <div style="">
                        <hr style="width: 170px;">
                        Entregué conforme
                    </div>
                </td>
                <td style="text-align: center;width: 200px">
                    <div style="">
                        <hr style="width: 170px;">
                        Recibí conforme
                    </div>
                </td>
            </tr>
        </table>

        <!-- <div style="border-top: 1px black;text-align: center;margin-top: 150px">
             <hr style="width: 170px ">
             Recibido por
         </div>-->
    </footer>

</div>

{{--<footer>--}}
{{--    <br><br>--}}
{{--    <table style="text-align: center">--}}
{{--        <tr>--}}
{{--            <td style="text-align: center;width: 400px">--}}
{{--                <div style="">--}}
{{--                    <hr style="width: 170px;">--}}
{{--                    Entregué conforme--}}
{{--                </div>--}}
{{--            </td>--}}
{{--            <td style="text-align: center;width: 200px">--}}
{{--                <div style="">--}}
{{--                    <hr style="width: 170px;">--}}
{{--                    Recibí conforme--}}
{{--                </div>--}}
{{--            </td>--}}
{{--        </tr>--}}
{{--    </table>--}}
{{--</footer>--}}
</body>
</html>
