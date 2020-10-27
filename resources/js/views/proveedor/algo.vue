<template>
  <div class="col-md-8 offset-md-2">
    <div class="card">
      <!-- <el-page-header @back="goBack" content="detail"></el-page-header> -->
      <div class="card-header border-0">
        <h3 class="card-title">Datos de gestion</h3>
        <div class="card-tools"></div>
      </div>
      <div class="card-body">
        <el-form
          class="labeles"
          :model="data_form"
          :rules="rules"
          ref="gestionAddForm"
          label-width="120px"
        >
          <el-form-item label="Nombre :" prop="nombre">
            <el-input style="width:250px" v-model="data_form.nombre"></el-input>
          </el-form-item>
          <el-form-item label="Del :" label-position="top" prop="fecha_inicio">
            <el-date-picker type="date" v-model="data_form.fecha_inicio" placeholder="Fecha inicio"></el-date-picker>
          </el-form-item>
          <el-form-item label="Al:" prop="fecha_fin">
            <el-date-picker v-model="data_form.fecha_fin" type="date" placeholder="Fecha fin"></el-date-picker>
          </el-form-item>
          <el-form-item label="Descripcion :" prop="descripcion">
            <el-input type="textarea" style="width:400px" v-model="data_form.descripcion"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('gestionAddForm')">
              Siguiente
              <i class="fas fa-arrow-right"></i>
            </el-button>
            <el-button @click="cancelForm('gestionAddForm')">Cancelar</el-button>
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
      console.log("validando", value);
      if (value === "") {
        callback(new Error("Debe seleccionar una fecha"));
      } else {
        const valid = await store.dispatch(
          "gestion/VALIDATE_START_DATE",
          value
        );
        !valid
          ? callback(new Error("Debe seleccionar una fecha válida"))
          : callback();
      }
    };
    let validateFechaFin = async (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Debe seleccionar una fecha"));
      } else {
        const valid = await store.dispatch("gestion/VALIDATE_END_DATE", value);
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
          { min: 3, message: "Debe tener mas de 3 letras", trigger: "blur" }
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
    ...mapState("gestion", [
      "data_form",
      "submit_error",
      "submit_success",
      "loading_form"
    ])
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          store.dispatch("gestion/addItem", {
            message: this.$message,
            progress: this.$Progress
          });
          //router.go(-1);
        } else {
          return false;
        }
      });
    },
    cancelForm(formName) {
      this.$refs[formName].resetFields();
      router.push({ name: "gestion" });
    }
  }
};
</script>
