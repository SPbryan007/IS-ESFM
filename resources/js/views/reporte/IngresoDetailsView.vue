<template>


    <div class="col-md-12">
        <el-alert
            v-if="alert.show"
            :title="alert.title"
            :type="alert.color"
            :description="alert.message"
            @close="alert.show = false"
            show-icon
            closable
        >
        </el-alert>
        <div class="row justify-content-between mb-4  mr-1 ml-1  mt-4">
            <div class="pull-lef">
                <el-page-header  @back="goBack" content="Reporte Ingresos" class="mt-2"></el-page-header>
            </div>
            <div class="pull-right">
                <!--<el-button
                    type="primary"
                    @click="Print()"
                    icon="el-icon-printer"
                >Imprimir</el-button>-->

                <el-button
                    :disabled="anulated(detalle_ingreso)"
                    type="primary"
                    @click="Print()"
                    icon="el-icon-printer"
                >Imprimir</el-button>
                <el-button
                    :disabled="anulated(detalle_ingreso)"
                    type="danger"
                    @click="exportPDF(detalle_ingreso.nro_ingreso,detalle_ingreso.created_at)"
                ><i class="fas fa-file-pdf"></i> Pdf</el-button>
                <!--                <el-button-->
                <!--                    type="success"-->
                <!--                    @click=""-->

                <!--                > <i class="fas fa-file-excel"></i> Excel</el-button>-->
            </div>
        </div>


        <div class="card">
            <div class="card-body"  ref="table" id="printMe">

                <div v-if="ValidarCompra(detalle_ingreso)" class="row invoice-info">
                    <div class="col-md-5 invoice-col">
                        <dl class="row">
                            <dt class="col-md-5">Ingresado por:</dt>
                            <dd class="col-md-7">{{ detalle_ingreso.usuario.funcionario.nombre +' '+ detalle_ingreso.usuario.funcionario.apellido }}</dd>
                            <dt class="col-md-5">Fecha de ingreso:</dt>
                            <dd class="col-md-7">{{ detalle_ingreso.created_at | dateformat }} <b>Hrs:</b> {{ detalle_ingreso.created_at | timeformat }}   </dd>
                            <dt class="col-md-5">NIT:</dt>
                            <dd class="col-md-7">{{ detalle_ingreso.proveedor.nit }}</dd>
                            <dt class="col-md-5">Proveedor:</dt>
                            <dd class="col-md-7">{{ detalle_ingreso.proveedor.nombre }}</dd>
                            <dt class="col-md-5">Fecha solicitud:</dt>
                            <dd class="col-md-7">{{ detalle_ingreso.compra.fecha_solicitud | dateformat }}</dd>
                            <dt class="col-md-5">Observaciones:</dt>
                            <dd class="col-md-7">{{ detalle_ingreso.observacion }}</dd>
                        </dl>
                    </div>
                    <div class="col-md-4 invoice-col">
                        <dl class="row">
                            <dt class="col-md-6">&nbsp</dt>
                            <dd class="col-md-6">&nbsp</dd>
                            <dt class="col-md-6">Tipo comprobante:</dt>
                            <dd class="col-md-6">{{ detalle_ingreso.compra.tipo_comprobante }}</dd>
                            <dt class="col-md-6">N° Factura/Recibo:</dt>
                            <dd class="col-md-6">{{ detalle_ingreso.compra.nro_comprobante }}</dd>
                            <dt class="col-md-6">N° Autorizacion:</dt>
                            <dd class="col-md-6">{{ detalle_ingreso.compra.nro_autorizacion}}</dd>
                            <dt class="col-md-6">Formulario:</dt>
                            <dd class="col-md-6">{{ getFormulario(detalle_ingreso) }}</dd>
                            <!--<dt class="col-md-6">Fecha solicitud:</dt>
                            <dd class="col-md-6">{{ detalle_ingreso.compra.fecha_solicitud }}</dd>-->
                        </dl>
                    </div>
                    <div class="col-md-3">
                        <dl class="row">
                            <dt class="col-md-6"></dt>
                            <dd class="col-md-6"><h4><strong>NIA: {{ detalle_ingreso.nro_ingreso }}</strong></h4></dd>
                            <dt class="col-md-6">&nbsp</dt>
                            <dd class="col-md-6">&nbsp</dd>
                            <dt class="col-md-6">&nbsp</dt>
                            <dd class="col-md-6">&nbsp</dd>
                            <dt class="col-md-6">N° Formulario</dt>
                            <dd class="col-md-6">{{ detalle_ingreso.compra.nro_solicitud }}</dd>
                            <!--<dt class="col-md-6">Fecha solicitud:</dt>
                            <dd class="col-md-6">{{ detalle_ingreso.compra.fecha_solicitud }}</dd>-->
                        </dl>
                    </div>
                    <!-- /.col -->
                </div>

                <div v-if="ValidarInicial(detalle_ingreso)" class="row invoice-info">
                    <div class="col-md-5 invoice-col">
                        <dl class="row">
                            <dt class="col-md-5">Ingresado por:</dt>
                            <dd class="col-md-7">{{ detalle_ingreso.usuario.funcionario.nombre +' '+ detalle_ingreso.usuario.funcionario.apellido }}</dd>
                            <dt class="col-md-5">Fecha de ingreso:</dt>
                            <dd class="col-md-7">{{ detalle_ingreso.created_at | dateformat }}</dd>
                        </dl>
                    </div>
                    <div class="col-md-4 invoice-col">
                        <dl class="row">
                            <dt class="col-md-6">&nbsp</dt>
                            <dd class="col-md-6">&nbsp</dd>
                            <dt class="col-md-6">Formulario:</dt>
                            <dd class="col-md-6"> {{ getFormulario(detalle_ingreso) }} </dd>
                            <!--<dt class="col-md-6">Fecha solicitud:</dt>
                            <dd class="col-md-6">{{ detalle_ingreso.compra.fecha_solicitud }}</dd>-->
                        </dl>
                    </div>
                    <div class="col-md-3">
                        <dl class="row">
                            <dt class="col-md-6"></dt>
                            <dd class="col-md-6"><h4><strong>NIA: {{ detalle_ingreso.nro_ingreso }}</strong></h4><small>{{ detalle_ingreso.created_at | dateformat }}</small></dd>
                            <dt class="col-md-6">&nbsp</dt>
                            <dd class="col-md-6">&nbsp</dd>
                            <!--<dt class="col-md-6">Fecha solicitud:</dt>
                            <dd class="col-md-6">{{ detalle_ingreso.compra.fecha_solicitud }}</dd>-->
                        </dl>
                    </div>
                    <!-- /.col -->
                </div>

                <div v-if="ValidarDonacion(detalle_ingreso)" class="row invoice-info">
                    <div class="col-md-5 invoice-col">
                        <dl class="row">
                            <dt class="col-md-5">Ingresado por:</dt>
                            <dd class="col-md-7">{{ detalle_ingreso.usuario.funcionario.nombre +' '+ detalle_ingreso.usuario.funcionario.apellido }}</dd>
                            <dt class="col-md-5">Proveedor:</dt>
                            <dd class="col-md-7">{{ detalle_ingreso.proveedor.nombre }}</dd>
                            <dt class="col-md-5">NIT:</dt>
                            <dd class="col-md-7">{{ detalle_ingreso.proveedor.nit }}</dd>
                            <dt class="col-md-5">Fecha de ingreso:</dt>
                            <dd class="col-md-7">{{ detalle_ingreso.created_at | dateformat }}  <b>Hrs:</b>  {{ detalle_ingreso.created_at | timeformat }}</dd>
                            <dt class="col-md-5">Observaciones:</dt>
                            <dd class="col-md-7">{{ detalle_ingreso.observacion }}</dd>
                        </dl>
                    </div>
                    <div class="col-md-4 invoice-col">
                        <dl class="row">
                            <dt class="col-md-6">&nbsp</dt>
                            <dd class="col-md-6">&nbsp</dd>
                            <dt class="col-md-6">&nbsp</dt>
                            <dd class="col-md-6">&nbsp</dd>
                            <dt class="col-md-4">Formulario:</dt>
                            <dd class="col-md-8"> {{ getFormulario(detalle_ingreso) }}</dd>
                            <dt class="col-md-6">Fecha acta:</dt>
                            <dd class="col-md-6">{{ detalle_ingreso.donacion.fecha_acta | dateformat }}</dd>
                        </dl>
                    </div>
                    <div class="col-md-3">
                        <dl class="row">
                            <dt class="col-md-6"></dt>
                            <dd class="col-md-6"><h4><strong>NIA: {{ detalle_ingreso.nro_ingreso }}</strong></h4><small>{{ detalle_ingreso.created_at | dateformat }}</small></dd>
                            <dt class="col-md-4">N° Acta:</dt>
                            <dd class="col-md-8">{{ detalle_ingreso.donacion.nro_acta }}</dd>

                        </dl>
                    </div>
                    <!-- /.col -->
                </div>

                <div class="row justify-content-between ml-1" style="margin-bottom:-20px">
                    <div class="pull-left">
                        <el-form :inline="true" class="demo-form-inline" >
                            <el-form-item label="Mostrar:">
                                <el-select
                                    style="width: 70px"
                                    v-model="perpage"
                                    @change="refresh()"
                                    size="small"
                                >
                                    <el-option
                                        v-for="item in [
                                                  { value: 5, label: '5' },
                                                  { value: 10, label: '10' },
                                                  { value: 25, label: '25' },
                                                  { value: 50, label: '50' },
                                                  { value: 100, label: '100' },
                                            ]"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    ></el-option>
                                </el-select>
                            </el-form-item>

                        </el-form>

                    </div>
                    <div class="pull-right">
                        <el-form :inline="true" class="demo-form-inline">
                            <el-form-item label="Buscar por:">
                                <el-input
                                    size="small"
                                    placeholder="Código, Articulo"
                                    v-model="$store.state.ingreso.searchQueryIngresoViewDetails"
                                    clearable
                                >
                                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                                </el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
                <h4 class="text-center"> <strong>Detalle Ingreso  <span  v-if="anulated(detalle_ingreso)" class="badge badge-danger">ANULADO</span></strong></h4>
                <table class="table table-sm table-striped">
                    <thead>
                    <tr>
                        <th style="width: 10px">N°</th>
                        <th>Codigo</th>
                        <th>Articulo</th>
                        <th>Marca</th>
                        <th>Medida</th>
                        <th>Precio U.</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,index) in pageOfItems" :key="index">
                        <td>{{ index+1 }}.</td>
                        <th>{{ item.lote.articulo.codigo }}</th>
                        <td>{{ item.lote.articulo.nombre }}</td>
                        <td>{{ !item.lote.marca ? '-' : item.lote.marca }}</td>
                        <td>{{ !item.lote.unidad_medida ? '-' : item.lote.unidad_medida.nombre }}</td>
                        <td>{{ (item.lote.precio_u).toFixed(2) }}</td>
                        <td>{{ (item.cantidad).toFixed(2) }}</td>
                        <td><b>Bs. </b>{{ (item.cantidad * item.lote.precio_u).toFixed(2) }}</td>
                    </tr>

                    </tbody>
                </table>
                <dl class="row pt-3">
                    <dt class="col-md-3">Total:</dt>
                    <dd class="col-md-7 text-right"><span style="border-bottom: 2px dotted #000;text-decoration: none;">{{ Math.trunc(detalle_ingreso? detalle_ingreso.total : 0 ) | toWords }} con {{ ( detalle_ingreso? detalle_ingreso.total : 0  - Math.floor(detalle_ingreso? detalle_ingreso.total : 0 ) ) }}/100 <b>  Bs.</b></span></dd>
                    <div class="col-md-2 text-center"><u>{{ (detalle_ingreso? detalle_ingreso.total : 0 ).toFixed(2) }}</u></div>
                </dl>

                <!--  <div class="row">
                      <div class="">
                         <b> <strong>Total:</strong></b>
                          <span style="border-bottom: 1px dotted #000;text-decoration: none;">
                              {{ numero | toWords }}
                          </span>
                      </div>
                  </div>-->
            </div>

        </div>
        <div class="row justify-content-center mt-4">
            <jw-pagination
                ref="jw"
                :pageSize="PerPage"
                :items="GET_FILTER_VIEW_DETALLE_INGRESOS"
                :labels="labels"
                @changePage="onChangePage"
            ></jw-pagination>
        </div>
        <br><br>
        <!--        <br>-->
        <!--        <div class="row justify-content-start">-->
        <!--           -->
        <!--        </div>-->


    </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import store from "../../store/index";
import moment from "moment";
import { router } from "../../routes";
export default {
    data() {
        return {
            pageOfItems: [],
            sizePerPage: 10,
            perpage: 5,
            labels: {
                first: "<<",
                last: ">>",
                previous: "anterior",
                next: "siguiente"
            },


        };
    },
    computed: {
        PerPage: function() {
            return this.perpage ? parseInt(this.perpage) : 25;
        },
        ...mapState("ingreso", [
            "detalle_ingreso",
            "data_form",
            "loading_form",
            "alert"
        ]),
        ...mapGetters("proveedor", ["GET_ITEMS_PROVEEDOR"]),
        ...mapGetters("ingreso", ["GET_FILTER_VIEW_DETALLE_INGRESOS"]),
    },
    methods: {
        getFormulario(item){
            if(item.tipo_ingreso == 'INV_INICIAL'){
                return 'Inv. Inicial'
            }
            if(item.compra){
                switch (item.compra.tipo_compra) {
                    case 'SER':
                        return 'ORDEN DE SERVICIO';
                    case 'COM':
                        return 'ORDEN DE COMPRA';
                    case 'CON':
                        return 'CONTRATO';
                    case 'CCH':
                        return 'CAJA CHICA'
                }
            }
            if(item.donacion){
                if(item.donacion.tipo_donacion == 'ADO'){
                    return 'ACTA DE DONACIÓN';
                }else{
                    return 'DONACIÓN POR CONVENIO';
                }
            }
        },
        anulated(item){
            if(item){
                if(item.deleted_at){
                    return true;
                }else{
                    return false;
                }
            }
            return false;
        },
        ValidarCompra(item){
            if(item){
                return item.tipo_ingreso== 'Compra';
            }
        },
        ValidarInicial(item){
            if(item){
                return item.tipo_ingreso == 'INV_INICIAL';
            }
        },
        ValidarDonacion(item){
            if(item){
                return item.tipo_ingreso == 'Donacion';
            }
        },
        Print(){
            window.open('http://almacen.esfm/controller/ingreso/imprimir/'+this.$route.params.id, '_blank');
        },
        exportPDF(nro,date){
            axios.get('/controller/ingreso/export_pdf/'+this.$route.params.id, { responseType: 'blob' })
                .then(response => {
                    const blob = new Blob([response.data], { type: 'application/pdf' })
                    const link = document.createElement('a')
                    link.href = URL.createObjectURL(blob)
                    link.download = 'NIA-'+nro+'-'+moment(date).format("DD/MM/YYYY")
                    link.click()
                    URL.revokeObjectURL(link.href)
                }).catch((err)=>{
                console.log('error excel');
            });
        },
        goBack() {
            router.push({name:'reporte_ingresos'});
            // this.$router.go(-1);
        },
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        },
        refresh() {
            let self = this.$refs;
            setTimeout(() => {
                self.jw.setPage(1);
            }, 0);
        },
    },
    mounted() {
        store.dispatch('login/getUser');
        store.dispatch("proveedor/getItems");
    },
};
</script>

