(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/salida/AddView.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/salida/AddView.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
      pickerOptions: {
        disabledDate: function disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      rules: {
        solicitante_id: [{
          required: true,
          message: "Este campo es obligatorio",
          trigger: "change"
        }],
        nro_pedido: [{
          required: true,
          message: "Este campo es obligatorio",
          trigger: "blur"
        }],
        finalidad: [{
          required: true,
          message: "Este campo es obligatorio",
          trigger: "blur"
        }],
        autorizador_id: [{
          required: true,
          message: "Este campo es obligatorio",
          trigger: "change"
        }],
        verificador_id: [{
          required: true,
          message: "Este campo es obligatorio",
          trigger: "change"
        }],
        fecha_pedido: [{
          type: 'date',
          required: true,
          message: 'Este campo es obligatorio.',
          trigger: 'change'
        }]
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("salida", ["data_form", "loading_form", "alert"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("proveedor", ["GET_ITEMS_PROVEEDOR"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("solicitante", ["GET_ITEMS_SOLICITANTE"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("funcionario", ["GET_ITEMS_FUNCIONARIO"])),
  methods: {
    submitForm: function submitForm(form) {
      this.$refs[form].validate(function (valid) {
        if (valid) {
          _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.articulo.withTrashed = false;
          _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("articulo/getItems");
          _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("articulo/getLotes");
          _routes__WEBPACK_IMPORTED_MODULE_2__["router"].push({
            name: "addsalidadetails"
          });
        }
      });
    },
    cancelForm: function cancelForm(formName) {
      this.$refs[formName].resetFields();
      _routes__WEBPACK_IMPORTED_MODULE_2__["router"].push({
        name: "salida"
      });
    },
    goBack: function goBack() {
      this.$router.go(-1);
    }
  },
  mounted: function mounted() {
    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('login/getUser');
    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.proveedor.withTrashed = false;
    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.funcionario.withTrashed = false;
    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.solicitante.withTrashed = false;
    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("proveedor/getItems");
    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("funcionario/getItems");
    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("solicitante/getItems");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/salida/AddView.vue?vue&type=template&id=2faef0fe&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/salida/AddView.vue?vue&type=template&id=2faef0fe& ***!
  \************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "pull-right" })
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-md-8 col-md-offset-4" }, [
              _c("div", { staticClass: "row" }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row" },
                [
                  _c(
                    "el-form",
                    {
                      ref: "SalidaAddForm",
                      staticClass: "labeles",
                      attrs: {
                        model: _vm.data_form,
                        rules: _vm.rules,
                        "label-width": "170px"
                      }
                    },
                    [
                      _c("div", [
                        _c(
                          "div",
                          { staticClass: "row" },
                          [
                            _c(
                              "el-form-item",
                              {
                                attrs: {
                                  label: "Solicitante :",
                                  prop: "solicitante_id"
                                }
                              },
                              [
                                _c(
                                  "el-select",
                                  {
                                    staticStyle: { width: "340px" },
                                    attrs: {
                                      filterable: "",
                                      placeholder: "Seleccione el solicitante",
                                      "loading-text": "buscando..",
                                      "no-match-text":
                                        "No se encontraron registros"
                                    },
                                    model: {
                                      value: _vm.data_form.solicitante_id,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.data_form,
                                          "solicitante_id",
                                          $$v
                                        )
                                      },
                                      expression: "data_form.solicitante_id"
                                    }
                                  },
                                  _vm._l(_vm.GET_ITEMS_SOLICITANTE, function(
                                    item,
                                    index
                                  ) {
                                    return _c("el-option", {
                                      key: index,
                                      attrs: {
                                        label:
                                          item.funcionario.nombre +
                                          " " +
                                          item.funcionario.apellido,
                                        value: item.id
                                      }
                                    })
                                  }),
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "router-link",
                                  { attrs: { to: { name: "addsolicitante" } } },
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
                            ),
                            _vm._v(" "),
                            _c(
                              "el-form-item",
                              {
                                attrs: {
                                  label: "Nro de pedido :",
                                  prop: "nro_pedido"
                                }
                              },
                              [
                                _c("el-input", {
                                  staticStyle: { width: "150px" },
                                  model: {
                                    value: _vm.data_form.nro_pedido,
                                    callback: function($$v) {
                                      _vm.$set(_vm.data_form, "nro_pedido", $$v)
                                    },
                                    expression: "data_form.nro_pedido"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "el-form-item",
                              {
                                attrs: {
                                  label: "Fecha de pedido :",
                                  prop: "fecha_pedido"
                                }
                              },
                              [
                                _c("el-date-picker", {
                                  attrs: {
                                    type: "date",
                                    "picker-options": _vm.pickerOptions
                                  },
                                  model: {
                                    value: _vm.data_form.fecha_pedido,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.data_form,
                                        "fecha_pedido",
                                        $$v
                                      )
                                    },
                                    expression: "data_form.fecha_pedido"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "el-form-item",
                              {
                                attrs: {
                                  label: "Autorizado por :",
                                  prop: "autorizador_id"
                                }
                              },
                              [
                                _c(
                                  "el-select",
                                  {
                                    staticStyle: { width: "340px" },
                                    attrs: {
                                      filterable: "",
                                      placeholder: "Seleccione el autorizador",
                                      "loading-text": "buscando..",
                                      "no-match-text":
                                        "No se encontraron registros"
                                    },
                                    model: {
                                      value: _vm.data_form.autorizador_id,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.data_form,
                                          "autorizador_id",
                                          $$v
                                        )
                                      },
                                      expression: "data_form.autorizador_id"
                                    }
                                  },
                                  _vm._l(_vm.GET_ITEMS_FUNCIONARIO, function(
                                    item,
                                    index
                                  ) {
                                    return _c("el-option", {
                                      key: index,
                                      attrs: {
                                        label:
                                          item.nombre + " " + item.apellido,
                                        value: item.id
                                      }
                                    })
                                  }),
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "router-link",
                                  { attrs: { to: { name: "addfuncionario" } } },
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
                            ),
                            _vm._v(" "),
                            _c(
                              "el-form-item",
                              {
                                attrs: {
                                  label: "Verificado por :",
                                  prop: "verificador_id"
                                }
                              },
                              [
                                _c(
                                  "el-select",
                                  {
                                    staticStyle: { width: "340px" },
                                    attrs: {
                                      filterable: "",
                                      placeholder: "Seleccione el verificador",
                                      "loading-text": "buscando..",
                                      "no-match-text":
                                        "No se encontraron registros"
                                    },
                                    model: {
                                      value: _vm.data_form.verificador_id,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.data_form,
                                          "verificador_id",
                                          $$v
                                        )
                                      },
                                      expression: "data_form.verificador_id"
                                    }
                                  },
                                  _vm._l(_vm.GET_ITEMS_FUNCIONARIO, function(
                                    item,
                                    index
                                  ) {
                                    return _c("el-option", {
                                      key: index,
                                      attrs: {
                                        label:
                                          item.nombre + " " + item.apellido,
                                        value: item.id
                                      }
                                    })
                                  }),
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "router-link",
                                  { attrs: { to: { name: "addfuncionario" } } },
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
                            ),
                            _vm._v(" "),
                            _c(
                              "el-form-item",
                              {
                                attrs: {
                                  label: "Finalidad :",
                                  prop: "finalidad"
                                }
                              },
                              [
                                _c("el-input", {
                                  staticStyle: { width: "400px" },
                                  attrs: { type: "textarea" },
                                  model: {
                                    value: _vm.data_form.finalidad,
                                    callback: function($$v) {
                                      _vm.$set(_vm.data_form, "finalidad", $$v)
                                    },
                                    expression: "data_form.finalidad"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "el-form-item",
                              {
                                attrs: {
                                  label: "Observaciones :",
                                  prop: "observacion"
                                }
                              },
                              [
                                _c("el-input", {
                                  staticStyle: { width: "400px" },
                                  attrs: { type: "textarea" },
                                  model: {
                                    value: _vm.data_form.observacion,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.data_form,
                                        "observacion",
                                        $$v
                                      )
                                    },
                                    expression: "data_form.observacion"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        [
                          _c(
                            "el-button",
                            {
                              attrs: { type: "primary" },
                              on: {
                                click: function($event) {
                                  return _vm.submitForm("SalidaAddForm")
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                    Siguiente\n                                    "
                              ),
                              _c("i", { staticClass: "fas fa-arrow-right" })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "el-button",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.cancelForm("SalidaAddForm")
                                }
                              }
                            },
                            [_vm._v("Cancelar")]
                          )
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
          ])
        ])
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
      _c("h3", { staticClass: "card-title" }, [_vm._v("Registro de salida")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/salida/AddView.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/salida/AddView.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddView_vue_vue_type_template_id_2faef0fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddView.vue?vue&type=template&id=2faef0fe& */ "./resources/js/views/salida/AddView.vue?vue&type=template&id=2faef0fe&");
/* harmony import */ var _AddView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddView.vue?vue&type=script&lang=js& */ "./resources/js/views/salida/AddView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddView_vue_vue_type_template_id_2faef0fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddView_vue_vue_type_template_id_2faef0fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/salida/AddView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/salida/AddView.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/salida/AddView.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/salida/AddView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/salida/AddView.vue?vue&type=template&id=2faef0fe&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/salida/AddView.vue?vue&type=template&id=2faef0fe& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddView_vue_vue_type_template_id_2faef0fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddView.vue?vue&type=template&id=2faef0fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/salida/AddView.vue?vue&type=template&id=2faef0fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddView_vue_vue_type_template_id_2faef0fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddView_vue_vue_type_template_id_2faef0fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);