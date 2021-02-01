(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/apexcharts/dist/locales/es.json":
/*!******************************************************!*\
  !*** ./node_modules/apexcharts/dist/locales/es.json ***!
  \******************************************************/
/*! exports provided: name, options, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"es\",\"options\":{\"months\":[\"Enero\",\"Febrero\",\"Marzo\",\"Abril\",\"Mayo\",\"Junio\",\"Julio\",\"Agosto\",\"Septiembre\",\"Octubre\",\"Noviembre\",\"Diciembre\"],\"shortMonths\":[\"Ene\",\"Feb\",\"Mar\",\"Abr\",\"May\",\"Jun\",\"Jul\",\"Ago\",\"Sep\",\"Oct\",\"Nov\",\"Dic\"],\"days\":[\"Domingo\",\"Lunes\",\"Martes\",\"Miércoles\",\"Jueves\",\"Viernes\",\"Sábado\"],\"shortDays\":[\"Dom\",\"Lun\",\"Mar\",\"Mie\",\"Jue\",\"Vie\",\"Sab\"],\"toolbar\":{\"exportToSVG\":\"Descargar SVG\",\"exportToPNG\":\"Descargar PNG\",\"exportToCSV\":\"Descargar CSV\",\"menu\":\"Menu\",\"selection\":\"Seleccionar\",\"selectionZoom\":\"Seleccionar Zoom\",\"zoomIn\":\"Aumentar\",\"zoomOut\":\"Disminuir\",\"pan\":\"Navegación\",\"reset\":\"Reiniciar Zoom\"}}}");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ContentComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ContentComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({//   components: {
  //       apexcharts: VueApexCharts,
  //   },
  // data() {
  //   return {
  //       data:null,
  //       IOSseries: [{
  //           name: 'Ingresos',
  //           data: []
  //       }, {
  //           name: 'Salidas',
  //           data: []
  //       }],
  //       IOSChartOptions: {
  //           chart: {
  //               type: 'bar',
  //               height: 350
  //           },
  //           title: {
  //               text: 'Ingresos y salidas mensuales',
  //               align: 'left'
  //           },
  //           subtitle: {
  //               text: 'Expresado en Bolivianos',
  //               align: 'left'
  //           },
  //           plotOptions: {
  //               bar: {
  //                   horizontal: false,
  //                   columnWidth: '55%',
  //                   endingShape: 'rounded'
  //               },
  //           },
  //           dataLabels: {
  //               enabled: false
  //           },
  //           stroke: {
  //               show: true,
  //               width: 2,
  //               colors: ['transparent']
  //           },
  //           xaxis: {
  //               categories: ['Ene','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dic'],
  //           },
  //           yaxis: {
  //               title: {
  //                   text: 'Bs'
  //               }
  //           },
  //           fill: {
  //               opacity: 1
  //           },
  //           tooltip: {
  //               y: {
  //                   formatter: function (val) {
  //                       return "Bs " + val;
  //                   }
  //               }
  //           }
  //       },
  //
  //       LineStockSeries: [],
  //       LineStockChartOptions: {
  //           chart: {
  //               width: 480,
  //               height:350,
  //               type: 'pie',
  //           },
  //
  //           labels: ['Linea 1', 'Linea 2', 'Linea 3',],
  //           responsive: [{
  //               breakpoint: 480,
  //               options: {
  //                   chart: {
  //                       width: 200
  //                   },
  //                   legend: {
  //                       position: 'bottom'
  //                   }
  //               }
  //           }]
  //       },
  //
  //       IOAreaSeries: [{
  //           name:'Saldo',
  //           data:[]
  //       }],
  //       IOAreachartOptions: {
  //           chart: {
  //               locales:[es],
  //               defaultLocale:'es',
  //               type: 'area',
  //               height: 350,
  //               zoom: {
  //                   enabled: false
  //               }
  //           },
  //           dataLabels: {
  //               enabled: false
  //           },
  //           stroke: {
  //               curve: 'straight'
  //           },
  //
  //           title: {
  //               text: 'Flujo de entradas y salidas en el tiempo',
  //               align: 'left'
  //           },
  //           subtitle: {
  //               text: 'Expresado en Bolivianos',
  //               align: 'left'
  //           },
  //           //labels: ['12-10-2020','12-12-2020','12-15-2020','12-16-2020','12-20-2020'],
  //           xaxis: {
  //               format: 'dd/MM',
  //               type: 'datetime',
  //               lang:'es',
  //               categories: []
  //           },
  //           yaxis: {
  //               opposite: true
  //           },
  //           legend: {
  //               horizontalAlign: 'left'
  //           }
  //       },
  //
  //       chartOptions: {
  //           chart: {
  //               id: 'vuechart-example'
  //           },
  //           xaxis: {
  //               categories: ['PAPEL MEMBRETA T/CARTA','ARCHIVADOR TAMANO OFICIO DE COLOR ROJO CON NUMERACION']
  //           }
  //       },
  //       series: [{
  //           name: 'Ingresos',
  //           data: [150]
  //       },
  //           {
  //               name: 'Salidas',
  //               data: [120]
  //           }
  //       ]
  //   };
  // },
  //   created() {
  //       this.$Progress.start();
  //       axios.get('/controller/graphics/dashboard')
  //           .then((resp)=>{
  //               this.data = resp.data;
  //               this.IOAreachartOptions.title.text = 'Flujo de caja '+resp.data.periodo;
  //               resp.data.cash_flow.forEach((e)=>{
  //                   this.IOAreachartOptions.xaxis.categories.push(e.fecha);
  //                   this.IOAreaSeries[0].data.push(e.saldo.toFixed(2))
  //               });
  //               resp.data.stock_linea.forEach((e)=>{
  //                   this.LineStockSeries.push(e.stock);
  //               })
  //               resp.data.ingreso_salida.forEach((e)=>{
  //                   this.IOSseries[0].data.push(e.ingresos.toFixed(2));
  //                   this.IOSseries[1].data.push(e.salidas.toFixed(2));
  //               })
  //               this.$Progress.finish();
  //           }).catch((err)=>{
  //               this.$Progress.fail();
  //            });
  //
  //   },
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ContentComponent.vue?vue&type=template&id=3614aba3&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ContentComponent.vue?vue&type=template&id=3614aba3& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c(
        "div",
        { staticClass: "container-fluid" },
        [
          _c(
            "transition",
            { attrs: { name: "fade", mode: "out-in" } },
            [
              _c(
                "keep-alive",
                [_c("router-view", { attrs: { name: "ViewRouterDashboard" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("vue-progress-bar")
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("h1", { staticClass: "m-0 text-dark" }, [_vm._v("Inicio")])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/ContentComponent.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/ContentComponent.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentComponent_vue_vue_type_template_id_3614aba3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentComponent.vue?vue&type=template&id=3614aba3& */ "./resources/js/views/ContentComponent.vue?vue&type=template&id=3614aba3&");
/* harmony import */ var _ContentComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentComponent.vue?vue&type=script&lang=js& */ "./resources/js/views/ContentComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContentComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContentComponent_vue_vue_type_template_id_3614aba3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContentComponent_vue_vue_type_template_id_3614aba3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ContentComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ContentComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/ContentComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ContentComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ContentComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ContentComponent.vue?vue&type=template&id=3614aba3&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/ContentComponent.vue?vue&type=template&id=3614aba3& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentComponent_vue_vue_type_template_id_3614aba3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ContentComponent.vue?vue&type=template&id=3614aba3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ContentComponent.vue?vue&type=template&id=3614aba3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentComponent_vue_vue_type_template_id_3614aba3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentComponent_vue_vue_type_template_id_3614aba3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);