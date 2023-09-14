<?php

namespace App\Http\Controllers;

use App\Models\Enlace;
use Illuminate\Http\Request;

class EnlaceController extends Controller
{
    public function index()
    {
        $enlaces = Enlace::all();
        return $enlaces;
    }

     
    public function store(Request $request)
    {
        $enlace = new Enlace();
        $enlace->name = $request->name;
        $enlace->lastname = $request->lastname;
        $enlace->email = $request->email;
        $enlace->contrase = $request->contrase;

        $enlace->save();
    }


    public function show($id)
    {
        $enlace = Enlace::find($id);
        return $enlace;
    }

    public function update(Request $request, $id)
    {
        $enlace = Enlace::findOrFail($request->id);
        $enlace->name = $request->name;
        $enlace->lastname = $request->lastname;
        $enlace->email = $request->email;
        $enlace->contrase = $request->contrase;

        $enlace->save();
        return $enlace;
    }

}
