<?php

namespace App\Http\Controllers;

use App\Models\Bitacora;
use App\Models\Rol;
use Illuminate\Http\Request;

class RolController extends Controller
{
    public function index()
    {
        $rols = Rol::all();
        return $rols;
    }

     
    public function store(Request $request)
    {
        $rol = new Rol();
        $rol->rol = $request->rol;
        $rol->save();

        $bitacora= new Bitacora();
        $bitacora->navegador = NULL;
        $bitacora->bitacora = 'Se ha creado un nuevo rol ' .$rol->rol;
        $bitacora->created_at = now();
        $bitacora->save();
    }


    public function show($id)
    {
        $rol = Rol::find($id);
        return $rol;
    }

    public function update(Request $request, $id)
    {
        $rol = Rol::findOrFail($request->id);
        $rol->rol = $request->rol;
        $rol->save();

        $bitacora= new Bitacora();
        $bitacora->navegador = NULL;
        $bitacora->bitacora = "Se ha actualizado el rol " .$rol->rol;
        $bitacora->created_at = now();
        $bitacora->save();

        return $rol;
    }

}
