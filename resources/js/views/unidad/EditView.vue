<template>
    <div class="col-md-12">
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
        <div class="row justify-content-between mb-4  mr-1 ml-1  ">
            <div class="pull-lef">
                <el-page-header  @back="goBack" content="Unidad" class="mt-2"></el-page-header>
            </div>
            <div class="pull-right">
            </div>
        </div>
        <div class="card">
            <div class="card-header border-0">
                <h3 class="card-title">Registrar nueva unidad</h3>
                <div class="card-tools"></div>
            </div>
            <div class="card-body">
                <el-form
                    class="labeles"
                    :model="data_form"
                    :rules="rules"
                    ref="UnidadEditForm"
                    label-width="180px"
                >
                    <el-form-item label="Nombre de unidad :" prop="nombre">
                        <el-input style="width:300px" v-model="data_form.nombre"></el-input>
                    </el-form-item>
                    <el-form-item label="Responsable :" prop="funcionario_id">
                        <el-select

                            style="width:400px"
                            v-model="data_form.funcionario_id"
                            filterable
                            placeholder="Seleccione el funcionario"
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
                    <el-form-item>
                        <el-button type="primary" :loading="loading_form" @click="submitForm('UnidadEditForm')">
                            Guardar
                            <i class="fas fa-save"></i>
                        </el-button>
                        <el-button @click="cancelForm('UnidadEditForm')">Cancelar</el-button>
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
                        trigger: "blur",
                    },
                    { min: 3, message: "Debe tener mas de 3 letras", trigger: "blur" },
                ],
                funcionario_id: [
                    {
                        required: true,
                        message: "Este campo es obligatorio",
                        trigger: "change",
                    },
                ],
            },
        };
    },
    computed: {
        ...mapState("unidad", [
            "data_form",
            "loading_form",
            "alert"
        ]),
        ...mapGetters("funcionario",["GET_ITEMS_FUNCIONARIO"])
    },
    methods: {
        submitForm(form) {
            this.$refs[form].validate(valid => {
                if (valid) {
                    store.dispatch("unidad/editItem", {
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
        }
    },
    created() {
        store.dispatch('login/getUser');
        store.state.funcionario.withTrashed = false;
        store.dispatch("funcionario/getItems");
    }
};
</script>
