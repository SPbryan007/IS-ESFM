(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ingreso/ViewDetails.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ingreso/ViewDetails.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      numero: 1997
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("ingreso", ["detalle_ingreso", "data_form", "loading_form", "alert"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("proveedor", ["GET_ITEMS_PROVEEDOR"])),
  methods: {
    /* toPrint(){
               $('<iframe>', {name: 'myiframe',class: 'printFrame'})
                 .appendTo('body')
                 .contents().find('body')
                 .append(`
            <style type="text/css">
                 @import url('https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css');
             </style>
       <table class="table table-bordered">
                 <thead>
                 <tr>
                     <th style="width: 10px">N°</th>
                     <th>Articulo</th>
                     <th>Medida</th>
                     <th>Cantidad</th>
                     <th>Subtotal</th>
                 </tr>
                 </thead>
                 <tbody>
                 <tr>
                 <td> Hola</td>
    </tr>
                 </tbody>
                </table>
         npm printd
     `);
         window.frames['myiframe'].focus();
             window.frames['myiframe'].print();
              setTimeout(() => { $(".printFrame").remove(); }, 1000);
     },*/
    Print: function Print() {
      this.$htmlToPaper('printMe');
    },

    /*submitForm(form) {
        this.$refs[form].validate((valid) => {
            if (valid) {
                router.push({ name: "addingresodetails" });
            }
        });
    },
    cancelForm(formName) {
        this.$refs[formName].resetFields();
        router.push({ name: "ingreso" });
    },*/
    goBack: function goBack() {
      this.$router.go(-1);
    }
  }
  /* created() {
       store.dispatch("proveedor/getItems");
   },*/

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ingreso/ViewDetails.vue?vue&type=template&id=e1a9eea0&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ingreso/ViewDetails.vue?vue&type=template&id=e1a9eea0& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
                { attrs: { type: "info" }, on: { click: function($event) {} } },
                [_c("i", { staticClass: "fas fa-file-pdf" }), _vm._v(" Pdf")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "success" },
                  on: { click: function($event) {} }
                },
                [
                  _c("i", { staticClass: "fas fa-file-excel" }),
                  _vm._v(" Excel")
                ]
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
          { ref: "table", staticClass: "card-body", attrs: { id: "printMe" } },
          [
            _vm.detalle_ingreso.tipo_ingreso == "Compra"
              ? _c("div", { staticClass: "row invoice-info" }, [
                  _c("div", { staticClass: "col-md-5 invoice-col" }, [
                    _c("dl", { staticClass: "row" }, [
                      _c("dt", { staticClass: "col-md-5" }, [
                        _vm._v("Ingresado por:")
                      ]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-7" }, [
                        _vm._v(
                          _vm._s(
                            _vm.detalle_ingreso.usuario.funcionario.nombre +
                              " " +
                              _vm.detalle_ingreso.usuario.funcionario.apellido
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("dt", { staticClass: "col-md-5" }, [
                        _vm._v("Fecha de ingreso:")
                      ]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-7" }, [
                        _vm._v(
                          _vm._s(
                            _vm._f("dateformat")(_vm.detalle_ingreso.created_at)
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("dt", { staticClass: "col-md-5" }, [_vm._v("NIT:")]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-7" }, [
                        _vm._v(_vm._s(_vm.detalle_ingreso.proveedor.nit))
                      ]),
                      _vm._v(" "),
                      _c("dt", { staticClass: "col-md-5" }, [
                        _vm._v("Proveedor:")
                      ]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-7" }, [
                        _vm._v(_vm._s(_vm.detalle_ingreso.proveedor.nombre))
                      ]),
                      _vm._v(" "),
                      _c("dt", { staticClass: "col-md-5" }, [
                        _vm._v("Fecha solicitud:")
                      ]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-7" }, [
                        _vm._v(
                          _vm._s(
                            _vm._f("dateformat")(
                              _vm.detalle_ingreso.compra.fecha_solicitud
                            )
                          )
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4 invoice-col" }, [
                    _c("dl", { staticClass: "row" }, [
                      _c("dt", { staticClass: "col-md-6" }, [_vm._v(" ")]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-6" }, [_vm._v(" ")]),
                      _vm._v(" "),
                      _c("dt", { staticClass: "col-md-6" }, [
                        _vm._v("N° Factura")
                      ]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-6" }, [
                        _vm._v(
                          _vm._s(_vm.detalle_ingreso.compra.nro_comprobante)
                        )
                      ]),
                      _vm._v(" "),
                      _c("dt", { staticClass: "col-md-6" }, [
                        _vm._v("N° Autorizacion:")
                      ]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-6" }, [
                        _vm._v(
                          _vm._s(_vm.detalle_ingreso.compra.nro_autorizacion)
                        )
                      ]),
                      _vm._v(" "),
                      _c("dt", { staticClass: "col-md-6" }, [_vm._v(" ")]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-6" }, [_vm._v(" ")]),
                      _vm._v(" "),
                      _c("dt", { staticClass: "col-md-6" }, [
                        _vm._v("Formulario:")
                      ]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-6" }, [
                        _vm._v(_vm._s(_vm.detalle_ingreso.compra.tipo_compra))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-3" }, [
                    _c("dl", { staticClass: "row" }, [
                      _c("dt", { staticClass: "col-md-6" }),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-6" }, [
                        _c("h4", [
                          _c("strong", [
                            _vm._v(
                              "NIA: " + _vm._s(_vm.detalle_ingreso.nro_ingreso)
                            )
                          ])
                        ]),
                        _c("small", [_vm._v("12/45/1998")])
                      ]),
                      _vm._v(" "),
                      _c("dt", { staticClass: "col-md-6" }, [_vm._v(" ")]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-6" }, [_vm._v(" ")]),
                      _vm._v(" "),
                      _c("dt", { staticClass: "col-md-6" }, [_vm._v(" ")]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-6" }, [_vm._v(" ")]),
                      _vm._v(" "),
                      _c("dt", { staticClass: "col-md-6" }, [
                        _vm._v("N° Formulario")
                      ]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-6" }, [
                        _vm._v(_vm._s(_vm.detalle_ingreso.compra.nro_solicitud))
                      ])
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.detalle_ingreso.tipo_ingreso == "INV_INICIAL"
              ? _c("div", { staticClass: "row invoice-info" }, [
                  _c("div", { staticClass: "col-md-5 invoice-col" }, [
                    _c("dl", { staticClass: "row" }, [
                      _c("dt", { staticClass: "col-md-5" }, [
                        _vm._v("Ingresado por:")
                      ]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-7" }, [
                        _vm._v(
                          _vm._s(
                            _vm.detalle_ingreso.usuario.funcionario.nombre +
                              " " +
                              _vm.detalle_ingreso.usuario.funcionario.apellido
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("dt", { staticClass: "col-md-5" }, [
                        _vm._v("Fecha de ingreso:")
                      ]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-7" }, [
                        _vm._v(
                          _vm._s(
                            _vm._f("dateformat")(_vm.detalle_ingreso.created_at)
                          )
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-3" }, [
                    _c("dl", { staticClass: "row" }, [
                      _c("dt", { staticClass: "col-md-6" }),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-6" }, [
                        _c("h4", [
                          _c("strong", [
                            _vm._v(
                              "NIA: " + _vm._s(_vm.detalle_ingreso.nro_ingreso)
                            )
                          ])
                        ]),
                        _c("small", [
                          _vm._v(
                            _vm._s(
                              _vm._f("dateformat")(
                                _vm.detalle_ingreso.created_at
                              )
                            )
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("dt", { staticClass: "col-md-6" }, [_vm._v(" ")]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-6" }, [_vm._v(" ")])
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.detalle_ingreso.tipo_ingreso == "Donacion"
              ? _c("div", { staticClass: "row invoice-info" }, [
                  _c("div", { staticClass: "col-md-5 invoice-col" }, [
                    _c("dl", { staticClass: "row" }, [
                      _c("dt", { staticClass: "col-md-5" }, [
                        _vm._v("Ingresado por:")
                      ]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-7" }, [
                        _vm._v(
                          _vm._s(
                            _vm.detalle_ingreso.usuario.funcionario.nombre +
                              " " +
                              _vm.detalle_ingreso.usuario.funcionario.apellido
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("dt", { staticClass: "col-md-5" }, [
                        _vm._v("Proveedor:")
                      ]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-7" }, [
                        _vm._v(_vm._s(_vm.detalle_ingreso.proveedor.nombre))
                      ]),
                      _vm._v(" "),
                      _c("dt", { staticClass: "col-md-5" }, [
                        _vm._v("Fecha de ingreso:")
                      ]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-7" }, [
                        _vm._v(
                          _vm._s(
                            _vm._f("dateformat")(_vm.detalle_ingreso.created_at)
                          )
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-3" }, [
                    _c("dl", { staticClass: "row" }, [
                      _c("dt", { staticClass: "col-md-6" }),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-6" }, [
                        _c("h4", [
                          _c("strong", [
                            _vm._v(
                              "NIA: " + _vm._s(_vm.detalle_ingreso.nro_ingreso)
                            )
                          ])
                        ]),
                        _c("small", [
                          _vm._v(
                            _vm._s(
                              _vm._f("dateformat")(
                                _vm.detalle_ingreso.created_at
                              )
                            )
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("dt", { staticClass: "col-md-5" }, [
                        _vm._v("N° Acta:")
                      ]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-md-7" }, [
                        _vm._v(_vm._s(_vm.detalle_ingreso.donacion.nro_acta))
                      ])
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _c("table", { staticClass: "table table-sm table-striped" }, [
              _vm._m(4),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.detalle_ingreso.detalleingresos, function(
                  item,
                  index
                ) {
                  return _c("tr", { key: index }, [
                    _c("td", [_vm._v(_vm._s(index + 1) + ".")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.lote.articulo.nombre))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(item.lote.articulo.unidad_medida.nombre))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.cantidad.toFixed(2)))]),
                    _vm._v(" "),
                    _c("td", [
                      _c("b", [_vm._v("Bs. ")]),
                      _vm._v(
                        _vm._s((item.cantidad * item.lote.precio_u).toFixed(2))
                      )
                    ])
                  ])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("dl", { staticClass: "row pt-3" }, [
              _c("dt", { staticClass: "col-md-3" }, [_vm._v("Total:")]),
              _vm._v(" "),
              _c("dd", { staticClass: "col-md-7 text-right" }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "border-bottom": "2px dotted #000",
                      "text-decoration": "none"
                    }
                  },
                  [
                    _vm._v(
                      _vm._s(
                        _vm._f("toWords")(Math.trunc(_vm.detalle_ingreso.total))
                      ) +
                        " y " +
                        _vm._s(
                          (
                            _vm.detalle_ingreso.total -
                            Math.floor(_vm.detalle_ingreso.total)
                          ).toFixed(2)
                        ) +
                        "/100 "
                    ),
                    _c("b", [_vm._v("  Bs.")])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-2 text-center" }, [
                _c("u", [_vm._v(_vm._s(_vm.detalle_ingreso.total.toFixed(2)))])
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row justify-content-start" },
              [
                _c(
                  "el-button",
                  {
                    attrs: { type: "primary", icon: "el-icon-printer" },
                    on: {
                      click: function($event) {
                        return _vm.Print()
                      }
                    }
                  },
                  [_vm._v("Imprimir")]
                )
              ],
              1
            )
          ]
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
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Detalle de ingreso")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4 invoice-col" }, [
      _c("dl", { staticClass: "row" }, [
        _c("dt", { staticClass: "col-md-6" }, [_vm._v(" ")]),
        _vm._v(" "),
        _c("dd", { staticClass: "col-md-6" }, [_vm._v(" ")]),
        _vm._v(" "),
        _c("dt", { staticClass: "col-md-6" }, [_vm._v("Formulario:")]),
        _vm._v(" "),
        _c("dd", { staticClass: "col-md-6" }, [_vm._v(" INGRESO INICIAL ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4 invoice-col" }, [
      _c("dl", { staticClass: "row" }, [
        _c("dt", { staticClass: "col-md-6" }, [_vm._v(" ")]),
        _vm._v(" "),
        _c("dd", { staticClass: "col-md-6" }, [_vm._v(" ")]),
        _vm._v(" "),
        _c("dt", { staticClass: "col-md-6" }, [_vm._v(" ")]),
        _vm._v(" "),
        _c("dd", { staticClass: "col-md-6" }, [_vm._v(" ")]),
        _vm._v(" "),
        _c("dt", { staticClass: "col-md-6" }, [_vm._v("Formulario:")]),
        _vm._v(" "),
        _c("dd", { staticClass: "col-md-6" }, [_vm._v(" Acta de donación ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "text-center" }, [
      _c("strong", [_vm._v("Detalle Ingreso")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "10px" } }, [_vm._v("N°")]),
        _vm._v(" "),
        _c("th", [_vm._v("Articulo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Medida")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("th", [_vm._v("Subtotal")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/ingreso/ViewDetails.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/ingreso/ViewDetails.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewDetails_vue_vue_type_template_id_e1a9eea0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewDetails.vue?vue&type=template&id=e1a9eea0& */ "./resources/js/views/ingreso/ViewDetails.vue?vue&type=template&id=e1a9eea0&");
/* harmony import */ var _ViewDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewDetails.vue?vue&type=script&lang=js& */ "./resources/js/views/ingreso/ViewDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewDetails_vue_vue_type_template_id_e1a9eea0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewDetails_vue_vue_type_template_id_e1a9eea0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ingreso/ViewDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ingreso/ViewDetails.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/ingreso/ViewDetails.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ingreso/ViewDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ingreso/ViewDetails.vue?vue&type=template&id=e1a9eea0&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/ingreso/ViewDetails.vue?vue&type=template&id=e1a9eea0& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDetails_vue_vue_type_template_id_e1a9eea0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewDetails.vue?vue&type=template&id=e1a9eea0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ingreso/ViewDetails.vue?vue&type=template&id=e1a9eea0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDetails_vue_vue_type_template_id_e1a9eea0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewDetails_vue_vue_type_template_id_e1a9eea0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);