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
                <el-page-header  @back="goBack" content="Articulos" class="mt-2"></el-page-header>
            </div>
            <div class="pull-right">
            </div>
        </div>
        <div class="card">
            <div class="card-header border-0">
                <h3 class="card-title">Editar artículo</h3>
                <div class="card-tools"></div>
            </div>
            <div class="card-body">
                <el-form
                    class="labeles"
                    :model="data_form"
                    :rules="rules"
                    ref="ArticuloEditForm"
                    label-width="180px"
                >

                    <el-form-item label="Nombre :" prop="nombre">
                        <el-input style="width:500px" v-model="data_form.nombre"></el-input>
                    </el-form-item>
                    <el-form-item label="Linea :" prop="linea">
                        <el-select
                            style="width:340px"
                            v-model="data_form.linea"
                            filterable
                            placeholder="Seleccione la Linea"
                            loading-text="buscando.."
                            no-match-text="No se encontraron registros"
                        >
                            <el-option
                                v-for="(item, index) in [{label:'Linea 1',value:'1'},{label:'Linea 2',value:'2'},{label:'Linea 3',value:'3'}]"
                                :key="index"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Partida :" prop="partida_id">
                        <el-select
                            style="width:340px"
                            v-model="data_form.partida_id"
                            filterable
                            placeholder="Seleccione la partida"
                            loading-text="buscando.."
                            no-match-text="No se encontraron registros"
                        >
                            <el-option
                                v-for="(item, index) in GET_ITEMS_PARTIDA"
                                :key="index"
                                :label="`${item.codigo} | ${item.nombre}`"
                                :value="item.id"
                            ></el-option>

                            <el-option
                                v-if="!findPartida(data_form.partida_id)"
                                :label="`${data_form.partida_codigo} | ${data_form.partida_nombre}`"
                                :value="data_form.partida_id"
                            ></el-option>

                        </el-select>
                        <router-link :to="{name:'addpartida'}">
                            <el-button type="primary" icon="el-icon-plus"></el-button>
                        </router-link>
                    </el-form-item>
<!--                    <el-form-item label="Unidad de medida :" prop="unidad_medida_id">-->
<!--                        <el-select-->
<!--                            style="width:340px"-->
<!--                            v-model="data_form.unidad_medida_id"-->
<!--                            filterable-->
<!--                            placeholder="Seleccione la unidad de medida"-->
<!--                            loading-text="buscando.."-->
<!--                            no-match-text="No se encontraron registros"-->
<!--                        >-->
<!--                            <el-option-->
<!--                                v-for="(item, index) in GET_ITEMS_UNIDAD_MEDIDA"-->
<!--                                :key="index"-->
<!--                                :label="`${item.sigla} | ${item.nombre}`"-->
<!--                                :value="item.id"-->
<!--                            ></el-option>-->
<!--                            <el-option-->
<!--                                v-if="!findMedida(data_form.unidad_medida_id)"-->
<!--                                :label="`${data_form.um_sigla} | ${data_form.um_nombre}`"-->
<!--                                :value="data_form.unidad_medida_id"-->
<!--                            ></el-option>-->
<!--                        </el-select>-->
<!--                        <router-link :to="{name:'addunidad_medida'}">-->
<!--                            <el-button type="primary" icon="el-icon-plus"></el-button>-->
<!--                        </router-link>-->
<!--                    </el-form-item>-->

                    <el-form-item>
                        <el-button
                            type="primary"
                            :loading="loading_form"
                            @click="submitForm('ArticuloEditForm')"
                        >
                            Registar
                            <i class="fas fa-save"></i>
                        </el-button>
                        <el-button @click="cancelForm('ArticuloEditForm')">Cancelar</el-button>
                    </el-form-item>
                </el-form>
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
            rules: {
                nombre: [
                    {
                        required: true,
                        message: "Este campo es obligatorio",
                        trigger: "blur"
                    },
                    { min: 3, message: "Debe tener mas de 3 letras", trigger: "blur" },
                    { max: 155, message: "Debe tener menos de 155 caracteres ", trigger: "blur" }
                ],
                linea: [
                    {
                        required: true,
                        message: "Debe seleccionar una linea",
                        trigger: "change"
                    }
                ],
                partida_id: [
                    {
                        required: true,
                        message: "Este campo es obligatorio.",
                        trigger: "change"
                    }
                ],
                // unidad_medida_id: [
                //     {
                //         required: true,
                //         message: "Este campo es obligatorio.",
                //         trigger: "change"
                //     }
                // ]
            }
        };
    },
    computed: {
        ...mapState("articulo", [
            "data_form",
            "alert",
            "loading_form"
        ]),
        ...mapGetters("partida", ["GET_ITEMS_PARTIDA"]),
        ...mapGetters("unidad_medida", ["GET_ITEMS_UNIDAD_MEDIDA"])
    },
    methods: {
        submitForm(form) {
            this.$refs[form].validate(valid => {
                if (valid) {
                    store.dispatch("articulo/editItem", {
                        message: this.$message,
                        progress: this.$Progress,
                        id: this.$route.params.id
                    });
                    //router.go(-1);
                } else {
                    return false;
                }
            });
        },
        cancelForm(formName) {
            this.$refs[formName].resetFields();
            this.$router.go(-1);
        },
        goBack() {
            this.$router.go(-1);
        },
        findPartida(id) {
            const items = store.getters["partida/GET_ITEMS_PARTIDA"];
            return items.find((item) => item.id === id);
        },
        findMedida(id) {
            const items = store.getters["unidad_medida/GET_ITEMS_UNIDAD_MEDIDA"];
            return items.find((item) => item.id === id);
        },
    },
    mounted() {
        store.dispatch("partida/getItems");
        store.dispatch("unidad_medida/getItems");
    },
    created() {

    },
};
</script>
