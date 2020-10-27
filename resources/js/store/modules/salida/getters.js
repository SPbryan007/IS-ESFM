export const GET_FILTER_ITEMS = state => {
    return state.items.filter(function(item) {
        var searchRegex = new RegExp(state.searchQuery, "i");
            return searchRegex.test(item.nro_salida) ||
                searchRegex.test(item.solicitante.funcionario.nombre) ||
                searchRegex.test(item.solicitante.funcionario.apellido) ||
                searchRegex.test(item.fecha_pedido) ||
                searchRegex.test(item.created_at);
    });
};

export const GET_ITEMS_SALIDA = state => {
    return state.items;
};
export const GET_DETALLE_SALIDAS = state => {
    return state.detalle_salida;
};
export const GET_ITEMS_DETALLE_SALIDA = state => {
    return state.data_form.detalle_salida;
};
export const GET_TOTAL_DETALLE_SALIDAS = state => {
    let total = 0;
    state.data_form.detalle_salida.forEach(element => {
        total += element.precio;
    });
    return total;
};
