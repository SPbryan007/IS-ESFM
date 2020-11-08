<template>
    <div>
        <div v-if="this.$store.state.periodo.current"  class="col-md-12">

            <el-alert
                v-if="alert.show"
                :title="alert.title"
                :type="alert.color"
                :description="alert.message"
                @close="alert.show = false"
                closable
                show-icon
            >
            </el-alert>

            <div class="row justify-content-between mb-4 mr-1 ml-1   mt-4">
                <div class="pull-lef">
                    <h3>Ingresos</h3>
                </div>
                <div class="pull-right">
                    <router-link v-on:click.native="CLEAR_FORM" :to="{ name: 'addingreso' }">
                        <el-button type="primary" size="small">
                            Nuevo
                            <i class="fas fa-plus"></i>
                        </el-button>
                    </router-link>
                </div>
            </div>
            <div class="card">
                <div class="card-header border-0">
                    Lista de ingresos
                    <i v-if="loading_table" class="el-icon-loading" style="font-size: 1.3rem;"></i>
                </div>
                <div class="card-body">
                    <div class="row justify-content-between ">
                        <div class="pull-lef ml-2">
                            <el-form :inline="true" class="demo-form-inline">
                                <el-form-item>
                                    <el-input
                                        size="small"
                                        placeholder="Buscar..."
                                        v-model="$store.state.ingreso.searchQuery"
                                        clearable
                                    >
                                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                                    </el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-switch
                                        v-model="$store.state.ingreso.withTrashed"
                                        active-text="todos"
                                        inactive-text="solo activos"
                                        @change="$store.dispatch('ingreso/getItems')"
                                    >
                                    </el-switch>
                                </el-form-item>

                            </el-form>
                        </div>
                        <div class="pull-right">
                            <el-form :inline="true" class="demo-form-inline" label-width="60px">
                                <el-form-item>
                                    <el-select
                                        style="width: 70px"
                                        size="small"
                                        v-model="perpage"
                                        @change="refresh()"
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
                    </div>
                    <el-table
                        :fit="true"
                        stripe
                        :data="pageOfItems"
                        :default-sort="{prop: 'id', order: 'descending'}"
                        style="width: 100%"
                    >
                        <!--     <el-table-column type="expand">
                                 <template slot-scope="props">
                                     <p><b>Partida :</b> {{ props.row.nombre }}  {{ props.row.partida.codigo }}</p>
                                     <p><b>Unidad de medida :</b> {{ `${props.row.unidad_medida.nombre} (${props.row.unidad_medida.sigla})` }}</p>
                                 </template>
                             </el-table-column>-->
                        <el-table-column  prop="nro_ingreso" label="N° Ingreso"  width="115"  sortable>
                            <template slot-scope="scope">
                                    <b>NS</b>{{ scope.row.nro_ingreso }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="proveedor.nombre" label="Proveedor" width="350" sortable>
                            <template slot-scope="scope">
                                {{ !scope.row.proveedor ? '-' : scope.row.proveedor.nombre }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="tipo_ingreso" label="Tipo" width="120" sortable>
                            <template slot-scope="scope">
                                {{ scope.row.tipo_ingreso }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="created_at" label="Fecha de ingreso" width="160"sortable>
                            <template slot-scope="scope">
                                {{ scope.row.created_at | dateformat }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="total" label="Total" sortable>
                            <template slot-scope="scope">
                                <b>Bs: </b> {{ scope.row.total }}
                            </template>
                        </el-table-column>
                        <!--<el-table-column prop="deleted_at" label="Estado"sortable>
                            <template slot-scope="scope">
                                {{ scope.row.deleted_at ?  'Inactivo' : 'Activo' }}
                            </template>
                        </el-table-column>-->
                        <el-table-column label="Operacion" width="200" >
                            <template slot-scope="scope">
                                <el-tag
                                    v-if="scope.row.deleted_at"
                                >
                                    <strong>ANULADO</strong>
                                </el-tag>
                                <router-link
                                    v-if="!scope.row.deleted_at"
                                    :disabled="!scope.row.deleted_at ? false : true"
                                    v-on:click.native="$store.dispatch('ingreso/getDetalleById',scope.row.id)"
                                    :to="{ name: 'viewdetailingreso',params:{id:scope.row.id } }"
                                >
                                    <el-button
                                        v-if="!scope.row.deleted_at"
                                        size="mini"
                                        type="default"
                                        icon="el-icon-view"
                                    >Ver</el-button>

                                </router-link>
                                <el-button
                                    v-if="!scope.row.deleted_at"
                                    :disabled="scope.row.deleted_at"
                                    :loading="loading_form && scope.$index == self"
                                    type="danger"
                                    size="mini"
                                    @click="OnClickDelete(scope.$index, scope.row)"
                                >Anular</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <jw-pagination
                    ref="jw"
                    :pageSize="PerPage"
                    :items="GET_FILTER_ITEMS"
                    :labels="labels"
                    @changePage="onChangePage"
                ></jw-pagination>
            </div>
        </div>
        <div v-if="!this.$store.state.periodo.current" class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 col-md-offset-4">
                <el-alert
                    title="No se encontró un periodo contable vigente."
                    type="info"
                    description="No existe un periodo contable en vigencia, para poder realizar ingresos debe iniciar un periodo contable."
                    show-icon
                >
                </el-alert>
            </div>

        </div>
    </div>

</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import store from "../../store";
export default {

    data() {
        return {
            self: null,
            pageOfItems: [],
            sizePerPage: 10,
            perpage: 5,
            labels: {
                first: "<<",
                last: ">>",
                previous: "anterior",
                next: "siguiente"
            }
        };
    },
    computed: {
        ...mapState("ingreso", [
            "items",
            "loading_form",
            "loading_table",
            "alert",
            "data_form"
        ]),
        PerPage: function() {
            return this.perpage ? parseInt(this.perpage) : 25;
        },
        ...mapGetters("ingreso", ["GET_FILTER_ITEMS"]),
    },
    methods: {
        ...mapMutations("ingreso",["CLEAR_FORM"]),
        refresh() {
            let self = this.$refs;
            setTimeout(() => {
                self.jw.setPage(1);
            }, 0);
        },
        OnClickDelete(index, row) {
            this.$confirm(
                `¿ Esta seguro que desea anular el ingreso Nro. ${row.nro_ingreso} ?`,
                "Advertencia",
                {
                    confirmButtonText:'Sí Anular',
                    cancelButtonText: "Cancelar",
                    type: "warning"
                }
            )
                .then(() => {
                    this.self = index;
                    store.dispatch("ingreso/deleteItem", {
                        id: row.id,
                        message: this.$message,
                        progress: this.$Progress
                    });
                })
                .catch(() => {
                    return null;
                });
        },
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        },
        goBack() {
            this.$router.go(-1);
        }
    },
    mounted() {
        store.dispatch('periodo/verify');
        store.dispatch("ingreso/getItems");
    },
};
</script>

<style>
.table th,
.table td {
    padding: 0.5rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}

</style>


<!--
<div v-if="detalle_ingreso.tipo_ingreso == 'Compra' " class="row invoice-info">
<div class="col-md-5 invoice-col">
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
            &lt;!&ndash;<dt class="col-md-6">Fecha solicitud:</dt>
            <dd class="col-md-6">{{ detalle_ingreso.compra.fecha_solicitud }}</dd>&ndash;&gt;
        </dl>
    </div>
    <div class="col-md-3">
        <dl class="row">
            <dt class="col-md-6"></dt>
            <dd class="col-md-6"><h4><strong>NIA: {{ detalle_ingreso.nro_ingreso }}</strong></h4><small>12/45/1998</small></dd>
            <dt class="col-md-6">&nbsp</dt>
            <dd class="col-md-6">&nbsp</dd>
            <dt class="col-md-6">&nbsp</dt>
            <dd class="col-md-6">&nbsp</dd>
            <dt class="col-md-6">N° Formulario</dt>
            <dd class="col-md-6">{{ detalle_ingreso.compra.nro_solicitud }}</dd>
            &lt;!&ndash;<dt class="col-md-6">Fecha solicitud:</dt>
            <dd class="col-md-6">{{ detalle_ingreso.compra.fecha_solicitud }}</dd>&ndash;&gt;
        </dl>
    </div>
    &lt;!&ndash; /.col &ndash;&gt;
</div>
<h4 class="text-center"> <strong>Detalle Ingreso</strong></h4>
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
    <dd class="col-md-7 text-right"><span style="border-bottom: 2px dotted #000;text-decoration: none;">{{ detalle_ingreso.total | toWords }} y {{ ( detalle_ingreso.total - Math.floor(detalle_ingreso.total) ) }}/100 <b>  Bs.</b></span></dd>
    <div class="col-md-2 text-center"><u>{{ (detalle_ingreso.total).toFixed(2) }}</u></div>
</dl>
<br>
<div class="row justify-content-start">
    <el-button
        type="primary"
        @click="Print()"
        icon="el-icon-printer"
    >Imprimir</el-button>
</div>
&lt;!&ndash;  <div class="row">
      <div class="">
         <b> <strong>Total:</strong></b>
          <span style="border-bottom: 1px dotted #000;text-decoration: none;">
              {{ numero | toWords }}
          </span>
      </div>
  </div>&ndash;&gt;
</div>
-->
