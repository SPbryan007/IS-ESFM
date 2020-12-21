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

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)


import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)


import moment from "moment";
Vue.filter("dateformat", arg => {
    //return moment(arg).format("YYYY-MM-DD");
    return arg ? moment(arg).format("DD/MM/YYYY") : '-';
});

import * as writtenNumber from 'written-number';
writtenNumber.defaults.lang = 'es';
Vue.filter("toWords", arg => {
    return writtenNumber(arg);
});

import JwPagination from "jw-vue-pagination";
Vue.component("jw-pagination", JwPagination);

import VTooltip from "v-tooltip";
Vue.use(VTooltip);
// Vue.directive("tooltip", VTooltip);

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
