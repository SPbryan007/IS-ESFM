<template>
  <nav
    class="main-header navbar navbar-expand navbar-light navbar-warning"
    style="background-color:#fff"
  >
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#">
          <i class="fas fa-bars"></i>
        </a>
      </li>
      <!-- "require('@/assets/${`destination.image`}')" -->
      <!-- <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">Home</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Contact</a>
      </li>-->
    </ul>

    <!-- SEARCH FORM -->
    <!-- <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>-->

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Messages Dropdown Menu -->
<!--      <li class="nav-item dropdown">-->
<!--        <a class="nav-link" data-toggle="dropdown" href="#">-->
<!--          <i class="fa fa-users mr-2"></i>-->
<!--        </a>-->
<!--        <div class="dropdown-menu dropdown-menu-right">-->
<!--          <a href="#" class="dropdown-item">-->
<!--            <i class="fas fa-user mr-2"></i> Mi perfil-->
<!--          </a>-->
<!--          <div class="dropdown-divider"></div>-->
<!--          <a href="#" class="dropdown-item" @click="logout">-->
<!--            <i class="fas fa-sign-out-alt mr-2"></i>Cerrar session-->
<!--          </a>-->
<!--        </div>-->
<!--      </li>-->
      <!-- Notifications Dropdown Menu -->
<!--      <li class="nav-item dropdown">-->
<!--        <a class="nav-link" data-toggle="dropdown" href="#">-->
<!--          <i class="far fa-bell"></i>-->
<!--          <span class="badge badge-warning navbar-badge">15</span>-->
<!--        </a>-->
<!--        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">-->
<!--          <span class="dropdown-item dropdown-header">15 Notifications</span>-->
<!--          <div class="dropdown-divider"></div>-->
<!--          <a href="#" class="dropdown-item">-->
<!--            <i class="fas fa-envelope mr-2"></i> 4 new messages-->
<!--            <span class="float-right text-muted text-sm">3 mins</span>-->
<!--          </a>-->
<!--          <div class="dropdown-divider"></div>-->
<!--          <a href="#" class="dropdown-item">-->
<!--            <i class="fas fa-users mr-2"></i> 8 friend requests-->
<!--            <span class="float-right text-muted text-sm">12 hours</span>-->
<!--          </a>-->
<!--          <div class="dropdown-divider"></div>-->
<!--          <a href="#" class="dropdown-item">-->
<!--            <i class="fas fa-file mr-2"></i> 3 new reports-->
<!--            <span class="float-right text-muted text-sm">2 days</span>-->
<!--          </a>-->
<!--          <div class="dropdown-divider"></div>-->
<!--          <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>-->
<!--        </div>-->
<!--      </li>-->

        <li class="nav-item">
            <span class="nav-link" data-widget="control-sidebar" data-slide="true" href="#">
                <i class="fas fa-clock"></i> {{ $store.state.periodo.current? $store.state.periodo.current.nombre : 'Sin definir' }}
            </span>
        </li>
        <li class="nav-item">
            <a @click="AbrirManual" class="nav-link" data-widget="control-sidebar" data-slide="true" href="#">
                <i class="fas fa-question"></i> Manual.
            </a>
        </li>
      <li class="nav-item">
        <a class="nav-link" @click="logout" data-widget="control-sidebar" data-slide="true" href="#">
          <i class="fas fa-power-off"></i> Salir
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex";
import store from "../store/index";
export default {
  data() {
    return {

    };
  },
  methods: {
    ...mapState(["authenticated"]),
    ...mapActions("login", ["logout"]),
      AbrirManual(){
          window.open('http://almacen.esfm/Manual.pdf', '_blank')
      }
  },
  mounted() {

  },
  created() {
      store.dispatch('periodo/verify');
    }
};
</script>
<style>
.navbar-dark .navbar-nav .nav-link {
  color: rgba(52, 58, 64, 0.6);
}
</style>
