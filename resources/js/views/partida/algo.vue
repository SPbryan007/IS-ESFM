<template>
  <div>
    <div class="dataTables_wrapper dt-bootstrap4">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <div class="dataTables_length" id="example1_length">
            <label>
              Mostrar
              <select
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
              registros
              {{ perpage }}
            </label>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div id="search" class="dataTables_filter">
            <label>
              Buscar :
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Codigo, Nombre, Descripcion"
                v-model="$store.state.partida.searchQuery"
              />
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <table class="table table-bordered" v-columns-resizable>
          <thead>
            <tr>
              <th
                v-for="(header, index) in headers"
                @click="
                                                sortBy(
                                                    header.key.toLowerCase()
                                                );
                                                sortByHeader();
                                            "
                :class="[
                                                header.sortable
                                                    ? 'sortable'
                                                    : '',
                                                header.key.toLowerCase() ===
                                                currentSortBy
                                                    ? currentSortDir
                                                    : ''
                                            ]"
                :key="index"
              >
                <i :class="[header.icon]"></i>
                {{ header.key }}
              </th>
            </tr>
          </thead>

          <tr v-for="(item, index) in pageOfItems" :key="index">
            <td style="height:20px">{{ item.codigo }}</td>
            <td>{{ item.nombre }}</td>
            <td>{{ item.descripcion }}</td>
            <td>
              <button
                @click="OnClickEdit(item.idPartida)"
                type="button"
                class="btn btn-default btn-sm"
                data-toggle="modal"
                data-target="#edit_modal_proveedor"
              >
                <i class="fas fa-edit"></i>
              </button>
              <button
                @click="OnClickDelete({id:item.idPartida,progress:$Progress})"
                type="button"
                class="btn btn-info btn-sm"
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </table>
        <center class="container">
          <div v-if="dt_loading" class="spinner-grow text-info center center" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div v-if="dt_error">
            <span class="text-danger text-center">
              Error al cargar los datos de la base de
              datos..
            </span>
          </div>
          <div v-if="dt_no_found">
            <span class="text-warning text-center">No se encontraron datos..</span>
          </div>
        </center>
      </div>

      <div class="row">
        <div class="col-sm-12 col-md-5">
          <div
            class="dataTables_info"
            id="example1_info"
            role="status"
            aria-live="polite"
          >Showing 11 to 20 of 57 entries</div>
        </div>
        <div class="col-sm-12 col-md-7">
          <div class="dataTables_paginate paging_simple_numbers" id="example1_paginate">
            <jw-pagination
              ref="jw"
              :pageSize="PerPage"
              :items="GET_FILTER_ITEMS_BY_DEFAULT"
              :labels="labels"
              @changePage="onChangePage"
            ></jw-pagination>
          </div>
        </div>
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
          icon: "fas fa-list-ol"
        },
        {
          key: "Nombre",
          sortBy: "nombre",
          width: "20%",
          sortable: true,
          icon: "fas fa-file"
        },
        {
          key: "Descripcion",
          sortBy: "descripcion",
          width: "20%",
          sortable: true,
          icon: "fas fa-info-circle"
        },
        { key: "Accion", width: "5%", sortable: false }
      ]
    };
  },
  computed: {
    PerPage: function() {
      return this.perpage ? parseInt(this.perpage) : 25;
    },
    ...mapState("partida", [
      "items",
      "currentSortBy",
      "currentSortDir",
      "dt_loading",
      "dt_error",
      "pageSize",
      "currentPage",
      "perPage",
      "dt_no_found"
    ]),
    ...mapGetters("partida", ["GET_FILTER_ITEMS_BY_DEFAULT"])
  },
  methods: {
    refresh: function() {
      let self = this.$refs;
      setTimeout(() => {
        self.jw.setPage(1);
      }, 0);
    },
    ...mapMutations("partida", [
      "sortBy",
      "sortByHeader",
      "NEXT_PAGE",
      "PREV_PAGE"
    ]),
    ...mapActions("partida", ["OnClickEdit", "OnClickDelete"]),
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    }
  },
  created() {
    this.$store.dispatch("partida/GET_DATA_FROM_SERVER");
  }
};
// .filter((row, index) => {
//         let start = (this.currentPage-1)*this.pageSize;
//         let end = this.currentPage*this.pageSize;
//         if(index >= start && index < end) return true;
//       });
// let $sortable = $(".sortable");

// $sortable.on("click", function() {
//   let $this = $(this);
//   let asc = $this.hasClass("asc");
//   let desc = $this.hasClass("desc");
//   $sortable.removeClass("asc").removeClass("desc");
//   if (desc || (!asc && !desc)) {
//     $this.addClass("asc");
//   } else {
//     $this.addClass("desc");
//   }
// });
// filter() {
//   this.$store.commit("datatable/filter", this.searchQuery);
// }
</script>
<style lang="scss">
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

/* Heading styles */

h1.age-header {
  margin-bottom: 0px;
  padding-bottom: 0px;
}
h2.page-header {
  margin-top: 0px;
  padding-top: 0px;
  line-height: 15px;
  vertical-align: middle;
}
h1 > .divider:before,
h2 > .divider:before,
h3 > .divider:before,
h4 > .divider:before,
h5 > .divider:before,
h6 > .divider:before,
.h1 > .divider:before,
.h2 > .divider:before,
.h3 > .divider:before,
.h4 > .divider:before,
.h5 > .divider:before,
.h6 > .divider:before {
  color: #777;
  content: "\0223E\0020";
}
.flip-list-move {
  transition: transform 1s;
}
</style>

<template>
  <div class="row">
    <div class="col-md-8 col-xs-12">
      <div class="card">
        <div class="card-header border-0">
          <h3 class="card-title">Lista</h3>
        </div>
        <div class="card-body">
          <table-component></table-component>
        </div>
      </div>
    </div>

    <!-- AGREGAR PARTIDAS -->
    <div class="col-md-4 col-xs-12">
      <div v-if="!edit_mode" class="card card-default">
        <div class="card-header">
          <h3 class="card-title">Agregar nueva partida</h3>
        </div>
        <form @submit.prevent="addPartida($Progress)" id="addPartidaForm">
          <div class="card-body">
            <div class="form-group">
              <label for="codigo_add_par">Código :</label>
              <input
                type="text"
                v-model="data.codigo"
                class="form-control rounded-0"
                id="codigo_add_par"
                name="codigo_add_par"
                placeholder="Inserte el codigo"
              />
            </div>
            <div class="form-group">
              <label for="nombre_add_pro">Nombre :</label>
              <input
                v-model="data.nombre"
                type="text"
                class="form-control rounded-0"
                id="nombre_add_par"
                name="nombre_add_par"
                placeholder="Inserte el nombre"
              />
            </div>
            <div class="form-group">
              <label for="name_add_pro">Descripcion :</label>
              <textarea
                v-model="data.descripcion"
                class="form-control"
                rows="4"
                placeholder="Descripcion...."
              ></textarea>
            </div>
          </div>
          <!-- /.card-body -->
          <div class="card-footer">
            <spinner v-if="loading"></spinner>
            <div v-else>
              <button type="button" @click="OnClickCancel" class="btn btn-danger">Cancelar</button>
              <button type="submit" class="btn btn-success">
                <span>
                  <i class="fas fa-save"></i>
                  Agregar
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div v-else class="card card-default">
        <div class="card-header">
          <h3 class="card-title">Editar Partida</h3>
        </div>
        <form
          @submit.prevent="editPartida({id:edit_form.idPartida,progress:$Progress})"
          id="addPartidaForm"
        >
          <div class="card-body">
            <div class="form-group">
              <label for="codigo_add_par">Código :</label>
              <input
                type="text"
                v-model="edit_form.codigo"
                class="form-control rounded-0"
                id="codigo_add_par"
                name="codigo_add_par"
                placeholder="Inserte el codigo"
              />
            </div>
            <div class="form-group">
              <label for="nombre_add_pro">Nombre :</label>
              <input
                v-model="edit_form.nombre"
                type="text"
                class="form-control rounded-0"
                id="nombre_add_par"
                name="nombre_add_par"
                placeholder="Inserte el nombre"
              />
            </div>
            <div class="form-group">
              <label for="name_add_pro">Descripcion :</label>
              <textarea
                v-model="edit_form.descripcion"
                class="form-control"
                rows="4"
                placeholder="Descripcion...."
              ></textarea>
            </div>
          </div>
          <!-- /.card-body -->
          <div class="card-footer">
            <spinner v-if="loading"></spinner>
            <div v-else>
              <button type="button" @click="OnClickCancelEdit" class="btn btn-danger">Cancelar</button>
              <button type="submit" class="btn btn-success">
                <span>
                  <i class="fas fa-save"></i>
                  Actualizar
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import store from "../../store/index";
import TableComponent from "./TableComponent.vue";
export default {
  components: {
    "table-component": TableComponent
  },
  data() {
    return {
      headers: [
        {
          key: "Codigo",
          sortBy: "codigo",
          width: "20%",
          sortable: true,
          icon: "fas fa-list-ol"
        },
        {
          key: "Nombre",
          sortBy: "nombre",
          width: "20%",
          sortable: true,
          icon: "fas fa-file"
        },
        {
          key: "Descripcion",
          sortBy: "descripcion",
          width: "20%",
          sortable: true,
          icon: "fas fa-info-circle"
        },
        { key: "Accion", width: "5%", sortable: false }
      ]
    };
  },
  computed: {
    PerPage: function() {
      return this.perpage ? parseInt(this.perpage) : 25;
    },
    ...mapState("partida", [
      "data",
      "error",
      "loading",
      "disabled",
      "success",
      "items",
      "currentSortBy",
      "currentSortDir",
      "dt_loading",
      "dt_error",
      "pageSize",
      "currentPage",
      "perPage",
      "edit_mode",
      "edit_form"
    ]),
    ...mapGetters("partida", ["GET_FILTER_ITEMS_BY_DEFAULT"])
  },
  methods: {
    refresh: function() {
      let self = this.$refs;
      setTimeout(() => {
        self.jw.setPage(1);
      }, 0);
    },
    ...mapMutations("partida", [
      "sortBy",
      "sortByHeader",
      "NEXT_PAGE",
      "PREV_PAGE"
    ]),
    ...mapActions("partida", [
      "OnClickEdit",
      "OnClickDelete",
      "OnClickCancel",
      "OnClickCancelEdit",
      "addPartida",
      "editPartida"
    ]),
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    }
  }
};
</script>

