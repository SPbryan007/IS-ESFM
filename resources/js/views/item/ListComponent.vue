<template>
  <div>
    <div class="card bg-light">
      <div class="card-header text-muted border-bottom-0">Lista de articulos:</div>
      <div class="card-body pt-0">
        <div class="row">
          <div class="col-md-8">
            <input
              v-model="$store.state.item.searchQuery"
              type="text"
              class="form-control"
              id="name_add_item"
              name="name_add_item"
              placeholder="Filtrar por Nombre, Codigo, Linea, Partida "
            />
          </div>
          <div class="col-md-4">
            <div class="btn-group float-sm-right">
              <button type="button" class="btn btn-default btn-sm">
                <i class="fas fa-print"></i> Imprimir
              </button>
              <button type="button" class="btn btn-default btn-sm">
                <i class="fas fa-download"></i> Exportar
              </button>
              <router-link
                :to="{ name: 'additem' }"
                type="button"
                class="btn btn-success pull-rigth btn-sm"
              >
                <span class="fa fa-plus"></span>
                Agregar
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card" v-for="(item, index) in pageOfItems" :key="index" style="word-wrap: normal;">
      <div class="card-header border-0">
        <div class="d-flex justify-content-between">
          <h3 class="card-title text-info">
            <strong>{{ item.nombre }}</strong>
          </h3>

          <div class="card-tools">
            <a href="#" @click="OnClickEdit(item.idItem)" class="btn btn-sm btn-tool">
              <i class="fas fa-edit"></i>
              editar
            </a>
            <a
              href="#"
              @click="OnClickDelete({id:item.idItem,progress:$Progress})"
              class="btn btn-sm btn-tool"
            >
              <i class="fas fa-trash"></i>
              eliminar
            </a>
            <a href="#" class="btn btn-sm btn-tool">
              <i class="fas fa-eye"></i>
              ver detalles
            </a>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-2">
            <dl>
              <dt>CODIGO</dt>
              <dd>
                <h1 class="text-success">{{ item.partida_codigo+""+item.codigo }}</h1>
              </dd>
            </dl>
          </div>
          <div class="col-md-2">
            <dl>
              <dt class="text-center">LINEA</dt>
              <dd>
                <h1 class="text-danger text-center">{{ item.linea }}</h1>
              </dd>
            </dl>
          </div>
          <div class="col-md-2">
            <dl>
              <dt>
                PARTIDA -
                <span class="text-danger">{{ item.partida_codigo }}</span>
              </dt>
              <dd>{{ item.partida_nombre}}</dd>
            </dl>
          </div>
          <div class="col-md-3">
            <div class="info-box bg-info">
              <span class="info-box-icon">
                <i class="fas fa-warehouse"></i>
              </span>

              <div class="info-box-content">
                <span class="info-box-text">Stock general</span>
                <span class="info-box-number">
                  {{ item.stock }}
                  <strong>{{ item.um_sigla }}</strong>
                </span>
                <span class="progress-description">70% Increase in 30 Days</span>
              </div>
              <!-- /.info-box-content -->
            </div>
          </div>
          <div class="col-md-3">
            <div class="info-box bg-success">
              <span class="info-box-icon">
                <i class="fas fa-dollar-sign"></i>
              </span>

              <div class="info-box-content">
                <span class="info-box-text">Saldo general</span>
                <span class="info-box-number">{{ item.saldo }} Bs</span>

                <span class="progress-description">70% Increase in 30 Days</span>
              </div>
              <!-- /.info-box-content -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <center>
      <div v-if="dt_loading" class="spinner-border text-info" role="status">
        <span class="sr-only">cargando...</span>
      </div>
    </center>
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
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import EditView from "./EditView.vue";
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
    PerPage: function() {
      return this.perpage ? parseInt(this.perpage) : 25;
    },
    ...mapState("item", [
      "items",
      "dt_loading",
      "dt_error",
      "pageSize",
      "currentPage",
      "perPage",
      "dt_no_found"
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
    ...mapMutations("item", ["NEXT_PAGE", "PREV_PAGE"]),
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
 