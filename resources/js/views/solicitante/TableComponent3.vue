<template>
    <div>
        <CDataTable
            :table-filter="{ label:'Buscar',placeholder:'Filtrar por..'}"
            :items-per-page-select="{label:'Mostrar'}"
            sorter
            :noItemsView="{ noResults:'No se encontraron registros.', noItems: 'No hay registros' }"
            :hover="true"
            :striped="true"
            :bordered="true"
            :items="GET_ITEMS_SOLICITANTE"
            :fields="fields"
            :items-per-page="5"
            :dark="false"

            pagination
            :loading="false"
        >
            <template #Accion="{item}">
                <td>
                    <router-link
                        v-on:click.native="SET_EDIT_FORM(item)"
                        :to="{ name: 'editunidad_medida',params:{id:item.unidad_id } }"
                    >
                        <el-button size="mini">Editar</el-button>
                    </router-link>
                    <el-button
                        type="danger"
                        size="mini"
                        @click="OnClickDelete(item.$index, item)"
                    >Eliminar</el-button>
                </td>
            </template>
        </CDataTable>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import store from "../../store";
export default {
    name:'TableComponent3',

    data() {
        return {
            fields:[
                {key: 'id_solicitante',label:'Nro.'},
                {key: 'nombre',label:'Nombre',sorter: true,filter: true},
                {key: 'cargo',label:'Cargo',sorter: true,filter: true},
                {key: 'unidad_nombre',label:'Unidad',sorter: true,filter: true},
                {key:'Accion',label:'',sorter:false,filter:false, _style: 'width:17%'},
            ]
        };
    },
    computed: {
        ...mapState("solicitante", [
            "items",
            "loading_table",
            "error_table",
            "loading_form"
        ]),
        ...mapGetters("solicitante", ["GET_ITEMS_SOLICITANTE"]),
    },
    methods: {
        ...mapMutations("solicitante", ["SET_EDIT_FORM", "CLEAR_FORM"]),
        OnClickDelete(index, row) {
            this.$confirm(
                `¿ Esta seguro que desea eliminar al solicitante ${row.nombre} ${row.apellido} ?`,
                "Advertencia",
                {
                    confirmButtonText: "Si eliminar",
                    cancelButtonText: "Cancelar",
                    type: "warning"
                }
            )
                .then(() => {
                    this.self = index;
                    store.dispatch("solicitante/deleteItem", {
                        index,
                        id: row.idSolicitante,
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
        store.dispatch("solicitante/getItems");
        store.dispatch("unidad/getItems");
    }
};
</script>
