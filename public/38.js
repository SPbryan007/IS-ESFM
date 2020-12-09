(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{379:function(e,t,r){"use strict";r.r(t);var o=r(1),a=r(2);r(4);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var n={data:function(){return{rules:{nombre:[{required:!0,message:"Este campo es obligatorio",trigger:"blur"},{min:3,message:"Debe contener al menos 3 letras.",trigger:"blur"}],apellido:[{required:!0,message:"Este campo es obligatorio",trigger:"blur"},{min:3,message:"Debe contener al menos 3 letras.",trigger:"blur"}],documento:[{required:!0,message:"Este campo es obligatorio",trigger:"blur"},{min:3,message:"Debe contener al menos 6 letras.",trigger:"blur"}]}}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(o.e)("funcionario",["data_form","loading_form","alert"])),methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;a.a.dispatch("funcionario/addItem",{message:t.$message,progress:t.$Progress})}))},cancelForm:function(e){this.$refs[e].resetFields(),this.$router.go(-1)},goBack:function(){this.$router.go(-1)}}},s=r(3),c=Object(s.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-md-12"},[e.alert.show?r("el-alert",{attrs:{title:e.alert.title,type:e.alert.color,description:e.alert.message,"show-icon":"",closable:""},on:{close:function(t){e.alert.show=!1}}}):e._e(),e._v(" "),r("div",{staticClass:"row justify-content-between mb-4  mr-1 ml-1  mt-4"},[r("div",{staticClass:"pull-lef"},[r("el-page-header",{staticClass:"mt-2",attrs:{content:"Funcionario"},on:{back:e.goBack}})],1),e._v(" "),r("div",{staticClass:"pull-right"})]),e._v(" "),r("div",{staticClass:"card"},[e._m(0),e._v(" "),r("div",{staticClass:"card-body"},[r("el-form",{ref:"FuncionarioAddForm",staticClass:"labeles",attrs:{model:e.data_form,rules:e.rules,"label-width":"180px"}},[r("el-form-item",{attrs:{label:"Nombre :",prop:"nombre"}},[r("el-input",{staticStyle:{width:"400px"},model:{value:e.data_form.nombre,callback:function(t){e.$set(e.data_form,"nombre",t)},expression:"data_form.nombre"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Apellido :",prop:"apellido"}},[r("el-input",{staticStyle:{width:"400px"},model:{value:e.data_form.apellido,callback:function(t){e.$set(e.data_form,"apellido",t)},expression:"data_form.apellido"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"C.I. :",prop:"documento"}},[r("el-input",{staticStyle:{width:"200px"},model:{value:e.data_form.documento,callback:function(t){e.$set(e.data_form,"documento",t)},expression:"data_form.documento"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Telefono :",prop:"telefono"}},[r("el-input",{staticStyle:{width:"150px"},model:{value:e.data_form.telefono,callback:function(t){e.$set(e.data_form,"telefono",t)},expression:"data_form.telefono"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Direccion :",prop:"direccion"}},[r("el-input",{staticStyle:{width:"350px"},model:{value:e.data_form.direccion,callback:function(t){e.$set(e.data_form,"direccion",t)},expression:"data_form.direccion"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary",loading:e.loading_form},on:{click:function(t){return e.submitForm("FuncionarioAddForm")}}},[e._v("\n                        Registar\n                        "),r("i",{staticClass:"fas fa-save"})]),e._v(" "),r("el-button",{on:{click:function(t){return e.cancelForm("FuncionarioAddForm")}}},[e._v("Cancelar")])],1)],1)],1)])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-header border-0"},[t("h3",{staticClass:"card-title"},[this._v("Registrar funcionario")]),this._v(" "),t("div",{staticClass:"card-tools"})])}],!1,null,null,null);t.default=c.exports}}]);