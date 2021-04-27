<template>
    <div class="">
        <el-alert
            v-if="alert.show"
            :title="'Ooops'"
            :type="'error'"
            :description="alert.message"
            @close="alert.show = false"
            closable
            show-icon
        >
        </el-alert>
        <el-alert
            type="info"
            :closable="false"
            effect="dark">
            <template slot="title">
                <span class="font-weight-bold" style="font-size: 15px"> Kardex individual </span>
            </template>
        </el-alert>
        <div class="row row justify-content-between mr-1 ml-1  mt-4">
            <div class="pull-left">
                <el-form :inline="true" :rules="rules" :model="consulta" class="demo-form-inline" ref="QueryForm">
                    <el-form-item label="Articulo:" prop="articulo" >
                        <el-select
                            style="width: 350px"
                            v-model="consulta.articulo"
                            filterable
                            loading-text="buscando.."
                            no-match-text="No se encontraron registros"
                            placeholder="Seleccione periodo"
                        >
                            <el-option
                                v-for="(item, index) in GET_ITEMS_ARTICULO"
                                :key="index"
                                :label="item.nombre"
                                :value="item.id"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Periodo:" prop="periodo" >
                        <el-select
                            style="width: 180px"
                            v-model="consulta.periodo"
                            filterable
                            loading-text="buscando.."
                            no-match-text="No se encontraron registros"
                            placeholder="Seleccione periodo"
                        >
                            <el-option
                                v-for="(item, index) in GET_ITEMS_PERIODO"
                                :key="index"
                                :label="item.nombre"
                                :value="item.id"
                            ></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item>
                        <el-button :loading="loading" type="primary" @click="GET_ITEMS_REGE('QueryForm')">Consultar</el-button>
                    </el-form-item>
                </el-form>
            </div>

            <div class="pull-right">
                <el-button
                    type="danger"
                    @click="Print"
                    :disabled="!consulta.periodo || !consulta.articulo"
                ><i class="fas fa-file-pdf"></i> Exp. Pdf</el-button>
                <el-button
                    type="success"
                    @click="toExcel"
                    :disabled="!consulta.periodo || !consulta.articulo"
                    :loading="loading_excel"
                > <i class="fas fa-file-excel"></i> Exp. Excel</el-button>

            </div>
        </div>
        <div class="row invoice-info">
            <div class="col-md-6 invoice-col">
                <dl class="row">
                    <dt class="col-md-5">PERIODO:</dt>
                    <dd class="col-md-7"> {{ consulta.periodo ? findPeriodo(consulta.periodo).nombre : ""  }}</dd>
                    <dt class="col-md-5">ARTICULO:</dt>
                    <dd class="col-md-7"> {{ datos.articulo }} </dd>
                    <dt class="col-md-5">CODIGO:</dt>
                    <dd class="col-md-7"> {{ datos.codigo }} </dd>
                </dl>
            </div>
            <div class="col-md-6 invoice-col">
                <dl class="row">
                    <dt class="col-md-5">PARTIDA:</dt>
                    <dd class="col-md-7">{{ datos.partida_codigo+' - '+datos.partida }}</dd>
                    <dt class="col-md-5">LINEA:</dt>
                    <dd class="col-md-7">{{ datos.linea }}</dd>
                </dl>
            </div>
        </div>

        <div class="row justify-content-between ml-1" style="margin-bottom:-20px">
            <div class="pull-left">
                <el-form :inline="true" class="demo-form-inline" >
                    <el-form-item label="Mostrar:">
                        <el-select
                            style="width: 70px"
                            v-model="perpage"
                            @change="refresh()"
                        >
                            <el-option
                                v-for="item in [
                                                  { value: 5, label: '5' },
                                                  { value: 10, label: '10' },
                                                  { value: 25, label: '25' },
                                                  { value: 50, label: '50' },
                                                  { value: 100, label: '100' },
                                            ]"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-switch
                            v-model="consulta.conSaldo"
                            active-text="todos"
                            inactive-text="solo con saldo"
                        >
                        </el-switch>
                    </el-form-item>
                </el-form>

            </div>
            <div class="pull-right">
                <el-form :inline="true" class="demo-form-inline">
                    <el-form-item label="Buscar por:">
                        <el-input
                            placeholder="No Ingreso, Salida, proveedor, unidad, fecha"
                            v-model="searchQuery"
                            clearable
                        >
                            <i slot="prefix" class="el-input__icon el-icon-search"></i>
                        </el-input>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div style="width:100%; overflow-x: scroll; overflow-y:hidden;" class="scrolling">
            <table class="table table-bordered text-center" style="background-color: white; font-size:12px;">
                <thead>
                <tr>
                    <th rowspan="2" scope="col" class="pa" style="min-width: 40px">N°</th>
                    <th rowspan="2" scope="col" class="pa" style="min-width: 50px">FECHA</th>
                    <th rowspan="2" scope="col" class="pa" style="min-width: 200px">DESCRIPCION</th>
                    <th rowspan="2" scope="col" class="pa">NI</th>
                    <th rowspan="2" scope="col" class="pa">NS</th>
                    <th rowspan="2" scope="col" class="pa">MEDIDA</th>
                    <th rowspan="2" scope="col" class="pa" style="min-width: 150px">UNIDAD/PROVEEDOR</th>
                    <th rowspan="2" scope="col" class="pa">VALOR <br> UNITARIO</th>
                    <th rowspan="1" scope="col" colspan="2" class="pa">INGRESOS</th>
                    <th rowspan="1" scope="col" colspan="2" class="pa">SALIDAS</th>
                    <th rowspan="1" scope="col" colspan="2" class="pa">SALDO</th>



                </tr>

                <tr>
                    <th scope="col" class="pa">CANT.</th>
                    <th scope="col" class="pa">C.TOTAL</th>

                    <th scope="col" class="pa">CANT.</th>
                    <th scope="col" class="pa">C.TOTAL</th>

                    <th scope="col" class="pa">CANT.</th>
                    <th scope="col" class="pa">C.TOTAL</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in pageOfItems"  :key="index">
                    <th scope="row">{{ index+1 }}</th>
                    <td>{{ item.fecha | dateformat }}</td>
                    <td>{{ getDescription(item) }}</td>
                    <td>{{ item.ni == '000'? '-' : item.ni }}</td>
                    <td>{{ item.ni == '000'? '-' : item.ns }}</td>
                    <td>{{ item.medida }}</td>
                    <td>{{ getUnidadProveedor(item) }}</td>
                    <td>{{ (item.precio_u).toFixed(2) }}</td>
                    <td>{{ (item.c_ingreso).toFixed(2) }}</td>
                    <td>{{ (item.s_ingreso).toFixed(2) }}</td>
                    <td>{{ (item.c_salida).toFixed(2) }}</td>
                    <td>{{ (item.s_salida).toFixed(2) }}</td>
                    <td>{{ (item.c_final).toFixed(2) }}</td>
                    <td>{{ (item.s_final).toFixed(2) }}</td>

                </tr>
                                                <tr>
                                                    <td colspan="8" class="font-weight-bold"> TOTALES </td>
                                                    <td colspan="1" class="font-weight-bold"></td>
                                                    <td class="font-weight-bold">{{ (totales.ts_entrada).toFixed(2) }}</td>
                                                    <td colspan="1" class="font-weight-bold"></td>
                                                    <td class="font-weight-bold">{{ (totales.ts_salida).toFixed(2) }}</td>
                                                    <td colspan="1" class="font-weight-bold"></td>
                                                    <td class="font-weight-bold">{{ (totales.ts_final).toFixed(2) }}</td>
                                                </tr>
                </tbody>
            </table>
        </div>

        <div class="row justify-content-center mt-4">
            <el-button @click="onClickRE" >Resumen Estadistico <i  class="el-icon-view el-icon--right"></i></el-button>
        </div>
        <div class="row justify-content-center mt-4">
            <jw-pagination
                ref="jw"
                :pageSize="PerPage"
                :items="GET_FILTER_ITEMS"
                :labels="labels"
                @changePage="onChangePage"
            ></jw-pagination>
        </div>
        <br><br>

        <el-dialog :title="consulta.periodo? 'Resumen Estadistico '+findPeriodo(consulta.periodo).nombre : 'Resumen Estadistico -' " :visible.sync="vista_re" width="1250px">
            <div class="row">
                <div class="col-md-6">
                    <apexchart :key="reload" type="area" height="350"  :options="IOAreachartOptions" :series="IOAreaSeries"></apexchart>
                </div>
                <div class="col-md-6">
                    <apexchart :key="reload" type="bar" height="350" :options="HisOptions" :series="HisSeries"></apexchart>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import es from 'apexcharts/dist/locales/es.json';
import store from "../../store";
import moment from 'moment';
export default {
    data() {
        return {
            datos:{
              periodo:"",
              articulo:"",
              codigo:"",
              partida:"",
              partida_codigo:"",
              linea:"",
            },
            reload:0,
            HisSeries: [{
                name: 'Stock',
                data: []
            }],
            HisOptions: {
                chart: {
                    type: 'bar',
                    height: 350
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
                title: {
                    text: 'Histograma de existencias en almacén',
                    align: 'left'
                },
                subtitle: {
                    text: 'Expresado en cantidades',
                    align: 'left'
                },
                xaxis: {
                    categories: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                },
                yaxis: {
                    title: {
                        text: 'Existencias'
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return  val;
                        }
                    }
                }
            },
            IOAreaSeries: [{
                name:'Stock',
                data:[]
            }],
            IOAreachartOptions: {
                chart: {
                    id:'realtime',
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
                    text: 'Expresado en cantidades',
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
            details_view:false,
            vista_re:false,
            rules: {
                periodo: [
                    {
                        required: true,
                        message: "Este campo es obligatorio",
                        trigger: "change",
                    },
                ],
                articulo:[
                    {
                        required: true,
                        message: "Este campo es obligatorio",
                        trigger: "change",
                    },
                ],
                del: [
                    {
                        required: true,
                        message: "Este campo es obligatorio",
                        trigger: "change"
                    }
                ],
                al: [
                    {
                        required: true,
                        message: "Este campo es obligatorio",
                        trigger: "change"
                    }
                ],
            },
            alert:{
                message:null,
                show: false,
            },
            items:[],
            totales:{
                ts_entrada:0,
                ts_salida:0,
                ts_final:0,
            },
            self: null,
            pageOfItems: [],
            sizePerPage: 10,
            perpage: 5,
            labels: {
                first: "<<",
                last: ">>",
                previous: "anterior",
                next: "siguiente"
            },
            consulta:{
                formato:'A',
                del:null,
                al:null,
                periodo:null,
                articulo: null,
                conSaldo:false
            },
            searchQuery:'',
            loading:false,
            loading_excel:false,
        };
    },
    computed: {
        PerPage: function() {
            return this.perpage ? parseInt(this.perpage) : 25;
        },
        GET_FILTER_ITEMS : function (){
            let self = this;
            return this.items.filter(function(item) {
                var searchRegex = new RegExp(self.searchQuery, "i");
                if(item.proveedor){
                    return (
                        searchRegex.test(item.proveedor) ||
                        searchRegex.test(item.medida) ||
                        searchRegex.test(item.ni) ||
                        searchRegex.test(item.fecha)
                    );
                }
                if(item.unidad){
                    return (
                        searchRegex.test(item.unidad) ||
                        searchRegex.test(item.medida) ||
                        searchRegex.test(item.ns) ||
                        searchRegex.test(item.fecha)
                    );
                }
                return (
                    searchRegex.test(item.medida) ||
                    searchRegex.test(item.ni) ||
                    searchRegex.test(item.fecha)
                );

            });
        },
        ...mapGetters("periodo", ["GET_ITEMS_PERIODO"]),
        ...mapGetters("articulo", ["GET_ITEMS_ARTICULO"]),
    },
    methods: {
        getUnidadProveedor(item){
          if(item.proveedor){
              return item.proveedor;
          }
          if(item.unidad){
              return item.unidad;
          }
        },
        getDescription(item){
            if(item.ni){
                if(item.ni == '000'){
                    return 'Inventario inicial'
                }else{
                    return 'Ingreso al almacen'
                }
            }
            if(item.ns){
                return 'Salida del almacen';
            }
        },
        refresh() {
            let self = this.$refs;
            setTimeout(() => {
                self.jw.setPage(1);
            }, 0);
        },
        onClickRE(){
            this.vista_re = true;
            this.reload += 1;
        },
        GET_ITEMS_REGE(form) {
            this.HisSeries[0].data = [];
            this.IOAreachartOptions.xaxis.categories = [];
            this.IOAreaSeries[0].data = [];
            this.$refs[form].validate(valid => {
                this.loading = true;
                if (valid) {
                    this.$Progress.start();
                    axios.post('/controller/reportes/kardex_individual',this.consulta)
                        .then((response) =>{
                            this.items = response.data.data;
                            this.datos = {
                                articulo: response.data.data[0].articulo,
                                codigo:response.data.data[0].codigo,
                                partida:response.data.data[0].partida,
                                partida_codigo:response.data.data[0].partida_codigo,
                                linea:response.data.data[0].linea
                            };
                            this.totales.ts_entrada = response.data.ts_entrada;
                            this.totales.ts_salida = response.data.ts_salida;
                            this.totales.ts_final = response.data.ts_final;
                            response.data.flow.forEach((e)=>{
                                this.IOAreachartOptions.xaxis.categories.push(e.fecha);
                                this.IOAreaSeries[0].data.push(e.stock.toFixed(2))
                            });
                            response.data.hist.forEach(e =>{
                                this.HisSeries[0].data.push(e.stock);
                            })
                            this.reload += 1;
                            this.$Progress.finish();
                            this.loading = false;
                        })
                        .catch((err) =>{
                            this.alert.message = err.message;
                            this.alert.show = true;
                            this.loading = false;
                            this.$Progress.fail();
                        })
                } else {
                    this.loading = false;
                    return false;
                }
            });

        },
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        },
        findPeriodo(id) {
            const items = store.getters["periodo/GET_ITEMS_PERIODO"];
            return items.find((item) => item.id === id);
        },
        Print(){
            window.open('http://almacen.esfm/controller/reportes/kardex_individual_print?periodo='+this.consulta.periodo+'&conSaldo='+this.consulta.conSaldo+'&articulo='+this.consulta.articulo,
                '_blank');
        },
        toExcel(){
            this.$Progress.start();
            this.loading_excel=true;
            axios.post('/controller/reportes/kardex_individual_excel',this.consulta, { responseType: 'blob' })
                .then(response => {

                    const blob = new Blob([response.data], { type: 'application/vnd.ms-excel' })
                    const link = document.createElement('a')
                    link.href = URL.createObjectURL(blob)
                    //link.download = 'test'
                    link.setAttribute('download', 'Reporte_individual_'+moment(this.consulta.del).format('DD/MM/YYYY')+'_'+moment(this.consulta.al).format('DD-MM-YYYY')+'.xlsx');
                    //link.download = 'NIA-'+nro+'-'+moment(date).format("DD/MM/YYYY")
                    link.click()
                    URL.revokeObjectURL(link.href)
                    this.loading_excel=false;
                    this.$Progress.finish();
                }).catch((err)=>{
                this.alert.message = err;
                this.alert.show = true;
                this.loading_excel=false;
                this.$Progress.fail();
                console.log('error excel',err.response.data.message);
            });
        }

    },
    mounted() {
        store.dispatch('login/getUser');
        store.state.periodo.withTrashed=true;
        store.dispatch('periodo/getItems');
        store.dispatch('articulo/getItems');

    },
};
</script>
<style>
th {
    padding: 7px !important;
}

.scrolling::-webkit-scrollbar-track
{  height: 2px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
}

.scrolling::-webkit-scrollbar
{
    height: 7px;
    width: 2px;
    background-color: #2d373c21;
}

.scrolling::-webkit-scrollbar-thumb
{
    height: 10px;
    background-color: #0000001c;
    border: 2px solid #2d373c21;
}
</style>
