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
                <el-page-header  @back="goBack" content="Funcionario" class="mt-2"></el-page-header>
            </div>
            <div class="pull-right">
            </div>
        </div>
        <div class="card">
            <div class="card-header border-0">
                <h3 class="card-title">Registrar funcionario</h3>
                <div class="card-tools"></div>
            </div>
            <div class="card-body">
                <el-form
                    class="labeles"
                    :model="data_form"
                    :rules="rules"
                    ref="FuncionarioAddForm"
                    label-width="180px"
                >
                    <el-form-item label="Nombre :" prop="nombre">
                        <el-input style="width:400px" v-model="data_form.nombre"></el-input>
                    </el-form-item>
                    <el-form-item label="Apellido :" prop="apellido">
                        <el-input style="width:400px" v-model="data_form.apellido"></el-input>
                    </el-form-item>
                    <el-form-item label="C.I. :" prop="documento">
                        <el-input style="width:200px" v-model="data_form.documento"></el-input>
                    </el-form-item>
                    <el-form-item label="Telefono :" prop="telefono">
                        <el-input style="width:150px" v-model="data_form.telefono"></el-input>
                    </el-form-item>
                    <el-form-item label="Direccion :" prop="direccion">
                        <el-input style="width:350px" v-model="data_form.direccion"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button
                            type="primary"
                            :loading="loading_form"
                            @click="submitForm('FuncionarioAddForm')"
                        >
                            Registar
                            <i class="fas fa-save"></i>
                        </el-button>
                        <el-button @click="cancelForm('FuncionarioAddForm')">Cancelar</el-button>
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
                    { min: 3, message: "Debe contener al menos 3 letras.", trigger: "blur" },
                ],
                apellido: [
                    {
                        required: true,
                        message: "Este campo es obligatorio",
                        trigger: "blur",
                    },
                    { min: 3, message: "Debe contener al menos 3 letras.", trigger: "blur" },
                ],
                documento: [
                    {
                        required: true,
                        message: "Este campo es obligatorio",
                        trigger: "blur",
                    },
                    { min: 3, message: "Debe contener al menos 6 letras.", trigger: "blur" },
                ],
            },
        };
    },
    computed: {
        ...mapState("funcionario", [
            "data_form",
            "loading_form",
            "alert"
        ]),
    },
    methods: {
        submitForm(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    store.dispatch("funcionario/addItem", {
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
