export const GET_FILTER_ITEMS = state => {
    return state.items.filter(function(item) {
        var searchRegex = new RegExp(state.searchQuery, "i");
        return searchRegex.test(item.funcionario.nombre+' '+item.funcionario.apellido);
    });
};
/**
 * OBTENER LOS DATOS DE PARTIDA
 */
export const GET_ITEMS_USUARIO = state => {
    return state.items;
};
