(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/apexcharts/dist/locales/es.json":
/*!******************************************************!*\
  !*** ./node_modules/apexcharts/dist/locales/es.json ***!
  \******************************************************/
/*! exports provided: name, options, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"es\",\"options\":{\"months\":[\"Enero\",\"Febrero\",\"Marzo\",\"Abril\",\"Mayo\",\"Junio\",\"Julio\",\"Agosto\",\"Septiembre\",\"Octubre\",\"Noviembre\",\"Diciembre\"],\"shortMonths\":[\"Ene\",\"Feb\",\"Mar\",\"Abr\",\"May\",\"Jun\",\"Jul\",\"Ago\",\"Sep\",\"Oct\",\"Nov\",\"Dic\"],\"days\":[\"Domingo\",\"Lunes\",\"Martes\",\"Miércoles\",\"Jueves\",\"Viernes\",\"Sábado\"],\"shortDays\":[\"Dom\",\"Lun\",\"Mar\",\"Mie\",\"Jue\",\"Vie\",\"Sab\"],\"toolbar\":{\"exportToSVG\":\"Descargar SVG\",\"exportToPNG\":\"Descargar PNG\",\"exportToCSV\":\"Descargar CSV\",\"menu\":\"Menu\",\"selection\":\"Seleccionar\",\"selectionZoom\":\"Seleccionar Zoom\",\"zoomIn\":\"Aumentar\",\"zoomOut\":\"Disminuir\",\"pan\":\"Navegación\",\"reset\":\"Reiniciar Zoom\"}}}");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reporte/KardexIndividualView.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reporte/KardexIndividualView.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var apexcharts_dist_locales_es_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apexcharts/dist/locales/es.json */ "./node_modules/apexcharts/dist/locales/es.json");
var apexcharts_dist_locales_es_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! apexcharts/dist/locales/es.json */ "./node_modules/apexcharts/dist/locales/es.json", 1);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./resources/js/store/index.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      datos: {
        periodo: "",
        articulo: "",
        codigo: "",
        partida: "",
        partida_codigo: "",
        linea: ""
      },
      reload: 0,
      HisSeries: [{
        name: 'Stock',
        data: []
      }],
      HisOptions: {
        chart: {
          type: 'bar',
          height: 350
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
        title: {
          text: 'Histograma de existencias en almacén',
          align: 'left'
        },
        subtitle: {
          text: 'Expresado en cantidades',
          align: 'left'
        },
        xaxis: {
          categories: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
        },
        yaxis: {
          title: {
            text: 'Existencias'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function formatter(val) {
              return val;
            }
          }
        }
      },
      IOAreaSeries: [{
        name: 'Stock',
        data: []
      }],
      IOAreachartOptions: {
        chart: {
          id: 'realtime',
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
          text: 'Expresado en cantidades',
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
      details_view: false,
      vista_re: false,
      rules: {
        periodo: [{
          required: true,
          message: "Este campo es obligatorio",
          trigger: "change"
        }],
        articulo: [{
          required: true,
          message: "Este campo es obligatorio",
          trigger: "change"
        }],
        del: [{
          required: true,
          message: "Este campo es obligatorio",
          trigger: "change"
        }],
        al: [{
          required: true,
          message: "Este campo es obligatorio",
          trigger: "change"
        }]
      },
      alert: {
        message: null,
        show: false
      },
      items: [],
      totales: {
        ts_entrada: 0,
        ts_salida: 0,
        ts_final: 0
      },
      self: null,
      pageOfItems: [],
      sizePerPage: 10,
      perpage: 5,
      labels: {
        first: "<<",
        last: ">>",
        previous: "anterior",
        next: "siguiente"
      },
      consulta: {
        formato: 'A',
        del: null,
        al: null,
        periodo: null,
        articulo: null,
        conSaldo: false
      },
      searchQuery: '',
      loading: false,
      loading_excel: false
    };
  },
  computed: _objectSpread({
    PerPage: function PerPage() {
      return this.perpage ? parseInt(this.perpage) : 25;
    },
    GET_FILTER_ITEMS: function GET_FILTER_ITEMS() {
      var self = this;
      return this.items.filter(function (item) {
        var searchRegex = new RegExp(self.searchQuery, "i");

        if (item.proveedor) {
          return searchRegex.test(item.proveedor) || searchRegex.test(item.medida) || searchRegex.test(item.ni) || searchRegex.test(item.fecha);
        }

        if (item.unidad) {
          return searchRegex.test(item.unidad) || searchRegex.test(item.medida) || searchRegex.test(item.ns) || searchRegex.test(item.fecha);
        }

        return searchRegex.test(item.medida) || searchRegex.test(item.ni) || searchRegex.test(item.fecha);
      });
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("periodo", ["GET_ITEMS_PERIODO"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("articulo", ["GET_ITEMS_ARTICULO"])),
  methods: {
    getUnidadProveedor: function getUnidadProveedor(item) {
      if (item.proveedor) {
        return item.proveedor;
      }

      if (item.unidad) {
        return item.unidad;
      }
    },
    getDescription: function getDescription(item) {
      if (item.ni) {
        if (item.ni == '000') {
          return 'Inventario inicial';
        } else {
          return 'Ingreso al almacen';
        }
      }

      if (item.ns) {
        return 'Salida del almacen';
      }
    },
    refresh: function refresh() {
      var self = this.$refs;
      setTimeout(function () {
        self.jw.setPage(1);
      }, 0);
    },
    onClickRE: function onClickRE() {
      this.vista_re = true;
      this.reload += 1;
    },
    GET_ITEMS_REGE: function GET_ITEMS_REGE(form) {
      var _this = this;

      this.HisSeries[0].data = [];
      this.IOAreachartOptions.xaxis.categories = [];
      this.IOAreaSeries[0].data = [];
      this.$refs[form].validate(function (valid) {
        _this.loading = true;

        if (valid) {
          _this.$Progress.start();

          axios.post('/controller/reportes/kardex_individual', _this.consulta).then(function (response) {
            _this.items = response.data.data;
            _this.datos = {
              articulo: response.data.data[0].articulo,
              codigo: response.data.data[0].codigo,
              partida: response.data.data[0].partida,
              partida_codigo: response.data.data[0].partida_codigo,
              linea: response.data.data[0].linea
            };
            _this.totales.ts_entrada = response.data.ts_entrada;
            _this.totales.ts_salida = response.data.ts_salida;
            _this.totales.ts_final = response.data.ts_final;
            response.data.flow.forEach(function (e) {
              _this.IOAreachartOptions.xaxis.categories.push(e.fecha);

              _this.IOAreaSeries[0].data.push(e.stock.toFixed(2));
            });
            response.data.hist.forEach(function (e) {
              _this.HisSeries[0].data.push(e.stock);
            });
            _this.reload += 1;

            _this.$Progress.finish();

            _this.loading = false;
          })["catch"](function (err) {
            _this.alert.message = err.message;
            _this.alert.show = true;
            _this.loading = false;

            _this.$Progress.fail();
          });
        } else {
          _this.loading = false;
          return false;
        }
      });
    },
    onChangePage: function onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
    findPeriodo: function findPeriodo(id) {
      var items = _store__WEBPACK_IMPORTED_MODULE_2__["default"].getters["periodo/GET_ITEMS_PERIODO"];
      return items.find(function (item) {
        return item.id === id;
      });
    },
    Print: function Print() {
      window.open('http://almacen.esfm/controller/reportes/kardex_individual_print?periodo=' + this.consulta.periodo + '&conSaldo=' + this.consulta.conSaldo + '&articulo=' + this.consulta.articulo, '_blank');
    },
    toExcel: function toExcel() {
      var _this2 = this;

      this.$Progress.start();
      this.loading_excel = true;
      axios.post('/controller/reportes/kardex_individual_excel', this.consulta, {
        responseType: 'blob'
      }).then(function (response) {
        var blob = new Blob([response.data], {
          type: 'application/vnd.ms-excel'
        });
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob); //link.download = 'test'

        link.setAttribute('download', 'Reporte_individual_' + moment__WEBPACK_IMPORTED_MODULE_3___default()(_this2.consulta.del).format('DD/MM/YYYY') + '_' + moment__WEBPACK_IMPORTED_MODULE_3___default()(_this2.consulta.al).format('DD-MM-YYYY') + '.xlsx'); //link.download = 'NIA-'+nro+'-'+moment(date).format("DD/MM/YYYY")

        link.click();
        URL.revokeObjectURL(link.href);
        _this2.loading_excel = false;

        _this2.$Progress.finish();
      })["catch"](function (err) {
        _this2.alert.message = err;
        _this2.alert.show = true;
        _this2.loading_excel = false;

        _this2.$Progress.fail();

        console.log('error excel', err.response.data.message);
      });
    }
  },
  mounted: function mounted() {
    _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch('login/getUser');
    _store__WEBPACK_IMPORTED_MODULE_2__["default"].state.periodo.withTrashed = true;
    _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch('periodo/getItems');
    _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch('articulo/getItems');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reporte/KardexIndividualView.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reporte/KardexIndividualView.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nth {\n    padding: 7px !important;\n}\n.scrolling::-webkit-scrollbar-track\n{  height: 2px;\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n    background-color: #F5F5F5;\n}\n.scrolling::-webkit-scrollbar\n{\n    height: 7px;\n    width: 2px;\n    background-color: #2d373c21;\n}\n.scrolling::-webkit-scrollbar-thumb\n{\n    height: 10px;\n    background-color: #0000001c;\n    border: 2px solid #2d373c21;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reporte/KardexIndividualView.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reporte/KardexIndividualView.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./KardexIndividualView.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reporte/KardexIndividualView.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reporte/KardexIndividualView.vue?vue&type=template&id=20722f36&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reporte/KardexIndividualView.vue?vue&type=template&id=20722f36& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    {},
    [
      _vm.alert.show
        ? _c("el-alert", {
            attrs: {
              title: "Ooops",
              type: "error",
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
      _c(
        "el-alert",
        { attrs: { type: "info", closable: false, effect: "dark" } },
        [
          _c("template", { slot: "title" }, [
            _c(
              "span",
              {
                staticClass: "font-weight-bold",
                staticStyle: { "font-size": "15px" }
              },
              [_vm._v(" Kardex individual ")]
            )
          ])
        ],
        2
      ),
      _vm._v(" "),
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
                    { attrs: { label: "Articulo:", prop: "articulo" } },
                    [
                      _c(
                        "el-select",
                        {
                          staticStyle: { width: "350px" },
                          attrs: {
                            filterable: "",
                            "loading-text": "buscando..",
                            "no-match-text": "No se encontraron registros",
                            placeholder: "Seleccione periodo"
                          },
                          model: {
                            value: _vm.consulta.articulo,
                            callback: function($$v) {
                              _vm.$set(_vm.consulta, "articulo", $$v)
                            },
                            expression: "consulta.articulo"
                          }
                        },
                        _vm._l(_vm.GET_ITEMS_ARTICULO, function(item, index) {
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
                    [
                      _c(
                        "el-button",
                        {
                          attrs: { loading: _vm.loading, type: "primary" },
                          on: {
                            click: function($event) {
                              return _vm.GET_ITEMS_REGE("QueryForm")
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
                    disabled: !_vm.consulta.periodo || !_vm.consulta.articulo
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
                    disabled: !_vm.consulta.periodo || !_vm.consulta.articulo,
                    loading: _vm.loading_excel
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
      _c("div", { staticClass: "row invoice-info" }, [
        _c("div", { staticClass: "col-md-6 invoice-col" }, [
          _c("dl", { staticClass: "row" }, [
            _c("dt", { staticClass: "col-md-5" }, [_vm._v("PERIODO:")]),
            _vm._v(" "),
            _c("dd", { staticClass: "col-md-7" }, [
              _vm._v(
                " " +
                  _vm._s(
                    _vm.consulta.periodo
                      ? _vm.findPeriodo(_vm.consulta.periodo).nombre
                      : ""
                  )
              )
            ]),
            _vm._v(" "),
            _c("dt", { staticClass: "col-md-5" }, [_vm._v("ARTICULO:")]),
            _vm._v(" "),
            _c("dd", { staticClass: "col-md-7" }, [
              _vm._v(" " + _vm._s(_vm.datos.articulo) + " ")
            ]),
            _vm._v(" "),
            _c("dt", { staticClass: "col-md-5" }, [_vm._v("CODIGO:")]),
            _vm._v(" "),
            _c("dd", { staticClass: "col-md-7" }, [
              _vm._v(" " + _vm._s(_vm.datos.codigo) + " ")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 invoice-col" }, [
          _c("dl", { staticClass: "row" }, [
            _c("dt", { staticClass: "col-md-5" }, [_vm._v("PARTIDA:")]),
            _vm._v(" "),
            _c("dd", { staticClass: "col-md-7" }, [
              _vm._v(
                _vm._s(_vm.datos.partida_codigo + " - " + _vm.datos.partida)
              )
            ]),
            _vm._v(" "),
            _c("dt", { staticClass: "col-md-5" }, [_vm._v("LINEA:")]),
            _vm._v(" "),
            _c("dd", { staticClass: "col-md-7" }, [
              _vm._v(_vm._s(_vm.datos.linea))
            ])
          ])
        ])
      ]),
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
                          "inactive-text": "solo con saldo"
                        },
                        model: {
                          value: _vm.consulta.conSaldo,
                          callback: function($$v) {
                            _vm.$set(_vm.consulta, "conSaldo", $$v)
                          },
                          expression: "consulta.conSaldo"
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
                          attrs: {
                            placeholder:
                              "No Ingreso, Salida, proveedor, unidad, fecha",
                            clearable: ""
                          },
                          model: {
                            value: _vm.searchQuery,
                            callback: function($$v) {
                              _vm.searchQuery = $$v
                            },
                            expression: "searchQuery"
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
        "div",
        {
          staticClass: "scrolling",
          staticStyle: {
            width: "100%",
            "overflow-x": "scroll",
            "overflow-y": "hidden"
          }
        },
        [
          _c(
            "table",
            {
              staticClass: "table table-bordered text-center",
              staticStyle: { "background-color": "white", "font-size": "12px" }
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(_vm.pageOfItems, function(item, index) {
                    return _c("tr", { key: index }, [
                      _c("th", { attrs: { scope: "row" } }, [
                        _vm._v(_vm._s(index + 1))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm._f("dateformat")(item.fecha)))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.getDescription(item)))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(item.ni == "000" ? "-" : item.ni))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(item.ni == "000" ? "-" : item.ns))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.medida))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.getUnidadProveedor(item)))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.precio_u.toFixed(2)))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.c_ingreso.toFixed(2)))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.s_ingreso.toFixed(2)))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.c_salida.toFixed(2)))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.s_salida.toFixed(2)))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.c_final.toFixed(2)))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.s_final.toFixed(2)))])
                    ])
                  }),
                  _vm._v(" "),
                  _c("tr", [
                    _c(
                      "td",
                      {
                        staticClass: "font-weight-bold",
                        attrs: { colspan: "8" }
                      },
                      [_vm._v(" TOTALES ")]
                    ),
                    _vm._v(" "),
                    _c("td", {
                      staticClass: "font-weight-bold",
                      attrs: { colspan: "1" }
                    }),
                    _vm._v(" "),
                    _c("td", { staticClass: "font-weight-bold" }, [
                      _vm._v(_vm._s(_vm.totales.ts_entrada.toFixed(2)))
                    ]),
                    _vm._v(" "),
                    _c("td", {
                      staticClass: "font-weight-bold",
                      attrs: { colspan: "1" }
                    }),
                    _vm._v(" "),
                    _c("td", { staticClass: "font-weight-bold" }, [
                      _vm._v(_vm._s(_vm.totales.ts_salida.toFixed(2)))
                    ]),
                    _vm._v(" "),
                    _c("td", {
                      staticClass: "font-weight-bold",
                      attrs: { colspan: "1" }
                    }),
                    _vm._v(" "),
                    _c("td", { staticClass: "font-weight-bold" }, [
                      _vm._v(_vm._s(_vm.totales.ts_final.toFixed(2)))
                    ])
                  ])
                ],
                2
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row justify-content-center mt-4" },
        [
          _c("el-button", { on: { click: _vm.onClickRE } }, [
            _vm._v("Resumen Estadistico "),
            _c("i", { staticClass: "el-icon-view el-icon--right" })
          ])
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
              pageSize: _vm.PerPage,
              items: _vm.GET_FILTER_ITEMS,
              labels: _vm.labels
            },
            on: { changePage: _vm.onChangePage }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("br"),
      _c("br"),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            title: _vm.consulta.periodo
              ? "Resumen Estadistico " +
                _vm.findPeriodo(_vm.consulta.periodo).nombre
              : "Resumen Estadistico -",
            visible: _vm.vista_re,
            width: "1250px"
          },
          on: {
            "update:visible": function($event) {
              _vm.vista_re = $event
            }
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-md-6" },
              [
                _c("apexchart", {
                  key: _vm.reload,
                  attrs: {
                    type: "area",
                    height: "350",
                    options: _vm.IOAreachartOptions,
                    series: _vm.IOAreaSeries
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-6" },
              [
                _c("apexchart", {
                  key: _vm.reload,
                  attrs: {
                    type: "bar",
                    height: "350",
                    options: _vm.HisOptions,
                    series: _vm.HisSeries
                  }
                })
              ],
              1
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c(
          "th",
          {
            staticClass: "pa",
            staticStyle: { "min-width": "40px" },
            attrs: { rowspan: "2", scope: "col" }
          },
          [_vm._v("N°")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "pa",
            staticStyle: { "min-width": "50px" },
            attrs: { rowspan: "2", scope: "col" }
          },
          [_vm._v("FECHA")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "pa",
            staticStyle: { "min-width": "200px" },
            attrs: { rowspan: "2", scope: "col" }
          },
          [_vm._v("DESCRIPCION")]
        ),
        _vm._v(" "),
        _c("th", { staticClass: "pa", attrs: { rowspan: "2", scope: "col" } }, [
          _vm._v("NI")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "pa", attrs: { rowspan: "2", scope: "col" } }, [
          _vm._v("NS")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "pa", attrs: { rowspan: "2", scope: "col" } }, [
          _vm._v("MEDIDA")
        ]),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "pa",
            staticStyle: { "min-width": "150px" },
            attrs: { rowspan: "2", scope: "col" }
          },
          [_vm._v("UNIDAD/PROVEEDOR")]
        ),
        _vm._v(" "),
        _c("th", { staticClass: "pa", attrs: { rowspan: "2", scope: "col" } }, [
          _vm._v("VALOR "),
          _c("br"),
          _vm._v(" UNITARIO")
        ]),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "pa",
            attrs: { rowspan: "1", scope: "col", colspan: "2" }
          },
          [_vm._v("INGRESOS")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "pa",
            attrs: { rowspan: "1", scope: "col", colspan: "2" }
          },
          [_vm._v("SALIDAS")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "pa",
            attrs: { rowspan: "1", scope: "col", colspan: "2" }
          },
          [_vm._v("SALDO")]
        )
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th", { staticClass: "pa", attrs: { scope: "col" } }, [
          _vm._v("CANT.")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "pa", attrs: { scope: "col" } }, [
          _vm._v("C.TOTAL")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "pa", attrs: { scope: "col" } }, [
          _vm._v("CANT.")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "pa", attrs: { scope: "col" } }, [
          _vm._v("C.TOTAL")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "pa", attrs: { scope: "col" } }, [
          _vm._v("CANT.")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "pa", attrs: { scope: "col" } }, [
          _vm._v("C.TOTAL")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/reporte/KardexIndividualView.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/reporte/KardexIndividualView.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KardexIndividualView_vue_vue_type_template_id_20722f36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KardexIndividualView.vue?vue&type=template&id=20722f36& */ "./resources/js/views/reporte/KardexIndividualView.vue?vue&type=template&id=20722f36&");
/* harmony import */ var _KardexIndividualView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KardexIndividualView.vue?vue&type=script&lang=js& */ "./resources/js/views/reporte/KardexIndividualView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _KardexIndividualView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KardexIndividualView.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/reporte/KardexIndividualView.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _KardexIndividualView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KardexIndividualView_vue_vue_type_template_id_20722f36___WEBPACK_IMPORTED_MODULE_0__["render"],
  _KardexIndividualView_vue_vue_type_template_id_20722f36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/reporte/KardexIndividualView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/reporte/KardexIndividualView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/reporte/KardexIndividualView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KardexIndividualView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./KardexIndividualView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reporte/KardexIndividualView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KardexIndividualView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/reporte/KardexIndividualView.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/reporte/KardexIndividualView.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KardexIndividualView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./KardexIndividualView.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reporte/KardexIndividualView.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KardexIndividualView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KardexIndividualView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KardexIndividualView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KardexIndividualView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_KardexIndividualView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/reporte/KardexIndividualView.vue?vue&type=template&id=20722f36&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/reporte/KardexIndividualView.vue?vue&type=template&id=20722f36& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KardexIndividualView_vue_vue_type_template_id_20722f36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./KardexIndividualView.vue?vue&type=template&id=20722f36& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reporte/KardexIndividualView.vue?vue&type=template&id=20722f36&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KardexIndividualView_vue_vue_type_template_id_20722f36___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KardexIndividualView_vue_vue_type_template_id_20722f36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);