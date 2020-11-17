<template>

    <div class="col-md-12">

        <div class="row justify-content-between mb-4 mr-1 ml-1   mt-4">
            <div class="pull-lef">
                <h3>Backups</h3>
            </div>
            <el-alert
                :title="'Oops, Algo salió mal'"
                type="error"
                :description="'Por favor verifíque la conexion con la base de datos '+ error"
                @close="show_error = false"
                closable
                show-icon
            >
            </el-alert>
            <!--<div class="pull-right">
                <router-link v-on:click.native="CLEAR_FORM" :to="{ name: 'addperiodo' }">
                    <el-button type="primary" size="small">
                        Nuevo
                        <i class="fas fa-plus"></i>
                    </el-button>
                </router-link>
            </div>-->
        </div>
       <!-- <div class="card card-primary card-outline">
            <div class="card-header border-0">
                Datos de la institución
            </div>
            <div class="card-body">

            </div>
            &lt;!&ndash; /.card-body &ndash;&gt;
        </div>-->

           <div class="container">
               <p>Crear nueva copia de seguridad</p>
               <el-button type="danger" @click="backup" :loading="false">Crear nueva copia <i class="el-icon-download el-icon-right"></i></el-button>
           </div>
            <div class="container mt-5">
                <p>Restablecer copia de seguridad</p>
                <el-upload
                    class="upload-demo"
                    ref="upload"
                    :auto-upload="false"
                    drag
                    :limit="1"
                    action="https://localhost:8000/"
                    >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">Suelta tu archivo aquí o <em>haz clic para cargar</em></div>
                    <div slot="tip" class="el-upload__tip">Solo se admiten archivos .back</div>
                </el-upload>
                <br>
                <el-button type="primary" :loading="false">Restablecer <i class="el-icon-upload el-icon-right"></i></el-button>
            </div>
        <div class="card">


          <!--  <div class="demo-image__error">
                <div class="block">
                    <span class="demonstration">Custom</span>
                    <el-image>
                        <div slot="error" class="image-slot">
                            <i class="el-icon-picture-outline"></i>
                        </div>
                    </el-image>
                </div>
            </div>
            <div class="card-header border-0">

            </div>
            <div class="card-body">

            </div>-->
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import store from "../../store";
export default {

    data() {
        return {
           error:'',
            show_error:true,
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
        restore(){
            this.$confirm('Una vez restablezca la copia de seguridad los datos actuales se perderán y será redirigido a inicio de sesión.', 'Warning', {
                title:"Advertencia",
                confirmButtonText: 'Sí, restablecer',
                cancelButtonText: 'Cancelar',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: 'Delete completed'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: 'Delete canceled'
                });
            });
        },
        backup(){
            axios.post('http://localhost:8000/backup/create')
                 .then((data)=>{
                     this.$router.push({name:'login'});
                 })
                .catch((err)=>{
                    this.error = err;
                });
        },
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
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
