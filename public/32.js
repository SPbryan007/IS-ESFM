(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000]
        }
      },
      series: [{
        name: 'Ingresos',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }, {
        name: 'Salidas',
        data: [30, 40, 45, 50, 49, 60, 70, 100]
      }]
    };
  }
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
      _c("div", { staticClass: "container-fluid" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header border-0" }, [
                _vm._v(
                  "\n                          Ingresos y salida  gestion 2020\n                    "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c("apexcharts", {
                    attrs: {
                      width: "550",
                      type: "bar",
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
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header border-0" }, [
                _vm._v(
                  "\n                        Ingresos y salida  gestion 2020\n                    "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c("apexchart", {
                    attrs: {
                      type: "donut",
                      options: _vm.chartOptions,
                      series: _vm.series
                    }
                  })
                ],
                1
              )
            ])
          ])
        ])
      ])
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
            _c("h1", { staticClass: "m-0 text-dark" }, [_vm._v("Dashboard")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Home")])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Dashboard v1")
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-3 col-6" }, [
        _c("div", { staticClass: "small-box bg-info" }, [
          _c("div", { staticClass: "inner" }, [
            _c("h3", [_vm._v("150")]),
            _vm._v(" "),
            _c("p", [_vm._v("Ingresos")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "icon" }, [
            _c("i", { staticClass: "fas fa-bag" })
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "small-box-footer", attrs: { href: "#" } }, [
            _vm._v("Ver mas.. "),
            _c("i", { staticClass: "fas fa-arrow-circle-right" })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3 col-6" }, [
        _c("div", { staticClass: "small-box bg-success" }, [
          _c("div", { staticClass: "inner" }, [
            _c("h3", [
              _vm._v("53"),
              _c("sup", { staticStyle: { "font-size": "20px" } }, [_vm._v("%")])
            ]),
            _vm._v(" "),
            _c("p", [_vm._v("Bounce Rate")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "icon" }, [
            _c("i", { staticClass: "ion ion-stats-bars" })
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "small-box-footer", attrs: { href: "#" } }, [
            _vm._v("More info "),
            _c("i", { staticClass: "fas fa-arrow-circle-right" })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3 col-6" }, [
        _c("div", { staticClass: "small-box bg-warning" }, [
          _c("div", { staticClass: "inner" }, [
            _c("h3", [_vm._v("44")]),
            _vm._v(" "),
            _c("p", [_vm._v("User Registrations")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "icon" }, [
            _c("i", { staticClass: "ion ion-person-add" })
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "small-box-footer", attrs: { href: "#" } }, [
            _vm._v("More info "),
            _c("i", { staticClass: "fas fa-arrow-circle-right" })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3 col-6" }, [
        _c("div", { staticClass: "small-box bg-danger" }, [
          _c("div", { staticClass: "inner" }, [
            _c("h3", [_vm._v("65")]),
            _vm._v(" "),
            _c("p", [_vm._v("Unique Visitors")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "icon" }, [
            _c("i", { staticClass: "ion ion-pie-graph" })
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "small-box-footer", attrs: { href: "#" } }, [
            _vm._v("More info "),
            _c("i", { staticClass: "fas fa-arrow-circle-right" })
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