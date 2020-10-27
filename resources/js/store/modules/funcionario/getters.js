
export const GET_FILTER_ITEMS = state => {
    //tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))
    return state.items.filter(function(item) {
        var searchRegex = new RegExp(state.searchQuery, "i");
        return (
            searchRegex.test(item.nombre) ||
            searchRegex.test(item.apellido) ||
            searchRegex.test(item.documento)

        );
    });
};


export const GET_ITEMS_FUNCIONARIO = state => {
    return state.items;
};
