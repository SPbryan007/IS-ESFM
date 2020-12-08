<template>
    <div class="">
        <el-alert
            v-if="alert.show"
            :title="'Ooops'"
            :type="'danger'"
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
                <span class="font-weight-bold" style="font-size: 15px"> Reporte Estado de Movimiento de Almacen de Materiales y Suministros</span>
            </template>
        </el-alert>
        <div class="row row justify-content-between mr-1 ml-1  mt-4">
            <div class="pull-left">
                <el-form :inline="true" :rules="rules" :model="consulta" class="demo-form-inline" ref="QueryForm">
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
                    <el-form-item  label="Del" prop="del">
                        <el-date-picker
                            v-model="consulta.del"
                            style="width: 160px"
                            type="date"
                            placeholder="Seleccione dia"
                        >
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="Al" prop="al">
                        <el-date-picker
                            v-model="consulta.al"
                            style="width: 160px"
                            type="date"
                            placeholder="Seleccione un dia"
                            >
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" type="primary" @click="GET_ITEMS_REMA('QueryForm')">Consultar</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="pull-right">
                <el-button
                    type="danger"
                    @click="Print"
                    :disabled="!consulta.periodo || !consulta.del || !consulta.al"
                ><i class="fas fa-file-pdf"></i> Exp. Pdf</el-button>
                <el-button
                    type="success"
                    @click="toExcel"
                    :disabled="!consulta.periodo || !consulta.del || !consulta.al"
                > <i class="fas fa-file-excel"></i> Exp. Excel</el-button>

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
                        <el-form-item label="Formato:">
                            <el-select
                                style="width: 120px"
                                v-model="consulta.formato"
                                @change="refresh()"
                                placeholder="Selecione el formato"
                            >
                                <el-option
                                    v-for="item in [
                                              { value: 'A', label: 'Formato A' },
                                              { value: 'B', label: 'Formato B' },
                                        ]"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                ></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>

                </div>
                <div class="pull-right">
                    <el-form :inline="true" class="demo-form-inline">
                        <el-form-item label="Buscar por:">
                            <el-input
                                placeholder="Articulo, partida"
                                v-model="searchQuery"
                                clearable
                            >
                                <i slot="prefix" class="el-input__icon el-icon-search"></i>
                            </el-input>
                        </el-form-item>
                    </el-form>
                </div>
        </div>
        <table class="table table-bordered text-center" style="background-color: white; font-size:12px">
            <thead>
            <tr>
                <th rowspan="3" scope="col" class="pa">N°</th>
                <th rowspan="3" scope="col" class="pa">Linea</th>
                <th rowspan="3" scope="col" class="pa">Partida</th>
                <th rowspan="3" scope="col" class="pa">Descripción</th>
                <th rowspan="2" scope="col" class="pa">Saldo inicial <br> Al {{ consulta.del | dateformat}}</th>
                <th rowspan="2" scope="col" class="pa">Saldo inicial <br> Al {{ consulta.del | dateformat }}</th>

                <th v-if="consulta.formato == 'B'" colspan="4" scope="col" class="pa">{{ consulta.periodo ? 'Movimiento durante '+findPeriodo(consulta.periodo).nombre : 'Movimiento durante -' }}</th>

                <th rowspan="2" scope="col" class="pa">Saldo final <br> {{ consulta.al | dateformat }}</th>
                <th rowspan="2" scope="col" class="pa">Valor <br> Unitario</th>
                <th rowspan="2" scope="col" class="pa">Saldo final <br> Al {{ consulta.al | dateformat }}</th>


            </tr>
            <tr>

                <th v-if="consulta.formato == 'B'" colspan="2" scope="col" class="pa">Entradas</th>
                <th v-if="consulta.formato == 'B'" colspan="2" scope="col" class="pa">Salidas</th>

            </tr>
            <tr>
                <th scope="col" class="pa">Cantidad</th>
                <th scope="col" class="pa">Bs</th>

                <th v-if="consulta.formato == 'B'" scope="col" class="pa">Cantidad</th>
                <th v-if="consulta.formato == 'B'" scope="col" class="pa">Bs</th>
                <th v-if="consulta.formato == 'B'" scope="col" class="pa">Cantidad</th>
                <th v-if="consulta.formato == 'B'" scope="col" class="pa">Bs</th>

                <th scope="col" class="pa">Cantidad</th>
                <th scope="col" class="pa">Bs</th>
                <th scope="col" class="pa">Bs</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in pageOfItems"  :key="index">
                <th scope="row">{{ index+1 }}</th>
                <td>{{ item.linea  }}</td>
                <td>{{ item.partida  }}</td>
                <td>{{ item.articulo }}</td>
                <td>{{ item.c_inicial }}</td>
                <td>{{ item.s_inicial }}</td>
                <td v-if="consulta.formato == 'B'" >{{ item.c_entrada }}</td>
                <td v-if="consulta.formato == 'B'" >{{ item.s_entrada }}</td>
                <td v-if="consulta.formato == 'B'" >{{ item.c_salida }}</td>
                <td v-if="consulta.formato == 'B'" >{{ item.s_salida }}</td>
                <td>{{ item.c_final }}</td>
                <td>{{ item.precio_u }}</td>
                <td>{{ item.s_final }}</td>
            </tr>
            <tr>
                <td colspan="4" class="font-weight-bold"> TOTALES </td>
                <td class="font-weight-bold"></td>
                <td class="font-weight-bold">{{ totales.ts_inicial }}</td>

                <td v-if="consulta.formato == 'B'" class="font-weight-bold"></td>
                <td v-if="consulta.formato == 'B'" class="font-weight-bold">{{ totales.ts_entrada }}</td>
                <td v-if="consulta.formato == 'B'" class="font-weight-bold"></td>
                <td v-if="consulta.formato == 'B'" class="font-weight-bold">{{ totales.ts_salida }}</td>


                <td class="font-weight-bold"></td>
                <td class="font-weight-bold"></td>
                <td class="font-weight-bold">{{ totales.ts_final }}</td>
            </tr>
            </tbody>
           <!-- <tfoot>
                <tr>
                    <td class="font-weight-bold"></td>
                    <td class="font-weight-bold">1, 2</td>
                    <td class="font-weight-bold"></td>
                    <td class="font-weight-bold">SALDO INICAL AL 01/01/2019</td>
                    <td>155</td>
                    <td colspan="3" class="font-weight-bold">SALDO FINAL AL 31/12/2019</td>
                    <td class="font-weight-bold">{{ totales.ts_inicial }}</td>
                </tr>
                <tr style=": 2px">
                    <td class="font-weight-bold"></td>
                    <td class="font-weight-bold">3</td>
                    <td class="font-weight-bold"></td>
                    <td class="font-weight-bold">SALDO INICAL AL 01/01/2019</td>
                    <td>155</td>
                    <td  colspan="3" class="font-weight-bold" >SALDO FINAL AL 31/12/2019</td>
                    <td class="font-weight-bold">{{ totales.ts_inicial }}</td>
                </tr>
            </tfoot>-->
        </table>
        <div class="row justify-content-center mt-4">
            <el-button @click="details_view = true" >Ver Resumen <i  class="el-icon-view el-icon--right"></i></el-button>
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

        <el-dialog title="Resumen de saldos" :visible.sync="details_view">
            <table class="table table-bordered text-center" style="background-color: white; font-size:12px">
                <tr>
                    <th>LINEA</th>
                    <th>SALDO INICIAL AL {{ consulta.del | dateformat }}</th>
                    <th v-if="consulta.formato == 'B'">INGRESOS</th>
                    <th v-if="consulta.formato == 'B'">SALIDAS</th>
                    <th>SALDO FINAL AL {{ consulta.al | dateformat }}</th>
                </tr>
                <tr>
                    <th class="font-weight-normal">1</th>
                    <th class="font-weight-normal">{{ totales.l1s_inicial }}</th>
                    <th v-if="consulta.formato == 'B'" class="font-weight-normal">{{ totales.l1s_entradas }}</th>
                    <th v-if="consulta.formato == 'B'" class="font-weight-normal">{{ totales.l1s_salidas }}</th>
                    <th class="font-weight-normal">{{ totales.l1s_final }}</th>
                </tr>
                <tr>
                    <th class="font-weight-normal">2</th>
                    <th class="font-weight-normal">{{ totales.l2s_inicial }}</th>
                    <th v-if="consulta.formato == 'B'" class="font-weight-normal">{{ totales.l2s_entradas }}</th>
                    <th v-if="consulta.formato == 'B'" class="font-weight-normal">{{ totales.l2s_salidas }}</th>
                    <th class="font-weight-normal">{{ totales.l2s_final}}</th>
                </tr>
                <tr>
                    <th class="font-weight-normal">3</th>
                    <th class="font-weight-normal">{{ totales.l3s_inicial }}</th>
                    <th v-if="consulta.formato == 'B'" class="font-weight-normal">{{ totales.l3s_entradas }}</th>
                    <th v-if="consulta.formato == 'B'" class="font-weight-normal">{{ totales.l3s_salidas }}</th>
                    <th class="font-weight-normal">{{ totales.l3s_final }}</th>
                </tr>
                <tr>
                    <th class="font-weight-bold">TOTALES</th>
                    <th class="font-weight-bold">{{ totales.ts_inicial }}</th>
                    <th v-if="consulta.formato == 'B'">{{ totales.ts_entrada }}</th>
                    <th v-if="consulta.formato == 'B'">{{ totales.ts_salida }}</th>
                    <th class="font-weight-bold text-primary">{{ totales.ts_final }}</th>
                </tr>
            </table>
        </el-dialog>
    </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import store from "../../store";
import moment from 'moment';
export default {

    data() {
        return {
            details_view:false,
            rules: {
               /* formato: [
                    {
                        required: true,
                        message: "Este campo es obligatorio",
                        trigger: "change",
                    },
                ],*/
                periodo: [
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
              ts_inicial:0,
              ts_entrada:0,
              ts_salida:0,
              ts_final:0,
                l1s_inicial:0,
                l2s_inicial:0,
                l3s_inicial:0,
                l1s_entradas:0,
                l2s_entradas:0,
                l3s_entradas:0,
                l1s_salidas:0,
                l2s_salidas:0,
                l3s_salidas:0,
                l1s_final:0,
                l2s_final:0,
                l3s_final:0,
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
            },
            searchQuery:'',
            loading:false,
        };
    },
    computed: {
        hola(){
            return this.hola;
        },
        PerPage: function() {
            return this.perpage ? parseInt(this.perpage) : 25;
        },
        GET_FILTER_ITEMS : function (){
            let self = this;
            return this.items.filter(function(item) {
                var searchRegex = new RegExp(self.searchQuery, "i");
                return (
                    searchRegex.test(item.partida) ||
                    searchRegex.test(item.articulo)
                );
            });
        },
        ...mapGetters("periodo", ["GET_ITEMS_PERIODO"]),
    },
    methods: {
        refresh() {
            let self = this.$refs;
            setTimeout(() => {
                self.jw.setPage(1);
            }, 0);
        },
        GET_ITEMS_REMA(form) {
            this.$refs[form].validate(valid => {
                this.loading = true;
                if (valid) {
                    this.consulta.al = moment(this.consulta.al).format('YYYY-MM-DD')
                    this.consulta.del = moment(this.consulta.del).format('YYYY-MM-DD 00:00:00')
                    this.$Progress.start();
                    axios.post('/controller/reportes/saldos_almacen/',this.consulta)
                        .then((response) =>{
                            this.items = response.data.data;
                            this.totales.ts_inicial = response.data.ts_inicial;
                            this.totales.ts_entrada = response.data.ts_entrada;
                            this.totales.ts_salida = response.data.ts_salida;
                            this.totales.ts_final = response.data.ts_final;
                            this.totales.l1s_inicial = response.data.l1s_inicial;
                            this.totales.l2s_inicial = response.data.l2s_inicial;
                            this.totales.l3s_inicial = response.data.l3s_inicial;
                            this.totales.l1s_final = response.data.l1s_final;
                            this.totales.l2s_final = response.data.l2s_final;
                            this.totales.l3s_final = response.data.l3s_final;
                            this.totales.l1s_entradas = response.data.l1s_entradas;
                            this.totales.l2s_entradas = response.data.l2s_entradas;
                            this.totales.l3s_entradas = response.data.l3s_entradas;
                            this.totales.l1s_salidas = response.data.l1s_salidas;
                            this.totales.l2s_salidas = response.data.l2s_salidas;
                            this.totales.l3s_salidas = response.data.l3s_salidas;
                            this.$Progress.finish();
                            this.loading = false;
                        })
                        .catch((err) =>{
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
            this.consulta.del = moment(this.consulta.del).format('YYYY-MM-DD 00:00:00')
            this.consulta.al = moment(this.consulta.al).format('YYYY-MM-DD')
            window.open('http://localhost:8000/controller/reportes/movimiento_almacen_print?periodo='+this.consulta.periodo+
                '&del='+ this.consulta.del+
                '&al=' + this.consulta.al+
                '&formato=' + this.consulta.formato,'_blank');
        },
        toExcel(){
            this.consulta.del = moment(this.consulta.del).format('YYYY-MM-DD 00:00:00')
            this.consulta.al = moment(this.consulta.al).format('YYYY-MM-DD')
            axios.post('/controller/reportes/movimiento_almacen_excel',this.consulta, { responseType: 'blob' })
                .then(response => {
                    const blob = new Blob([response.data], { type: 'application/vnd.ms-excel' })
                    const link = document.createElement('a')
                    link.href = URL.createObjectURL(blob)
                    //link.download = 'test'
                    link.setAttribute('download', 'Mov_alm_form_'+this.consulta.formato+'.xlsx');
                    //link.download = 'NIA-'+nro+'-'+moment(date).format("DD/MM/YYYY")
                    link.click()
                    URL.revokeObjectURL(link.href)
                }).catch((err)=>{
                console.log('error excel',err);
            });
        }

    },
    mounted() {
        store.dispatch('periodo/getItems');

    },
};
</script>
<style>
th {
    padding: 7px !important;
}
</style>
