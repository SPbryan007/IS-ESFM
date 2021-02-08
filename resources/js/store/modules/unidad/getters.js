
export const GET_FILTER_ITEMS = state => {
    //tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))
    return state.items.filter(function(item) {
        var searchRegex = new RegExp(state.searchQuery, "i");
        if(item.funcionario){
            return (
                searchRegex.test(item.nombre) ||
                searchRegex.test(item.funcionario.nombre+' '+item.funcionario.apellido)
            );
        }else{
            return (searchRegex.test(item.nombre));
        }

    });
};
/**
 * OBTENER LOS DATOS DE UNIDAD
 */
export const GET_ITEMS_UNIDAD = state => {
    return state.items;
};
