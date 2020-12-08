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
                  <el-button type="info" size="" @click="dialogAddDetails = true" icon="el-icon-plus">Agregar</el-button>
              </div>
          </div>
          <div class="card">
              <div class="card-header border-0">
                  <h3 class="card-title">Registro de ingresos | detalles</h3>
                  <div class="card-tools"></div>
              </div>
              <div class="card-body">
                  <el-dialog title="Agregar articulos" :visible.sync="dialogAddDetails" width="60%">
                      <div class="row justify-content-center mt-4">
                          <el-input
                              style="width:660px"
                              placeholder="Filtrar por codigo, articulo"
                              v-model="$store.state.ingreso.searchQueryAddDialog"
                              clearable
                          >
                              <i slot="prefix" class="el-input__icon el-icon-search"></i>
                          </el-input>&nbsp&nbsp
                          <router-link :to="{ name: 'additem' }">
                              <el-button type="primary" icon="el-icon-plus"></el-button>
                          </router-link>
                      </div>

                      <el-table :data="pageOfItems">
                          <el-table-column property="codigo" label="Codigo" width="90"></el-table-column>
                          <el-table-column property="nombre" label="Articulo" width="370"></el-table-column>
                          <el-table-column property="stock" label="Disponibles" width="100"></el-table-column>
                          <el-table-column property="unidad" label="Medida" width="200">

                          </el-table-column>
                          <el-table-column>
                              <template slot-scope="scope">
                                  <el-button
                                      type="info"
                                      size="mini"
                                      @click="OnclickAddDialog(scope.$index,scope.row)"
                                      icon="el-icon-plus"
                                  >Añadir</el-button>
                              </template>
                          </el-table-column>
                      </el-table>

                      <span slot="footer" class="dialog-footer">
                           <jw-pagination
                               ref="jw"
                               :pageSize="perpage"
                               :items="GET_FILTER_ITEMS_DETAILS"
                               :labels="labels"
                               @changePage="onChangePage"
                           ></jw-pagination>
                        </span>
                  </el-dialog>

                  <el-table :data="GET_ITEMS_DETALLE_INGRESO" style="width: 100%" size="small">
                      <el-table-column type="index" width="40" label="N°"></el-table-column>
<!--                      <el-table-column label="Código" width="120" prop="codigo" sortable>-->
<!--                          <template slot-scope="scope">-->
<!--                              {{ findItem(scope.row.articulo).codigo }}-->
<!--                          </template>-->
<!--                      </el-table-column>-->
                      <el-table-column label="Articulo" width="410" prop="articulo">
                          <template slot-scope="scope">
                              {{ findItem(scope.row.articulo).nombre }}
                          </template>
                      </el-table-column>
                      <el-table-column label="Medida" width="160" prop="medida" >
                          <template slot-scope="scope">
                              {{ findItem(scope.row.articulo).unidad_medida.nombre }}
                          </template>
                      </el-table-column>
                      <el-table-column label="P.U." width="80" prop="precio_u">
                          <template slot-scope="scope">
                              {{ scope.row.precio / scope.row.cantidad }}
                          </template>
                      </el-table-column>
                      <el-table-column label="Cantidad" width="150" prop="cantidad">
                          <template slot-scope="scope">
                              <el-input-number size="mini" style="width:120px" v-model="scope.row.cantidad"  :precision="2" :step="1"  :min="0.1" ></el-input-number>
                          </template>
                      </el-table-column>
                      <el-table-column label="Sub Total" width="150" prop="precio">
                          <template slot-scope="scope">
                              <el-input-number size="mini" style="width:120px" v-model="scope.row.precio"  :precision="2" :step="1"  :min="0" ></el-input-number>
                          </template>
                      </el-table-column>
                      <el-table-column label>
                          <template slot-scope="scope">
                              <el-button
                                  size="mini"
                                  type="danger"
                                  @click="DELETE_DETALLE_INGRESO(scope.row.articulo)"
                                  icon="el-icon-close"
                              ></el-button>
                          </template>
                      </el-table-column>
                  </el-table>
                  <div class="row justify-content-end mb-4  mr-1 ml-1  mt-4 ">
                      <h5>
                          Total: Bs
                          <strong>{{ GET_TOTAL_DETALLE_INGRESOS }}</strong>
                      </h5>
                  </div>
                  <div class="row justify-content-end mb-4  mr-1 ml-1  mt-4">
                      <el-button v-loading.fullscreen.lock="loading_form" :disabled="data_form.detalle_ingreso.length == 0" type="primary" size="" @click="onRegister()" icon="el-icon-plus">Registar</el-button>
                  </div>
              </div>
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
        pageOfItems: [],
        sizePerPage: 5  ,
        perpage: 5,
        labels: {
            first: "<<",
            last: ">>",
            previous: "anterior",
            next: "siguiente"
        },
        dialogAddDetails:false,
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
        "GET_FILTER_ITEMS_DETAILS"
    ]),
    ...mapGetters("articulo", ["GET_ITEMS_ARTICULO"]),
  },
  methods: {
      OnclickAddDialog(index,row){
          store.commit("ingreso/ADD_DETALLE_INGRESO",row);
      },
      ...mapMutations("ingreso", ["DELETE_DETALLE_INGRESO"]),
      findItem(id) {
          const items = store.getters["articulo/GET_ITEMS_ARTICULO"];
          return items.find((item) => item.id === id);
      },
    // submitForm(form) {
    //   this.$refs[form].validate(async (valid) => {
    //     if (valid)
    //       await store.commit("ingreso/ADD_DETALLE_INGRESO", this.detalles_form);
    //     this.$refs[form].resetFields();
    //   });
    // },


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
      onChangePage(pageOfItems) {
          this.pageOfItems = pageOfItems;
      },
      goBack() {
          this.$router.go(-1);
      }
  },
    mounted() {
        store.dispatch("articulo/getItems");
        store.dispatch("articulo/getLotes");
    },
};
</script>
<!--<div class="col-md-12">-->
<!--<el-alert-->
<!--    v-if="alert.show"-->
<!--    :title="alert.title"-->
<!--    :type="alert.color"-->
<!--    :description="alert.message"-->
<!--    @close="alert.show = false"-->
<!--    show-icon-->
<!--    closable-->
<!--&gt;-->
<!--</el-alert>-->
<!--<div class="row justify-content-between mb-4  mr-1 ml-1  mt-4">-->
<!--    <div class="pull-lef">-->
<!--        <el-page-header  @back="goBack" content="Ingresos" class="mt-2"></el-page-header>-->
<!--    </div>-->
<!--    <div class="pull-right">-->
<!--    </div>-->
<!--</div>-->
<!--<div class="card">-->
<!--    <div class="card-header border-0">-->
<!--        <h3 class="card-title">Registro de ingreso | detalles</h3>-->
<!--        <div class="card-tools"></div>-->
<!--    </div>-->
<!--    <div class="card-body">-->
<!--        <div class="row mt-5">-->
<!--            <el-form-->
<!--                class="labeles"-->
<!--                :model="detalles_form"-->
<!--                :rules="rules"-->
<!--                ref="DetalleIngresoForm"-->
<!--                label-width="150px"-->
<!--            >-->
<!--                <div class="row justify-content-md-left">-->
<!--                    <el-form-item label="Agregar articulo" prop="articulo">-->
<!--                        <el-select-->
<!--                            style="width:830px"-->
<!--                            v-model="detalles_form.articulo"-->
<!--                            filterable-->
<!--                            placeholder="Seleccione el articulo a ingresar"-->
<!--                            loading-text="buscando.."-->
<!--                            no-match-text="No se encontraron registros"-->
<!--                        >-->
<!--                            <el-option-->
<!--                                v-for="(item,index) in GET_ITEMS_ARTICULO"-->
<!--                                :key="index"-->
<!--                                :label="`${item.nombre } &#45;&#45; ${item.unidad_medida.nombre}`"-->
<!--                                :value="item.id"-->
<!--                            ></el-option>-->
<!--                        </el-select>-->
<!--                        <router-link :to="{ name: 'additem' }">-->
<!--                            <el-button type="primary" icon="el-icon-plus"></el-button>-->
<!--                        </router-link>-->
<!--                    </el-form-item>-->
<!--                </div>-->
<!--                <div class="row justify-content-md-left">-->
<!--                    <el-form-item label="Cantidad" prop="cantidad">-->
<!--                        <el-input-number-->
<!--                            controls-position="right"-->
<!--                            v-model="detalles_form.cantidad"-->
<!--                            :precision="2"-->
<!--                            :min="1"-->
<!--                        ></el-input-number>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item label="Precio Total" prop="precio">-->
<!--                        <el-input-number-->
<!--                            controls-position="right"-->
<!--                            v-model="detalles_form.precio"-->
<!--                            :precision="2"-->
<!--                            :step="1"-->
<!--                            :min="0"-->
<!--                        ></el-input-number>-->
<!--                    </el-form-item>-->
<!--                    &lt;!&ndash;<el-form-item label="Precio unitario" prop="precio">-->
<!--                      <el-input-number-->
<!--                        controls-position="right"-->
<!--                        v-model="detalles_form.precio"-->
<!--                        :precision="2"-->
<!--                        :step="0.1"-->
<!--                        :min="0"-->
<!--                      ></el-input-number>-->
<!--                    </el-form-item>&ndash;&gt;-->
<!--                </div>-->

<!--                <div class="row">-->
<!--                    <el-form-item>-->
<!--                        <el-button-->
<!--                            type="primary"-->
<!--                            @click="submitForm('DetalleIngresoForm')"-->
<!--                            icon="el-icon-plus"-->
<!--                        >Agregar</el-button>-->
<!--                        &lt;!&ndash; <el-button @click="cancelForm('DetalleIngresoForm')">Cancelar</el-button> &ndash;&gt;-->
<!--                    </el-form-item>-->
<!--                </div>-->
<!--            </el-form>-->
<!--        </div>-->
<!--        <div class="row justify-content-md-center">-->
<!--            <div>-->
<!--                <el-table :data="GET_ITEMS_DETALLE_INGRESO" style="width: 100%">-->
<!--                    <el-table-column type="index"></el-table-column>-->
<!--                    <el-table-column label="Articulo" width="280" prop="articulo" sortable>-->
<!--                        <template slot-scope="scope">-->
<!--                            {{ findItem(scope.row.articulo).nombre }}-->
<!--                        </template>-->
<!--                    </el-table-column>-->
<!--                    <el-table-column label="Medida" width="150" prop="medida" sortable>-->
<!--                        <template slot-scope="scope">-->
<!--                            {{ findItem(scope.row.articulo).unidad_medida.nombre }}-->
<!--                        </template>-->
<!--                    </el-table-column>-->
<!--                    <el-table-column label="Precio u." width="120" prop="precio" sortable>-->
<!--                        <template slot-scope="scope"><b>Bs. </b> {{ (scope.row.precio) / (scope.row.cantidad) }}</template>-->
<!--                    </el-table-column>-->
<!--                    <el-table-column label="Cantidad" width="120" prop="cantidad" sortable>-->
<!--                        <template slot-scope="scope">-->
<!--                            {{ scope.row.cantidad }} <b>{{ findItem(scope.row.articulo).unidad_medida.sigla }}</b>-->
<!--                        </template>-->
<!--                    </el-table-column>-->
<!--                    <el-table-column label="Sub total" width="120">-->
<!--                        <template slot-scope="scope">-->
<!--                            <b>Bs. </b>-->
<!--                            {{-->
<!--                                scope.row.precio-->
<!--                            }}-->
<!--                        </template>-->
<!--                    </el-table-column>-->
<!--                    <el-table-column label>-->
<!--                        <template slot-scope="scope">-->
<!--                            <el-button-->
<!--                                size="mini"-->
<!--                                type="danger"-->
<!--                                @click="DELETE_DETALLE_INGRESO(scope.row.articulo)-->
<!--                                            "-->
<!--                                icon="el-icon-close"-->
<!--                            ></el-button>-->
<!--                        </template>-->
<!--                    </el-table-column>-->
<!--                </el-table>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="row pt-4 col-md-4 offset-md-8">-->
<!--            <h5>-->
<!--                Total: Bs-->
<!--                <strong>{{ GET_TOTAL_DETALLE_INGRESOS }}</strong>-->
<!--            </h5>-->
<!--        </div>-->
<!--        <div class="row pt-3 col-md-4 offset-md-8">-->
<!--            <el-button-->
<!--                type="primary"-->
<!--                @click="onRegister()"-->
<!--                v-loading.fullscreen.lock="loading_form"-->
<!--                :disabled="this.$store.state.ingreso.data_form.detalle_ingreso.length < 1"-->
<!--                icon="el-icon-plus"-->
<!--            >Registrar</el-button>-->
<!--            <el-button @click="cancelForm('DetalleIngresoForm')">Cancelar</el-button>-->
<!--        </div>-->
<!--    </div>-->
<!--</div>-->
<!--</div>-->
