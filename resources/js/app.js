require("./bootstrap");

window.Vue = require("vue");
/**
 * SWEETALERT 2
 */
// import toastr from "toastr";
// const toas = toastr.options({

// })

// const toast = swal.mixin({
//     toast: true,
//     position: "top-end",
//     showConfirmButton: false,
//     timer: 3000,
// });
/**
 * STORE
 */
// import VueToastr from 'vue-toastr';
// Vue.use(VueToastr,{
//     name:'Toast Name',
// })

// import VuePagination from 'v-pagination';
// Vue.use(VuePagination);

// import VueColumnsResizable from "vue-columns-resizable";
// Vue.use(VueColumnsResizable);
import { ServerTable, ClientTable, Event } from "vue-tables-2";
// Vue.use(
//     ClientTable,
//     [(options = {})],
//     [(useVuex = false)],
//     [(theme = "bootstrap3")],
//     [(swappables = {})]
// );

import VueApexCharts from 'vue-apexcharts'

Vue.use(VueApexCharts)

import VueHtmlToPaper from 'vue-html-to-paper';

const options = {
    name: '_blank',
    specs: [
        'fullscreen=no',
        'titlebar=yes',
        'scrollbars=yes'
    ],
    styles: [
       'http://localhost/Laravel/store/almacen/public/css/app.css'
    ]
}

Vue.use(VueHtmlToPaper, options);

import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

Vue.use(ClientTable, {}, false, "bootstrap4", "default");
//Vue.use(ClientTable);

import moment from "moment";
Vue.filter("dateformat", arg => {
    //return moment(arg).format("YYYY-MM-DD");
    return arg ? moment(arg).format("DD/MM/YYYY") : '-';
});

import JsonExcel from "vue-json-excel";
Vue.component("downloadExcel", JsonExcel);

import * as writtenNumber from 'written-number';
writtenNumber.defaults.lang = 'es';
Vue.filter("toWords", arg => {
    return writtenNumber(arg);
});

import Datepicker from "vuejs-datepicker";
Vue.component("datepicker", Datepicker);

import JwPagination from "jw-vue-pagination";
Vue.component("jw-pagination", JwPagination);

import VuePaginate from "vue-paginate";
Vue.use(VuePaginate);

// import vSelect from "vue-select";
// Vue.component("v-select", vSelect);

import { ModelSelect } from "vue-search-select";
Vue.component("model-select", ModelSelect);

import VTooltip from "v-tooltip";
Vue.use(VTooltip);
// Vue.directive("tooltip", VTooltip);

//Vue.use(ClientTable, {}, false, "bootstrap3", {});
// Vue.use(
//     ClientTable,
//     [(useVuex = false)],
//     [(theme = "bootstrap4")],
//     [(swappables = {})]
// );

// Vue.use(
//     ClientTable,
//     [(options = {})],
//     [(useVuex = false)],
//     [(theme = "bootstrap4")],
//     [(swappables = {})]
// );
//import BootstrapVue from "bootstrap-vue";
//Vue.use(BootstrapVue);

import VueSweetalert2 from "vue-sweetalert2";
Vue.use(VueSweetalert2);

// import VueTable from "vuetable-2";
// Vue.use(VueTable);
// import VuetablePagination from "vuetable-2/src/components/VuetablePagination.vue";
// Vue.use(VuetablePagination);
// Vue.use(
//     ServerTable,
//     [(useVuex = true)],
//     [(theme = "bootstrap4")],
//     [(swappables = {})]
// );

import * as ModalDialogs from "vue-modal-dialogs";
Vue.use(ModalDialogs);
import vmodal from "vue-js-modal";
//Vue.use(vmodal);
Vue.use(vmodal, { dynamic: true, dynamicDefaults: { clickToClose: false } });

import "../sass/theme/index.css";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/es";
Vue.use(ElementUI, { locale });

import store from "./store/index";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import { router } from "./routes";

Vue.component("spinner", require("vue-simple-spinner"));

import VueProgressBar from "vue-progressbar";
Vue.use(VueProgressBar, {
    color: "#ffeb3b",
    failedColor: "red",
    height: "3px"
});
// Vue.component(
//     "header-component",
//     require("./components/HeaderComponent.vue").default
// );
// Vue.component(
//     "sidebar-component",
//     require("./components/SidebarComponent.vue").default
// );

import App from "./App.vue";
import App2 from "./App2.vue";

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");

// const app = new Vue({
//     el: "#app"
// });

// Vue.component(
//     "example-component",
//     require("./components/ExampleComponent.vue").default
// );

// Vue.component(
//     "login-component",
//     require("./components/auth/LoginComponent.vue").default
// );

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
