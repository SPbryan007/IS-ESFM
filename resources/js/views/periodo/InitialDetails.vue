<template>
  <div class>
    <div class="col-md-12">
      <div class="card">
        <div class="card-header border-0">
          <h3 class="card-title">PAPEL MEMEMBRETADO - NUEVO LOTE</h3>
          <div class="card-tools"></div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <el-form class="labeles" ref="lote_form" :model="lote_form" label-width="170px">
                  <el-form-item label="Tipo de ingreso :">
                    <el-radio v-model="lote_form.tipo_ingreso" label="COMPRA" border>COMPRA</el-radio>
                    <el-radio v-model="lote_form.tipo_ingreso" label="DONACION" border>DONACION</el-radio>
                    <el-radio v-model="lote_form.tipo_ingreso" label="DEVOLUCION" border>DEVOLUCION</el-radio>
                  </el-form-item>
                </el-form>
              </div>
              <div class="row">
                <el-form class="labeles" ref="lote_form" :model="lote_form" label-width="170px">
                  <div v-if="lote_form.tipo_ingreso == 'COMPRA'" id="compra">
                    <div class="row">
                      <el-form-item label="Nro de Compra">
                        <el-input v-model="lote_form.compra.nro_compra" style="width:170px"></el-input>
                      </el-form-item>
                      <el-form-item label="Nro de Solicitud">
                        <el-input v-model="lote_form.compra.nro_solicitud" style="width:170px"></el-input>
                      </el-form-item>
                    </div>
                    <div class="row">
                      <el-form-item label="Nro de Factura">
                        <el-input v-model="lote_form.compra.nro_factura" style="width:170px"></el-input>
                      </el-form-item>
                      <el-form-item label="Nro authorizacion">
                        <el-input v-model="lote_form.compra.nro_autorizacion" style="width:170px"></el-input>
                      </el-form-item>

                      <el-form-item label="Proveedor">
                        <el-select
                          style="width:340px"
                          v-model="lote_form.compra.proveedor"
                          filterable
                          placeholder="Seleccione el proveedor"
                          loading-text="buscando.."
                          no-match-text="No se encontraron registros"
                        >
                          <el-option
                            v-for="(item, index) in GET_ITEMS_PROVEEDORES"
                            :key="index"
                            :label="item.nombre"
                            :value="item.idProveedor"
                          ></el-option>
                        </el-select>
                        <router-link :to="{name:'addproveedor'}">
                          <el-button type="primary" icon="el-icon-plus"></el-button>
                        </router-link>
                      </el-form-item>
                    </div>
                  </div>
                  <div v-if="lote_form.tipo_ingreso === 'DONACION'" id="donacion">
                    <el-form-item label="Proveedor">
                      <el-select
                        style="width:340px"
                        v-model="lote_form.compra.proveedor"
                        filterable
                        placeholder="Seleccione el proveedor"
                        loading-text="buscando.."
                        no-match-text="No se encontraron registros"
                      >
                        <el-option
                          v-for="(item, index) in GET_ITEMS_PROVEEDORES"
                          :key="index"
                          :label="item.nombre"
                          :value="item.idProveedor"
                        ></el-option>
                      </el-select>
                      <router-link :to="{name:'addproveedor'}">
                        <el-button type="primary" icon="el-icon-plus"></el-button>
                      </router-link>
                    </el-form-item>
                  </div>
                  <div class id="devolucion"></div>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">Agregar lote</el-button>
                    <el-button>Cancelar</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>

            <div
              class="col-md-4 pl-5 border border-bottom-0 border-bottom-0 border-right-0 border-top-0"
            >
              <div>
                <el-form class="labeles"  :rules="rules_lote_form"  ref="lote_form" :model="lote_form" label-width="120px">
                  <el-form-item :label="`Cantidad en Kg.`">
                    <el-input-number
                      controls-position="right"
                      v-model="lote_form.cantidad"
                      :precision="2"
                      :min="1"
                      :max="10"
                    ></el-input-number>
                  </el-form-item>
                  <el-form-item label="Precio unitario">
                    <el-input-number
                      controls-position="right"
                      v-model="lote_form.precio_unitario"
                      :precision="2"
                      :step="0.1"
                      :max="10"
                      :disabled="lote_form.tipo_ingreso == 'DONACION'"
                    ></el-input-number>
                  </el-form-item>
                  <el-form-item label="Saldo">
                    <el-input
                      :value="`Bs. ${saldo}`"
                      placeholder="Please input"
                      style="width:200px;"
                      :disabled="true"
                    ></el-input>
                  </el-form-item>
                </el-form>
              </div>
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
      proveedores: [
        {
          idProveedor: 1,
          nombre: "POLLOS ROSITA"
        }
      ],
      lote_form: {
        cantidad: 0,
        precio_unitario: 0,
        tipo_ingreso: "COMPRA",
        descripcion: "SALDO INICIAL",
        donacion: {
          institucion: "",
          responsable: "",
          telefono: ""
        },
        compra: {
          nro_compra: "",
          nro_solicitud: "",
          nro_factura: "",
          nro_autorizacion: "",
          proveedor: null
        }
      },
    };
  },
  computed: {
    saldo: function() {
      return this.lote_form.cantidad * this.lote_form.precio_unitario;
    },
    ...mapGetters("proveedor", ["GET_ITEMS_PROVEEDORES"])
  },
  methods: {},
  created() {
    this.$store.dispatch("proveedor/GET_DATA_FROM_SERVER");
  },
};
</script>

