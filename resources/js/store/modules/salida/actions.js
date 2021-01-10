import commonProviders from "./../providers";
//import { URL_SALIDA } from "./../url";
import * as types from "./../mutation-types";
import { router } from "../../../routes";

const  URL_SALIDA = "/controller/salida/";

export const getItems = ({ state, commit }) => {
    commit(types.SET_LOADING_TABLE, true);
    commonProviders
        .getItems(URL_SALIDA+`?withTrashed=${state.withTrashed}`)
        .then(items => {
            commit(types.SET_ITEMS, items.data);
            commit(types.SET_LOADING_TABLE, false);
        })
        .catch(error => {
            commit(types.SET_DISPLAY_MESSAGE, error.response);
            commit(types.SET_LOADING_TABLE, false);
        });
};
/**
 * Registrar Articulo
 *
 */
export const addItem = ({ commit, state, dispatch }, params) => {
    params.progress.start();
    commit(types.CONVERT_DATE);
    commit(types.SET_LOADING_FORM, true);
    commonProviders
        .register(URL_SALIDA, state.data_form)
        .then(async item => {
            await dispatch('getItems')
            commit(types.SET_LOADING_FORM, false);
            commit(types.CLEAR_FORM);
            params.progress.finish();
            await  dispatch('getDetalleById',item.data.id);
            router.push({name:'viewdetailsalida',params:{id:item.data.id}});
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

export const getDetalleById = ({ state, commit }, id) => {
    commit(types.SET_LOADING_TABLE, true);
    commonProviders
        .getById(URL_SALIDA, id)
        .then(item => {
            commit(types.SET_DETALLE_SALIDA, item.data);
            commit(types.SET_LOADING_TABLE, false);
        })
        .catch(error => {
            commit(types.SET_DISPLAY_MESSAGE, error.response);
            commit(types.SET_LOADING_TABLE, false);
        });
};
export const deleteItem = ({ commit, dispatch }, params) => {
    params.progress.start();
    commit(types.SET_LOADING_FORM, true);
    commonProviders
        .delete(URL_SALIDA + params.id)
        .then(async (item) => {
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
