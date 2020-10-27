export const GET_FILTER_ITEMS = state => {
    return state.items.filter(function(item) {
        var searchRegex = new RegExp(state.searchQuery, "i");
        return searchRegex.test(item.nombre) || searchRegex.test(item.codigo);
    });
};
/**
 * OBTENER LOS DATOS DE PARTIDA
 */
export const GET_ITEMS_PARTIDA = state => {
    return state.items;
};
