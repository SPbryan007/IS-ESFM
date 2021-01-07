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
                    <el-page-header  @back="goBack" content="Apertura de nuevo inventario" class="mt-2"></el-page-header>
                </div>
                <div class="pull-right">
                    <el-button type="info" size="" @click="dialogAddDetails = true" icon="el-icon-plus">Agregar</el-button>
<!--                    <el-button v-loading.fullscreen.lock="loading_form" :disabled="(data_form.detalle_apertura.length == 0) || !data_form.nombre || !data_form.fecha_inicio" type="primary" size="" @click="onRegister()" icon="el-icon-clock">Iniciar</el-button>-->
                    <el-button
                        :disabled="(data_form.detalle_apertura.length == 0) || !data_form.nombre || !data_form.fecha_inicio"
                        @click="StartPeriodo" type="primary"
                        v-loading.fullscreen.lock="loading_form"
                        element-loading-text="Iniciando..."
                    >
                        Iniciar
                        <i class="fas fa-clock"></i>

                    </el-button>
                </div>
            </div>
            <table-apertura></table-apertura>
            <el-dialog title="Agregar articulos" :visible.sync="dialogAddDetails" width="60%">
                <div class="row justify-content-center">
                    <el-input
                        style="width:660px"
                        placeholder="Filtrar por codigo, articulo"
                        v-model="$store.state.periodo.searchQueryAddDialog"
                        clearable
                    >
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>&nbsp&nbsp
                    <router-link :to="{ name: 'additem' }">
                        <el-button type="primary" icon="el-icon-plus"></el-button>
                    </router-link>
                </div>

                <el-table :data="pageOfItems"  :default-sort="{prop: 'codigo', order: 'ascending'}">
                    <el-dialog :title="detalles_form.articulo_nombre" :visible.sync="dialogFormVisible" append-to-body>
                        <el-form :model="detalles_form" label-width="140px" ref="AddDetailsForm" :rules="rules">
                            <el-form-item label="Unidad de medida:" prop="unidad_medida">
                                <el-select
                                    style="width:340px"
                                    v-model="detalles_form.unidad_medida"
                                    filterable
                                    placeholder="Seleccione la unidad de medida"
                                    loading-text="buscando.."
                                    no-match-text="No se encontraron registros"
                                >
                                    <el-option
                                        v-for="(item, index) in GET_ITEMS_UNIDAD_MEDIDA"
                                        :key="index"
                                        :label="`${item.sigla} | ${item.nombre}`"
                                        :value="item.id"
                                    ></el-option>
                                </el-select>
                                <router-link :to="{name:'addunidad_medida'}">
                                    <el-button type="primary" icon="el-icon-plus"></el-button>
                                </router-link>
                            </el-form-item>
                            <el-form-item label="Marca:" prop="marca">
                                <el-input  style="width:250px" v-model="detalles_form.marca" ></el-input>
                            </el-form-item>
                            <el-form-item label="Cantidad:" >
                                <el-input-number v-model="detalles_form.cantidad"  :precision="2" :step="1"  :min="0.1" ></el-input-number>
                            </el-form-item>
                            <el-form-item label="Sub Total:" >
                                <el-input-number  v-model="detalles_form.total"  :precision="2" :step="1"  :min="1" ></el-input-number>
                            </el-form-item>
                            <el-form-item label="Precio U:" >
                                {{ isNaN(detalles_form.total/detalles_form.cantidad) ? 0 : (detalles_form.total/detalles_form.cantidad).toFixed(2) }} Bs.
                            </el-form-item>

                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="OnClickCancelForm('AddDetailsForm')">Cancel</el-button>
                            <el-button type="primary" @click="OnClickAddForm('AddDetailsForm')">Agregar</el-button>
                          </span>
                    </el-dialog>
                    <el-table-column type="index" width="40" label="N°"></el-table-column>
                    <el-table-column property="codigo" label="Codigo" width="120" sortable></el-table-column>
                    <el-table-column property="nombre" label="Articulo" width="600" sortable></el-table-column>
                    <el-table-column>
                        <template slot-scope="scope">
                            <el-button
                                type="info"
                                size="mini"
                                @click="OnclickAddDialog(scope.row)"
                                icon="el-icon-plus"
                            >Añadir</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="row justify-content-center mt-4">
                    <jw-pagination
                        ref="jw"
                        :pageSize="perpage"
                        :items="GET_FILTER_ARTICULO_DETALLE_APERTURA"
                        :labels="labels"
                        @changePage="onChangePage"
                    ></jw-pagination>
                </div>

            </el-dialog>
            <div class="row justify-content-end mb-4  mr-1 ml-1  mt-4 ">
                <h5>
                    Total: Bs
                    <strong>{{ GET_TOTAL_DETALLE_APERTURA }}</strong>
                </h5>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import store from "../../store/index";
import TableComponent from "./TableComponent";
import { router } from "../../routes";
export default {
    components:{
        'table-apertura': TableComponent,
    },
    data() {
        return {
            formLabelWidth: '120px',
            dialogFormVisible: false,
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
                codigo:null,
                marca:null,
                unidad_medida:null,
                articulo:null,
                articulo_nombre:null,
                cantidad:1,
                total: 1,
            },
            rules: {
                unidad_medida: [
                    {
                        required: true,
                        message: "Debe seleccionar una unidad de medida",
                        trigger: "change",
                    },
                ],
                marca: [
                    {
                        required: false,
                        trigger: "blur",
                    },
                    { max: 155, message: "Debe tener menos de 155 caracteres", trigger: "blur" }
                ],
            },
        };
    },
    computed: {
        ...mapState("periodo", [
            "data_form",
            "loading_form",
            "alert"
        ]),
        ...mapGetters("articulo", ["GET_ITEMS_ARTICULO"]),
        ...mapGetters("periodo", ["GET_FILTER_ARTICULO_DETALLE_APERTURA","GET_TOTAL_DETALLE_APERTURA"]),
        ...mapGetters("unidad_medida", ["GET_ITEMS_UNIDAD_MEDIDA"])
    },
    methods: {
        OnClickAddForm(form){
            this.$refs[form].validate((valid) => {
                if (valid) {
                    this.dialogFormVisible = false;
                    store.commit("periodo/ADD_DETALLE_APERTURA",this.detalles_form);
                    this.$refs[form].resetFields();
                }
            });

        },
        OnClickCancelForm(form){
            this.$refs[form].resetFields();
            this.dialogFormVisible = false;
        },
        OnclickAddDialog(row){
            this.detalles_form.articulo = row.id;
            this.detalles_form.articulo_nombre = row.nombre;
            this.detalles_form.codigo = row.codigo;
            this.dialogFormVisible = true;
        },

        ...mapMutations("periodo", ["DELETE_DETALLE_APERTURA"]),
        findItem(id) {
            const items = store.getters["articulo/GET_ITEMS_ARTICULO"];
            return items.find((item) => item.id === id);
        },
        findMedida(id) {
            const items = store.getters["unidad_medida/GET_ITEMS_UNIDAD_MEDIDA"];
            return items.find((item) => item.id === id);
        },
        StartPeriodo() {
            this.$confirm(
                `¿ Esta seguro de iniciar una nueva apertura de inventario ?, No se podra revertir el proceso despues de iniciar`,
                "Advertencia",
                {
                    confirmButtonText: "Si iniciar",
                    cancelButtonText: "Cancelar",
                    type: "warning"
                }
            )
                .then(() => {
                    store.state.periodo.data_form.tipo_inventario  = 'APERTURA_INVENTARIO';
                    store.dispatch("periodo/startPeriodo", {
                        message: this.$message,
                    });
                })
                .catch(() => {
                    return null;
                });
        },
        cancelForm(formName) {
            this.$refs[formName].resetFields();
            router.push({ name: "periodo" });
        },
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        },
        goBack() {
            this.$router.go(-1);
        }
    },
    mounted() {
        store.state.articulo.withTrashed=false;
        store.state.unidad_medida.withTrashed=false;
        store.dispatch("articulo/getItems");
        store.dispatch("articulo/getLotes");
        store.dispatch("unidad_medida/getItems");
    },
};
</script>
