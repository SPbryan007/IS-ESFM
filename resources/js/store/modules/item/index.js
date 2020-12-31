import * as types from "./../mutation-types";
import * as actions from "./actions";
import * as getters from "./getters";

const state = {
    items: [],
    withTrashed:false,
    lotes:[],

    data_form: {
        nombre : null,
        linea : null,
        partida_id : null,
        partida_codigo:null,
        partida_nombre:null,
        // um_sigla:null,
        // um_nombre:null,
        // unidad_medida_id:null,
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
    [types.SET_LOTES]: (state, lotes) => {
        state.lotes = lotes;

    },

    /**
     * SET_ITEMS Establece los articulos recibidos
     */
    [types.SET_ITEMS]: (state, items) => {
        state
        state.items = items;
    },
    [types.SET_ITEM]: (state, item) => {
        state.items.push(item);
    },
    [types.DELETE_ITEM]: (state, item) => {
        for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].id == item) {
                state.items.splice(i, 1);
                break;
            }
        }
    },
    [types.UPDATE_ITEM]: (state, item) => {
        for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].id == item.id) {
                for (const prop in item) {
                    state.items[i][prop] = item[prop];
                }
                break;
            }
        }
    },
    [types.SET_EDIT_FORM]: (state, item) => {
        state.data_form.nombre                = item.nombre;
        state.data_form.linea                 = item.linea;
        state.data_form.partida_id            = item.partida_id;
        state.data_form.partida_codigo        = item.partida.codigo;
        state.data_form.partida_nombre        = item.partida.nombre;
        // state.data_form.um_sigla              = item.unidad_medida.sigla;
        // state.data_form.um_nombre             = item.unidad_medida.nombre;
        // state.data_form.unidad_medida_id      = item.unidad_medida_id;
    },
    [types.SET_FORM]: (state, item) => {
        state.data_form = {
            ...item
        };
    },
    [types.CLEAR_FORM]: state => {
        state.data_form = {
            nombre : null,
            linea : null,
            partida_id : null,
            // unidad_medida_id:null,
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
