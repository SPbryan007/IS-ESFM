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
export const GET_ITEMS_DETALLE_INGRESO = state => {
    return state.data_form.detalle_ingreso;
};
export const GET_TOTAL_DETALLE_INGRESOS = state => {
    let total = 0;
    state.data_form.detalle_ingreso.forEach(element => {
        total += element.precio;
    });
    return total;
};
