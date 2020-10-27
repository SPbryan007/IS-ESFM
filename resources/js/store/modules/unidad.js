import { router } from "../../routes";
const state = {
    data: {
        nombre: null,
        responsable: null
    },
    edit_form: {
        idUnidad: "",
        nombre: "",
        responsable: ""
    },
    unidades: [],
    disabled: false,
    success: false,
    error: false,
    loading: false,
    /**
     * DATATABLE
     */
    items: [],
    currentItems: [],
    defaultSortDir: "desc",
    currentSortDir: "asc",
    currentSortBy: "nombre",
    searchQuery: "",
    perPage: 10,
    currentPage: 1,
    dt_loading: false,
    dt_error: false
};
const getters = {
    GET_ITEMS: state => {
        return state.items;
    },

    GET_SELECT_UNIDADES: state => {
        // let options = [
        //     { value: 4, text: "KARDEX" },
        //     { value: 3, text: "SISTEMAS INFORMATICOS" }
        // ];
        let options = [];
        // if (unidad) {
        //     options.push({ id: unidad.id, text: unidad.nombre });
        // }
        // } else {
        //     state.items.forEach(e => {
        //         options.push(e.nombre);
        //     });
        // }
        // return options;
        // console.log("holaaaaaaaaaaaaaaaa");

        // let options = [];
        // if (!unidad)
        //     options.push({
        //         id: 0,
        //         text: "-- Seleccione una Unidad --",
        //         selected: true,
        //         disabled: true
        //     });

        // state.items.forEach(e => {
        //     console.log("...............", e);

        //     options.push({ value: e.idUnidad, text: e.nombre });
        // });
        for (let index = 0; index < state.items.length; index++) {
            options.push({
                value: parseInt(state.items[index].idUnidad),
                text: state.items[index].nombre
            });
        }
        return options;
    },
    /**
     * DATATABLE
     */
    GET_ITEMS_UNIDADES({ state, dispatch }) {
        console.log("GET_ITEMS_UNIDADES_OUT_OF", state.items == undefined);
        if (state.items.length < 1) {
            dispatch("GET_DATA_FROM_SERVER");
            console.log("GET_ITEMS_UNIDADES");
        }
        return state.items;
    },
    GET_FILTER_ITEMS_BY_DEFAULT: state => {
        return state.items.filter(function(item) {
            var searchRegex = new RegExp(state.searchQuery, "i");
            return (
                searchRegex.test(item.responsable) ||
                searchRegex.test(item.nombre)
            );
        });
    }
};
const mutations = {
    /**
     * MUTACIONES PARA LISTAR LAS UNIDADES EN ETIQUETAS SELECT
     */
    RESET_UNIDADES(state) {
        state.unidades = [];
    },
    GET_UNIDADES(state) {
        for (let index = 0; index < state.items.length; index++) {
            state.unidades.push({
                value: parseInt(state.items[index].idUnidad),
                text: state.items[index].nombre
            });
        }
    },
    /**
     * LIMPIA LOS DATOS DE FORMULARIO PARA AGREGAR
     */
    init(state) {
        state.data.nombre = "";
        state.data.responsable = "";
        state.disabled = false;
        state.success = false;
        state.error = false;
    },
    disabled(state) {
        state.disabled = !state.disabled;
    },
    /**
     * MUTACIONES DE DATATABLE
     */
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
        state.items = state.items.sort((a, b) => {
            let modifier = 1;
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
        state.currentSortBy = i;
    }
};
const actions = {
    /**
     * ACCION PARA ELIMINAR UNA UNIDAD
     */
    OnClickDelete: ({ commit, state, dispatch }, param) => {
        let resp = confirm("¿Estas seguro de eliminar la unidad ?");
        if (resp) {
            param.progress.start();
            axios
                .delete("/api/unidad/" + param.id)
                .then(response => {
                    console.log("resposable_unidad", response.data);

                    param.progress.finish();
                    for (let index = 0; index < state.items.length; index++) {
                        if (state.items[index].idUnidad == param.id) {
                            state.items.splice(index, 1);
                            break;
                        }
                    }
                    toastr.success("Se ha eliminado correctamente");
                })
                .catch(err => {
                    console.log("error...", err);

                    param.progress.fail();
                    state.loading = false;
                    toastr.error("Error al eliminar");
                });
        }
    },
    /**
     * ACCIONES PARA EDITAR LA UNIDAD
     */
    OnClickEdit: ({ commit, state }, id) => {
        const data = state.items.filter(item => item.idUnidad === id);
        state.edit_form.idUnidad = data[0].idUnidad;
        state.edit_form.nombre = data[0].nombre;
        state.edit_form.responsable = data[0].responsable;
    },
    editUnidad: ({ commit, state, dispatch }, progress) => {
        progress.start();
        commit("disabled");
        state.error = false;
        if (state.edit_form.nombre && state.edit_form.responsable) {
            commit("disabled");
            state.loading = true;
            axios
                .put("/api/unidad/" + state.edit_form.idUnidad, state.edit_form)
                .then(response => {
                    router.push({ name: "unidad" });
                    state.success = true;
                    state.loading = false;
                    progress.finish();
                    for (let index = 0; index < state.items.length; index++) {
                        if (
                            state.items[index].idUnidad ==
                            state.edit_form.idUnidad
                        ) {
                            state.items[index].nombre = response.data.nombre;
                            state.items[index].responsable =
                                response.data.responsable;

                            break;
                        }
                    }
                    toastr.success("Se ha realizado los cambios correctamente");
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
    /**
     * ACCION PARA AGREGAR NUEVA UNIDAD
     */
    addUnidad: ({ commit, state, getters }, progress) => {
        progress.start();
        commit("disabled");
        state.error = false;
        if (state.data.nombre && state.data.responsable) {
            commit("disabled");
            state.loading = true;
            axios
                .post("/api/unidad", state.data)
                .then(response => {
                    state.success = true;
                    state.items.push(response.data);
                    state.loading = false;
                    progress.finish();
                    toastr.success("Se ha guardado correctamente");
                    commit("init");
                })
                .catch(err => {
                    progress.fail;
                    state.loading = false;
                    toastr.error("Fallo al guardar");
                    state.error = true;
                    console.log(err);
                });
        }
    },
    getUnidad: ({ commit, state, getters }, unidad) => {
        let options = [];
        if (!unidad)
            options.push({
                id: 0,
                text: "-- Seleccione una Unidad --",
                selected: true,
                disabled: true
            });

        state.items.forEach(e => {
            if (unidad == e.nombre) {
                options.push({
                    id: e.idUnidad,
                    text: e.nombre,
                    selected: true
                });
            } else {
                options.push({ id: e.idUnidad, text: e.nombre });
            }
        });
        return options;
    },
    OnClickCancel: ({ commit }) => {
        router.push({ name: "unidad" });
    },
    /**
     * DATATABLE
     */
    GET_DATA_FROM_SERVER: ({ state, commit }) => {
        commit("DT_LOADING", true);
        commit("DT_ERROR", false);
        axios
            .get("/api/unidad")
            .then(response => {
                state.items = response.data;
                commit("DT_LOADING", false);
            })
            .catch(e => {
                console.log(e);
                commit("DT_ERROR", true);
            });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
