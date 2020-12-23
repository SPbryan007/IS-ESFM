(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/salida/AddDetailsView.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/salida/AddDetailsView.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pageOfItems: [],
      sizePerPage: 5,
      perpage: 5,
      labels: {
        first: "<<",
        last: ">>",
        previous: "anterior",
        next: "siguiente"
      },
      dialogAddDetails: false,
      detalles_form: {
        articulo: null,
        cantidad: 1,
        precio: 0
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("salida", ["data_form", "loading_form", "alert"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("salida", ["GET_ITEMS_DETALLE_SALIDA", "GET_TOTAL_DETALLE_SALIDAS", "GET_FILTER_ITEMS_DETAILS", "CHECKED"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("articulo", ["GET_ITEMS_ARTICULO", "GET_LOTES"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("salida", ["DELETE_DETALLE_SALIDA"]), {
    findItem: function findItem(id) {
      var items = _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters["articulo/GET_ITEMS_ARTICULO"];
      return items.find(function (item) {
        return item.id === id;
      });
    },
    findSolicitante: function findSolicitante(id) {
      var items = _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters["solicitante/GET_ITEMS_SOLICITANTE"];
      return items.find(function (item) {
        return item.id === id;
      });
    },
    OnclickAddDialog: function OnclickAddDialog(index, row) {
      _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].commit("salida/ADD_DETALLE_SALIDA", row);
    },
    onRegister: function onRegister() {
      var _this = this;

      this.$confirm("\xBF Esta seguro de registrar la salida ?", {
        confirmButtonText: "Sí, registrar",
        cancelButtonText: "Cancelar",
        type: "warning"
      }).then(function () {
        _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("salida/addItem", {
          message: _this.$message,
          progress: _this.$Progress
        });
      })["catch"](function () {
        return null;
      });
    },
    cancelForm: function cancelForm(formName) {
      this.$refs[formName].resetFields();
      _routes__WEBPACK_IMPORTED_MODULE_2__["router"].push({
        name: "salida"
      });
    },
    onChangePage: function onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
    goBack: function goBack() {
      this.$router.go(-1);
    }
  }) // mounted() {
  //     store.dispatch("articulo/getItems");
  //     store.dispatch("articulo/getLotes");
  // },
  // created(){
  //
  // }

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/salida/AddDetailsView.vue?vue&type=template&id=0019cdbe&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/salida/AddDetailsView.vue?vue&type=template&id=0019cdbe& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    _c(
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
                    attrs: { type: "info", size: "", icon: "el-icon-plus" },
                    on: {
                      click: function($event) {
                        _vm.dialogAddDetails = true
                      }
                    }
                  },
                  [_vm._v("Agregar")]
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
            { staticClass: "card-body" },
            [
              _c(
                "el-dialog",
                {
                  attrs: {
                    title: "Agregar articulos",
                    visible: _vm.dialogAddDetails,
                    width: "60%"
                  },
                  on: {
                    "update:visible": function($event) {
                      _vm.dialogAddDetails = $event
                    }
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "row justify-content-center mt-4" },
                    [
                      _c(
                        "el-input",
                        {
                          staticStyle: { width: "660px" },
                          attrs: {
                            placeholder: "Filtrar por codigo, articulo",
                            clearable: ""
                          },
                          model: {
                            value: _vm.$store.state.salida.searchQueryAddDialog,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.$store.state.salida,
                                "searchQueryAddDialog",
                                $$v
                              )
                            },
                            expression:
                              "$store.state.salida.searchQueryAddDialog"
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "el-input__icon el-icon-search",
                            attrs: { slot: "prefix" },
                            slot: "prefix"
                          })
                        ]
                      ),
                      _vm._v("  \n                        "),
                      _c(
                        "router-link",
                        { attrs: { to: { name: "additem" } } },
                        [
                          _c("el-button", {
                            attrs: { type: "primary", icon: "el-icon-plus" }
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
                    { attrs: { data: _vm.pageOfItems } },
                    [
                      _c("el-table-column", {
                        attrs: {
                          property: "codigo",
                          label: "Codigo",
                          width: "90"
                        }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          property: "nombre",
                          label: "Articulo",
                          width: "370"
                        }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          property: "stock",
                          label: "Disponibles",
                          width: "150"
                        }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          property: "unidad",
                          label: "Medida",
                          width: "150"
                        }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _vm.CHECKED(scope.row.id)
                                  ? _c(
                                      "el-button",
                                      {
                                        attrs: {
                                          type: "success",
                                          size: "mini",
                                          icon: "el-icon-check"
                                        }
                                      },
                                      [_vm._v("Añadido")]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                !_vm.CHECKED(scope.row.id)
                                  ? _c(
                                      "el-button",
                                      {
                                        attrs: {
                                          type: "info",
                                          size: "mini",
                                          icon: "el-icon-plus"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.OnclickAddDialog(
                                              scope.$index,
                                              scope.row
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("Añadir")]
                                    )
                                  : _vm._e()
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
                    "span",
                    {
                      staticClass: "dialog-footer",
                      attrs: { slot: "footer" },
                      slot: "footer"
                    },
                    [
                      _c("jw-pagination", {
                        ref: "jw",
                        attrs: {
                          pageSize: _vm.perpage,
                          items: _vm.GET_FILTER_ITEMS_DETAILS,
                          labels: _vm.labels
                        },
                        on: { changePage: _vm.onChangePage }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "row invoice-info" }, [
                _c("div", { staticClass: "col-md-4 invoice-col" }, [
                  _c("dl", { staticClass: "row" }, [
                    _c("dt", { staticClass: "col-md-4" }, [
                      _vm._v("Solicitante:")
                    ]),
                    _vm._v(" "),
                    _c("dd", { staticClass: "col-md-8" }, [
                      _vm._v(
                        _vm._s(
                          _vm.findSolicitante(_vm.data_form.solicitante_id)
                            .funcionario.nombre +
                            " " +
                            _vm.findSolicitante(_vm.data_form.solicitante_id)
                              .funcionario.apellido
                        )
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-5 invoice-col" }, [
                  _c("dl", { staticClass: "row" }, [
                    _c("dt", { staticClass: "col-md-3" }, [
                      _vm._v("Finalidad:")
                    ]),
                    _vm._v(" "),
                    _c("dd", { staticClass: "col-md-9" }, [
                      _vm._v(_vm._s(_vm.data_form.finalidad))
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3" }, [
                  _c("dl", { staticClass: "row" }, [
                    _c("dt", { staticClass: "col-md-5" }, [
                      _vm._v("N° pedido:")
                    ]),
                    _vm._v(" "),
                    _c("dd", { staticClass: "col-md-7" }, [
                      _vm._v(_vm._s(_vm.data_form.nro_pedido))
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "el-table",
                {
                  staticStyle: { width: "100%" },
                  attrs: { data: _vm.GET_ITEMS_DETALLE_SALIDA }
                },
                [
                  _c("el-table-column", { attrs: { type: "index" } }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: {
                      label: "Código",
                      width: "120",
                      prop: "codigo",
                      sortable: ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            _vm._v(
                              "\n                            " +
                                _vm._s(
                                  _vm.findItem(scope.row.articulo).codigo
                                ) +
                                "\n                        "
                            )
                          ]
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: {
                      label: "Articulo",
                      width: "420",
                      prop: "articulo",
                      sortable: ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            _vm._v(
                              "\n                            " +
                                _vm._s(
                                  _vm.findItem(scope.row.articulo).nombre
                                ) +
                                "\n                        "
                            )
                          ]
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: {
                      label: "Medida",
                      width: "200",
                      prop: "medida",
                      sortable: ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            _vm._v(
                              "\n                            " +
                                _vm._s(
                                  _vm.findItem(scope.row.articulo).unidad_medida
                                    .nombre
                                ) +
                                "\n                        "
                            )
                          ]
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: {
                      label: "Cantidad",
                      width: "200",
                      prop: "cantidad",
                      sortable: ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            _c("el-input-number", {
                              attrs: {
                                size: "mini",
                                precision: 2,
                                step: 1,
                                min: 1,
                                max: scope.row.stock
                              },
                              model: {
                                value: scope.row.cantidad,
                                callback: function($$v) {
                                  _vm.$set(scope.row, "cantidad", $$v)
                                },
                                expression: "scope.row.cantidad"
                              }
                            })
                          ]
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            _c("el-button", {
                              attrs: {
                                size: "mini",
                                type: "danger",
                                icon: "el-icon-close"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.DELETE_DETALLE_SALIDA(
                                    scope.row.articulo
                                  )
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
                  staticClass: "row justify-content-end mb-4  mr-1 ml-1  mt-4"
                },
                [
                  _c(
                    "el-button",
                    {
                      attrs: {
                        disabled: _vm.data_form.detalle_salida.length == 0,
                        type: "primary",
                        size: "",
                        icon: "el-icon-plus"
                      },
                      on: {
                        click: function($event) {
                          return _vm.onRegister()
                        }
                      }
                    },
                    [_vm._v("Registar")]
                  )
                ],
                1
              )
            ],
            1
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
        _vm._v("Registro de salida | detalles")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/salida/AddDetailsView.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/salida/AddDetailsView.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddDetailsView_vue_vue_type_template_id_0019cdbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddDetailsView.vue?vue&type=template&id=0019cdbe& */ "./resources/js/views/salida/AddDetailsView.vue?vue&type=template&id=0019cdbe&");
/* harmony import */ var _AddDetailsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddDetailsView.vue?vue&type=script&lang=js& */ "./resources/js/views/salida/AddDetailsView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddDetailsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddDetailsView_vue_vue_type_template_id_0019cdbe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddDetailsView_vue_vue_type_template_id_0019cdbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/salida/AddDetailsView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/salida/AddDetailsView.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/salida/AddDetailsView.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDetailsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddDetailsView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/salida/AddDetailsView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDetailsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/salida/AddDetailsView.vue?vue&type=template&id=0019cdbe&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/salida/AddDetailsView.vue?vue&type=template&id=0019cdbe& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDetailsView_vue_vue_type_template_id_0019cdbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddDetailsView.vue?vue&type=template&id=0019cdbe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/salida/AddDetailsView.vue?vue&type=template&id=0019cdbe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDetailsView_vue_vue_type_template_id_0019cdbe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDetailsView_vue_vue_type_template_id_0019cdbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);