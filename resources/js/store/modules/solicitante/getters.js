export const GET_FILTER_ITEMS = state => {
    return state.items.filter(function(item) {
        var searchRegex = new RegExp(state.searchQuery, "i");
        return (
            searchRegex.test(item.funcionario.nombre+' '+item.funcionario.apellido) ||
            // searchRegex.test(item.funcionario.nombre) ||
            // searchRegex.test(item.funcionario.apellido) ||
            searchRegex.test(item.unidad.nombre) ||
            searchRegex.test(item.cargo)
        );
    });
};
/**
 * OBTENER LOS DATOS DE PARTIDA
 */
export const GET_ITEMS_SOLICITANTE = state => {
    return state.items;
};
