(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/InitialDetails.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/periodo/InitialDetails.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuejs_datepicker_src_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker/src/locale */ "./node_modules/vuejs-datepicker/src/locale/index.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/index */ "./resources/js/store/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes */ "./resources/js/routes.js");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      proveedores: [{
        idProveedor: 1,
        nombre: "POLLOS ROSITA"
      }],
      lote_form: {
        cantidad: 0,
        precio_unitario: 0,
        tipo_ingreso: "COMPRA",
        descripcion: "SALDO INICIAL",
        donacion: {
          institucion: "",
          responsable: "",
          telefono: ""
        },
        compra: {
          nro_compra: "",
          nro_solicitud: "",
          nro_factura: "",
          nro_autorizacion: "",
          proveedor: null
        }
      }
    };
  },
  computed: _objectSpread({
    saldo: function saldo() {
      return this.lote_form.cantidad * this.lote_form.precio_unitario;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("proveedor", ["GET_ITEMS_PROVEEDORES"])),
  methods: {},
  created: function created() {
    this.$store.dispatch("proveedor/GET_DATA_FROM_SERVER");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/InitialDetails.vue?vue&type=template&id=47db3c1e&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/periodo/InitialDetails.vue?vue&type=template&id=47db3c1e& ***!
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
  return _c("div", {}, [
    _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-8" }, [
              _c(
                "div",
                { staticClass: "row" },
                [
                  _c(
                    "el-form",
                    {
                      ref: "lote_form",
                      staticClass: "labeles",
                      attrs: { model: _vm.lote_form, "label-width": "170px" }
                    },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "Tipo de ingreso :" } },
                        [
                          _c(
                            "el-radio",
                            {
                              attrs: { label: "COMPRA", border: "" },
                              model: {
                                value: _vm.lote_form.tipo_ingreso,
                                callback: function($$v) {
                                  _vm.$set(_vm.lote_form, "tipo_ingreso", $$v)
                                },
                                expression: "lote_form.tipo_ingreso"
                              }
                            },
                            [_vm._v("COMPRA")]
                          ),
                          _vm._v(" "),
                          _c(
                            "el-radio",
                            {
                              attrs: { label: "DONACION", border: "" },
                              model: {
                                value: _vm.lote_form.tipo_ingreso,
                                callback: function($$v) {
                                  _vm.$set(_vm.lote_form, "tipo_ingreso", $$v)
                                },
                                expression: "lote_form.tipo_ingreso"
                              }
                            },
                            [_vm._v("DONACION")]
                          ),
                          _vm._v(" "),
                          _c(
                            "el-radio",
                            {
                              attrs: { label: "DEVOLUCION", border: "" },
                              model: {
                                value: _vm.lote_form.tipo_ingreso,
                                callback: function($$v) {
                                  _vm.$set(_vm.lote_form, "tipo_ingreso", $$v)
                                },
                                expression: "lote_form.tipo_ingreso"
                              }
                            },
                            [_vm._v("DEVOLUCION")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row" },
                [
                  _c(
                    "el-form",
                    {
                      ref: "lote_form",
                      staticClass: "labeles",
                      attrs: { model: _vm.lote_form, "label-width": "170px" }
                    },
                    [
                      _vm.lote_form.tipo_ingreso == "COMPRA"
                        ? _c("div", { attrs: { id: "compra" } }, [
                            _c(
                              "div",
                              { staticClass: "row" },
                              [
                                _c(
                                  "el-form-item",
                                  { attrs: { label: "Nro de Compra" } },
                                  [
                                    _c("el-input", {
                                      staticStyle: { width: "170px" },
                                      model: {
                                        value: _vm.lote_form.compra.nro_compra,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.lote_form.compra,
                                            "nro_compra",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "lote_form.compra.nro_compra"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "el-form-item",
                                  { attrs: { label: "Nro de Solicitud" } },
                                  [
                                    _c("el-input", {
                                      staticStyle: { width: "170px" },
                                      model: {
                                        value:
                                          _vm.lote_form.compra.nro_solicitud,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.lote_form.compra,
                                            "nro_solicitud",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "lote_form.compra.nro_solicitud"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "row" },
                              [
                                _c(
                                  "el-form-item",
                                  { attrs: { label: "Nro de Factura" } },
                                  [
                                    _c("el-input", {
                                      staticStyle: { width: "170px" },
                                      model: {
                                        value: _vm.lote_form.compra.nro_factura,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.lote_form.compra,
                                            "nro_factura",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "lote_form.compra.nro_factura"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "el-form-item",
                                  { attrs: { label: "Nro authorizacion" } },
                                  [
                                    _c("el-input", {
                                      staticStyle: { width: "170px" },
                                      model: {
                                        value:
                                          _vm.lote_form.compra.nro_autorizacion,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.lote_form.compra,
                                            "nro_autorizacion",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "lote_form.compra.nro_autorizacion"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "el-form-item",
                                  { attrs: { label: "Proveedor" } },
                                  [
                                    _c(
                                      "el-select",
                                      {
                                        staticStyle: { width: "340px" },
                                        attrs: {
                                          filterable: "",
                                          placeholder:
                                            "Seleccione el proveedor",
                                          "loading-text": "buscando..",
                                          "no-match-text":
                                            "No se encontraron registros"
                                        },
                                        model: {
                                          value: _vm.lote_form.compra.proveedor,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.lote_form.compra,
                                              "proveedor",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "lote_form.compra.proveedor"
                                        }
                                      },
                                      _vm._l(
                                        _vm.GET_ITEMS_PROVEEDORES,
                                        function(item, index) {
                                          return _c("el-option", {
                                            key: index,
                                            attrs: {
                                              label: item.nombre,
                                              value: item.idProveedor
                                            }
                                          })
                                        }
                                      ),
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "router-link",
                                      {
                                        attrs: { to: { name: "addproveedor" } }
                                      },
                                      [
                                        _c("el-button", {
                                          attrs: {
                                            type: "primary",
                                            icon: "el-icon-plus"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.lote_form.tipo_ingreso === "DONACION"
                        ? _c(
                            "div",
                            { attrs: { id: "donacion" } },
                            [
                              _c(
                                "el-form-item",
                                { attrs: { label: "Proveedor" } },
                                [
                                  _c(
                                    "el-select",
                                    {
                                      staticStyle: { width: "340px" },
                                      attrs: {
                                        filterable: "",
                                        placeholder: "Seleccione el proveedor",
                                        "loading-text": "buscando..",
                                        "no-match-text":
                                          "No se encontraron registros"
                                      },
                                      model: {
                                        value: _vm.lote_form.compra.proveedor,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.lote_form.compra,
                                            "proveedor",
                                            $$v
                                          )
                                        },
                                        expression: "lote_form.compra.proveedor"
                                      }
                                    },
                                    _vm._l(_vm.GET_ITEMS_PROVEEDORES, function(
                                      item,
                                      index
                                    ) {
                                      return _c("el-option", {
                                        key: index,
                                        attrs: {
                                          label: item.nombre,
                                          value: item.idProveedor
                                        }
                                      })
                                    }),
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "router-link",
                                    { attrs: { to: { name: "addproveedor" } } },
                                    [
                                      _c("el-button", {
                                        attrs: {
                                          type: "primary",
                                          icon: "el-icon-plus"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { attrs: { id: "devolucion" } }),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        [
                          _c(
                            "el-button",
                            {
                              attrs: { type: "primary" },
                              on: { click: _vm.onSubmit }
                            },
                            [_vm._v("Agregar lote")]
                          ),
                          _vm._v(" "),
                          _c("el-button", [_vm._v("Cancelar")])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "col-md-4 pl-5 border border-bottom-0 border-bottom-0 border-right-0 border-top-0"
              },
              [
                _c(
                  "div",
                  [
                    _c(
                      "el-form",
                      {
                        ref: "lote_form",
                        staticClass: "labeles",
                        attrs: {
                          rules: _vm.rules_lote_form,
                          model: _vm.lote_form,
                          "label-width": "120px"
                        }
                      },
                      [
                        _c(
                          "el-form-item",
                          { attrs: { label: "Cantidad en Kg." } },
                          [
                            _c("el-input-number", {
                              attrs: {
                                "controls-position": "right",
                                precision: 2,
                                min: 1,
                                max: 10
                              },
                              model: {
                                value: _vm.lote_form.cantidad,
                                callback: function($$v) {
                                  _vm.$set(_vm.lote_form, "cantidad", $$v)
                                },
                                expression: "lote_form.cantidad"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "el-form-item",
                          { attrs: { label: "Precio unitario" } },
                          [
                            _c("el-input-number", {
                              attrs: {
                                "controls-position": "right",
                                precision: 2,
                                step: 0.1,
                                max: 10,
                                disabled:
                                  _vm.lote_form.tipo_ingreso == "DONACION"
                              },
                              model: {
                                value: _vm.lote_form.precio_unitario,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.lote_form,
                                    "precio_unitario",
                                    $$v
                                  )
                                },
                                expression: "lote_form.precio_unitario"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "el-form-item",
                          { attrs: { label: "Saldo" } },
                          [
                            _c("el-input", {
                              staticStyle: { width: "200px" },
                              attrs: {
                                value: "Bs. " + _vm.saldo,
                                placeholder: "Please input",
                                disabled: true
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("h3", { staticClass: "card-title" }, [
        _vm._v("PAPEL MEMEMBRETADO - NUEVO LOTE")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/periodo/InitialDetails.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/periodo/InitialDetails.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InitialDetails_vue_vue_type_template_id_47db3c1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InitialDetails.vue?vue&type=template&id=47db3c1e& */ "./resources/js/views/periodo/InitialDetails.vue?vue&type=template&id=47db3c1e&");
/* harmony import */ var _InitialDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InitialDetails.vue?vue&type=script&lang=js& */ "./resources/js/views/periodo/InitialDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InitialDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InitialDetails_vue_vue_type_template_id_47db3c1e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InitialDetails_vue_vue_type_template_id_47db3c1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/periodo/InitialDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/periodo/InitialDetails.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/periodo/InitialDetails.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InitialDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InitialDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/InitialDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InitialDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/periodo/InitialDetails.vue?vue&type=template&id=47db3c1e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/periodo/InitialDetails.vue?vue&type=template&id=47db3c1e& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InitialDetails_vue_vue_type_template_id_47db3c1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InitialDetails.vue?vue&type=template&id=47db3c1e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/InitialDetails.vue?vue&type=template&id=47db3c1e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InitialDetails_vue_vue_type_template_id_47db3c1e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InitialDetails_vue_vue_type_template_id_47db3c1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);