<template>
  <div>
      <el-alert
          v-if="alert.show"
          :title="alert.title"
          :type="alert.color"
          :description="alert.message"
          @close="alert.show = false"
          closable
          show-icon
      >
      </el-alert>
      <div class="row">
          <div class="col-lg-3 col-6">
              <!-- small box -->
              <div class="small-box bg-info">
                  <div class="inner">
                      <h3>{{ data.cant_prov  }}</h3>
                      <p>Proveedores</p>
                  </div>
                  <div class="icon">
                      <i class="fas fa-truck"></i>
                  </div>
                  <router-link
                      :to="{ name: 'proveedor' }"
                      class="small-box-footer"
                  >
                      Ver mas..   <i class="fas fa-arrow-circle-right"></i>
                  </router-link>
                  <!--                      <a href="#" class="small-box-footer">Ver mas.. <i class="fas fa-arrow-circle-right"></i></a>-->
              </div>
          </div>
          <div class="col-lg-3 col-6">
              <!-- small box -->
              <div class="small-box bg-warning">
                  <div class="inner">
                      <h3>{{ data.cant_sol  }}</h3>

                      <p>Solicitantes</p>
                  </div>
                  <div class="icon">
                      <i class="fas fa-users"></i>
                  </div>
                  <router-link
                      :to="{ name: 'solicitante' }"
                      class="small-box-footer"
                  >
                      Ver mas..   <i class="fas fa-arrow-circle-right"></i>
                  </router-link>
              </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
              <!-- small box -->
              <div class="small-box bg-success">
                  <div class="inner">
                      <h3>{{ data.cant_in}}</h3>

                      <p>Ingresos {{ data.periodo }}</p>
                  </div>
                  <div class="icon">
                      <i class="fas fa-truck-loading"></i>
                  </div>
                  <router-link
                      :to="{ name: 'ingreso' }"
                      class="small-box-footer"
                  >
                      Ver mas..   <i class="fas fa-arrow-circle-right"></i>
                  </router-link>
              </div>
          </div>

          <!-- ./col -->
          <div class="col-lg-3 col-6">
              <!-- small box -->
              <div class="small-box bg-danger">
                  <div class="inner">
                      <h3>{{ data.cant_sa}}</h3>

                      <p>Salidas {{ data.periodo}}</p>
                  </div>
                  <div class="icon">
                      <i class="fas fa-sign-out-alt"></i>
                  </div>
                  <router-link
                      :to="{ name: 'salida' }"
                      class="small-box-footer"
                  >
                      Ver mas..   <i class="fas fa-arrow-circle-right"></i>
                  </router-link>
              </div>
          </div>
          <!-- ./col -->
      </div>
      <div class="row">
          <div class="col-md-8">
              <div class="card">
                  <div class="card-body">
                      <apexchart type="bar" height="290" :options="IOSChartOptions" :series="IOSseries"></apexchart>
                  </div>
              </div>
          </div>
          <div class="col-md-4">
              <div class="card">
                  <div class="card-header border-0">
                      <b>Stock de articulos por linea</b>
                  </div>
                  <div class="card-body">
                      <apexchart type="pie" width="380" height="350" :options="LineStockChartOptions" :series="LineStockSeries"></apexchart>
                  </div>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-md-12">

              <div class="card">

                  <div class="card-body">
                      <apexchart type="area" height="350" :options="IOAreachartOptions" :series="IOAreaSeries"></apexchart>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
import es from 'apexcharts/dist/locales/es.json';
import moment from "moment";
import store from "../store";
export default {
    components: {
        apexcharts: VueApexCharts,
    },
    data() {
        return {
            alert:{
                show:false,
                message:null,
                title:null,
                color:null,
            },
            data:null,
            IOSseries: [{
                name: 'Ingresos',
                data: []
            }, {
                name: 'Salidas',
                data: []
            }],
            IOSChartOptions: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                title: {
                    text: 'Ingresos y salidas mensuales',
                    align: 'left'
                },
                subtitle: {
                    text: 'Expresado en Bolivianos',
                    align: 'left'
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['Ene','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dic'],
                },
                yaxis: {
                    title: {
                        text: 'Bs'
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "Bs " + val;
                        }
                    }
                }
            },

            LineStockSeries: [],
            LineStockChartOptions: {
                chart: {
                    width: 480,
                    height:350,
                    type: 'pie',
                },

                labels: ['Linea 1', 'Linea 2', 'Linea 3',],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },

            IOAreaSeries: [{
                name:'Saldo',
                data:[]
            }],
            IOAreachartOptions: {
                chart: {
                    locales:[es],
                    defaultLocale:'es',
                    type: 'area',
                    height: 350,
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },

                title: {
                    text: 'Flujo de entradas y salidas en el tiempo',
                    align: 'left'
                },
                subtitle: {
                    text: 'Expresado en Bolivianos',
                    align: 'left'
                },
                //labels: ['12-10-2020','12-12-2020','12-15-2020','12-16-2020','12-20-2020'],
                xaxis: {
                    format: 'dd/MM',
                    type: 'datetime',
                    lang:'es',
                    categories: []
                },
                yaxis: {
                    opposite: true
                },
                legend: {
                    horizontalAlign: 'left'
                }
            },
            chartOptions: {
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    categories: ['PAPEL MEMBRETA T/CARTA','ARCHIVADOR TAMANO OFICIO DE COLOR ROJO CON NUMERACION']
                }
            },
            series: [{
                name: 'Ingresos',
                data: [150]
            },
                {
                    name: 'Salidas',
                    data: [120]
                }
            ]
        };
    },
    created() {
        this.$Progress.start();
        store.dispatch('login/getUser');
        axios.get('/controller/graphics/dashboard')
            .then((resp)=>{
                this.data = resp.data;
                this.IOAreachartOptions.title.text = 'Flujo de caja '+resp.data.periodo;
                resp.data.cash_flow.forEach((e)=>{
                    this.IOAreachartOptions.xaxis.categories.push(e.fecha);
                    this.IOAreaSeries[0].data.push(e.saldo.toFixed(2))
                });
                resp.data.stock_linea.forEach((e)=>{
                    this.LineStockSeries.push(e.stock);
                })
                resp.data.ingreso_salida.forEach((e)=>{
                    this.IOSseries[0].data.push(e.ingresos.toFixed(2));
                    this.IOSseries[1].data.push(e.salidas.toFixed(2));
                })
                this.$Progress.finish();
            }).catch((err)=>{
                this.$Progress.fail();
                this.alert.message = err.response.data.message;
                switch (err.response.status){
                    case 401:
                        this.$router.push({name:'login'});
                        break;
                    case 500:
                        this.alert.color = 'error';
                        this.alert.show = true;
                        break;
                }
        });

    },
};
</script>
