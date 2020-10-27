<template>
  <div class="col-md-8 offset-md-2">
    <div class="card bg-light">
      <div class="card-header border-0">
        <h3 class="card-title">Agregar</h3>
        <div class="card-tools"></div>
      </div>
      <div class="card-body">
        <form @submit.prevent="checkFormEditItem()">
          <div class="row">
            <div class="form-group mb-3 col-md-4">
              <label for="name_add_item" class="font-weight-normal">Nombre :</label>
              <input
                v-model="edit_form.nombre"
                type="text"
                :class="['form-control',!$store.state.item.edit_form.nombre && has_errors ? 'is-invalid':'' ]"
                placeholder="Inserte el nombre"
              />
              <span class="error invalid-feedback">Este campo es obligatorio *</span>
            </div>
            <div class="form-group mb-3 col-md-4">
              <label for="codigo_add_item" class="font-weight-normal">Codigo :</label>
              <input
                v-model="edit_form.codigo"
                type="text"
                :class="['form-control',!$store.state.item.edit_form.codigo && has_errors ? 'is-invalid':'' ]"
                placeholder="Inserte el codigo"
              />
              <span class="error invalid-feedback">Este campo es obligatorio *</span>
            </div>
            <div class="form-group mb-3 col-md-4">
              <label for="partida_add_item" class="font-weight-normal">Partida :</label>
              <model-select
                :options="$store.state.partida.partidas"
                v-model="edit_form.partida"
                placeholder="Seleccione la partida"
                :class="['form-control',!$store.state.item.edit_form.partida && has_errors ? 'is-invalid':'' ]"
                :isError="!$store.state.item.edit_form.partida && has_errors ? true : false"
              ></model-select>
              <span class="error invalid-feedback">Este campo es obligatorio*</span>
            </div>

            <div class="form-group mb-3 col-md-4">
              <label for="linea_add_item" class="font-weight-normal">Linea :</label>
              <model-select
                :options="lineas"
                v-model="edit_form.linea"
                placeholder="Seleccione la linea"
                :class="['form-control',!$store.state.item.edit_form.linea && has_errors ? 'is-invalid':'' ]"
                :isError="!$store.state.item.edit_form.linea && has_errors ? true : false"
              ></model-select>
              <span class="error invalid-feedback">Este campo es obligatorio*</span>
            </div>

            <div class="form-group mb-3 col-md-4">
              <label for="linea_add_item" class="font-weight-normal">Unidad de medida :</label>
              <model-select
                :options="$store.state.unidad_medida.unidades_medida"
                v-model="edit_form.unidad_medida"
                placeholder="Seleccione la unidad de medida"
                :class="['form-control',!$store.state.item.edit_form.unidad_medida && has_errors ? 'is-invalid':'' ]"
                :isError="!$store.state.item.edit_form.unidad_medida && has_errors ? true : false"
              ></model-select>
              <span class="error invalid-feedback">Este campo es obligatorio*</span>
            </div>
          </div>
          <div class="pull-rigth">
            <spinner v-if="loading"></spinner>
            <div v-else>
              <button type="button" @click="OnClickCancel" class="btn btn-default">Cancelar</button>
              <button type="submit" class="btn btn-info">
                <span>
                  <i class="fas fa-save"></i>
                  Registrar
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import store from "../../store/index";
export default {
  data() {
    return {
      has_errors: false,
      lineas: [
        { value: 1, text: "Linea 1" },
        { value: 2, text: "Linea 2" },
        { value: 3, text: "Linea 3" }
      ]
    };
  },
  computed: {
    ...mapState("item", [
      "edit_form",
      "error",
      "loading",
      "disabled",
      "success"
    ]),
    ...mapGetters("partida", ["GET_SELECT_PARTIDAS"]),
    ...mapGetters("unidad_medida", ["GET_SELECT_UM"])
  },
  methods: {
    ...mapActions("item", ["OnClickCancel"]),
    checkFormEditItem() {
      const data_form = this.$store.state.item.edit_form;
      if (
        !data_form.nombre ||
        !data_form.codigo ||
        !data_form.unidad_medida.value ||
        !data_form.partida.value ||
        !data_form.linea
      ) {
        this.has_errors = true;
      } else {
        this.has_errors = false;
        this.$store.dispatch("item/editItem", {
          progress: this.$Progress,
          confirm: this.$confirm,
          message: this.$message
        });
      }
    }
  }
};
</script>
