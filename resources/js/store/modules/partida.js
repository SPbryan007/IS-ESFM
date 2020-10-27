import { router } from "../../routes";
const state = {
    data: {
        nombre: "",
        codigo: "",
        descripcion: ""
    },
    edit_form: {
        idPartida: 0,
        nombre: "",
        codigo: "",
        descripcion: ""
    },
    partidas: [],
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
    currentSortBy: "codigo",
    searchQuery: "",
    perPage: 10,
    currentPage: 1,
    dt_loading: false,
    dt_error: false,
    dt_no_found: false
};
const getters = {
    getDataPartidas: state => {
        return state.articulos;
    },
    GET_SELECT_PARTIDAS: state => {
        let options = [];
        for (let index = 0; index < state.items.length; index++) {
            options.push({
                value: parseInt(state.items[index].idPartida),
                text: state.items[index].nombre
            });
        }
        return options;
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
                searchRegex.test(item.codigo) ||
                searchRegex.test(item.descripcion)
            );
        });
    }
};
const mutations = {
    /**
     * MUTACIONES PARA LISTAR LAS PARTIDAS EN ETIQUETAS SELECT PARA EDITAR
     */
    RESET_PARTIDAS(state) {
        state.partidas = [];
    },
    GET_PARTIDAS(state) {
        for (let index = 0; index < state.items.length; index++) {
            state.partidas.push({
                value: parseInt(state.items[index].idPartida),
                text: state.items[index].nombre
            });
        }
    },
    /**
     *
     */
    init(state) {
        state.data.nombre = "";
        state.data.codigo = "";
        state.data.descripcion = "";
        state.disabled = false;
        state.success = false;
        state.error = false;
    },
    init_edit_form(state) {
        state.edit_form.nombre = "";
        state.edit_form.codigo = "";
        state.edit_form.descripcion = "";
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
        console.log("sorbyIcon");
        if (i === state.currentSortBy) {
            state.currentSortDir =
                state.currentSortDir === "asc" ? "desc" : "asc";
        }
        state.currentSortBy = i;
    }
};
const actions = {
    OnClickDelete: ({ commit, state, dispatch }, param) => {
        let resp = confirm(
            "¿Estas seguro de eliminar la partida presupuestarioa seleccionada ?"
        );
        if (resp) {
            param.progress.start();
            axios
                .delete("/api/partida/" + param.id)
                .then(response => {
                    param.progress.finish();
                    for (let index = 0; index < state.items.length; index++) {
                        if (state.items[index].idPartida == param.id) {
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
        state.edit_mode = true;
        const data = state.items.filter(item => item.idPartida === id);
        state.edit_form.idPartida = data[0].idPartida;
        state.edit_form.nombre = data[0].nombre;
        state.edit_form.codigo = data[0].codigo;
        state.edit_form.descripcion = data[0].descripcion;
    },
    editPartida: ({ commit, state, dispatch }, progress) => {
        progress.start();
        commit("disabled");
        state.error = false;
        if (state.edit_form.codigo && state.edit_form.nombre) {
            commit("disabled");
            state.loading = true;
            axios
                .put(
                    "/api/partida/" + state.edit_form.idPartida,
                    state.edit_form
                )
                .then(response => {
                    state.success = true;
                    state.loading = false;
                    progress.finish();
                    state.edit_mode = false;
                    for (let index = 0; index < state.items.length; index++) {
                        if (
                            state.items[index].idPartida ==
                            state.edit_form.idPartida
                        ) {
                            state.items[index].codigo = response.data.codigo;
                            state.items[index].nombre = response.data.nombre;
                            state.items[index].descripcion =
                                response.data.descripcion;
                            break;
                        }
                    }
                    toastr.success("Se ha realizado los cambios correctamente");
                    router.push({ name: "partida" });
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
    addPartida: ({ commit, state, getters }, progress) => {
        progress.start();
        commit("disabled");
        state.error = false;
        if (state.data.codigo && state.data.nombre) {
            commit("disabled");
            state.loading = true;
            axios
                .post("/api/partida", state.data)
                .then(response => {
                    state.success = true;
                    state.items.push(response.data);
                    state.loading = false;
                    progress.finish();
                    commit("init");
                    router.push({ name: "partida" });
                    toastr.success("Se ha guardado correctamente");
                })
                .catch(err => {
                    progress.fail;
                    state.loading = false;
                    toastr.error(
                        "El codigo " + state.data.codigo + " ya existe"
                    );
                    state.error = true;
                    console.log(err);
                });
        }
    },
    OnClickCancel: ({ commit }) => {
        router.push({ name: "partida" });
        commit("init");
    },
    /**
     * DATATABLE
     */
    GET_DATA_FROM_SERVER: ({ state, commit }) => {
        commit("DT_NO_DATA_FOUND", false);
        commit("DT_LOADING", true);
        commit("DT_ERROR", false);
        axios
            .get("/api/partida")
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
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
