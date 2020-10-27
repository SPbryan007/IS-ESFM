@extends('layouts.dashboard')

@section('dashboard-content')
<div class="card card-danger card-outline">
    <div class="card-header">
        <h3 class="card-title">Lista de Provedores</h3>
    </div>
    <!-- /.card-header -->
    <div class="card-body">
        <div class="row">
            <div class="col-md-6">
                <div class="btn-group">
                    <button type="button" class="btn btn-default">
                        <i class="fas fa-print"></i> Imprimir
                    </button>
                    <button type="button" class="btn btn-default">
                        <i class="fas fa-download"></i> Exportar
                    </button>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-success pull-rigth" data-toggle="modal"
                        data-target="#form-add-pro">
                        <span class="fa fa-plus" aria-hidden="true"></span>
                        Agregar
                    </button>
                </div>
            </div>
        </div>
        <br />
        <table id="example1" class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Rendering engine</th>
                    <th>Browser</th>
                    <th>Platform(s)</th>
                    <th>Engine version</th>
                    <th>CSS grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Trident</td>
                    <td>Internet Explorer 4.0</td>
                    <td>Win 95+</td>
                    <td>4</td>
                    <td>X</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>Rendering engine</th>
                    <th>Browser</th>
                    <th>Platform(s)</th>
                    <th>Engine version</th>
                    <th>CSS grade</th>
                </tr>
            </tfoot>
        </table>
    </div>
    <!-- /.card-body -->
</div>
<!-- /.card -->
@include('proveedor.add')
@endsection