import { router } from "../../routes";
import unidad_medida from "./unidad_medida";
const state = {
    data: {
        nombre: "",
        codigo: "",
        linea: "",
        stock: 0,
        saldo: 0,
        partida: 0,
        unidad_medida: 0
    },
    edit_form: {
        idItem: "",
        nombre: "",
        codigo: "",
        linea: "",
        stock: 0,
        saldo: 0,
        partida: {
            value: "",
            text: ""
        },
        unidad_medida: {
            value: "",
            text: ""
        }
    },
    articulos: [],
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
    currentSortBy: "codigo",
    searchQuery: "",
    perPage: 10,
    currentPage: 1,
    dt_loading: false,
    dt_error: false,
    dt_no_found: false
};
const getters = {
    getDataArticulo: state => {
        return state.articulos;
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
                searchRegex.test(item.linea) ||
                searchRegex.test(item.partida)
            );
        });
    }
};
const mutations = {
    init(state) {
        state.data.nombre = "";
        state.data.codigo = "";
        state.data.linea = "";
        state.data.stock = "";
        state.data.saldo = "";
        state.data.partida = "";
        state.data.medida = "";
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
        param
            .confirm(
                "¿ Esta seguro de eliminar el articulo seleccionado ?",
                "Warning",
                {
                    confirmButtonText: "Eliminar",
                    cancelButtonText: "Cancelar",
                    type: "warning"
                }
            )
            .then(() => {
                param.progress.start();
                state.dt_loading = true;
                axios
                    .delete("/api/articulo/" + param.id)
                    .then(response => {
                        param.progress.finish();
                        for (
                            let index = 0;
                            index < state.items.length;
                            index++
                        ) {
                            if (state.items[index].idItem == param.id) {
                                state.items.splice(index, 1);
                                break;
                            }
                        }
                        param.message({
                            type: "success",
                            message: "Se ha eliminardo correctamente"
                        });
                        state.dt_loading = false;
                    })
                    .catch(err => {
                        state.dt_loading = false;
                        param.message({
                            type: "error",
                            message: "Error al eliminar el articulo"
                        });
                    });
            })
            .catch(() => {
                param.message({
                    type: "info",
                    message: "Cancelado"
                });
            });
    },
    OnClickEdit: ({ commit, state }, id) => {
        const data = state.items.filter(item => item.idItem === id);
        state.edit_form.idItem = data[0].idItem;
        state.edit_form.nombre = data[0].nombre;
        state.edit_form.codigo = data[0].codigo;
        state.edit_form.linea = parseInt(data[0].linea);
        state.edit_form.stock = data[0].stock;
        state.edit_form.saldo = data[0].saldo;
        state.edit_form.partida.value = data[0].partida_id;
        state.edit_form.partida.text = data[0].partida_nombre;
        state.edit_form.unidad_medida.value = data[0].um_id;
        state.edit_form.unidad_medida.text = data[0].um_sigla;
        commit("partida/GET_PARTIDAS", null, { root: true });
        commit("unidad_medida/GET_UNIDADES_MEDIDA", null, { root: true });
    },
    editItem: ({ commit, state, dispatch }, param) => {
        param.progress.start();
        commit("disabled");
        state.error = false;
        if (
            state.edit_form.codigo &&
            state.edit_form.nombre &&
            state.edit_form.partida.value &&
            state.edit_form.linea &&
            state.edit_form.unidad_medida.value
        ) {
            commit("disabled");
            state.loading = true;
            axios
                .put("/api/articulo/" + state.edit_form.idItem, state.edit_form)
                .then(response => {
                    console.log("..........", response.data);

                    state.success = true;
                    state.loading = false;
                    param.progress.finish();
                    for (let index = 0; index < state.items.length; index++) {
                        if (
                            state.items[index].idItem == state.edit_form.idItem
                        ) {
                            //state.items[index] = response.data;
                            state.items[index].codigo = response.data.codigo;
                            state.items[index].nombre = response.data.nombre;
                            state.items[index].linea = response.data.linea;
                            state.items[index].partida_codigo =
                                response.data.partida_codigo;
                            state.items[index].partida_id =
                                response.data.partida_id;
                            state.items[index].partida_nombre =
                                response.data.partida_nombre;
                            state.items[index].um_sigla =
                                response.data.um_sigla;
                            state.items[index].um_nombre =
                                response.data.um_nombre;
                            state.items[index].um_id = response.data.um_id;

                            break;
                        }
                    }
                    param.message({
                        type: "success",
                        message: "Se ha realizado los cambios correctamente"
                    });
                    commit("partida/RESET_PARTIDAS", null, { root: true });
                    commit("unidad_medida/RESET_UNIDADES_MEDIDA", null, {
                        root: true
                    });
                    router.push({ name: "item" });
                    // dispatch("GET_DATA_FROM_SERVER");
                })
                .catch(err => {
                    console.log("no manches", state.data);
                    param.progress.fail();
                    state.loading = false;
                    param.message({
                        type: "error",
                        message: "No se pudo guardar los datos"
                    });
                    state.error = true;
                    console.log(err);
                });
        }
    },
    addItem: ({ commit, state, getters }, progress) => {
        progress.start();
        commit("disabled");
        state.error = false;
        state.data.stock = 0;
        state.data.saldo = 0;
        if (
            state.data.partida &&
            state.data.nombre &&
            state.data.partida &&
            state.data.unidad_medida
        ) {
            commit("disabled");
            state.loading = true;
            axios
                .post("/api/articulo/", state.data)
                .then(response => {
                    console.log(response.data);
                    state.success = true;
                    state.items.push(response.data);
                    state.loading = false;
                    progress.finish();
                    toastr.success("Se ha guardado correctamente");
                    commit("init");
                    commit("partida/RESET_PARTIDAS", null, { root: true });
                    commit("unidad_medida/RESET_UNIDADES_MEDIDA", null, {
                        root: true
                    });
                    router.push({ name: "item" });
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
    getArticulo: ({ commit, state, getters }) => {
        axios
            .get("/api/articulo")
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
        commit("unidad_medida/RESET_UNIDADES_MEDIDA", null, { root: true });
        commit("partida/RESET_PARTIDAS", null, { root: true });
        router.push({ name: "item" });
    },
    /**
     * DATATABLE
     */
    GET_DATA_FROM_SERVER: ({ state, commit }) => {
        commit("DT_NO_DATA_FOUND", false);
        commit("DT_LOADING", true);
        commit("DT_ERROR", false);
        axios
            .get("/api/articulo")
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
