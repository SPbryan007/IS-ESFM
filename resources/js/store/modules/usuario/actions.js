import commonProviders from "./../providers";
//import {URL_ARTICULO, URL_AUTH, URL_USUARIO} from "./../url";
import * as types from "./../mutation-types";
import {router} from "../../../routes";

const URL_AUTH = '/auth/';
const URL_USUARIO = '/controller/usuario/';

export const getItems = ({ state, commit }) => {
    commit(types.SET_LOADING_TABLE, true);
    commonProviders
        .getItems(URL_USUARIO+`?withTrashed=${state.withTrashed}`)
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
 * Registrar Usuario
 *
 */
export const addItem = ({ commit, state, dispatch }, params) => {
    params.progress.start();
    commit(types.SET_LOADING_FORM, true);
    commonProviders
        .register(URL_USUARIO, state.data_form)
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
/**
 * Action Elimiar Articulo
 */
export const deleteItem = ({ commit, dispatch }, params) => {
    params.progress.start();
    commit(types.SET_LOADING_FORM, true);
    commonProviders
        .delete(URL_USUARIO + params.id)
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
 * Action CHANGE ROL
 */
export const changeRole = ({ commit, state,dispatch }, params) => {
    params.progress.start();
    commit(types.SET_LOADING_FORM, true);
    commonProviders
        .update(URL_USUARIO + params.id)
        .then(item => {
            commit(types.SET_LOADING_FORM, false);
            dispatch('getItems');
            params.progress.finish();
            params.message({
                message: item.data.message,
                type: "info"
            });
        })
        .catch(error => {
            commit(types.SET_LOADING_FORM, false);
            commit(types.SET_DISPLAY_MESSAGE, error.response);
            params.progress.fail();
        });
};

export const resetPassword = ({ commit, state,dispatch }, params) => {
    params.progress.start();
    commit(types.SET_LOADING_FORM, true);
    commonProviders
        .update(URL_AUTH+'resetDefaultPassword/' + params.id,{})
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
        })
        .catch(error => {
            commit(types.SET_DISPLAY_MESSAGE, error.response);
            commit(types.SET_LOADING_FORM, false);
            params.progress.fail();
        });
};
