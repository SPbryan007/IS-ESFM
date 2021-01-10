import commonProviders from "./../providers";
//import { URL_PARTIDA } from "./../url";
import * as types from "./../mutation-types";
import { router } from "../../../routes";

const  URL_PARTIDA = "/controller/partida";
const  URL_PARTIDA_ = "/controller/partida/";

export const getItems = ({ state, commit,rootState }) => {
    commit(types.SET_LOADING_TABLE, true);
    commonProviders
        .getItems(URL_PARTIDA+`?withTrashed=${state.withTrashed}`)
        .then(items => {
            commit(types.SET_ITEMS, items.data);
            commit(types.SET_LOADING_TABLE, false);
        })
        .catch(error => {
            if(error.response.status == 401){
                rootState.login.user = null;
                router.push({name:'login'});
            }
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
/**
 * Action Elimiar PARTIDA
 */
export const deleteItem = ({ commit, dispatch }, params) => {
    params.progress.start();
    commit(types.SET_LOADING_FORM, true);
    commonProviders
        .delete(URL_PARTIDA_+ params.id)
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
 * Action Editar Partida
 */
export const editItem = ({ commit, state,dispatch }, params) => {
    params.progress.start();
    commit(types.SET_LOADING_FORM, true);
    commonProviders
        .update(URL_PARTIDA_ + params.id, state.data_form)
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
            router.push({ name: "partida" });
        })
        .catch(error => {
            commit(types.SET_LOADING_FORM, false);
            commit(types.SET_DISPLAY_MESSAGE, error.response);
            params.progress.fail();
        });
};
