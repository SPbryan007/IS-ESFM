<template>
    <div>

        <div class="row">
            <div class="card">
                <div class="card-header border-0">
                    <div class="d-flex justify-content-between">
                        <h3 class="card-title">Lote #2</h3>
                        <a href="javascript:void(0);">View Report</a>
                    </div>
                </div>
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h3 class="card-title">Precio Unitario</h3>
                    </div>
                    <apexchart type="radialBar" height="200" :options="chartOptions" :series="series"></apexchart>
<!--                    <apexchart type="radialBar" height="150"  :options="chartOptions" :series="series"></apexchart>-->
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header border-0">
                <div class="d-flex justify-content-between">
                    <h3 class="card-title">Online Store Visitors</h3>
                    <a href="javascript:void(0);">View Report</a>
                </div>
            </div>
            <div class="card-body">

                <div class="d-flex">
                    <p class="d-flex flex-column">
                        <span class="text-bold text-lg">820</span>
                        <span>Visitors Over Time</span>
                    </p>
                    <p class="ml-auto d-flex flex-column text-right">
                    <span class="text-success">
                      <i class="fas fa-arrow-up"></i> 12.5%
                    </span>
                        <span class="text-muted">Since last week</span>
                    </p>
                </div>
                <!-- /.d-flex -->

                <div class="position-relative mb-4"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                    <canvas id="visitors-chart" height="250" width="1017" class="chartjs-render-monitor" style="display: block; height: 200px; width: 814px;"></canvas>
                </div>

                <div class="d-flex flex-row justify-content-end">
                  <span class="mr-2">
                    <i class="fas fa-square text-primary"></i> This Week
                  </span>

                    <span>
                    <i class="fas fa-square text-gray"></i> Last Week
                  </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import store from "../../store";
export default {
    data() {
        return {
            series: [70],
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        }
                    },
                },
                labels: ['Disponibles'],
            },
            //
            // series: [100],
            // chartOptions: {
            //     chart: {
            //         height: 350,
            //         type: 'radialBar',
            //         toolbar: {
            //             show: true
            //         }
            //     },
            //     plotOptions: {
            //         radialBar: {
            //             startAngle: -135,
            //             endAngle: 225,
            //             hollow: {
            //                 margin: 0,
            //                 size: '70%',
            //                 background: '#fff',
            //                 image: undefined,
            //                 imageOffsetX: 0,
            //                 imageOffsetY: 0,
            //                 position: 'front',
            //                 dropShadow: {
            //                     enabled: true,
            //                     top: 3,
            //                     left: 0,
            //                     blur: 4,
            //                     opacity: 0.24
            //                 }
            //             },
            //             track: {
            //                 background: '#fff',
            //                 strokeWidth: '67%',
            //                 margin: 0, // margin is in pixels
            //                 dropShadow: {
            //                     enabled: true,
            //                     top: -3,
            //                     left: 0,
            //                     blur: 4,
            //                     opacity: 0.35
            //                 }
            //             },
            //
            //             dataLabels: {
            //                 show: true,
            //                 name: {
            //                     offsetY: -10,
            //                     show: true,
            //                     color: '#888',
            //                     fontSize: '10px'
            //                 },
            //                 value: {
            //                     formatter: function (val) {
            //                         return parseInt(val);
            //                     },
            //                     color: '#111',
            //                     fontSize: '20px',
            //                     show: true,
            //                 }
            //             }
            //         }
            //     },
            //     fill: {
            //         type: 'gradient',
            //         gradient: {
            //             shade: 'dark',
            //             type: 'horizontal',
            //             shadeIntensity: 0.5,
            //             gradientToColors: ['#ABE5A1'],
            //             inverseColors: true,
            //             opacityFrom: 1,
            //             opacityTo: 1,
            //             stops: [0, 100]
            //         }
            //     },
            //     stroke: {
            //         lineCap: 'round'
            //     },
            //     labels: ['Disponibles'],
            // }
        }
    },
};

</script>

