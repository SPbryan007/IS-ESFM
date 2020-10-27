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
                <el-page-header  @back="goBack" content="Ingresos" class="mt-2"></el-page-header>
            </div>
            <div class="pull-right">
            </div>
        </div>
      <div class="card">
        <div class="card-header border-0">
          <h3 class="card-title">Registro de ingreso | detalles</h3>
          <div class="card-tools"></div>
        </div>
        <div class="card-body">
          <div class="row mt-5">
            <el-form
              class="labeles"
              :model="detalles_form"
              :rules="rules"
              ref="DetalleIngresoForm"
              label-width="150px"
            >
              <div class="row justify-content-md-left">
                <el-form-item label="Agregar articulo" prop="articulo">
                  <el-select
                    style="width:830px"
                    v-model="detalles_form.articulo"
                    filterable
                    placeholder="Seleccione el articulo a ingresar"
                    loading-text="buscando.."
                    no-match-text="No se encontraron registros"
                  >
                    <el-option
                      v-for="(item,index) in GET_ITEMS_ARTICULO"
                      :key="index"
                      :label="`${item.nombre } // ${item.unidad_medida.nombre}`"
                      :value="item.id"
                    ></el-option>
                  </el-select>
                  <router-link :to="{ name: 'additem' }">
                    <el-button type="primary" icon="el-icon-plus"></el-button>
                  </router-link>
                </el-form-item>
              </div>
              <div class="row justify-content-md-left">
                <el-form-item label="Cantidad" prop="cantidad">
                  <el-input-number
                    controls-position="right"
                    v-model="detalles_form.cantidad"
                    :precision="2"
                    :min="1"
                  ></el-input-number>
                </el-form-item>
                  <el-form-item label="Precio Total" prop="precio">
                      <el-input-number
                          controls-position="right"
                          v-model="detalles_form.precio"
                          :precision="2"
                          :step="1"
                          :min="0"
                      ></el-input-number>
                  </el-form-item>
                <!--<el-form-item label="Precio unitario" prop="precio">
                  <el-input-number
                    controls-position="right"
                    v-model="detalles_form.precio"
                    :precision="2"
                    :step="0.1"
                    :min="0"
                  ></el-input-number>
                </el-form-item>-->
              </div>

              <div class="row">
                <el-form-item>
                  <el-button
                    type="primary"
                    @click="submitForm('DetalleIngresoForm')"
                    icon="el-icon-plus"
                  >Agregar</el-button>
                  <!-- <el-button @click="cancelForm('DetalleIngresoForm')">Cancelar</el-button> -->
                </el-form-item>
              </div>
            </el-form>
          </div>
          <div class="row justify-content-md-center">
            <div>
              <el-table :data="GET_ITEMS_DETALLE_INGRESO" style="width: 100%">
                <el-table-column type="index"></el-table-column>
                <el-table-column label="Articulo" width="280" prop="articulo" sortable>
                  <template slot-scope="scope">
                    {{ findItem(scope.row.articulo).nombre }}
                  </template>
                </el-table-column>
                  <el-table-column label="Medida" width="150" prop="medida" sortable>
                      <template slot-scope="scope">
                          {{ findItem(scope.row.articulo).unidad_medida.nombre }}
                      </template>
                  </el-table-column>
                <el-table-column label="Precio u." width="120" prop="precio" sortable>
                  <template slot-scope="scope"><b>Bs. </b> {{ (scope.row.precio) / (scope.row.cantidad) }}</template>
                </el-table-column>
                <el-table-column label="Cantidad" width="120" prop="cantidad" sortable>
                  <template slot-scope="scope">
                    {{ scope.row.cantidad }} <b>{{ findItem(scope.row.articulo).unidad_medida.sigla }}</b>
                  </template>
                </el-table-column>
                <el-table-column label="Sub total" width="120">
                  <template slot-scope="scope">
                    <b>Bs. </b>
                    {{
                    scope.row.precio
                    }}
                  </template>
                </el-table-column>
                <el-table-column label>
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      type="danger"
                      @click="DELETE_DETALLE_INGRESO(scope.row.articulo)
                                            "
                      icon="el-icon-close"
                    ></el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="row pt-4 col-md-4 offset-md-8">
            <h5>
              Total: Bs
              <strong>{{ GET_TOTAL_DETALLE_INGRESOS }}</strong>
            </h5>
          </div>
          <div class="row pt-3 col-md-4 offset-md-8">
            <el-button
              type="primary"
              @click="onRegister()"
              v-loading.fullscreen.lock="loading_form"
              :disabled="this.$store.state.ingreso.data_form.detalle_ingreso.length < 1"
              icon="el-icon-plus"
            >Registrar</el-button>
            <el-button @click="cancelForm('DetalleIngresoForm')">Cancelar</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import * as lang from "vuejs-datepicker/src/locale";
import store from "../../store/index";
import moment from "moment";
import { router } from "../../routes";
export default {
  data() {
    return {
      detalles_form: {
        articulo: null,
        cantidad: 1,
        precio: 0,
      },
      rules: {
        articulo: [
          {
            required: true,
            message: "Debe seleccionar un articulo",
            trigger: "change",
          },
        ],

        cantidad: [
          {
            required: true,
            message: "Este campo es obligatorio",
            trigger: "blur",
          },
        ],
        precio: [
          {
            required: true,
            message: "Este campo es obligatorio",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    ...mapState("ingreso", [
        "data_form",
        "loading_form",
        "alert"
    ]),
    ...mapGetters("ingreso", [
      "GET_ITEMS_DETALLE_INGRESO",
      "GET_TOTAL_DETALLE_INGRESOS",
    ]),
    ...mapGetters("articulo", ["GET_ITEMS_ARTICULO"]),
  },
  methods: {
    ...mapMutations("ingreso", ["DELETE_DETALLE_INGRESO"]),
    findItem(id) {
      const items = store.getters["articulo/GET_ITEMS_ARTICULO"];
      return items.find((item) => item.id === id);
    },
    submitForm(form) {
      this.$refs[form].validate(async (valid) => {
        if (valid)
          await store.commit("ingreso/ADD_DETALLE_INGRESO", this.detalles_form);
        this.$refs[form].resetFields();
      });
    },
    onRegister() {
      this.$confirm(`¿ Esta seguro de registrar el ingreso ?`, {
        confirmButtonText: "Sí, registrar",
        cancelButtonText: "Cancelar",
        type: "warning",
      })
        .then(() => {
          store.dispatch("ingreso/addItem", {
            message: this.$message,
              progress: this.$Progress,
          });
        })
        .catch(() => {
          return null;
        });
    },
    cancelForm(formName) {
      this.$refs[formName].resetFields();
      router.push({ name: "ingreso" });
    },
      goBack() {
          this.$router.go(-1);
      }
  },
    mounted() {
        store.dispatch("articulo/getItems");
    },
};
</script>
