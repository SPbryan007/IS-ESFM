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
                <el-page-header  @back="goBack" content="Ingresos" class="mt-2"></el-page-header>
            </div>
            <div class="pull-right">
            </div>
        </div>
      <div class="card">
        <div class="card-header border-0">
          <h3 class="card-title">Registro de ingresos</h3>
          <div class="card-tools"></div>
        </div>
        <div class="card-body">

            <div class="row justify-content-center">
                <el-radio-group v-model="data_form.tipo_ingreso" style="margin-bottom: 30px;" class="ml-5">
                    <el-radio-button label="Compra">Compra</el-radio-button>
                    <el-radio-button label="Donacion">Donación</el-radio-button>
                </el-radio-group>
            </div>


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
                  ref="IngresoForm"
                  :model="data_form"
                  :rules="rules"
                  label-width="170px"
                >
                  <div v-if="data_form.tipo_ingreso == 'Compra'">
                    <div class="row">
                      <el-form-item label="Tipo de compra :" prop="tipo_compra">
                        <el-select
                          style="width:340px"
                          v-model="data_form.tipo_compra"
                          filterable
                          placeholder="Seleccione el tipo de compra"
                          loading-text="buscando.."
                          no-match-text="No se encontraron registros"
                        >
                          <el-option
                            v-for="(item, index) in [
                                {key:'CA-CH',value:'Caja chica'},
                                {key:'CO-ME',value:'Compra menor'},
                                {key:'LP-AN',value:'Licitancion publica de ANPE'},
                                {key:'LI-PU',value:'Licitancion publica'}
                            ]"
                            :key="index"
                            :label="item.value"
                            :value="item.key"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                        <el-form-item
                            label="Nro de Solicitud :"
                            prop="nro_solicitud"
                        >
                            <el-input v-model="data_form.nro_solicitud" style="width:170px"></el-input>
                        </el-form-item>
                        <el-form-item label="Fecha de solicitud :" prop="fecha_solicitud">
                            <el-date-picker type="date" v-model="data_form.fecha_solicitud"></el-date-picker>
                        </el-form-item>


                      <!-- <el-form-item label="Nro de Compra">
                        <el-input v-model="lote_form.compra.nro_compra" style="width:170px"></el-input>
                      </el-form-item>-->

                    </div>
                    <div>
                        <el-form-item label="Tipo de comprobante :" prop="tipo_comprobante">
                            <el-select
                                style="width:340px"
                                v-model="data_form.tipo_comprobante"
                                filterable
                                placeholder="Seleccione el tipo de comprobante"
                                loading-text="buscando.."
                                no-match-text="No se encontraron registros"
                            >
                                <el-option
                                    v-for="(item, index) in [{key:'FACTURA',value:'Factura'},{key:'RECIBO',value:'Recibo'}]"
                                    :key="index"
                                    :label="item.value"
                                    :value="item.key"
                                ></el-option>
                            </el-select>
                        </el-form-item>
                      <el-form-item label="Nro de Comprobante :" prop="nro_comprobante">
                        <el-input v-model="data_form.nro_comprobante" style="width:170px"></el-input>
                      </el-form-item>
                      <el-form-item
                        label="Nro autorización :"
                        prop="nro_autorizacion"
                        v-if="data_form.tipo_comprobante == 'FACTURA'"
                      >
                        <el-input v-model="data_form.nro_autorizacion" style="width:170px"></el-input>
                      </el-form-item>
                        <el-form-item label="Fecha comprobante :" label-position="top" prop="fecha_comprobante">
                            <el-date-picker type="date" v-model="data_form.fecha_comprobante" placeholder="Fecha comprobante"></el-date-picker>
                        </el-form-item>


                      <el-form-item label="Proveedor :" prop="proveedor">
                        <el-select
                          style="width:340px"
                          v-model="data_form.proveedor"
                          filterable
                          placeholder="Seleccione el proveedor"
                          loading-text="buscando.."
                          no-match-text="No se encontraron registros"
                        >
                          <el-option
                            v-for="(item, index) in GET_ITEMS_PROVEEDOR"
                            :key="index"
                            :label="item.nombre"
                            :value="item.id"
                          ></el-option>
                        </el-select>
                        <router-link :to="{name:'addproveedor'}">
                          <el-button type="primary" icon="el-icon-plus"></el-button>
                        </router-link>
                      </el-form-item>
                    </div>
                  </div>
                  <div v-if="data_form.tipo_ingreso === 'Donacion'">
                    <el-form-item label="Nro de acta :" prop="acta">
                      <el-input v-model="data_form.acta" style="width:170px"></el-input>
                    </el-form-item>
                      <el-form-item label="Fecha comprobante :" label-position="top" prop="fecha_comprobante">
                          <el-date-picker type="date" v-model="data_form.fecha_comprobante" placeholder="Fecha comprobante"></el-date-picker>
                      </el-form-item>
                    <el-form-item label="Proveedor :" prop="proveedor">
                      <el-select
                        style="width:340px"
                        v-model="data_form.proveedor"
                        filterable
                        placeholder="Seleccione el proveedor"
                        loading-text="buscando.."
                        no-match-text="No se encontraron registros"
                      >
                        <el-option
                          v-for="(item, index) in GET_ITEMS_PROVEEDOR"
                          :key="index"
                          :label="item.nombre"
                          :value="item.id"
                        ></el-option>
                      </el-select>
                      <router-link :to="{name:'addproveedor'}">
                        <el-button type="primary" icon="el-icon-plus"></el-button>
                      </router-link>
                    </el-form-item>
                  </div>

                  <el-form-item>
                    <el-button type="primary" @click="submitForm('IngresoForm')">
                      Siguiente
                      <i class="fas fa-arrow-right"></i>
                    </el-button>
                    <el-button @click="cancelForm('IngresoForm')">Cancelar</el-button>
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
import * as lang from "vuejs-datepicker/src/locale";
import store from "../../store/index";
import moment from "moment";
import { router } from "../../routes";
export default {
  data() {
    return {
      sop: true,
        tap:'',
      rules: {
        tipo_compra: [
          {
            required: true,
            message: "Este campo es obligatorio",
            trigger: "change",
          },
        ],
        tipo_comprobante: [
          {
            required: true,
            message: "Este campo es obligatorio",
            trigger: "change",
          },
        ],
        nro_comprobante: [
          {
            required: true,
            message: "Este campo es obligatorio",
            trigger: "blur",
          },
        ],
        nro_solicitud: [
          {
            required: true,
            message: "Este campo es obligatorio",
            trigger: "blur",
          },
        ],
        nro_autorizacion: [
          {
            required: true,
            message: "Este campo es obligatorio",
            trigger: "blur",
          },
        ],
        acta: [
          {
            required: true,
            message: "Este campo es obligatorio",
            trigger: "blur",
          },
        ],
        proveedor: [
          {
            required: true,
            message: "Debe seleccionar un proveedor",
            trigger: "change",
          },
        ],
          fecha_comprobante:[
              { type: 'date', required: true, message: 'Este campo es obligatorio.', trigger: 'change' }
          ],
          fecha_solicitud:[
              { type: 'date', required: true, message: 'Este campo es obligatorio.', trigger: 'change' }
          ]
      },
    };
  },
  computed: {
    ...mapState("ingreso", [
        "data_form",
        "loading_form",
        "alert"
    ]),
    ...mapGetters("proveedor", ["GET_ITEMS_PROVEEDOR"]),
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          router.push({ name: "addingresodetails" });
        }
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
  created() {
    store.dispatch("proveedor/getItems");
  },
};
</script>

