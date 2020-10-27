<template>
    <div>
        <div slot="bodytable">
            <!-- <tr v-for="(pro, index) in proveedores" :key="index">
                <td>{{ pro.nit }}</td>
                <td>{{ pro.nombre }}</td>
                <td>{{ pro.direccion }}</td>
                <td>{{ pro.telefono }}</td>
                <td>{{ pro.responsable }}</td>
            </tr> -->
            <tr>
                <td>Trident</td>
                <td>Internet Explorer 4.0</td>
                <td>Win 95+</td>
                <td>4</td>
                <td>X</td>
            </tr>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: "TablebodyComponent",
    methods: {
        ...mapState("proveedor", ["proveedores"])
    }
};
</script>



<template>
    <el-form
        :model="LoginForm"
        status-icon
        :rules="rules"
        ref="LoginForm"
        label-width="120px"
    >
        <el-form-item prop="username">
            <el-input
                type="password"
                v-model="LoginForm.username"
                autocomplete="off"
            ></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input
                type="password"
                v-model="LoginForm.password"
                autocomplete="off"
            ></el-input>
        </el-form-item>
    </el-form>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import store from "../../store/index";
export default {
    data() {
        let validateUsername = (rule, value, callback) => {
            value === ""
                ? callback(new Error("Introduzca nombre de usuario"))
                : callback();
        };
        let validatePassword = (rule, value, callback) => {
            value === ""
                ? callback(new Error("Introduzca password"))
                : callback();
        };
        return {
            LoginForm: {
                username: "",
                password: ""
            },
            rules: {
                password: [{ validator: validatePassword, trigger: "blur" }],
                username: [{ validator: validateUsername, trigger: "blur" }]
            }
        };
    },
    computed: {
        ...mapState("login", ["data", "error", "loading", "disabled"])
    },
    methods: {
        ...mapActions("login", ["login"])
    },
    beforeRouteEnter(to, from, next) {
        if (!store.getters["login/getUserLogged"]) {
            store.commit("login/init");
            next();
        } else {
            next(false);
        }
    }
};
$(document).ready(function() {
    $("#LoginForm").validate({
        rules: {
            username: {
                required: true
            },
            password: {
                required: true
            }
        },
        messages: {
            username: {
                required: "Debe introducir el nombre de usuario"
            },
            password: {
                required: "Debe introducir la contraseña"
            }
        },
        errorElement: "span",
        errorPlacement: function(error, element) {
            error.addClass("invalid-feedback");
            element.closest(".input-group").append(error);
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass("is-invalid");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass("is-invalid");
        }
    });
});
</script>














<div
                        v-if="error"
                        style="background:#dc3545a1;    border-color: #e97f8a;"
                        class="alert alert-danger"
                        role="alert"
                    >
                        <i class="fas fa-exclamation-triangle"></i> Datos
                        incorrectos, por favor introduzca sus datos nuevamente
                    </div>  
                    <form ref="LoginForm" @submit.prevent="login">
                        <div class="input-group mb-3">
                            <input
                                v-model="data.username"
                                type="text"
                                class="form-control"
                                id="username"
                                name="username"
                                placeholder="Ingrese nombre de usuario"
                            />
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input
                                v-model="data.password"
                                name="password"
                                id="password"
                                type="password"
                                class="form-control"
                                placeholder="Ingrese contraseña"
                            />
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <!-- /.col -->
                            <div class="col-md-12">
                                <el-button
                                    @click="login"
                                    type="primary"
                                    class="btn-block"
                                    v-loading.fullscreen.lock="loading"
                                    element-loading-text="Iniciando sesion..."
                                    >Iniciar sesion</el-button
                                >
                            </div>

                            <!-- /.col -->
                        </div>
                        
                    </form>
