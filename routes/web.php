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
});

// Route::get('/proveedor', function () {
//     return view('proveedor.index');
// });

// Route::post('login','Auth\LoginController@login')->name('login');
Route::get('/registrarse', function () {
    return view('auth.register');
});

//Auth::routes();

// Route::get('/home',function(){
//     return view('home');
// });

Route::prefix('auth')->group(function (){
    Route::post('/login', 'AuthController@login');
    Route::post('/register', 'AuthController@register');
    Route::post('/logout','AuthController@logout');
    Route::put('/resetDefaultPassword/{user}','AuthController@resetDefaultPassword');
    Route::put('/resetPassword/{user}','AuthController@resetPassword');
});

Route::prefix('controller/funcionario')->group(function (){
    Route::get('/', 'FuncionarioController@getAll');
    Route::post('/', 'FuncionarioController@create');
    Route::put('/{id}','FuncionarioController@update');
    Route::delete('/{id}','FuncionarioController@destroy');
});

Route::prefix('controller/usuario')->group(function (){
    Route::get('/', 'UsuarioController@getAll');
    Route::post('/', 'UsuarioController@create');
    Route::put('/{id}','UsuarioController@updateRole');
    Route::delete('/{id}','UsuarioController@destroy');
});


Route::prefix('controller/solicitante')->group(function (){
    Route::get('/', 'SolicitanteController@getAll');
    Route::post('/', 'SolicitanteController@create');
    Route::put('/{id}','SolicitanteController@update');
    Route::delete('/{id}','SolicitanteController@destroy');
});

Route::prefix('controller/unidad')->group(function (){
    Route::get('/', 'UnidadController@getAll');
    Route::post('/', 'UnidadController@create');
    Route::put('/{id}','UnidadController@update');
    Route::delete('/{id}','UnidadController@destroy');
});

Route::prefix('controller/proveedor')->group(function (){
    Route::get('/', 'ProveedorController@getAll');
    Route::post('/', 'ProveedorController@create');
    Route::put('/{id}','ProveedorController@update');
    Route::delete('/{id}','ProveedorController@destroy');
});

Route::prefix('controller/partida')->group(function (){
    Route::get('/', 'PartidaController@getAll');
    Route::post('/', 'PartidaController@create');
    Route::put('/{id}','PartidaController@update');
    Route::delete('/{id}','PartidaController@destroy');
});
Route::prefix('controller/unidad_medida')->group(function (){
    Route::get('/', 'UnidadMedidaController@getAll');
    Route::post('/', 'UnidadMedidaController@create');
    Route::put('/{id}','UnidadMedidaController@update');
    Route::delete('/{id}','UnidadMedidaController@destroy');
});
Route::prefix('controller/articulo')->group(function (){
    Route::get('/', 'ArticuloController@getAll');
    Route::post('/', 'ArticuloController@create');
    Route::put('/{id}','ArticuloController@update');
    Route::delete('/{id}','ArticuloController@destroy');
});

Route::prefix('controller/periodo')->group(function (){
    Route::get('/', 'PeriodoController@getAll');
    Route::get('/validate','PeriodoController@ValidateDate');
    Route::get('/current','PeriodoController@Current');
    Route::post('/', 'PeriodoController@create');
    Route::put('/{id}','PeriodoController@update');
    Route::delete('/{id}','PeriodoController@destroy');
});

Route::prefix('controller/ingreso')->group(function (){
    Route::get('/', 'IngresoController@getAll');
    Route::get('/{id}', 'IngresoController@show');
    Route::post('/', 'IngresoController@create');
    Route::put('/{id}','IngresoController@update');
    Route::delete('/{id}','IngresoController@destroy');
});

Route::prefix('controller/salida')->group(function (){
    Route::get('/', 'SalidaController@getAll');
    Route::get('/{id}', 'SalidaController@show');
    Route::post('/', 'SalidaController@create');
    Route::put('/{id}','SalidaController@update');
    Route::delete('/{id}','SalidaController@destroy');
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
