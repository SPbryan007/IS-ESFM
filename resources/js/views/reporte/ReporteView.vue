<template>
    <div>
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mb-1">
                        <ol class="breadcrumb float-sm-left">
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                                <el-breadcrumb-item :to="{ path: '/reporte' }">Reportes</el-breadcrumb-item>
                                <el-breadcrumb-item v-if="this.$route.name == 'movimiento'">Movimientos de almacen</el-breadcrumb-item>
                                <el-breadcrumb-item v-if="this.$route.name == 'saldos'">Saldos de almacen</el-breadcrumb-item>
                                <el-breadcrumb-item v-if="this.$route.name == 'general'">Reporte General</el-breadcrumb-item>
                                <el-breadcrumb-item v-if="this.$route.name == 'reporte_ingresos'">Ingresos</el-breadcrumb-item>
                                <el-breadcrumb-item v-if="this.$route.name == 'reporteviewdetailingreso'">Detalle ingreso</el-breadcrumb-item>
                                <el-breadcrumb-item v-if="this.$route.name == 'reporte_salidas'">Salidas</el-breadcrumb-item>
                                <el-breadcrumb-item v-if="this.$route.name == 'reporte_salidas'">Salidas</el-breadcrumb-item>
                                <el-breadcrumb-item v-if="this.$route.name == 'kardex_individual'">Kardex individual</el-breadcrumb-item>
                                <!--<el-breadcrumb-item v-if="this.$route.name == 'ingreso'">Listar</el-breadcrumb-item>
                                <el-breadcrumb-item v-if="this.$route.name == 'editingreso'">Editar</el-breadcrumb-item>
                                <el-breadcrumb-item v-if="this.$route.name == 'addingresodetails'">Detalle </el-breadcrumb-item>
                                <el-breadcrumb-item v-if="this.$route.name == 'viewdetailingreso'">Detalles ingreso</el-breadcrumb-item>-->
                            </el-breadcrumb>
                        </ol>
                    </div>
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
            <!-- /.container-fluid  :key="$route.path"-->
            <div class="container">
                <transition name="fade" mode="out-in">
                    <keep-alive>
                        <router-view name="ViewRouterReporte"></router-view>
                    </keep-alive>
                </transition>
                <vue-progress-bar></vue-progress-bar>
            </div>
            <!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
};
</script>
<style>
.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: translateX(2em);
}
.fade-enter-active,
.fade-leave-to-active {
    transition: all 0.3s ease;
}
</style>
