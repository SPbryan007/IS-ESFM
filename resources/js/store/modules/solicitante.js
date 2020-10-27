import { router } from "../../routes";
const state = {
    data: {
        documento: "",
        nombre: "",
        apellido: "",
        direccion: "",
        telefono: "",
        cargo: "",
        unidad: ""
    },
    edit_form: {
        idSolicitante: "",
        documento: "",
        nombre: "",
        apellido: "",
        direccion: "",
        telefono: "",
        cargo: "",
        unidad: {
            value: 0,
            text: ""
        }
    },
    pageOfItems: [],
    solicitantes: [],
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
    currentSortBy: "apellido",
    searchQuery: "",
    perPage: 10,
    currentPage: 1,
    dt_loading: false,
    dt_error: false
};
const getters = {
    GET_DATA_SOLICITANTE: state => {
        return state.solicitantes;
    },
    GET_ITEMS_SOLICITANTES: state => {
        return state.items;
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
                searchRegex.test(item.documento) ||
                searchRegex.test(item.nombre) ||
                searchRegex.test(item.apellido) ||
                searchRegex.test(item.cargo) ||
                searchRegex.test(item.unidad)
            );
        });
    }
};
const mutations = {
    init(state) {
        state.data.documento = "";
        state.data.nombre = "";
        state.data.apellido = "";
        state.data.direccion = "";
        state.data.telefono = "";
        state.data.cargo = "";
        // state.edit_form.idSolicitante = "";
        // state.edit_form.documento = "";
        // state.edit_form.nombre = "";
        // state.edit_form.apellido = "";
        // state.edit_form.direccion = "";
        // state.edit_form.telefono = "";
        // state.edit_form.cargo = "";
        // state.edit_form.unidad.value = 0;
        // state.edit_form.unidad.text = "";
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
        state.pageOfItems = state.pageOfItems.sort((a, b) => {
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
        console.log("sorbyIcon", i);
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
            "¿Estas seguro de eliminar al solicitante seleccionado ?"
        );
        if (resp) {
            param.progress.start();
            axios
                .delete("/api/solicitante/" + param.id)
                .then(response => {
                    param.progress.finish();
                    for (let index = 0; index < state.items.length; index++) {
                        if (state.items[index].idSolicitante == param.id) {
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
        const data = state.items.filter(item => item.idSolicitante === id);
        state.edit_form.idSolicitante = data[0].idSolicitante;
        state.edit_form.documento = data[0].documento;
        state.edit_form.nombre = data[0].nombre;
        state.edit_form.apellido = data[0].apellido;
        state.edit_form.direccion = data[0].direccion;
        state.edit_form.telefono = data[0].telefono;
        state.edit_form.cargo = data[0].cargo;
        state.edit_form.unidad.text = data[0].unidad_nombre;
        state.edit_form.unidad.value = data[0].unidad_id;
        commit("unidad/GET_UNIDADES", null, { root: true });
    },
    editSolicitante: ({ commit, state, dispatch }, progress) => {
        progress.start();
        commit("disabled");
        state.error = false;
        if (
            state.edit_form.documento &&
            state.edit_form.nombre &&
            state.edit_form.apellido &&
            state.edit_form.unidad
        ) {
            commit("disabled");
            state.loading = true;
            console.log("asdasd", state.edit_form);

            axios
                .put(
                    "/api/solicitante/" + state.edit_form.idSolicitante,
                    state.edit_form
                )
                .then(response => {
                    console.log(response.data);
                    state.success = true;
                    state.loading = false;
                    progress.finish();
                    for (let index = 0; index < state.items.length; index++) {
                        if (
                            state.items[index].idSolicitante ==
                            state.edit_form.idSolicitante
                        ) {
                            state.items[index].documento =
                                state.edit_form.documento;
                            state.items[index].nombre = state.edit_form.nombre;
                            state.items[index].apellido =
                                state.edit_form.apellido;
                            state.items[index].direccion =
                                state.edit_form.direccion;
                            state.items[index].telefono =
                                state.edit_form.telefono;
                            state.items[index].cargo = state.edit_form.cargo;
                            state.items[index].unidad_id =
                                state.edit_form.unidad.value;
                            state.items[index].unidad_nombre =
                                state.edit_form.unidad.text;
                            break;
                        }
                    }
                    toastr.success("Se ha realizado los cambios correctamente");
                    commit("init");
                    commit("unidad/RESET_UNIDADES", null, { root: true });
                    router.push({ name: "solicitante" });
                })
                .catch(err => {
                    progress.fail();
                    state.loading = false;
                    toastr.error("Fallo al guardar");
                    state.error = true;
                    console.log(err);
                });
        }
    },
    addSolicitante: ({ commit, state, getters }, progress) => {
        progress.start();
        commit("disabled");
        state.error = false;
        if (
            state.data.documento &&
            state.data.nombre &&
            state.data.apellido &&
            state.data.unidad
        ) {
            commit("disabled");
            state.loading = true;
            axios
                .post("/api/solicitante/", state.data)
                .then(response => {
                    console.log(response.data);
                    state.success = true;
                    state.items.push(response.data);
                    state.loading = false;
                    progress.finish();
                    toastr.success("Se ha guardado correctamente");
                    commit("init");
                    commit("unidad/RESET_UNIDADES", null, { root: true });
                    router.push({ name: "solicitante" });
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
    getSolicitante: ({ commit, state, getters }) => {
        axios
            .get("/api/proveedor")
            .then(response => {
                state.proveedores = response.data;
                console.log("HOLA");
                console.log(response.data);
            })
            .catch(err => {
                console.log("Ocurrio un error obteniendo los datos");
            });
    },
    OnClickCancel: ({ state, commit }) => {
        commit("unidad/RESET_UNIDADES", null, { root: true });
        router.push({ name: "solicitante" });
    },
    /**
     * DATATABLE
     */
    GET_DATA_FROM_SERVER: ({ state, commit }) => {
        commit("DT_LOADING", true);
        commit("DT_ERROR", false);
        axios
            .get("/api/solicitante")
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
