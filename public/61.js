(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/unidad/EditView.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/unidad/EditView.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/index */ "./resources/js/store/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes */ "./resources/js/routes.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      rules: {
        nombre: [{
          required: true,
          message: "Este campo es obligatorio",
          trigger: "blur"
        }, {
          min: 3,
          message: "Debe tener mas de 3 letras",
          trigger: "blur"
        }],
        funcionario_id: [{
          required: true,
          message: "Este campo es obligatorio",
          trigger: "change"
        }]
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("unidad", ["data_form", "loading_form", "alert"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("funcionario", ["GET_ITEMS_FUNCIONARIO"])),
  methods: {
    submitForm: function submitForm(form) {
      var _this = this;

      this.$refs[form].validate(function (valid) {
        if (valid) {
          _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("unidad/editItem", {
            message: _this.$message,
            progress: _this.$Progress,
            id: _this.$route.params.id
          }); //router.go(-1);
        } else {
          return false;
        }
      });
    },
    cancelForm: function cancelForm(formName) {
      this.$refs[formName].resetFields();
      this.$router.go(-1);
    },
    goBack: function goBack() {
      this.$router.go(-1);
    }
  },
  created: function created() {
    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('login/getUser');
    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.funcionario.withTrashed = false;
    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("funcionario/getItems");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/unidad/EditView.vue?vue&type=template&id=3b327390&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/unidad/EditView.vue?vue&type=template&id=3b327390& ***!
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
    { staticClass: "col-md-12" },
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
      _c(
        "div",
        { staticClass: "row justify-content-between mb-4  mr-1 ml-1  " },
        [
          _c(
            "div",
            { staticClass: "pull-lef" },
            [
              _c("el-page-header", {
                staticClass: "mt-2",
                attrs: { content: "Unidad" },
                on: { back: _vm.goBack }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "pull-right" })
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c(
              "el-form",
              {
                ref: "UnidadEditForm",
                staticClass: "labeles",
                attrs: {
                  model: _vm.data_form,
                  rules: _vm.rules,
                  "label-width": "180px"
                }
              },
              [
                _c(
                  "el-form-item",
                  { attrs: { label: "Nombre de unidad :", prop: "nombre" } },
                  [
                    _c("el-input", {
                      staticStyle: { width: "300px" },
                      model: {
                        value: _vm.data_form.nombre,
                        callback: function($$v) {
                          _vm.$set(_vm.data_form, "nombre", $$v)
                        },
                        expression: "data_form.nombre"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  { attrs: { label: "Responsable :", prop: "funcionario_id" } },
                  [
                    _c(
                      "el-select",
                      {
                        staticStyle: { width: "400px" },
                        attrs: {
                          filterable: "",
                          placeholder: "Seleccione el funcionario",
                          "loading-text": "buscando..",
                          "no-match-text": "No se encontraron registros"
                        },
                        model: {
                          value: _vm.data_form.funcionario_id,
                          callback: function($$v) {
                            _vm.$set(_vm.data_form, "funcionario_id", $$v)
                          },
                          expression: "data_form.funcionario_id"
                        }
                      },
                      _vm._l(_vm.GET_ITEMS_FUNCIONARIO, function(item, index) {
                        return _c("el-option", {
                          key: index,
                          attrs: {
                            label: item.nombre + " " + item.apellido,
                            value: item.id
                          }
                        })
                      }),
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      { attrs: { to: { name: "addfuncionario" } } },
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
                  "el-form-item",
                  [
                    _c(
                      "el-button",
                      {
                        attrs: { type: "primary", loading: _vm.loading_form },
                        on: {
                          click: function($event) {
                            return _vm.submitForm("UnidadEditForm")
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                        Guardar\n                        "
                        ),
                        _c("i", { staticClass: "fas fa-save" })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        on: {
                          click: function($event) {
                            return _vm.cancelForm("UnidadEditForm")
                          }
                        }
                      },
                      [_vm._v("Cancelar")]
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
      _c("h3", { staticClass: "card-title" }, [
        _vm._v("Registrar nueva unidad")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/unidad/EditView.vue":
/*!************************************************!*\
  !*** ./resources/js/views/unidad/EditView.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditView_vue_vue_type_template_id_3b327390___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditView.vue?vue&type=template&id=3b327390& */ "./resources/js/views/unidad/EditView.vue?vue&type=template&id=3b327390&");
/* harmony import */ var _EditView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditView.vue?vue&type=script&lang=js& */ "./resources/js/views/unidad/EditView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditView_vue_vue_type_template_id_3b327390___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditView_vue_vue_type_template_id_3b327390___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/unidad/EditView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/unidad/EditView.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/unidad/EditView.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/unidad/EditView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/unidad/EditView.vue?vue&type=template&id=3b327390&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/unidad/EditView.vue?vue&type=template&id=3b327390& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditView_vue_vue_type_template_id_3b327390___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditView.vue?vue&type=template&id=3b327390& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/unidad/EditView.vue?vue&type=template&id=3b327390&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditView_vue_vue_type_template_id_3b327390___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditView_vue_vue_type_template_id_3b327390___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);