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
                <el-page-header  @back="goBack" content="Unidades de medida" class="mt-2"></el-page-header>
            </div>
            <div class="pull-right">
            </div>
        </div>
        <div class="card">
            <div class="card-header border-0">
                <h3 class="card-title">Registrar unidad de medida</h3>
                <div class="card-tools"></div>
            </div>
            <div class="card-body">
                <el-form
                    class="labeles"
                    :model="data_form"
                    :rules="rules"
                    ref="UnidadMedidaAddForm"
                    label-width="180px"
                >

                    <el-form-item label="Nombre :" prop="nombre">
                        <el-input style="width:250px" v-model="data_form.nombre"></el-input>
                    </el-form-item>
                    <el-form-item label="Sigla :" prop="sigla">
                        <el-input style="width:250px" v-model="data_form.sigla"></el-input>
                    </el-form-item>
                    <el-form-item label="Descripcion :" prop="descripcion">
                        <el-input type="textarea" style="width:400px" v-model="data_form.descripcion"></el-input>
                    </el-form-item>
<!--                    <el-form-item label="Tipo :">-->
<!--                        <toggle-button-->
<!--                            v-model="data_form.tipo"-->
<!--                            :value="data_form.tipo"-->
<!--                            :color="{checked: '#13ce66', unchecked: '#6576ff', disabled: '#CCCCCC'}"-->
<!--                            :sync="false"-->
<!--                            :width="65"-->
<!--                            :labels="{checked: 'Frac.', unchecked: 'Entero'}"/>-->
<!--                    </el-form-item>-->

                    <el-form-item>
                        <el-button
                            type="primary"
                            :loading="loading_form"
                            @click="submitForm('UnidadMedidaAddForm')"
                        >
                            Registar
                            <i class="fas fa-save"></i>
                        </el-button>
                        <el-button @click="cancelForm('UnidadMedidaAddForm')">Cancelar</el-button>
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
                    { max: 50, message: "Debe tener menos de 50 carácteres", trigger: "blur" }
                ],
                sigla: [
                    {
                        required: true,
                        message: "Este campo es obligatorio.",
                        trigger: "blur"
                    },
                    { min: 1, message: "Debe tener mas de 1 carácteres", trigger: "blur" },
                    { max: 6, message: "Debe tener menos de 6 carácteres", trigger: "blur" }
                ]
            }
        };
    },
    computed: {
        ...mapState("unidad_medida", [
            "data_form",
            "loading_form",
            "alert"
        ]),
    },
    methods: {
        submitForm(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    store.dispatch("unidad_medida/addItem", {
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
};
</script>
