import Vue from "vue";
import Vuex from "vuex";

import login from "./modules/login.js";
import proveedor from "./modules/proveedor/index";
import solicitante from "./modules/solicitante/index";
import unidad from "./modules/unidad/index";
import ingreso from "./modules/ingreso/index";
//import partida from "./modules/partida.js";
import partida from "./modules/partida/index";
import unidad_medida from "./modules/unidad_medida/index";
import periodo from "./modules/periodo/index";
import articulo from "./modules/item/index";
import usuario from "./modules/usuario/index";
import funcionario from "./modules/funcionario/index";

import datatable from "./modules/datatable.js";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // authenticated: false
    },
    mutations: {
        // authenticate(state) {
        //     state.authenticated = true;
        // }
    },
    modules: {
        login,
        proveedor,
        datatable,
        solicitante,
        unidad,
        partida,
        unidad_medida,
        periodo,
        articulo,
        usuario,
        ingreso,
        funcionario
    }
});
