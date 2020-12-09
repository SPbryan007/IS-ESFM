(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{319:function(t,e,n){"use strict";var a=n(41);n.n(a).a},320:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,'\n.table th,\n.table td {\n    padding: 0.5rem;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6;\n}\nth.sortable {\n    position: relative;\n    cursor: pointer;\n}\nth.sortable::after {\n    font-family: FontAwesome;\n    content: "\\F0DC";\n    position: absolute;\n    right: 8px;\n    color: #999;\n}\nth.sortable.asc::after {\n    content: "\\F0D8";\n}\nth.sortable.desc::after {\n    content: "\\F0D7";\n}\nth.sortable:hover::after {\n    color: #333;\n}\n.el-dropdown-link {\n    cursor: pointer;\n    color: #409eff;\n}\n.el-icon-arrow-down {\n    font-size: 12px;\n}\n.demonstration {\n    display: block;\n    color: #8492a6;\n    font-size: 14px;\n    margin-bottom: 20px;\n}\n',""])},374:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(2);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={data:function(){return{value:!1,color:"success",self:null,pageOfItems:[],sizePerPage:10,perpage:10,labels:{first:"<<",last:">>",previous:"anterior",next:"siguiente"}}},computed:o({},Object(a.e)("solicitante",["items","loading_form","loading_table","alert","data_form"]),{PerPage:function(){return this.perpage?parseInt(this.perpage):25}},Object(a.c)("solicitante",["GET_ITEMS_SOLICITANTE","GET_FILTER_ITEMS"]),{},Object(a.c)("unidad",["GET_FILTER_TAG_UNIDAD"])),methods:o({},Object(a.d)("solicitante",["SET_EDIT_FORM","CLEAR_FORM"]),{refresh:function(){var t=this.$refs;setTimeout((function(){t.jw.setPage(1)}),0)},FilterUnidad:function(t,e){return e.unidad_id===t},OnClickAD:function(t,e){var n=this;this.$confirm("¿ Esta seguro que desea ".concat(e.deleted_at?"activar":"eliminar"," al solicitante ").concat(e.funcionario.nombre," ").concat(e.funcionario.apellido," ?"),"Advertencia",{confirmButtonText:e.deleted_at?"Sí activar":"Sí Eliminar",cancelButtonText:"Cancelar",type:"warning"}).then((function(){n.self=t,r.a.dispatch("solicitante/deleteItem",{id:e.id,message:n.$message,progress:n.$Progress})})).catch((function(){return null}))},OnChangeStatus:function(t,e){alert(t)},onChangePage:function(t){this.pageOfItems=t},goBack:function(){this.$router.go(-1)}}),created:function(){},mounted:function(){r.a.dispatch("solicitante/getItems"),r.a.dispatch("unidad/getItems")}},c=(n(319),n(3)),u=Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-12"},[t.alert.show?n("el-alert",{attrs:{title:t.alert.title,type:t.alert.color,description:t.alert.message,closable:"","show-icon":""},on:{close:function(e){t.alert.show=!1}}}):t._e(),t._v(" "),n("div",{staticClass:"row justify-content-between mb-4 mr-1 ml-1   mt-4"},[n("div",{staticClass:"pull-lef"},[n("h3",[t._v("Solicitantes "),t.loading_table?n("i",{staticClass:"el-icon-loading",staticStyle:{"font-size":"1.3rem"}}):t._e()])]),t._v(" "),n("div",{staticClass:"pull-right"},[n("router-link",{attrs:{to:{name:"addsolicitante"}},nativeOn:{click:function(e){return t.CLEAR_FORM(e)}}},[n("el-button",{attrs:{type:"primary",size:"small"}},[t._v("\n                    Nuevo\n                    "),n("i",{staticClass:"fas fa-plus"})])],1)],1)]),t._v(" "),n("div",{staticClass:"row justify-content-between ml-1",staticStyle:{"margin-bottom":"-20px"}},[n("div",{staticClass:"pull-left"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[n("el-form-item",{attrs:{label:"Mostrar:"}},[n("el-select",{staticStyle:{width:"70px"},on:{change:function(e){return t.refresh()}},model:{value:t.perpage,callback:function(e){t.perpage=e},expression:"perpage"}},t._l([{value:5,label:"5"},{value:10,label:"10"},{value:25,label:"25"},{value:50,label:"50"},{value:100,label:"100"}],(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),n("el-form-item",[n("el-switch",{attrs:{"active-text":"todos","inactive-text":"solo activos"},on:{change:function(e){return t.$store.dispatch("solicitante/getItems")}},model:{value:t.$store.state.solicitante.withTrashed,callback:function(e){t.$set(t.$store.state.solicitante,"withTrashed",e)},expression:"$store.state.solicitante.withTrashed"}})],1)],1)],1),t._v(" "),n("div",{staticClass:"pull-right"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[n("el-form-item",{attrs:{label:"Buscar por:"}},[n("el-input",{attrs:{placeholder:"Nombre, Cargo",clearable:""},model:{value:t.$store.state.solicitante.searchQuery,callback:function(e){t.$set(t.$store.state.solicitante,"searchQuery",e)},expression:"$store.state.solicitante.searchQuery"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1)],1)],1)]),t._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("el-table",{staticStyle:{width:"100%"},attrs:{fit:!0,stripe:"",data:t.pageOfItems,"default-sort":{prop:"id",order:"ascending"}}},[n("el-table-column",{attrs:{type:"index",label:"N°",width:"40"}}),t._v(" "),n("el-table-column",{attrs:{prop:"funcionario.nombre",label:"Nombre",width:"240",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                        "+t._s(e.row.funcionario.nombre+" "+e.row.funcionario.apellido)+"\n                    ")]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"cargo",label:"Cargo",width:"300",sortable:""}}),t._v(" "),n("el-table-column",{attrs:{prop:"unidad.nombre",label:"Unidad",filters:t.GET_FILTER_TAG_UNIDAD,"filter-method":t.FilterUnidad,"filter-placement":"bottom-end",width:"210"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:"warning","disable-transitions":""}},[n("strong",[t._v(t._s(e.row.unidad.nombre))])])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"deleted_at",label:"Estado",width:"100",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:e.row.deleted_at?"warning":"success",effect:"dark"}},[t._v("\n                            "+t._s(e.row.deleted_at?"INACTIVO":"ACTIVO")+"\n                        ")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Operacion"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{disabled:!!e.row.deleted_at,to:{name:"editsolicitante",params:{id:e.row.id}}},nativeOn:{click:function(n){return t.SET_EDIT_FORM(e.row)}}},[n("el-button",{attrs:{disabled:!!e.row.deleted_at,size:"mini"}},[t._v("Editar")])],1),t._v(" "),e.row.deleted_at?t._e():n("el-button",{attrs:{loading:t.loading_form&&e.$index==t.self,type:"danger",size:"mini"},on:{click:function(n){return t.OnClickAD(e.$index,e.row)}}},[t._v("Eliminar")]),t._v(" "),e.row.deleted_at?n("el-button",{attrs:{loading:t.loading_form&&e.$index==t.self,type:"primary",size:"mini"},on:{click:function(n){return t.OnClickAD(e.$index,e.row)}}},[t._v("Activar ")]):t._e()]}}])})],1)],1)]),t._v(" "),n("div",{staticClass:"row justify-content-center mt-4"},[n("jw-pagination",{ref:"jw",attrs:{pageSize:t.PerPage,items:t.GET_FILTER_ITEMS,labels:t.labels},on:{changePage:t.onChangePage}})],1)],1)}),[],!1,null,null,null);e.default=u.exports},41:function(t,e,n){var a=n(320);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(7)(a,r);a.locals&&(t.exports=a.locals)}}]);