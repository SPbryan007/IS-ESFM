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
                placeholder="Nombre, CI, Unidad"
                v-model="$store.state.solicitante.searchQuery"
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
                @click="sortBy(header.sortBy);sortByHeader();"
                :class="[header.sortable ? 'sortable' : '', header.key.toLowerCase() === currentSortBy ? currentSortDir : '' ]"
                :key="index"
              >
                <i :class="[header.icon]"></i>
                {{ header.key }}
              </th>
            </tr>
          </thead>

          <tr v-for="(item, index) in pageOfItems" :key="index">
            <td style="height:20px">{{ item.documento }}</td>
            <td>{{ item.apellido }}</td>
            <td>{{ item.nombre }}</td>
            <td>{{ item.direccion }}</td>
            <td>{{ item.telefono }}</td>
            <td>{{ item.cargo }}</td>
            <td class="unidad-color">{{ item.unidad }}</td>
            <td>
              <button
                @click="OnClickEdit(item.idSolicitante)"
                type="button"
                class="btn btn-default btn-sm"
                data-toggle="modal"
                data-target="#edit_modal_solicitante"
              >
                <i class="fas fa-edit"></i>
              </button>
              <button
                @click="OnClickDelete({id:item.idSolicitante,progress:$Progress})"
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
          <div v-if="GET_FILTER_ITEMS_BY_DEFAULT.length === 0 && dt_loading === false">
            <span class="text-danger text-center">
              No se encontraron registros ...
              <i class="fas fa-sad-tear"></i>
            </span>
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
          >Mostrando del 11 a 20 de</div>
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
    <editview-component></editview-component>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import EditView from "./EditView.vue";
export default {
  components: {
    "editview-component": EditView
  },
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
          key: "CI",
          sortBy: "documento",
          width: "20%",
          sortable: true,
          icon: "fas fa-id-badge"
        },
        {
          key: "Apellido",
          sortBy: "apellido",
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
          key: "Direccion",
          sortBy: "direccion",
          width: "20%",
          sortable: false,
          icon: "fas fa-map-marked"
        },
        {
          key: "Telefono",
          sortBy: "telefono",
          width: "20%",
          sortable: false,
          icon: "fas fa-phone-square-alt"
        },
        {
          key: "Cargo",
          sortBy: "cargo",
          width: "20%",
          sortable: true,
          icon: "fas fa-user-tie"
        },
        {
          key: "Unidad",
          sortBy: "unidad",
          width: "20%",
          sortable: true,
          icon: "fas fa-project-diagram"
        },
        { key: "Accion", width: "5%", sortable: false }
      ]
    };
  },
  computed: {
    PerPage: function() {
      return this.perpage ? parseInt(this.perpage) : 25;
    },
    ...mapState("solicitante", [
      "items",
      "currentSortBy",
      "currentSortDir",
      "dt_loading",
      "dt_error",
      "pageSize",
      "currentPage",
      "perPage"
    ]),
    ...mapGetters("solicitante", ["GET_FILTER_ITEMS_BY_DEFAULT"])
  },
  methods: {
    refresh: function() {
      let self = this.$refs;
      setTimeout(() => {
        self.jw.setPage(1);
      }, 0);
    },
    ...mapMutations("solicitante", [
      "sortBy",
      "sortByHeader",
      "NEXT_PAGE",
      "PREV_PAGE"
    ]),
    ...mapActions("solicitante", ["OnClickEdit", "OnClickDelete"]),
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    }
  },
  created() {
    this.$store.dispatch("solicitante/GET_DATA_FROM_SERVER");
  }
};
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
.unidad-color {
  background-color: #fff9c4;
}
</style>




<template>
  <div>
    <div class="modal fade" id="edit_modal_solicitante">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Editar Solicitante</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form
            @submit.prevent="editSolicitante({id:edit_form.idSolicitante,progress:$Progress})"
            id="EditSolicitanteForm"
          >
            <div class="modal-body">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">Nombre :</span>
                </div>
                <input
                  v-model="edit_form.nombre"
                  type="text"
                  class="form-control"
                  id="firstname_add_sol"
                  name="firstname_add_sol"
                  placeholder="Inserte el nombre"
                />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">Apellido :</span>
                </div>
                <input
                  v-model="edit_form.apellido"
                  type="text"
                  class="form-control"
                  id="lastname_add_sol"
                  name="lastname_add_sol"
                  placeholder="Inserte el apellido "
                />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">CI :</span>
                </div>
                <input
                  v-model="edit_form.documento"
                  type="text"
                  class="form-control"
                  id="document_add_sol"
                  name="document_add_sol"
                  placeholder="Inserte el documento de identidad "
                />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">Direccion :</span>
                </div>
                <input
                  v-model="edit_form.direccion"
                  type="text"
                  class="form-control"
                  id="address_add_sol"
                  name="address_add_sol"
                  placeholder="Inserte la direccion "
                />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">Telefono :</span>
                </div>
                <input
                  v-model="edit_form.telefono"
                  type="text"
                  class="form-control"
                  id="phone_add_sol"
                  name="phone_add_sol"
                  placeholder="inserte el telefono"
                />
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">Cargo :</span>
                </div>
                <input
                  v-model="edit_form.cargo"
                  type="text"
                  class="form-control"
                  id="position_add_pro"
                  name="position_add_pro"
                  placeholder="Inserte el cargo que ocupa"
                />
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">Unidad :</span>
                </div>
                <select v-model="edit_form.unidad" class="form-control">
                  <option v-for="(option,index) in departaments" :key="index">{{ option.nombre }}</option>
                </select>
              </div>
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
              <button type="submit" class="btn btn-info" :disabled="loading">
                <spinner v-if="loading"></spinner>
                <span v-else>
                  <i class="fas fa-save"></i> Guardar
                </span>
              </button>
            </div>
          </form>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import store from "../../store/index";
export default {
  data() {
    return {
      departaments: [],
      opt: ""
    };
  },
  computed: {
    ...mapState("solicitante", [
      "error",
      "loading",
      "disabled",
      "success",
      "edit_form"
    ])
  },
  methods: {
    ...mapActions("solicitante", ["editSolicitante"]),
    GET_DEPARTAMENTS: function() {
      //let self = this;
      axios
        .get("/api/unidad")
        .then(resp => {
          this.departaments = resp.data;
        })
        .catch(error => {
          console.log("df", error);
        });
    }
  },
  created() {
    this.GET_DEPARTAMENTS();
  }
};
</script>