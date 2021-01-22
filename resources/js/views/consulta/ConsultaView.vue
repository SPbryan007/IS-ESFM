<template>
    <div>
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mb-1">
                        <ol class="breadcrumb float-sm-left">
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                                <el-breadcrumb-item :to="{ path: '/consulta' }">Consultas</el-breadcrumb-item>
                                <el-breadcrumb-item v-if="this.$route.name == 'ingreso_proveedor'">Ingresos por proveedor</el-breadcrumb-item>
                                <el-breadcrumb-item v-if="this.$route.name == 'ingreso_usuario'">Ingresos por usuario</el-breadcrumb-item>
                                <el-breadcrumb-item v-if="this.$route.name == 'salida_solicitante'">Salidas por solicitante</el-breadcrumb-item>
                                <el-breadcrumb-item v-if="this.$route.name == 'salida_usuario'">Salidas por usuario</el-breadcrumb-item>
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
                        <router-view name="ViewRouterConsulta"></router-view>
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
