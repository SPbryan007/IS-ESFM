export const GET_FILTER_ITEMS = state => {
    return state.items.filter(function(item) {
        var searchRegex = new RegExp(state.searchQuery, "i");
        return (
            searchRegex.test(item.nombre) ||
            searchRegex.test(item.nit) ||
            searchRegex.test(item.responsable)
        );
    });
};
/**
 * OBTENER LOS DATOS DE PARTIDA
 */
export const GET_ITEMS_PROVEEDOR = state => {
    console.log("HOLA HOLA");
    return state.items;
};
