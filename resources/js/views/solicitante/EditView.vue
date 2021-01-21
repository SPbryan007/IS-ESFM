<template>
  <div class="col-md-12">
      <el-alert
          v-if="alert.show"
          :title="alert.title"
          :type="alert.color"
          :description="alert.message"
          @close="alert.show = false"
          show-icon
          closable
      >
      </el-alert>
      <div class="row justify-content-between mb-4  mr-1 ml-1  mt-4">
          <div class="pull-lef">
              <el-page-header  @back="goBack" content="Solicitante" class="mt-2"></el-page-header>
          </div>
          <div class="pull-right">
          </div>
      </div>
    <div class="card">
      <div class="card-header border-0">
        <h3 class="card-title">Editar solicitante</h3>
        <div class="card-tools"></div>
      </div>
      <div class="card-body">
<!--        <el-form
          class="labeles"
          :model="data_form"
          :rules="rules"
          ref="SolicitanteEditForm"
          label-width="180px"
        >
          <el-form-item label="Nombre :" prop="nombre">
            <el-input style="width:400px" v-model="data_form.nombre"></el-input>
          </el-form-item>
          <el-form-item label="Apellido :" prop="apellido">
            <el-input style="width:400px" v-model="data_form.apellido"></el-input>
          </el-form-item>
          <el-form-item label="CI :" prop="documento">
            <el-input style="width:150px" v-model="data_form.documento"></el-input>
          </el-form-item>
          <el-form-item label="Direccion :" prop="direccion">
            <el-input style="width:350px" v-model="data_form.direccion"></el-input>
          </el-form-item>
          <el-form-item label="Telefono :" prop="telefono">
            <el-input style="width:150px" v-model="data_form.telefono"></el-input>
          </el-form-item>
          <el-form-item label="Cargo :" prop="cargo">
            <el-input style="width:250px" v-model="data_form.cargo"></el-input>
          </el-form-item>
          <el-form-item label="Unidad :" prop="unidad">
            <el-select
              style="width:340px"
              v-model="data_form.unidad"
              filterable
              placeholder="Seleccione la partida"
              loading-text="buscando.."
              no-match-text="No se encontraron registros"
            >
              <el-option
                v-for="(item, index) in GET_ITEMS_UNIDAD"
                :key="index"
                :label="item.nombre"
                :value="item.idUnidad"
              ></el-option>
            </el-select>
            <router-link :to="{name:'addunidad'}">
              <el-button type="primary" icon="el-icon-plus"></el-button>
            </router-link>
          </el-form-item>

          <el-form-item>
            <el-button
              type="primary"
              :loading="loading_form"
              @click="submitForm('SolicitanteEditForm')"
            >
              Guardar cambios
              <i class="fas fa-save"></i>
            </el-button>
            <el-button @click="cancelForm('SolicitanteEditForm')">Cancelar</el-button>
          </el-form-item>
        </el-form>-->
          <el-form
              class="labeles"
              :model="data_form"
              :rules="rules"
              ref="SolicitanteEditForm"
              label-width="180px"
          >
              <el-form-item label="Funcionario :" prop="funcionario_id">
                  <el-select
                      disabled
                      style="width:400px"
                      v-model="data_form.funcionario_id"
                      filterable
                      placeholder="Seleccione el funcionario"
                      loading-text="buscando.."
                      no-match-text="No se encontraron registros"
                  >
                      <el-option
                          v-for="(item, index) in GET_ITEMS_FUNCIONARIO"
                          :key="index"
                          :label="`${item.nombre} ${item.apellido}`"
                          :value="item.id"
                      ></el-option>
                  </el-select>
              </el-form-item>
              <p></p>
              <el-form-item label="Cargo :" prop="cargo">
                  <el-input style="width:250px" v-model="data_form.cargo"></el-input>
              </el-form-item>
              <el-form-item label="Unidad :" prop="unidad_id">
                  <el-select
                      style="width:340px"
                      v-model="data_form.unidad_id"
                      filterable
                      placeholder="Seleccione la unidad "
                      loading-text="buscando.."
                      no-match-text="No se encontraron registros"
                  >
                      <el-option
                          v-for="(item, index) in GET_ITEMS_UNIDAD"
                          :key="index"
                          :label="item.nombre"
                          :value="item.id"
                      ></el-option>
                  </el-select>
                  <router-link :to="{name:'addunidad'}">
                      <el-button type="primary" icon="el-icon-plus"></el-button>
                  </router-link>
              </el-form-item>

              <el-form-item>
                  <el-button
                      type="primary"
                      :loading="loading_form"
                      @click="submitForm('SolicitanteEditForm')"
                  >
                      Guardar
                      <i class="fas fa-save"></i>
                  </el-button>
                  <el-button @click="cancelForm('SolicitanteEditForm')">Cancelar</el-button>
              </el-form-item>
          </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import store from "../../store/index";
import { router } from "../../routes";
export default {
  data() {
    return {
        rules: {
            cargo: [
                {
                    required: true,
                    message: "Este campo es obligatorio",
                    trigger: "blur",
                },
                { min: 3, message: "Debe contener al menos 3 letras.", trigger: "blur" },
            ],
            funcionario_id: [
                {
                    required: true,
                    message: "Este campo es obligatorio",
                    trigger: "change",
                },
            ],
            unidad_id: [
                {
                    required: true,
                    message: "Este campo es obligatorio",
                    trigger: "change",
                },
            ],
        },
    };
  },
  computed: {
    ...mapState("solicitante", [
      "data_form",
      "alert",
      "loading_form"
    ]),
    ...mapGetters("unidad", ["GET_ITEMS_UNIDAD"]),
      ...mapGetters("funcionario", ["GET_ITEMS_FUNCIONARIO"]),
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          store.dispatch("solicitante/editItem", {
            message: this.$message,
            progress: this.$Progress,
            id: this.$route.params.id
          });
          //router.go(-1);
        } else {
          return false;
        }
      });
    },
    cancelForm(formName) {
      this.$refs[formName].resetFields();
      router.push({ name: "solicitante" });
    },
      goBack() {
          this.$router.go(-1);
      }
  },
  created() {
      store.dispatch('login/getUser');
    store.dispatch("unidad/getItems");
    store.dispatch("funcionario/getItems");
  }
};
</script>
