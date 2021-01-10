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
                <span class="font-weight-bold" style="font-size: 15px"> Reporte General</span>
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
                            format="dd/MM/yyyy"
                            value-format="yyyy-MM-dd"
                            placeholder="Seleccione dia"
                        >
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="Al" prop="al">
                        <el-date-picker
                            format="dd/MM/yyyy"
                            value-format="yyyy-MM-dd"
                            v-model="consulta.al"
                            style="width: 160px"
                            type="date"
                            placeholder="Seleccione un dia"
                        >
                        </el-date-picker>
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
                    :disabled="!consulta.periodo || !consulta.del || !consulta.al"
                ><i class="fas fa-file-pdf"></i> Exp. Pdf</el-button>
                <el-button
                    type="success"
                    @click="toExcel"
                    :disabled="!consulta.periodo || !consulta.del || !consulta.al"
                    :loading="loading_excel"
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
        <div style="width:100%; overflow-x: scroll; overflow-y:hidden;" class="scrolling">
            <table class="table table-bordered text-center" style="background-color: white; font-size:12px;">
                <thead>
                <tr>
                    <th rowspan="2" scope="col" class="pa" style="min-width: 40px">N°</th>
                    <th rowspan="2" scope="col" class="pa" style="min-width: 40px">Linea</th>
                    <th rowspan="2" scope="col" class="pa" style="min-width: 80px">Código</th>
                    <th rowspan="2" scope="col" class="pa" style="min-width: 300px">Producto</th>
                    <th rowspan="2" scope="col" class="pa">NI</th>
                    <th rowspan="2" scope="col" class="pa">NS</th>
                    <th rowspan="2" scope="col" class="pa">Fecha</th>
                    <th rowspan="2" scope="col" class="pa">Medida</th>
                    <th rowspan="2" scope="col" class="pa" style="min-width: 150px">Unidad</th>
                    <th rowspan="1" scope="col" colspan="3" class="pa">Saldo inicial</th>
                    <th rowspan="1" scope="col" colspan="3" class="pa">Ingresos</th>
                    <th rowspan="1" scope="col" colspan="3" class="pa">Salidas</th>
                    <th rowspan="1" scope="col" colspan="3" class="pa">Saldo Final</th>


                </tr>

                <tr>
                    <th scope="col" class="pa">Cant.</th>
                    <th scope="col" class="pa">P.U</th>
                    <th scope="col" class="pa">C.Total</th>

                    <th scope="col" class="pa">Cant.</th>
                    <th scope="col" class="pa">P.U</th>
                    <th scope="col" class="pa">C.Total</th>

                    <th scope="col" class="pa">Cant.</th>
                    <th scope="col" class="pa">P.U</th>
                    <th scope="col" class="pa">C.Total</th>

                    <th scope="col" class="pa">Cant.</th>
                    <th scope="col" class="pa">P.U</th>
                    <th scope="col" class="pa">C.Total</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in pageOfItems"  :key="index">
                    <th scope="row">{{ index+1 }}</th>
                    <td>{{ item.linea  }}</td>
                    <td>{{ item.codigo }}</td>
                    <td>{{ item.articulo }}</td>
                    <td>{{ item.ni == '000'? '-' : item.ni }}</td>
                    <td>{{ item.ni == '000'? '-' : item.ns }}</td>
                    <td>{{ item.fecha | dateformat }}</td>
                    <td>{{ item.medida }}</td>
                    <td>{{ item.unidad }}</td>
                    <td>{{ (item.c_inicial).toFixed(2) }}</td>
                    <td>{{ (item.precio_u).toFixed(2) }}</td>
                    <td>{{ (item.s_inicial).toFixed(2) }}</td>
                    <td>{{ (item.c_ingreso).toFixed(2) }}</td>
                    <td>{{ (item.precio_u).toFixed(2)  }}</td>
                    <td>{{ (item.s_ingreso).toFixed(2) }}</td>
                    <td>{{ (item.c_salida).toFixed(2) }}</td>
                    <td>{{ (item.precio_u).toFixed(2) }}</td>
                    <td>{{ (item.s_salida).toFixed(2) }}</td>
                    <td>{{ (item.c_final).toFixed(2) }}</td>
                    <td>{{ (item.precio_u).toFixed(2) }}</td>
                    <td>{{ (item.s_final).toFixed(2) }}</td>
                </tr>
                            <tr>
                                <td colspan="4" class="font-weight-bold"> TOTALES </td>
                                <td colspan="5" class="font-weight-bold"></td>
                                <td colspan="2" class="font-weight-bold"></td>
                                <td class="font-weight-bold">{{ (totales.ts_inicial).toFixed(2) }}</td>

                                <td colspan="2" class="font-weight-bold"></td>
                                <td class="font-weight-bold">{{ (totales.ts_entrada).toFixed(2) }}</td>
                                <td colspan="2" class="font-weight-bold"></td>
                                <td class="font-weight-bold">{{ (totales.ts_salida).toFixed(2) }}</td>
                                <td colspan="2" class="font-weight-bold"></td>
                                <td class="font-weight-bold">{{ (totales.ts_final).toFixed(2) }}</td>
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
        </div>

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
                    <th>INGRESOS</th>
                    <th>SALIDAS</th>
                    <th>SALDO FINAL AL {{ consulta.al | dateformat }}</th>
                </tr>
                <tr>
                    <th class="font-weight-normal">1</th>
                    <th class="font-weight-normal">{{ (totales.l1s_inicial).toFixed(2) }}</th>
                    <th class="font-weight-normal">{{ (totales.l1s_entradas).toFixed(2) }}</th>
                    <th class="font-weight-normal">{{ (totales.l1s_salidas).toFixed(2) }}</th>
                    <th class="font-weight-normal">{{ (totales.l1s_final).toFixed(2) }}</th>
                </tr>
                <tr>
                    <th class="font-weight-normal">2</th>
                    <th class="font-weight-normal">{{ (totales.l2s_inicial).toFixed(2) }}</th>
                    <th class="font-weight-normal">{{ (totales.l2s_entradas).toFixed(2) }}</th>
                    <th class="font-weight-normal">{{ (totales.l2s_salidas).toFixed(2) }}</th>
                    <th class="font-weight-normal">{{ (totales.l2s_final).toFixed(2)}}</th>
                </tr>
                <tr>
                    <th class="font-weight-normal">3</th>
                    <th class="font-weight-normal">{{ (totales.l3s_inicial).toFixed(2) }}</th>
                    <th class="font-weight-normal">{{ (totales.l3s_entradas).toFixed(2) }}</th>
                    <th class="font-weight-normal">{{ (totales.l3s_salidas).toFixed(2) }}</th>
                    <th class="font-weight-normal">{{ (totales.l3s_final).toFixed(2) }}</th>
                </tr>
                <tr>
                    <th class="font-weight-bold">TOTALES</th>
                    <th class="font-weight-bold">{{ (totales.ts_inicial).toFixed(2) }}</th>
                    <th >{{ (totales.ts_entrada).toFixed(2) }}</th>
                    <th >{{ (totales.ts_salida).toFixed(2) }}</th>
                    <th class="font-weight-bold text-primary">{{ (totales.ts_final).toFixed(2) }}</th>
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
                conSaldo:false
            },
            searchQuery:'',
            loading:false,
            loading_excel:false,
        };
    },
    computed: {
        hola: function(){
            return Date.now();
        },
        PerPage: function() {
            return this.perpage ? parseInt(this.perpage) : 25;
        },
        GET_FILTER_ITEMS : function (){
            let self = this;
            return this.items.filter(function(item) {
                var searchRegex = new RegExp(self.searchQuery, "i");
                return (
                    searchRegex.test(item.codigo) ||
                    searchRegex.test(item.articulo) ||
                    searchRegex.test(item.unidad) ||
                    searchRegex.test(item.medida)
                );
            });
        },
        ...mapGetters("periodo", ["GET_ITEMS_PERIODO"]),
    },
    methods: {

        OnChangePeriodo(){

        },
        refresh() {
            let self = this.$refs;
            setTimeout(() => {
                self.jw.setPage(1);
            }, 0);
        },
        GET_ITEMS_REGE(form) {
            this.$refs[form].validate(valid => {
                this.loading = true;
                if (valid) {
                    this.$Progress.start();
                    axios.post('/controller/reportes/kardex/',this.consulta)
                        .then((response) =>{
                            this.items = response.data.data;
                            this.totales.ts_inicial = response.data.ts_inicial;
                            this.totales.ts_entrada = response.data.ts_ingreso;
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
            window.open('http://localhost:8000/controller/reportes/kardex_print?periodo='+this.consulta.periodo+
                '&del='+ this.consulta.del+
                '&al=' + this.consulta.al+'&conSaldo='+this.consulta.conSaldo,
                '_blank');
        },
        toExcel(){
            this.$Progress.start();
            this.loading_excel=true;
            axios.post('/controller/reportes/kardex_excel',this.consulta, { responseType: 'blob' })
                .then(response => {

                    const blob = new Blob([response.data], { type: 'application/vnd.ms-excel' })
                    const link = document.createElement('a')
                    link.href = URL.createObjectURL(blob)
                    //link.download = 'test'
                    link.setAttribute('download', 'Reporte_general_'+moment(this.consulta.del).format('DD/MM/YYYY')+'_'+moment(this.consulta.al).format('DD-MM-YYYY')+'.xlsx');
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
                console.log('error excel',err);
            });
        }

    },
    mounted() {
        store.dispatch('login/getUser');
        store.state.periodo.withTrashed=true;
        store.dispatch('periodo/getItems');

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
