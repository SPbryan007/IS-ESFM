import commonProviders from "./../providers";
//import {URL_ARTICULO, URL_LOTE, URL_PERIODO} from "./../url";
import * as types from "./../mutation-types";
import moment from "moment";
import { router } from "../../../routes";

const  URL_LOTE = "/controller/lote";
const  URL_ARTICULO = "/controller/articulo";
const  URL_PERIODO = "/controller/periodo";


export const getItems = ({ state, commit }) => {
    commit(types.SET_LOADING_TABLE, true);
    commonProviders
        .getItems(URL_PERIODO+`?withTrashed=${state.withTrashed}`)
        .then(items => {
            commit(types.SET_ITEMS, items.data);
            commit(types.SET_LOADING_TABLE, false);
        })
        .catch(error => {
            commit(types.SET_DISPLAY_MESSAGE, error.response);
            commit(types.SET_LOADING_TABLE, false);
        });
};
export const editItem = ({state, commit, dispatch},params)=>{
    params.progress.start();
 //   commit(types.CONVERT_DATE);
    commit(types.SET_LOADING_FORM, true);
    commonProviders
        .update(URL_PERIODO + params.id, state.data_form)
        .then(item => {
            dispatch('getItems');
            /*            commit(types.UPDATE_ITEM, item.data);*/
            commit(types.SET_LOADING_FORM, false);
            commit(types.CLEAR_FORM);
            params.progress.finish();
            params.message({
                message: item.data.message,
                type: "info"
            });
            router.push({ name: "periodo" });
        })
        .catch(error => {
            commit(types.SET_DISPLAY_MESSAGE, error.response);
            params.progress.fail();
        });
};
export const deleteItem = ({ commit, dispatch }, params) => {
    params.progress.start();
    commit(types.SET_LOADING_FORM, true);
    commonProviders
        .delete(URL_PERIODO+ params.id)
        .then(async (item) => {
            await dispatch('getItems');
            commit(types.SET_LOADING_FORM, false);
            commit(types.SET_CURRENT,false);
            params.progress.finish();
            params.message({
                message: item.data.message,
                type: "success"
            });
        })
        .catch(error => {
            commit(types.SET_LOADING_FORM, false);
            commit(types.SET_DISPLAY_MESSAGE, error.response);
            params.progress.fail();
        });
};
export const VALIDATE_START_DATE = ({ state }, date) => {
    return axios.get(URL_PERIODO+'validate'+`?date=${moment(date).format("YYYY-MM-DD")}`)
        .then(item => {
            return item.data;
        })
        .catch(error => {
            commit(types.SET_DISPLAY_MESSAGE, error.response);
        });
};
export const VALIDATE_END_DATE = ({ state }, date) => {
    let fin = moment(date).format("YYYY-MM-DD");
    let inicio = moment(state.data_form.fecha_inicio).format("YYYY-MM-DD");
    if (fin > inicio)
        return true;
    return false;
};

export const getLotes = ({ commit }) => {
    commit(types.SET_LOADING_TABLE, true);
    commonProviders
        .getItems(URL_LOTE)
        .then(items => {
            commit(types.SET_LOTES, items.data);
            commit(types.SET_LOADING_TABLE, false);
        })
        .catch(error => {
            commit(types.SET_DISPLAY_MESSAGE, error.response);
            commit(types.SET_LOADING_TABLE, false);
        });
};
export const startPeriodo = ({ state, commit,dispatch }, params) => {
    commit(types.CONVERT_DATE);
    commit(types.SET_LOADING_FORM, true);
    axios.post(URL_PERIODO, state.data_form)
        .then(item => {
            dispatch('getItems');
            commit(types.SET_LOADING_FORM, false);
            params.message({
                message: item.data.message,
                type: "success"
            });
            router.push({ name: "periodo" });
        })
        .catch(error => {
            commit(types.SET_LOADING_FORM, false);
            commit(types.SET_DISPLAY_MESSAGE, error.response);
        });
};

export const verify = ({state,commit}) =>{
    axios.get(URL_PERIODO+'current')
        .then((item) =>{
            state.current = item.data;
        })
        .catch((error)=>{
            commit(types.SET_LOADING_FORM, false);
            commit(types.SET_DISPLAY_MESSAGE, error.response);
        });
}















/*

/!**
 * Registrar Articulo
 *

 *!/
export const addItem = ({ commit, state, dispatch }, params) => {
    params.progress.start();
    commit(types.SET_LOADING_FORM, true);
    commonProviders
        .register(URL_PARTIDA, state.data_form)
        .then(item => {
            console.log('item'.item);
            dispatch('getItems')
            commit(types.SET_LOADING_FORM, false);
            commit(types.CLEAR_FORM);
            params.progress.finish();
            params.message({
                message: item.data.message,
                type: "success"
            });
        })
        .catch(error => {
            commit(types.SET_DISPLAY_MESSAGE, error.response);
            commit(types.SET_LOADING_FORM, false);
            params.progress.fail();
        });
};
/!**
 * Action Elimiar PARTIDA
 *!/
export const deleteItem = ({ commit, dispatch }, params) => {
    params.progress.start();
    commit(types.SET_LOADING_FORM, true);
    commonProviders
        .delete(URL_PARTIDA+ params.id)
        .then(async (item) => {
            /!*commit(types.DELETE_ITEM, params.id);*!/
            await dispatch('getItems');
            commit(types.SET_LOADING_FORM, false);
            params.progress.finish();
            params.message({
                message: item.data.message,
                type: "success"
            });
        })
        .catch(error => {
            commit(types.SET_LOADING_FORM, false);
            commit(types.SET_DISPLAY_MESSAGE, error.response);
            params.progress.fail();
        });
};
/!**
 * Action Editar Partida
 *!/
export const editItem = ({ commit, state,dispatch }, params) => {
    params.progress.start();
    commit(types.SET_LOADING_FORM, true);
    commonProviders
        .update(URL_PARTIDA + params.id, state.data_form)
        .then(item => {
            dispatch('getItems');
            /!*            commit(types.UPDATE_ITEM, item.data);*!/
            commit(types.SET_LOADING_FORM, false);
            commit(types.CLEAR_FORM);
            params.progress.finish();
            params.message({
                message: item.data.message,
                type: "info"
            });
            router.push({ name: "partida" });
        })
        .catch(error => {
            commit(types.SET_DISPLAY_MESSAGE, error.response);
            params.progress.fail();
        });
};



















import provider from "./provider";
import commonProviders from "./../providers";
import { URL_GESTION } from "./../url";
import * as types from "./mutation-types";
import { router } from "../../../routes";
import moment from "moment";
import providers from "./../providers";

export const getItems = ({ commit }) => {
    commit(types.SET_LOADING_TABLE, true);
    commonProviders
        .getItems(URL_GESTION)
        .then(items => {
            commit(types.SET_ITEMS, items.data);
            commit(types.SET_LOADING_TABLE, false);
        })
        .catch(error => {
            commit(types.SET_ERROR_TABLE, true);
            commit(types.SET_LOADING_TABLE, false);
        });
};
/!**
 * Registrar Articulo
 *!/
export const addItem = ({ commit, state }, params) => {
    params.progress.start();
    commit(types.SET_LOADING_FORM, true);
    commonProviders
        .register(URL_GESTION, state.data_form)
        .then(item => {
            commit(types.SET_ITEM, item.data);
            commit(types.SET_SUBMIT_SUCCESS, true);
            commit(types.SET_LOADING_FORM, false);
            commit(types.CLEAR_FORM);
            params.progress.finish();
            params.message({
                message: "Gestion registrada correctamente",
                type: "success"
            });
        })
        .catch(err => {
            params.progress.fail();
            commit(types.SET_SUBMIT_ERROR, true);
            commit(types.SET_LOADING_FORM, false);
            params.message({
                message: "No se pudo registrar la periodo",
                type: "error"
            });
        });
};
/!**
 * Action Elimiar Gestion
 *!/
export const deleteItem = ({ commit }, params) => {
    params.progress.start();
    commit(types.SET_LOADING_FORM, true);
    commonProviders
        .delete(URL_GESTION + params.id)
        .then(() => {
            commit(types.DELETE_ITEM, params.id);
            commit(types.SET_LOADING_FORM, false);
            params.progress.finish();
            params.message({
                message: "Gestion eliminada exitosamente",
                type: "success"
            });
        })
        .catch(error => {
            commit(types.SET_LOADING_FORM, false);
            params.progress.fail();
            alert("SOMETHIGN WAS WRONG");
        });
};
/!**
 * Action Editar Gestion
 *!/
export const editItem = ({ commit, state }, params) => {
    params.progress.start();
    commit(types.SET_LOADING_FORM, true);
    commonProviders
        .update(URL_GESTION + params.id, state.data_form)
        .then(item => {
            commit(types.UPDATE_ITEM, item.data);
            commit(types.SET_LOADING_FORM, false);
            commit(types.CLEAR_FORM);
            params.progress.finish();
            router.push({ name: "gestion" });
        })
        .catch(error => {
            params.progress.fail();
            console.log(error);

            alert(error);
        });
};
export const VALIDATE_START_DATE = ({ state }, date) => {
    return provider
        .validateDate(
            URL_GESTION + "validate",
            moment(date).format("YYYY-MM-DD")
        )
        .then(item => {
            console.log(item);
            return item.data;
        })
        .catch(e => {
            alert("ERROR");
            console.log("ERROR", e);
        });
};
export const VALIDATE_END_DATE = ({ state }, date) => {
    let fin = moment(date).format("YYYY-MM-DD");
    let inicio = moment(state.data_form.fecha_inicio).format("YYYY-MM-DD");
    if (fin > inicio) {
        return true;
    }
    return false;
};
export const iniciarPeriodo = ({ state, commit }, params) => {
    commit(types.CONVERT_DATE);
    commit(types.SET_LOADING_FORM, true);
    provider
        .iniciarPeriodo(URL_GESTION, state.data_form)
        .then(items => {
            console.log("ESTE ES EL RESULTADO", items);
            commit(types.SET_LOADING_FORM, false);
            commit(types.SET_ITEMS, items.data);
            params.message({
                message: "Periodo contable iniciado correctamente",
                type: "success"
            });
            router.push({ name: "gestion" });
        })
        .catch(err => {
            commit(types.SET_LOADING_FORM, false);
            console.log("error", err);
        });
};
*/
