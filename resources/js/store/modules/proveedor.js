import { router } from "../../routes";
import VueProgressBar from "vue-progressbar";
const state = {
    data: {
        nit: null,
        nombre: null,
        direccion: "",
        telefono: "",
        rubro: "",
        responsable: null
    },
    edit_form: {
        idProveedor: "",
        nit: "",
        nombre: "",
        direccion: "",
        telefono: "",
        rubro: "",
        responsable: ""
    },
    proveedores: [],
    disabled: false,
    success: false,
    error: false,
    loading: false,
    /**
     * DATATABLE
     */
    pageOfItems: [],
    items: [],
    currentItems: [],
    defaultSortDir: "desc",
    currentSortDir: "asc",
    currentSortBy: "nombre",
    searchQuery: "",
    perPage: 10,
    currentPage: 1,
    dt_loading: false,
    dt_error: false,
    dt_no_found: false
};
const getters = {
    /**
     * DATATABLE
     */
    GET_ITEMS_PROVEEDORES(state) {
        return state.items;
    },
    GET_FILTER_ITEMS_BY_DEFAULT: state => {
        return state.items.filter(function(item) {
            var searchRegex = new RegExp(state.searchQuery, "i");
            return (
                searchRegex.test(item.nit) ||
                searchRegex.test(item.nombre) ||
                searchRegex.test(item.responsable) ||
                searchRegex.test(item.rubro)
            );
        });
    }
};
const mutations = {
    init(state) {
        state.data.nit = "";
        state.data.nombre = "";
        state.data.direccion = "";
        state.data.telefono = "";
        state.data.rubro = "";
        state.data.cargo = "";
        state.data.rubro = "";
        state.data.responsable = "";
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
        let resp = confirm("¿Estas seguro de eliminar al proveedor ?");
        if (resp) {
            param.progress.start();
            axios
                .delete("/api/proveedor/" + param.id)
                .then(response => {
                    param.progress.finish();
                    for (let index = 0; index < state.items.length; index++) {
                        if (state.items[index].idProveedor == param.id) {
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
        const data = state.items.filter(item => item.idProveedor === id);
        state.edit_form.idProveedor = data[0].idProveedor;
        state.edit_form.nit = data[0].nit;
        state.edit_form.nombre = data[0].nombre;
        state.edit_form.direccion = data[0].direccion;
        state.edit_form.telefono = data[0].telefono;
        state.edit_form.rubro = data[0].rubro;
        state.edit_form.responsable = data[0].responsable;
    },
    editProveedor: ({ commit, state, dispatch }, progress) => {
        progress.start();
        commit("disabled");
        state.error = false;
        console.log("ddddddddddddddddd", state.edit_form);

        if (
            state.edit_form.nit &&
            state.edit_form.nombre &&
            state.edit_form.responsable
        ) {
            commit("disabled");
            state.loading = true;
            axios
                .put(
                    "/api/proveedor/" + state.edit_form.idProveedor,
                    state.edit_form
                )
                .then(response => {
                    state.success = true;
                    state.loading = false;
                    progress.finish();
                    for (let index = 0; index < state.items.length; index++) {
                        if (
                            state.items[index].idProveedor ==
                            state.edit_form.idProveedor
                        ) {
                            state.items[index].nit = response.data.nit;
                            state.items[index].nombre = response.data.nombre;
                            state.items[index].direccion =
                                response.data.direccion;
                            state.items[index].telefono =
                                response.data.telefono;
                            state.items[index].rubro = response.data.rubro;
                            state.items[index].responsable =
                                response.data.responsable;
                            break;
                        }
                    }
                    toastr.success("Se ha realizado los cambios correctamente");
                    commit("init");
                    router.push({ name: "proveedor" });
                    // dispatch("GET_DATA_FROM_SERVER");
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
    addProveedor: ({ commit, state, getters }, progress) => {
        progress.start();
        commit("disabled");
        state.error = false;
        if (state.data.nit && state.data.nombre && state.data.responsable) {
            commit("disabled");
            state.loading = true;
            axios
                .post("/api/proveedor", state.data)
                .then(response => {
                    state.success = true;
                    state.items.push(response.data);
                    state.loading = false;
                    progress.finish();
                    commit("init");
                    toastr.success("Se ha guardado correctamente");
                })
                .catch(err => {
                    console.log(state.data);

                    progress.fail;
                    state.loading = false;
                    toastr.error("Fallo al guardar");
                    state.error = true;
                    console.log(err);
                });
        } else {
            toastr.info("Debe llenar los campos obligatorios");
        }
    },
    getProveedor: ({ commit, state, getters }) => {
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
    OnClickCancel: ({ commit }) => {
        commit("init");
        router.push({ name: "proveedor" });
        //router.push({ name: "proveedor" });
    },
    /**
     * DATATABLE
     */
    GET_DATA_FROM_SERVER: ({ state, commit }) => {
        commit("DT_NO_DATA_FOUND", false);
        commit("DT_LOADING", true);
        commit("DT_ERROR", false);
        axios
            .get("/api/proveedor")
            .then(response => {
                state.items = response.data;
                if (state.items.length === 0) {
                    commit("DT_NO_DATA_FOUND", true);
                }
                commit("DT_LOADING", false);
                console.log(response.data);
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
