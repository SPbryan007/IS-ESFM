(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/salida/ViewDetails.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/salida/ViewDetails.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
      numero: 1997
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("salida", ["detalle_salida", "data_form", "loading_form", "alert"])),
  methods: {
    Print: function Print() {
      window.open('http://localhost:8000/controller/salida/imprimir/' + this.$route.params.id, '_blank');
    },
    exportPDF: function exportPDF(nro, date) {
      axios.get('/controller/salida/export_pdf/' + this.$route.params.id, {
        responseType: 'blob'
      }).then(function (response) {
        var blob = new Blob([response.data], {
          type: 'application/pdf'
        });
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'NIA-' + nro + '-' + moment__WEBPACK_IMPORTED_MODULE_2___default()(date).format("DD/MM/YYYY");
        link.click();
        URL.revokeObjectURL(link.href);
      })["catch"](console.error);
    },
    goBack: function goBack() {
      _routes__WEBPACK_IMPORTED_MODULE_3__["router"].push({
        name: 'salida'
      }); //this.$router.go(-1);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/salida/ViewDetails.vue?vue&type=template&id=53406a75&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/salida/ViewDetails.vue?vue&type=template&id=53406a75& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "col-md-12" },
    [
      _vm.alert.show
        ? _c("el-alert", {
            attrs: {
              title: _vm.alert.title,
              type: _vm.alert.color,
              description: _vm.alert.message,
              "show-icon": "",
              closable: ""
            },
            on: {
              close: function($event) {
                _vm.alert.show = false
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row justify-content-between mb-4  mr-1 ml-1  mt-4" },
        [
          _c(
            "div",
            { staticClass: "pull-lef" },
            [
              _c("el-page-header", {
                staticClass: "mt-2",
                attrs: { content: "Salidas" },
                on: { back: _vm.goBack }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "pull-right" },
            [
              _c(
                "el-button",
                {
                  attrs: {
                    disabled: _vm.detalle_salida.deleted_at,
                    type: "primary",
                    icon: "el-icon-printer"
                  },
                  on: {
                    click: function($event) {
                      return _vm.Print()
                    }
                  }
                },
                [_vm._v("Imprimir")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: {
                    disabled: _vm.detalle_salida.deleted_at,
                    type: "danger"
                  },
                  on: {
                    click: function($event) {
                      return _vm.exportPDF(
                        _vm.detalle_salida.nro_salida,
                        _vm.detalle_salida.created_at
                      )
                    }
                  }
                },
                [_c("i", { staticClass: "fas fa-file-pdf" }), _vm._v(" Pdf")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { ref: "table", staticClass: "card-body", attrs: { id: "printMe" } },
          [
            _c("div", { staticClass: "row invoice-info" }, [
              _c("div", { staticClass: "col-md-5 invoice-col" }, [
                _c("dl", { staticClass: "row" }, [
                  _c("dt", { staticClass: "col-md-5" }, [
                    _vm._v("Expedido por:")
                  ]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "col-md-7" }, [
                    _vm._v(
                      _vm._s(
                        _vm.detalle_salida.usuario.funcionario.nombre +
                          " " +
                          _vm.detalle_salida.usuario.funcionario.apellido
                      )
                    )
                  ]),
                  _vm._v(" "),
                  _c("dt", { staticClass: "col-md-5" }, [
                    _vm._v("Fecha de salida:")
                  ]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "col-md-7" }, [
                    _vm._v(
                      _vm._s(
                        _vm._f("dateformat")(_vm.detalle_salida.created_at)
                      )
                    )
                  ]),
                  _vm._v(" "),
                  _c("dt", { staticClass: "col-md-5" }, [
                    _vm._v("Solicitante:")
                  ]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "col-md-7" }, [
                    _vm._v(
                      _vm._s(
                        _vm.detalle_salida.solicitante.funcionario.nombre +
                          " " +
                          _vm.detalle_salida.solicitante.funcionario.apellido
                      )
                    )
                  ]),
                  _vm._v(" "),
                  _c("dt", { staticClass: "col-md-5" }, [
                    _vm._v("Autorizado por:")
                  ]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "col-md-7" }, [
                    _vm._v(
                      _vm._s(
                        _vm.detalle_salida.autorizador.nombre +
                          " " +
                          _vm.detalle_salida.autorizador.apellido
                      )
                    )
                  ]),
                  _vm._v(" "),
                  _c("dt", { staticClass: "col-md-5" }, [
                    _vm._v("Verificado por:")
                  ]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "col-md-7" }, [
                    _vm._v(
                      _vm._s(
                        _vm.detalle_salida.verificador.nombre +
                          " " +
                          _vm.detalle_salida.verificador.apellido
                      )
                    )
                  ]),
                  _vm._v(" "),
                  _c("dt", { staticClass: "col-md-5" }, [_vm._v("Finalidad:")]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "col-md-7" }, [
                    _vm._v(_vm._s(_vm.detalle_salida.finalidad))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4 invoice-col" }, [
                _c("dl", { staticClass: "row" }, [
                  _c("dt", { staticClass: "col-md-6" }, [_vm._v(" ")]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "col-md-6" }, [_vm._v(" ")]),
                  _vm._v(" "),
                  _c("dt", { staticClass: "col-md-6" }, [_vm._v(" ")]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "col-md-6" }, [_vm._v(" ")]),
                  _vm._v(" "),
                  _c("dt", { staticClass: "col-md-6" }, [
                    _vm._v("Unidad Solicitante")
                  ]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "col-md-6" }, [
                    _vm._v(_vm._s(_vm.detalle_salida.solicitante.unidad.nombre))
                  ]),
                  _vm._v(" "),
                  _c("dt", { staticClass: "col-md-6" }, [_vm._v("N° Pedido:")]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "col-md-6" }, [
                    _vm._v(_vm._s(_vm.detalle_salida.nro_pedido))
                  ]),
                  _vm._v(" "),
                  _c("dt", { staticClass: "col-md-6" }, [_vm._v(" ")]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "col-md-6" }, [_vm._v(" ")])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3" }, [
                _c("dl", { staticClass: "row" }, [
                  _c("dt", { staticClass: "col-md-6" }),
                  _vm._v(" "),
                  _c("dd", { staticClass: "col-md-6" }, [
                    _c("h4", [
                      _c("strong", [
                        _vm._v("NSA: " + _vm._s(_vm.detalle_salida.nro_salida))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("dt", { staticClass: "col-md-6" }, [_vm._v(" ")]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "col-md-6" }, [_vm._v(" ")]),
                  _vm._v(" "),
                  _c("dt", { staticClass: "col-md-6" }, [_vm._v(" ")]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "col-md-6" }, [_vm._v(" ")]),
                  _vm._v(" "),
                  _c("dt", { staticClass: "col-md-6" }, [_vm._v(" ")]),
                  _vm._v(" "),
                  _c("dd", { staticClass: "col-md-6" }, [_vm._v(" ")])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("h4", { staticClass: "text-center" }, [
              _c("strong", [
                _vm._v("Detalle Salida "),
                _vm.detalle_salida.deleted_at
                  ? _c("span", { staticClass: "badge badge-danger" }, [
                      _vm._v("ANULADO")
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("table", { staticClass: "table table-sm table-striped" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.detalle_salida.detallesalidas, function(
                  item,
                  index
                ) {
                  return _c("tr", { key: index }, [
                    _c("td", [_vm._v(_vm._s(index + 1) + ".")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.lote.articulo.codigo))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.lote.articulo.nombre))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.lote.unidad_medida.nombre))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.cantidad.toFixed(2)))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.lote.precio_u.toFixed(2)))]),
                    _vm._v(" "),
                    _c("td", [
                      _c("b", [_vm._v("Bs. ")]),
                      _vm._v(
                        _vm._s((item.cantidad * item.lote.precio_u).toFixed(2))
                      )
                    ])
                  ])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("dl", { staticClass: "row pt-3" }, [
              _c("dt", { staticClass: "col-md-3" }, [_vm._v("Total:")]),
              _vm._v(" "),
              _c("dd", { staticClass: "col-md-7 text-right" }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "border-bottom": "2px dotted #000",
                      "text-decoration": "none"
                    }
                  },
                  [
                    _vm._v(
                      _vm._s(
                        _vm._f("toWords")(Math.trunc(_vm.detalle_salida.total))
                      ) +
                        " y " +
                        _vm._s(
                          (
                            _vm.detalle_salida.total -
                            Math.floor(_vm.detalle_salida.total)
                          ).toFixed(2)
                        ) +
                        "/100 "
                    ),
                    _c("b", [_vm._v("  Bs.")])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-2 text-center" }, [
                _c("u", [_vm._v(_vm._s(_vm.detalle_salida.total.toFixed(2)))])
              ])
            ])
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Detalle de salida")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "10px" } }, [_vm._v("N°")]),
        _vm._v(" "),
        _c("th", [_vm._v("CÓDIGO")]),
        _vm._v(" "),
        _c("th", [_vm._v("ARTICULO")]),
        _vm._v(" "),
        _c("th", [_vm._v("MEDIDA")]),
        _vm._v(" "),
        _c("th", [_vm._v("CANTIDAD")]),
        _vm._v(" "),
        _c("th", [_vm._v("P. UNIT")]),
        _vm._v(" "),
        _c("th", [_vm._v("SUBTOTAL")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/salida/ViewDetails.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/salida/ViewDetails.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewDetails_vue_vue_type_template_id_53406a75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewDetails.vue?vue&type=template&id=53406a75& */ "./resources/js/views/salida/ViewDetails.vue?vue&type=template&id=53406a75&");
/* harmony import */ var _ViewDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewDetails.vue?vue&type=script&lang=js& */ "./resources/js/views/salida/ViewDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewDetails_vue_vue_type_template_id_53406a75___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewDetails_vue_vue_type_template_id_53406a75___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/salida/ViewDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/salida/ViewDetails.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/salida/ViewDetails.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/salida/ViewDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/salida/ViewDetails.vue?vue&type=template&id=53406a75&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/salida/ViewDetails.vue?vue&type=template&id=53406a75& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDetails_vue_vue_type_template_id_53406a75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewDetails.vue?vue&type=template&id=53406a75& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/salida/ViewDetails.vue?vue&type=template&id=53406a75&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDetails_vue_vue_type_template_id_53406a75___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDetails_vue_vue_type_template_id_53406a75___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);