<template>
    <div>
        <div v-if="Object.entries(this.$store.state.periodo.current).length != 0"  class="col-md-12">
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
            <div class="row justify-content-between mb-4 mr-1 ml-1   mt-4">
                <div class="pull-lef">
                    <h3>Salidas <i v-if="loading_table" class="el-icon-loading" style="font-size: 1.3rem;"></i></h3>
                </div>
                <div class="pull-right">
                    <router-link v-if="$store.getters['login/getUserLogged'].rol == 'ADMINISTRADOR'"  v-on:click.native="CLEAR_FORM" :to="{ name: 'addsalida' }">
                        <el-button type="primary">
                            Nuevo
                            <i class="fas fa-plus"></i>
                        </el-button>
                    </router-link>
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
                                v-model="$store.state.salida.withTrashed"
                                active-text="todos"
                                inactive-text="solo activos"
                                @change="$store.dispatch('salida/getItems')"
                            >
                            </el-switch>
                        </el-form-item>
                    </el-form>

                </div>
                <div class="pull-right">
                    <el-form :inline="true" class="demo-form-inline">
                        <el-form-item label="Buscar por:">
                            <el-input
                                placeholder="N° salida, solicitante, fecha salida"
                                v-model="$store.state.salida.searchQuery"
                                clearable
                            >
                                <i slot="prefix" class="el-input__icon el-icon-search"></i>
                            </el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <el-table
                        :fit="true"
                        stripe
                        :data="pageOfItems"
                        :default-sort="{prop: 'id', order: 'descending'}"
                        style="width: 100%"
                    >
                        <!--     <el-table-column type="expand">
                                 <template slot-scope="props">
                                     <p><b>Partida :</b> {{ props.row.nombre }}  {{ props.row.partida.codigo }}</p>
                                     <p><b>Unidad de medida :</b> {{ `${props.row.unidad_medida.nombre} (${props.row.unidad_medida.sigla})` }}</p>
                                 </template>
                             </el-table-column>-->
                        <el-table-column  prop="nro_salida" label="N° Salida"  width="115"  sortable>
                            <template slot-scope="scope">
                                <b>NS</b>{{ scope.row.nro_salida }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="solicitante" label="Solicitante" width="340" sortable>
                            <template slot-scope="scope">
                                {{ scope.row.solicitante.funcionario.nombre +' '+ scope.row.solicitante.funcionario.apellido }}
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="unidad.nombre"
                            label="Unidad solicitante"
                            :filters="GET_FILTER_TAG_UNIDAD"
                            :filter-method="FilterUnidad"
                            filter-placement="bottom-end"
                            width="200"
                        >
                            <template slot-scope="scope">
                                <el-tag type="warning" disable-transitions>
                                    <strong>{{scope.row.solicitante.unidad.nombre}}</strong>
                                </el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column prop="created_at" label="Fecha salida" width="130" sortable>
                            <template slot-scope="scope">
                                {{ scope.row.created_at | dateformat }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="total" label="Total" sortable>
                            <template slot-scope="scope">
                                <b>Bs: </b> {{ scope.row.total }}
                            </template>
                        </el-table-column>
                        <!--<el-table-column prop="deleted_at" label="Estado"sortable>
                            <template slot-scope="scope">
                                {{ scope.row.deleted_at ?  'Inactivo' : 'Activo' }}
                            </template>
                        </el-table-column>-->
                        <el-table-column label="Operacion" width="200" >
                            <template slot-scope="scope">

                                <router-link

                                    :disabled="!scope.row.deleted_at ? false : true"
                                    v-on:click.native="$store.dispatch('salida/getDetalleById',scope.row.id)"
                                    :to="{ name: 'viewdetailsalida',params:{id:scope.row.id } }"
                                >
                                    <el-button

                                        size="mini"
                                        type="default"
                                        icon="el-icon-view"
                                    >Ver</el-button>
                                    <el-tag
                                        v-if="scope.row.deleted_at"
                                    >
                                        <strong>ANULADO</strong>
                                    </el-tag>
                                </router-link>
                                <el-button
                                    v-if="!scope.row.deleted_at"
                                    :disabled="scope.row.deleted_at || $store.getters['login/getUserLogged'].rol != 'ADMINISTRADOR'"
                                    :loading="loading_form && scope.$index == self"
                                    type="danger"
                                    size="mini"
                                    @click="OnClickDelete(scope.$index, scope.row)"
                                >Anular</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
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
        </div>
        <div v-if="Object.entries(this.$store.state.periodo.current).length === 0" class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 col-md-offset-4">
                <el-alert
                    title="No se encontró un periodo contable vigente."
                    type="info"
                    description="No existe un periodo contable en vigencia, para poder realizar salidas debe iniciar un periodo contable."
                    show-icon
                >
                </el-alert>
            </div>

        </div>
    </div>

</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import store from "../../store";
export default {

    data() {
        return {
            self: null,
            pageOfItems: [],
            sizePerPage: 10,
            perpage: 5,
            labels: {
                first: "<<",
                last: ">>",
                previous: "anterior",
                next: "siguiente"
            }
        };
    },
    computed: {
        ...mapState("salida", [
            "items",
            "loading_form",
            "loading_table",
            "alert",
            "data_form"
        ]),
        PerPage: function() {
            return this.perpage ? parseInt(this.perpage) : 25;
        },
        ...mapGetters("salida", ["GET_FILTER_ITEMS"]),
        ...mapGetters("unidad",["GET_FILTER_TAG_UNIDAD"])
    },
    methods: {
        ...mapMutations("salida",["CLEAR_FORM"]),
        refresh() {
            let self = this.$refs;
            setTimeout(() => {
                self.jw.setPage(1);
            }, 0);
        },
        FilterUnidad(value, row) {
            return row.solicitante.unidad.id === value;
        },
        OnClickDelete(index, row) {
            this.$confirm(
                `¿ Esta seguro que desea anular la salida Nro. ${row.nro_salida} ?`,
                "Advertencia",
                {
                    confirmButtonText:'Sí Anular',
                    cancelButtonText: "Cancelar",
                    type: "warning"
                }
            )
                .then(() => {
                    this.self = index;
                    store.dispatch("salida/deleteItem", {
                        id: row.id,
                        message: this.$message,
                        progress: this.$Progress
                    });
                })
                .catch(() => {
                    return null;
                });
        },
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        },
    },
    mounted() {
        store.dispatch('login/getUser');
        store.dispatch('periodo/verify');
        store.dispatch("salida/getItems");
        store.dispatch("unidad/getItems");
    },
};
</script>

<style>
.table th,
.table td {
    padding: 0.5rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}

</style>
