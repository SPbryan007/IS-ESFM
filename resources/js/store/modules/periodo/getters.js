export const GET_FILTER_ITEMS = state => {
    return state.items.filter(function(item) {
        var searchRegex = new RegExp(state.searchQuery, "i");
        return searchRegex.test(item.nombre);
    });
};
/**
 * OBTENER LOS DATOS DE GESTION
 */
export const GET_ITEMS_PERIODO = state => {
    return state.items;
};

export const  GET_LOTES = state => {
    return state.lotes;
};
