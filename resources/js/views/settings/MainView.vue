<template>

    <div class="col-md-12">

        <div class="row justify-content-between mb-4 mr-1 ml-1   mt-4">
            <div class="pull-lef">
                <h2>Configuraciones <i class="fas fa-cog" style="font-size: 20px"></i></h2>
            </div>
            <el-alert
                v-if="show_error"
                :title="'Oops, Algo salió mal'"
                type="error"
                :description="'Por favor verifíque la conexion con la base de datos :'+ error"
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
               <h3>Backups <i class="fas fa-history" style="font-size: 20px"></i></h3>
               <p>Crea una copia de seguridad para respaldar los datos del sistema</p>
               <el-button type="danger" @click="backup" :loading="false">Crear nueva copia <i class="el-icon-download el-icon-right"></i></el-button>
           </div>
            <div class="container mt-5">
                <h3>Credenciales <i class="fas fa-file-invoice" style="font-size: 20px"></i></h3>
                <p>Si es tu primera vez en el sistema, debes cambiar tus datos de acceso por defecto.</p>
                <el-button type="primary"  @click="credentialsForm = true" >Cambiar datos de acceso <i class="el-icon-upload el-icon-right"></i></el-button>
            </div>
                <el-dialog title="Cambiar datos de acceso" :visible.sync="credentialsForm">
<!--                    <el-form :model="credentials">-->
<!--                        <el-form-item label="usuario: " label-width="180px">-->
<!--                            <el-input v-model="credentials.user" style="width: 300px"></el-input>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="Contraseña: " label-width="180px">-->
<!--                            <el-input v-model="credentials.user" style="width: 200px"></el-input>-->
<!--                        </el-form-item>-->
<!--                        <el-form-item label="Confirmar contraseña: " label-width="180px">-->
<!--                            <el-input v-model="credentials.password" style="width: 200px"></el-input>-->
<!--                        </el-form-item>-->
<!--                    </el-form>-->
                    <el-form :model="credentials" status-icon :rules="rules"  ref="ruleForm" label-width="120px" class="demo-ruleForm">
                        <el-form-item label="Usuario: " prop="username" label-width="180px">
                            <el-input v-model="credentials.username"  style="width: 300px"></el-input>
                        </el-form-item>
                        <el-form-item label="Contraseña: " prop="password" label-width="180px">
                            <el-input type="password" v-model="credentials.password"  style="width: 200px" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="Confirmar contraseña: " prop="checkpass" label-width="180px">
                            <el-input type="password" v-model="credentials.checkpass"  style="width: 200px" autocomplete="off"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="restore('ruleForm')" :loading="loading" >Cambiar</el-button>
                            <el-button @click="credentialsForm = false">Cancelar</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>

    </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import store from "../../store";
export default {

    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Porfavor introduzca una contraseña'));
            } else {
                if (this.credentials.checkpass !== '') {
                    this.$refs.ruleForm.validateField('checkpass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Porfavor introduzca la contraseña nuevamente'));
            } else if (value !== this.credentials.password) {
                callback(new Error('Las contraseñas no coinciden'));
            } else {
                callback();
            }
        };
        return {
            loading:false,
            credentialsForm:false,
            credentials:{
                username:null,
                password: '',
                checkpass:'',
            },
            rules: {
                password: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkpass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                username: [
                    {
                        required: true,
                        message: "Debe introducir el un nombre de usuario",
                        trigger: "blur"
                    },
                    { min: 3, message: "Debe tener mas de 3 carácteres", trigger: "blur" },
                    { min: 3, message: "Debe tener menos  30 carácteres", trigger: "blur" }
                ]
            },
           error:'',
            show_error:false
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
        restore(formName){
            this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.loading = true;
                        this.$Progress.start();
                        axios.put('auth/resetPassword/'+store.state.login.user.id_usuario,this.credentials)
                            .then((data)=>{
                                this.loading = false;
                                this.credentialsForm = false;
                                this.$Progress.finish();
                                this.$message.success('Datos de acceso cambiados');
                            })
                            .catch((err)=>{
                                this.loading = false;
                                this.$Progress.fail();
                                this.show_error=true;
                                this.error = err;
                            });

                    } else {
                        return false;
                    }
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

    },
    created() {

    },
    mounted() {
        this.credentials.username = store.state.login.user.username;
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
