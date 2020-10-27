<template>
  <div>
    <div class="card">
      <div class="card-header border-0">
        <h3 class="card-title">Detalle del inventario inicial</h3>
        <div class="card-tools">
          <!-- <a
                        href="#"
                        class="btn btn-tool btn-sm"
                        v-tooltip.top-center="'Imprimir'"
                    >
                        <i class="fas fa-print"></i>
                    </a>
                    <a
                        href="#"
                        class="btn btn-tool btn-sm"
                        v-tooltip.top-center="'Exportar a excel'"
                    >
                        <i class="fas fa-download"></i>
          </a>-->
        </div>
      </div>

      <div class="card-body">
        <!-- <el-divider content-position="left">Detalle de ingreso</el-divider> -->
        <div class>
          <dl class="pl-5 row">
            <dt class="col-sm-2">Gestion :</dt>
            <dd class="col-sm-9">{{ data_form.nombre }}</dd>
            <dt class="col-sm-2 text-truncate">Del :</dt>
            <dd class="col-sm-9">{{ data_form.fecha_inicio | dateformat }}</dd>
            <dt class="col-sm-2">Al :</dt>
            <dd class="col-sm-9">{{ data_form.fecha_fin | dateformat}}</dd>
          </dl>
        </div>

        <el-table stripe :data="GET_DETALLE_INGRESOS" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <!-- <el-table :data="props.row.lote" stripe style="width: 100%" :show-header="false">
                <el-table-column align="center" prop label="Nro Lote"></el-table-column>
                <el-table-column prop="stock" label="Cantidad">Hola</el-table-column>
                <el-table-column prop="precio_unitario" label="Precio"></el-table-column>
                <el-table-column prop="saldo" label="Saldo"></el-table-column>
                <el-table-column prop="tipo_ingreso" label="Tipo de Ingreso"></el-table-column>
              </el-table>-->
              <!-- <h3>Lote 1</h3>
              <div v-for="(item,index) in props.row.lote" :key="index">
                <p>Cantidad: {{ item.stock }}</p>
                <p>Precio unitario: {{ item.precio_unitario }}</p>
                <p>Saldo: {{ item.saldo }}</p>
                <p>Tipo de ingreso: {{ item.tipo_ingreso }}</p>
              </div>-->
              <el-table stripe :data="props.row.lotes" v-if="props.row.lotes[0].stock != 0" style="width: 100%;margin-top:-20px">
                <el-table-column label="Nro de Lote" width="150" type="index" sortable></el-table-column>
                <el-table-column label="Cantidad" sortable>
                  <template slot-scope="scope">
                    <i class="el-icon-s-data"></i>
                    <span style="margin-left: 10px">
                      <el-tag size="medium">{{ scope.row.stock }}</el-tag>
                    </span>
                  </template>
                </el-table-column>
                <el-table-column label="Precio Unitario" sortable>
                  <template slot-scope="scope">
                    <i class="fas fa-dollar-sign"></i>
                    <span style="margin-left: 10px">
                      <el-tag size="medium" type="success">
                        {{ scope.row.precio }}
                        <strong>Bs</strong>
                      </el-tag>
                    </span>
                  </template>
                </el-table-column>
                <el-table-column label="Saldo" sortable>
                  <template slot-scope="scope">
                    <i class="fas fa-sack-dollar"></i>
                    <span style="margin-left: 10px">
                      <el-tag size="medium" type="warning">
                        {{ scope.row.saldo }}
                        <strong>Bs</strong>
                      </el-tag>
                    </span>
                  </template>
                </el-table-column>
                <el-table-column label="Tipo de ingreso" sortable>
                  <template slot-scope="scope">
                    <i class="fas fa-shopping-cart"></i>
                    <span style="margin-left: 10px">
                      <el-tag size="medium" type="info">
                        <strong>{{ scope.row.tipo_ingreso }}</strong>
                      </el-tag>
                    </span>
                  </template>
                </el-table-column>
                <!-- <el-table-column label="Operaciones" width="180">
                  <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Editar</el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)"
                    >Eliminar</el-button>
                  </template>
                </el-table-column>-->
              </el-table>
            </template>
          </el-table-column>
          <el-table-column label="Articulo" prop="nombre" width="600" sortable></el-table-column>
          <el-table-column label="Cantidad inicial" prop="stock" sortable></el-table-column>
          <el-table-column label="Saldo inicial" prop="saldo" sortable></el-table-column>
          <!-- <el-table-column label="Operacion">
            <template slot-scope="scope">
              <router-link :to="{ name: 'nuevo_lote',params:{id: scope.row.idItem }}" href="#">
                <el-button size="mini" @click="(scope.$index, scope.row)">Agregar lote</el-button>
              </router-link>
            </template>
          </el-table-column>-->

          <!-- <el-table-column prop="descripcion" label="Descripcion"></el-table-column> -->
        </el-table>
        <div class="row container pt-4 pl-5">
          <el-button
            type="primary"
            @click="iniciar"
            v-loading.fullscreen.lock="loading_form"
            element-loading-text="Iniciando periodo..."
          >Iniciar periodo</el-button>
          <el-button @click="cancelar">Cancelar</el-button>
        </div>
      </div>
    </div>
    <div class="row"></div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import store from "../../store/index";
import { router } from "../../routes";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("gestion", [
      "data_form",
      "detalle_ingreso",
      "submit_error",
      "submit_success",
      "loading_form"
    ]),
    ...mapGetters("ingreso", ["GET_DETALLE_INGRESOS"])
  },
  methods: {
    iniciar() {
      this.$confirm(
        `¿ Esta seguro de iniciar el periodo ?, No se podra revertir el proceso despues de iniciar`,
        "Advertencia",
        {
          confirmButtonText: "Si iniciar",
          cancelButtonText: "Cancelar",
          type: "warning"
        }
      )
        .then(() => {
          store.dispatch("gestion/iniciarPeriodo", {
            message: this.$message
          });
        })
        .catch(() => {
          return null;
        });
    },
    cancelar() {
      router.push({ name: "gestion" });
    }
  },
  created() {
    store.dispatch("ingreso/getDetalleIngreso");
  }
};
</script>
