<template>
    <div class>
        <div class="col-md-12">
            <el-alert
                v-if="alert.show"
                :title="alert.title"
                :type="alert.color"
                :description="alert.message"
                @close="alert.show = false"
                show-icon
                closable
            >
            </el-alert>
            <div class="row justify-content-between mb-4  mr-1 ml-1  mt-4">
                <div class="pull-lef">
                    <el-page-header  @back="goBack" content="Salidas" class="mt-2"></el-page-header>
                </div>
                <div class="pull-right">
                    <el-button type="info" size="" @click="dialogAddDetails = true" icon="el-icon-plus">Agregar</el-button>
                </div>
            </div>
            <div class="card">
                <div class="card-header border-0">
                    <h3 class="card-title">Registro de salida | detalles</h3>
                    <div class="card-tools"></div>
                </div>
                <div class="card-body">
                    <el-dialog title="Agregar articulos" :visible.sync="dialogAddDetails" width="60%">
                        <div class="row justify-content-center mt-4">
                            <el-input
                                style="width:660px"
                                placeholder="Filtrar por codigo, articulo"
                                v-model="$store.state.salida.searchQueryAddDialog"
                                clearable
                            >
                                <i slot="prefix" class="el-input__icon el-icon-search"></i>
                            </el-input>&nbsp&nbsp
                            <router-link :to="{ name: 'additem' }">
                                <el-button type="primary" icon="el-icon-plus"></el-button>
                            </router-link>
                        </div>

                        <el-table :data="pageOfItems">
                            <el-table-column property="codigo" label="Codigo" width="90"></el-table-column>
                            <el-table-column property="nombre" label="Articulo" width="370"></el-table-column>
                            <el-table-column property="stock" label="Stock" width="120"></el-table-column>
                            <el-table-column property="saldo" label="Saldo" width="120"></el-table-column>
                            <el-table-column>
                                <template slot-scope="scope">
                                    <el-button
                                        v-if="CHECKED(scope.row.id)"
                                        type="success"
                                        size="mini"
                                        icon="el-icon-check"
                                    >Añadido</el-button>
                                    <el-button
                                        v-if="!CHECKED(scope.row.id)"
                                        :disabled="scope.row.stock == 0"
                                        type="info"
                                        size="mini"
                                        @click="OnclickAddDialog(scope.$index,scope.row)"
                                        icon="el-icon-plus"
                                    >Añadir</el-button>
                                    <router-link :to="{ name: 'addingreso' }">
                                        <el-button
                                            type="primary"
                                            size="mini"
                                        ><i class="fas fa-plus"></i></el-button>
                                    </router-link>

                                </template>
                            </el-table-column>
                        </el-table>

                        <span slot="footer" class="dialog-footer">
                           <jw-pagination
                               ref="jw"
                               :pageSize="perpage"
                               :items="GET_FILTER_ITEMS_DETAILS"
                               :labels="labels"
                               @changePage="onChangePage"
                           ></jw-pagination>
                        </span>
                    </el-dialog>
                    <div class="row invoice-info">
                        <div class="col-md-4 invoice-col">
                            <dl class="row">
                                <dt class="col-md-4">Solicitante:</dt>
                                <dd class="col-md-8">{{ findSolicitante(data_form.solicitante_id).funcionario.nombre +' '+ findSolicitante(data_form.solicitante_id).funcionario.apellido}}</dd>
                            </dl>
                        </div>
                        <div class="col-md-5 invoice-col">
                            <dl class="row">
                                <dt class="col-md-3">Finalidad:</dt>
                                <dd class="col-md-9">{{ data_form.finalidad }}</dd>
                            </dl>
                        </div>
                        <div class="col-md-3">
                            <dl class="row">
                                <dt class="col-md-5">N° pedido:</dt>
                                <dd class="col-md-7">{{ data_form.nro_pedido }}</dd>
                            </dl>
                        </div>
                        <!-- /.col -->
                    </div>

                    <el-table :data="GET_ITEMS_DETALLE_SALIDA" style="width: 100%">
                        <el-table-column type="index" label="N°" width="60"></el-table-column>
                        <el-table-column label="Código" width="130" prop="codigo" sortable>
                            <template slot-scope="scope">
                                {{ findItem(scope.row.articulo).codigo }}
                            </template>
                        </el-table-column>
                        <el-table-column label="Articulo" width="600" prop="articulo" sortable>
                            <template slot-scope="scope">
                                {{ scope.row.articulo_nombre }}
                            </template>
                        </el-table-column>
<!--                        <el-table-column label="Medida" width="200" prop="medida" sortable>-->
<!--                            <template slot-scope="scope">-->
<!--                                {{ scope.row.unidad_medida }}-->
<!--                            </template>-->
<!--                        </el-table-column>-->
                        <el-table-column label="Cantidad" width="200" prop="cantidad" sortable>
                            <template slot-scope="scope">
                                <el-input-number size="mini" v-model="scope.row.cantidad"  :precision="2" :step="1"  :min="1" :max="scope.row.stock"></el-input-number>
                            </template>
                        </el-table-column>
                        <el-table-column label>
                            <template slot-scope="scope">
                                <el-button
                                    size="mini"
                                    type="danger"
                                    @click="DELETE_DETALLE_SALIDA(scope.row.articulo)"
                                    icon="el-icon-close"
                                    circle
                                ></el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="row justify-content-end mb-4  mr-1 ml-1  mt-4">
                        <el-button :disabled="data_form.detalle_salida.length == 0" type="primary" size="" @click="onRegister()" icon="el-icon-plus">Registar</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import store from "../../store/index";
import { router } from "../../routes";
export default {
    data() {
        return {
            pageOfItems: [],
            sizePerPage: 5  ,
            perpage: 5,
            labels: {
                first: "<<",
                last: ">>",
                previous: "anterior",
                next: "siguiente"
            },
            dialogAddDetails:false,
            detalles_form: {
                articulo: null,
                cantidad: 1,
                precio: 0,
            },
        };
    },
    computed: {
        ...mapState("salida", [
            "data_form",
            "loading_form",
            "alert"
        ]),
        ...mapGetters("salida", [
            "GET_ITEMS_DETALLE_SALIDA",
            "GET_TOTAL_DETALLE_SALIDAS",
            "GET_FILTER_ITEMS_DETAILS",
            "CHECKED"
        ]),
        ...mapGetters("articulo", ["GET_ITEMS_ARTICULO","GET_LOTES"]),
    },
    methods: {
        ...mapMutations("salida", ["DELETE_DETALLE_SALIDA"]),
        findItem(id) {
            const items = store.getters["articulo/GET_ITEMS_ARTICULO"];
            return items.find((item) => item.id === id);
        },
        findSolicitante(id) {
            const items = store.getters["solicitante/GET_ITEMS_SOLICITANTE"];
            return items.find((item) => item.id === id);
        },
        OnclickAddDialog(index,row){
            store.commit("salida/ADD_DETALLE_SALIDA",row);
        },
        onRegister() {
            this.$confirm(`¿ Esta seguro de registrar la salida ?`, {
                confirmButtonText: "Sí, registrar",
                cancelButtonText: "Cancelar",
                type: "warning",
            })
                .then(() => {
                    store.dispatch("salida/addItem", {
                        message: this.$message,
                        progress: this.$Progress,
                    });
                })
                .catch(() => {
                    return null;
                });
        },
        cancelForm(formName) {
            this.$refs[formName].resetFields();
            router.push({ name: "salida" });
        },
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        },
        goBack() {
            this.$router.go(-1);
        }
    },
    // mounted() {
    //     store.dispatch("articulo/getItems");
    //     store.dispatch("articulo/getLotes");
    // },
    // created(){
    //
    // }
};
</script>
