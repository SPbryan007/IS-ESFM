import { router } from "../../routes";
import moment from "moment";
const state = {
    detalle_ingreso:[],
    data: {
        nombre: "",
        fecha_inicio: "",
        fecha_fin: "",
        estado: "",
        descripcion: ""
    },
    donacion: {
        institucion: "",
        responsable: "",
        telefono: ""
    },
    compra: {
        nro_compra: "",
        nro_solicitud: "",
        nro_factura: "",
        nro_autorizacion: "",
        proveedor: 0
    },
    detalle_ingreso_inicial: [
        {
            idItem: 15,
            cantidad: "50",
            saldo: "500",
            precio_unitario: "10",
            tipo_ingreso: "DONACION",
            descripcion: "SALDO INICIAL",
            ingreso: {}
        }
    ],
    edit_form: {
        idGestion: 0,
        nombre: "",
        fecha_inicio: "",
        fecha_fin: "",
        estado: "",
        descripcion: ""
    },
    gestiones: [],
    disabled: false,
    success: false,
    error: false,
    loading: false,
    edit_mode: false,
    /**
     * DATATABLE
     */
    items: [],
    currentItems: [],
    defaultSortDir: "desc",
    currentSortDir: "asc",
    currentSortBy: "fecha_inicio",
    searchQuery: "",
    perPage: 10,
    currentPage: 1,
    dt_loading: false,
    dt_error: false,
    dt_no_found: false
};
const getters = {
    GET_SELECT_GESTIONES: state => {
        let options = [];
        for (let index = 0; index < state.items.length; index++) {
            options.push({
                value: parseInt(state.items[index].idGestion),
                text: state.items[index].nombre
            });
        }
        return options;
    },
    GET_DETALLE_LOTES: state => id => {
        return state.detalle_ingreso.filter(e => e.idItem == id);
    },
    /**
     * DATATABLE
     */
    GET_ITEMS(state) {
        return state.items;
    },
    GET_FILTER_ITEMS_BY_DEFAULT: state => {
        return state.items.filter(function(item) {
            var searchRegex = new RegExp(state.searchQuery, "i");
            return (
                searchRegex.test(item.nombre) ||
                searchRegex.test(item.fecha_fin) ||
                searchRegex.test(item.fecha_inicio) ||
                searchRegex.test(item.estado)
            );
        });
    }
};
const mutations = {
    /**
     * MUTACIONES PARA LISTAR LAS UNIDADES EN ETIQUETAS SELECT
     */
    RESET_GESTIONES(state) {
        state.unidades_medida = [];
    },
    GET_GESTIONES(state) {
        for (let index = 0; index < state.items.length; index++) {
            state.gestiones.push({
                value: parseInt(state.items[index].idGestion),
                text: `${state.items[index].nombre}}`
            });
        }
    },
    /**
     *
     */
    init(state) {
        state.data.nombre = "";
        state.data.estado = "";
        state.data.descripcion = "";
        state.data.fecha_inicio.date = new Date();
        state.data.fecha_inicio.valid = null;
        state.data.fecha_fin.valid = null;
        state.data.fecha_fin.date = new Date().setDate(
            new Date().getDate() + 1
        );
        state.disabled = false;
        state.success = false;
        state.error = false;
    },
    disabled(state) {
        state.disabled = !state.disabled;
    },
    /**
     * DATATABLE
     */
    DT_NO_DATA_FOUND: (state, status) => {
        state.dt_no_found = status;
    },
    NEXT_PAGE: state => {
        if (state.currentPage * state.pageSize < state.items.length)
            state.currentPage++;
    },
    PREV_PAGE: state => {
        if (state.currentPage > 1) state.currentPage--;
    },
    DT_LOADING: (state, status) => {
        return (state.dt_loading = status);
    },
    DT_ERROR: (state, status) => {
        return (state.dt_error = status);
    },
    sortByHeader(state) {
        // movies.sort(function(a, b) {
        //     var dateA = new Date(a.release),
        //         dateB = new Date(b.release);
        //     return dateA - dateB;
        // });

        state.items = state.items.sort((a, b) => {
            let modifier = 1;
            // if (
            //     moment(a[state.currentSortBy]).isValid() &&
            //     moment(b[state.currentSortBy]).isValid()
            // ) {
            //     return (
            //         moment(b[state.currentSortBy]) -
            //         moment(a[state.currentSortBy])
            //     );
            // }

            if (state.currentSortDir === "desc") {
                modifier = -1;
            }
            if (a[state.currentSortBy] < b[state.currentSortBy]) {
                return -1 * modifier;
            }
            if (a[state.currentSortBy] > b[state.currentSortBy]) {
                return 1 * modifier;
            }
            return 0;
        });
    },
    sortBy(state, i) {
        if (i === state.currentSortBy) {
            state.currentSortDir =
                state.currentSortDir === "asc" ? "desc" : "asc";
        }
        state.currentSortBy = i.toString();
    }
};
const actions = {
    /**
     * ACCION PARA ELIMINAR UNA UNIDAD
     */
    OnClickDelete: ({ commit, state, dispatch }, param) => {
        let resp = confirm(
            "¿Estas seguro de eliminar la unidad de medida seleccionada ?"
        );
        if (resp) {
            param.progress.start();
            axios
                .delete("/api/gestion/" + param.id)
                .then(response => {
                    param.progress.finish();
                    for (let index = 0; index < state.items.length; index++) {
                        if (state.items[index].idGestion == param.id) {
                            state.items.splice(index, 1);
                            break;
                        }
                    }
                    toastr.success("Se ha eliminado correctamente");
                })
                .catch(err => {
                    param.progress.fail();
                    state.loading = false;
                    toastr.error("Error al eliminar");
                });
        }
    },
    OnClickEdit: ({ commit, state }, id) => {
        const data = state.items.filter(item => item.idGestion === id);
        state.edit_form.idGestion = data[0].idGestion;
        state.edit_form.nombre = data[0].nombre;
        state.edit_form.estado = data[0].estado;
        state.edit_form.fecha_inicio = data[0].fecha_inicio;
        state.edit_form.fecha_fin = data[0].fecha_fin;
        state.edit_form.descripcion = data[0].descripcion;
    },
    editGestion: ({ commit, state, dispatch }, progress) => {
        progress.start();
        commit("disabled");
        state.error = false;
        if (
            state.edit_form.nombre &&
            state.edit_form.fecha_inicio &&
            state.edit_form.fecha_fin
        ) {
            commit("disabled");
            state.loading = true;
            axios
                .put(
                    "/api/gestion/" + state.edit_form.idGestion,
                    state.edit_form
                )
                .then(response => {
                    state.success = true;
                    state.loading = false;
                    progress.finish();
                    for (let index = 0; index < state.items.length; index++) {
                        if (
                            state.items[index].idGestion ==
                            state.edit_form.idGestion
                        ) {
                            state.items[index].estado = state.edit_form.estado;
                            state.items[index].nombre = state.edit_form.nombre;
                            state.items[index].descripcion =
                                state.edit_form.descripcion;
                            state.items[index].fecha_inicio =
                                state.edit_form.fecha_inicio;
                            state.items[index].fecha_fin =
                                state.edit_form.fecha_fin;
                            break;
                        }
                    }
                    toastr.success("Se ha realizado los cambios correctamente");
                    router.push({ name: "gestion" });
                })
                .catch(err => {
                    console.log("no manches", state.data);
                    progress.fail();
                    state.loading = false;
                    toastr.error("Fallo al guardar");
                    state.error = true;
                    console.log(err);
                });
        }
    },
    addGestion: ({ commit, state, getters }, progress) => {
        console.log("111111111111111111111");
        progress.start();
        commit("disabled");
        state.error = false;
        if (
            state.data.nombre &&
            state.data.fecha_inicio.valid &&
            state.data.fecha_fin.valid
        ) {
            console.log("entroooooooooooo");

            commit("disabled");
            state.loading = true;
            axios
                .post("/api/gestion", state.data)
                .then(response => {
                    console.log("data.....", response.data);

                    state.success = true;
                    state.items.push(response.data);
                    state.loading = false;
                    progress.finish();
                    commit("init");
                    toastr.success("Se ha guardado correctamente");
                    // router.replace({ name: "periodo" });
                })
                .catch(err => {
                    progress.fail;
                    state.loading = false;
                    toastr.error(
                        "La periodo con nombre " +
                            state.data.nombre +
                            " ya existe"
                    );
                    state.error = true;
                });
        }
    },
    OnClickCancel: ({ commit }) => {
        router.push({ name: "gestion" });
    },
    // OnClickCancelEdit: ({ state, commit }) => {
    //     state.edit_mode = false;
    //     commit("init_edit_form");
    // },
    /**
     * DATATABLE
     */
    GET_DATA_FROM_SERVER: ({ state, commit }) => {
        commit("DT_NO_DATA_FOUND", false);
        commit("DT_LOADING", true);
        commit("DT_ERROR", false);
        axios
            .get("/api/gestion")
            .then(response => {
                console.log("respuesta", response.data);
                state.items = response.data;
                if (state.items.length === 0) {
                    commit("DT_NO_DATA_FOUND", true);
                }
                commit("DT_LOADING", false);
            })
            .catch(e => {
                console.log(e);
                commit("DT_ERROR", true);
            });
    },
    VALIDATE_START_DATE: ({ state }, date) => {
        console.log("VALIDATE ESTART ESTA I", date);
        console.log("hhhhhhh", moment(date).format("YYYY-MM-DD"));

        return axios
            .post("/api/gestion/validate", {
                inicio: moment(date).format("YYYY-MM-DD")
            })
            .then(response => {
                console.log("despues", response.data);

                return response.data;
            })
            .catch(e => {
                console.log("ERROR", e);
            });
    },
    VALIDATE_END_DATE: ({ state }, date) => {
        let fin = moment(date).format("YYYY-MM-DD");
        let inicio = moment(state.data.fecha_inicio).format("YYYY-MM-DD");
        if (fin > inicio) {
            return true;
        }
        return false;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
