import * as types from "./mutation-types";
import * as actions from "./actions";
import * as getters from "./getters";

const state = {
    items: [],
    withTrashed:false,
    data_form: {
        solicitante:null,
        funcionario_id:null,
        cargo: null,
        unidad_id: null,
        estado:null,
    },
    alert:{
        color:'',
        message:null,
        show: false,
        title:''
    },
    loading_table: false,
    loading_form: false,
    searchQuery: ""
};
const mutations = {
    [types.SET_STATUS] : (state,status) =>{
        state.data_form.status = status;
    },
    [types.SET_LOADING_TABLE]: (state, status) => {
        state.loading_table = status;
    },
    [types.SET_DISPLAY_MESSAGE]: (state, { status, data }) => {
        switch (status) {
            case 201 :
                state.alert.show       = true;
                state.alert.color      = 'success';
                state.alert.message    = data.message;
                state.alert.title      = 'Operación exitosa!'
                break;
            case 409 || 404 :
                state.alert.show       = true;
                state.alert.color      = 'warning';
                state.alert.message    = data.message;
                state.alert.title      = 'Vuelve a intentarlo'
                break;
            case 500 :
                state.alert.color      = 'error';
                state.alert.show       = true;
                state.alert.message    = data.message;
                state.alert.title      = 'Ooops!! Algo salió mal.'
                break;
        };
    },
    [types.SET_LOADING_FORM]: (state, status) => {
        state.loading_form = status;
    },
    [types.SET_SUBMIT_SUCCESS]: (state, status) => {
        state.submit_success = status;
    },
    [types.SET_SUBMIT_ERROR]: (state, status) => {
        state.submit_error = status;
    },
    /**
     * SET_ITEMS Establece los articulos recibidos
     */
    [types.SET_ITEMS]: (state, items) => {
        // state
        state.items = items;
    },
    [types.SET_ITEM]: (state, item) => {
        state.items.push(item);
    },
    [types.SET_EDIT_FORM]: (state, item) => {
        state.data_form.solicitante          = item.id
        state.data_form.funcionario_id  = item.funcionario_id
        state.data_form.cargo           = item.cargo;
        state.data_form.unidad_id       = item.unidad_id;
    },
    [types.SET_FORM]: (state, item) => {
        state.data_form = {
            ...item
        };
    },
    [types.CLEAR_FORM]: state => {
        state.data_form = {
            solicitante:null,
            funcionario_id:null,
            cargo: null,
            unidad_id:null,
        };
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
