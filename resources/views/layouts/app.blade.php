<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Almacen | E.S.F.M.</title>
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
    <!-- Styles -->

    <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
</head>

<body class="hold-transition sidebar-mini layout-fixed">

    <div id="app">
        {{-- @yield('content') --}}
    </div>


    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
