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
                    <div style="width: 150px">
                        <img src="{{ public_path('img/logo.jpeg')  }}" style="width:110%; max-width:300px;">
                    </div>
                </td>
                <td style="text-align: center">
                    <h2>ALMACEN</h2>
                    <h3>ESCUELA SUPERIOR DE FORMACIÓN DE MAESTROS <br/> <b>"MARISCAL SUCRE"</b> <br>
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

    <table style="font-size: 13px" cellpadding="0" cellspacing="0">
        <tr class="details">
            <td></td>
            <td colspan="5" style="text-align: right;font-size: 25px;font-weight: bold">NIA: {{ $data->nro_ingreso  }}</td>
        </tr>
        <tr class="details">
            <td style="width: 140px"><b>Ingresado por:</b></td>
            <td colspan="4" style="text-align: left;">     {{ $data->usuario->funcionario->nombre." ".$data->usuario->funcionario->apellido  }}</td>
            <td style="text-align: right">{{ date('d/m/Y',strtotime($data->created_at)) }}</td>
        </tr>
        <tr class="details">
            <td style="width: 140px"><b>Fecha de ingreso:</b></td>
            <td colspan="5" style="text-align: left">{{ date('d/m/Y',strtotime($data->created_at)) }}</td>
        </tr>
    </table>
    <table style="font-size: 13px">
        <tr class="details">
            <td style="text-align: left;width: 30px"><b>NIT:</b></td>
            <td style="text-align: left;width: 140px"> {{ $data->proveedor->nit }}</td>
            <td style="width: 80px"><b>N° Factura:</b></td>
            <td style="text-align: left;width:180px"> -  </td>
            <td style="width:110px"><b>N° Autorización:</b></td>
            <td style="text-align: left"> - </td>
        </tr>
    </table>
    <table  style="font-size: 13px;">
        <tr class="details">
            <td style="text-align: left;width: 140px"><b>Proveedor:</b></td>
            <td style="text-align: left">{{ $data->proveedor->nombre }}</td>
        </tr>
    </table>
    <table style="font-size: 13px">
        <tr class="details">
            <td style="text-align: left;width: 140px"><b>Fecha acta:</b></td>
            <td style="text-align: left;width: 140px"> {{ date('d/m/Y',strtotime($data->donacion->fecha_acta)) }}</td>
            <td style="text-align: left;width: 80px"><b>Formulario:</b></td>
            <td style="text-align: left;width: 160px;font-weight: bold"> DONACIÓN </td>
            <td style="text-align: left;width: 20px"><b>N°:</b></td>
            <td style="text-align: left"> {{ $data->donacion->nro_acta }}</td>
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
        @foreach($data->detalleingresos as $item)
            <tr class="item">
                <th scope="row" style="text-align: center">{{ $item->id  }}</th>
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
    <br>
    <table>
        <!-- style="border-bottom: 2px dotted rgb(0, 0, 0); text-decoration: none;"-->
        <tr >
            <td style="width:30px"><b>Total: </b></td>
            <td style="border-bottom: 2px dotted rgb(0, 0, 0); text-decoration: none;"><span style="font-size: 12px;" >{{ $converted }}<b> - Bs.</b> <u>{{ $data->total  }}</u></span></td>
        </tr>
    </table>

    <footer style="margin-top: 2.5cm">

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
