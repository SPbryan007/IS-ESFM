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
                <el-page-header  @back="goBack" content="Ingresos" class="mt-2"></el-page-header>
            </div>
            <div class="pull-right">
                <!--<el-button
                    type="primary"
                    @click="Print()"
                    icon="el-icon-printer"
                >Imprimir</el-button>-->
                <el-button
                    :disabled="detalle_ingreso.deleted_at"
                    type="primary"
                    @click="Print()"
                    icon="el-icon-printer"
                >Imprimir</el-button>
                <el-button
                    :disabled="detalle_ingreso.deleted_at"
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
            <div class="card-header border-0">

                <h3 class="card-title">Detalle de ingreso</h3>
                <div class="card-tools"></div>
            </div>
            <div class="card-body"  ref="table" id="printMe">
                <div v-if="detalle_ingreso.tipo_ingreso == 'Compra'" class="row invoice-info">
                    <div class="col-md-5 invoice-col">
                        <dl class="row">
                            <dt class="col-md-5">Ingresado por:</dt>
                            <dd class="col-md-7">{{ detalle_ingreso.usuario.funcionario.nombre +' '+ detalle_ingreso.usuario.funcionario.apellido }}</dd>
                            <dt class="col-md-5">Fecha de ingreso:</dt>
                            <dd class="col-md-7">{{ detalle_ingreso.created_at | dateformat }}</dd>
                            <dt class="col-md-5">NIT:</dt>
                            <dd class="col-md-7">{{ detalle_ingreso.proveedor.nit }}</dd>
                            <dt class="col-md-5">Proveedor:</dt>
                            <dd class="col-md-7">{{ detalle_ingreso.proveedor.nombre }}</dd>
                            <dt class="col-md-5">Fecha solicitud:</dt>
                            <dd class="col-md-7">{{ detalle_ingreso.compra.fecha_solicitud | dateformat }}</dd>
                        </dl>
                    </div>
                    <div class="col-md-4 invoice-col">
                        <dl class="row">
                            <dt class="col-md-6">&nbsp</dt>
                            <dd class="col-md-6">&nbsp</dd>
                            <dt class="col-md-6">N° Factura</dt>
                            <dd class="col-md-6">{{ detalle_ingreso.compra.nro_comprobante }}</dd>
                            <dt class="col-md-6">N° Autorizacion:</dt>
                            <dd class="col-md-6">{{ detalle_ingreso.compra.nro_autorizacion}}</dd>
                            <dt class="col-md-6">&nbsp</dt>
                            <dd class="col-md-6">&nbsp</dd>
                            <dt class="col-md-6">Formulario:</dt>
                            <dd class="col-md-6">{{ detalle_ingreso.compra.tipo_compra}}</dd>
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

                <div v-if="detalle_ingreso.tipo_ingreso == 'INV_INICIAL'" class="row invoice-info">
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
                            <dd class="col-md-6"> INGRESO INICIAL </dd>
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

                <div v-if="detalle_ingreso.tipo_ingreso == 'Donacion'" class="row invoice-info">
                    <div class="col-md-5 invoice-col">
                        <dl class="row">
                            <dt class="col-md-5">Ingresado por:</dt>
                            <dd class="col-md-7">{{ detalle_ingreso.usuario.funcionario.nombre +' '+ detalle_ingreso.usuario.funcionario.apellido }}</dd>
                            <dt class="col-md-5">Proveedor:</dt>
                            <dd class="col-md-7">{{ detalle_ingreso.proveedor.nombre }}</dd>
                            <dt class="col-md-5">Fecha de ingreso:</dt>
                            <dd class="col-md-7">{{ detalle_ingreso.created_at | dateformat }}</dd>
                        </dl>
                    </div>
                    <div class="col-md-4 invoice-col">
                        <dl class="row">
                            <dt class="col-md-6">&nbsp</dt>
                            <dd class="col-md-6">&nbsp</dd>
                            <dt class="col-md-6">&nbsp</dt>
                            <dd class="col-md-6">&nbsp</dd>
                            <dt class="col-md-6">Formulario:</dt>
                            <dd class="col-md-6"> Acta de donación </dd>
                        </dl>
                    </div>
                    <div class="col-md-3">
                        <dl class="row">
                            <dt class="col-md-6"></dt>
                            <dd class="col-md-6"><h4><strong>NIA: {{ detalle_ingreso.nro_ingreso }}</strong></h4><small>{{ detalle_ingreso.created_at | dateformat }}</small></dd>
                            <dt class="col-md-5">N° Acta:</dt>
                            <dd class="col-md-7">{{ detalle_ingreso.donacion.nro_acta }}</dd>
                            <!--<dt class="col-md-6">Fecha solicitud:</dt>
                            <dd class="col-md-6">{{ detalle_ingreso.compra.fecha_solicitud }}</dd>-->
                        </dl>
                    </div>
                    <!-- /.col -->
                </div>


                <h4 class="text-center"> <strong>Detalle Ingreso  <span  v-if="detalle_ingreso.deleted_at" class="badge badge-danger">ANULADO</span></strong></h4>
                <table class="table table-sm table-striped">
                    <thead>
                    <tr>
                        <th style="width: 10px">N°</th>
                        <th>Articulo</th>
                        <th>Medida</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in detalle_ingreso.detalleingresos" :key="index">
                            <td>{{ index+1 }}.</td>
                            <td>{{ item.lote.articulo.nombre }}</td>
                            <td>{{ item.lote.articulo.unidad_medida.nombre }}</td>
                            <td>{{ (item.cantidad).toFixed(2) }}</td>
                            <td><b>Bs. </b>{{ (item.cantidad * item.lote.precio_u).toFixed(2) }}</td>
                    </tr>

                    </tbody>
                </table>
                <dl class="row pt-3">
                    <dt class="col-md-3">Total:</dt>
                    <dd class="col-md-7 text-right"><span style="border-bottom: 2px dotted #000;text-decoration: none;">{{ Math.trunc(detalle_ingreso.total) | toWords }} con {{ ( detalle_ingreso.total - Math.floor(detalle_ingreso.total) ) }}/100 <b>  Bs.</b></span></dd>
                    <div class="col-md-2 text-center"><u>{{ (detalle_ingreso.total).toFixed(2) }}</u></div>
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
            numero: 1997,
        };
    },
    computed: {
        ...mapState("ingreso", [
            "detalle_ingreso",
            "data_form",
            "loading_form",
            "alert"
        ]),
        ...mapGetters("proveedor", ["GET_ITEMS_PROVEEDOR"]),
    },
    methods: {
        Print(){
            window.open('http://localhost:8000/controller/ingreso/imprimir/'+this.$route.params.id, '_blank');
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
            router.push({name:'ingreso'});
            // this.$router.go(-1);
        }
    },
   mounted() {
        store.dispatch("proveedor/getItems");
    },
};
</script>

