import commonProviders from "./../providers";
//import { URL_PROVEEDOR } from "../url";
import * as types from "./../mutation-types";
import { router } from "../../../routes";

const  URL_PROVEEDOR = "/controller/proveedor";

export const getItems = ({ state, commit }) => {
    commit(types.SET_LOADING_TABLE, true);
    commonProviders
        .getItems(URL_PROVEEDOR+`?withTrashed=${state.withTrashed}`)
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
    commit(types.SET_LOADING_FORM, true);
    commonProviders
        .register(URL_PROVEEDOR, state.data_form)
        .then(item => {
            console.log('CONSOLE LOG',item)
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
/**
 * Action Elimiar PROVEEDOR
 */
export const deleteItem = ({ commit, dispatch }, params) => {
    params.progress.start();
    commit(types.SET_LOADING_FORM, true);
    commonProviders
        .delete(URL_PROVEEDOR+ params.id)
        .then(async (item) => {
            /*commit(types.DELETE_ITEM, params.id);*/
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
/**
 * Action Editar Proveedor
 */
export const editItem = ({ commit, state,dispatch }, params) => {
    params.progress.start();
    commit(types.SET_LOADING_FORM, true);
    commonProviders
        .update(URL_PROVEEDOR + params.id, state.data_form)
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
            router.push({ name: "proveedor" });
        })
        .catch(error => {
            commit(types.SET_DISPLAY_MESSAGE, error.response);
            params.progress.fail();
        });
};
