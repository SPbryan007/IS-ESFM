<template>
    <!--  <div class="col-md-10 offset-md-1">-->

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
                <el-page-header  @back="goBack" content="Inventario inicial" class="mt-2"></el-page-header>
            </div>
          <!--  :disabled="!data_form.nombre && !data_form.fecha_inicio"-->
            <div class="pull-right">
                <router-link :to="{ name: 'apertura_inventario_inicial' }">
                    <el-button
                        :disabled="!data_form.nombre && data_form.fecha_inicio"
                        type="success"
                    >
                        Nueva apertura
                        <i class="fas fa-door-open"></i>

                    </el-button>
                </router-link>

                <el-button
                    :disabled="!data_form.nombre && data_form.fecha_inicio"
                    @click="StartPeriodo" type="primary"
                    v-loading.fullscreen.lock="loading_form"
                    element-loading-text="Iniciando..."
                >
                    Iniciar
                    <i class="fas fa-clock"></i>

                </el-button>
            </div>
        </div>
        <div class="card">
            <div class="card-header border-0">
                <h3 class="card-title">Inventario inicial   <i v-if="loading_table" class="el-icon-loading" style="font-size: 1.3rem;"></i></h3>
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-lg-start align-items-center mb-1">
                    <p class="text-success text-xl">
                        <i class="ion ion-ios-refresh-empty"></i>
                    </p>
                    <p class="d-flex flex-column text-left">
                        <i class="ion ion-android-arrow-up text-primary">Periodo : </i>
                        <span class="font-weight-bold">
                      Del
                        <i class="font-weight-light">
                            {{ data_form.fecha_inicio | dateformat }}
                        </i> al
                            <i class="font-weight-light">
                                {{ data_form.fecha_fin | dateformat }}
                            </i>
                    </span>
                        <span class="text-muted">{{ data_form.nombre }}</span>
                    </p>
                </div>
                <el-dialog :title="details.articulo" :visible.sync="visible" width="830px">
                    <el-table :data="details.lotes">
                        <el-table-column type="index"></el-table-column>
                        <el-table-column property="marca" label="Marca" width="150">
                            <template slot-scope="scope">
                                {{ scope.row.marca ? scope.row.marca : '-' }}
                            </template>
                        </el-table-column>
                        <el-table-column property="unidad_medida" label="Medida" width="150">
                            <template slot-scope="scope">
                                {{ scope.row.unidad_medida.nombre }}
                            </template>
                        </el-table-column>
                        <el-table-column property="precio_u" label="Precio U." width="120">
                            <template slot-scope="scope">
                                <b>Bs :</b> {{ (scope.row.precio_u).toFixed(2) }}
                            </template>
                        </el-table-column>
                        <el-table-column property="stock" label="Stock" width="120">
                            <template slot-scope="scope">
                                {{ (scope.row.stock).toFixed() }}
                            </template>
                        </el-table-column>
                        <el-table-column property="saldo" label="Saldo" width="120">
                            <template slot-scope="scope">
                                <b>Bs :</b> {{ (scope.row.saldo).toFixed(2) }}
                            </template>
                        </el-table-column>

                    </el-table>
                </el-dialog>

                <el-table
                    :data="GET_LOTES"
                    stripe
                    style="width: 100%">
                    <el-table-column type="index" label="N°" width="60"></el-table-column>
                    <el-table-column prop="codigo" label="Código" width="120"></el-table-column>
                    <el-table-column
                        prop="nombre"
                        label="Articulo"
                        width="600">
                    </el-table-column>
                    <el-table-column
                        prop="stock"
                        label="Stock"
                        width="100">
                        <template slot-scope="scope">
                            {{ scope.row.stock }}
                        </template>
                    </el-table-column>
<!--                    <el-table-column-->
<!--                        prop="unidad"-->
<!--                        label="Medida"-->
<!--                        width="140">-->
<!--                        <template slot-scope="scope">-->
<!--                       <b>{{ scope.row.unidad }}</b>-->
<!--                        </template>-->
<!--                    </el-table-column>-->
                    <el-table-column
                        prop="saldo"
                        label="Saldo"
                        width="100"
                    >
                        <template slot-scope="scope">
                            <b>Bs: </b>{{ scope.row.saldo }}
                        </template>
                    </el-table-column>
                    <el-table-column >
                        <template slot-scope="scope">
                            <el-button icon="el-icon-view" @click="ViewDetails(scope.$index,scope.row)" circle></el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="d-flex justify-content-end align-items-center mt-3">
                    <p class="d-flex flex-column text-left">
                        <i class="ion ion-android-arrow-up text-primary">Saldo total:  </i>
                        <i class="font-weight-light">
                            <b>Bs : </b>  {{ Total() }}
                        </i>
                        <br>
                    </p> <br>
                </div>
               <!-- <div class="d-flex justify-content-end align-items-center">
                    <el-button type="primary">
                        Iniciar periodo
                        <i class="fas fa-play-circle"></i>
                    </el-button>
                </div>-->

            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import store from "../../store/index";
import { router } from "../../routes";
import moment from 'moment';

export default {
    data() {
        return {
            details:{
              lotes: [],
              articulo:null,
                unidad:null,
            },
            visible:false,
        };
    },
    computed: {
        ...mapState("periodo", [
            "data_form",
            "alert",
            "loading_form",
            "loading_table"
        ]),
        ...mapGetters("periodo", ["GET_LOTES"])
    },
    methods: {
        ViewDetails(index,row){
            this.visible = true;
            this.details.lotes = row.lotes;
            this.details.articulo = row.nombre;
            // this.details.unidad = row.unidad;
        },
        Total(){
            let total = 0;
            store.getters['periodo/GET_LOTES']
                .forEach((item)=>{total+=item.saldo;});
            return total;
        },
        StartPeriodo() {
            this.$confirm(
                `¿ Esta seguro de iniciar el periodo ?, No se podra revertir el proceso despues de iniciar`,
                "Advertencia",
                {
                    confirmButtonText: "Si iniciar",
                    cancelButtonText: "Cancelar",
                    type: "warning"
                }
            )
                .then(() => {
                    store.state.periodo.data_form.tipo_inventario  = 'INICIO_INVENTARIO';
                    store.dispatch("periodo/startPeriodo", {
                        message: this.$message,
                    });
                })
                .catch(() => {
                    return null;
                });
        },
        cancelar() {
            router.push({ name: "gestion" });
        },
        goBack() {
            this.$router.go(-1);
        }
    },
};
</script>
