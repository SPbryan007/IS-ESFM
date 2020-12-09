(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{331:function(e,t,a){"use strict";var r=a(47);a.n(r).a},332:function(e,t,a){(e.exports=a(6)(!1)).push([e.i,"\n.table th,\n.table td {\n    padding: 0.5rem;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6;\n}\n.linea{\n    margin-top: 10px;\n    margin-right: 40px;\n}\n",""])},386:function(e,t,a){"use strict";a.r(t);var r=a(1),i=a(2);function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var s={data:function(){return{self:null,pageOfItems:[],sizePerPage:10,perpage:5,labels:{first:"<<",last:">>",previous:"anterior",next:"siguiente"}}},computed:l({},Object(r.e)("articulo",["items","loading_form","loading_table","alert","data_form"]),{PerPage:function(){return this.perpage?parseInt(this.perpage):25}},Object(r.c)("articulo",["GET_FILTER_ITEMS"])),methods:l({},Object(r.d)("articulo",["SET_EDIT_FORM","CLEAR_FORM"]),{refresh:function(){var e=this.$refs;setTimeout((function(){e.jw.setPage(1)}),0)},filterLinea:function(e,t){return t.linea===e},OnClickAD:function(e,t){var a=this;this.$confirm("¿ Esta seguro que desea ".concat(t.deleted_at?"activar":"eliminar"," el articulo ").concat(t.nombre," ?"),"Advertencia",{confirmButtonText:t.deleted_at?"Sí activar":"Sí Eliminar",cancelButtonText:"Cancelar",type:"warning"}).then((function(){a.self=e,i.a.dispatch("articulo/deleteItem",{id:t.id,message:a.$message,progress:a.$Progress})})).catch((function(){return null}))},onChangePage:function(e){this.pageOfItems=e},goBack:function(){this.$router.go(-1)}}),mounted:function(){i.a.dispatch("articulo/getItems")},created:function(){}},c=(a(331),a(3)),u=Object(c.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-12"},[e.alert.show?a("el-alert",{attrs:{title:e.alert.title,type:e.alert.color,description:e.alert.message,closable:"","show-icon":""},on:{close:function(t){e.alert.show=!1}}}):e._e(),e._v(" "),a("div",{staticClass:"row justify-content-between mb-4 mr-1 ml-1   mt-4"},[a("div",{staticClass:"pull-lef"},[a("h3",[e._v("Articulos  "),e.loading_table?a("i",{staticClass:"el-icon-loading",staticStyle:{"font-size":"1.3rem"}}):e._e()])]),e._v(" "),a("div",{staticClass:"pull-right"},[a("router-link",{attrs:{to:{name:"additem"}},nativeOn:{click:function(t){return e.CLEAR_FORM(t)}}},[a("el-button",{attrs:{type:"primary",size:"small"}},[e._v("\n                        Nuevo\n                        "),a("i",{staticClass:"fas fa-plus"})])],1)],1)]),e._v(" "),a("div",{staticClass:"row justify-content-between ml-1",staticStyle:{"margin-bottom":"-20px"}},[a("div",{staticClass:"pull-left"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"Mostrar:"}},[a("el-select",{staticStyle:{width:"70px"},on:{change:function(t){return e.refresh()}},model:{value:e.perpage,callback:function(t){e.perpage=t},expression:"perpage"}},e._l([{value:5,label:"5"},{value:10,label:"10"},{value:25,label:"25"},{value:50,label:"50"},{value:100,label:"100"}],(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",[a("el-switch",{attrs:{"active-text":"todos","inactive-text":"solo activos"},on:{change:function(t){return e.$store.dispatch("articulo/getItems")}},model:{value:e.$store.state.articulo.withTrashed,callback:function(t){e.$set(e.$store.state.articulo,"withTrashed",t)},expression:"$store.state.articulo.withTrashed"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"pull-right"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"Buscar por:"}},[a("el-input",{attrs:{placeholder:"Nombre, código, partida",clearable:""},model:{value:e.$store.state.articulo.searchQuery,callback:function(t){e.$set(e.$store.state.articulo,"searchQuery",t)},expression:"$store.state.articulo.searchQuery"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1)],1)],1)]),e._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("el-table",{staticStyle:{width:"100%"},attrs:{fit:!0,stripe:"",data:e.pageOfItems,"default-sort":{prop:"id",order:"descending"}}},[a("el-table-column",{attrs:{type:"index",label:"N°",width:"40"}}),e._v(" "),a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("p",[a("b",[e._v("Partida :")]),e._v(" "+e._s(t.row.partida.nombre)+"  "+e._s(t.row.partida.codigo))]),e._v(" "),a("p",[a("b",[e._v("Unidad de medida :")]),e._v(" "+e._s(t.row.unidad_medida.nombre+" ("+t.row.unidad_medida.sigla+")"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"codigo",label:"Código",width:"100",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"nombre",label:"Nombre",width:"500",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"linea",label:"Linea",width:"100",filters:[{text:"Linea 1",value:"1"},{text:"Linea 2",value:"2"},{text:"Linea 3",value:"3"}],"filter-method":e.filterLinea,"filter-placement":"bottom-end",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return["3"==t.row.linea?a("el-badge",{staticClass:"linea",attrs:{value:t.row.linea,type:"info"}}):e._e(),e._v(" "),"3"!=t.row.linea?a("el-badge",{staticClass:"linea",attrs:{value:t.row.linea,type:"1"==t.row.linea?"warning":"success"}}):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"deleted_at",label:"Estado",width:"100",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:t.row.deleted_at?"warning":"success",effect:"dark"}},[e._v("\n                                "+e._s(t.row.deleted_at?"INACTIVO":"ACTIVO")+"\n                            ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Operacion"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{attrs:{disabled:t.row.deleted_at,to:{name:"edititem",params:{id:t.row.id}}},nativeOn:{click:function(a){return e.SET_EDIT_FORM(t.row)}}},[a("el-button",{attrs:{disabled:t.row.deleted_at,size:"mini"}},[e._v("Editar")])],1),e._v(" "),t.row.deleted_at?e._e():a("el-button",{attrs:{loading:e.loading_form&&t.$index==e.self,type:"danger",size:"mini"},on:{click:function(a){return e.OnClickAD(t.$index,t.row)}}},[e._v("Eliminar")]),e._v(" "),t.row.deleted_at?a("el-button",{attrs:{loading:e.loading_form&&t.$index==e.self,type:"primary",size:"mini"},on:{click:function(a){return e.OnClickAD(t.$index,t.row)}}},[e._v("Activar ")]):e._e()]}}])})],1)],1)]),e._v(" "),a("div",{staticClass:"row justify-content-center mt-4"},[a("jw-pagination",{ref:"jw",attrs:{pageSize:e.PerPage,items:e.GET_FILTER_ITEMS,labels:e.labels},on:{changePage:e.onChangePage}})],1)],1)}),[],!1,null,null,null);t.default=u.exports},47:function(e,t,a){var r=a(332);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(7)(r,i);r.locals&&(e.exports=r.locals)}}]);