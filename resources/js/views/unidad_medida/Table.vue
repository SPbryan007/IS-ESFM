<template>
    <div>
        <div class="dataTables_wrapper dt-bootstrap4">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <div class="dataTables_length">
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
                                placeholder="Sigla, Nombre, Descripcion"
                                v-model="$store.state.unidad_medida.searchQuery"
                            />
                        </label>
                    </div>
                </div>
            </div>
            <div class="row">
                <table class="table table-bordered" v-columns-resizable>
                    <thead v-columns-resizable>
                        <tr>
                            <th
                                v-for="(header, index) in headers"
                                @click="
                                    sortBy(header.key.toLowerCase());
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
                                <i :class="[header.icon]"></i>
                                {{ header.key }}
                            </th>
                        </tr>
                    </thead>

                    <tr v-for="(item, index) in pageOfItems" :key="index">
                        <td>{{ item.idUnidad_medida }}</td>
                        <td>{{ item.sigla }}</td>
                        <td>{{ item.nombre }}</td>
                        <td>{{ item.descripcion }}</td>
                        <td>
                            <button
                                @click="OnClickEdit(item.idUnidad_medida)"
                                type="button"
                                class="btn btn-default btn-sm"
                                data-toggle="modal"
                                data-target="#edit_modal_proveedor"
                            >
                                <i class="fas fa-edit"></i>
                            </button>
                            <button
                                @click="
                                    OnClickDelete({
                                        id: item.idUnidad_medida,
                                        progress: $Progress
                                    })
                                "
                                type="button"
                                class="btn btn-info btn-sm"
                            >
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>
                </table>

                <center class="container">
                    <div
                        v-if="dt_loading"
                        class="spinner-grow text-info center center"
                        role="status"
                    >
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div v-if="dt_error">
                        <span class="text-danger text-center">
                            Error al cargar los datos de la base de datos..
                        </span>
                    </div>
                    <div v-if="dt_no_found">
                        <span class="text-warning text-center"
                            >No se encontraron datos..</span
                        >
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
                    >
                        Showing 11 to 20 of 57 entries
                    </div>
                </div>
                <div class="col-sm-12 col-md-7">
                    <div
                        class="dataTables_paginate paging_simple_numbers"
                        id="example1_paginate"
                    >
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
                    key: "Nro",
                    sortBy: "idUnidad_medida",
                    width: "20%",
                    sortable: true,
                    icon: "fas fa-list-ol"
                },
                {
                    key: "Sigla",
                    sortBy: "sigla",
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
        ...mapState("unidad_medida", [
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
        ...mapGetters("unidad_medida", ["GET_FILTER_ITEMS_BY_DEFAULT"])
    },
    methods: {
        refresh: function() {
            let self = this.$refs;
            setTimeout(() => {
                self.jw.setPage(1);
            }, 0);
        },
        ...mapMutations("unidad_medida", [
            "sortBy",
            "sortByHeader",
            "NEXT_PAGE",
            "PREV_PAGE"
        ]),
        ...mapActions("unidad_medida", ["OnClickEdit", "OnClickDelete"]),
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        }
    },
    created() {
        this.$store.dispatch("unidad_medida/GET_DATA_FROM_SERVER");
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
