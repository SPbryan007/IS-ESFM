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
                <h3>Unidades de medida  <i v-if="loading_table" class="el-icon-loading" style="font-size: 1.3rem;"></i></h3>
            </div>
            <div class="pull-right">
                <router-link v-if="$store.getters['login/getUserLogged'].rol == 'ADMINISTRADOR'"  v-on:click.native="CLEAR_FORM" :to="{ name: 'addunidad_medida' }">
                    <el-button type="primary">
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
                            v-model="$store.state.unidad_medida.withTrashed"
                            active-text="todos"
                            inactive-text="solo activos"
                            @change="$store.dispatch('unidad_medida/getItems')"
                        >
                        </el-switch>
                    </el-form-item>
                </el-form>

            </div>
            <div class="pull-right">
                <el-form :inline="true" class="demo-form-inline">
                    <el-form-item label="Buscar por:">
                        <el-input
                            placeholder="Sigla, nombre"
                            v-model="$store.state.unidad_medida.searchQuery"
                            clearable
                        >
                            <i slot="prefix" class="el-input__icon el-icon-search"></i>
                        </el-input>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="card">
<!--            <div class="card-header border-0">-->
<!--                Lista de unidades de medida-->
<!--               -->
<!--            </div>-->
            <div class="card-body">
                <el-table
                    stripe
                    :data="pageOfItems"
                    :default-sort="{prop: 'id', order: 'descending'}"
                    style="width: 100%"
                >
                    <el-table-column type="index" label="N°" width="40"></el-table-column>
                    <el-table-column :fit="true" prop="sigla" label="Sigla" width="120" sortable></el-table-column>
                    <el-table-column prop="nombre" label="Nombre" width="300" sortable></el-table-column>
                    <el-table-column prop="descripcion" label="Descripcion" width="330"></el-table-column>
                    <el-table-column prop="deleted_at" label="Estado" width="100" sortable>
                        <template slot-scope="scope">
                            <el-tag
                                :type="scope.row.deleted_at ?  'warning' : 'success'"
                                effect="dark">
                                {{ scope.row.deleted_at ?  'INACTIVO' : 'ACTIVO' }}
                            </el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column label="Operacion"  >
                        <template slot-scope="scope">
                            <router-link
                                v-if="$store.getters['login/getUserLogged'].rol == 'ADMINISTRADOR'"
                                :disabled="scope.row.deleted_at"
                                v-on:click.native="SET_EDIT_FORM(scope.row)"
                                :to="{ name: 'editunidad_medida',params:{id:scope.row.id } }"
                            >
                                <el-button :disabled="scope.row.deleted_at" size="mini">Editar</el-button>
                            </router-link>
                            <el-button
                                v-if="!scope.row.deleted_at"
                                :loading="loading_form && scope.$index == self"
                                :disabled="$store.getters['login/getUserLogged'].rol != 'ADMINISTRADOR'"
                                type="danger"
                                size="mini"
                                @click="OnClickAD(scope.$index, scope.row)"
                            >Eliminar</el-button>
                            <el-button
                                v-if="scope.row.deleted_at"
                                :loading="loading_form && scope.$index == self"
                                type="primary"
                                size="mini"
                                @click="OnClickAD(scope.$index, scope.row)"
                            >Activar </el-button>
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
        ...mapState("unidad_medida", [
            "items",
            "loading_form",
            "loading_table",
            "alert",
            "data_form"
        ]),
        PerPage: function() {
            return this.perpage ? parseInt(this.perpage) : 25;
        },
        ...mapGetters("unidad_medida", ["GET_FILTER_ITEMS"]),
    },
    methods: {
        ...mapMutations("unidad_medida",["SET_EDIT_FORM","CLEAR_FORM"]),
        refresh() {
            let self = this.$refs;
            setTimeout(() => {
                self.jw.setPage(1);
            }, 0);
        },
        OnClickAD(index, row) {
            this.$confirm(
                `¿ Esta seguro que desea ${row.deleted_at? 'activar' : 'eliminar'} la unidad de medida ${row.nombre} ?`,
                "Advertencia",
                {
                    confirmButtonText: row.deleted_at ? 'Sí activar' : 'Sí Eliminar',
                    cancelButtonText: "Cancelar",
                    type: "warning"
                }
            )
                .then(() => {
                    this.self = index;
                    store.dispatch("unidad_medida/deleteItem", {
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
    created() {
        store.dispatch('login/getUser');
        store.dispatch("unidad_medida/getItems");
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
