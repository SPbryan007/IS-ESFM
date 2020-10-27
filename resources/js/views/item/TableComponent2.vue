<template>
  <div style="margin-left:-65px;margin-right:-65px">
    <!-- <div class="row justify-content-end">
      <div class="col-4 d-flex pb-2 pr-2">
        <router-link
          v-tooltip.top-center="'Registrar'"
          :to="{ name: 'addgestion' }"
          href="#"
          class="btn btn-success btn-sm text-white ml-auto"
        >
          Nuevo
          <i class="fas fa-plus text-white"></i>
        </router-link>
      </div>
    </div>-->
    <div class="pb-2" v-if="error_table">
      <el-alert
        title="Ha ocurrido un error al cargar los datos"
        type="error"
        description="Verifique la conexión con la base de datos"
      ></el-alert>
    </div>
    <div class="card">
      <div class="card-header border-0">
        <h3 class="card-title">
          Lista
          <i v-if="loading_table" class="el-icon-loading" style="font-size: 1.3rem;"></i>
        </h3>
        <div class="card-tools">
          <!-- <a
            href="#"
            class="btn btn-tool btn-sm"
            v-tooltip.top-center="
                            'Filtrar por Nombre, Estado, Fecha'
                        "
          >
            <i class="fas fa-search"></i>
            -
            <input
              v-model="$store.state.periodo.searchQuery"
              type="text"
              name="table_search"
              placeholder="Buscar"
            />
          </a>
          <label></label>-->

          <!-- <a href="#" class="btn btn-tool btn-sm" v-tooltip.top-center="'Total registros'">
            <strong>1 - 10 / 100</strong>
          </a>-->

          <router-link v-on:click.native="CLEAR_FORM" :to="{ name: 'additem' }" href="#">
            <el-button type="primary" size="small">
              Nuevo
              <i class="fas fa-plus"></i>
            </el-button>
          </router-link>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <!-- <router-link
            v-tooltip.top-center="'Registrar'"
            :to="{ name: 'addgestion' }"
            href="#"
            class="btn btn-success btn-sm text-white"
          >
            Nuevo
            <i class="fas fa-plus text-white"></i>
          </router-link>-->
        </div>
        <el-form :inline="true" class="demo-form-inline" label-width="100px">
          <div class="row justify-content-between">
            <div class="col-4 text-left">
              <el-form-item label="Mostrar">
                <el-select
                  placeholder="Select"
                  style="width:100px"
                  size="mini"
                  @change="refresh()"
                  v-model="perpage"
                >
                  <el-option
                    v-for="item in [{value:10,label:'10'},{value:25,label:'25'},{value:50,label:'50'},{value:100,label:'100'}]"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
            <!-- <div class="col-md-4 text-center">
              <el-alert
                title="Ha ocurrido un error al cargar los datos"
                type="error"
                description="Verifique la conexión con la base de datos"
              ></el-alert>
            </div>-->
            <div class="col-4 text-right">
              <el-form-item label="Buscar">
                <el-input
                  size="small"
                  placeholder="Filtrar por nombre"
                  v-model="$store.state.articulo.searchQuery"
                >
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
                <!-- <el-input

                  v-model="$store.state.periodo.searchQuery"
                  placeholder="Filtrar por Nombre"
                ></el-input>-->
              </el-form-item>
            </div>
          </div>
        </el-form>

        <el-table
          stripe
          :data="pageOfItems"
          :default-sort="{prop: 'nombre', order: 'descending'}"
          style="width: 100%"
        >
          <el-table-column
            :fit="true"
            prop="codigo"
            label="Codigo"
            width="100"
            sortable
            align="center"
            header-align="center"
          ></el-table-column>
          <el-table-column
            prop="partida_codigo"
            label="Partida"
            width="100"
            sortable
            align="center"
            header-align="center"
          ></el-table-column>
          <el-table-column
            prop="nombre"
            label="Nombre"
            width="270"
            sortable
            align="center"
            header-align="center"
          ></el-table-column>
          <el-table-column
            prop="linea"
            label="Linea"
            width="100"
            sortable
            align="center"
            header-align="center"
          >
            <template slot-scope="scope">
              <!-- <i class="el-icon-s-data"></i> -->
              <span style="margin-left: 10px">
                <el-tag size="medium" type="info">
                  <strong>{{ scope.row.linea }}</strong>
                </el-tag>
              </span>
            </template>
          </el-table-column>
          <el-table-column
            prop="um_nombre"
            label="Medida"
            width="150"
            sortable
            align="center"
            header-align="center"
          >
            <template slot-scope="scope">
              <!-- <i class="el-icon-chat-square"></i> -->
              <span style="margin-left: 10px">{{ scope.row.um_nombre}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="stock"
            label="Stock"
            width="150"
            sortable
            align="center"
            header-align="center"
          >
            <template slot-scope="scope">
              <i class="el-icon-s-data"></i>
              <span style="margin-left: 10px">
                <el-tag size="medium">
                  {{ scope.row.stock }}
                  <strong>{{ scope.row.um_sigla }}</strong>
                </el-tag>
              </span>
            </template>
          </el-table-column>
          <el-table-column
            prop="saldo"
            label="Saldo"
            width="150"
            sortable
            align="center"
            header-align="center"
          >
            <template slot-scope="scope">
              <i class="fas fa-dollar-sign"></i>
              <span style="margin-left: 10px">
                <el-tag size="medium" type="success">
                  {{ scope.row.saldo }}
                  <strong>Bs</strong>
                </el-tag>
              </span>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <!-- <el-dropdown trigger="click">
                <span class="el-dropdown-link text-muted">
                  Más..
                  <i class="fas fa-ellipsis-v"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-circle-edit">Editar</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-circle-plus-outline">Elimnar</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>-->
              <router-link
                v-on:click.native="SET_EDIT_FORM(scope.row)"
                :to="{ name: 'edititem',params:{id:scope.row.idItem } }"
              >
                <el-button size="mini">Editar</el-button>
              </router-link>

              <el-button
                type="danger"
                size="mini"
                :loading="loading_form"
                @click="OnClickDelete(scope.$index, scope.row)"
              >Eliminar</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <center>
          <jw-pagination
            ref="jw"
            :pageSize="PerPage"
            :items="GET_FILTER_ITEMS"
            :labels="labels"
            @changePage="onChangePage"
          ></jw-pagination>
        </center>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import store from "../../store";
export default {
  name: "TableComponent",
  data() {
    return {
      pageOfItems: [],
      sizePerPage: 10,
      perpage: 10,
      labels: {
        first: "<<",
        last: ">>",
        previous: "anterior",
        next: "siguiente"
      }
    };
  },
  computed: {
    ...mapState("articulo", [
      "items",
      "loading_table",
      "error_table",
      "loading_form"
    ]),
    ...mapGetters("articulo", ["GET_FILTER_ITEMS"]),
    //  ...mapGetters("partida", ["GET_ITEMS_PARTIDA"]),
    PerPage: function() {
      return this.perpage ? parseInt(this.perpage) : 25;
    }
  },
  methods: {
    ...mapMutations("articulo", ["SET_EDIT_FORM", "CLEAR_FORM"]),
    OnClickDelete(index, row) {
      this.$confirm(
        `¿ Esta seguro que desea eliminar el articulo ${row.codigo} ?`,
        "Advertencia",
        {
          confirmButtonText: "Si eliminar",
          cancelButtonText: "Cancelar",
          type: "warning"
        }
      )
        .then(() => {
          store.dispatch("articulo/deleteItem", {
            index,
            id: row.idItem,
            message: this.$message,
            progress: this.$Progress
          });
        })
        .catch(() => {
          return null;
        });
    },
    refresh: function() {
      let self = this.$refs;
      setTimeout(() => {
        self.jw.setPage(1);
      }, 0);
    },
    onChangePage(pageOfItems) {
      this.$store.state.articulo.pageOfItems = pageOfItems;
      this.pageOfItems = pageOfItems;
    }
  },
  created() {
    this.$store.dispatch("articulo/getItems");
    // this.$store.dispatch("item/GET_DATA_FROM_SERVER");
    // this.$store.dispatch("partida/GET_DATA_FROM_SERVER");
    // this.$store.dispatch("unidad_medida/GET_DATA_FROM_SERVER");
  }
};
</script>
<style>
.table th,
.table td {
  padding: 0.5rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}
th.sortable {
  position: relative;
  cursor: pointer;
}

th.sortable::after {
  font-family: FontAwesome;
  content: "\f0dc";
  position: absolute;
  right: 8px;
  color: #999;
}

th.sortable.asc::after {
  content: "\f0d8";
}

th.sortable.desc::after {
  content: "\f0d7";
}

th.sortable:hover::after {
  color: #333;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
