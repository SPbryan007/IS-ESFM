<template>

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
            </div>
        </div>
        <div class="card">
            <div class="card-header border-0">
                <h3 class="card-title">Registro de salida</h3>
                <div class="card-tools"></div>
            </div>
            <div class="card-body">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-md-offset-4">
                        <div class="row">
                            <!--    <el-form class="labeles" ref="tipo_ingreso" :model="data_form" label-width="170px">
                                  <el-form-item label="Tipo de ingreso :" prop="tipo_ingreso">
                                    <el-radio v-model="data_form.tipo_ingreso" label="COMPRA" border>COMPRA</el-radio>
                                    <el-radio v-model="data_form.tipo_ingreso" label="DONACION" border>DONACION</el-radio>
                                  </el-form-item>
                                </el-form>-->
                        </div>
                        <div class="row">
                            <el-form
                                class="labeles"
                                ref="SalidaAddForm"
                                :model="data_form"
                                :rules="rules"
                                label-width="170px"
                            >
                                <div>
                                    <div class="row">
                                        <el-form-item label="Solicitante :" prop="solicitante_id">
                                            <el-select
                                                style="width:340px"
                                                v-model="data_form.solicitante_id"
                                                filterable
                                                placeholder="Seleccione el solicitante"
                                                loading-text="buscando.."
                                                no-match-text="No se encontraron registros"
                                            >
                                                <el-option
                                                    v-for="(item, index) in GET_ITEMS_SOLICITANTE"
                                                    :key="index"
                                                    :label="`${item.funcionario.nombre} ${item.funcionario.apellido}`"
                                                    :value="item.id"
                                                ></el-option>
                                            </el-select>
                                            <router-link :to="{name:'addsolicitante'}">
                                                <el-button type="primary" icon="el-icon-plus"></el-button>
                                            </router-link>
                                        </el-form-item>
                                        <el-form-item
                                            label="Nro de pedido :"
                                            prop="nro_pedido"
                                        >
                                            <el-input v-model="data_form.nro_pedido" style="width:150px"></el-input>
                                        </el-form-item>
                                        <el-form-item label="Fecha de pedido :" prop="fecha_pedido">
                                            <el-date-picker type="date" v-model="data_form.fecha_pedido" :picker-options="pickerOptions"></el-date-picker>
                                        </el-form-item>
                                        <el-form-item label="Autorizado por :" prop="autorizador_id">
                                            <el-select
                                                style="width:340px"
                                                v-model="data_form.autorizador_id"
                                                filterable
                                                placeholder="Seleccione el autorizador"
                                                loading-text="buscando.."
                                                no-match-text="No se encontraron registros"
                                            >
                                                <el-option
                                                    v-for="(item, index) in GET_ITEMS_FUNCIONARIO"
                                                    :key="index"
                                                    :label="`${item.nombre} ${item.apellido}`"
                                                    :value="item.id"
                                                ></el-option>
                                            </el-select>
                                            <router-link :to="{name:'addfuncionario'}">
                                                <el-button type="primary" icon="el-icon-plus"></el-button>
                                            </router-link>
                                        </el-form-item>
                                        <el-form-item label="Verificado por :" prop="verificador_id">
                                            <el-select
                                                style="width:340px"
                                                v-model="data_form.verificador_id"
                                                filterable
                                                placeholder="Seleccione el verificador"
                                                loading-text="buscando.."
                                                no-match-text="No se encontraron registros"
                                            >
                                                <el-option
                                                    v-for="(item, index) in GET_ITEMS_FUNCIONARIO"
                                                    :key="index"
                                                    :label="`${item.nombre} ${item.apellido}`"
                                                    :value="item.id"
                                                ></el-option>
                                            </el-select>
                                            <router-link :to="{name:'addfuncionario'}">
                                                <el-button type="primary" icon="el-icon-plus"></el-button>
                                            </router-link>
                                        </el-form-item>
                                        <el-form-item label="Finalidad :" prop="finalidad">
                                            <el-input type="textarea" style="width:400px" v-model="data_form.finalidad"></el-input>
                                        </el-form-item>
                                        <el-form-item label="Observaciones :" prop="observacion">
                                            <el-input type="textarea" style="width:400px" v-model="data_form.observacion"></el-input>
                                        </el-form-item>
                                        <!-- <el-form-item label="Nro de Compra">
                                          <el-input v-model="lote_form.compra.nro_compra" style="width:170px"></el-input>
                                        </el-form-item>-->

                                    </div>
                                </div>

                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('SalidaAddForm')">
                                        Siguiente
                                        <i class="fas fa-arrow-right"></i>
                                    </el-button>
                                    <el-button @click="cancelForm('SalidaAddForm')">Cancelar</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
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
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
            },
            rules: {
                solicitante_id: [
                    {
                        required: true,
                        message: "Este campo es obligatorio",
                        trigger: "change",
                    },
                ],
                nro_pedido: [
                    { required: true,message: "Este campo es obligatorio", trigger: "blur"},
                ],
                finalidad: [
                    { required: true,message: "Este campo es obligatorio", trigger: "blur"},
                ],
                autorizador_id: [
                    {
                        required: true,message: "Este campo es obligatorio",trigger: "change",
                    },
                ],
                verificador_id: [
                    { required: true, message: "Este campo es obligatorio",trigger: "change", },
                ],
                fecha_pedido:[
                    { type: 'date', required: true, message: 'Este campo es obligatorio.', trigger: 'change' }
                ],
            },
        };
    },
    computed: {
        ...mapState("salida", [
            "data_form",
            "loading_form",
            "alert"
        ]),
        ...mapGetters("proveedor", ["GET_ITEMS_PROVEEDOR"]),
        ...mapGetters("solicitante", ["GET_ITEMS_SOLICITANTE"]),
        ...mapGetters("funcionario", ["GET_ITEMS_FUNCIONARIO"]),
    },
    methods: {
        submitForm(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    store.state.articulo.withTrashed=false;
                    store.dispatch("articulo/getItems");
                    store.dispatch("articulo/getLotes");
                    router.push({ name: "addsalidadetails" });
                }
            });
        },
        cancelForm(formName) {
            this.$refs[formName].resetFields();
            router.push({ name: "salida" });
        },
        goBack() {
            this.$router.go(-1);
        }
    },
    mounted() {
        store.state.proveedor.withTrashed=false;
        store.state.funcionario.withTrashed=false;
        store.state.solicitante.withTrashed=false;
        store.dispatch("proveedor/getItems");
        store.dispatch("funcionario/getItems");
        store.dispatch("solicitante/getItems");
    }
};
</script>

