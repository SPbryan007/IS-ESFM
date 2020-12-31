<template>
    <div>
<!--        <el-alert-->
<!--            v-if="alert.show"-->
<!--            :title="alert.title"-->
<!--            :type="alert.color"-->
<!--            :description="alert.message"-->
<!--            @close="alert.show = false"-->
<!--            closable-->
<!--            show-icon-->
<!--        >-->
<!--        </el-alert>-->

<!--        <div class="row justify-content-between mb-4 mr-1 ml-1   mt-4">-->
<!--            <div class="pull-lef">-->
<!--                <h3>Usuarios  <i v-if="" class="el-icon-loading" style="font-size: 1.3rem;"></i></h3>-->
<!--            </div>-->
<!--            <div class="pull-right">-->

<!--            </div>-->
<!--        </div>-->
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
                    <el-form-item>
                        <el-switch
                            v-model="$store.state.usuario.withTrashed"
                            active-text="todos"
                            inactive-text="solo activos"
                            @change="$store.dispatch('usuario/getItems')"
                        >
                        </el-switch>
                    </el-form-item>
                </el-form>

            </div>
            <div class="pull-right">
                <el-form :inline="true" class="demo-form-inline">
                    <el-form-item label="Buscar por:">
                        <el-input
                            placeholder="Nombre"
                            v-model="$store.state.usuario.searchQuery"
                            clearable
                        >
                            <i slot="prefix" class="el-input__icon el-icon-search"></i>
                        </el-input>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <el-tabs type="border-card">
            <el-tab-pane>
                <span slot="label"><i class="el-icon-date"></i> Lotes</span>
                <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                    <el-table-column type="index" label="N°" width="60"></el-table-column>

                    <el-table-column
                        prop="name"
                        label="Stock Inicial"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="Saldo Incial">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="Stock"
                        width="180">
                        <template slot-scope="scope">

                            <el-progress :color="[
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]" :text-inside="true" :stroke-width="16" :percentage="100" ></el-progress>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="Saldo">
                    </el-table-column>

                </el-table>
            </el-tab-pane>
            <el-tab-pane label="Graficos">
                <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
            </el-tab-pane>
            <el-tab-pane label="Role">Role</el-tab-pane>
            <el-tab-pane label="Task">Task</el-tab-pane>
        </el-tabs>
        <div>
<!--            <div class="card">-->
<!--                <div class="card-header border-0">-->

<!--                </div>-->
<!--                <div class="card-body">-->
<!--                    <el-table-->
<!--                        :data="tableData"-->
<!--                        stripe-->
<!--                        style="width: 100%">-->
<!--                        <el-table-column type="index" label="N°" width="60"></el-table-column>-->

<!--                        <el-table-column-->
<!--                            prop="name"-->
<!--                            label="Stock Inicial"-->
<!--                            width="180">-->
<!--                        </el-table-column>-->
<!--                        <el-table-column-->
<!--                            prop="address"-->
<!--                            label="Saldo Incial">-->
<!--                        </el-table-column>-->
<!--                        <el-table-column-->
<!--                            prop="name"-->
<!--                            label="Stock"-->
<!--                            width="180">-->
<!--                            <template slot-scope="scope">-->

<!--                                <el-progress :color="[-->
<!--          {color: '#f56c6c', percentage: 20},-->
<!--          {color: '#e6a23c', percentage: 40},-->
<!--          {color: '#5cb87a', percentage: 60},-->
<!--          {color: '#1989fa', percentage: 80},-->
<!--          {color: '#6f7ad3', percentage: 100}-->
<!--        ]" :text-inside="true" :stroke-width="16" :percentage="79" ></el-progress>-->
<!--                            </template>-->
<!--                        </el-table-column>-->
<!--                        <el-table-column-->
<!--                            prop="address"-->
<!--                            label="Saldo">-->
<!--                        </el-table-column>-->

<!--                    </el-table>-->
<!--                </div>-->
<!--            </div>-->
        </div>
<!--        <div class="row">-->
<!--            <div class=" col-md-8 card">-->
<!--                <div class="card-header border-0">-->
<!--                    <div class="d-flex justify-content-between">-->
<!--                        <h3 class="card-title">PAPEL MEMBRETADO T/CARTA</h3>-->
<!--                        <a href="javascript:void(0);">View Report</a>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="card-body">-->

<!--                    <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>-->

<!--                </div>-->
<!--            </div>-->
<!--            <div class="col-md-4">-->
<!--                <div class="card">-->
<!--                    <div class="card-body">-->
<!--                        <el-progress type="circle" :percentage="25"></el-progress>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->


    </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import store from "../../store";
export default {
    data() {
        return {
            series: [{
                name: "STOCK ",
                data: [55,20,70,20,90]
            }],
            chartOptions: {
                chart: {
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
                    text: 'Expresado en Unidades',
                    align: 'left'
                },
                labels: ['12-10-2020','12-12-2020','12-15-2020','12-16-2020','12-20-2020'],
                xaxis: {
                    type: 'datetime',
                    lang:'es'
                },
                yaxis: {
                    opposite: true
                },
                legend: {
                    horizontalAlign: 'left'
                }
            },
            tableData: [{
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }, {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }, {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }, {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }]
        }
    },
};

</script>

