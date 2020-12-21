(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/AddDetailsView.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/periodo/AddDetailsView.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/index */ "./resources/js/store/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes */ "./resources/js/routes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      moment: moment__WEBPACK_IMPORTED_MODULE_2___default.a,
      languages: 'es',
      has_errors: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("item", ["items"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("gestion", ["data", "error", "loading", "disabled", "success"])),
  methods: _objectSpread({
    hola: function hola() {// const swalWithBootstrapButtons = this.$swal.mixin({
      //     customClass: {
      //         confirmButton: "btn btn-success",
      //         cancelButton: "btn btn-danger"
      //     },
      //     buttonsStyling: false
      // });
      // swalWithBootstrapButtons
      //     .fire({
      //         title: "Are you sure?",
      //         text: "You won't be able to revert this!",
      //         icon: "warning",
      //         showCancelButton: true,
      //         confirmButtonText: "Yes, delete it!",
      //         cancelButtonText: "No, cancel!",
      //         reverseButtons: true
      //     })
      //     .then(result => {
      //         if (result.value) {
      //             swalWithBootstrapButtons.fire(
      //                 "Deleted!",
      //                 "Your file has been deleted.",
      //                 "success"
      //             );
      //         } else if (
      //             /* Read more about handling dismissals below */
      //             result.dismiss === Swal.DismissReason.cancel
      //         ) {
      //             swalWithBootstrapButtons.fire(
      //                 "Cancelled",
      //                 "Your imaginary file is safe :)",
      //                 "error"
      //             );
      //         }
      //     });
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("gestion", ["OnClickCancelDetails", "VALIDATE_START_DATE", "VALIDATE_END_DATE"]), {
    AddGestion: function AddGestion() {
      var _this = this;

      var data_form = this.$store.state.gestion.data;

      if (!data_form.nombre || !data_form.fecha_inicio.date || !data_form.fecha_fin.date || !data_form.fecha_inicio.valid || !data_form.fecha_fin.valid) {
        _routes__WEBPACK_IMPORTED_MODULE_3__["router"].push({
          name: "addgestion"
        });
      } else {
        this.$swal({
          title: "¿ Esta seguro ?",
          text: "Si existe una periodo en curso esta se cerrará y no se podra revertir una vez iniciada la periodo",
          type: "warning",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Si, Iniciar periodo",
          cancelButtonText: "Cancelar",
          showCloseButton: true,
          showLoaderOnConfirm: true
        }).then(function (result) {
          if (result.value) {
            _this.has_errors = false;

            _this.$store.dispatch("gestion/addGestion", _this.$Progress);

            _this.$swal("Correcto", "Gestion iniciada exitosamente", "success");
          } else {
            _this.$swal("Cancelada", "Cancel deletion", "info");
          }
        });
      }
    }
  }),
  created: function created() {
    this.$store.dispatch("item/GET_DATA_FROM_SERVER");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/AddDetailsView.vue?vue&type=template&id=a09d0b34&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/periodo/AddDetailsView.vue?vue&type=template&id=a09d0b34& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-md-6 offset-md-3" }, [
    _c("div", { staticClass: "card bg-light" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("h4", { staticClass: "text-center" }, [
              _c("p", [_vm._v(_vm._s(_vm.data.nombre))]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n              " +
                    _vm._s(
                      _vm
                        .moment(_vm.data.fecha_inicio.date)
                        .format("MMM. D, YYYY ") +
                        " - " +
                        _vm
                          .moment(_vm.data.fecha_fin.date)
                          .format("MMM. D, YYYY ")
                    ) +
                    "\n            "
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "table",
          { staticClass: "table table-striped table-valign-middle" },
          [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.items, function(item, index) {
                return _c("tr", { key: index }, [
                  _c("td", [_c("strong", [_vm._v(_vm._s(item.nombre))])]),
                  _vm._v(" "),
                  _c("td", [
                    _c("h6", [
                      _c("span", { staticClass: "badge bg-success" }, [
                        _vm._v(_vm._s(item.stock + " " + item.um_sigla))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("h6", [
                      _c("span", { staticClass: "badge bg-info" }, [
                        _vm._v(
                          "\n                  " +
                            _vm._s(item.saldo + " Bs") +
                            "\n                "
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(3, true)
                ])
              }),
              0
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      [
        _vm.loading
          ? _c("spinner")
          : _c("div", { staticClass: "col-md-6" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-default btn-block",
                  attrs: { type: "button" },
                  on: { click: _vm.OnClickCancelDetails }
                },
                [_vm._v("Cancelar")]
              )
            ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-block btn-info",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  return _vm.AddGestion()
                }
              }
            },
            [_vm._v("INICIAR GESTION")]
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("h3", { staticClass: "card-title" }, [
        _vm._v("Detalles de inicio de gestion")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-info alert-dismissible" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "alert",
            "aria-hidden": "true"
          }
        },
        [_vm._v("×")]
      ),
      _vm._v(" "),
      _c("h5", [
        _c("i", { staticClass: "icon fas fa-info" }),
        _vm._v(" Alert!\n        ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Item")]),
        _vm._v(" "),
        _c("th", [_vm._v("Stock inicial")]),
        _vm._v(" "),
        _c("th", [_vm._v("Saldo inicial")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ver")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("a", { staticClass: "btn btn-tool btn-sm", attrs: { href: "#" } }, [
        _c("i", { staticClass: "fas fa-eye" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/periodo/AddDetailsView.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/periodo/AddDetailsView.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddDetailsView_vue_vue_type_template_id_a09d0b34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddDetailsView.vue?vue&type=template&id=a09d0b34& */ "./resources/js/views/periodo/AddDetailsView.vue?vue&type=template&id=a09d0b34&");
/* harmony import */ var _AddDetailsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddDetailsView.vue?vue&type=script&lang=js& */ "./resources/js/views/periodo/AddDetailsView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddDetailsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddDetailsView_vue_vue_type_template_id_a09d0b34___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddDetailsView_vue_vue_type_template_id_a09d0b34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/periodo/AddDetailsView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/periodo/AddDetailsView.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/periodo/AddDetailsView.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDetailsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddDetailsView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/AddDetailsView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDetailsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/periodo/AddDetailsView.vue?vue&type=template&id=a09d0b34&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/periodo/AddDetailsView.vue?vue&type=template&id=a09d0b34& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDetailsView_vue_vue_type_template_id_a09d0b34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddDetailsView.vue?vue&type=template&id=a09d0b34& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/AddDetailsView.vue?vue&type=template&id=a09d0b34&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDetailsView_vue_vue_type_template_id_a09d0b34___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDetailsView_vue_vue_type_template_id_a09d0b34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);