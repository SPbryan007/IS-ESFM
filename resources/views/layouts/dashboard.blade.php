@extends('layouts.app')

@section('content')
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
            <img src="{{ asset('img/AdminLTELogo.png') }}" alt="AdminLTE Logo"
                class="brand-image img-circle elevation-3" style="opacity: .8" />
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
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li class="breadcrumb-item active">
                                Dashboard v1
                            </li>
                        </ol>
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
            <!-- /.container-fluid -->
            <div class="container-fluid">
                @yield('dashboard-content')
            </div>
            <!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <footer class="main-footer">
        <strong>Copyright &copy; 2014-2019
            <a href="http://adminlte.io">AdminLTE.io</a>.</strong>
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
@endsection