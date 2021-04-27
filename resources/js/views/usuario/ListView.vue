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
                <h3>Usuarios  <i v-if="loading_table" class="el-icon-loading" style="font-size: 1.3rem;"></i></h3>
            </div>
            <div class="pull-right">
                <router-link v-on:click.native="CLEAR_FORM" :to="{ name: 'addusuario' }">
                    <el-button type="primary" >
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
                            v-model="$store.state.usuario.withTrashed"
                            active-text="todos"
                            inactive-text="solo activos"
                            @change="$store.dispatch('usuario/getItems')"
                        >
                        </el-switch>
                    </el-form-item>
                </el-form>

            </div>
            <div class="pull-right">
                <el-form :inline="true" class="demo-form-inline">
                    <el-form-item label="Buscar por:">
                        <el-input
                            placeholder="Nombre"
                            v-model="$store.state.usuario.searchQuery"
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
                <el-table
                    :fit="true"
                    stripe
                    :data="pageOfItems"
                    :default-sort="{prop: 'id_usuario', order: 'descending'}"
                    style="width: 100%"
                >
                    <el-table-column width="60" label="ID">
                        <template slot-scope="scope">
                            {{ scope.row.id_usuario }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="funcionario.nombre" label="Nombre" width="400" sortable>
                        <template slot-scope="scope">
                            {{ `${scope.row.funcionario.nombre} ${scope.row.funcionario.apellido}` }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="rol" label="Rol" width="150" sortable>
                        <template slot-scope="scope">
                            <el-button
                                :disabled="scope.row.funcionario.deleted_at || scope.row.id_usuario == $store.state.login.user.id_usuario"
                                :loading="loading_form_rol && scope.$index == self"
                                :type="scope.row.rol == 'ADMINISTRADOR' ? 'info' : 'warning'"
                                size="mini"
                                @click="ChangeRol(scope.$index,scope.row)"
                            >{{ scope.row.rol == 'ADMINISTRADOR' ? 'Admin' : 'Invitado' }}</el-button>
                        </template>
                    </el-table-column>

                    <el-table-column prop="deleted_at" label="Estado" width="180" sortable>
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
                            <el-button
                                v-if="!scope.row.deleted_at"
                                :loading="loading_form_reset && scope.$index == self"
                                type="default"
                                size="mini"
                                @click="ResetPassword(scope.$index, scope.row)"
                            >Restablecer</el-button>
                            <el-button
                                :disabled="scope.row.id_usuario == $store.state.login.user.id_usuario"
                                v-if="!scope.row.deleted_at"
                                :loading="loading_form && scope.$index == self"
                                type="danger"
                                size="mini"
                                @click="OnClickAD(scope.$index, scope.row)"
                            >Eliminar</el-button>
                            <el-button
                                v-if="scope.row.deleted_at"
                                :loading="loading_form && scope.$index == self"
                                :disabled="scope.row.funcionario.deleted_at"
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
            value :true,
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
        ...mapState("usuario", [
            "items",
            "loading_form",
            "loading_form_rol",
            "loading_form_reset",
            "loading_form_delete",
            "loading_table",
            "alert",
            "data_form"
        ]),
        PerPage: function() {
            return this.perpage ? parseInt(this.perpage) : 25;
        },
        ...mapGetters("usuario", [`GET_FILTER_ITEMS`]),
    },
    methods: {
        ...mapMutations("usuario",["CLEAR_FORM"]),
        refresh() {
            let self = this.$refs;
            setTimeout(() => {
                self.jw.setPage(1);
            }, 0);
        },
        ResetPassword(index,row){
            this.$confirm(
                  `¿ Esta seguro que desea restablecer los datos de acceso por defecto del usuario ${row.funcionario.nombre} ${row.funcionario.apellido} ?`,
                  "Advertencia",
                  {
                      confirmButtonText: 'Sí restablecer',
                      cancelButtonText: "Cancelar",
                      type: "warning"
                  }
              )
                  .then(() => {
                      this.self = index;
                      store.dispatch("usuario/resetPassword", {
                          id: row.id_usuario,
                          message: this.$message,
                          progress: this.$Progress
                      });
                  })
                  .catch(() => {
                      return null;
                  });
        },
        ChangeRol(index, row){
            this.self = index;
            store.dispatch("usuario/changeRole", {
                id: row.id_usuario,
                message: this.$message,
                progress: this.$Progress
            });
        },
        OnClickAD(index, row) {
            this.$confirm(
                `¿ Esta seguro que desea ${row.deleted_at? 'activar' : 'eliminar'} al usuario ${row.funcionario.nombre} ${row.funcionario.apellido} ?`,
                "Advertencia",
                {
                    confirmButtonText: row.deleted_at ? 'Sí activar' : 'Sí Eliminar',
                    cancelButtonText: "Cancelar",
                    type: "warning"
                }
            )
                .then(() => {
                    this.self = index;
                    store.dispatch("usuario/deleteItem", {
                        id: row.id_usuario,
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
        store.state.usuario.withTrashed = false;
        store.dispatch('login/getUser');
        store.dispatch("usuario/getItems");
    },
    // beforeRouteEnter(to,from,next){
    //     if (store.getters["login/getUserLogged"].rol == 'ADMINISTRADOR') {
    //         next();
    //     } else {
    //         next(false);
    //     }
    // }
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
