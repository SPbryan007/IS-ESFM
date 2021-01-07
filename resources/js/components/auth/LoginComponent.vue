<template>
    <div class="login-page">
        <h4 class="text-muted text-center">ALMACEN E.S.F.M.</h4>
        <div class="login-box">
<!--            <div class="login-logo">-->
<!--                <h2 class="text-muted">ALMACEN</h2>-->
<!--            </div>-->

            <!-- /.login-logo -->
            <div class="card">
                <div class="card-body login-card-body">
                    <p class="login-box-msg">
                        Ingrese sus datos para iniciar sesion
                    </p>

                    <el-form
                        :model="data"
                        status-icon
                        :rules="rules"
                        ref="LoginForm"
                    >
                        <el-form-item prop="username">
                            <el-input
                                @keyup.enter.native="submitForm('LoginForm')"
                                type="text"
                                v-model="data.username"
                                suffix-icon="el-icon-user-solid"
                                autocomplete="off"
                                placeholder="Introduzca nombre de usuario"
                            ></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input
                                @keyup.enter.native="submitForm('LoginForm')"
                                type="password"
                                suffix-icon="el-icon-lock"
                                v-model="data.password"
                                autocomplete="off"
                                placeholder="Introduzca la contraseña"
                            ></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button
                                type="primary"
                                style="width: 100%"
                                :loading="loading"
                                @click="submitForm('LoginForm')"
                            >
                                Iniciar sesion
                            </el-button>
<!--                            <button-->
<!--                                type="button"-->
<!--                                class="btn btn-block btn-primary"-->
<!--                                v-loading.fullscreen.lock="loading"-->
<!--                                element-loading-text="Iniciando sesion..."-->
<!--                                @click="submitForm('LoginForm')"-->
<!--                            >-->
<!--                                Iniciar sesion-->
<!--                            </button>-->
                        </el-form-item>
                    </el-form>
                    <!-- <div class="text-center mb-2">

          </div>-->

                    <!-- <div
                        class="dialog-mask"
                        style="background-color: rgba(255, 255, 255, 0.5)"
                        v-loading=""
                        element-loading-text="Loading..."
                        element-loading-background="transparent"
                    ></div> -->
                </div>

                <!-- /.login-card-body -->
            </div>
        </div>
        <!-- /.login-box -->
    </div>
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
        submitForm(formName) {
            this.$refs[formName]
                .validate()
                .then(e => {
                    store.dispatch("login/login", this.$message);
                })
                .catch(e => {});
        },
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
</script>
