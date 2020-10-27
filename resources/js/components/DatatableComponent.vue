<template>
    <div>
        <!-- <div class="pb-2" v-if="error_table">
            <el-alert
                title="Ha ocurrido un error al cargar los datos"
                type="error"
                description="Verifique la conexión con la base de datos"
            ></el-alert>
        </div> -->
        <table
            id="users-table"
            class="table table-striped table-bordered"
            style="width:100%"
        >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Usuario</th>
                    <th>Rol</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import store from "../../store";
export default {
    name: "DataTableComponent",
    props: {
        data: Array
    },
    data() {
        return {
            dataTable: null
        };
    },
    mounted() {
        let users = [];
        this.dataTable = $("#users-table").DataTable({});
        this.data.forEach(item => {
            this.dataTable.row
                .add([
                    item.id_usuario,
                    item.usuario,
                    item.rol,
                    item.estado ? "INACTIVO" : "ACTIVO"
                ])
                .draw(false);
        });
    }
};
</script>
