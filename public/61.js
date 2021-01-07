(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/AperturaInventarioInicialView.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/periodo/AperturaInventarioInicialView.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/index */ "./resources/js/store/index.js");
/* harmony import */ var _TableComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableComponent */ "./resources/js/views/periodo/TableComponent.vue");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'table-apertura': _TableComponent__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      formLabelWidth: '120px',
      dialogFormVisible: false,
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
        codigo: null,
        marca: null,
        unidad_medida: null,
        articulo: null,
        articulo_nombre: null,
        cantidad: 1,
        total: 1
      },
      rules: {
        unidad_medida: [{
          required: true,
          message: "Debe seleccionar una unidad de medida",
          trigger: "change"
        }],
        marca: [{
          required: false,
          trigger: "blur"
        }, {
          max: 155,
          message: "Debe tener menos de 155 caracteres",
          trigger: "blur"
        }]
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("periodo", ["data_form", "loading_form", "alert"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("articulo", ["GET_ITEMS_ARTICULO"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("periodo", ["GET_FILTER_ITEMS_DETALLE_APERTURA", "GET_TOTAL_DETALLE_APERTURA"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("unidad_medida", ["GET_ITEMS_UNIDAD_MEDIDA"])),
  methods: _objectSpread({
    OnClickAddForm: function OnClickAddForm(form) {
      var _this = this;

      this.$refs[form].validate(function (valid) {
        if (valid) {
          _this.dialogFormVisible = false;
          _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].commit("periodo/ADD_DETALLE_APERTURA", _this.detalles_form);

          _this.$refs[form].resetFields();
        }
      });
    },
    OnClickCancelForm: function OnClickCancelForm(form) {
      this.$refs[form].resetFields();
      this.dialogFormVisible = false;
    },
    OnclickAddDialog: function OnclickAddDialog(row) {
      this.detalles_form.articulo = row.id;
      this.detalles_form.articulo_nombre = row.nombre;
      this.detalles_form.codigo = row.codigo;
      this.dialogFormVisible = true;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("periodo", ["DELETE_DETALLE_APERTURA"]), {
    findItem: function findItem(id) {
      var items = _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters["articulo/GET_ITEMS_ARTICULO"];
      return items.find(function (item) {
        return item.id === id;
      });
    },
    findMedida: function findMedida(id) {
      var items = _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters["unidad_medida/GET_ITEMS_UNIDAD_MEDIDA"];
      return items.find(function (item) {
        return item.id === id;
      });
    },
    onRegister: function onRegister() {
      this.$confirm("\xBF Esta seguro de registrar una nueva apertura de inventario ?", {
        confirmButtonText: "Sí, registrar",
        cancelButtonText: "Cancelar",
        type: "warning"
      }).then(function () {// store.dispatch("periodo/addItem", {
        //     message: this.$message,
        //     progress: this.$Progress,
        // });
      })["catch"](function () {
        return null;
      });
    },
    cancelForm: function cancelForm(formName) {
      this.$refs[formName].resetFields();
      _routes__WEBPACK_IMPORTED_MODULE_3__["router"].push({
        name: "periodo"
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
    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.articulo.withTrashed = false;
    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.unidad_medida.withTrashed = false;
    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("articulo/getItems");
    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("articulo/getLotes");
    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("unidad_medida/getItems");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/TableComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/periodo/TableComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/index */ "./resources/js/store/index.js");
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
      }
    };
  },
  computed: _objectSpread({
    PerPage: function PerPage() {
      return this.perpage ? parseInt(this.perpage) : 25;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("periodo", ["data_form", "loading_form", "alert"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("periodo", ["GET_FILTER_ITEMS_DETALLE_APERTURA"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("periodo", ["DELETE_DETALLE_APERTURA"]), {
    refresh: function refresh() {
      var self = this.$refs;
      setTimeout(function () {
        self.jw.setPage(1);
      }, 0);
    },
    findItem: function findItem(id) {
      var items = _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters["articulo/GET_ITEMS_ARTICULO"];
      return items.find(function (item) {
        return item.id === id;
      });
    },
    findMedida: function findMedida(id) {
      var items = _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters["unidad_medida/GET_ITEMS_UNIDAD_MEDIDA"];
      return items.find(function (item) {
        return item.id === id;
      });
    },
    onChangePage: function onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    }
  }),
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/AperturaInventarioInicialView.vue?vue&type=template&id=8ee50466&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/periodo/AperturaInventarioInicialView.vue?vue&type=template&id=8ee50466& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
                  attrs: { content: "Apertura de nuevo inventario" },
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
                        _vm.data_form.detalle_apertura.length == 0 ||
                        !_vm.data_form.nombre ||
                        !_vm.data_form.fecha_inicio,
                      type: "primary",
                      size: "",
                      icon: "el-icon-clock"
                    },
                    on: {
                      click: function($event) {
                        return _vm.onRegister()
                      }
                    }
                  },
                  [_vm._v("Iniciar")]
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c("table-apertura"),
        _vm._v(" "),
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
              { staticClass: "row justify-content-center" },
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
                      value: _vm.$store.state.periodo.searchQueryAddDialog,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.$store.state.periodo,
                          "searchQueryAddDialog",
                          $$v
                        )
                      },
                      expression: "$store.state.periodo.searchQueryAddDialog"
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
                _vm._v("  \n                "),
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
              {
                attrs: {
                  data: _vm.pageOfItems,
                  "default-sort": { prop: "codigo", order: "ascending" }
                }
              },
              [
                _c(
                  "el-dialog",
                  {
                    attrs: {
                      title: _vm.detalles_form.articulo_nombre,
                      visible: _vm.dialogFormVisible,
                      "append-to-body": ""
                    },
                    on: {
                      "update:visible": function($event) {
                        _vm.dialogFormVisible = $event
                      }
                    }
                  },
                  [
                    _c(
                      "el-form",
                      {
                        ref: "AddDetailsForm",
                        attrs: {
                          model: _vm.detalles_form,
                          "label-width": "140px",
                          rules: _vm.rules
                        }
                      },
                      [
                        _c(
                          "el-form-item",
                          {
                            attrs: {
                              label: "Unidad de medida:",
                              prop: "unidad_medida"
                            }
                          },
                          [
                            _c(
                              "el-select",
                              {
                                staticStyle: { width: "340px" },
                                attrs: {
                                  filterable: "",
                                  placeholder: "Seleccione la unidad de medida",
                                  "loading-text": "buscando..",
                                  "no-match-text": "No se encontraron registros"
                                },
                                model: {
                                  value: _vm.detalles_form.unidad_medida,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.detalles_form,
                                      "unidad_medida",
                                      $$v
                                    )
                                  },
                                  expression: "detalles_form.unidad_medida"
                                }
                              },
                              _vm._l(_vm.GET_ITEMS_UNIDAD_MEDIDA, function(
                                item,
                                index
                              ) {
                                return _c("el-option", {
                                  key: index,
                                  attrs: {
                                    label: item.sigla + " | " + item.nombre,
                                    value: item.id
                                  }
                                })
                              }),
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              { attrs: { to: { name: "addunidad_medida" } } },
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
                          { attrs: { label: "Marca:", prop: "marca" } },
                          [
                            _c("el-input", {
                              staticStyle: { width: "250px" },
                              model: {
                                value: _vm.detalles_form.marca,
                                callback: function($$v) {
                                  _vm.$set(_vm.detalles_form, "marca", $$v)
                                },
                                expression: "detalles_form.marca"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "el-form-item",
                          { attrs: { label: "Cantidad:" } },
                          [
                            _c("el-input-number", {
                              attrs: { precision: 2, step: 1, min: 0.1 },
                              model: {
                                value: _vm.detalles_form.cantidad,
                                callback: function($$v) {
                                  _vm.$set(_vm.detalles_form, "cantidad", $$v)
                                },
                                expression: "detalles_form.cantidad"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "el-form-item",
                          { attrs: { label: "Sub Total:" } },
                          [
                            _c("el-input-number", {
                              attrs: { precision: 2, step: 1, min: 1 },
                              model: {
                                value: _vm.detalles_form.total,
                                callback: function($$v) {
                                  _vm.$set(_vm.detalles_form, "total", $$v)
                                },
                                expression: "detalles_form.total"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("el-form-item", { attrs: { label: "Precio U:" } }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(
                                isNaN(
                                  _vm.detalles_form.total /
                                    _vm.detalles_form.cantidad
                                )
                                  ? 0
                                  : (
                                      _vm.detalles_form.total /
                                      _vm.detalles_form.cantidad
                                    ).toFixed(2)
                              ) +
                              " Bs.\n                        "
                          )
                        ])
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
                        _c(
                          "el-button",
                          {
                            on: {
                              click: function($event) {
                                return _vm.OnClickCancelForm("AddDetailsForm")
                              }
                            }
                          },
                          [_vm._v("Cancel")]
                        ),
                        _vm._v(" "),
                        _c(
                          "el-button",
                          {
                            attrs: { type: "primary" },
                            on: {
                              click: function($event) {
                                return _vm.OnClickAddForm("AddDetailsForm")
                              }
                            }
                          },
                          [_vm._v("Agregar")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { type: "index", width: "40", label: "N°" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: {
                    property: "codigo",
                    label: "Codigo",
                    width: "120",
                    sortable: ""
                  }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: {
                    property: "nombre",
                    label: "Articulo",
                    width: "600",
                    sortable: ""
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
                                  return _vm.OnclickAddDialog(scope.row)
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
              "div",
              { staticClass: "row justify-content-center mt-4" },
              [
                _c("jw-pagination", {
                  ref: "jw",
                  attrs: {
                    pageSize: _vm.perpage,
                    items: _vm.GET_ITEMS_ARTICULO,
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
          "div",
          { staticClass: "row justify-content-end mb-4  mr-1 ml-1  mt-4 " },
          [
            _c("h5", [
              _vm._v("\n                Total: Bs\n                "),
              _c("strong", [_vm._v(_vm._s(_vm.GET_TOTAL_DETALLE_APERTURA))])
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/TableComponent.vue?vue&type=template&id=2caac60f&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/periodo/TableComponent.vue?vue&type=template&id=2caac60f& ***!
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
  return _c("div", [
    _c(
      "div",
      {
        staticClass: "row justify-content-between ml-1",
        staticStyle: { "margin-bottom": "-20px" }
      },
      [
        _c(
          "div",
          { staticClass: "pull-left" },
          [
            _c(
              "el-form",
              { staticClass: "demo-form-inline", attrs: { inline: true } },
              [
                _c(
                  "el-form-item",
                  { attrs: { label: "Mostrar:" } },
                  [
                    _c(
                      "el-select",
                      {
                        staticStyle: { width: "70px" },
                        on: {
                          change: function($event) {
                            return _vm.refresh()
                          }
                        },
                        model: {
                          value: _vm.perpage,
                          callback: function($$v) {
                            _vm.perpage = $$v
                          },
                          expression: "perpage"
                        }
                      },
                      _vm._l(
                        [
                          { value: 5, label: "5" },
                          { value: 10, label: "10" },
                          { value: 25, label: "25" },
                          { value: 50, label: "50" },
                          { value: 100, label: "100" }
                        ],
                        function(item) {
                          return _c("el-option", {
                            key: item.value,
                            attrs: { label: item.label, value: item.value }
                          })
                        }
                      ),
                      1
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
          { staticClass: "pull-right" },
          [
            _c(
              "el-form",
              { staticClass: "demo-form-inline", attrs: { inline: true } },
              [
                _c(
                  "el-form-item",
                  { attrs: { label: "Buscar por:" } },
                  [
                    _c(
                      "el-input",
                      {
                        attrs: {
                          placeholder: "Código, Articulo",
                          clearable: ""
                        },
                        model: {
                          value:
                            _vm.$store.state.periodo.searchQueryDetalleApertura,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$store.state.periodo,
                              "searchQueryDetalleApertura",
                              $$v
                            )
                          },
                          expression:
                            "$store.state.periodo.searchQueryDetalleApertura"
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "el-input__icon el-icon-search",
                          attrs: { slot: "prefix" },
                          slot: "prefix"
                        })
                      ]
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
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "card" }, [
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c(
            "el-table",
            {
              attrs: {
                data: _vm.pageOfItems,
                "default-sort": { prop: "codigo", order: "ascending" }
              }
            },
            [
              _c("el-table-column", {
                attrs: {
                  label: "Código",
                  width: "100",
                  prop: "codigo",
                  sortable: ""
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.findItem(scope.row.articulo).codigo) +
                            "\n                    "
                        )
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Articulo", width: "400", prop: "articulo" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.findItem(scope.row.articulo).nombre) +
                            "\n                    "
                        )
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Marca", width: "120", prop: "marca" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Medida", width: "100", prop: "unidad_medida" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _vm._v(
                          "\n                        " +
                            _vm._s(
                              _vm.findMedida(scope.row.unidad_medida).nombre
                            ) +
                            "\n                    "
                        )
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "P.U.", width: "60", prop: "precio" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c("span", { staticClass: "text-primary" }, [
                          _vm._v(
                            " " +
                              _vm._s(
                                (scope.row.total / scope.row.cantidad).toFixed(
                                  2
                                )
                              )
                          )
                        ])
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Cantidad", width: "100", prop: "cantidad" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c("span", { staticClass: "text-primary" }, [
                          _vm._v("  " + _vm._s(scope.row.cantidad.toFixed(2)))
                        ])
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Sub Total", width: "120", prop: "total" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c("span", { staticClass: "text-primary" }, [
                          _vm._v(" " + _vm._s(scope.row.total.toFixed(2)))
                        ])
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { width: "50" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c("el-button", {
                          attrs: {
                            size: "mini",
                            type: "danger",
                            icon: "el-icon-close",
                            circle: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.DELETE_DETALLE_APERTURA(
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
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row justify-content-center mt-4" },
      [
        _c("jw-pagination", {
          ref: "jw",
          attrs: {
            pageSize: _vm.perpage,
            items: _vm.GET_FILTER_ITEMS_DETALLE_APERTURA,
            labels: _vm.labels
          },
          on: { changePage: _vm.onChangePage }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/periodo/AperturaInventarioInicialView.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/views/periodo/AperturaInventarioInicialView.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AperturaInventarioInicialView_vue_vue_type_template_id_8ee50466___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AperturaInventarioInicialView.vue?vue&type=template&id=8ee50466& */ "./resources/js/views/periodo/AperturaInventarioInicialView.vue?vue&type=template&id=8ee50466&");
/* harmony import */ var _AperturaInventarioInicialView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AperturaInventarioInicialView.vue?vue&type=script&lang=js& */ "./resources/js/views/periodo/AperturaInventarioInicialView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AperturaInventarioInicialView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AperturaInventarioInicialView_vue_vue_type_template_id_8ee50466___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AperturaInventarioInicialView_vue_vue_type_template_id_8ee50466___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/periodo/AperturaInventarioInicialView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/periodo/AperturaInventarioInicialView.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/periodo/AperturaInventarioInicialView.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AperturaInventarioInicialView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AperturaInventarioInicialView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/AperturaInventarioInicialView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AperturaInventarioInicialView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/periodo/AperturaInventarioInicialView.vue?vue&type=template&id=8ee50466&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/periodo/AperturaInventarioInicialView.vue?vue&type=template&id=8ee50466& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AperturaInventarioInicialView_vue_vue_type_template_id_8ee50466___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AperturaInventarioInicialView.vue?vue&type=template&id=8ee50466& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/AperturaInventarioInicialView.vue?vue&type=template&id=8ee50466&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AperturaInventarioInicialView_vue_vue_type_template_id_8ee50466___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AperturaInventarioInicialView_vue_vue_type_template_id_8ee50466___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/periodo/TableComponent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/periodo/TableComponent.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableComponent_vue_vue_type_template_id_2caac60f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableComponent.vue?vue&type=template&id=2caac60f& */ "./resources/js/views/periodo/TableComponent.vue?vue&type=template&id=2caac60f&");
/* harmony import */ var _TableComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableComponent.vue?vue&type=script&lang=js& */ "./resources/js/views/periodo/TableComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableComponent_vue_vue_type_template_id_2caac60f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableComponent_vue_vue_type_template_id_2caac60f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/periodo/TableComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/periodo/TableComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/periodo/TableComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TableComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/TableComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/periodo/TableComponent.vue?vue&type=template&id=2caac60f&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/periodo/TableComponent.vue?vue&type=template&id=2caac60f& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableComponent_vue_vue_type_template_id_2caac60f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TableComponent.vue?vue&type=template&id=2caac60f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/periodo/TableComponent.vue?vue&type=template&id=2caac60f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableComponent_vue_vue_type_template_id_2caac60f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableComponent_vue_vue_type_template_id_2caac60f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);