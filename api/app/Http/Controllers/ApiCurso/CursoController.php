<?php

namespace App\Http\Controllers\ApiCurso;

use App\Http\Controllers\Controller;
use App\Models\Curso;
use Illuminate\Http\Request;

class CursoController extends Controller
{
    
    public function index()
    {
        $cursos = Curso::all();
        return $cursos;
    }

 
    public function store(Request $request)
    {
        $curso = new Curso();
        $curso->materia = $request->materia;
        $curso->alumnos_materia = $request->alumnos_materia;

        $curso->save();
    }


    public function show($id)
    {
        $curso = Curso::find($id);
        return $curso;
    }

    public function update(Request $request, $id)
    {
        $curso = Curso::findOrFail($request->id);
        $curso->materia = $request->materia;
        $curso->alumnos_materia = $request->alumnos_materia;

        $curso->save();
        return $curso;
    }

    public function destroy(string $id)
    {
        $curso=Curso::destroy($id);
        return $curso;
    }
}
