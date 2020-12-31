<table style="font-size: 13px" cellpadding="0" cellspacing="0">
    <tr class="details">
        <td></td>
        <td colspan="5" style="text-align: right;font-size: 25px;font-weight: bold">NSA: {{ $data->nro_salida  }}</td>
    </tr>
    <tr class="details">
        <td style="width: 140px"><b>Expedido por:</b></td>
        <td colspan="4" style="text-align: left;">     {{ $data->usuario->funcionario->nombre." ".$data->usuario->funcionario->apellido  }}</td>
        <td style="text-align: right">{{ date('m/d/Y',strtotime($data->created_at)) }}</td>
    </tr>
</table>
<table style="font-size: 13px" cellpadding="0" cellspacing="0">
    <tr class="details">

        <td style="text-align: left;width: 140px"><b>Fecha de salida:</b></td>
        <td style="text-align: left;width: 140px"> {{ date('m/d/Y',strtotime($data->created_at)) }}</td>
        <td style="width: 60px"><b>Solicitante:</b></td>
        <td style="text-align: left;">{{ $data->solicitante->funcionario->nombre." ".$data->solicitante->funcionario->apellido }}</td>
    </tr>
</table>
<table style="font-size: 13px" cellpadding="0" cellspacing="0">
    <tr class="details">
        <td style="text-align: left;width: 140px"><b>Autorizado por:</b></td>
        <td style="text-align: left">{{ $data->autorizador->nombre." ".$data->autorizador->apellido }}</td>
    </tr>
    <tr class="details">
        <td style="text-align: left;width: 140px"><b>Verificado por:</b></td>
        <td style="text-align: left">{{ $data->verificador->nombre." ".$data->verificador->apellido }}</td>
    </tr>
    <tr class="details">
        <td style="text-align: left;width: 140px"><b>Finalidad de pedido:</b></td>
        <td style="text-align: left">{{ $data->finalidad}}</td>
    </tr>
</table>





@extends('layouts.dashboard')

@section('dashboard-content')

@endsection

{{--
@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
</div>
@endif

You are logged in!
</div>
</div>
</div>
</div>
</div>
@endsection --}}
