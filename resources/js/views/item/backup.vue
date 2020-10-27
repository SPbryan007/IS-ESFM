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
                v-model="$store.state.item.searchQuery"
              />
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <table
          border="1"
          id="Test"
          style="border-collapse: collapse"
          class="table table-striped table-hover table-bordered"
          v-columns-resizable
        >
          <thead v-columns-resizable>
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
            <td style="height:20px">{{ item.codigo }}</td>
            <td class="unidad-color">{{ item.partida }}</td>
            <td>{{ item.nombre }}</td>
            <td>{{ item.linea }}</td>
            <td>{{ item.stock }}</td>
            <td>{{ item.saldo }}</td>
            <td>{{ item.medida }}</td>
            <td>
              <button
                @click="OnClickEdit(item.idItem)"
                type="button"
                class="btn btn-default btn-sm"
                data-toggle="modal"
                data-target="#edit_modal_item"
              >
                <i class="fas fa-edit"></i>
              </button>
              <button
                @click="OnClickDelete({id:item.idItem,progress:$Progress})"
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
            <span class="text-danger text-center">No se encontraron registros ...</span>
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
    <!-- <editview-component></editview-component> -->
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
// import EditView from "./EditView.vue";
export default {
  // components: {
  //   "editview-component": EditView
  // },
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
          sortBy: "partida",
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
        {
          key: "Medida",
          sortBy: "medida",
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
    ...mapState("item", [
      "items",
      "currentSortBy",
      "currentSortDir",
      "dt_loading",
      "dt_error",
      "pageSize",
      "currentPage",
      "perPage"
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
      this.pageOfItems = pageOfItems;
    }
  },
  created() {
    this.$store.dispatch("item/GET_DATA_FROM_SERVER");
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
  <div class="container-fluid">
    <!-- <div class="alert alert-info alert-dismissible">
      <button type="button" class="close text-white" data-dismiss="alert" aria-hidden="true">
        <strong>x</strong>
      </button>
      <h5>
        <i class="icon fas fa-exclamation-triangle"></i>
        Nota importante:
      </h5>Cuando se agrega un nuevo articulo se origina un ingreso inicial del
      producto en almacenes.
    </div>-->
    <div class="card bg-light card-outline card-info">
      <div class="card-header text-muted border-bottom-0">Datos del Articulo</div>
      <form @submit.prevent="addArticulo($Progress)">
        <div class="card-body pt-0">
          <div class="row">
            <div class="form-group col-md-4">
              <label for="name_add_item">Nombre :</label>
              <input
                v-model="data.nombre"
                type="text"
                class="form-control rounded-0"
                id="name_add_item"
                name="name_add_item"
                placeholder="Inserte el nombre"
              />
            </div>

            <div class="form-group col-md-4">
              <label for="um_add_item">Unidad de medida :</label>
              <select2 :options="GET_SELECT_UM" v-model="data.medida">
                <option disabled value="0">-- Seleccione La unidad de medida --</option>
              </select2>
            </div>
            <div class="form-group col-md-4">
              <label for="partida_add_item">Partida :</label>
              <select2 :options="GET_SELECT_PARTIDAS" v-model="data.partida">
                <option disabled value="0">-- Seleccione La medida --</option>
              </select2>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-4">
              <label for="linea_add_item">Linea :</label>
              <select
                v-model="data.linea"
                class="form-control"
                id="linea_add_item"
                name="linea_add_item"
              >
                <option value>--- Seleccione Linea ---</option>
                <option value="1">Linea 1</option>
                <option value="2">Linea 2</option>
                <option value="3">Linea 3</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label for="codigo_add_item">Codigo :</label>
              <input
                v-model="data.codigo"
                type="text"
                class="form-control"
                style="width:200px"
                id="codigo_add_item"
                name="codigo_add_item"
                placeholder="Inserte el  codigo"
              />
            </div>
          </div>
        </div>
        <div class="card-footer">
          <spinner v-if="loading"></spinner>
          <div v-else>
            <button type="button" @click="OnClickCancel" class="btn btn-danger">
              <i class="fas fa-backward"></i>
              Volver
            </button>
            <button type="submit" class="btn btn-success">
              <span>
                <i class="fas fa-save"></i>
                Registrar
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import store from "../../store/index";
import select2 from "./../../components/SelectComponent.vue";
export default {
  components: {
    select2: select2
  },
  data() {
    return {
      selected: 0
    };
  },
  computed: {
    ...mapState("item", ["data", "error", "loading", "disabled", "success"]),
    ...mapGetters("partida", ["GET_SELECT_PARTIDAS"]),
    ...mapGetters("unidad_medida", ["GET_SELECT_UM"])
  },
  methods: {
    ...mapActions("item", ["addArticulo", "OnClickCancel", "add"])
    // ...mapActions("solicitante", ["addSolicitante", "OnClickCancel"])
  },
  // beforeRouteEnter(to, from, next) {
  //   toastr.success("Se ha guardado correctamente");
  //   next();
  // },
  mounted() {},
  created() {
    this.$store.dispatch("partida/GET_DATA_FROM_SERVER");
    this.$store.dispatch("unidad_medida/GET_DATA_FROM_SERVER");
  }
};
// $(document).ready(function() {
//   $("#addArticuloForm").validate({
//     rules: {
//       name_add_item: {
//         required: true
//       },
//       codigo_add_item: {
//         required: true
//       },
//       linea_add_item: {
//         required: true
//       }
//     },
//     messages: {
//       name_add_item: {
//         required: "Este Campo en obligatorio"
//       },
//       codigo_add_item: {
//         required: "Este Campo en obligatorio"
//       },
//       linea_add_item: {
//         required: "Este Campo en obligatorio"
//       }
//     },
//     errorElement: "span",
//     errorPlacement: function(error, element) {
//       error.addClass("invalid-feedback");
//       element.closest(".form-group").append(error);
//     },
//     highlight: function(element, errorClass, validClass) {
//       $(element).addClass("is-invalid");
//     },
//     unhighlight: function(element, errorClass, validClass) {
//       $(element).removeClass("is-invalid");
//     }
//   });
// });
</script>


<