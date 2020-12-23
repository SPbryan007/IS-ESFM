<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('layouts.app');
})->name('login');

// Route::get('/proveedor', function () {
//     return view('proveedor.index');
// });

// Route::post('login','Auth\LoginController@login')->name('login');
Route::prefix('/controller/prueba')->group(function () {
    Route::get('/test', 'AppController@test');
});

//Auth::routes();

// Route::get('/home',function(){
//     return view('home');
// });
Route::prefix('auth')->group(function (){
    Route::post('/login', 'AuthController@login');
    Route::post('/register', 'AuthController@register');
    Route::post('/logout','AuthController@logout')->middleware('auth');
    Route::get('/getUserLogged','AuthController@getUserLogged')->middleware('auth');
    Route::put('/resetDefaultPassword/{user}','AuthController@resetDefaultPassword')->middleware('auth');
    Route::put('/resetPassword/{user}','AuthController@resetPassword')->middleware('auth');
});

Route::prefix('controller/funcionario')->group(function (){
    Route::get('/', 'FuncionarioController@getAll')->middleware('auth');
    Route::post('/', 'FuncionarioController@create')->middleware('auth');
    Route::put('/{id}','FuncionarioController@update')->middleware('auth');
    Route::delete('/{id}','FuncionarioController@destroy')->middleware('auth');
});

Route::prefix('controller/usuario')->group(function (){
    Route::get('/', 'UsuarioController@getAll')->middleware('auth');
    Route::post('/', 'UsuarioController@create')->middleware('auth');
    Route::put('/{id}','UsuarioController@updateRole')->middleware('auth');
    Route::delete('/{id}','UsuarioController@destroy')->middleware('auth');
});

Route::group(
    [
        'prefix' => 'controller/solicitante',
        'middleware' => 'auth'
    ],
    function (){
    Route::get('/', 'SolicitanteController@getAll');
    Route::post('/', 'SolicitanteController@create');
    Route::put('/{id}','SolicitanteController@update');
    Route::delete('/{id}','SolicitanteController@destroy');
});
//Route::prefix('controller/solicitante')->group();

Route::prefix('controller/unidad')->group(function (){
    Route::get('/', 'UnidadController@getAll')->middleware('auth');
    Route::post('/', 'UnidadController@create')->middleware('auth');
    Route::put('/{id}','UnidadController@update')->middleware('auth');
    Route::delete('/{id}','UnidadController@destroy')->middleware('auth');
});

Route::prefix('controller/proveedor')->group(function (){
    Route::get('/', 'ProveedorController@getAll')->middleware('auth');
    Route::post('/', 'ProveedorController@create')->middleware('auth');
    Route::put('/{id}','ProveedorController@update')->middleware('auth');
    Route::delete('/{id}','ProveedorController@destroy')->middleware('auth');
});

Route::prefix('controller/partida')->group(function (){
    Route::get('/', 'PartidaController@getAll')->middleware('auth');
    Route::post('/', 'PartidaController@create')->middleware('auth');
    Route::put('/{id}','PartidaController@update')->middleware('auth');
    Route::delete('/{id}','PartidaController@destroy')->middleware('auth');
});
Route::prefix('controller/unidad_medida')->group(function (){
    Route::get('/', 'UnidadMedidaController@getAll')->middleware('auth');
    Route::post('/', 'UnidadMedidaController@create')->middleware('auth');
    Route::put('/{id}','UnidadMedidaController@update')->middleware('auth');
    Route::delete('/{id}','UnidadMedidaController@destroy')->middleware('auth');
});
Route::prefix('controller/articulo')->group(function (){
    Route::get('/', 'ArticuloController@getAll')->middleware('auth');
    Route::post('/', 'ArticuloController@create')->middleware('auth');
    Route::put('/{id}','ArticuloController@update')->middleware('auth');
    Route::delete('/{id}','ArticuloController@destroy')->middleware('auth');
});

Route::prefix('controller/periodo')->group(function (){
    Route::get('/', 'PeriodoController@getAll')->middleware('auth');
    Route::get('/validate','PeriodoController@ValidateDate')->middleware('auth');
    Route::get('/current','PeriodoController@Current')->middleware('auth');
    Route::post('/', 'PeriodoController@create')->middleware('auth');
    Route::put('/{id}','PeriodoController@update')->middleware('auth');
    Route::delete('/{id}','PeriodoController@destroy')->middleware('auth');
});

Route::prefix('controller/ingreso')->group(function (){
    Route::get('/', 'IngresoController@getAll')->middleware('auth');
    Route::get('/{id}', 'IngresoController@show')->middleware('auth');
    Route::post('/', 'IngresoController@create')->middleware('auth');
    Route::put('/{id}','IngresoController@update')->middleware('auth');
    Route::delete('/{id}','IngresoController@destroy')->middleware('auth');
    Route::get('/imprimir/{id}','IngresoController@print')->middleware('auth');
    Route::get('/export_pdf/{id}','IngresoController@exportPDF')->middleware('auth');
});

Route::prefix('controller/reportes')->group(function (){
    Route::get('/movimiento_almacen_print', 'ReporteController@MovimientoAlmacenPDF')->middleware('auth');
    Route::post('/movimiento_almacen', 'ReporteController@MovimientoAlmacen')->middleware('auth');
    Route::post('/movimiento_almacen_excel', 'ReporteController@MovimientoAlmacenToExcel')->middleware('auth');
    Route::post('/kardex', 'ReporteController@ReporteGeneral')->middleware('auth');
    Route::get('/kardex_print','ReporteController@ReporteGeneralToPDF')->middleware('auth');
    Route::post('/kardex_excel', 'ReporteController@ReporteGeneralToExcel');
    Route::post('/saldos_almacen', 'ReporteController@SaldosAlmacen')->middleware('auth');
    Route::get('/saldos_almacen_print', 'ReporteController@SaldosAlmacenToPdf')->middleware('auth');
    Route::post('/saldos_almacen_excel', 'ReporteController@SaldosAlmacenToExcel')->middleware('auth');
});

Route::prefix('controller/salida')->group(function (){
    Route::get('/', 'SalidaController@getAll');
    Route::get('/{id}', 'SalidaController@show');
    Route::post('/', 'SalidaController@create');
    Route::put('/{id}','SalidaController@update');
    Route::delete('/{id}','SalidaController@destroy');
    Route::get('/imprimir/{id}','SalidaController@print');
    Route::get('/export_pdf/{id}','SalidaController@exportPDF');
});

Route::prefix('controller/backup')->group(function (){
    Route::get('/', 'SettingsController@getAll');
});

Route::prefix('controller/lote')->group(function (){
    Route::get('/', 'LoteController@getAll');
  /*  Route::post('/', 'LoteController@create');
    Route::put('/{id}','LoteController@update');
    Route::delete('/{id}','LoteController@destroy');*/
});


/*Route::prefix('solicitante')->group(function(){
    Route::post('')
});*/

/*
Route::prefix('auth')->group(function (){
    Route::get('/users','AppController@init');
    Route::post('/login', 'AppController@login');
    Route::post('/register', 'AppController@register');
    Route::post('/logout','AppController@logout');
});*/



Route::prefix('api/articulo')->group(function (){
    Route::get('/lotes','ArticuloController@lotes');
});
Route::prefix('api/login')->group(function (){
    Route::post('/login','AuthController@login');
    Route::post('/register','AuthController@register');
});

Route::prefix('api/funcionario')->group(function (){
    Route::post('/search','FuncionarioController@BuscarFuncionario');
});


Route::resource('/api/usuario', 'UsuarioController');
Route::resource('/api/proveedor', 'ProveedorController');
Route::resource('/api/solicitante', 'SolicitanteController');
Route::resource('/api/unidad', 'UnidadController');
Route::resource('/api/articulo', 'ArticuloController');
// Route::get('/api/articulo/inicio','ArticuloController@index2');
Route::resource('/api/partida', 'PartidaController');
Route::resource('/api/unidad_medida', 'UnidadMedidaController');
Route::resource('/api/periodo', 'GestionController');

Route::resource('/api/ingreso','IngresoController');
Route::resource('/api/funcionario','IngresoController');

Route::post('/api/periodo/validate','GestionController@valid_date');
// Route::get('{path}','HomeController@index')->where( 'path', '([A-z\d-/_.]+)?' );
Route::get('/{any}', 'HomeController@index')->where('any', '.*');
