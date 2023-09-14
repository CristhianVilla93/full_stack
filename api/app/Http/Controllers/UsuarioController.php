<?php

namespace App\Http\Controllers;

use App\Models\Bitacora;
use App\Models\Persona;
use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    public function index()
    {
        $usuarios = Usuario::all();
        return $usuarios;
    }

     
    public function store(Request $request)
    {
        $persona = new Persona();
        $persona->name = $request->name;
        $persona->lastname = $request->lastname;
        $persona->state = 1;
        $persona->create_by = NULL;
        $persona->update_by = NULL;
        $persona->save();


        $usuario = new Usuario();
        $usuario->usuario = $request->usuario;
        $usuario->password = "12345";
        $usuario->person_id = $persona->id;
        $usuario->rol_id = 1;
        
        $usuario->save();

        
        $bitacora= new Bitacora();
        $bitacora->navegador = NULL;
        $bitacora->bitacora = 'Se ha creado un nuevo usuario ' .$usuario->usuario;
        $bitacora->created_at = now();
        $bitacora->save();


        return redirect("http://localhost:3000/usuario/dashboard");
    }


    public function show($id)
    {
        $usuario = Usuario::find($id);
        return $usuario;
    }

    public function update(Request $request, $id)
    {
        $usuario = Usuario::findOrFail($request->id);
        $usuario->usuario = $request->usuario;

        $usuario->save();
        return $usuario;
    }

}
