(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{408:function(e,t,r){"use strict";r.r(t);var i=r(1),a=r(2),o=r(4);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c={data:function(){return{pageOfItems:[],sizePerPage:5,perpage:5,labels:{first:"<<",last:">>",previous:"anterior",next:"siguiente"},dialogAddDetails:!1,detalles_form:{articulo:null,cantidad:1,precio:0},rules:{articulo:[{required:!0,message:"Debe seleccionar un articulo",trigger:"change"}],cantidad:[{required:!0,message:"Este campo es obligatorio",trigger:"blur"}],precio:[{required:!0,message:"Este campo es obligatorio",trigger:"blur"}]}}},computed:l({},Object(i.e)("ingreso",["data_form","loading_form","alert"]),{},Object(i.c)("ingreso",["GET_ITEMS_DETALLE_INGRESO","GET_TOTAL_DETALLE_INGRESOS","GET_FILTER_ITEMS_DETAILS"]),{},Object(i.c)("articulo",["GET_ITEMS_ARTICULO"])),methods:l({OnclickAddDialog:function(e,t){a.a.commit("ingreso/ADD_DETALLE_INGRESO",t)}},Object(i.d)("ingreso",["DELETE_DETALLE_INGRESO"]),{findItem:function(e){return a.a.getters["articulo/GET_ITEMS_ARTICULO"].find((function(t){return t.id===e}))},onRegister:function(){var e=this;this.$confirm("¿ Esta seguro de registrar el ingreso ?",{confirmButtonText:"Sí, registrar",cancelButtonText:"Cancelar",type:"warning"}).then((function(){a.a.dispatch("ingreso/addItem",{message:e.$message,progress:e.$Progress})})).catch((function(){return null}))},cancelForm:function(e){this.$refs[e].resetFields(),o.a.push({name:"ingreso"})},onChangePage:function(e){this.pageOfItems=e},goBack:function(){this.$router.go(-1)}}),mounted:function(){a.a.dispatch("articulo/getItems"),a.a.dispatch("articulo/getLotes")}},d=r(3),u=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[r("div",{staticClass:"col-md-12"},[e.alert.show?r("el-alert",{attrs:{title:e.alert.title,type:e.alert.color,description:e.alert.message,"show-icon":"",closable:""},on:{close:function(t){e.alert.show=!1}}}):e._e(),e._v(" "),r("div",{staticClass:"row justify-content-between mb-4  mr-1 ml-1  mt-4"},[r("div",{staticClass:"pull-lef"},[r("el-page-header",{staticClass:"mt-2",attrs:{content:"Ingresos"},on:{back:e.goBack}})],1),e._v(" "),r("div",{staticClass:"pull-right"},[r("el-button",{attrs:{type:"info",size:"",icon:"el-icon-plus"},on:{click:function(t){e.dialogAddDetails=!0}}},[e._v("Agregar")])],1)]),e._v(" "),r("div",{staticClass:"card"},[e._m(0),e._v(" "),r("div",{staticClass:"card-body"},[r("el-dialog",{attrs:{title:"Agregar articulos",visible:e.dialogAddDetails,width:"60%"},on:{"update:visible":function(t){e.dialogAddDetails=t}}},[r("div",{staticClass:"row justify-content-center mt-4"},[r("el-input",{staticStyle:{width:"660px"},attrs:{placeholder:"Filtrar por codigo, articulo",clearable:""},model:{value:e.$store.state.ingreso.searchQueryAddDialog,callback:function(t){e.$set(e.$store.state.ingreso,"searchQueryAddDialog",t)},expression:"$store.state.ingreso.searchQueryAddDialog"}},[r("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),e._v("  \n                          "),r("router-link",{attrs:{to:{name:"additem"}}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"}})],1)],1),e._v(" "),r("el-table",{attrs:{data:e.pageOfItems}},[r("el-table-column",{attrs:{property:"codigo",label:"Codigo",width:"90"}}),e._v(" "),r("el-table-column",{attrs:{property:"nombre",label:"Articulo",width:"370"}}),e._v(" "),r("el-table-column",{attrs:{property:"stock",label:"Disponibles",width:"100"}}),e._v(" "),r("el-table-column",{attrs:{property:"unidad",label:"Medida",width:"200"}}),e._v(" "),r("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"info",size:"mini",icon:"el-icon-plus"},on:{click:function(r){return e.OnclickAddDialog(t.$index,t.row)}}},[e._v("Añadir")])]}}])})],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("jw-pagination",{ref:"jw",attrs:{pageSize:e.perpage,items:e.GET_FILTER_ITEMS_DETAILS,labels:e.labels},on:{changePage:e.onChangePage}})],1)],1),e._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.GET_ITEMS_DETALLE_INGRESO,size:"small"}},[r("el-table-column",{attrs:{type:"index",width:"40",label:"N°"}}),e._v(" "),r("el-table-column",{attrs:{label:"Articulo",width:"410",prop:"articulo"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                              "+e._s(e.findItem(t.row.articulo).nombre)+"\n                          ")]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"Medida",width:"160",prop:"medida"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                              "+e._s(e.findItem(t.row.articulo).unidad_medida.nombre)+"\n                          ")]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"P.U.",width:"80",prop:"precio_u"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                              "+e._s(t.row.precio/t.row.cantidad)+"\n                          ")]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"Cantidad",width:"150",prop:"cantidad"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input-number",{staticStyle:{width:"120px"},attrs:{size:"mini",precision:2,step:1,min:.1},model:{value:t.row.cantidad,callback:function(r){e.$set(t.row,"cantidad",r)},expression:"scope.row.cantidad"}})]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"Sub Total",width:"150",prop:"precio"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input-number",{staticStyle:{width:"120px"},attrs:{size:"mini",precision:2,step:1,min:0},model:{value:t.row.precio,callback:function(r){e.$set(t.row,"precio",r)},expression:"scope.row.precio"}})]}}])}),e._v(" "),r("el-table-column",{attrs:{label:""},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-close"},on:{click:function(r){return e.DELETE_DETALLE_INGRESO(t.row.articulo)}}})]}}])})],1),e._v(" "),r("div",{staticClass:"row justify-content-end mb-4  mr-1 ml-1  mt-4 "},[r("h5",[e._v("\n                          Total: Bs\n                          "),r("strong",[e._v(e._s(e.GET_TOTAL_DETALLE_INGRESOS))])])]),e._v(" "),r("div",{staticClass:"row justify-content-end mb-4  mr-1 ml-1  mt-4"},[r("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.loading_form,expression:"loading_form",modifiers:{fullscreen:!0,lock:!0}}],attrs:{disabled:0==e.data_form.detalle_ingreso.length,type:"primary",size:"",icon:"el-icon-plus"},on:{click:function(t){return e.onRegister()}}},[e._v("Registar")])],1)],1)])],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-header border-0"},[t("h3",{staticClass:"card-title"},[this._v("Registro de ingresos | detalles")]),this._v(" "),t("div",{staticClass:"card-tools"})])}],!1,null,null,null);t.default=u.exports}}]);