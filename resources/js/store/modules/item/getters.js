export const GET_FILTER_ITEMS = state => {
    return state.items.filter(function(item) {
        var searchRegex = new RegExp(state.searchQuery, "i");
        return (
            searchRegex.test(item.nombre) ||
            searchRegex.test(item.codigo) ||
            searchRegex.test(item.partida.codigo)
        );
    });
};
/**
 * OBTENER LOS DATOS DE LOS ARTICULOS
 */
export const GET_ITEMS_ARTICULO = state => {
    return state.items;
};
export const  GET_LOTES = state => {
    return state.lotes;
};

