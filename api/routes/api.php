<?php

use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\ApiAlumno\AlumnoController;
use App\Http\Controllers\ApiCurso\CursoController;
use App\Http\Controllers\ApiDocente\DocenteController;
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




// Route::group(['middleware'=>'auth:sanctum'], function () {


//     Route::get('/products',[ProductController::class ,'index']);
//     Route::post('/product', [ProductController::class,'store']);
//     Route::get('/product/{id}',[ProductController::class ,'show']);
//     Route::put('/product/{id}',[ProductController::class ,'update']);
//     Route::delete('/product/{id}',[ProductController::class ,'destroy']);
// });