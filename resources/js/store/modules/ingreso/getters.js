import store from "../../index";

export const GET_FILTER_ITEMS = state => {
    return state.items.filter(function(item) {
        var searchRegex = new RegExp(state.searchQuery, "i");
        if(item.proveedor){
            return searchRegex.test(item.nro_ingreso) ||
                   searchRegex.test(item.proveedor.nombre) ||
                   searchRegex.test(item.created_at);
        }else{
            return searchRegex.test(item.nro_ingreso) ||
                searchRegex.test(item.created_at);
        }

    });
};
/**
 * OBTENER LOS DATOS DE PARTIDA
 */
export const GET_ITEMS_INGRESO = state => {
    return state.items;
};
export const GET_DETALLE_INGRESOS = state => {
    return state.detalle_ingreso;
};
export const GET_FILTER_VIEW_DETALLE_INGRESOS = state => {
    return state.detalle_ingreso.detalleingresos.filter(function(item) {
        let searchRegex = new RegExp(state.searchQueryIngresoViewDetails, "i");
        return searchRegex.test(item.lote.articulo.codigo) || searchRegex.test(item.lote.articulo.nombre);
    });
};
export const GET_ITEMS_DETALLE_INGRESO = state => {
    return state.data_form.detalle_ingreso;
};
export const GET_TOTAL_DETALLE_INGRESOS = state => {
    let total = 0;
    state.data_form.detalle_ingreso.forEach(element => {
        total += element.total;
    });
    return total;
};

export const GET_FILTER_ITEMS_DETAILS = (state,getters) => {
    return store.getters['articulo/GET_LOTES'].filter(function(item) {
        let searchRegex = new RegExp(state.searchQueryAddDialog, "i");
        return searchRegex.test(item.nombre) || searchRegex.test(item.codigo);
    });
};


