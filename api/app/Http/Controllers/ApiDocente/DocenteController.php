<?php

namespace App\Http\Controllers\ApiDocente;

use App\Http\Controllers\Controller;
use App\Models\Docente;
use Illuminate\Http\Request;

class DocenteController extends Controller
{
    
    public function index()
    {
        $docentes = Docente::all();
        return $docentes;
    }

 
    public function store(Request $request)
    {
        $docente = new Docente();
        $docente->name = $request->name;
        $docente->lastname = $request->lastname;
        $docente->email = $request->email;
        $docente->contrase = $request->contrase;

        $docente->save();
    }


    public function show($id)
    {
        $docente = Docente::find($id);
        return $docente;
    }

    public function update(Request $request, $id)
    {
        $docente = Docente::findOrFail($request->id);
        $docente->name = $request->name;
        $docente->lastname = $request->lastname;
        $docente->email = $request->email;
        $docente->contrase = $request->contrase;

        $docente->save();
        return $docente;
    }

    public function destroy(string $id)
    {
        $docente=Docente::destroy($id);
        return $docente;
    }
}
