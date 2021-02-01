(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reporte/SaldosView.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reporte/SaldosView.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ "./resources/js/store/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      series: [{
        name: "Linea 1",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }, {
        name: "Linea 2",
        data: [20, 31, 45, 11, 49, 62, 69, 91, 148]
      }, {
        name: "Linea 3",
        data: [20, 31, 45, 11, 49, 62, 69, 91, 148]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
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
          text: 'Product Trends by Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ['Ene.', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
        }
      },
      details_view: false,
      rules: {
        periodo: [{
          required: true,
          message: "Este campo es obligatorio",
          trigger: "change"
        }],
        // del: [
        //     {
        //         required: true,
        //         message: "Este campo es obligatorio",
        //         trigger: "change"
        //     }
        // ],
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
        ts_inicial: 0,
        ts_entrada: 0,
        ts_salida: 0,
        ts_final: 0,
        l1s_inicial: 0,
        l2s_inicial: 0,
        l3s_inicial: 0,
        l1s_entradas: 0,
        l2s_entradas: 0,
        l3s_entradas: 0,
        l1s_salidas: 0,
        l2s_salidas: 0,
        l3s_salidas: 0,
        l1s_final: 0,
        l2s_final: 0,
        l3s_final: 0
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
        return searchRegex.test(item.partida) || searchRegex.test(item.articulo) || searchRegex.test(item.codigo);
      });
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("periodo", ["GET_ITEMS_PERIODO"])),
  methods: {
    refresh: function refresh() {
      var self = this.$refs;
      setTimeout(function () {
        self.jw.setPage(1);
      }, 0);
    },
    GET_ITEMS_REMA: function GET_ITEMS_REMA(form) {
      var _this = this;

      this.$refs[form].validate(function (valid) {
        _this.loading = true;

        if (valid) {
          _this.$Progress.start();

          axios.post('/controller/reportes/saldos_almacen/', _this.consulta).then(function (response) {
            _this.items = response.data.data;
            _this.totales.ts_inicial = response.data.ts_inicial;
            _this.totales.ts_entrada = response.data.ts_entrada;
            _this.totales.ts_salida = response.data.ts_salida;
            _this.totales.ts_final = response.data.ts_final;
            _this.totales.l1s_inicial = response.data.l1s_inicial;
            _this.totales.l2s_inicial = response.data.l2s_inicial;
            _this.totales.l3s_inicial = response.data.l3s_inicial;
            _this.totales.l1s_final = response.data.l1s_final;
            _this.totales.l2s_final = response.data.l2s_final;
            _this.totales.l3s_final = response.data.l3s_final;
            _this.totales.l1s_entradas = response.data.l1s_entradas;
            _this.totales.l2s_entradas = response.data.l2s_entradas;
            _this.totales.l3s_entradas = response.data.l3s_entradas;
            _this.totales.l1s_salidas = response.data.l1s_salidas;
            _this.totales.l2s_salidas = response.data.l2s_salidas;
            _this.totales.l3s_salidas = response.data.l3s_salidas;

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
      var items = _store__WEBPACK_IMPORTED_MODULE_1__["default"].getters["periodo/GET_ITEMS_PERIODO"];
      return items.find(function (item) {
        return item.id === id;
      });
    },
    Print: function Print() {
      window.open('http://localhost:8000/controller/reportes/saldos_almacen_print?periodo=' + this.consulta.periodo + '&del=' + this.consulta.del + '&al=' + this.consulta.al + '&formato=' + this.consulta.formato + '&conSaldo=' + this.consulta.conSaldo, '_blank');
    },
    toExcel: function toExcel() {
      var _this2 = this;

      this.loading_excel = true;
      this.$Progress.start();
      axios.post('/controller/reportes/saldos_almacen_excel', this.consulta, {
        responseType: 'blob'
      }).then(function (response) {
        var blob = new Blob([response.data], {
          type: 'application/vnd.ms-excel'
        });
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob); //link.download = 'test'

        link.setAttribute('download', 'Saldos_almacen_al' + moment__WEBPACK_IMPORTED_MODULE_2___default()(_this2.consulta.al).format('DD/MM/YYYY') + '.xlsx'); //link.download = 'NIA-'+nro+'-'+moment(date).format("DD/MM/YYYY")

        link.click();
        URL.revokeObjectURL(link.href);

        _this2.$Progress.finish();

        _this2.loading_excel = false;
      })["catch"](function (err) {
        _this2.$Progress.fail();

        _this2.loading_excel = false;
        console.log('error excel', err);
      });
    }
  },
  mounted: function mounted() {
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('login/getUser');
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.periodo.withTrashed = true;
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('periodo/getItems');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reporte/SaldosView.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reporte/SaldosView.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nth {\r\n    padding: 7px !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reporte/SaldosView.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reporte/SaldosView.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaldosView.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reporte/SaldosView.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reporte/SaldosView.vue?vue&type=template&id=acc42328&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reporte/SaldosView.vue?vue&type=template&id=acc42328& ***!
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
      _c("br"),
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
              [_vm._v(" Reporte Saldos a la fecha")]
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
                    { attrs: { label: "Al", prop: "al" } },
                    [
                      _c("el-date-picker", {
                        staticStyle: { width: "160px" },
                        attrs: {
                          type: "date",
                          format: "dd/MM/yyyy",
                          "value-format": "yyyy-MM-dd",
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
                    disabled: !_vm.consulta.periodo || !_vm.consulta.al
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
                    loading: _vm.loading_excel,
                    disabled: !_vm.consulta.periodo || !_vm.consulta.al
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
                            placeholder: "Articulo, código, partida",
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
        "table",
        {
          staticClass: "table table-bordered text-center",
          staticStyle: { "background-color": "white", "font-size": "12px" }
        },
        [
          _c("thead", [
            _c("tr", [
              _c(
                "th",
                { staticClass: "pa", attrs: { rowspan: "2", scope: "col" } },
                [_vm._v("N°")]
              ),
              _vm._v(" "),
              _c(
                "th",
                { staticClass: "pa", attrs: { rowspan: "2", scope: "col" } },
                [_vm._v("Partida")]
              ),
              _vm._v(" "),
              _c(
                "th",
                { staticClass: "pa", attrs: { rowspan: "2", scope: "col" } },
                [_vm._v("Código")]
              ),
              _vm._v(" "),
              _c(
                "th",
                { staticClass: "pa", attrs: { rowspan: "2", scope: "col" } },
                [_vm._v("Descripción")]
              ),
              _vm._v(" "),
              _c(
                "th",
                { staticClass: "pa", attrs: { rowspan: "1", scope: "col" } },
                [
                  _vm._v("Saldo inicial "),
                  _c("br"),
                  _vm._v(" al " + _vm._s(_vm._f("dateformat")(_vm.consulta.al)))
                ]
              ),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c(
                "th",
                { staticClass: "pa", attrs: { rowspan: "1", scope: "col" } },
                [
                  _vm._v("Saldo inicial "),
                  _c("br"),
                  _vm._v(" al " + _vm._s(_vm._f("dateformat")(_vm.consulta.al)))
                ]
              )
            ]),
            _vm._v(" "),
            _vm._m(1)
          ]),
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
                  _c("td", [_vm._v(_vm._s(item.partida))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.codigo))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.articulo))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.c_final))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.precio_u.toFixed(2)))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.s_final.toFixed(2)))])
                ])
              }),
              _vm._v(" "),
              _c("tr", [
                _c(
                  "td",
                  { staticClass: "font-weight-bold", attrs: { colspan: "4" } },
                  [_vm._v(" TOTALES ")]
                ),
                _vm._v(" "),
                _c("td", { staticClass: "font-weight-bold" }),
                _vm._v(" "),
                _c("td", { staticClass: "font-weight-bold" }),
                _vm._v(" "),
                _c("td", { staticClass: "font-weight-bold" }, [
                  _vm._v(_vm._s(_vm.totales.ts_final.toFixed(2)))
                ])
              ])
            ],
            2
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row justify-content-center mt-4" },
        [
          _c(
            "el-button",
            {
              on: {
                click: function($event) {
                  _vm.details_view = true
                }
              }
            },
            [
              _vm._v("Ver Resumen "),
              _c("i", { staticClass: "el-icon-view el-icon--right" })
            ]
          )
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
      _c(
        "el-dialog",
        {
          attrs: { title: "Resumen de saldos", visible: _vm.details_view },
          on: {
            "update:visible": function($event) {
              _vm.details_view = $event
            }
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
              _c("tr", [
                _c("th", [_vm._v("LINEA")]),
                _vm._v(" "),
                _c("th", [
                  _vm._v(
                    "SALDO INICIAL AL " +
                      _vm._s(_vm._f("dateformat")(_vm.consulta.al))
                  )
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", { staticClass: "font-weight-normal" }, [_vm._v("1")]),
                _vm._v(" "),
                _c("th", { staticClass: "font-weight-normal" }, [
                  _vm._v(_vm._s(_vm.totales.l1s_final.toFixed(2)))
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", { staticClass: "font-weight-normal" }, [_vm._v("2")]),
                _vm._v(" "),
                _c("th", { staticClass: "font-weight-normal" }, [
                  _vm._v(_vm._s(_vm.totales.l2s_final.toFixed(2)))
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", { staticClass: "font-weight-normal" }, [_vm._v("3")]),
                _vm._v(" "),
                _c("th", { staticClass: "font-weight-normal" }, [
                  _vm._v(_vm._s(_vm.totales.l3s_final.toFixed(2)))
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", { staticClass: "font-weight-bold" }, [
                  _vm._v("TOTALES")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "font-weight-bold text-primary" }, [
                  _vm._v(_vm._s(_vm.totales.ts_final.toFixed(2)))
                ])
              ])
            ]
          )
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
    return _c(
      "th",
      { staticClass: "pa", attrs: { rowspan: "1", scope: "col" } },
      [_vm._v("Valor "), _c("br"), _vm._v(" Unitario")]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", { staticClass: "pa", attrs: { scope: "col" } }, [
        _vm._v("Cantidad")
      ]),
      _vm._v(" "),
      _c("th", { staticClass: "pa", attrs: { scope: "col" } }, [_vm._v("Bs")]),
      _vm._v(" "),
      _c("th", { staticClass: "pa", attrs: { scope: "col" } }, [_vm._v("Bs")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/reporte/SaldosView.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/reporte/SaldosView.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SaldosView_vue_vue_type_template_id_acc42328___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaldosView.vue?vue&type=template&id=acc42328& */ "./resources/js/views/reporte/SaldosView.vue?vue&type=template&id=acc42328&");
/* harmony import */ var _SaldosView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SaldosView.vue?vue&type=script&lang=js& */ "./resources/js/views/reporte/SaldosView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SaldosView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SaldosView.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/reporte/SaldosView.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SaldosView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SaldosView_vue_vue_type_template_id_acc42328___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SaldosView_vue_vue_type_template_id_acc42328___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/reporte/SaldosView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/reporte/SaldosView.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/reporte/SaldosView.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaldosView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaldosView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reporte/SaldosView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaldosView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/reporte/SaldosView.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/reporte/SaldosView.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SaldosView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaldosView.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reporte/SaldosView.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SaldosView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SaldosView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SaldosView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SaldosView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SaldosView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/reporte/SaldosView.vue?vue&type=template&id=acc42328&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/reporte/SaldosView.vue?vue&type=template&id=acc42328& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaldosView_vue_vue_type_template_id_acc42328___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaldosView.vue?vue&type=template&id=acc42328& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reporte/SaldosView.vue?vue&type=template&id=acc42328&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaldosView_vue_vue_type_template_id_acc42328___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaldosView_vue_vue_type_template_id_acc42328___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);