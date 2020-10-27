<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>AdminLTE 3 | Dashboard</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Font Awesome -->

  <script src="{{ asset('js/app.js')}}"></script>
  <link rel="stylesheet" href="{{ asset('css/app.css') }}">

  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">

</head>

<body class="hold-transition sidebar-mini layout-fixed">
  <div id="app">
    <div class="wrapper">
      <!-- Navbar -->

      <div>
        <header-component></header-component>
      </div>
      <!-- /.navbar -->

      <!-- Main Sidebar Container -->
      {{-- sidebar-light-danger --}}
      <aside class="main-sidebar sidebar-dark-danger elevation-4">
        <!-- Brand Logo -->
        <a href="index3.html" class="brand-link navbar-danger">
          <img src="{{ asset('img/AdminLTELogo.png') }}" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
            style="opacity: .8">
          <span class="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        <!-- Sidebar -->
        <div>
          <sidebar-component></sidebar-component>
        </div>
        <!-- /.sidebar -->
      </aside>

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0 text-dark">Dashboard</h1>
              </div><!-- /.col -->
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Dashboard v1</li>
                </ol>
              </div><!-- /.col -->
            </div><!-- /.row -->
          </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
          <!-- /.container-fluid -->
          <div class="container-fluid">
            <example-component></example-component>
          </div>
          <!-- /.container-fluid -->
        </section>
        <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->
      <footer class="main-footer">
        <strong>Copyright &copy; 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong>
        All rights reserved.
        <div class="float-right d-none d-sm-inline-block">
          <b>Version</b> 3.0.2
        </div>
      </footer>

      <!-- Control Sidebar -->
      <aside class="control-sidebar control-sidebar-dark">
        <!-- Control sidebar content goes here -->
      </aside>
      <!-- /.control-sidebar -->
    </div>
    <!-- ./wrapper -->
  </div>

  <script>
    $(function () {
    $("#example1").DataTable();
    $('#example2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false,
    });
  });
  </script>
</body>

</html>








<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>{{ config('app.name', 'Laravel') }}</title>
  <!-- Scripts -->
  <script src="{{ asset('js/app.js') }}" defer></script>
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
  <!-- Styles -->
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body class="hold-transition sidebar-mini layout-fixed">
  <div id="app">
    <div class="wrapper">
      <!-- Navbar -->

      <div>
        <header-component></header-component>
      </div>
      <!-- /.navbar -->

      <!-- Main Sidebar Container -->
      {{-- sidebar-light-danger --}}
      <aside class="main-sidebar sidebar-dark-danger elevation-4">
        <!-- Brand Logo -->
        <a href="index3.html" class="brand-link navbar-danger">
          <img src="{{ asset('img/AdminLTELogo.png') }}" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
            style="opacity: .8">
          <span class="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        <!-- Sidebar -->
        <div>
          <sidebar-component></sidebar-component>
        </div>
        <!-- /.sidebar -->
      </aside>

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0 text-dark">Dashboard</h1>
              </div><!-- /.col -->
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Dashboard v1</li>
                </ol>
              </div><!-- /.col -->
            </div><!-- /.row -->
          </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
          <!-- /.container-fluid -->
          <div class="container-fluid">
            <example-component></example-component>
          </div>
          <!-- /.container-fluid -->
        </section>
        <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->
      <footer class="main-footer">
        <strong>Copyright &copy; 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong>
        All rights reserved.
        <div class="float-right d-none d-sm-inline-block">
          <b>Version</b> 3.0.2
        </div>
      </footer>

      <!-- Control Sidebar -->
      <aside class="control-sidebar control-sidebar-dark">
        <!-- Control sidebar content goes here -->
      </aside>
      <!-- /.control-sidebar -->
    </div>
    <!-- ./wrapper -->
  </div>
</body>

</html>









<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>AdminLTE 3 | Dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="{{ asset('js/app.js') }}" defer></script>
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
  <!-- Styles -->
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body class="hold-transition sidebar-mini layout-fixed">
  <div id="app">
    <div class="wrapper">
      <!-- Navbar -->

      <div>
        <header-component></header-component>
      </div>
      <!-- /.navbar -->

      <!-- Main Sidebar Container -->
      {{-- sidebar-light-danger --}}
      <aside class="main-sidebar sidebar-dark-danger elevation-4">
        <!-- Brand Logo -->
        <a href="index3.html" class="brand-link navbar-danger">
          <img src="{{ asset('img/AdminLTELogo.png') }}" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
            style="opacity: .8">
          <span class="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        <!-- Sidebar -->
        <div>
          <sidebar-component></sidebar-component>
        </div>
        <!-- /.sidebar -->
      </aside>

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0 text-dark">Dashboard</h1>
              </div><!-- /.col -->
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Dashboard v1</li>
                </ol>
              </div><!-- /.col -->
            </div><!-- /.row -->
          </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
          <!-- /.container-fluid -->
          <div class="container-fluid">
            @yield('content')
          </div>
          <!-- /.container-fluid -->
        </section>
        <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->
      <footer class="main-footer">
        <strong>Copyright &copy; 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong>
        All rights reserved.
        <div class="float-right d-none d-sm-inline-block">
          <b>Version</b> 3.0.2
        </div>
      </footer>

      <!-- Control Sidebar -->
      <aside class="control-sidebar control-sidebar-dark">
        <!-- Control sidebar content goes here -->
      </aside>
      <!-- /.control-sidebar -->
    </div>
    <!-- ./wrapper -->
  </div>

  <script>
    $(function () {
    $("#example1").DataTable();
    $('#example2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false,
    });
  });
  </script>
</body>

</html>





<template>
  <div>
    <navbar :app="this"></navbar>
    <spinner v-if="loading"></spinner>
    <div v-else-if="initiated">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  import  Navbar from './components/Navbar';
export default {
    name:'app',
    components : {
        Navbar
    },
    data() {
        return {
            user : null,
            loading:false,
            initiated:false,
            req: axios.create({
                baseUrl: BASE_URL
            })
        }
    },methods: {
        
        init(){
            this.loading = true;
            this.req.get('auth/init').then(response =>{
                this.user = response.data;
                this.loading = false;
                this.initiated = true;
            })
        }
    },
}
</script>

<style>

</style>




<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>AdminLTE 3 | Log in</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
</head>

<body class="hold-transition login-page">
  <div class="login-box">
    <div class="login-logo">
      <h2 class="text-muted">SAP - ESFM</h2>
    </div>
    <!-- /.login-logo -->
    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg">
          Ingrese sus datos para iniciar sesion
        </p>

        <form action="{{ route('login') }}" method="POST">
          @csrf
          <div class="input-group mb-3">
            <input type="test" class="form-control" placeholder="Ingrese nombre de usuario" />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input type="password" class="form-control" placeholder="Ingrese contraseña" />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <!-- /.col -->
            <div class="col-md-12">
              <button type="submit" class="btn btn-info btn-block btn-flat">
                Iniciar sesion
              </button>
            </div>
            <!-- /.col -->
          </div>
        </form>
      </div>
      <!-- /.login-card-body -->
    </div>
  </div>
  <!-- /.login-box -->

  <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>