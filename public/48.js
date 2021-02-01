(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/InventarioInicialView.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/periodo/InventarioInicialView.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/index */ "./resources/js/store/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes */ "./resources/js/routes.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      details: {
        lotes: [],
        articulo: null,
        unidad: null
      },
      visible: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("periodo", ["data_form", "alert", "loading_form", "loading_table"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("periodo", ["GET_LOTES"])),
  methods: {
    ViewDetails: function ViewDetails(index, row) {
      this.visible = true;
      this.details.lotes = row.lotes;
      this.details.articulo = row.nombre; // this.details.unidad = row.unidad;
    },
    Total: function Total() {
      var total = 0;
      _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters['periodo/GET_LOTES'].forEach(function (item) {
        total += item.saldo;
      });
      return total;
    },
    StartPeriodo: function StartPeriodo() {
      var _this = this;

      this.$confirm("\xBF Esta seguro de iniciar el periodo ?, No se podra revertir el proceso despues de iniciar", "Advertencia", {
        confirmButtonText: "Si iniciar",
        cancelButtonText: "Cancelar",
        type: "warning"
      }).then(function () {
        _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.periodo.data_form.tipo_inventario = 'INICIO_INVENTARIO';
        _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("periodo/startPeriodo", {
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
    },
    goBack: function goBack() {
      this.$router.go(-1);
    }
  },
  mounted: function mounted() {
    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('login/getUser');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/InventarioInicialView.vue?vue&type=template&id=24a4080e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/periodo/InventarioInicialView.vue?vue&type=template&id=24a4080e& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
                attrs: { content: "Inventario inicial" },
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
                "router-link",
                { attrs: { to: { name: "apertura_inventario_inicial" } } },
                [
                  _c(
                    "el-button",
                    {
                      attrs: {
                        disabled:
                          !_vm.data_form.nombre && _vm.data_form.fecha_inicio,
                        type: "success"
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Nueva apertura\n                        "
                      ),
                      _c("i", { staticClass: "fas fa-door-open" })
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
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
                    disabled:
                      !_vm.data_form.nombre && _vm.data_form.fecha_inicio,
                    type: "primary",
                    "element-loading-text": "Iniciando..."
                  },
                  on: { click: _vm.StartPeriodo }
                },
                [
                  _vm._v("\n                    Iniciar\n                    "),
                  _c("i", { staticClass: "fas fa-clock" })
                ]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header border-0" }, [
          _c("h3", { staticClass: "card-title" }, [
            _vm._v("Inventario inicial   "),
            _vm.loading_table
              ? _c("i", {
                  staticClass: "el-icon-loading",
                  staticStyle: { "font-size": "1.3rem" }
                })
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c(
              "div",
              {
                staticClass:
                  "d-flex justify-content-lg-start align-items-center mb-1"
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c("p", { staticClass: "d-flex flex-column text-left" }, [
                  _c(
                    "i",
                    { staticClass: "ion ion-android-arrow-up text-primary" },
                    [_vm._v("Periodo : ")]
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v(
                      "\n                      Del\n                        "
                    ),
                    _c("i", { staticClass: "font-weight-light" }, [
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            _vm._f("dateformat")(_vm.data_form.fecha_inicio)
                          ) +
                          "\n                        "
                      )
                    ]),
                    _vm._v(" al\n                            "),
                    _c("i", { staticClass: "font-weight-light" }, [
                      _vm._v(
                        "\n                                " +
                          _vm._s(
                            _vm._f("dateformat")(_vm.data_form.fecha_fin)
                          ) +
                          "\n                            "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v(_vm._s(_vm.data_form.nombre))
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "el-dialog",
              {
                attrs: {
                  title: _vm.details.articulo,
                  visible: _vm.visible,
                  width: "830px"
                },
                on: {
                  "update:visible": function($event) {
                    _vm.visible = $event
                  }
                }
              },
              [
                _c(
                  "el-table",
                  { attrs: { data: _vm.details.lotes } },
                  [
                    _c("el-table-column", { attrs: { type: "index" } }),
                    _vm._v(" "),
                    _c("el-table-column", {
                      attrs: {
                        property: "marca",
                        label: "Marca",
                        width: "150"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(scope) {
                            return [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    scope.row.marca ? scope.row.marca : "-"
                                  ) +
                                  "\n                            "
                              )
                            ]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("el-table-column", {
                      attrs: {
                        property: "unidad_medida",
                        label: "Medida",
                        width: "150"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(scope) {
                            return [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(scope.row.unidad_medida.nombre) +
                                  "\n                            "
                              )
                            ]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("el-table-column", {
                      attrs: {
                        property: "precio_u",
                        label: "Precio U.",
                        width: "120"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(scope) {
                            return [
                              _c("b", [_vm._v("Bs :")]),
                              _vm._v(
                                " " +
                                  _vm._s(scope.row.precio_u.toFixed(2)) +
                                  "\n                            "
                              )
                            ]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("el-table-column", {
                      attrs: {
                        property: "stock",
                        label: "Stock",
                        width: "120"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(scope) {
                            return [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(scope.row.stock.toFixed()) +
                                  "\n                            "
                              )
                            ]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("el-table-column", {
                      attrs: {
                        property: "saldo",
                        label: "Saldo",
                        width: "120"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(scope) {
                            return [
                              _c("b", [_vm._v("Bs :")]),
                              _vm._v(
                                " " +
                                  _vm._s(scope.row.saldo.toFixed(2)) +
                                  "\n                            "
                              )
                            ]
                          }
                        }
                      ])
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-table",
              {
                staticStyle: { width: "100%" },
                attrs: { data: _vm.GET_LOTES, stripe: "" }
              },
              [
                _c("el-table-column", {
                  attrs: { type: "index", label: "N°", width: "60" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "codigo", label: "Código", width: "120" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "nombre", label: "Articulo", width: "600" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "stock", label: "Stock", width: "100" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(scope) {
                        return [
                          _vm._v(
                            "\n                            " +
                              _vm._s(scope.row.stock) +
                              "\n                        "
                          )
                        ]
                      }
                    }
                  ])
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "saldo", label: "Saldo", width: "100" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(scope) {
                        return [
                          _c("b", [_vm._v("Bs: ")]),
                          _vm._v(
                            _vm._s(scope.row.saldo) +
                              "\n                        "
                          )
                        ]
                      }
                    }
                  ])
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(scope) {
                        return [
                          _c("el-button", {
                            attrs: { icon: "el-icon-view", circle: "" },
                            on: {
                              click: function($event) {
                                return _vm.ViewDetails(scope.$index, scope.row)
                              }
                            }
                          })
                        ]
                      }
                    }
                  ])
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "d-flex justify-content-end align-items-center mt-3"
              },
              [
                _c("p", { staticClass: "d-flex flex-column text-left" }, [
                  _c(
                    "i",
                    { staticClass: "ion ion-android-arrow-up text-primary" },
                    [_vm._v("Saldo total:  ")]
                  ),
                  _vm._v(" "),
                  _c("i", { staticClass: "font-weight-light" }, [
                    _c("b", [_vm._v("Bs : ")]),
                    _vm._v(
                      "  " + _vm._s(_vm.Total()) + "\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("br")
                ]),
                _vm._v(" "),
                _c("br")
              ]
            )
          ],
          1
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
    return _c("p", { staticClass: "text-success text-xl" }, [
      _c("i", { staticClass: "ion ion-ios-refresh-empty" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/periodo/InventarioInicialView.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/periodo/InventarioInicialView.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InventarioInicialView_vue_vue_type_template_id_24a4080e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InventarioInicialView.vue?vue&type=template&id=24a4080e& */ "./resources/js/views/periodo/InventarioInicialView.vue?vue&type=template&id=24a4080e&");
/* harmony import */ var _InventarioInicialView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InventarioInicialView.vue?vue&type=script&lang=js& */ "./resources/js/views/periodo/InventarioInicialView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InventarioInicialView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InventarioInicialView_vue_vue_type_template_id_24a4080e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InventarioInicialView_vue_vue_type_template_id_24a4080e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/periodo/InventarioInicialView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/periodo/InventarioInicialView.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/periodo/InventarioInicialView.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InventarioInicialView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InventarioInicialView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/InventarioInicialView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InventarioInicialView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/periodo/InventarioInicialView.vue?vue&type=template&id=24a4080e&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/periodo/InventarioInicialView.vue?vue&type=template&id=24a4080e& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InventarioInicialView_vue_vue_type_template_id_24a4080e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InventarioInicialView.vue?vue&type=template&id=24a4080e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/InventarioInicialView.vue?vue&type=template&id=24a4080e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InventarioInicialView_vue_vue_type_template_id_24a4080e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InventarioInicialView_vue_vue_type_template_id_24a4080e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);