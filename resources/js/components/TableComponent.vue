<template>
    <div>
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

            <el-table-column label="Marca" width="130" prop="marca" ></el-table-column>
            <el-table-column label="Medida" width="100" prop="unidad_medida" >
                <template slot-scope="scope">
                    {{ findMedida(scope.row.unidad_medida).nombre }}
                </template>
            </el-table-column>
            <el-table-column label="P.U." width="80" prop="precio">
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
