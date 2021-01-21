(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/settings/MainView.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/settings/MainView.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _this = this;

    var validatePass = function validatePass(rule, value, callback) {
      if (value === '') {
        callback(new Error('Porfavor introduzca una contraseña'));
      } else {
        if (_this.credentials.checkpass !== '') {
          _this.$refs.ruleForm.validateField('checkpass');
        }

        callback();
      }
    };

    var validatePass2 = function validatePass2(rule, value, callback) {
      if (value === '') {
        callback(new Error('Porfavor introduzca la contraseña nuevamente'));
      } else if (value !== _this.credentials.password) {
        callback(new Error('Las contraseñas no coinciden'));
      } else {
        callback();
      }
    };

    return {
      loading: false,
      credentialsForm: false,
      credentials: {
        username: null,
        password: '',
        checkpass: ''
      },
      rules: {
        password: [{
          validator: validatePass,
          trigger: 'blur'
        }],
        checkpass: [{
          validator: validatePass2,
          trigger: 'blur'
        }],
        username: [{
          required: true,
          message: "Debe introducir el un nombre de usuario",
          trigger: "blur"
        }, {
          min: 3,
          message: "Debe tener mas de 3 carácteres",
          trigger: "blur"
        }, {
          min: 3,
          message: "Debe tener menos  30 carácteres",
          trigger: "blur"
        }]
      },
      message_alert: '',
      show_alert: false,
      type_alert: '',
      file: '',
      restoring: false,
      restored: false,
      loading_backup: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("periodo", ["items", "loading_form", "loading_table", "alert", "data_form"]), {
    PerPage: function PerPage() {
      return this.perpage ? parseInt(this.perpage) : 25;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("periodo", ["GET_FILTER_ITEMS"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])('periodo', ['CLEAR_FORM', "SET_EDIT_FORM"]), {
    restore: function restore(formName) {
      var _this2 = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this2.loading = true;

          _this2.$Progress.start();

          axios.put('auth/resetPassword/' + _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.login.user.id_usuario, _this2.credentials).then(function (data) {
            _this2.loading = false;
            _this2.credentialsForm = false;

            _this2.$Progress.finish();

            _this2.$message.success('Datos de acceso cambiados');
          })["catch"](function (err) {
            _this2.loading = false;

            _this2.$Progress.fail();

            _this2.show_alert = true;
            _this2.message_alert = err;
          });
        } else {
          return false;
        }
      });
    },
    backup: function backup() {
      var _this3 = this;

      this.loading_backup = true;
      this.$Progress.start();
      axios.get('/controller/backup', {
        responseType: 'blob'
      }).then(function (response) {
        var blob = new Blob([response.data], {
          type: 'application/sql'
        });
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob); //link.download = 'test'

        link.setAttribute('download', moment__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY-MM-DD HH:mm:ss') + '.sql'); //link.download = 'NIA-'+nro+'-'+moment(date).format("DD/MM/YYYY")

        link.click();
        URL.revokeObjectURL(link.href);

        _this3.$Progress.finish();

        _this3.loading_backup = false;
      })["catch"](function (err) {
        console.log('error', err.response.data.message);

        _this3.$Progress.fail();

        _this3.loading_backup = false;
        _this3.message_alert = err.response.data.message;
        _this3.show_alert = true;
      });
    },
    restoreBackup: function restoreBackup() {
      var _this4 = this;

      this.restoring = true;
      var formData = new FormData();
      formData.append('file', this.file);
      axios.post('/controller/backup/restore', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (data) {
        console.log('DATA', data.data);
        _this4.restoring = false;
        _this4.type_alert = 'success';
        _this4.message_alert = 'Los datos se han restablecido con exito.';
        _this4.show_alert = true;
        alert('copia de seguridad restablecida');
        _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('login/logout');
      })["catch"](function (err) {
        _this4.type_alert = 'error';
        _this4.restoring = false;
        _this4.message_alert = err.response.data.message;
        _this4.show_alert = true;
      });
    },
    onChangeFileUpload: function onChangeFileUpload() {
      this.file = this.$refs.file.files[0];
    }
  }),
  created: function created() {
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('login/getUser');
  },
  mounted: function mounted() {
    this.credentials.username = _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.login.user.username;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/settings/MainView.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/settings/MainView.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.avatar-uploader .el-upload {\n    border: 1px dashed #d9d9d9;\n    border-radius: 6px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n    border-color: #409EFF;\n}\n.avatar-uploader-icon {\n    font-size: 28px;\n    color: #8c939d;\n    width: 178px;\n    height: 178px;\n    line-height: 178px;\n    text-align: center;\n}\n.avatar {\n    width: 178px;\n    height: 178px;\n    display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/settings/MainView.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/settings/MainView.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainView.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/settings/MainView.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/settings/MainView.vue?vue&type=template&id=7c78b49b&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/settings/MainView.vue?vue&type=template&id=7c78b49b& ***!
  \***************************************************************************************************************************************************************************************************************/
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
      _c("br"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row justify-content-between mb-4 mr-1 ml-1" },
        [
          _vm._m(0),
          _vm._v(" "),
          _vm.show_alert
            ? _c("el-alert", {
                attrs: {
                  title:
                    _vm.type_alert == "error"
                      ? "Oops, Algo salió mal"
                      : "Datos restablecidos",
                  type: _vm.type_alert,
                  description: _vm.message_alert,
                  closable: "",
                  "show-icon": ""
                },
                on: {
                  close: function($event) {
                    _vm.show_alert = false
                  }
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container" },
        [
          _vm._m(1),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Crea una copia de seguridad para respaldar los datos del sistema"
            )
          ]),
          _vm._v(" "),
          _c(
            "el-button",
            {
              attrs: { type: "danger", loading: _vm.loading_backup },
              on: { click: _vm.backup }
            },
            [
              _vm._v("Crear nueva copia "),
              _c("i", { staticClass: "el-icon-download el-icon-right" })
            ]
          ),
          _vm._v(" "),
          _c("p", { staticClass: "pt-3" }, [
            _vm._v("Restablece datos respaldados")
          ]),
          _vm._v(" "),
          _c("input", {
            ref: "file",
            staticClass: "btn btn-default",
            attrs: { type: "file", id: "file" },
            on: {
              change: function($event) {
                return _vm.onChangeFileUpload()
              }
            }
          }),
          _vm._v(" "),
          _c(
            "el-button",
            {
              attrs: {
                type: "info",
                disabled: !_vm.file,
                loading: _vm.restoring
              },
              on: { click: _vm.restoreBackup }
            },
            [
              _vm._v("Restablecer "),
              _c("i", { staticClass: "el-icon-upload el-icon-right" })
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container mt-5" },
        [
          _vm._m(2),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Si es tu primera vez en el sistema, debes cambiar tus datos de acceso por defecto."
            )
          ]),
          _vm._v(" "),
          _c(
            "el-button",
            {
              attrs: { type: "primary" },
              on: {
                click: function($event) {
                  _vm.credentialsForm = true
                }
              }
            },
            [
              _vm._v("Cambiar datos de acceso "),
              _c("i", { staticClass: "el-icon-upload el-icon-right" })
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            title: "Cambiar datos de acceso",
            visible: _vm.credentialsForm
          },
          on: {
            "update:visible": function($event) {
              _vm.credentialsForm = $event
            }
          }
        },
        [
          _c(
            "el-form",
            {
              ref: "ruleForm",
              staticClass: "demo-ruleForm",
              attrs: {
                model: _vm.credentials,
                "status-icon": "",
                rules: _vm.rules,
                "label-width": "120px"
              }
            },
            [
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: "Usuario: ",
                    prop: "username",
                    "label-width": "180px"
                  }
                },
                [
                  _c("el-input", {
                    staticStyle: { width: "300px" },
                    model: {
                      value: _vm.credentials.username,
                      callback: function($$v) {
                        _vm.$set(_vm.credentials, "username", $$v)
                      },
                      expression: "credentials.username"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: "Contraseña: ",
                    prop: "password",
                    "label-width": "180px"
                  }
                },
                [
                  _c("el-input", {
                    staticStyle: { width: "200px" },
                    attrs: { type: "password", autocomplete: "off" },
                    model: {
                      value: _vm.credentials.password,
                      callback: function($$v) {
                        _vm.$set(_vm.credentials, "password", $$v)
                      },
                      expression: "credentials.password"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: "Confirmar contraseña: ",
                    prop: "checkpass",
                    "label-width": "180px"
                  }
                },
                [
                  _c("el-input", {
                    staticStyle: { width: "200px" },
                    attrs: { type: "password", autocomplete: "off" },
                    model: {
                      value: _vm.credentials.checkpass,
                      callback: function($$v) {
                        _vm.$set(_vm.credentials, "checkpass", $$v)
                      },
                      expression: "credentials.checkpass"
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
                      attrs: { type: "primary", loading: _vm.loading },
                      on: {
                        click: function($event) {
                          return _vm.restore("ruleForm")
                        }
                      }
                    },
                    [_vm._v("Cambiar")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      on: {
                        click: function($event) {
                          _vm.credentialsForm = false
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
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pull-lef" }, [
      _c("h2", [
        _vm._v("Configuraciones "),
        _c("i", {
          staticClass: "fas fa-cog",
          staticStyle: { "font-size": "20px" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [
      _vm._v("Backups "),
      _c("i", {
        staticClass: "fas fa-history",
        staticStyle: { "font-size": "20px" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [
      _vm._v("Credenciales "),
      _c("i", {
        staticClass: "fas fa-file-invoice",
        staticStyle: { "font-size": "20px" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/settings/MainView.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/settings/MainView.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainView_vue_vue_type_template_id_7c78b49b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainView.vue?vue&type=template&id=7c78b49b& */ "./resources/js/views/settings/MainView.vue?vue&type=template&id=7c78b49b&");
/* harmony import */ var _MainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainView.vue?vue&type=script&lang=js& */ "./resources/js/views/settings/MainView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MainView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainView.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/settings/MainView.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainView_vue_vue_type_template_id_7c78b49b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainView_vue_vue_type_template_id_7c78b49b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/settings/MainView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/settings/MainView.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/settings/MainView.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/settings/MainView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/settings/MainView.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/settings/MainView.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainView.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/settings/MainView.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/settings/MainView.vue?vue&type=template&id=7c78b49b&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/settings/MainView.vue?vue&type=template&id=7c78b49b& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_template_id_7c78b49b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainView.vue?vue&type=template&id=7c78b49b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/settings/MainView.vue?vue&type=template&id=7c78b49b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_template_id_7c78b49b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_template_id_7c78b49b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);