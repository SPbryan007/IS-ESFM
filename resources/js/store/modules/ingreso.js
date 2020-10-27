import { router } from "../../routes";
import store from "../index";
const state = {
    /**
     * Detalle de Ingreso de Gestion Inicial
     * */
    DIGI: []
};
const getters = {};
const mutations = {};
const actions = {
    /**
     * SET_ITEMS_TO_DIGI ACTION .- Recupera datos de los articulos y los añade a DIGI
     */
    SET_ITEMS_TO_DIGI: ({ state, commit, dispatch, getters, rooGetters }) => {
        const items = rooGetters["items/GET_ITEMS"];
        items.forEach(item => {
            state.DIGI.push({
                idItem: item.idItem,
                nombre: item.nombre,
                total_stock: item.stock,
                total_saldo: item.saldo,
                lote: []
            });
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
