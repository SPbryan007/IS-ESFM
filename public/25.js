(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{327:function(n,e,t){"use strict";var a=t(45);t.n(a).a},328:function(n,e,t){(n.exports=t(6)(!1)).push([n.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*.table th,*/\n/*.table td {*/\n/*    padding: 0.5rem;*/\n/*    vertical-align: top;*/\n/*    border-top: 1px solid #dee2e6;*/\n/*}*/\n/*th.sortable {*/\n/*    position: relative;*/\n/*    cursor: pointer;*/\n/*}*/\n\n/*th.sortable::after {*/\n/*    font-family: FontAwesome;*/\n/*    content: "\\f0dc";*/\n/*    position: absolute;*/\n/*    right: 8px;*/\n/*    color: #999;*/\n/*}*/\n\n/*th.sortable.asc::after {*/\n/*    content: "\\f0d8";*/\n/*}*/\n\n/*th.sortable.desc::after {*/\n/*    content: "\\f0d7";*/\n/*}*/\n\n/*th.sortable:hover::after {*/\n/*    color: #333;*/\n/*}*/\n/*.el-dropdown-link {*/\n/*    cursor: pointer;*/\n/*    color: #409eff;*/\n/*}*/\n/*.el-icon-arrow-down {*/\n/*    font-size: 12px;*/\n/*}*/\n/*.demonstration {*/\n/*    display: block;*/\n/*    color: #8492a6;*/\n/*    font-size: 14px;*/\n/*    margin-bottom: 20px;*/\n/*}*/\n',""])},382:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t(2);function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var s={name:"ListComponent",data:function(){return{self:null,pageOfItems:[],sizePerPage:10,perpage:5,labels:{first:"<<",last:">>",previous:"anterior",next:"siguiente"}}},computed:o({},Object(a.e)("unidad",["items","loading_table","alert","loading_form"]),{},Object(a.c)("unidad",["GET_FILTER_ITEMS","GET_FILTER_TAG_UNIDAD"]),{PerPage:function(){return this.perpage?parseInt(this.perpage):25}}),methods:o({},Object(a.d)("unidad",["SET_EDIT_FORM","CLEAR_FORM"]),{refresh:function(){var n=this.$refs;setTimeout((function(){n.jw.setPage(1)}),0)},FilterCargo:function(n,e){return e.unidad_id===n},OnClickAD:function(n,e){var t=this;this.$confirm("¿ Esta seguro que desea ".concat(e.deleted_at?"activar":"eliminar"," la unidad ").concat(e.nombre," ?"),"Advertencia",{confirmButtonText:e.deleted_at?"Sí activar":"Sí Eliminar",cancelButtonText:"Cancelar",type:"warning"}).then((function(){t.self=n,r.a.dispatch("unidad/deleteItem",{id:e.id,message:t.$message,progress:t.$Progress})})).catch((function(){return null}))},onChangePage:function(n){this.pageOfItems=n}}),created:function(){this.$store.dispatch("unidad/getItems")}},c=(t(327),t(3)),d=Object(c.a)(s,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"col-md-12"},[n.alert.show?t("el-alert",{attrs:{title:n.alert.title,type:n.alert.color,description:n.alert.message,closable:"","show-icon":""},on:{close:function(e){n.alert.show=!1}}}):n._e(),n._v(" "),t("div",{staticClass:"row justify-content-between mb-4 mr-1 ml-1  mt-4"},[t("div",{staticClass:"pull-lef"},[t("h3",[n._v("Unidades solicitantes  "),n.loading_table?t("i",{staticClass:"el-icon-loading",staticStyle:{"font-size":"1.3rem"}}):n._e()])]),n._v(" "),t("div",{staticClass:"pull-right"},[t("router-link",{attrs:{to:{name:"addunidad"}},nativeOn:{click:function(e){return n.CLEAR_FORM(e)}}},[t("el-button",{attrs:{type:"primary",size:"small"}},[n._v("\n                      Nuevo\n                      "),t("i",{staticClass:"fas fa-plus"})])],1)],1)]),n._v(" "),t("div",{staticClass:"row justify-content-between ml-1",staticStyle:{"margin-bottom":"-20px"}},[t("div",{staticClass:"pull-left"},[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[t("el-form-item",{attrs:{label:"Mostrar:"}},[t("el-select",{staticStyle:{width:"70px"},on:{change:function(e){return n.refresh()}},model:{value:n.perpage,callback:function(e){n.perpage=e},expression:"perpage"}},n._l([{value:5,label:"5"},{value:10,label:"10"},{value:25,label:"25"},{value:50,label:"50"},{value:100,label:"100"}],(function(n){return t("el-option",{key:n.value,attrs:{label:n.label,value:n.value}})})),1)],1),n._v(" "),t("el-form-item",[t("el-switch",{attrs:{"active-text":"todos","inactive-text":"solo activos"},on:{change:function(e){return n.$store.dispatch("unidad/getItems")}},model:{value:n.$store.state.unidad.withTrashed,callback:function(e){n.$set(n.$store.state.unidad,"withTrashed",e)},expression:"$store.state.unidad.withTrashed"}})],1)],1)],1),n._v(" "),t("div",{staticClass:"pull-right"},[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[t("el-form-item",{attrs:{label:"Buscar por:"}},[t("el-input",{attrs:{placeholder:"Nombre, responsable",clearable:""},model:{value:n.$store.state.unidad.searchQuery,callback:function(e){n.$set(n.$store.state.unidad,"searchQuery",e)},expression:"$store.state.unidad.searchQuery"}},[t("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1)],1)],1)]),n._v(" "),t("div",{staticClass:"card"},[t("div",{staticClass:"card-body"},[t("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:n.pageOfItems,"default-sort":{prop:"nombre",order:"descending"}}},[t("el-table-column",{attrs:{type:"index",label:"N°",width:"40"}}),n._v(" "),t("el-table-column",{attrs:{sortable:"",prop:"nombre",label:"Nombre",filters:n.GET_FILTER_TAG_UNIDAD,"filter-method":n.FilterCargo,"filter-placement":"bottom-end",width:"300"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("el-tag",{attrs:{type:"warning","disable-transitions":""}},[t("strong",[n._v(n._s(e.row.nombre))])])]}}])}),n._v(" "),t("el-table-column",{attrs:{prop:"responsable",label:"Responsable",width:"400",sortable:""},scopedSlots:n._u([{key:"default",fn:function(e){return[e.row.funcionario?t("div",[n._v(n._s(e.row.funcionario.nombre+" "+e.row.funcionario.apellido))]):t("div",[t("span",{staticClass:"text-danger"},[n._v(" Sin responsable")])])]}}])}),n._v(" "),t("el-table-column",{attrs:{prop:"deleted_at",label:"Estado",width:"120",sortable:""},scopedSlots:n._u([{key:"default",fn:function(e){return[t("el-tag",{attrs:{type:e.row.deleted_at?"warning":"success",effect:"dark"}},[n._v("\n                              "+n._s(e.row.deleted_at?"INACTIVO":"ACTIVO")+"\n                          ")])]}}])}),n._v(" "),t("el-table-column",{attrs:{label:"Operacion"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("router-link",{attrs:{disabled:!!e.row.deleted_at,to:{name:"editunidad",params:{id:e.row.id}}},nativeOn:{click:function(t){return n.SET_EDIT_FORM(e.row)}}},[t("el-button",{attrs:{disabled:!!e.row.deleted_at,size:"mini"}},[n._v("Editar")])],1),n._v(" "),e.row.deleted_at?n._e():t("el-button",{attrs:{loading:n.loading_form&&e.$index==n.self,type:"danger",size:"mini"},on:{click:function(t){return n.OnClickAD(e.$index,e.row)}}},[n._v("Eliminar")]),n._v(" "),e.row.deleted_at?t("el-button",{attrs:{loading:n.loading_form&&e.$index==n.self,type:"primary",size:"mini"},on:{click:function(t){return n.OnClickAD(e.$index,e.row)}}},[n._v("Activar ")]):n._e()]}}])})],1)],1)]),n._v(" "),t("div",{staticClass:"row justify-content-center mt-4"},[t("jw-pagination",{ref:"jw",attrs:{pageSize:n.PerPage,items:n.GET_FILTER_ITEMS,labels:n.labels},on:{changePage:n.onChangePage}})],1)],1)}),[],!1,null,null,null);e.default=d.exports},45:function(n,e,t){var a=t(328);"string"==typeof a&&(a=[[n.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(7)(a,r);a.locals&&(n.exports=a.locals)}}]);