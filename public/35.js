(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ingreso/AddDetailsView.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ingreso/AddDetailsView.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
      },
      rules: {
        articulo: [{
          required: true,
          message: "Debe seleccionar un articulo",
          trigger: "change"
        }],
        cantidad: [{
          required: true,
          message: "Este campo es obligatorio",
          trigger: "blur"
        }],
        precio: [{
          required: true,
          message: "Este campo es obligatorio",
          trigger: "blur"
        }]
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("ingreso", ["data_form", "loading_form", "alert"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("ingreso", ["GET_ITEMS_DETALLE_INGRESO", "GET_TOTAL_DETALLE_INGRESOS", "GET_FILTER_ITEMS_DETAILS"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("articulo", ["GET_ITEMS_ARTICULO"])),
  methods: _objectSpread({
    OnclickAddDialog: function OnclickAddDialog(index, row) {
      _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].commit("ingreso/ADD_DETALLE_INGRESO", row);
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("ingreso", ["DELETE_DETALLE_INGRESO"]), {
    findItem: function findItem(id) {
      var items = _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters["articulo/GET_ITEMS_ARTICULO"];
      return items.find(function (item) {
        return item.id === id;
      });
    },
    // submitForm(form) {
    //   this.$refs[form].validate(async (valid) => {
    //     if (valid)
    //       await store.commit("ingreso/ADD_DETALLE_INGRESO", this.detalles_form);
    //     this.$refs[form].resetFields();
    //   });
    // },
    onRegister: function onRegister() {
      var _this = this;

      this.$confirm("\xBF Esta seguro de registrar el ingreso ?", {
        confirmButtonText: "Sí, registrar",
        cancelButtonText: "Cancelar",
        type: "warning"
      }).then(function () {
        _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("ingreso/addItem", {
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
        name: "ingreso"
      });
    },
    onChangePage: function onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
    goBack: function goBack() {
      this.$router.go(-1);
    }
  }),
  mounted: function mounted() {
    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("articulo/getItems");
    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("articulo/getLotes");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ingreso/AddDetailsView.vue?vue&type=template&id=e8457cba&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ingreso/AddDetailsView.vue?vue&type=template&id=e8457cba& ***!
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
                  attrs: { content: "Ingresos" },
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
                            value:
                              _vm.$store.state.ingreso.searchQueryAddDialog,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.$store.state.ingreso,
                                "searchQueryAddDialog",
                                $$v
                              )
                            },
                            expression:
                              "$store.state.ingreso.searchQueryAddDialog"
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
                      _vm._v("  \n                          "),
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
                          width: "100"
                        }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          property: "unidad",
                          label: "Medida",
                          width: "200"
                        }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _c(
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
              _c(
                "el-table",
                {
                  staticStyle: { width: "100%" },
                  attrs: { data: _vm.GET_ITEMS_DETALLE_INGRESO, size: "small" }
                },
                [
                  _c("el-table-column", {
                    attrs: { type: "index", width: "40", label: "N°" }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: {
                      label: "Articulo",
                      width: "410",
                      prop: "articulo"
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            _vm._v(
                              "\n                              " +
                                _vm._s(
                                  _vm.findItem(scope.row.articulo).nombre
                                ) +
                                "\n                          "
                            )
                          ]
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "Medida", width: "160", prop: "medida" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            _vm._v(
                              "\n                              " +
                                _vm._s(
                                  _vm.findItem(scope.row.articulo).unidad_medida
                                    .nombre
                                ) +
                                "\n                          "
                            )
                          ]
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { label: "P.U.", width: "80", prop: "precio_u" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            _vm._v(
                              "\n                              " +
                                _vm._s(scope.row.precio / scope.row.cantidad) +
                                "\n                          "
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
                      width: "150",
                      prop: "cantidad"
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            _c("el-input-number", {
                              staticStyle: { width: "120px" },
                              attrs: {
                                size: "mini",
                                precision: 2,
                                step: 1,
                                min: 0.1
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
                    attrs: { label: "Sub Total", width: "150", prop: "precio" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            _c("el-input-number", {
                              staticStyle: { width: "120px" },
                              attrs: {
                                size: "mini",
                                precision: 2,
                                step: 1,
                                min: 0
                              },
                              model: {
                                value: scope.row.precio,
                                callback: function($$v) {
                                  _vm.$set(scope.row, "precio", $$v)
                                },
                                expression: "scope.row.precio"
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
                                  return _vm.DELETE_DETALLE_INGRESO(
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
                  staticClass: "row justify-content-end mb-4  mr-1 ml-1  mt-4 "
                },
                [
                  _c("h5", [
                    _vm._v(
                      "\n                          Total: Bs\n                          "
                    ),
                    _c("strong", [
                      _vm._v(_vm._s(_vm.GET_TOTAL_DETALLE_INGRESOS))
                    ])
                  ])
                ]
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
                        disabled: _vm.data_form.detalle_ingreso.length == 0,
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
        _vm._v("Registro de ingresos | detalles")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/ingreso/AddDetailsView.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/ingreso/AddDetailsView.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddDetailsView_vue_vue_type_template_id_e8457cba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddDetailsView.vue?vue&type=template&id=e8457cba& */ "./resources/js/views/ingreso/AddDetailsView.vue?vue&type=template&id=e8457cba&");
/* harmony import */ var _AddDetailsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddDetailsView.vue?vue&type=script&lang=js& */ "./resources/js/views/ingreso/AddDetailsView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddDetailsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddDetailsView_vue_vue_type_template_id_e8457cba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddDetailsView_vue_vue_type_template_id_e8457cba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ingreso/AddDetailsView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ingreso/AddDetailsView.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/ingreso/AddDetailsView.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDetailsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddDetailsView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ingreso/AddDetailsView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDetailsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ingreso/AddDetailsView.vue?vue&type=template&id=e8457cba&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/ingreso/AddDetailsView.vue?vue&type=template&id=e8457cba& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDetailsView_vue_vue_type_template_id_e8457cba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddDetailsView.vue?vue&type=template&id=e8457cba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ingreso/AddDetailsView.vue?vue&type=template&id=e8457cba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDetailsView_vue_vue_type_template_id_e8457cba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDetailsView_vue_vue_type_template_id_e8457cba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);