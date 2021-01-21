(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/apexcharts/dist/locales/es.json":
/*!******************************************************!*\
  !*** ./node_modules/apexcharts/dist/locales/es.json ***!
  \******************************************************/
/*! exports provided: name, options, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"es\",\"options\":{\"months\":[\"Enero\",\"Febrero\",\"Marzo\",\"Abril\",\"Mayo\",\"Junio\",\"Julio\",\"Agosto\",\"Septiembre\",\"Octubre\",\"Noviembre\",\"Diciembre\"],\"shortMonths\":[\"Ene\",\"Feb\",\"Mar\",\"Abr\",\"May\",\"Jun\",\"Jul\",\"Ago\",\"Sep\",\"Oct\",\"Nov\",\"Dic\"],\"days\":[\"Domingo\",\"Lunes\",\"Martes\",\"Miércoles\",\"Jueves\",\"Viernes\",\"Sábado\"],\"shortDays\":[\"Dom\",\"Lun\",\"Mar\",\"Mie\",\"Jue\",\"Vie\",\"Sab\"],\"toolbar\":{\"exportToSVG\":\"Descargar SVG\",\"exportToPNG\":\"Descargar PNG\",\"exportToCSV\":\"Descargar CSV\",\"menu\":\"Menu\",\"selection\":\"Seleccionar\",\"selectionZoom\":\"Seleccionar Zoom\",\"zoomIn\":\"Aumentar\",\"zoomOut\":\"Disminuir\",\"pan\":\"Navegación\",\"reset\":\"Reiniciar Zoom\"}}}");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DashboardComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DashboardComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apexcharts_dist_locales_es_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apexcharts/dist/locales/es.json */ "./node_modules/apexcharts/dist/locales/es.json");
var apexcharts_dist_locales_es_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! apexcharts/dist/locales/es.json */ "./node_modules/apexcharts/dist/locales/es.json", 1);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./resources/js/store/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    apexcharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      alert: {
        show: false,
        message: null,
        title: null,
        color: null
      },
      data: null,
      IOSseries: [{
        name: 'Ingresos',
        data: []
      }, {
        name: 'Salidas',
        data: []
      }],
      IOSChartOptions: {
        chart: {
          type: 'bar',
          height: 350
        },
        title: {
          text: 'Ingresos y salidas mensuales',
          align: 'left'
        },
        subtitle: {
          text: 'Expresado en Bolivianos',
          align: 'left'
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Ene', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dic']
        },
        yaxis: {
          title: {
            text: 'Bs'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function formatter(val) {
              return "Bs " + val;
            }
          }
        }
      },
      LineStockSeries: [],
      LineStockChartOptions: {
        chart: {
          width: 480,
          height: 350,
          type: 'pie'
        },
        labels: ['Linea 1', 'Linea 2', 'Linea 3'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      IOAreaSeries: [{
        name: 'Saldo',
        data: []
      }],
      IOAreachartOptions: {
        chart: {
          locales: [apexcharts_dist_locales_es_json__WEBPACK_IMPORTED_MODULE_1__],
          defaultLocale: 'es',
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
          text: 'Expresado en Bolivianos',
          align: 'left'
        },
        //labels: ['12-10-2020','12-12-2020','12-15-2020','12-16-2020','12-20-2020'],
        xaxis: {
          format: 'dd/MM',
          type: 'datetime',
          lang: 'es',
          categories: []
        },
        yaxis: {
          opposite: true
        },
        legend: {
          horizontalAlign: 'left'
        }
      },
      chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: ['PAPEL MEMBRETA T/CARTA', 'ARCHIVADOR TAMANO OFICIO DE COLOR ROJO CON NUMERACION']
        }
      },
      series: [{
        name: 'Ingresos',
        data: [150]
      }, {
        name: 'Salidas',
        data: [120]
      }]
    };
  },
  created: function created() {
    var _this = this;

    this.$Progress.start();
    _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('login/getUser');
    axios.get('/controller/graphics/dashboard').then(function (resp) {
      _this.data = resp.data;
      _this.IOAreachartOptions.title.text = 'Flujo de caja ' + resp.data.periodo;
      resp.data.cash_flow.forEach(function (e) {
        _this.IOAreachartOptions.xaxis.categories.push(e.fecha);

        _this.IOAreaSeries[0].data.push(e.saldo.toFixed(2));
      });
      resp.data.stock_linea.forEach(function (e) {
        _this.LineStockSeries.push(e.stock);
      });
      resp.data.ingreso_salida.forEach(function (e) {
        _this.IOSseries[0].data.push(e.ingresos.toFixed(2));

        _this.IOSseries[1].data.push(e.salidas.toFixed(2));
      });

      _this.$Progress.finish();
    })["catch"](function (err) {
      _this.$Progress.fail();

      _this.alert.message = err.response.data.message;

      switch (err.response.status) {
        case 401:
          _this.$router.push({
            name: 'login'
          });

          break;

        case 500:
          _this.alert.color = 'error';
          _this.alert.show = true;
          break;
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DashboardComponent.vue?vue&type=template&id=7f9073a8&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DashboardComponent.vue?vue&type=template&id=7f9073a8& ***!
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
    [
      _vm.alert.show
        ? _c("el-alert", {
            attrs: {
              title: _vm.alert.title,
              type: _vm.alert.color,
              description: _vm.alert.message,
              closable: "",
              "show-icon": ""
            },
            on: {
              close: function($event) {
                _vm.alert.show = false
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-3 col-6" }, [
          _c(
            "div",
            { staticClass: "small-box bg-info" },
            [
              _c("div", { staticClass: "inner" }, [
                _c("h3", [_vm._v(_vm._s(_vm.data.cant_prov))]),
                _vm._v(" "),
                _c("p", [_vm._v("Proveedores")])
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "small-box-footer",
                  attrs: { to: { name: "proveedor" } }
                },
                [
                  _vm._v("\n                    Ver mas..   "),
                  _c("i", { staticClass: "fas fa-arrow-circle-right" })
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-3 col-6" }, [
          _c(
            "div",
            { staticClass: "small-box bg-warning" },
            [
              _c("div", { staticClass: "inner" }, [
                _c("h3", [_vm._v(_vm._s(_vm.data.cant_sol))]),
                _vm._v(" "),
                _c("p", [_vm._v("Solicitantes")])
              ]),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "small-box-footer",
                  attrs: { to: { name: "solicitante" } }
                },
                [
                  _vm._v("\n                    Ver mas..   "),
                  _c("i", { staticClass: "fas fa-arrow-circle-right" })
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-3 col-6" }, [
          _c(
            "div",
            { staticClass: "small-box bg-success" },
            [
              _c("div", { staticClass: "inner" }, [
                _c("h3", [_vm._v(_vm._s(_vm.data.cant_in))]),
                _vm._v(" "),
                _c("p", [_vm._v("Ingresos " + _vm._s(_vm.data.periodo))])
              ]),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "small-box-footer",
                  attrs: { to: { name: "ingreso" } }
                },
                [
                  _vm._v("\n                    Ver mas..   "),
                  _c("i", { staticClass: "fas fa-arrow-circle-right" })
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-3 col-6" }, [
          _c(
            "div",
            { staticClass: "small-box bg-danger" },
            [
              _c("div", { staticClass: "inner" }, [
                _c("h3", [_vm._v(_vm._s(_vm.data.cant_sa))]),
                _vm._v(" "),
                _c("p", [_vm._v("Salidas " + _vm._s(_vm.data.periodo))])
              ]),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "small-box-footer",
                  attrs: { to: { name: "salida" } }
                },
                [
                  _vm._v("\n                    Ver mas..   "),
                  _c("i", { staticClass: "fas fa-arrow-circle-right" })
                ]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-8" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("apexchart", {
                  attrs: {
                    type: "bar",
                    height: "290",
                    options: _vm.IOSChartOptions,
                    series: _vm.IOSseries
                  }
                })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(4),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("apexchart", {
                  attrs: {
                    type: "pie",
                    width: "380",
                    height: "350",
                    options: _vm.LineStockChartOptions,
                    series: _vm.LineStockSeries
                  }
                })
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("apexchart", {
                  attrs: {
                    type: "area",
                    height: "350",
                    options: _vm.IOAreachartOptions,
                    series: _vm.IOAreaSeries
                  }
                })
              ],
              1
            )
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
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "fas fa-truck" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "fas fa-users" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "fas fa-truck-loading" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "fas fa-sign-out-alt" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("b", [_vm._v("Stock de articulos por linea")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/DashboardComponent.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/DashboardComponent.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardComponent_vue_vue_type_template_id_7f9073a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardComponent.vue?vue&type=template&id=7f9073a8& */ "./resources/js/views/DashboardComponent.vue?vue&type=template&id=7f9073a8&");
/* harmony import */ var _DashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardComponent.vue?vue&type=script&lang=js& */ "./resources/js/views/DashboardComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardComponent_vue_vue_type_template_id_7f9073a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardComponent_vue_vue_type_template_id_7f9073a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/DashboardComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/DashboardComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/DashboardComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DashboardComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/DashboardComponent.vue?vue&type=template&id=7f9073a8&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/DashboardComponent.vue?vue&type=template&id=7f9073a8& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardComponent_vue_vue_type_template_id_7f9073a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardComponent.vue?vue&type=template&id=7f9073a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DashboardComponent.vue?vue&type=template&id=7f9073a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardComponent_vue_vue_type_template_id_7f9073a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardComponent_vue_vue_type_template_id_7f9073a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);