<template>

    <div class="col-md-8">
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
                <h3>MI perfil</h3>
            </div>
            <div class="pull-right">
<!--                <router-link v-on:click.native="CLEAR_FORM" :to="{ name: 'addpartida' }">-->
<!--                    <el-button type="primary" size="small">-->
<!--                        Nuevo-->
<!--                        <i class="fas fa-plus"></i>-->
<!--                    </el-button>-->
<!--                </router-link>-->
            </div>
        </div>

        <el-button type="primary">Cambiar datos de acceso</el-button>
        <br><br>
        <div class="card">


            <div class="card-body">
                <p> <b>Nombre : </b> Bryan Fernandez Flores </p>
                <p> <b>usuario: </b> SPbryan <br></p>

<!--                <el-form-->
<!--                    class="labeles"-->
<!--                    :model="data_form"-->
<!--                    :rules="rules"-->
<!--                    ref="PerfilForm"-->
<!--                    label-width="180px"-->
<!--                >-->
<!--                    <el-form-item label="Nombre :" prop="nombre">-->
<!--                        <el-input :disabled="true" style="width:400px" v-model="data.nombre"></el-input>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item label="C.I:" prop="apellido">-->
<!--                        <el-input style="width:400px" :disabled="true" v-model="data.apellido"></el-input>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item label="Usuario:" prop="documento">-->
<!--                        <el-input style="width:200px" v-model="data.documento"></el-input>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item>-->
<!--                        <el-button-->
<!--                            type="primary"-->
<!--                            :loading="loading_form"-->
<!--                            @click="submitForm('FuncionarioAddForm')"-->
<!--                        >-->
<!--                            Registar-->
<!--                            <i class="fas fa-save"></i>-->
<!--                        </el-button>-->
<!--                        <el-button @click="cancelForm('FuncionarioAddForm')">Cancelar</el-button>-->
<!--                    </el-form-item>-->
<!--                </el-form>-->
            </div>
        </div>

    </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import store from "../../store";
export default {

    data() {
        return {
            self: null,
        };
    },
    computed: {
        ...mapState("partida", [
            "items",
            "loading_form",
            "loading_table",
            "alert",
            "data_form"
        ]),
        ...mapGetters("partida", ["GET_FILTER_ITEMS"]),
    },
    methods: {
        ...mapMutations("partida", ["SET_EDIT_FORM", "CLEAR_FORM"]),
        OnClickSave(index, row) {
            this.$confirm(
                `¿ Esta seguro que desea ${row.deleted_at? 'activar' : 'eliminar'} la partida ${row.nombre} ?`,
                "Advertencia",
                {
                    confirmButtonText: row.deleted_at ? 'Sí activar' : 'Sí Eliminar',
                    cancelButtonText: "Cancelar",
                    type: "warning"
                }
            )
                .then(() => {
                    this.self = index;
                    store.dispatch("partida/deleteItem", {
                        id: row.id,
                        message: this.$message,
                        progress: this.$Progress
                    });
                })
                .catch(() => {
                    return null;
                });
        },

    },
    created() {
        store.dispatch("partida/getItems");
    },
};
</script>

<style>

</style>
