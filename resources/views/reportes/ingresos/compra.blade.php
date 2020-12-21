

<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Formulario de Ingreso {{ date('d/m/Y',strtotime($data->created_at)) }}</title>

    <style>

        .invoice-box {
            max-width: 900px;
            margin: auto;
            /*   padding: 30px;*/
            /*  border: 1px solid #eee;
              box-shadow: 0 0 10px rgba(0, 0, 0, .15);*/
            margin-top:-25px;
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
                <td  style="width: 150px;vertical-align: inherit">
                    <div style="width: 130px">
                        <img src="{{ public_path('img/logo.jpeg')  }}" style="width:110%; max-width:300px;">
                    </div>
                </td>
                <td style="text-align: center">

                    <h3>ALMACEN <br> ESCUELA SUPERIOR DE FORMACIÓN DE MAESTROS <br/> <b>"MARISCAL SUCRE"</b> <br>
                        FORMULARIO DE INGRESO
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

    <!-- <table cellpadding="0" cellspacing="0">
    &lt;!&ndash;     <tr class="information">
             <td colspan="2">
                 <table>
                     <tr>
                         <td>
                             <b>Ingresado por:</b> Bryan Fernandez Flores<br>
                             <b>Fecha de ingreso: 10/04/2020</b><br>
                             <b>NIT: </b>140021586
                         </td>

                         <td>
                             Acme Corp.<br>
                             John Doe<br>
                             john@example.com
                         </td>
                     </tr>
                 </table>
             </td>
         </tr>&ndash;&gt;
         <tr class="details">
               <td>Nro. Ingreso</td>
               <td></td>
               <td></td>
               <td style="text-align: right;font-size: 25px;font-weight: bold">NSA-102</td>
         </tr>

           <tr class="details">
               <td><b>Ingresado por:</b></td>
               <td>Bryan Fernandez Flores</td>
               <td><b>Fecha de ingreso:</b></td>
               <td style="text-align: right">10/05/2020</td>
           </tr>
           <tr class="details">
               <td><b>Fecha de ingreso:</b>:</td>
               <td>10/05/2020</td>
           </tr>
           <tr class="details">
               <td>Ingresado por:</td>
               <td>Bryan Fernandez Flores</td>
           </tr>
     </table>-->

    <table style="font-size: 13px; line-height: 20px;" cellpadding="0" cellspacing="0">
{{--        <tr class="details">--}}
{{--            <td>Ingresado por:</td>--}}
{{--            <td colspan="5" style="text-align: right;font-size: 20px;font-weight: bold">NIA: {{ $data->nro_ingreso  }}</td>--}}
{{--        </tr>--}}
        <tr class="details">
            <td style="width: 140px"><b>Ingresado por:</b></td>
            <td colspan="4" style="text-align: left;">     {{ $data->usuario->funcionario->nombre." ".$data->usuario->funcionario->apellido  }}</td>
            <td style="text-align: right;font-size: 20px;font-weight: bold">NIA: {{ $data->nro_ingreso  }}</td>
        </tr>
        <tr class="details">
            <td style="width: 140px"><b>Fecha de ingreso:</b></td>
            <td colspan="4" style="text-align: left">{{ date('d/m/Y',strtotime($data->created_at)) }}</td>
            <td style="text-align: right">{{ date('d/m/Y',strtotime($data->created_at)) }}</td>
        </tr>
    </table>
    <table style="font-size: 13px;line-height: 18px;" cellpadding="0" cellspacing="0">
        <tr class="details">
            <td style="text-align: left;width: 30px"><b>NIT:</b></td>
            <td style="text-align: left;width: 140px"> {{ $data->proveedor->nit }}</td>
            <td style="width: 80px"><b>N° Factura:</b></td>
            <td style="text-align: left;width:180px">{{ $data->compra->nro_comprobante }} </td>
            <td style="width:110px"><b>N° Autorización:</b></td>
            <td style="text-align: left">{{ $data->compra->nro_autorizacion  }}</td>
        </tr>
    </table>
    <table  style="font-size: 13px;line-height: 18px;" cellpadding="0" cellspacing="0">
        <tr class="details">
            <td style="text-align: left;width: 140px"><b>Proveedor:</b></td>
            <td style="text-align: left">{{ $data->proveedor->nombre }}</td>
        </tr>
    </table>
    <table style="font-size: 13px;line-height: 18px;" cellpadding="0" cellspacing="0">
        <tr class="details">
            <td style="text-align: left;width: 140px"><b>Fecha Solicitud:</b></td>
            <td style="text-align: left;width: 140px"> {{ date('d/m/Y',strtotime($data->compra->fecha_solicitud)) }}</td>
            <td style="text-align: left;width: 80px"><b>Formulario:</b></td>
            <td style="text-align: left;width: 160px;font-weight: bold"> {{ $data->compra->tipo_compra == 'COM' ? 'ORDEN DE COMPRA' :  $data->compra->tipo_compra == 'CON' ? 'CONTRATO' : 'ORDEN DE SERVICIO'}} </td>
            <td style="text-align: left;width: 20px"><b>N°:</b></td>
            <td style="text-align: left"> {{ $data->compra->nro_solicitud }}</td>
        </tr>
    </table>



    <!-- <table border="1" cellpadding="0" cellspacing="0">
              <tr class="information">
                  <td colspan="2">
                      <table>
                          <tr>
                              <td>
                                  <b>Ingresado por:</b><br>
                                  <b>NIT: </b><br>
                                  <b>Proveedor: </b><br>
                                  <b>Fecha solicitud: </b><br>
                                  <b>N° Factura</b><br>
                                  <b>N° Autorizacion</b>
                              </td>

                              <td>
                                  Bryan Fernandez Flores<br>
                                  100021542<br>
                                  IMPRENTA OFFSET ASUNCION <br>
                                  10/06/2php020 <br>
                                  1548 <br>
                                  1002125421 <br>

                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
     </table>-->
    <h3 class="text-center" style="margin-bottom: 5px;margin-top: 10px">Detalle de ingreso</h3>
    <table style=" font-size: 10px;line-height: 18px;" cellpadding="0" border="1" cellspacing="0">
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
            @foreach($data->detalleingresos as $item)
            <tr class="item">
                <th scope="row" style="text-align: center">{{ $loop->iteration  }}</th>
                <td >{{ $item->lote->articulo->codigo }}</td>
                <td>{{ $item->lote->articulo->nombre}}</td>
                <td>{{ $item->lote->articulo->unidad_medida->nombre }}</td>
                <td style="text-align: right">{{ $item->cantidad  }}</td>
                <td style="text-align: right">{{ round($item->lote->precio_u,2) }}</td>
                <td style="text-align: right">{{ round($item->lote->precio_u*$item->cantidad,2) }}</td>
            </tr>
            @endforeach

        </tbody>

    </table>
    <table>
        <!-- style="border-bottom: 2px dotted rgb(0, 0, 0); text-decoration: none;"-->
        <tr >
            <td style="width:30px"><b>Total: </b></td>
            <td style="border-bottom: 2px dotted rgb(0, 0, 0); text-decoration: none;"><span style="font-size: 12px;" >{{ $converted }}<b> - Bs.</b> <u>{{ $data->total  }}</u></span></td>
        </tr>
    </table>

    <footer style="margin-top: 2cm">

        <table style="text-align: center">
            <tr>
                <td style="text-align: center;width: 200px">
                    <div style="">
                        <hr style="width: 170px;">
                        Recibido por
                    </div>
                </td>
                <td style="text-align: center;width: 200px">
                    <div style="">
                        <hr style="width: 170px;">
                        Verificado por
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

{{--<footer>
    <br><br>
    <table style="text-align: center">
        <tr>
            <td style="text-align: center;width: 400px">
                <div style="">
                    <hr style="width: 170px;">
                    Recibido por
                </div>
                <div style="margin-left: 80px">
                    <hr style="width: 170px;">
                    Recibido por
                </div>
            </td>
            <td style="text-align: center;width: 200px">
                <div style="">
                    <hr style="width: 170px;">
                    Verificado por
                </div>
                <div style="margin-left: 150px; text-align: center">
                    <hr style="width: 170px;">
                    Autorizado por
                </div>
            </td>
        </tr>
    </table>

    <!-- <div style="border-top: 1px black;text-align: center;margin-top: 150px">
         <hr style="width: 170px ">
         Recibido por
     </div>-->
</footer>--}}
</body>
</html>


{{--


<body class="hold-transition sidebar-mini layout-fixed">

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>AdminLTE 3 | Dashboard</title>

    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <!-- Fonts -->
--}}
{{--
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
--}}{{--


<!-- Styles -->
    <style type="text/css">
        @import "./resources/bootstrap/bootstrap.min.css";
    </style>

</head>
<div>

    <div class="card">
        <div class="card-title">
            Hola
        </div>
        <div class="card-body">

            <h2 class="text-danger">HOLA MUNDO</h2>
        </div>
     --}}
{{--   <div class="card-body">



            <div class="row invoice-info">
                <div class="col-md-5 invoice-col">
                    <dl class="row">
                        <dt class="col-md-5">Ingresado por:</dt>
                        <dd class="col-md-7">{{ $data->usuario->funcionario->nombre.' '.$data->usuario->funcionario->apellido }}</dd>
                        <dt class="col-md-5">Fecha de ingreso:</dt>
                        <dd class="col-md-7">{{ date('m/d/Y',strtotime($data->created_at)) }}</dd>
                        <dt class="col-md-5">NIT:</dt>
                        <dd class="col-md-7">{{ $data->proveedor->nit }}</dd>
                        <dt class="col-md-5">Proveedor:</dt>
                        <dd class="col-md-7">{{ $data->proveedor->nombre }}</dd>
                        <dt class="col-md-5">Fecha solicitud:</dt>
                        <dd class="col-md-7">{{ date('m/d/Y',strtotime($data->compra->fecha_solicitud)) }}</dd>
                    </dl>
                </div>
                <div class="col-md-4 invoice-col">
                    <dl class="row">
                        <dt class="col-md-6">&nbsp</dt>
                        <dd class="col-md-6">&nbsp</dd>
                        <dt class="col-md-6">N° Factura</dt>
                        <dd class="col-md-6">{{ $data->compra->nro_comprobante }}</dd>
                        <dt class="col-md-6">N° Autorizacion:</dt>
                        <dd class="col-md-6">{{ $data->compra->nro_autorizacion}}</dd>
                        <dt class="col-md-6">&nbsp</dt>
                        <dd class="col-md-6">&nbsp</dd>
                        <dt class="col-md-6">Formulario:</dt>
                        <dd class="col-md-6">{{ $data->compra->tipo_compra}}</dd>
                    <!--<dt class="col-md-6">Fecha solicitud:</dt>
                            <dd class="col-md-6">{{ $data->compra->fecha_solicitud }}</dd>-->
                    </dl>
                </div>
                <div class="col-md-3">
                    <dl class="row">
                        <dt class="col-md-6"></dt>
                        <dd class="col-md-6"><h4><strong>NIA: {{ $data->nro_ingreso }}</strong></h4><small>{{ date('m/d/Y',strtotime($data->created_at))  }}</small></dd>
                        <dt class="col-md-6">&nbsp</dt>
                        <dd class="col-md-6">&nbsp</dd>
                        <dt class="col-md-6">&nbsp</dt>
                        <dd class="col-md-6">&nbsp</dd>
                        <dt class="col-md-6">N° Formulario</dt>
                        <dd class="col-md-6">{{ $data->compra->nro_solicitud }}</dd>
                    <!--<dt class="col-md-6">Fecha solicitud:</dt>
                            <dd class="col-md-6">{{ date('m/d/Y',strtotime($data->fecha_solicitud)) }}</dd>-->
                    </dl>
                </div>
                <!-- /.col -->
            </div>

            <h4 class="text-center"> <strong>Detalle Ingreso</strong></h4>
            <table class="table table-sm table-striped">
                <thead>
                <tr>
                    <th style="width: 10px">N°</th>
                    <th>Articulo</th>
                    <th>Medida</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,index) in detalle_ingreso.detalleingresos" :key="index">
                    <td>{{ index+1 }}.</td>
                    <td>{{ item.lote.articulo.nombre }}</td>
                    <td>{{ item.lote.articulo.unidad_medida.nombre }}</td>
                    <td>{{ (item.cantidad).toFixed(2) }}</td>
                    <td><b>Bs. </b>{{ (item.cantidad * item.lote.precio_u).toFixed(2) }}</td>
                </tr>

                </tbody>
            </table>
            <dl class="row pt-3">
                <dt class="col-md-3">Total:</dt>
                <dd class="col-md-7 text-right"><span style="border-bottom: 2px dotted #000;text-decoration: none;">{{ $converted }}</span></dd>
                <div class="col-md-2 text-center"><u>{{ ($data->total) }}</u></div>
            </dl>
            <br>
        <!--  <div class="row">
                    <div class="">
                       <b> <strong>Total:</strong></b>
                        <span style="border-bottom: 1px dotted #000;text-decoration: none;">

            </span>
        </div>
    </div>-->
        </div>--}}{{--

    </div>

</div>


</body>

</html>
--}}


{{--<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Reporte Ingreso 10/25/2020 </title>

    <style>
        .invoice-box {
            max-width: 800px;
            margin: auto;
            padding: 30px;
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

        .invoice-box table td {
            padding: 5px;
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
            padding-bottom: 40px;
        }

        .invoice-box table tr.heading td {
            background: #eee;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
        }

        .invoice-box table tr.details td {
            padding-bottom: 20px;
        }

        .invoice-box table tr.item td{
            border-bottom: 1px solid #eee;
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
    </style>
</head>

<body>
<div class="invoice-box">
    <table cellpadding="0" cellspacing="0">
        <tr class="top">
            <td colspan="2">
                <table>
                    <tr>
                        <td class="title">
                            <img src="{{ public_path('img/logo.jpeg')  }}" style="width:35%; max-width:300px;">
                        </td>

                        <td>
                            Invoice #: 123<br>
                            Created: January 1, 2015<br>
                            Due: February 1, 2015
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr class="information">
            <td colspan="2">
                <table>
                    <tr>
                        <td>
                            Sparksuite, Inc.<br>
                            12345 Sunny Road<br>
                            Sunnyville, CA 12345
                        </td>

                        <td>
                            Acme Corp.<br>
                            John Doe<br>
                            john@example.com
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr class="heading">
            <td>
                Payment Method
            </td>

            <td>
                Check #
            </td>
        </tr>

        <tr class="details">
            <td>
                Check
            </td>

            <td>
                1000
            </td>
        </tr>

        <tr class="heading">
            <td>
                Item
            </td>

            <td>
                Price
            </td>
        </tr>

        <tr class="item">
            <td>
                Website design
            </td>

            <td>
                $300.00
            </td>
        </tr>

        <tr class="item">
            <td>
                Hosting (3 months)
            </td>

            <td>
                $75.00
            </td>
        </tr>

        <tr class="item last">
            <td>
                Domain name (1 year)
            </td>

            <td>
                $10.00
            </td>
        </tr>

        <tr class="total">
            <td></td>

            <td>
                Total: $385.00
            </td>
        </tr>
    </table>
</div>
</body>
</html>--}}



{{--    <!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Reporte Ingreso 10/25/2020 </title>

    <style type="text/css">

    </style>
</head>
<body>
    <div class="container">
        <div class="invoice p-3 mb-3">
            <!-- title row -->
            <div class="row">
                <div class="col-12">
                    <h4>
                        <i class="fas fa-globe"></i> AdminLTE, Inc.
                        <small class="float-right">Date: 2/10/2014</small>
                    </h4>
                </div>
                <!-- /.col -->
            </div>
            <!-- info row -->
            <div class="row invoice-info">
                <div class="col-sm-4 invoice-col">
                    From
                    <address>
                        <strong>Admin, Inc.</strong><br>
                        795 Folsom Ave, Suite 600<br>
                        San Francisco, CA 94107<br>
                        Phone: (804) 123-5432<br>
                        Email: info@almasaeedstudio.com
                    </address>
                </div>
                <!-- /.col -->
                <div class="col-sm-4 invoice-col">
                    To
                    <address>
                        <strong>John Doe</strong><br>
                        795 Folsom Ave, Suite 600<br>
                        San Francisco, CA 94107<br>
                        Phone: (555) 539-1037<br>
                        Email: john.doe@example.com
                    </address>
                </div>
                <!-- /.col -->
                <div class="col-sm-4 invoice-col">
                    <b>Invoice #007612</b><br>
                    <br>
                    <b>Order ID:</b> 4F3S8J<br>
                    <b>Payment Due:</b> 2/22/2014<br>
                    <b>Account:</b> 968-34567
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->

            <!-- Table row -->
            <div class="row">
                <div class="col-12 table-responsive">
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th>Qty</th>
                            <th>Product</th>
                            <th>Serial #</th>
                            <th>Description</th>
                            <th>Subtotal</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Call of Duty</td>
                            <td>455-981-221</td>
                            <td>El snort testosterone trophy driving gloves handsome</td>
                            <td>$64.50</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Need for Speed IV</td>
                            <td>247-925-726</td>
                            <td>Wes Anderson umami biodiesel</td>
                            <td>$50.00</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Monsters DVD</td>
                            <td>735-845-642</td>
                            <td>Terry Richardson helvetica tousled street art master</td>
                            <td>$10.70</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Grown Ups Blue Ray</td>
                            <td>422-568-642</td>
                            <td>Tousled lomo letterpress</td>
                            <td>$25.99</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->

            <div class="row">
                <!-- accepted payments column -->
                <div class="col-6">
                    <p class="lead">Payment Methods:</p>
                    <img src="../../dist/img/credit/visa.png" alt="Visa">
                    <img src="../../dist/img/credit/mastercard.png" alt="Mastercard">
                    <img src="../../dist/img/credit/american-express.png" alt="American Express">
                    <img src="../../dist/img/credit/paypal2.png" alt="Paypal">

                    <p class="text-muted well well-sm shadow-none" style="margin-top: 10px;">
                        Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem
                        plugg
                        dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.
                    </p>
                </div>
                <!-- /.col -->
                <div class="col-6">
                    <p class="lead">Amount Due 2/22/2014</p>

                    <div class="table-responsive">
                        <table class="table">
                            <tbody><tr>
                                <th style="width:50%">Subtotal:</th>
                                <td>$250.30</td>
                            </tr>
                            <tr>
                                <th>Tax (9.3%)</th>
                                <td>$10.34</td>
                            </tr>
                            <tr>
                                <th>Shipping:</th>
                                <td>$5.80</td>
                            </tr>
                            <tr>
                                <th>Total:</th>
                                <td>$265.24</td>
                            </tr>
                            </tbody></table>
                    </div>
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->

            <!-- this row will not appear when printing -->
            <div class="row no-print">
                <div class="col-12">
                    <a href="invoice-print.html" target="_blank" class="btn btn-default"><i class="fas fa-print"></i> Print</a>
                    <button type="button" class="btn btn-success float-right"><i class="far fa-credit-card"></i> Submit
                        Payment
                    </button>
                    <button type="button" class="btn btn-primary float-right" style="margin-right: 5px;">
                        <i class="fas fa-download"></i> Generate PDF
                    </button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>--}}











{{--

<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Reporte Ingreso 10/25/2020 </title>

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
        footer{
            margin-top: 80px;
            position: absolute;
            bottom: 0cm;
            left: 0cm;
            right: 0cm;
            height: 2cm;
            /*  background-color: red;
               color: white;*/
            text-align:center;
            line-height: 25px;
        }
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
                <td  style="width: 150px;vertical-align: inherit">
                    <div style="width: 150px">
                        <img src="{{ public_path('img/logo.jpeg')  }}" style="width:110%; max-width:300px;">
                    </div>
                </td>
                <td style="text-align: center">
                    <h2>ALMACEN</h2>
                    <h3>ESCUELA SUPERIOR DE FORMACIÓN DE MAESTROS <br/> <b>"MARISCAL SUCRE"</b> <br>RECURSOS PROPIOS</h3>
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

    <!-- <table cellpadding="0" cellspacing="0">
    &lt;!&ndash;     <tr class="information">
             <td colspan="2">
                 <table>
                     <tr>
                         <td>
                             <b>Ingresado por:</b> Bryan Fernandez Flores<br>
                             <b>Fecha de ingreso: 10/04/2020</b><br>
                             <b>NIT: </b>140021586
                         </td>

                         <td>
                             Acme Corp.<br>
                             John Doe<br>
                             john@example.com
                         </td>
                     </tr>
                 </table>
             </td>
         </tr>&ndash;&gt;
         <tr class="details">
               <td>Nro. Ingreso</td>
               <td></td>
               <td></td>
               <td style="text-align: right;font-size: 25px;font-weight: bold">NSA-102</td>
         </tr>

           <tr class="details">
               <td><b>Ingresado por:</b></td>
               <td>Bryan Fernandez Flores</td>
               <td><b>Fecha de ingreso:</b></td>
               <td style="text-align: right">10/05/2020</td>
           </tr>
           <tr class="details">
               <td><b>Fecha de ingreso:</b>:</td>
               <td>10/05/2020</td>
           </tr>
           <tr class="details">
               <td>Ingresado por:</td>
               <td>Bryan Fernandez Flores</td>
           </tr>
     </table>-->

    <table style="font-size: 13px" cellpadding="0" cellspacing="0">
        <tr class="details">
            <td>N°</td>
            <td colspan="5" style="text-align: right;font-size: 25px;font-weight: bold">NSI: 102</td>
        </tr>
        <tr class="details">
            <td style="width: 140px"><b>Ingresado por:</b></td>
            <td colspan="4" style="text-align: left;"> Bryan Fernandez Flores De la vega con arros</td>
            <td style="text-align: right">10/05/2020</td>
        </tr>
        <tr class="details">
            <td style="width: 140px"><b>Fecha de ingreso:</b></td>
            <td colspan="5" style="text-align: left">10/05/2020</td>
        </tr>
    </table>
    <table style="font-size: 13px">
        <tr class="details">
            <td style="text-align: left;width: 50px"><b>NIT:</b></td>
            <td style="text-align: left;width: 150px"> 387352195421</td>
            <td style="width: 80px"><b>N° Factura:</b></td>
            <td style="text-align: left;width: 60px">1589</td>
            <td style="width:110px"><b>N° Autorización:</b></td>
            <td style="text-align: left">1255478842154</td>
        </tr>
    </table>
    <table  style="font-size: 13px;">
        <tr class="details">
            <td style="text-align: left;width: 140px"><b>Proveedor:</b></td>
            <td style="text-align: left"> IMPRENTA OFFSET ASUNCIÓN</td>
        </tr>
    </table>
    <table style="font-size: 13px">
        <tr class="details">
            <td style="text-align: left;width: 140px"><b>Fecha Solicitud:</b></td>
            <td style="text-align: left;width: 140px"> 19/02/2020</td>
            <td style="text-align: left;width: 80px"><b>Formulario:</b></td>
            <td style="text-align: left;width: 160px"> ORDEN DE COMPRA </td>
            <td style="text-align: left;width: 20px"><b>N°:</b></td>
            <td style="text-align: left"> 10 </td>
        </tr>
    </table>



    <!-- <table border="1" cellpadding="0" cellspacing="0">
              <tr class="information">
                  <td colspan="2">
                      <table>
                          <tr>
                              <td>
                                  <b>Ingresado por:</b><br>
                                  <b>NIT: </b><br>
                                  <b>Proveedor: </b><br>
                                  <b>Fecha solicitud: </b><br>
                                  <b>N° Factura</b><br>
                                  <b>N° Autorizacion</b>
                              </td>

                              <td>
                                  Bryan Fernandez Flores<br>
                                  100021542<br>
                                  IMPRENTA OFFSET ASUNCION <br>
                                  10/06/2020 <br>
                                  1548 <br>
                                  1002125421 <br>

                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
     </table>-->
    <h2 class="text-center">Detalle de Ingreso</h2>
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
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>
        <tr class="item">
            <th scope="row" style="text-align: center">1</th>
            <td >2560001</td>
            <td>PAPEL MEMBRETADO T/CARTA</td>
            <td>HOJA</td>
            <td style="text-align: right">500</td>
            <td style="text-align: right">2</td>
            <td style="text-align: right">1000</td>
        </tr>















        </tbody>




    --}}
{{-- <tr class="item" >
         <td style="text-align: center">1</td>
         <td>2560001</td>
         <td>PAPEL MEMBRETADO T/CARTA</td>
         <td>HOJA</td>
         <td style="text-align: right">500</td>
         <td style="text-align: right">2</td>
         <td style="text-align: right">1000</td>
     </tr>
     <tr class="item">
         <td style="text-align: center">2</td>
         <td>3210005</td>
         <td>CEMENTO FANCESA</td>
         <td>BOLSA</td>
         <td style="text-align: right">3</td>
         <td style="text-align: right">100</td>
         <td style="text-align: right">300</td>
     </tr>
     <tr class="item">
         <td style="text-align: center">3</td>
         <td>3210005</td>
         <td>CEMENTO FANCESA</td>
         <td>BOLSA</td>
         <td style="text-align: right">3</td>
         <td style="text-align: right">100</td>
         <td style="text-align: right">300</td>
     </tr>
     <tr class="item">
         <td style="text-align: center">4</td>
         <td>3210005</td>
         <td>CEMENTO FANCESA</td>
         <td>BOLSA</td>
         <td style="text-align: right">3</td>
         <td style="text-align: right">100</td>
         <td style="text-align: right">300</td>
     </tr>
     <tr class="item">
         <td>1</td>
         <td>3210005</td>
         <td>CEMENTO FANCESA</td>
         <td>BOLSA</td>
         <td style="text-align: right">3</td>
         <td style="text-align: right">100</td>
         <td style="text-align: right">300</td>
     </tr>
     <tr class="item">
         <td>1</td>
         <td>3210005</td>
         <td>CEMENTO FANCESA</td>
         <td>BOLSA</td>
         <td style="text-align: right">3</td>
         <td style="text-align: right">100</td>
         <td style="text-align: right">300</td>
     </tr>
     <tr class="item">
         <td>1</td>
         <td>3210005</td>
         <td>CEMENTO FANCESA</td>
         <td>BOLSA</td>
         <td style="text-align: right">3</td>
         <td style="text-align: right">100</td>
         <td style="text-align: right">300</td>
     </tr>
     <tr class="item">
         <td>1</td>
         <td>3210005</td>
         <td>CEMENTO FANCESA</td>
         <td>BOLSA</td>
         <td style="text-align: right">3</td>
         <td style="text-align: right">100</td>
         <td style="text-align: right">300</td>
     </tr>
     <tr class="item">
         <td>1</td>
         <td>3210005</td>
         <td>CEMENTO FANCESA</td>
         <td>BOLSA</td>
         <td style="text-align: right">3</td>
         <td style="text-align: right">100</td>
         <td style="text-align: right">300</td>
     </tr>
     <tr class="item">
         <td>1</td>
         <td>3210005</td>
         <td>CEMENTO FANCESA</td>
         <td>BOLSA</td>
         <td style="text-align: right">3</td>
         <td style="text-align: right">100</td>
         <td style="text-align: right">300</td>
     </tr>
     <tr class="item">
         <td>1</td>
         <td>3210005</td>
         <td>CEMENTO FANCESA</td>
         <td>BOLSA</td>
         <td style="text-align: right">3</td>
         <td style="text-align: right">100</td>
         <td style="text-align: right">300</td>
     </tr>
     <tr class="item">
         <td>1</td>
         <td>3210005</td>
         <td>CEMENTO FANCESA</td>
         <td>BOLSA</td>
         <td style="text-align: right">3</td>
         <td style="text-align: right">100</td>
         <td style="text-align: right">300</td>
     </tr>
     <tr class="item">
         <td>1</td>
         <td>3210005</td>
         <td>CEMENTO FANCESA</td>
         <td>BOLSA</td>
         <td style="text-align: right">3</td>
         <td style="text-align: right">100</td>
         <td style="text-align: right">300</td>
     </tr>
     <tr class="item">
         <td>1</td>
         <td>3210005</td>
         <td>CEMENTO FANCESA</td>
         <td>BOLSA</td>
         <td style="text-align: right">3</td>
         <td style="text-align: right">100</td>
         <td style="text-align: right">300</td>
     </tr>
     <tr class="item">
         <td>1</td>
         <td>3210005</td>
         <td>CEMENTO FANCESA</td>
         <td>BOLSA</td>
         <td style="text-align: right">3</td>
         <td style="text-align: right">100</td>
         <td style="text-align: right">300</td>
     </tr>
     <tr class="item">
         <td>1</td>
         <td>3210005</td>
         <td>CEMENTO FANCESA</td>
         <td>BOLSA</td>
         <td style="text-align: right">3</td>
         <td style="text-align: right">100</td>
         <td style="text-align: right">300</td>
     </tr>
     <tr class="item">
         <td>1</td>
         <td>3210005</td>
         <td>CEMENTO FANCESA</td>
         <td>BOLSA</td>
         <td style="text-align: right">3</td>
         <td style="text-align: right">100</td>
         <td style="text-align: right">300</td>
     </tr>
     <tr class="item">
         <td>1</td>
         <td>3210005</td>
         <td>CEMENTO FANCESA</td>
         <td>BOLSA</td>
         <td style="text-align: right">3</td>
         <td style="text-align: right">100</td>
         <td style="text-align: right">300</td>
     </tr>
     <tr class="item">
         <td>1</td>
         <td>3210005</td>
         <td>CEMENTO FANCESA</td>
         <td>BOLSA</td>
         <td style="text-align: right">3</td>
         <td style="text-align: right">100</td>
         <td style="text-align: right">300</td>
     </tr>
     <tr class="item">
         <td>1</td>
         <td>3210005</td>
         <td>CEMENTO FANCESA</td>
         <td>BOLSA</td>
         <td style="text-align: right">3</td>
         <td style="text-align: right">100</td>
         <td style="text-align: right">300</td>
     </tr>
     <tr class="item">
         <td>1</td>
         <td>3210005</td>
         <td>CEMENTO FANCESA</td>
         <td>BOLSA</td>
         <td style="text-align: right">3</td>
         <td style="text-align: right">100</td>
         <td style="text-align: right">300</td>
     </tr>
     <tr class="item">
         <td>1</td>
         <td>3210005</td>
         <td>CEMENTO FANCESA</td>
         <td>BOLSA</td>
         <td style="text-align: right">3</td>
         <td style="text-align: right">100</td>
         <td style="text-align: right">300</td>
     </tr>
     <tr class="item">
         <td>1</td>
         <td>3210005</td>
         <td>CEMENTO FANCESA</td>
         <td>BOLSA</td>
         <td style="text-align: right">3</td>
         <td style="text-align: right">100</td>
         <td style="text-align: right">300</td>
     </tr>
--}}{{--




    <!--
                <tr class="item last">
                    <td>
                        Domain name (1 year)
                    </td>

                    <td>
                        $10.00
                    </td>
                </tr>-->


    </table>
    <br>
    <table>
        <!-- style="border-bottom: 2px dotted rgb(0, 0, 0); text-decoration: none;"-->
        <tr>
            <td ><b>Total: </b></td>
            <td ><span style="font-size: 14px" >mil y 0.00/100 <b>  Bs.</b> <u>1520</u></span></td>
        </tr>
    </table>




</div>

<footer>
    <br><br>
    <table style="text-align: center">
        <tr>
            <td style="text-align: center;width: 400px">
                <div style="">
                    <hr style="width: 170px;">
                    Recibido por
                </div>
                --}}
{{--       <div style="margin-left: 80px">
                           <hr style="width: 170px;">
                           Recibido por
                       </div>--}}{{--

            </td>
            <td style="text-align: center;width: 200px">
                <div style="">
                    <hr style="width: 170px;">
                    Verificado por
                </div>
                --}}
{{--     <div style="margin-left: 150px; text-align: center">
                         <hr style="width: 170px;">
                         Autorizado por
                     </div>--}}{{--

            </td>
        </tr>
    </table>

    <!-- <div style="border-top: 1px black;text-align: center;margin-top: 150px">
         <hr style="width: 170px ">
         Recibido por
     </div>-->
</footer>
</body>
</html>--}}
