<template>
  <div>
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
    <div class="card">
      <div class="card-header border-0">
        <h3 class="card-title">Lista</h3>
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

          <router-link v-tooltip.top-center="'Registrar'" :to="{ name: 'addgestion' }" href="#">
            <el-button type="primary" size="small" plain>
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
            <div class="col-4">
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
            <div class="col-4">
              <el-form-item label="Buscar">
                <el-input
                  size="small"
                  placeholder="Filtrar por nombre"
                  v-model="$store.state.gestion.searchQuery"
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
          :data="pageOfItems"
          :default-sort="{prop: 'nombre', order: 'descending'}"
          style="width: 100%"
          stripe
        >
          <el-table-column prop="nombre" label="Nombre" sortable width="250">
            <template slot-scope="scope">
              <i class="el-icon-chat-square"></i>
              <span style="margin-left: 10px">{{ scope.row.nombre}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="fecha_inicio" label="Inicio" width="150">
            <template slot-scope="scope">
              <i class="el-icon-date"></i>
              <span style="margin-left: 10px">{{ scope.row.fecha_inicio}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="fecha_fin" label="Conclución" width="150">
            <template slot-scope="scope">
              <i class="el-icon-date"></i>
              <span style="margin-left: 10px">{{ scope.row.fecha_fin}}</span>
            </template>
          </el-table-column>

          <el-table-column
            prop="estado"
            label="Estado"
            :filters="[{ text: 'Gestion terminada', value: 'FINALIZADO' }, { text: 'Gestion actual', value: 'EN CURSO' }]"
            :filter-method="filterTag"
            filter-placement="bottom-end"
            width="150"
          >
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.estado === 'FINALIZADO' ? 'danger' : 'success'"
                disable-transitions
              >
                <strong>{{scope.row.estado}}</strong>
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="descripcion" label="Descripcion" width="180">
            <template slot-scope="scope">
              <!-- <el-button icon="el-icon-view" @click="visible = !visible" circle></el-button> -->
              <el-popover
                placement="top"
                title="Descripcion"
                width="300"
                trigger="hover"
                :content="scope.row.descripcion"
              >
                <el-link slot="reference" type="info">
                  <i class="el-icon-view"></i>
                </el-link>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column>
            <!-- <template slot="header" slot-scope="scope">
              <el-input v-model="search" size="mini" placeholder="Type to search" />
            </template>-->
            <template slot-scope="scope">
              <!-- <el-dropdown>
                <span class="el-dropdown-link">
                  Más..
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-plus">Finalizar Gestion</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-circle-plus">Editar</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-circle-plus-outline">Elimnar</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>-->
              <el-button
                v-if="scope.row.estado != 'FINALIZADO'"
                type="warning"
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
              >Finalizar</el-button>
              <el-button
                v-if="scope.row.estado != 'FINALIZADO'"
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
              >Editar</el-button>
              <!-- <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >Eliminar</el-button>-->
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
      self: null,
      pageOfItems: [],
      sizePerPage: 10,
      perpage: 10,
      labels: {
        first: "<<",
        last: ">>",
        previous: "anterior",
        next: "siguiente",
      },
    };
  },
  computed: {
    ...mapState("gestion", [
      "items",
      "loading_table",
      "error_table",
      "loading_form",
    ]),
    ...mapGetters("gestion", ["GET_FILTER_ITEMS"]),
    PerPage: function () {
      return this.perpage ? parseInt(this.perpage) : 25;
    },
  },
  methods: {
    filterTag(value, row) {
      return row.estado === value;
    },
    ...mapMutations("gestion", ["SET_EDIT_FORM", "CLEAR_FORM"]),
    OnClickDelete(index, row) {
      this.$confirm(
        `¿ Esta seguro que desea eliminar la gestion ${row.codigo} ?`,
        "Advertencia",
        {
          confirmButtonText: "Si eliminar",
          cancelButtonText: "Cancelar",
          type: "warning",
        }
      )
        .then(() => {
          this.self = index;
          store.dispatch("gestion/deleteItem", {
            index,
            id: row.idGestion,
            message: this.$message,
            progress: this.$Progress,
          });
        })
        .catch(() => {
          return null;
        });
    },
    refresh: function () {
      let self = this.$refs;
      setTimeout(() => {
        self.jw.setPage(1);
      }, 0);
    },
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
  },
  created() {
    this.$store.dispatch("gestion/getItems");
  },
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
