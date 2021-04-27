(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/stock/StockList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/stock/StockList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ "./resources/js/store/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      series: [{
        name: "STOCK ",
        data: [55, 20, 70, 20, 90]
      }],
      chartOptions: {
        chart: {
          type: 'area',
          height: 350,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Flujo de entradas y salidas en el tiempo',
          align: 'left'
        },
        subtitle: {
          text: 'Expresado en Unidades',
          align: 'left'
        },
        labels: ['12-10-2020', '12-12-2020', '12-15-2020', '12-16-2020', '12-20-2020'],
        xaxis: {
          type: 'datetime',
          lang: 'es'
        },
        yaxis: {
          opposite: true
        },
        legend: {
          horizontalAlign: 'left'
        }
      },
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/stock/StockList.vue?vue&type=template&id=173946cc&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/stock/StockList.vue?vue&type=template&id=173946cc& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "div",
        { staticClass: "row row justify-content-between mr-1 ml-1  mt-4" },
        [
          _c(
            "div",
            { staticClass: "pull-left" },
            [
              _c(
                "el-form",
                {
                  ref: "QueryForm",
                  staticClass: "demo-form-inline",
                  attrs: { inline: true, rules: _vm.rules, model: _vm.consulta }
                },
                [
                  _c(
                    "el-form-item",
                    { attrs: { label: "Periodo:", prop: "periodo" } },
                    [
                      _c(
                        "el-select",
                        {
                          staticStyle: { width: "180px" },
                          attrs: {
                            filterable: "",
                            "loading-text": "buscando..",
                            "no-match-text": "No se encontraron registros",
                            placeholder: "Seleccione periodo"
                          },
                          model: {
                            value: _vm.consulta.periodo,
                            callback: function($$v) {
                              _vm.$set(_vm.consulta, "periodo", $$v)
                            },
                            expression: "consulta.periodo"
                          }
                        },
                        _vm._l(_vm.GET_ITEMS_PERIODO, function(item, index) {
                          return _c("el-option", {
                            key: index,
                            attrs: { label: item.nombre, value: item.id }
                          })
                        }),
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    { attrs: { label: "Del", prop: "del" } },
                    [
                      _c("el-date-picker", {
                        staticStyle: { width: "160px" },
                        attrs: { type: "date", placeholder: "Seleccione dia" },
                        model: {
                          value: _vm.consulta.del,
                          callback: function($$v) {
                            _vm.$set(_vm.consulta, "del", $$v)
                          },
                          expression: "consulta.del"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    { attrs: { label: "Al", prop: "al" } },
                    [
                      _c("el-date-picker", {
                        staticStyle: { width: "160px" },
                        attrs: {
                          type: "date",
                          placeholder: "Seleccione un dia"
                        },
                        model: {
                          value: _vm.consulta.al,
                          callback: function($$v) {
                            _vm.$set(_vm.consulta, "al", $$v)
                          },
                          expression: "consulta.al"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    [
                      _c(
                        "el-button",
                        {
                          attrs: { loading: _vm.loading, type: "primary" },
                          on: {
                            click: function($event) {
                              return _vm.GET_ITEMS_REMA("QueryForm")
                            }
                          }
                        },
                        [_vm._v("Consultar")]
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
                "el-button",
                {
                  attrs: {
                    type: "danger",
                    disabled:
                      !_vm.consulta.periodo ||
                      !_vm.consulta.del ||
                      !_vm.consulta.al
                  },
                  on: { click: _vm.Print }
                },
                [
                  _c("i", { staticClass: "fas fa-file-pdf" }),
                  _vm._v(" Exp. Pdf")
                ]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: {
                    type: "success",
                    disabled:
                      !_vm.consulta.periodo ||
                      !_vm.consulta.del ||
                      !_vm.consulta.al
                  },
                  on: { click: _vm.toExcel }
                },
                [
                  _c("i", { staticClass: "fas fa-file-excel" }),
                  _vm._v(" Exp. Excel")
                ]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
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
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    [
                      _c("el-switch", {
                        attrs: {
                          "active-text": "todos",
                          "inactive-text": "solo activos"
                        },
                        on: {
                          change: function($event) {
                            return _vm.$store.dispatch("usuario/getItems")
                          }
                        },
                        model: {
                          value: _vm.$store.state.usuario.withTrashed,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.$store.state.usuario,
                              "withTrashed",
                              $$v
                            )
                          },
                          expression: "$store.state.usuario.withTrashed"
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
                          attrs: { placeholder: "Nombre", clearable: "" },
                          model: {
                            value: _vm.$store.state.usuario.searchQuery,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.$store.state.usuario,
                                "searchQuery",
                                $$v
                              )
                            },
                            expression: "$store.state.usuario.searchQuery"
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
      _c(
        "el-tabs",
        { attrs: { type: "border-card" } },
        [
          _c(
            "el-tab-pane",
            [
              _c("span", { attrs: { slot: "label" }, slot: "label" }, [
                _c("i", { staticClass: "el-icon-date" }),
                _vm._v(" Lotes")
              ]),
              _vm._v(" "),
              _c(
                "el-table",
                {
                  staticStyle: { width: "100%" },
                  attrs: { data: _vm.tableData, stripe: "" }
                },
                [
                  _c("el-table-column", {
                    attrs: { type: "index", label: "N°", width: "60" }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: {
                      prop: "name",
                      label: "Stock Inicial",
                      width: "180"
                    }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { prop: "address", label: "Saldo Incial" }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { prop: "name", label: "Stock", width: "180" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            _c("el-progress", {
                              attrs: {
                                color: [
                                  { color: "#f56c6c", percentage: 20 },
                                  { color: "#e6a23c", percentage: 40 },
                                  { color: "#5cb87a", percentage: 60 },
                                  { color: "#1989fa", percentage: 80 },
                                  { color: "#6f7ad3", percentage: 100 }
                                ],
                                "text-inside": true,
                                "stroke-width": 16,
                                percentage: 100
                              }
                            })
                          ]
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { prop: "address", label: "Saldo" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tab-pane",
            { attrs: { label: "Graficos" } },
            [
              _c("apexchart", {
                attrs: {
                  type: "area",
                  height: "350",
                  options: _vm.chartOptions,
                  series: _vm.series
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("el-tab-pane", { attrs: { label: "Role" } }, [_vm._v("Role")]),
          _vm._v(" "),
          _c("el-tab-pane", { attrs: { label: "Task" } }, [_vm._v("Task")])
        ],
        1
      ),
      _vm._v(" "),
      _c("div")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/stock/StockList.vue":
/*!************************************************!*\
  !*** ./resources/js/views/stock/StockList.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StockList_vue_vue_type_template_id_173946cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StockList.vue?vue&type=template&id=173946cc& */ "./resources/js/views/stock/StockList.vue?vue&type=template&id=173946cc&");
/* harmony import */ var _StockList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StockList.vue?vue&type=script&lang=js& */ "./resources/js/views/stock/StockList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StockList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StockList_vue_vue_type_template_id_173946cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StockList_vue_vue_type_template_id_173946cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/stock/StockList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/stock/StockList.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/stock/StockList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StockList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./StockList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/stock/StockList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StockList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/stock/StockList.vue?vue&type=template&id=173946cc&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/stock/StockList.vue?vue&type=template&id=173946cc& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StockList_vue_vue_type_template_id_173946cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./StockList.vue?vue&type=template&id=173946cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/stock/StockList.vue?vue&type=template&id=173946cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StockList_vue_vue_type_template_id_173946cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StockList_vue_vue_type_template_id_173946cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);