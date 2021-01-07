<template>
    <div>
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
                </el-form>

            </div>
            <div class="pull-right">
                <el-form :inline="true" class="demo-form-inline">
                    <el-form-item label="Buscar por:">
                        <el-input
                            placeholder="Código, Articulo"
                            v-model="$store.state.periodo.searchQueryDetalleApertura"
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
                <el-table :data="pageOfItems"  :default-sort="{prop: 'codigo', order: 'ascending'}" >
                    <el-table-column label="Código" width="100" prop="codigo" sortable>
                        <template slot-scope="scope">
                            {{ findItem(scope.row.articulo).codigo }}
                        </template>
                    </el-table-column>
                    <el-table-column label="Articulo" width="400" prop="articulo">
                        <template slot-scope="scope">
                            {{ findItem(scope.row.articulo).nombre }}
                        </template>
                    </el-table-column>

                    <el-table-column label="Marca" width="120" prop="marca" ></el-table-column>
                    <el-table-column label="Medida" width="100" prop="unidad_medida" >
                        <template slot-scope="scope">
                            {{ findMedida(scope.row.unidad_medida).nombre }}
                        </template>
                    </el-table-column>
                    <el-table-column label="P.U." width="60" prop="precio">
                        <template slot-scope="scope">
                            <span class="text-primary"> {{ (scope.row.total / scope.row.cantidad).toFixed(2) }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="Cantidad" width="100" prop="cantidad">
                        <template slot-scope="scope">
                            <span class="text-primary">  {{ (scope.row.cantidad).toFixed(2) }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="Sub Total" width="120" prop="total">
                        <template slot-scope="scope">
                            <span class="text-primary"> {{ (scope.row.total).toFixed(2) }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column width="50">
                        <template slot-scope="scope">
                            <el-button
                                size="mini"
                                type="danger"
                                @click="DELETE_DETALLE_APERTURA(scope.row.articulo)"
                                icon="el-icon-close"
                                circle
                            ></el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <div class="row justify-content-center mt-4">
            <jw-pagination
                ref="jw"
                :pageSize="perpage"
                :items="GET_FILTER_ITEMS_DETALLE_APERTURA"
                :labels="labels"
                @changePage="onChangePage"
            ></jw-pagination>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import store from "../../store/index";
export default {
    data() {
        return {
            pageOfItems: [],
            sizePerPage: 5  ,
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
        ...mapState("periodo", [
            "data_form",
            "loading_form",
            "alert"
        ]),
        ...mapGetters("periodo", ["GET_FILTER_ITEMS_DETALLE_APERTURA"]),
    },
    methods: {
        ...mapMutations("periodo", ["DELETE_DETALLE_APERTURA"]),
        refresh() {
            let self = this.$refs;
            setTimeout(() => {
                self.jw.setPage(1);
            }, 0);
        },
        findItem(id) {
            const items = store.getters["articulo/GET_ITEMS_ARTICULO"];
            return items.find((item) => item.id === id);
        },
        findMedida(id) {
            const items = store.getters["unidad_medida/GET_ITEMS_UNIDAD_MEDIDA"];
            return items.find((item) => item.id === id);
        },
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        },
    },
    mounted() {
    },
};
</script>
