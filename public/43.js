(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/StartedView.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/periodo/StartedView.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/index */ "./resources/js/store/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes */ "./resources/js/routes.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("gestion", ["data_form", "detalle_ingreso", "submit_error", "submit_success", "loading_form"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("ingreso", ["GET_DETALLE_INGRESOS"])),
  methods: {
    iniciar: function iniciar() {
      var _this = this;

      this.$confirm("\xBF Esta seguro de iniciar el periodo ?, No se podra revertir el proceso despues de iniciar", "Advertencia", {
        confirmButtonText: "Si iniciar",
        cancelButtonText: "Cancelar",
        type: "warning"
      }).then(function () {
        _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("gestion/iniciarPeriodo", {
          message: _this.$message
        });
      })["catch"](function () {
        return null;
      });
    },
    cancelar: function cancelar() {
      _routes__WEBPACK_IMPORTED_MODULE_2__["router"].push({
        name: "gestion"
      });
    }
  },
  created: function created() {
    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("ingreso/getDetalleIngreso");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/StartedView.vue?vue&type=template&id=9f152594&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/periodo/StartedView.vue?vue&type=template&id=9f152594& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c("div", {}, [
            _c("dl", { staticClass: "pl-5 row" }, [
              _c("dt", { staticClass: "col-sm-2" }, [_vm._v("Gestion :")]),
              _vm._v(" "),
              _c("dd", { staticClass: "col-sm-9" }, [
                _vm._v(_vm._s(_vm.data_form.nombre))
              ]),
              _vm._v(" "),
              _c("dt", { staticClass: "col-sm-2 text-truncate" }, [
                _vm._v("Del :")
              ]),
              _vm._v(" "),
              _c("dd", { staticClass: "col-sm-9" }, [
                _vm._v(_vm._s(_vm._f("dateformat")(_vm.data_form.fecha_inicio)))
              ]),
              _vm._v(" "),
              _c("dt", { staticClass: "col-sm-2" }, [_vm._v("Al :")]),
              _vm._v(" "),
              _c("dd", { staticClass: "col-sm-9" }, [
                _vm._v(_vm._s(_vm._f("dateformat")(_vm.data_form.fecha_fin)))
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "el-table",
            {
              staticStyle: { width: "100%" },
              attrs: { stripe: "", data: _vm.GET_DETALLE_INGRESOS }
            },
            [
              _c("el-table-column", {
                attrs: { type: "expand" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(props) {
                      return [
                        props.row.lotes[0].stock != 0
                          ? _c(
                              "el-table",
                              {
                                staticStyle: {
                                  width: "100%",
                                  "margin-top": "-20px"
                                },
                                attrs: { stripe: "", data: props.row.lotes }
                              },
                              [
                                _c("el-table-column", {
                                  attrs: {
                                    label: "Nro de Lote",
                                    width: "150",
                                    type: "index",
                                    sortable: ""
                                  }
                                }),
                                _vm._v(" "),
                                _c("el-table-column", {
                                  attrs: { label: "Cantidad", sortable: "" },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function(scope) {
                                          return [
                                            _c("i", {
                                              staticClass: "el-icon-s-data"
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticStyle: {
                                                  "margin-left": "10px"
                                                }
                                              },
                                              [
                                                _c(
                                                  "el-tag",
                                                  { attrs: { size: "medium" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(scope.row.stock)
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                }),
                                _vm._v(" "),
                                _c("el-table-column", {
                                  attrs: {
                                    label: "Precio Unitario",
                                    sortable: ""
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function(scope) {
                                          return [
                                            _c("i", {
                                              staticClass: "fas fa-dollar-sign"
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticStyle: {
                                                  "margin-left": "10px"
                                                }
                                              },
                                              [
                                                _c(
                                                  "el-tag",
                                                  {
                                                    attrs: {
                                                      size: "medium",
                                                      type: "success"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                      " +
                                                        _vm._s(
                                                          scope.row.precio
                                                        ) +
                                                        "\n                      "
                                                    ),
                                                    _c("strong", [_vm._v("Bs")])
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                }),
                                _vm._v(" "),
                                _c("el-table-column", {
                                  attrs: { label: "Saldo", sortable: "" },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function(scope) {
                                          return [
                                            _c("i", {
                                              staticClass: "fas fa-sack-dollar"
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticStyle: {
                                                  "margin-left": "10px"
                                                }
                                              },
                                              [
                                                _c(
                                                  "el-tag",
                                                  {
                                                    attrs: {
                                                      size: "medium",
                                                      type: "warning"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                      " +
                                                        _vm._s(
                                                          scope.row.saldo
                                                        ) +
                                                        "\n                      "
                                                    ),
                                                    _c("strong", [_vm._v("Bs")])
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                }),
                                _vm._v(" "),
                                _c("el-table-column", {
                                  attrs: {
                                    label: "Tipo de ingreso",
                                    sortable: ""
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function(scope) {
                                          return [
                                            _c("i", {
                                              staticClass:
                                                "fas fa-shopping-cart"
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticStyle: {
                                                  "margin-left": "10px"
                                                }
                                              },
                                              [
                                                _c(
                                                  "el-tag",
                                                  {
                                                    attrs: {
                                                      size: "medium",
                                                      type: "info"
                                                    }
                                                  },
                                                  [
                                                    _c("strong", [
                                                      _vm._v(
                                                        _vm._s(
                                                          scope.row.tipo_ingreso
                                                        )
                                                      )
                                                    ])
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                })
                              ],
                              1
                            )
                          : _vm._e()
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  label: "Articulo",
                  prop: "nombre",
                  width: "600",
                  sortable: ""
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  label: "Cantidad inicial",
                  prop: "stock",
                  sortable: ""
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Saldo inicial", prop: "saldo", sortable: "" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row container pt-4 pl-5" },
            [
              _c(
                "el-button",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading.fullscreen.lock",
                      value: _vm.loading_form,
                      expression: "loading_form",
                      modifiers: { fullscreen: true, lock: true }
                    }
                  ],
                  attrs: {
                    type: "primary",
                    "element-loading-text": "Iniciando periodo..."
                  },
                  on: { click: _vm.iniciar }
                },
                [_vm._v("Iniciar periodo")]
              ),
              _vm._v(" "),
              _c("el-button", { on: { click: _vm.cancelar } }, [
                _vm._v("Cancelar")
              ])
            ],
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" })
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("h3", { staticClass: "card-title" }, [
        _vm._v("Detalle del inventario inicial")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/periodo/StartedView.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/periodo/StartedView.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StartedView_vue_vue_type_template_id_9f152594___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StartedView.vue?vue&type=template&id=9f152594& */ "./resources/js/views/periodo/StartedView.vue?vue&type=template&id=9f152594&");
/* harmony import */ var _StartedView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StartedView.vue?vue&type=script&lang=js& */ "./resources/js/views/periodo/StartedView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StartedView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StartedView_vue_vue_type_template_id_9f152594___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StartedView_vue_vue_type_template_id_9f152594___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/periodo/StartedView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/periodo/StartedView.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/periodo/StartedView.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartedView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./StartedView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/StartedView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartedView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/periodo/StartedView.vue?vue&type=template&id=9f152594&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/periodo/StartedView.vue?vue&type=template&id=9f152594& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StartedView_vue_vue_type_template_id_9f152594___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./StartedView.vue?vue&type=template&id=9f152594& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/StartedView.vue?vue&type=template&id=9f152594&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StartedView_vue_vue_type_template_id_9f152594___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StartedView_vue_vue_type_template_id_9f152594___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);