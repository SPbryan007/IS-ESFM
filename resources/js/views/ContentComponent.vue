<template>
  <div>
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Inicio</h1>
          </div>
          <!-- /.col -->
    <!--          <div class="col-sm-6">-->
    <!--            <ol class="breadcrumb float-sm-right">-->
    <!--              <li class="breadcrumb-item">-->
    <!--                <a href="#">Home</a>-->
    <!--              </li>-->
    <!--              <li class="breadcrumb-item active">Dashboard v1</li>-->
    <!--            </ol>-->
    <!--          </div>-->
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <!-- /.container-fluid -->
      <div class="container-fluid">
          <transition name="fade" mode="out-in">
              <keep-alive>
                  <router-view name="ViewRouterDashboard"></router-view>
              </keep-alive>
          </transition>
          <vue-progress-bar></vue-progress-bar>
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
import es from 'apexcharts/dist/locales/es.json';
import moment from "moment";
export default {
  //   components: {
  //       apexcharts: VueApexCharts,
  //   },
  // data() {
  //   return {
  //       data:null,
  //       IOSseries: [{
  //           name: 'Ingresos',
  //           data: []
  //       }, {
  //           name: 'Salidas',
  //           data: []
  //       }],
  //       IOSChartOptions: {
  //           chart: {
  //               type: 'bar',
  //               height: 350
  //           },
  //           title: {
  //               text: 'Ingresos y salidas mensuales',
  //               align: 'left'
  //           },
  //           subtitle: {
  //               text: 'Expresado en Bolivianos',
  //               align: 'left'
  //           },
  //           plotOptions: {
  //               bar: {
  //                   horizontal: false,
  //                   columnWidth: '55%',
  //                   endingShape: 'rounded'
  //               },
  //           },
  //           dataLabels: {
  //               enabled: false
  //           },
  //           stroke: {
  //               show: true,
  //               width: 2,
  //               colors: ['transparent']
  //           },
  //           xaxis: {
  //               categories: ['Ene','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dic'],
  //           },
  //           yaxis: {
  //               title: {
  //                   text: 'Bs'
  //               }
  //           },
  //           fill: {
  //               opacity: 1
  //           },
  //           tooltip: {
  //               y: {
  //                   formatter: function (val) {
  //                       return "Bs " + val;
  //                   }
  //               }
  //           }
  //       },
  //
  //       LineStockSeries: [],
  //       LineStockChartOptions: {
  //           chart: {
  //               width: 480,
  //               height:350,
  //               type: 'pie',
  //           },
  //
  //           labels: ['Linea 1', 'Linea 2', 'Linea 3',],
  //           responsive: [{
  //               breakpoint: 480,
  //               options: {
  //                   chart: {
  //                       width: 200
  //                   },
  //                   legend: {
  //                       position: 'bottom'
  //                   }
  //               }
  //           }]
  //       },
  //
  //       IOAreaSeries: [{
  //           name:'Saldo',
  //           data:[]
  //       }],
  //       IOAreachartOptions: {
  //           chart: {
  //               locales:[es],
  //               defaultLocale:'es',
  //               type: 'area',
  //               height: 350,
  //               zoom: {
  //                   enabled: false
  //               }
  //           },
  //           dataLabels: {
  //               enabled: false
  //           },
  //           stroke: {
  //               curve: 'straight'
  //           },
  //
  //           title: {
  //               text: 'Flujo de entradas y salidas en el tiempo',
  //               align: 'left'
  //           },
  //           subtitle: {
  //               text: 'Expresado en Bolivianos',
  //               align: 'left'
  //           },
  //           //labels: ['12-10-2020','12-12-2020','12-15-2020','12-16-2020','12-20-2020'],
  //           xaxis: {
  //               format: 'dd/MM',
  //               type: 'datetime',
  //               lang:'es',
  //               categories: []
  //           },
  //           yaxis: {
  //               opposite: true
  //           },
  //           legend: {
  //               horizontalAlign: 'left'
  //           }
  //       },
  //
  //       chartOptions: {
  //           chart: {
  //               id: 'vuechart-example'
  //           },
  //           xaxis: {
  //               categories: ['PAPEL MEMBRETA T/CARTA','ARCHIVADOR TAMANO OFICIO DE COLOR ROJO CON NUMERACION']
  //           }
  //       },
  //       series: [{
  //           name: 'Ingresos',
  //           data: [150]
  //       },
  //           {
  //               name: 'Salidas',
  //               data: [120]
  //           }
  //       ]
  //   };
  // },
  //   created() {
  //       this.$Progress.start();
  //       axios.get('/controller/graphics/dashboard')
  //           .then((resp)=>{
  //               this.data = resp.data;
  //               this.IOAreachartOptions.title.text = 'Flujo de caja '+resp.data.periodo;
  //               resp.data.cash_flow.forEach((e)=>{
  //                   this.IOAreachartOptions.xaxis.categories.push(e.fecha);
  //                   this.IOAreaSeries[0].data.push(e.saldo.toFixed(2))
  //               });
  //               resp.data.stock_linea.forEach((e)=>{
  //                   this.LineStockSeries.push(e.stock);
  //               })
  //               resp.data.ingreso_salida.forEach((e)=>{
  //                   this.IOSseries[0].data.push(e.ingresos.toFixed(2));
  //                   this.IOSseries[1].data.push(e.salidas.toFixed(2));
  //               })
  //               this.$Progress.finish();
  //           }).catch((err)=>{
  //               this.$Progress.fail();
  //            });
  //
  //   },
};
</script>
