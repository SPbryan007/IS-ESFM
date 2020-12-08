<template>

    <div class="col-md-12">
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
                <h3>Periodo contable  <i v-if="loading_table" class="el-icon-loading" style="font-size: 1.3rem;"></i></h3>
            </div>
            <div class="pull-right">
                <router-link v-on:click.native="CLEAR_FORM" :to="{ name: 'addperiodo' }">
                    <el-button type="primary" size="small">
                        Nuevo
                        <i class="fas fa-plus"></i>
                    </el-button>
                </router-link>
            </div>
        </div>
        <div class="row justify-content-between ml-1" style="margin-bottom:-20px">
            <div class="pull-left">
                <el-form :inline="true" class="demo-form-inline" >
                    <el-form-item label="Mostrar:">
                        <el-select
                            style="width: 70px"
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
                    <el-form-item>
                        <el-switch
                            v-model="$store.state.periodo.withTrashed"
                            active-text="todos"
                            inactive-text="solo activos"
                            @change="$store.dispatch('periodo/getItems')"
                        >
                        </el-switch>
                    </el-form-item>
                </el-form>

            </div>
            <div class="pull-right">
                <el-form :inline="true" class="demo-form-inline">
                    <el-form-item label="Buscar por:">
                        <el-input
                            placeholder="Nombre, Fecha"
                            v-model="$store.state.periodo.searchQuery"
                            clearable
                        >
                            <i slot="prefix" class="el-input__icon el-icon-search"></i>
                        </el-input>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <el-table
                    :data="pageOfItems"
                    :default-sort="{prop: 'id', order: 'descending'}"
                    style="width: 100%"
                    stripe
                >
                    <el-table-column type="index" label="N°" width="50"></el-table-column>
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <p><b>Descripcion</b>: {{ props.row.descripcion }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="nombre" label="Nombre" sortable width="300">
                        <template slot-scope="scope">
                            <i class="el-icon-chat-square"></i>
                            <span style="margin-left: 10px">{{ scope.row.nombre}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="fecha_inicio" label="Inicio" width="150">
                        <template slot-scope="scope">
                            <i class="el-icon-date"></i>
                            <span style="margin-left: 10px">{{ scope.row.fecha_inicio}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="fecha_fin" label="Conclución" width="150">
                        <template slot-scope="scope">
                            <i class="el-icon-date"></i>
                            <span style="margin-left: 10px">{{ scope.row.fecha_fin}}</span>
                        </template>
                    </el-table-column>

                    <el-table-column
                        prop="estado"
                        label="Estado"
                        width="150"
                    >
                        <template slot-scope="scope">
                            <el-tag
                                :type="scope.row.estado === 'FINALIZADO' ? 'danger' : 'success'"
                                disable-transitions
                            >
                                <strong>{{!scope.row.deleted_at? 'En curso' : 'Finalizado' }}</strong>
                            </el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column label="Operacion"  >
                        <template slot-scope="scope">
                            <router-link
                                :disabled="!scope.row.deleted_at ? false : true"
                                v-on:click.native="SET_EDIT_FORM(scope.row)"
                                :to="{ name: 'editperiodo',params:{id:scope.row.id } }"
                            >
                                <el-button :disabled="!scope.row.deleted_at ? false : true" size="mini">Editar</el-button>
                            </router-link>
                            <el-button
                                v-if="!scope.row.deleted_at"
                                :loading="loading_form && scope.$index == self"
                                type="danger"
                                size="mini"
                                @click="OnClickFinalizar(scope.$index, scope.row)"
                            >Finalizar</el-button>
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
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import store from "../../store";
export default {

    data() {
        return {
            value :true,
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
        ...mapState("periodo", [
            "items",
            "loading_form",
            "loading_table",
            "alert",
            "data_form"
        ]),
        PerPage: function() {
            return this.perpage ? parseInt(this.perpage) : 25;
        },
        ...mapGetters("periodo", [`GET_FILTER_ITEMS`]),
    },
    methods: {
        ...mapMutations('periodo',['CLEAR_FORM',"SET_EDIT_FORM"]),
        refresh() {
            let self = this.$refs;
            setTimeout(() => {
                self.jw.setPage(1);
            }, 0);
        },
        OnClickFinalizar(index, row) {
            this.$confirm(
                `¿ Esta seguro que desea finalizar el periodo ${row.nombre} ?,
                no podra revertir los cambios una vez finalizado el periodo. `,
                "Advertencia",
                {
                    confirmButtonText: row.deleted_at ? 'Sí activar' : 'Sí finalizar',
                    cancelButtonText: "Cancelar",
                    type: "warning"
                }
            )
                .then(() => {
                    this.self = index;
                    store.dispatch("periodo/deleteItem", {
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
    },
    created() {
        store.dispatch("periodo/getItems");
    }
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
