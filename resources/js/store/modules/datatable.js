import { router } from "../../routes";
import proveedor from "./proveedor";
const state = {
    items: {
        proveedores: [],
        solicitantes: []
    },
    currentItems: [],
    defaultSortDir: "desc",
    currentSortDir: "asc",
    currentSortBy: "",
    searchQuery: "",
    perPage: 10,
    currentPage: 1,
    dt_loading: false,
    dt_error: false
};
const getters = {
    GET_ITEMS(state) {
        return state.items;
    }
};
const mutations = {
    REFRESH_PAGE() {},
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
    GET_DATA_FROM_SERVER: ({ state, commit }, dir) => {
        commit("DT_LOADING", true);
        commit("DT_ERROR", false);
        axios
            .get("/api/" + dir)
            .then(response => {
                console.log(dir);
                console.log("HOLAAAAAAAAAAA");

                console.log("data", response.data);
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
