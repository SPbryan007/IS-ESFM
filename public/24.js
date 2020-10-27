(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ContentComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ContentComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      headers: [{
        key: "Nit",
        "with": "20%",
        sortable: true
      }, {
        key: "Nombre",
        "with": "20%",
        sortable: true
      }, {
        key: "Direccion",
        "with": "20%",
        sortable: false
      }, {
        key: "Telefono",
        "with": "20%",
        sortable: false
      }, {
        key: "Responsable",
        "with": "20%",
        sortable: true
      }, {
        key: "Accion",
        "with": "20%",
        sortable: false
      }],
      data: [{
        Nit: "100003256485",
        Nombre: "DISTRIBUIDORA DE GAS GLP VIRGE DE GUADALUPE",
        Direccion: "Av.JAIME MENDOZA ESQ. HUALLPARIMACHI",
        Telefono: "758589652",
        Responsable: "Rosita sanchez"
      }, {
        Nit: "2003256485",
        Nombre: "Copacabana",
        Direccion: "Calle olal",
        Telefono: "758589652",
        Responsable: "Melchor fernandez"
      }, {
        Nit: "300003256485",
        Nombre: "Santa cruz",
        Direccion: "Calle olal",
        Telefono: "758589652",
        Responsable: "Juan baptista"
      }, {
        Nit: "400003256485",
        Nombre: "Juventus",
        Direccion: "Calle olaassssssssssssssssssssssssssssdasdasdasdsal",
        Telefono: "758589652",
        Responsable: "Sosa"
      }],
      defaultSortDir: "desc",
      InitialSort: {
        sortBy: "Nombre",
        dir: "asc"
      },
      currentSortDir: "",
      currentSortBy: ""
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
      _c(
        "div",
        { staticClass: "container-fluid" },
        [
          _c(
            "el-table",
            {
              attrs: {
                border: true,
                data: _vm.data,
                "default-sort": { prop: "Nit", order: "descending" }
              }
            },
            [
              _c("el-table-column", {
                attrs: {
                  prop: "Nit",
                  label: "Nit",
                  sortable: "",
                  resizable: true
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  prop: "Nombre",
                  label: "Nombre",
                  sortable: "",
                  resizable: true
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  prop: "Direccion",
                  label: "Dirección",
                  sortable: "",
                  resizable: true
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "Telefono", label: "Telefono", resizable: true }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  prop: "Responsable",
                  label: "Responsable",
                  sortable: "",
                  resizable: true
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Accion", resizable: true },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c(
                          "el-button",
                          {
                            attrs: { size: "mini" },
                            on: {
                              click: function($event) {
                                return _vm.handleEdit(scope.$index, scope.row)
                              }
                            }
                          },
                          [_vm._v("Edit")]
                        ),
                        _vm._v(" "),
                        _c(
                          "el-button",
                          {
                            attrs: { size: "mini", type: "danger" },
                            on: {
                              click: function($event) {
                                return _vm.handleDelete(scope.$index, scope.row)
                              }
                            }
                          },
                          [_vm._v("Delete")]
                        )
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
    _vm._v("\n  " + _vm._s(_vm.$router.options.routes[3]) + "\n")
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