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
                <el-page-header  @back="goBack" content="Proveedor" class="mt-2"></el-page-header>
            </div>
            <div class="pull-right">
            </div>
        </div>
        <div class="card">
            <div class="card-header border-0">
                <h3 class="card-title">Registrar proveedor</h3>
                <div class="card-tools"></div>
            </div>
            <div class="card-body">
                <el-form
                    class="labeles"
                    :model="data_form"
                    :rules="rules"
                    ref="ProveedorAddForm"
                    label-width="180px"
                >
                    <el-form-item label="Nit :" prop="nit">
                        <el-input style="width:150px" v-model="data_form.nit"></el-input>
                    </el-form-item>
                    <el-form-item label="Nombre :" prop="nombre">
                        <el-input style="width:500px" v-model="data_form.nombre"></el-input>
                    </el-form-item>
                    <el-form-item label="Rubro :" prop="rubro">
                        <el-input style="width:350px" v-model="data_form.rubro"></el-input>
                    </el-form-item>
                    <el-form-item label="Direccion :" prop="direccion">
                        <el-input style="width:350px" v-model="data_form.direccion"></el-input>
                    </el-form-item>
                    <el-form-item label="Telefono :" prop="telefono">
                        <el-input style="width:150px" v-model="data_form.telefono"></el-input>
                    </el-form-item>
                    <el-form-item label="Responsable :" prop="responsable">
                        <el-input style="width:400px" v-model="data_form.responsable"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button
                            type="primary"
                            :loading="loading_form"
                            @click="submitForm('ProveedorAddForm')"
                        >
                            Registar
                            <i class="fas fa-save"></i>
                        </el-button>
                        <el-button @click="cancelForm('ProveedorAddForm')">Cancelar</el-button>
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
                    { min: 3, message: "Debe tener mas de 3 carácteres", trigger: "blur" },
                    { max: 150, message: "Debe tener menos de 150 carácteres", trigger: "blur" }
                ],
                nit: [
                    {
                        required: true,
                        message: "Este campo es obligatorio.",
                        trigger: "blur"
                    },
                    { min: 6, message: "Debe tener mas de 8 numeros", trigger: "blur" },
                    { max: 20, message: "Debe tener menos de 20 numeros", trigger: "blur" }
                ],
                rubro: [
                    {
                        required: false,
                        message: "Este campo es obligatorio.",
                        trigger: "blur"
                    },
                    { max: 150, message: "Debe tener menos de 150 carácteres", trigger: "blur" }
                ],
                direccion: [
                    {
                        required: false,
                        message: "Este campo es obligatorio.",
                        trigger: "blur"
                    },
                    { max: 250, message: "Debe tener menos de 250 carácteres", trigger: "blur" }
                ],
                telefono: [
                    {
                        required: false,
                        message: "Este campo es obligatorio.",
                        trigger: "blur"
                    },
                    { max: 15, message: "Debe tener menos de 15 carácteres", trigger: "blur" }
                ],
                responsable: [
                    {
                        required: false,
                        message: "Este campo es obligatorio.",
                        trigger: "blur"
                    },
                    { max: 250, message: "Debe tener menos de 250 carácteres", trigger: "blur" }
                ]
            }
        };
    },
    computed: {
        ...mapState("proveedor", [
            "data_form",
            "loading_form",
            "alert"
        ]),
    },
    methods: {
        submitForm(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    store.dispatch("proveedor/addItem", {
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
