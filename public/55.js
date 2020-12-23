(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      series: [70],
      chartOptions: {
        chart: {
          height: 350,
          type: 'radialBar'
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%'
            }
          }
        },
        labels: ['Disponibles']
      } //
      // series: [100],
      // chartOptions: {
      //     chart: {
      //         height: 350,
      //         type: 'radialBar',
      //         toolbar: {
      //             show: true
      //         }
      //     },
      //     plotOptions: {
      //         radialBar: {
      //             startAngle: -135,
      //             endAngle: 225,
      //             hollow: {
      //                 margin: 0,
      //                 size: '70%',
      //                 background: '#fff',
      //                 image: undefined,
      //                 imageOffsetX: 0,
      //                 imageOffsetY: 0,
      //                 position: 'front',
      //                 dropShadow: {
      //                     enabled: true,
      //                     top: 3,
      //                     left: 0,
      //                     blur: 4,
      //                     opacity: 0.24
      //                 }
      //             },
      //             track: {
      //                 background: '#fff',
      //                 strokeWidth: '67%',
      //                 margin: 0, // margin is in pixels
      //                 dropShadow: {
      //                     enabled: true,
      //                     top: -3,
      //                     left: 0,
      //                     blur: 4,
      //                     opacity: 0.35
      //                 }
      //             },
      //
      //             dataLabels: {
      //                 show: true,
      //                 name: {
      //                     offsetY: -10,
      //                     show: true,
      //                     color: '#888',
      //                     fontSize: '10px'
      //                 },
      //                 value: {
      //                     formatter: function (val) {
      //                         return parseInt(val);
      //                     },
      //                     color: '#111',
      //                     fontSize: '20px',
      //                     show: true,
      //                 }
      //             }
      //         }
      //     },
      //     fill: {
      //         type: 'gradient',
      //         gradient: {
      //             shade: 'dark',
      //             type: 'horizontal',
      //             shadeIntensity: 0.5,
      //             gradientToColors: ['#ABE5A1'],
      //             inverseColors: true,
      //             opacityFrom: 1,
      //             opacityTo: 1,
      //             stops: [0, 100]
      //         }
      //     },
      //     stroke: {
      //         lineCap: 'round'
      //     },
      //     labels: ['Disponibles'],
      // }

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
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _vm._m(1),
            _vm._v(" "),
            _c("apexchart", {
              attrs: {
                type: "radialBar",
                height: "200",
                options: _vm.chartOptions,
                series: _vm.series
              }
            })
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _vm._m(2)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("div", { staticClass: "d-flex justify-content-between" }, [
        _c("h3", { staticClass: "card-title" }, [_vm._v("Lote #2")]),
        _vm._v(" "),
        _c("a", { attrs: { href: "javascript:void(0);" } }, [
          _vm._v("View Report")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex justify-content-between" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Precio Unitario")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header border-0" }, [
        _c("div", { staticClass: "d-flex justify-content-between" }, [
          _c("h3", { staticClass: "card-title" }, [
            _vm._v("Online Store Visitors")
          ]),
          _vm._v(" "),
          _c("a", { attrs: { href: "javascript:void(0);" } }, [
            _vm._v("View Report")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "d-flex" }, [
          _c("p", { staticClass: "d-flex flex-column" }, [
            _c("span", { staticClass: "text-bold text-lg" }, [_vm._v("820")]),
            _vm._v(" "),
            _c("span", [_vm._v("Visitors Over Time")])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "ml-auto d-flex flex-column text-right" }, [
            _c("span", { staticClass: "text-success" }, [
              _c("i", { staticClass: "fas fa-arrow-up" }),
              _vm._v(" 12.5%\n                    ")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "text-muted" }, [
              _vm._v("Since last week")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "position-relative mb-4" }, [
          _c("div", { staticClass: "chartjs-size-monitor" }, [
            _c("div", { staticClass: "chartjs-size-monitor-expand" }, [
              _c("div", {})
            ]),
            _c("div", { staticClass: "chartjs-size-monitor-shrink" }, [
              _c("div", {})
            ])
          ]),
          _vm._v(" "),
          _c("canvas", {
            staticClass: "chartjs-render-monitor",
            staticStyle: { display: "block", height: "200px", width: "814px" },
            attrs: { id: "visitors-chart", height: "250", width: "1017" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex flex-row justify-content-end" }, [
          _c("span", { staticClass: "mr-2" }, [
            _c("i", { staticClass: "fas fa-square text-primary" }),
            _vm._v(" This Week\n                  ")
          ]),
          _vm._v(" "),
          _c("span", [
            _c("i", { staticClass: "fas fa-square text-gray" }),
            _vm._v(" Last Week\n                  ")
          ])
        ])
      ])
    ])
  }
]
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