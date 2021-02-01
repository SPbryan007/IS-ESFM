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
                <el-page-header  @back="goBack" content="Reporte salidas" class="mt-2"></el-page-header>
            </div>
            <div class="pull-right">
                <el-button
                    :disabled="detalle_salida.deleted_at"
                    type="primary"
                    @click="Print()"
                    icon="el-icon-printer"
                >Imprimir</el-button>
                <el-button
                    :disabled="detalle_salida.deleted_at"
                    type="danger"
                    @click="exportPDF(detalle_salida.nro_salida,detalle_salida.created_at)"
                ><i class="fas fa-file-pdf"></i> Pdf</el-button>
                <!--                <el-button-->
                <!--                    type="success"-->
                <!--                    @click=""-->
                <!--                > <i class="fas fa-file-excel"></i> Excel</el-button>-->
            </div>
        </div>
        <div class="card">
            <div class="card-header border-0">
                <h3 class="card-title">Detalle de salida</h3>
                <div class="card-tools"></div>
            </div>
            <div class="card-body"  ref="table" id="printMe">
                <div class="row invoice-info">
                    <div class="col-md-5 invoice-col">
                        <dl class="row">
                            <dt class="col-md-5">Expedido por:</dt>
                            <dd class="col-md-7">{{ detalle_salida.usuario.funcionario.nombre +' '+ detalle_salida.usuario.funcionario.apellido }}</dd>
                            <dt class="col-md-5">Fecha de salida:</dt>
                            <dd class="col-md-7">{{ detalle_salida.created_at | dateformat }}  <b>Hrs:</b>  {{ detalle_salida.created_at | timeformat }}</dd>
                            <dt class="col-md-5">Solicitante:</dt>
                            <dd class="col-md-7">{{ detalle_salida.solicitante.funcionario.nombre +' '+ detalle_salida.solicitante.funcionario.apellido }}</dd>
                            <dt class="col-md-5">Autorizado por:</dt>
                            <dd class="col-md-7">{{ detalle_salida.autorizador.nombre +' '+detalle_salida.autorizador.apellido }}</dd>
                            <dt class="col-md-5">Verificado por:</dt>
                            <dd class="col-md-7">{{ detalle_salida.verificador.nombre +' '+detalle_salida.verificador.apellido }}</dd>
                            <dt class="col-md-5">Finalidad:</dt>
                            <dd class="col-md-7">{{ detalle_salida.finalidad }}</dd>
                        </dl>
                    </div>
                    <div class="col-md-4 invoice-col">
                        <dl class="row">
                            <dt class="col-md-6">&nbsp</dt>
                            <dd class="col-md-6">&nbsp</dd>
                            <dt class="col-md-6">&nbsp</dt>
                            <dd class="col-md-6">&nbsp</dd>
                            <dt class="col-md-6">Unidad Solicitante</dt>
                            <dd class="col-md-6">{{ detalle_salida.solicitante.unidad.nombre }}</dd>
                            <dt class="col-md-6">N° Pedido:</dt>
                            <dd class="col-md-6">{{ detalle_salida.nro_pedido}}</dd>
                            <dt class="col-md-6">&nbsp</dt>
                            <dd class="col-md-6">&nbsp</dd>
                            <!--<dt class="col-md-6">Fecha solicitud:</dt>
                            <dd class="col-md-6">{{ detalle_ingreso.compra.fecha_solicitud }}</dd>-->
                        </dl>
                    </div>
                    <div class="col-md-3">
                        <dl class="row">
                            <dt class="col-md-6"></dt>
                            <dd class="col-md-6"><h4><strong>NSA: {{ detalle_salida.nro_salida }}</strong></h4></dd>
                            <dt class="col-md-6">&nbsp</dt>
                            <dd class="col-md-6">&nbsp</dd>
                            <dt class="col-md-6">&nbsp</dt>
                            <dd class="col-md-6">&nbsp</dd>
                            <dt class="col-md-6">&nbsp</dt>
                            <dd class="col-md-6">&nbsp</dd>
                            <!--<dt class="col-md-6">Fecha solicitud:</dt>
                            <dd class="col-md-6">{{ detalle_ingreso.compra.fecha_solicitud }}</dd>-->
                        </dl>
                    </div>
                    <!-- /.col -->
                </div>

                <h4 class="text-center"> <strong>Detalle Salida <span  v-if="detalle_salida.deleted_at" class="badge badge-danger">ANULADO</span></strong></h4>
                <table class="table table-sm table-striped">
                    <thead>
                    <tr>
                        <th style="width: 10px">N°</th>
                        <th>CÓDIGO</th>
                        <th>ARTICULO</th>
                        <th>MEDIDA</th>
                        <th>CANTIDAD</th>
                        <th>P. UNIT</th>
                        <th>SUBTOTAL</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,index) in detalle_salida.detallesalidas" :key="index">
                        <td>{{ index+1 }}.</td>
                        <td>{{ item.lote.articulo.codigo }}</td>
                        <td>{{ item.lote.articulo.nombre }}</td>
                        <td>{{ item.lote.unidad_medida.nombre }}</td>
                        <td>{{ (item.cantidad).toFixed(2) }}</td>
                        <td>{{ (item.lote.precio_u).toFixed(2)}}</td>
                        <td><b>Bs. </b>{{ (item.cantidad * item.lote.precio_u).toFixed(2) }}</td>
                    </tr>

                    </tbody>
                </table>
                <dl class="row pt-3">
                    <dt class="col-md-3">Total:</dt>
                    <dd class="col-md-7 text-right"><span style="border-bottom: 2px dotted #000;text-decoration: none;">{{ Math.trunc(detalle_salida.total) | toWords }} y {{ ( detalle_salida.total - Math.floor(detalle_salida.total) ).toFixed(2) }}/100 <b>  Bs.</b></span></dd>
                    <div class="col-md-2 text-center"><u>{{ (detalle_salida.total).toFixed(2) }}</u></div>
                </dl>
                <!--                <br>-->
                <!--                <div class="row justify-content-start">-->
                <!--                 -->
                <!--                </div>-->
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
        ...mapState("salida", [
            "detalle_salida",
            "data_form",
            "loading_form",
            "alert"
        ]),
    },
    methods: {
        Print(){
            window.open('http://localhost:8000/controller/salida/imprimir/'+this.$route.params.id, '_blank');
        },
        exportPDF(nro,date){
            axios.get('/controller/salida/export_pdf/'+this.$route.params.id, { responseType: 'blob' })
                .then(response => {
                    const blob = new Blob([response.data], { type: 'application/pdf' })
                    const link = document.createElement('a')
                    link.href = URL.createObjectURL(blob)
                    link.download = 'NSA-'+nro+'-'+moment(date).format("DD/MM/YYYY")
                    link.click()
                    URL.revokeObjectURL(link.href)
                }).catch(console.error);
        },
        goBack() {
            router.push({name:'reporte_salidas'});
            //this.$router.go(-1);
        }
    },
    mounted() {
        store.dispatch('login/getUser');
    }
};
</script>

