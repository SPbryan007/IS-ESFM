<template>
  <aside class="main-sidebar sidebar-dark-danger elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link navbar-danger">
      <img
        :src="'../img/AdminLTELogo.png'"
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: .8"
      />
      <span class="brand-text font-weight-light">
        <strong>SAP - ESFM</strong>
      </span>
    </a>

    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img :src="'../img/user2-160x160.jpg'" class="img-circle elevation-2" alt="User Image" />
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column text-sm nav-legacy nav-compact nav-child-indent"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
          with font-awesome or any other icon font library-->
          <li class="nav-item">
            <router-link :to="{name:'dashboard'}" class="nav-link">
              <i class="nav-icon fas fa-home"></i>
              <p>Inicio</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'proveedor'}" class="nav-link">
              <i class="nav-icon fas fa-people-arrows"></i>
              <p>Proveedores</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'solicitante'}" class="nav-link">
              <i class="nav-icon fas fa-people-arrows"></i>
              <p>Solicitantes</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'unidad'}" class="nav-link">
              <i class="nav-icon fas fa-project-diagram"></i>
              <p>Unidades</p>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{name:'item'}" class="nav-link">
              <i class="nav-icon fas fa-box-open"></i>
              <p>Articulos</p>
            </router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-arrow-circle-right"></i>
              <p>Entradas</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-arrow-circle-left"></i>
              <p>Salidas</p>
            </a>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'partida'}" class="nav-link">
              <i class="nav-icon fas fa-ad"></i>
              <p>Partidas presupuestarias</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'unidad_medida'}" class="nav-link">
              <i class="nav-icon fas fa-weight"></i>
              <p>Unidad de medida</p>
            </router-link>
          </li>
          <li class="nav-header">CONFIGURACIONES</li>
          <li class="nav-item">
            <router-link :to="{name:'gestion'}" class="nav-link">
              <i class="nav-icon fas fa-calendar"></i>
              <p>Gestion</p>
            </router-link>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-box-open"></i>
              <p>Productos</p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="login" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v1</p>
                </router-link>
              </li>
              <li class="nav-item">
                <a href="./index2.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v2</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="./index3.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v3</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="pages/widgets.html" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Widgets
                <span class="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              <p>
                Layout Options
                <i class="fas fa-angle-left right"></i>
                <span class="badge badge-info right">6</span>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/layout/top-nav.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Top Navigation</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/top-nav-sidebar.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Top Navigation + Sidebar</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/boxed.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Boxed</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/fixed-sidebar.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Fixed Sidebar</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/fixed-topnav.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Fixed Navbar</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/fixed-footer.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Fixed Footer</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/collapsed-sidebar.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Collapsed Sidebar</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Charts
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/charts/chartjs.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>ChartJS</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/charts/flot.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Flot</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/charts/inline.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Inline</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
  </aside>
</template>
<script>
export default {
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
