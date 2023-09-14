<?php

namespace App\Http\Controllers;

use App\Models\Persona;
use Illuminate\Http\Request;

class PersonaController extends Controller
{
    public function index()
    {
        $personas = Persona::all();
        return $personas;
    }

     
    public function store(Request $request)
    {
        $persona = new Persona();
        $persona->name = $request->name;
        $persona->lastname = $request->lastname;
        $persona->state = $request->state;
        $persona->create_by = $request->create_by;
        $persona->update_by = $request->update_by;
        $persona->save();
    }


    public function show($id)
    {
        $persona = Persona::find($id);
        return $persona;
    }

    public function update(Request $request, $id)
    {
        $persona = Persona::findOrFail($request->id);
        $persona->name = $request->name;
        $persona->lastname = $request->lastname;
        $persona->state = $request->state;
        $persona->create_by = $request->create_by;
        $persona->update_by = $request->update_by;

        $persona->save();
        return $persona;
    }

    public function destroy(string $id)
    {
        $persona=Persona::destroy($id);
        return $persona;
    }

}
