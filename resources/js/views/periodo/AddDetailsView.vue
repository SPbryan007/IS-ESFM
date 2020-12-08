<template>
  <div class="col-md-6 offset-md-3">
    <div class="card bg-light">
      <div class="card-header border-0">
        <h3 class="card-title">Detalles de inicio de gestion</h3>
        <div class="card-tools"></div>
      </div>
      <div class="card-body">
        <div class="alert alert-info alert-dismissible">
          <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
          <h5>
            <i class="icon fas fa-info"></i> Alert!
          </h5>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h4 class="text-center">
              <p>{{ data.nombre }}</p>
              <p>
                {{
                `${moment(data.fecha_inicio.date).format(
                "MMM. D, YYYY "
                )} - ${moment(data.fecha_fin.date).format(
                "MMM. D, YYYY "
                )}`
                }}
              </p>
            </h4>
          </div>
        </div>
        <table class="table table-striped table-valign-middle">
          <thead>
            <tr>
              <th>Item</th>
              <th>Stock inicial</th>
              <th>Saldo inicial</th>
              <th>Ver</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td>
                <strong>{{ item.nombre }}</strong>
              </td>
              <td>
                <h6>
                  <span class="badge bg-success">{{ item.stock + " " + item.um_sigla }}</span>
                </h6>
              </td>
              <td>
                <h6>
                  <span class="badge bg-info">
                    {{
                    item.saldo + " Bs"
                    }}
                  </span>
                </h6>
              </td>
              <td>
                <a href="#" class="btn btn-tool btn-sm">
                  <i class="fas fa-eye"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <spinner v-if="loading"></spinner>
      <div v-else class="col-md-6">
        <button
          type="button"
          @click="OnClickCancelDetails"
          class="btn btn-default btn-block"
        >Cancelar</button>
      </div>
      <div class="col-md-6">
        <button type="button" class="btn btn-block btn-info" @click="AddGestion()">INICIAR GESTION</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import * as lang from "vuejs-datepicker/src/locale";
import store from "../../store/index";
import moment from "moment";
import { router } from "../../routes";
export default {
  data() {
    return {
      moment: moment,
      languages: lang,
      has_errors: false
    };
  },
  computed: {
    ...mapState("item", ["items"]),
    ...mapState("gestion", ["data", "error", "loading", "disabled", "success"])
  },
  methods: {
    hola() {
      // const swalWithBootstrapButtons = this.$swal.mixin({
      //     customClass: {
      //         confirmButton: "btn btn-success",
      //         cancelButton: "btn btn-danger"
      //     },
      //     buttonsStyling: false
      // });
      // swalWithBootstrapButtons
      //     .fire({
      //         title: "Are you sure?",
      //         text: "You won't be able to revert this!",
      //         icon: "warning",
      //         showCancelButton: true,
      //         confirmButtonText: "Yes, delete it!",
      //         cancelButtonText: "No, cancel!",
      //         reverseButtons: true
      //     })
      //     .then(result => {
      //         if (result.value) {
      //             swalWithBootstrapButtons.fire(
      //                 "Deleted!",
      //                 "Your file has been deleted.",
      //                 "success"
      //             );
      //         } else if (
      //             /* Read more about handling dismissals below */
      //             result.dismiss === Swal.DismissReason.cancel
      //         ) {
      //             swalWithBootstrapButtons.fire(
      //                 "Cancelled",
      //                 "Your imaginary file is safe :)",
      //                 "error"
      //             );
      //         }
      //     });
    },
    ...mapActions("gestion", [
      "OnClickCancelDetails",
      "VALIDATE_START_DATE",
      "VALIDATE_END_DATE"
    ]),
    AddGestion() {
      const data_form = this.$store.state.gestion.data;
      if (
        !data_form.nombre ||
        !data_form.fecha_inicio.date ||
        !data_form.fecha_fin.date ||
        !data_form.fecha_inicio.valid ||
        !data_form.fecha_fin.valid
      ) {
        router.push({ name: "addgestion" });
      } else {
        this.$swal({
          title: "¿ Esta seguro ?",
          text:
            "Si existe una periodo en curso esta se cerrará y no se podra revertir una vez iniciada la periodo",
          type: "warning",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Si, Iniciar periodo",
          cancelButtonText: "Cancelar",
          showCloseButton: true,
          showLoaderOnConfirm: true
        }).then(result => {
          if (result.value) {
            this.has_errors = false;
            this.$store.dispatch("gestion/addGestion", this.$Progress);
            this.$swal("Correcto", "Gestion iniciada exitosamente", "success");
          } else {
            this.$swal("Cancelada", "Cancel deletion", "info");
          }
        });
      }
    }
  },
  created() {
    this.$store.dispatch("item/GET_DATA_FROM_SERVER");
  },
};
</script>
