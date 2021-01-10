<template>
    <!--  <div class="col-md-10 offset-md-1">-->

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
                <el-page-header  @back="goBack" content="Partida presupuestaria" class="mt-2"></el-page-header>
            </div>
            <div class="pull-right">
            </div>
        </div>
        <div class="card">
            <div class="card-header border-0">
                <h3 class="card-title">Registrar partida presupuestaria</h3>
                <div class="card-tools"></div>
            </div>
            <div class="card-body">
                <el-form
                    class="labeles"
                    :model="data_form"
                    :rules="rules"
                    ref="PartidaAddForm"
                    label-width="180px"
                >
                    <el-form-item label="Nombre :" prop="nombre">
                        <el-input style="width:400px" v-model="data_form.nombre"></el-input>
                    </el-form-item>
                    <el-form-item label="Codigo :" prop="codigo">
                        <el-input style="width:150px" v-model="data_form.codigo"></el-input>
                    </el-form-item>
                    <el-form-item label="Descripcion :" prop="descripcion">
                        <el-input type="textarea" style="width:400px" v-model="data_form.descripcion"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button
                            type="primary"
                            :loading="loading_form"
                            @click="submitForm('PartidaAddForm')"
                        >
                            Registar
                            <i class="fas fa-save"></i>
                        </el-button>
                        <el-button @click="cancelForm('PartidaAddForm')">Cancelar</el-button>
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
                        message: "Este campo es obligatorio.",
                        trigger: "blur"
                    },
                    { min: 3, message: "Debe tener mas de 3 caracteres", trigger: "blur" },
                    { max: 155, message: "Debe tener menos de 100 caracteres", trigger: "blur" }
                ],
                codigo: [
                    {
                        required: true,
                        message: "Este campo es obligatorio.",
                        trigger: "blur"
                    },
                    { min: 3, message: "Debe tener mas de 3 caracteres", trigger: "blur" },
                    { max: 6, message: "Debe tener menos de 5 caracteres", trigger: "blur" }
                ]
            }
        };
    },
    computed: {
        ...mapState("partida", [
            "data_form",
            "loading_form",
            "alert"
        ]),
    },
    methods: {
        submitForm(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    store.dispatch("partida/addItem", {
                        message: this.$message,
                        progress: this.$Progress,
                    });
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
    mounted() {
        store.dispatch('login/getUser');
    }
};
</script>
