
<template>
  <aside
    class="main-sidebar sidebar-dark-danger elevation-1"
    style="background-color: #2d373c"
  >
    <!-- Brand Logo -->
    <a
      href="index3.html"
      class="brand-link navbar-white"
      style="background-color: #2d373c; color: #ffffffcc"
    >
      <img
        :src="'../img/logo.jpeg'"
        alt="AdminLTE Logo"
        class="brand-image img-circle"
        style="opacity: 0.8;margin-left: unset"
      />
      <span class="brand-text font-weight-light">
        <strong>ALMACEN</strong>
      </span>
    </a>

    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img
            :src="'../img/avatar_male.png'"
            class="img-circle"
            alt="User Image"
          />
        </div>
        <div class="info">
          <a href="#" class="d-block">{{ this.$store.state.login.user ? this.$store.state.login.user.funcionario.nombre+' '+this.$store.state.login.user.funcionario.apellido : ''}}</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column nav-flat nav-legacy"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
          with font-awesome or any other icon font library-->
          <li class="nav-item">
            <router-link
              :to="{ name: 'dashboard' }"
              class="nav-link nav-button"
            >
              <i class="nav-icon fas fa-home"></i>
              <p>Inicio</p>
            </router-link>
          </li>
          <li class="nav-header">Modulos</li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-button">
              <i class="nav-icon fas fa-boxes"></i>
              <p>Almacen</p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{ name: 'item' }" class="nav-link">
                  <i class="fas fa-box-open nav-icon"></i>
                  <p>Articulos</p>
                </router-link>
              </li>
<!--                <li class="nav-item">-->
<!--                    <router-link :to="{ name: 'lotes' }" class="nav-link">-->
<!--                        <i class="fas fa-layer-group nav-icon"></i>-->
<!--                        <p>Stock</p>-->
<!--                    </router-link>-->
<!--                </li>-->
              <li class="nav-item">
                <router-link :to="{ name: 'partida' }" class="nav-link">
                  <i class="fas fa-list nav-icon"></i>
                  <p>Partidas Presupuestarias</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'unidad_medida' }" class="nav-link">
                  <i class="fas fa-balance-scale-right nav-icon"></i>
                  <p>Unidades de medida</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-arrow-right"></i>
              <p>Ingreso</p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{ name: 'proveedor' }" class="nav-link">
                  <i class="fas fa-users nav-icon"></i>
                  <p>Proveedores</p>
                </router-link>
              </li>
<!--              <li class="nav-item">-->
<!--                <router-link :to="{ name: 'item' }" class="nav-link">-->
<!--                  <i class="fas fa-box-open nav-icon"></i>-->
<!--                  <p>Articulos</p>-->
<!--                </router-link>-->
<!--              </li>-->
              <li class="nav-item">
                <router-link :to="{ name: 'ingreso' }" class="nav-link">
                  <i class="fas fa-dolly-flatbed nav-icon"></i>
                  <p>Gestion de ingresos</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-arrow-left"></i>
              <p>Salidas</p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{ name: 'solicitante' }" class="nav-link">
                  <i class="fas fa-users nav-icon"></i>
                  <p>Solicitantes</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'unidad' }" class="nav-link">
                  <i class="fas fa-network-wired nav-icon"></i>
                  <p>Unidades Solcitantes</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'salida' }" class="nav-link">
                  <i class="fas fa-dolly-flatbed nav-icon"></i>
                  <p>Gestion de salidas</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-file-alt"></i>
              <p>Reportes</p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{ name: 'movimiento' }" class="nav-link">
                  <i class="fas fa-recycle nav-icon"></i>
                  <p>Movimientos de almacen</p>
                </router-link>
              </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'saldos' }" class="nav-link">
                        <i class="fas fa-money-bill-wave nav-icon"></i>
                        <p>Saldos de almacen</p>
                    </router-link>
                </li>
              <li class="nav-item">
                <router-link :to="{ name: 'general' }" class="nav-link">
                  <i class="fas fa-list-ul nav-icon"></i>
                  <p>Reporte general</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'kardex_individual' }" class="nav-link">
                  <i class="fas fa-list-ul nav-icon"></i>
                  <p>Kardex individual</p>
                </router-link>
              </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'reporte_ingresos' }" class="nav-link">
                        <i class="fas fa-sign-in-alt nav-icon"></i>
                        <p>Ingresos</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'reporte_salidas' }" class="nav-link">
                        <i class="fas fa-sign-out-alt nav-icon"></i>
                        <p>Salidas</p>
                    </router-link>
                </li>
            </ul>
          </li>
<!--            <li class="nav-item has-treeview">-->
<!--                <a href="#" class="nav-link">-->
<!--                    <i class="nav-icon fas fa-file-alt"></i>-->
<!--                    <p>Consultas</p>-->
<!--                </a>-->
<!--                <ul class="nav nav-treeview">-->
<!--                    <li class="nav-item">-->
<!--                        <router-link :to="{ name: 'ingreso_proveedor' }" class="nav-link">-->
<!--                            <i class="fas fa-truck"></i>-->
<!--                            <p>Ingresos por proveedor</p>-->
<!--                        </router-link>-->
<!--                    </li>-->
<!--                    <li class="nav-item">-->
<!--                        <router-link :to="{ name: 'ingreso_usuario' }" class="nav-link">-->
<!--                            <i class="fas fa-truck"></i>-->
<!--                            <p>Ingresos por usuario</p>-->
<!--                        </router-link>-->
<!--                    </li>-->
<!--                </ul>-->
<!--                <ul class="nav nav-treeview">-->
<!--                    <li class="nav-item">-->
<!--                        <router-link :to="{ name: 'salida_solicitante' }" class="nav-link">-->
<!--                            <i class="fas fa-truck"></i>-->
<!--                            <p>Salidas por solicitante</p>-->
<!--                        </router-link>-->
<!--                    </li>-->
<!--                    <li class="nav-item">-->
<!--                        <router-link :to="{ name: 'salida_usuario' }" class="nav-link">-->
<!--                            <i class="fas fa-truck"></i>-->
<!--                            <p>Salidas por usuario</p>-->
<!--                        </router-link>-->
<!--                    </li>-->
<!--                </ul>-->
<!--            </li>-->
          <li class="nav-item" v-if=" this.$store.state.login.user ? this.$store.state.login.user.rol == 'ADMINISTRADOR' : false">
            <router-link :to="{ name: 'usuario' }" class="nav-link nav-button">
              <i class="nav-icon fas fa-users"></i>
              <p>Gestion de usuarios</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'periodo' }" class="nav-link nav-button">
              <i class="nav-icon fas fa-stopwatch"></i>
              <p>Periodo contable</p>
            </router-link>
          </li>
          <li class="nav-header">Otros</li>
            <li class="nav-item">
                <router-link
                    :to="{ name: 'funcionario' }"
                    class="nav-link nav-button"
                >
                    <i class="nav-icon fas fa-users"></i>
                    <p>Funcionarios</p>
                </router-link>
            </li>
<!--          <li class="nav-item">-->
<!--            <router-link-->
<!--              :to="{ name: 'settings' }"-->
<!--              class="nav-link nav-button"-->
<!--            >-->
<!--              <i class="nav-icon fas fa-calendar-alt"></i>-->
<!--              <p>Configuraciones</p>-->
<!--            </router-link>-->
<!--          </li>-->
            <li class="nav-item">
                <router-link
                    :to="{ name: 'settings' }"
                    class="nav-link nav-button"
                >
                    <i class="nav-icon fas fa-cog"></i>
                    <p>Configuraciones</p>
                </router-link>
            </li>
         <!-- <li class="nav-header">Configuraciones</li>-->
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
  </aside>
</template>
<script>
import store from "../store";
export default {
  data() {
    return {
        user : null
    };
  },
  methods: {},
  created() {
      store.dispatch('login/getUser');

  },
};
</script>
<style lang="css">
.nav-button {
  /* padding: 0.625rem 40px 0.625rem 24px; */
  /* color: #fff !important; */
  padding: 0.7rem 0.8rem !important;
  font-family: Nunito;
  font-weight: 300; /**700 */
  font-size: 15px;
  letter-spacing: 0.01em;
  text-transform: none;
  line-height: 1.25rem;
}

.sidebar-dark-warning .nav-sidebar.nav-legacy > .nav-item > .nav-link.active,
.sidebar-light-warning .nav-sidebar.nav-legacy > .nav-item > .nav-link.active {
  background-color: #283136;
    border-color: #6576ff;
}
.sidebar-dark-danger .nav-sidebar.nav-legacy > .nav-item > .nav-link.active,
.sidebar-light-danger .nav-sidebar.nav-legacy > .nav-item > .nav-link.active {
  background-color: #283136;
    border-color: #6576ff;
}
/* [class*="sidebar-light-"] .nav-sidebar > .nav-item.menu-open > .nav-link,
[class*="sidebar-light-"] .nav-sidebar > .nav-item:hover > .nav-link {
  background-color: rgba(255, 193, 7, 0.35);
  color: #212529;
} */
[class*="sidebar-dark-"] .nav-sidebar > .nav-item.menu-open > .nav-link,
[class*="sidebar-dark-"] .nav-sidebar > .nav-item:hover > .nav-link,
[class*="sidebar-dark-"] .nav-sidebar > .nav-item > .nav-link:focus {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-color: #6576ff;
  /*border-color: #bd2525;*/
}
[class*="sidebar-dark-"]
  .nav-flat
  .nav-item
  .nav-treeview
  > .nav-item
  > .nav-link,
[class*="sidebar-dark-"]
  .nav-flat
  .nav-item
  .nav-treeview
  > .nav-item
  > .nav-link.active {
    border-color: #6576ff;
}
.nav-flat.nav-sidebar > .nav-item .nav-treeview .nav-item > .nav-link,
.nav-flat.nav-sidebar > .nav-item > .nav-treeview .nav-item > .nav-link {
  border-left: 0.2rem solid;
    border-color: #6576ff;
}
</style>
