<?php

namespace App\Http\Controllers;

use App\Models\Bitacora;
use App\Models\Usuario;
use Illuminate\Http\Request;

class BitacoraController extends Controller
{
    public function index()
    {
        $bitacoras = Bitacora::all();
        return $bitacoras;
    }

     
    public function store(Request $request)
    {
        $bitacora = new Bitacora();
        $bitacora->navegador = $request->navegador;
        $bitacora->bitacora = $request->bitacora;
        $bitacora->created_at = $request->created_at;
        $bitacora->save();

        $usuario = new Usuario();
        $usuario->usuario = $request->usuario;
        
        $usuario->save();
    }


    public function show($id)
    {
        $bitacora = Bitacora::find($id);
        return $bitacora;
    }

    public function update(Request $request, $id)
    {
        $bitacora = Bitacora::findOrFail($request->id);
        $bitacora->navegador = $request->navegador;
        $bitacora->bitacora = $request->bitacora;
        $bitacora->created_at = $request->created_at;

        $usuario = new Usuario();
        $usuario->usuario = $request->usuario;
        
        $usuario->save();

        $bitacora->save();
        return $bitacora;
    }

}
