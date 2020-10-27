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
                <el-page-header  @back="goBack" content="Periodo contable" class="mt-2"></el-page-header>
            </div>
            <div class="pull-right">
            </div>
        </div>
        <div class="card">
            <div class="card-header border-0">
                <h3 class="card-title">Iniciar periodo contable </h3>
                <div class="card-tools"></div>
            </div>
            <div class="card-body">
                <el-form
                    class="labeles"
                    :model="data_form"
                    :rules="rules"
                    ref="PeriodoAddForm"
                    label-width="120px"
                >
                    <el-form-item label="Nombre :" prop="nombre">
                        <el-input style="width:250px" v-model="data_form.nombre"></el-input>
                    </el-form-item>
                    <el-form-item label="Del :" label-position="top" prop="fecha_inicio">
                        <el-date-picker type="date" v-model="data_form.fecha_inicio" placeholder="Fecha inicio"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="Al:" prop ="fecha_fin">
                        <el-date-picker v-model="data_form.fecha_fin" type="date" placeholder="Fecha fin"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="Descripcion :" prop="descripcion">
                        <el-input type="textarea" style="width:400px" v-model="data_form.descripcion"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('PeriodoAddForm')">
                            Siguiente
                            <i class="fas fa-arrow-right"></i>
                        </el-button>
                        <el-button @click="cancelForm('PeriodoAddForm')">Cancelar</el-button>
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
        let validateFechaInicio = async (rule, value, callback) => {
            console.log("validando.........", value);
            if (value === "") {
                callback(new Error("Debe seleccionar una fecha"));
            } else {

                const valid = await store.dispatch(
                    "periodo/VALIDATE_START_DATE",
                    value
                );
                !valid ? callback(new Error("Debe seleccionar una fecha válida")) : callback();
            }
        };
        let validateFechaFin = async (rule, value, callback) => {
            if (value === "") {
                callback(new Error("Debe seleccionar una fecha"));
            } else {
                const valid = await store.dispatch("periodo/VALIDATE_END_DATE", value);
                !valid
                    ? callback(new Error("Debe seleccionar una fecha válida"))
                    : callback();
            }
        };
        return {
            rules: {
                nombre: [
                    {
                        required: true,
                        message: "Debe introducir el nombre",
                        trigger: "blur"
                    },
                    { min: 3, message: "Debe tener mas de 3 carácteres", trigger: "blur" },
                    { min: 3, message: "Debe tener menos  30 carácteres", trigger: "blur" }
                ],
                fecha_inicio: [
                    {
                        required: true,
                        validator: validateFechaInicio,
                        trigger: "change"
                    }
                ],
                fecha_fin: [
                    {
                        required: true,
                        validator: validateFechaFin,
                        trigger: "change"
                    }
                ]
            }
        };
    },
    computed: {
        ...mapState("periodo", [
            "data_form",
            "loading_form",
            "alert"
        ])
    },
    methods: {
        submitForm(form) {
            this.$refs[form].validate(valid => {
                if (valid) {
                    store.dispatch("periodo/getLotes");
                    router.push({ name: "inventario_inicial" });
                } else {
                    return false;
                }
            });
        },
        cancelForm(formName) {
            this.$refs[formName].resetFields();
            router.push({ name: "periodo" });
        },
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>
