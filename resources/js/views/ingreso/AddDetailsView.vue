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
                      <div class="row justify-content-center">
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
                          <el-dialog :title="detalles_form.articulo_nombre" :visible.sync="dialogFormVisible" append-to-body>
                              <el-form :model="detalles_form" label-width="140px" ref="AddDetailsForm" :rules="rules">
                                  <el-form-item label="Unidad de medida:" prop="unidad_medida">
                                      <el-select
                                          style="width:340px"
                                          v-model="detalles_form.unidad_medida"
                                          filterable
                                          placeholder="Seleccione la unidad de medida"
                                          loading-text="buscando.."
                                          no-match-text="No se encontraron registros"
                                      >
                                          <el-option
                                              v-for="(item, index) in GET_ITEMS_UNIDAD_MEDIDA"
                                              :key="index"
                                              :label="`${item.sigla} | ${item.nombre}`"
                                              :value="item.id"
                                          ></el-option>
                                      </el-select>
                                      <router-link :to="{name:'addunidad_medida'}">
                                          <el-button type="primary" icon="el-icon-plus"></el-button>
                                      </router-link>
                                  </el-form-item>
                                  <el-form-item label="Marca:" prop="marca">
                                      <el-input  style="width:250px" v-model="detalles_form.marca" ></el-input>
                                  </el-form-item>
                                  <el-form-item label="Cantidad:" >
                                      <el-input-number v-model="detalles_form.cantidad"  :precision="2" :step="1"  :min="0.1" ></el-input-number>
                                  </el-form-item>
                                  <el-form-item label="Sub Total:" >
                                      <el-input-number  v-model="detalles_form.total"  :precision="2" :step="1"  :min="1" ></el-input-number>
                                  </el-form-item>
                                  <el-form-item label="Precio U:" >
                                      {{ isNaN(detalles_form.total/detalles_form.cantidad) ? 0 : (detalles_form.total/detalles_form.cantidad).toFixed(2) }} Bs.
                                  </el-form-item>

                              </el-form>
                              <span slot="footer" class="dialog-footer">
                            <el-button @click="OnClickCancelForm('AddDetailsForm')">Cancelar</el-button>
                            <el-button type="primary" @click="OnClickAddForm('AddDetailsForm')">Agregar</el-button>
                          </span>
                          </el-dialog>

                          <el-table-column type="index" width="40" label="N°"></el-table-column>
                          <el-table-column property="codigo" label="Codigo" width="100"></el-table-column>
                          <el-table-column property="nombre" label="Articulo" width="440"></el-table-column>
                          <el-table-column property="medida" label="medida" width="90">
                              <template slot-scope="scope">
                                  {{ scope.row.lotes.length > 0 ? scope.row.lotes[0].unidad_medida.nombre : ' - ' }}
                              </template>
                          </el-table-column>
                          <el-table-column property="stock" label="Disponibles" width="100"></el-table-column>

                          <el-table-column>
                              <template slot-scope="scope">
                                  <el-button
                                      type="info"
                                      size="mini"
                                      @click="OnclickAddDialog(scope.row)"
                                      icon="el-icon-plus"
                                  >Añadir</el-button>
                              </template>
                          </el-table-column>
                      </el-table>
                      <div class="row justify-content-center mt-4">
                          <jw-pagination
                              ref="jw"
                              :pageSize="perpage"
                              :items="GET_FILTER_ITEMS_DETAILS"
                              :labels="labels"
                              @changePage="onChangePage"
                          ></jw-pagination>
                      </div>


                  </el-dialog>

                  <el-table :data="GET_ITEMS_DETALLE_INGRESO"  >
                      <el-table-column type="index" width="40" label="N°"></el-table-column>
<!--                      <el-table-column label="Código" width="120" prop="codigo" sortable>-->
<!--                          <template slot-scope="scope">-->
<!--                              {{ findItem(scope.row.articulo).codigo }}-->
<!--                          </template>-->
<!--                      </el-table-column>-->
                      <el-table-column label="Articulo" width="400" prop="articulo">
                          <template slot-scope="scope">
                              {{ findItem(scope.row.articulo).nombre }}
                          </template>
                      </el-table-column>

                      <el-table-column label="Marca" width="130" prop="marca" ></el-table-column>
                      <el-table-column label="Medida" width="130" prop="unidad_medida" >
                          <template slot-scope="scope">
                              {{ findMedida(scope.row.unidad_medida).nombre }}
                          </template>
                      </el-table-column>
                      <el-table-column label="P.U." width="100" prop="precio">
                          <template slot-scope="scope">
                             <span class="text-primary"> {{ (scope.row.total / scope.row.cantidad).toFixed(2) }}</span>
                          </template>
                      </el-table-column>
                      <el-table-column label="Cantidad" width="100" prop="cantidad">
                          <template slot-scope="scope">
                             <span class="text-primary">  {{ (scope.row.cantidad).toFixed(2) }}</span>
                          </template>
                      </el-table-column>
                      <el-table-column label="Sub Total" width="120" prop="total">
                          <template slot-scope="scope">
                             <span class="text-primary"> {{ (scope.row.total).toFixed(2) }}</span>
                          </template>
                      </el-table-column>
                      <el-table-column width="50">
                          <template slot-scope="scope">
                              <el-button
                                  size="mini"
                                  type="danger"
                                  @click="DELETE_DETALLE_INGRESO(scope.row.articulo)"
                                  icon="el-icon-close"
                                  circle
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
        formLabelWidth: '120px',
        dialogFormVisible: false,
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
          articulo_nombre: '',
          marca:null,
          unidad_medida:null,
          articulo: null,
        cantidad: 1,
        precio: 0,
            total:0,
      },
      rules: {
        unidad_medida: [
          {
            required: true,
            message: "Debe seleccionar una unidad de medida",
            trigger: "change",
          },
        ],
          marca: [
              {
                  required: false,
                  trigger: "blur",
              },
              { max: 155, message: "Debe tener menos de 155 caracteres", trigger: "blur" }
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
      ...mapGetters("unidad_medida", ["GET_ITEMS_UNIDAD_MEDIDA"])
  },
  methods: {
      OnClickAddForm(form){
          this.$refs[form].validate((valid) => {
              if (valid) {
                  this.dialogFormVisible = false;
                  store.commit("ingreso/ADD_DETALLE_INGRESO",this.detalles_form);
                  this.$refs[form].resetFields();
              }
          });

      },
      OnClickCancelForm(form){
          this.$refs[form].resetFields();
          this.dialogFormVisible = false;
      },
      OnclickAddDialog(row){
          this.detalles_form.articulo = row.id;
          this.detalles_form.articulo_nombre = row.nombre;
          this.dialogFormVisible = true;
       //   store.commit("ingreso/ADD_DETALLE_INGRESO",row);
      },

      ...mapMutations("ingreso", ["DELETE_DETALLE_INGRESO"]),
      findItem(id) {
          const items = store.getters["articulo/GET_ITEMS_ARTICULO"];
          return items.find((item) => item.id === id);
      },
      findMedida(id) {
          const items = store.getters["unidad_medida/GET_ITEMS_UNIDAD_MEDIDA"];
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
        store.dispatch('login/getUser');
        store.state.articulo.withTrashed=false;
        store.state.unidad_medida.withTrashed=false;
        store.dispatch("articulo/getItems");
        store.dispatch("articulo/getLotes");
        store.dispatch("unidad_medida/getItems");
    },
};
</script>
