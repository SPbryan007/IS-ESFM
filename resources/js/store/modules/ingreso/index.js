import * as types from "./../mutation-types";
import * as actions from "./actions";
import * as getters from "./getters";
import moment from "moment";

const state = {
    items: [],
    withTrashed:false,
    data_form: {
        acta: "",
        tipo_ingreso: "Compra",
        tipo_comprobante: null,
        tipo_compra: "",
        nro_compra: 0,
        nro_solicitud: "",
        fecha_solicitud:null,
        nro_comprobante: null,
        nro_autorizacion: "",
        proveedor: null,
        fecha_comprobante:null,
        detalle_ingreso: []
    },
    detalle_ingreso: null,
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
    [types.SET_FORM]: (state, item) => {
        state.data_form = {
            ...item
        };
    },
    [types.CLEAR_FORM]: state => {
        state.data_form = {
            acta: "",
            tipo_ingreso: "Compra",
            fecha_solicitud:null,
            tipo_comprobante: null,
            tipo_compra: "",
            nro_compra: 0,
            nro_solicitud: "",
            nro_comprobante: null,
            nro_autorizacion: "",
            proveedor: null,
            detalle_ingreso: []
        };
    },
    [types.ADD_DETALLE_INGRESO]: (state, data) => {
        state.data_form.detalle_ingreso.push({
            ...data
        });
    },
    [types.DELETE_DETALLE_INGRESO]: (state, id) => {
        for (let i = 0; i < state.data_form.detalle_ingreso.length; i++) {
            if (state.data_form.detalle_ingreso[i].articulo == id) {
                console.log("asdasd");
                state.data_form.detalle_ingreso.splice(i, 1);
                break;
            }
        }
    },
    [types.SET_DETALLE_INGRESO]: (state, items) => {
        state.detalle_ingreso = items;
    },
    [types.CONVERT_DATE]: state => {
        state.data_form.fecha_solicitud = moment(
            state.data_form.fecha_solicitud
        ).format("YYYY-MM-DD");
        state.data_form.fecha_comprobante = moment(state.data_form.fecha_comprobante).format(
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

/*








import * as types from "./mutation-types";
import * as actions from "./actions";
import * as getters from "./getters";
import item from "../item";
//import item from "../item";

const state = {
    items: [],
    data_form: {
        acta: "",
        tipo_ingreso: "COMPRA",
        tipo_comprobante: null,
        tipo_compra: "",
        nro_compra: 0,
        nro_solicitud: "",
        nro_comprobante: null,
        nro_autorizacion: "",
        proveedor: null,
        detalle_ingreso: []
    },
    detalle_ingreso: [],
    show_detalle: {},
    loading_table: false,
    error_table: false,
    submit_success: false,
    submit_error: false,
    loading_form: false,
    searchQuery: ""
};
const mutations = {
    [types.SET_LOADING_TABLE]: (state, status) => {
        state.loading_table = status;
    },
    [types.SET_ERROR_TABLE]: (state, status) => {
        state.error_table = status;
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
    /!**
     * SET_ITEMS Establece los articulos recibidos
     *!/
    [types.SET_ITEMS]: (state, items) => {
        state.items = items;
    },
    [types.SET_ITEM]: (state, item) => {
        state.items.push(item);
    },
    [types.SET_ITEM_DETAIL]: (state, item) => {
        state.detalle_ingreso.push(item);
    },
    [types.SET_DETALLE_INGRESOS]: (state, items) => {
        let detalles = [];
        items.forEach(item => {
            if (!detalles.find(e => item.item_id == e.idItem)) {
                detalles.push({
                    idItem: item.item_id,
                    nombre: item.articulo,
                    stock: item.stock,
                    saldo: item.saldo,
                    lotes: [
                        {
                            stock: item.stock,
                            saldo: item.saldo,
                            precio: item.precio,
                            tipo_ingreso: item.tipo_ingreso
                        }
                    ]
                });
            } else {
                detalles.map(dato => {
                    // console.log(dato);
                    if (dato.idItem == item.item_id) {
                        dato.stock = dato.stock + item.stock;
                        dato.saldo = dato.saldo + item.saldo;
                        dato.lotes.push({
                            stock: item.stock,
                            saldo: item.saldo,
                            precio: item.precio,
                            tipo_ingreso: item.tipo_ingreso
                        });
                    }
                    return dato;
                });
            }
        });
        state.detalle_ingreso = detalles;
    },
    [types.DELETE_ITEM]: (state, item) => {
        for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].idIngreso == item) {
                state.items.splice(i, 1);
                break;
            }
        }
    },
    [types.UPDATE_ITEM]: (state, item) => {
        for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].idIngreso == item.idIngreso) {
                for (const prop in item) {
                    state.items[i][prop] = item[prop];
                }
                break;
            }
        }
    },
    [types.SET_EDIT_FORM]: (state, item) => {
        // state.data_form = ...item;
        // // state.data_form.acta = item.acta;
        // // state.data_form.tipo_ingreso = item.tipo_ingreso;
        // // state.data_form.tipo_comprobante = item.descripcion;
        // // state.data_form.tipo_compra =
        // acta: "",
        // tipo_ingreso: "COMPRA",
        // tipo_comprobante: null,
        // tipo_compra: "",
        // nro_compra: 0,
        // nro_solicitud: "",
        // nro_comprobante: null,
        // nro_autorization: "",
        // proveedor: null,
        // detalle_ingreso: []
    },
    [types.CLEAR_FORM]: state => {
        state.data_form = {
            acta: "",
            tipo_ingreso: "COMPRA",
            tipo_comprobante: null,
            tipo_compra: "",
            nro_compra: 0,
            nro_solicitud: "",
            nro_comprobante: null,
            nro_autorization: "",
            proveedor: null,
            detalle_ingreso: []
        };
    },
    [types.ADD_DETALLE_INGRESO]: (state, data) => {
        console.log(data);
        state.data_form.detalle_ingreso.push({
            ...data
        });
    },
    [types.DELETE_DETALLE_INGRESO]: (state, id) => {
        for (let i = 0; i < state.data_form.detalle_ingreso.length; i++) {
            if (state.data_form.detalle_ingreso[i].articulo == id) {
                console.log("asdasd");
                state.data_form.detalle_ingreso.splice(i, 1);
                break;
            }
        }
    },
    [types.SET_DETALLE]: (state, data) => {
        state.show_detalle = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
*/
