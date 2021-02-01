<template>
    <div class="col-md-12">
        <div v-if="this.$store.state.periodo.current"  >

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
                    <h3>Ingresos <i v-if="loading_table" class="el-icon-loading" style="font-size: 1.3rem;"></i></h3>
                </div>
                <div class="pull-right">
                    <router-link v-if="$store.getters['login/getUserLogged'].rol == 'ADMINISTRADOR'"  v-on:click.native="CLEAR_FORM" :to="{ name: 'addingreso' }">
                        <el-button type="primary" >
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
                                v-model="$store.state.ingreso.withTrashed"
                                active-text="todos"
                                inactive-text="solo activos"
                                @change="$store.dispatch('ingreso/getItems')"
                            >
                            </el-switch>
                        </el-form-item>
                    </el-form>

                </div>
                <div class="pull-right">
                    <el-form :inline="true" class="demo-form-inline">
                        <el-form-item label="Buscar por:">
                            <el-input
                                placeholder="N° ingreso, proveedor, fecha ingreso"
                                v-model="$store.state.ingreso.searchQuery"
                                clearable
                            >
                                <i slot="prefix" class="el-input__icon el-icon-search"></i>
                            </el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <div class="card">
<!--                <div class="card-header border-0">-->
<!--                    Lista de ingresos-->
<!--                  -->
<!--                </div>-->
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
                        <el-table-column  prop="nro_ingreso" label="N° Ingreso"  width="115"  sortable>
                            <template slot-scope="scope">
                                    <b>NS</b>{{ scope.row.nro_ingreso }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="proveedor.nombre" label="Proveedor" width="380" sortable>
                            <template slot-scope="scope">
                                {{ !scope.row.proveedor ? '-' : scope.row.proveedor.nombre }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="tipo_ingreso" label="Tipo" width="120" sortable>
                            <template slot-scope="scope">
                                <el-tag
                                    v-if="scope.row.tipo_ingreso != 'INV_INICIAL'"
                                    :type="scope.row.tipo_ingreso == 'Compra' ?  'info' : 'warning'"
                                    effect="dark">
                                    {{ scope.row.tipo_ingreso == 'Compra' ?  'COMPRA' : 'DONACIÓN' }}
                                </el-tag>
                                <el-tag
                                    v-if="scope.row.tipo_ingreso == 'INV_INICIAL'"
                                    :type="'success'"
                                    effect="dark">
                                    INV. INICIAL
                                </el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column prop="created_at" label="Fecha ingreso" width="140"sortable>
                            <template slot-scope="scope">
                                {{ scope.row.created_at | dateformat }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="total" label="Total" width="140"  sortable>
                            <template slot-scope="scope">
                                <b>Bs: </b> {{ scope.row.total }}
                            </template>
                        </el-table-column>
                        <!--<el-table-column prop="deleted_at" label="Estado"sortable>
                            <template slot-scope="scope">
                                {{ scope.row.deleted_at ?  'Inactivo' : 'Activo' }}
                            </template>
                        </el-table-column>-->
                        <el-table-column label="Operacion" >
                            <template slot-scope="scope">

                                <router-link
                                    :disabled="!scope.row.deleted_at ? false : true"
                                    v-on:click.native="$store.dispatch('ingreso/getDetalleById',scope.row.id)"
                                    :to="{ name: 'viewdetailingreso',params:{id:scope.row.id } }"
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
                                    :disabled="scope.row.deleted_at ||  scope.row.tipo_ingreso == 'INV_INICIAL' || $store.getters['login/getUserLogged'].rol != 'ADMINISTRADOR'"
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
        <div v-if="!this.$store.state.periodo.current" class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 col-md-offset-4">
                <el-alert
                    title="No se encontró un periodo contable vigente."
                    type="info"
                    description="No existe un periodo contable en vigencia, para poder realizar ingresos debe iniciar un periodo contable."
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
        ...mapState("ingreso", [
            "items",
            "loading_form",
            "loading_table",
            "alert",
            "data_form"
        ]),
        PerPage: function() {
            return this.perpage ? parseInt(this.perpage) : 25;
        },
        ...mapGetters("ingreso", ["GET_FILTER_ITEMS"]),
    },
    methods: {
        ...mapMutations("ingreso",["CLEAR_FORM"]),
        refresh() {
            let self = this.$refs;
            setTimeout(() => {
                self.jw.setPage(1);
            }, 0);
        },
        OnClickDelete(index, row) {
            this.$confirm(
                `¿ Esta seguro que desea anular el ingreso Nro. ${row.nro_ingreso} ?`,
                "Advertencia",
                {
                    confirmButtonText:'Sí Anular',
                    cancelButtonText: "Cancelar",
                    type: "warning"
                }
            )
                .then(() => {
                    this.self = index;
                    store.dispatch("ingreso/deleteItem", {
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
        goBack() {
            this.$router.go(-1);
        }
    },
    mounted() {
        store.dispatch('login/getUser');
        store.dispatch('periodo/verify');
        store.dispatch("ingreso/getItems");
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
