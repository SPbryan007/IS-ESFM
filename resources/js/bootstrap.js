window._ = require("lodash");

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    //window.Popper = require("popper.js").default;
    window.$ = window.jQuery = require("jquery");
    //window.$ = window.swal = require("admin-lte/plugins/sweetalert2/sweetalert2.min.js");
    window.toastr = require("admin-lte/plugins/toastr/toastr.min.js");
    toastr.options = {
        closeButton: true,
        debug: false,
        newestOnTop: false,
        progressBar: true,
        positionClass: "toast-bottom-right",
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    };
    require("admin-lte");

    require("admin-lte/plugins/jquery/jquery.min.js");
    require("admin-lte/plugins/jquery-ui/jquery-ui.min.js");
    //require("popper.js/dist/popper.min.js");
    require("admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js");
    require("admin-lte/plugins/select2/js/select2.full.min.js");
    //require("admin-lte/plugins/sweetalert2/sweetalert2.min.js");
    // require("admin-lte/plugins/toastr/toastr.min.js");
    require("admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js");

    require("admin-lte/plugins/datatables/jquery.dataTables.js");
    require("admin-lte/plugins/datatables-bs4/js/dataTables.bootstrap4.js");
    require("admin-lte/plugins/jquery-validation/jquery.validate.min.js");
    require("admin-lte/plugins/jquery-validation/additional-methods.min.js");
    require("admin-lte/dist/js/adminlte.min.js");
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require("axios");

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });
