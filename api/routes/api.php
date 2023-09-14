<?php

use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\ApiAlumno\AlumnoController;
use App\Http\Controllers\ApiCurso\CursoController;
use App\Http\Controllers\ApiDocente\DocenteController;
use App\Http\Controllers\BitacoraController;
use App\Http\Controllers\EnlaceController;
use App\Http\Controllers\PaginaController;
use App\Http\Controllers\PersonaController;
use App\Http\Controllers\RolController;
use App\Http\Controllers\UsuarioController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(ProductController::class)->group(function () {
    Route::get('/products', 'index');
    Route::post('/product', 'store');
    Route::get('/product/{id}', 'show');
    Route::put('/product/{id}', 'update');
    Route::delete('/product/{id}', 'destroy');
});

Route::controller(AlumnoController::class)->group(function () {
    Route::get('/alumnos', 'index');
    Route::post('/alumno', 'store');
    Route::get('/alumno/{id}', 'show');
    Route::put('/alumno/{id}', 'update');
    Route::delete('/alumno/{id}', 'destroy');
    // Route::delete('/alumno/login', 'login');
});

Route::controller(DocenteController::class)->group(function () {
    Route::get('/docentes', 'index');
    Route::post('/docente', 'store');
    Route::get('/docente/{id}', 'show');
    Route::put('/docente/{id}', 'update');
    Route::delete('/docente/{id}', 'destroy');
});

Route::controller(CursoController::class)->group(function () {
    Route::get('/cursos', 'index');
    Route::post('/curso', 'store');
    Route::get('/curso/{id}', 'show');
    Route::put('/curso/{id}', 'update');
    Route::delete('/curso/{id}', 'destroy');
});
// 
// 
// 

Route::controller(RolController::class)->group(function () {
    Route::get('/rols', 'index');
    Route::post('/rol', 'store');
    Route::get('/rol/{id}', 'show');
    Route::put('/rol/{id}', 'update');
});

Route::controller(UsuarioController::class)->group(function () {
    Route::get('/usuarios', 'index');
    Route::post('/usuario', 'store');
    Route::get('/usuario/{id}', 'show');
    Route::put('/usuario/{id}', 'update');
});

Route::controller(BitacoraController::class)->group(function () {
    Route::get('/bitacoras', 'index');
    Route::post('/bitacora', 'store');
    Route::get('/bitacora/{id}', 'show');
    Route::put('/bitacora/{id}', 'update');
});

Route::controller(EnlaceController::class)->group(function () {
    Route::get('/enlaces', 'index');
    Route::post('/enlace', 'store');
    Route::get('/enlace/{id}', 'show');
    Route::put('/enlace/{id}', 'update');
});

Route::controller(PaginaController::class)->group(function () {
    Route::get('/paginas', 'index');
    Route::post('/pagina', 'store');
    Route::get('/pagina/{id}', 'show');
    Route::put('/pagina/{id}', 'update');
});

Route::controller(PersonaController::class)->group(function () {
    Route::get('/personas', 'index');
    Route::post('/persona', 'store');
    Route::get('/persona/{id}', 'show');
    Route::put('/persona/{id}', 'update');
    Route::delete('/persona/{id}', 'destroy');
});

