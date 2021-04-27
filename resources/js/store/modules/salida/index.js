import * as types from "./../mutation-types";
import * as actions from "./actions";
import * as getters from "./getters";
import moment from "moment";

const state = {
    items: [],
    withTrashed:false,
    data_form: {
        solicitante_id:null,
        finalidad:null,
        observacion:null,
        autorizador_id:null,
        verificador_id:null,
        nro_pedido:null,
        fecha_pedido:null,
        detalle_salida: []
    },
    detalle_salida: null,
    alert:{
        color:'',
        message:null,
        show: false,
        title:''
    },
    loading_table: false,
    loading_form: false,
    searchQuery: "",
    searchQueryAddDialog:""
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
            case 409 :
                state.alert.show       = true;
                state.alert.color      = 'warning';
                state.alert.message    = data.message;
                state.alert.title      = 'Vuelve a intentarlo'
                break;
            case 404 :
                state.alert.show       = true;
                state.alert.color      = 'warning';
                state.alert.message    = data;
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
        state.items = items;
    },
    [types.SET_ITEM]: (state, item) => {
        state.items.push(item);
    },
    [types.SET_FORM]: (state, item) => {
        state.data_form = {
            ...item
        };
    },
    [types.CLEAR_FORM]: state => {
        state.data_form = {
            solicitante_id:null,
            finalidad:null,
            observacion:null,
            autorizador_id:null,
            verificador_id:null,
            nro_pedido:null,
            fecha_pedido:null,
            detalle_salida: []
        };
    },
    [types.ADD_DETALLE_SALIDA]: (state, data) => {
        state.data_form.detalle_salida.push({
            articulo:data.id,
            articulo_nombre:data.nombre,
            medida:data.lotes.length > 0 ? data.lotes[0].unidad_medida.nombre : ' - ',
            cantidad:1,
            stock:data.stock
        });
    },
    [types.DELETE_DETALLE_SALIDA]: (state, id) => {
        for (let i = 0; i < state.data_form.detalle_salida.length; i++) {
            if (state.data_form.detalle_salida[i].articulo == id) {
                state.data_form.detalle_salida.splice(i, 1);
                break;
            }
        }
    },
    [types.SET_DETALLE_SALIDA]: (state, items) => {
        state.detalle_salida = items;
    },
    [types.CONVERT_DATE]: state => {
        state.data_form.fecha_pedido = moment(
            state.data_form.fecha_pedido
        ).format("YYYY-MM-DD");
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
