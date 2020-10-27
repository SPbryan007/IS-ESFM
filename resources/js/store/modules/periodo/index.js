import * as types from "./../mutation-types";
import * as actions from "./actions";
import * as getters from "./getters";
import moment from 'moment';

const state = {
    items: [],
    lotes:[],
    withTrashed:false,
    data_form: {
        nombre: "",
        fecha_inicio: "",
        fecha_fin: "",
        estado: "",
        descripcion: "-"
    },
    alert:{
        color:'',
        message:null,
        show: false,
        title:''
    },
    current:null,
    loading_table: false,
    loading_form: false,
    searchQuery: ""
};
const mutations = {
    [types.SET_STATUS] : (state,status) =>{
        state.data_form.status = status;
    },
    [types.SET_LOADING_FORM]: (state, status) => {
        state.loading_form = status;
    },
    [types.SET_LOADING_TABLE]: (state, status) => {
        state.loading_table = status;
    },
    [types.SET_LOTES]: (state, lotes) => {
        state.lotes = lotes;
    },
    [types.SET_DISPLAY_MESSAGE]: (state, { status, data }) => {
        switch (status) {
            case 201 :
                state.alert.show       = true;
                state.alert.color      = 'success';
                state.alert.message    = data.message;
                state.alert.title      = 'Operación exitosa!'
                break;
            case 409 :
                state.alert.show       = true;
                state.alert.color      = 'warning';
                state.alert.message    = data.message;
                state.alert.title      = 'Vuelve a intentarlo'
                break;
            case 404 :
                state.alert.show       = true;
                state.alert.color      = 'warning';
                state.alert.message    = data.message;
                state.alert.title      = 'Vuelve a intentarlo'
                break;
            case 500 :
                state.alert.color      = 'error';
                state.alert.show       = true;
                state.alert.message    = data;
                state.alert.title      = 'Ooops!! Algo salió mal.'
                break;
        };
    },
    [types.SET_ITEMS]: (state, items) => {
        state
        state.items = items;
    },
    [types.SET_ITEM]: (state, item) => {
        state.items.push(item);
    },
    [types.SET_CURRENT]: (state, status) => {
        state.current = status;
    },
    [types.SET_EDIT_FORM]: (state, item) => {
        state.data_form.nombre           = item.nombre;
        state.data_form.fecha_inicio     = item.fecha_inicio;
        state.data_form.fecha_fin        = item.fecha_fin
        state.data_form.descripcion      = item.descripcion;
    },
    [types.SET_FORM]: ({state,commit}, item) => {
        state.data_form = {
            ...item
        };
        commit(types.CONVERT_DATE);
    },
    [types.CLEAR_FORM]: state => {
        state.data_form = {
            nombre : "",
            fecha_inicio :  "",
            fecha_fin : "",
            descripcion: '-',
        };
    },
    [types.CONVERT_DATE]: state => {
        state.data_form.fecha_inicio = moment(
            state.data_form.fecha_inicio
        ).format("YYYY-MM-DD");
        state.data_form.fecha_fin = moment(state.data_form.fecha_fin).format(
            "YYYY-MM-DD"
        );
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
