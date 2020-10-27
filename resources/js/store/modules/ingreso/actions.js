import commonProviders from "./../providers";
import { URL_INGRESO } from "./../url";
import * as types from "./../mutation-types";
import { router } from "../../../routes";

export const getItems = ({ state, commit }) => {
    commit(types.SET_LOADING_TABLE, true);
    commonProviders
        .getItems(URL_INGRESO+`?withTrashed=${state.withTrashed}`)
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
        .register(URL_INGRESO, state.data_form)
        .then(async item => {
            await dispatch('getItems')
            commit(types.SET_LOADING_FORM, false);
            commit(types.CLEAR_FORM);
            params.progress.finish();
            await  dispatch('getDetalleById',item.data.id);
            router.push({name:'viewdetailingreso',params:{id:item.data.id}});
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
        .getById(URL_INGRESO, id)
        .then(item => {
            commit(types.SET_DETALLE_INGRESO, item.data);
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
        .delete(URL_INGRESO + params.id)
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


/*

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
*/

/*



export const getItems = ({ commit }) => {
    commit(types.SET_LOADING_TABLE, true);
    commonProviders
        .getItems(URL_INGRESO)
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
    //params.progress.start();
    commit(types.SET_LOADING_FORM, true);
    commonProviders
        .register(URL_INGRESO, state.data_form)
        .then(item => {
            console.log("TODO BIEN CABALLERO", item.data);
            commit(types.SET_ITEMS, item.data);
            commit(types.SET_SUBMIT_SUCCESS, true);
            commit(types.SET_LOADING_FORM, false);
            commit(types.CLEAR_FORM);
            //params.progress.finish();
            router.push({ name: "ingreso" });
            params.message({
                message: "Ingreso registrada correctamente",
                type: "success"
            });
        })
        .catch(err => {
            console.log("EL HOOROOR", err);
            // params.progress.fail();
            commit(types.SET_SUBMIT_ERROR, true);
            commit(types.SET_LOADING_FORM, false);
            params.message({
                message: "No se pudo registrar el ingreso",
                type: "error"
            });
        });
};
/!**
 * Action Elimiar Ingreso
 *!/
export const deleteItem = ({ commit }, params) => {
    params.progress.start();
    commit(types.SET_LOADING_FORM, true);
    commonProviders
        .delete(URL_INGRESO + params.id)
        .then(() => {
            commit(types.DELETE_ITEM, params.id);
            commit(types.SET_LOADING_FORM, false);
            params.progress.finish();
            params.message({
                message: "Ingreso eliminada exitosamente",
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
 * Action Editar Ingreso
 *!/
export const editItem = ({ commit, state }, params) => {
    params.progress.start();
    commit(types.SET_LOADING_FORM, true);
    commonProviders
        .update(URL_INGRESO + params.id, state.data_form)
        .then(item => {
            commit(types.UPDATE_ITEM, item.data);
            commit(types.SET_LOADING_FORM, false);
            commit(types.CLEAR_FORM);
            params.progress.finish();
            router.push({ name: "ingreso" });
        })
        .catch(error => {
            params.progress.fail();
            console.log(error);

            alert(error);
        });
};

/!**
 *
 *!/
export const getDetalleIngreso = ({ commit, state }) => {
    // params.progress.start();
    // commit(types.SET_LOADING_FORM, true);
    provider
        .getDetalleIngreso(URL_ARTICULO + "lotes")
        .then(item => {
            commit(types.SET_DETALLE_INGRESOS, item.data);
            // commit(types.SET_LOADING_FORM, false);
            // commit(types.CLEAR_FORM);
            // params.progress.finish();
            // router.push({ name: "ingreso" });
        })
        .catch(error => {
            params.progress.fail();
            console.log(error);

            alert(error);
        });
};
export const getDetalleById = ({ state, commit }, id) => {
    commonProviders
        .getById(URL_INGRESO, id)
        .then(item => {
            //console.log('GET BY ID',item);
            commit(types.SET_DETALLE, item.data);
            commit(types.SET_LOADING_FORM, false);
            // commit(types.CLEAR_FORM);
            // params.progress.finish();
            // router.push({ name: "ingreso" });
        })
        .catch(error => {
            console.log(error);
            alert(error);
        });
};
*/
