import store from "../../index";

export const GET_FILTER_ITEMS = state => {
    return state.items.filter(function(item) {
        var searchRegex = new RegExp(state.searchQuery, "i");
        return searchRegex.test(item.nombre);
    });
};

export const GET_FILTER_ITEMS_DETALLE_APERTURA = state => {
    return state.data_form.detalle_apertura.filter(function(item) {
        var searchRegex = new RegExp(state.searchQueryDetalleApertura, "i");
        return searchRegex.test(item.articulo_nombre) ||
                searchRegex.test(item.codigo) ;
    });
};
export const GET_TOTAL_DETALLE_APERTURA = state => {
    let total = 0;
    state.data_form.detalle_apertura.forEach(element => {
        total += element.total;
    });
    return total;
};
export const GET_ITEMS_PERIODO = state => {
    return state.items;
};

export const  GET_LOTES = state => {
    return state.lotes;
};

export const GET_FILTER_ARTICULO_DETALLE_APERTURA = (state,getters) => {
    return store.getters['articulo/GET_ITEMS_ARTICULO'].filter(function(item) {
        let searchRegex = new RegExp(state.searchQueryAddDialog, "i");
        return searchRegex.test(item.nombre) || searchRegex.test(item.codigo);
    });
};
