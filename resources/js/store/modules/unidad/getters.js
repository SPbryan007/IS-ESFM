
export const GET_FILTER_ITEMS = state => {
    //tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))
    return state.items.filter(function(item) {
        var searchRegex = new RegExp(state.searchQuery, "i");
        return (
            searchRegex.test(item.nombre) ||
            searchRegex.test(item.funcionario.nombre) ||
            searchRegex.test(item.funcionario.apellido)
        );
    });
};
/**
 * OBTENER LOS DATOS DE UNIDAD
 */
export const GET_ITEMS_UNIDAD = state => {
    return state.items;
};
export const GET_FILTER_TAG_UNIDAD = state => {
    let tag = state.items.map(item => {
        let obj = {
            text: item.nombre,
            value: item.id
        };
        return obj;
    });
    return tag;
};
