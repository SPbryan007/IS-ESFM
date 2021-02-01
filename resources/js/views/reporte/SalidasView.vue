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
                <span class="font-weight-bold" style="font-size: 15px"> Reportes de Salidas</span>
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
                            v-model="consulta.al"
                            style="width: 160px"
                            type="date"
                            format="dd/MM/yyyy"
                            value-format="yyyy-MM-dd"
                            placeholder="Seleccione un dia"
                        >
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" type="primary" @click="GET_ITEMS('QueryForm')">Consultar</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="pull-right">
                <!--                <el-button-->
                <!--                    type="danger"-->
                <!--                    @click="Print"-->
                <!--                    :disabled="!consulta.periodo || !consulta.del || !consulta.al"-->
                <!--                ><i class="fas fa-file-pdf"></i> Exp. Pdf</el-button>-->
                <!--                <el-button-->
                <!--                    type="success"-->
                <!--                    @click="toExcel"-->
                <!--                    :loading="loading_excel"-->
                <!--                    :disabled="!consulta.periodo || !consulta.del || !consulta.al"-->
                <!--                > <i class="fas fa-file-excel"></i> Exp. Excel</el-button>-->

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
                    <!--                    <el-form-item>-->
                    <!--                        <el-switch-->
                    <!--                            v-model="consulta.conSaldo"-->
                    <!--                            active-text="todos"-->
                    <!--                            inactive-text="solo con saldo"-->
                    <!--                        >-->
                    <!--                        </el-switch>-->
                    <!--                    </el-form-item>-->
                </el-form>

            </div>
            <div class="pull-right">
                <el-form :inline="true" class="demo-form-inline">
                    <el-form-item label="Buscar por:">
                        <el-input
                            style="width: 250px"
                            placeholder="N° Salida,Solicitante,Usuario"
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
                <th scope="col" class="pa">N°</th>
                <th scope="col" class="pa">Nro Salida</th>
                <th scope="col" class="pa">Fecha</th>
                <th scope="col" class="pa">Solicitante</th>
                <th scope="col" class="pa">Unidad</th>
                <th scope="col" class="pa">Nro pedido</th>
                <th scope="col" class="pa">Finalidad</th>
                <th scope="col" class="pa">Expedido por</th>
                <th scope="col" class="pa">Operación</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in pageOfItems"  :key="index">
                <th scope="row">{{ index+1 }}</th>
                <td><b>NSA</b>{{ item.nro_salida  }}</td>
                <td>{{ item.created_at | dateformat }}</td>
                <td>{{ item.solicitante.funcionario.nombre+' '+item.solicitante.funcionario.apellido }}</td>
                <td>{{ item.solicitante.unidad.nombre }}</td>
                <td>{{ item.nro_pedido }}</td>
                <td>{{ item.finalidad }}</td>
                <td>{{ item.usuario.funcionario.nombre+' '+item.usuario.funcionario.apellido }}</td>
                <td>
                    <router-link
                        v-on:click.native="$store.dispatch('salida/getDetalleById',item.id)"
                        :to="{ name: 'reporteviewdetailsalida',params:{id:item.id } }"
                    >
                        <el-button
                            size="mini"
                            type="warning"
                            icon="el-icon-view"
                        >Ver</el-button>
                    </router-link>
                </td>
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
            <jw-pagination
                ref="jw"
                :pageSize="PerPage"
                :items="GET_FILTER_ITEMS"
                :labels="labels"
                @changePage="onChangePage"
            ></jw-pagination>
        </div>
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
                del:null,
                al:null,
                periodo:null,
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
                    return searchRegex.test('NSA'+item.nro_salida) ||
                        searchRegex.test(item.solicitante.funcionario.nombre+' '+item.solicitante.funcionario.apellido) ||
                        searchRegex.test(item.usuario.funcionario.nombre+' '+item.usuario.funcionario.apellido);
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
        GET_ITEMS(form) {
            this.$refs[form].validate(valid => {
                this.loading = true;
                if (valid) {
                    this.$Progress.start();
                    console.log(this.consulta);
                    axios.post('/controller/salida/query',this.consulta)
                        .then((response) =>{
                            this.items = response.data;
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
</style>
