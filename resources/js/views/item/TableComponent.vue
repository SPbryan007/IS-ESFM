<template>
  <div>
    <div class="card">
      <div class="card-header border-0">
        <h3 class="card-title">Lista de articulos</h3>
        <div class="card-tools">
          <a
            href="#"
            class="btn btn-tool btn-sm"
            v-tooltip.top-center="
                            'Filtrar por Nombre, Codigo, Linea, Partida'
                        "
          >
            <i class="fas fa-search"></i>
            -
            <input
              v-model="$store.state.item.searchQuery"
              type="text"
              name="table_search"
              placeholder="Buscar"
            />
          </a>
          <label>
            <select
              v-tooltip.top-center="'Registros por página'"
              type="text"
              @change="refresh()"
              v-model="perpage"
              class="custom-select custom-select-sm form-control form-control-sm"
              value
            >
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
          </label>
          <a href="#" class="btn btn-tool btn-sm" v-tooltip.top-center="'Total registros'">
            <strong>1 - 10 / 100</strong>
          </a>
          <router-link
            v-tooltip.top-center="'Registrar'"
            :to="{ name: 'additem' }"
            href="#"
            class="btn btn-tool btn-sm"
          >
            <i class="fas fa-plus text-success"></i>
          </router-link>
          <a href="#" class="btn btn-tool btn-sm" v-tooltip.top-center="'Imprimir'">
            <i class="fas fa-print"></i>
          </a>
          <a href="#" class="btn btn-tool btn-sm" v-tooltip.top-center="'Exportar a excel'">
            <i class="fas fa-download"></i>
          </a>
        </div>
      </div>

      <div class="card-body table-responsive p-0">
        <table class="table table-striped table-valign-middle">
          <thead>
            <tr>
              <th
                v-for="(header, index) in headers"
                @click="
                                    sortBy(header.sortBy);
                                    sortByHeader();
                                "
                :class="[
                                    header.sortable ? 'sortable' : '',
                                    header.key.toLowerCase() === currentSortBy
                                        ? currentSortDir
                                        : ''
                                ]"
                :key="index"
              >
                <!-- <i :class="[header.icon]"></i> -->
                {{ header.key }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in pageOfItems" :key="index">
              <td>{{ item.codigo }}</td>
              <td>{{ item.partida_codigo }}</td>
              <td>{{ item.nombre }}</td>
              <td>
                <el-tag
                  :type="item.linea == 1
                                                ? 'success'
                                                : item.linea == 2
                                                ? ''
                                                : 'warning'"
                >
                  <strong>{{ item.linea }}</strong>
                </el-tag>
              </td>
              <td>{{ item.um_nombre }}</td>
              <td>{{ item.stock }} {{ item.um_sigla }}</td>
              <td>{{ item.saldo }} Bs.</td>
              <td>
                <router-link
                  v-on:click.native="OnClickEdit(item.idItem)"
                  :to="{ name: 'edititem' }"
                  href="#"
                >
                  <el-button size="mini">Editar</el-button>
                </router-link>

                <el-button
                  size="mini"
                  type="danger"
                  @click="OnClickDelete({
                                            id: item.idItem,
                                            progress: $Progress,
                                            confirm:$confirm,
                                            message:$message
                                        })
                                    "
                >Eliminar</el-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div v-if="dt_loading" class="d-flex justify-content-center pt-3 pb-3">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>

        <div v-if="dt_error" class="text-center">
          <span class="text-danger text-center">Error al cargar los datos de la base de datos..</span>
        </div>
        <div
          class="text-center"
          v-if="
                        GET_FILTER_ITEMS_BY_DEFAULT.length === 0 &&
                            dt_loading === false
                    "
        >
          <span class="text-info text-center">No se encontraron registros..</span>
        </div>
        <center>
          <jw-pagination
            ref="jw"
            :pageSize="PerPage"
            :items="GET_FILTER_ITEMS_BY_DEFAULT"
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
      },
      headers: [
        {
          key: "Codigo",
          sortBy: "codigo",
          width: "20%",
          sortable: true,
          icon: "fas fa-id-badge"
        },
        {
          key: "Partida",
          sortBy: "partida_codigo",
          width: "20%",
          sortable: true,
          icon: "fas fa-file-signature"
        },
        {
          key: "Nombre",
          sortBy: "nombre",
          width: "20%",
          sortable: true,
          icon: "fas fa-file-signature"
        },

        {
          key: "Linea",
          sortBy: "linea",
          width: "20%",
          sortable: true,
          icon: "fas fa-map-marked"
        },
        {
          key: "Medida",
          sortBy: "medida",
          width: "20%",
          sortable: true,
          icon: "fas fa-project-diagram"
        },
        {
          key: "Stock",
          sortBy: "stock",
          width: "20%",
          sortable: true,
          icon: "fas fa-phone-square-alt"
        },
        {
          key: "Saldo",
          sortBy: "saldo",
          width: "20%",
          sortable: true,
          icon: "fas fa-user-tie"
        },

        { key: "Accion", width: "5%", sortable: false }
      ]
    };
  },
  computed: {
    PerPage: function() {
      return this.perpage ? parseInt(this.perpage) : 25;
    },
    ...mapState("item", [
      "items",
      "currentSortBy",
      "currentSortDir",
      "dt_loading",
      "dt_error",
      "pageSize",
      "currentPage",
      "perPage",
      "dt_no_found",
      "agregar",
      "editar"
    ]),
    ...mapGetters("item", ["GET_FILTER_ITEMS_BY_DEFAULT"])
  },
  methods: {
    refresh: function() {
      let self = this.$refs;
      setTimeout(() => {
        self.jw.setPage(1);
      }, 0);
    },
    ...mapMutations("item", [
      "sortBy",
      "sortByHeader",
      "NEXT_PAGE",
      "PREV_PAGE"
    ]),
    ...mapActions("item", ["OnClickEdit", "OnClickDelete"]),
    onChangePage(pageOfItems) {
      this.$store.state.item.pageOfItems = pageOfItems;
      this.pageOfItems = pageOfItems;
    }
  },
  created() {
    this.$store.dispatch("item/GET_DATA_FROM_SERVER");
    this.$store.dispatch("partida/GET_DATA_FROM_SERVER");
    this.$store.dispatch("unidad_medida/GET_DATA_FROM_SERVER");
  },
  mounted() {
    // $(function() {
    //   $('[data-toggle="tooltip"]').tooltip();
    // });
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
</style>
