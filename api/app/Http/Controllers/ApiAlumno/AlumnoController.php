<?php

namespace App\Http\Controllers\ApiAlumno;

use App\Http\Controllers\Controller;
use App\Models\Alumno;
use Illuminate\Http\Request;

class AlumnoController extends Controller
{
    
    public function index()
    {
        $alumnos = Alumno::all();
        return $alumnos;
    }

 
    public function store(Request $request)
    {
        $alumno = new Alumno();
        $alumno->name = $request->name;
        $alumno->lastname = $request->lastname;
        $alumno->email = $request->email;
        $alumno->contrase = $request->contrase;

        $alumno->save();
    }


    public function show($id)
    {
        $alumno = Alumno::find($id);
        return $alumno;
    }

    public function login(Request $request)
    {
        $alumnoLogin = Alumno::where('email',$request->email);
        if ($request->contrase == $alumnoLogin->contrase)  {
            return redirect('/dashboard');
        } else {
            return redirect('/login');
        }
    }

    public function update(Request $request, $id)
    {
        $alumno = Alumno::findOrFail($request->id);
        $alumno->name = $request->name;
        $alumno->lastname = $request->lastname;
        $alumno->email = $request->email;
        $alumno->contrase = $request->contrase;

        $alumno->save();
        return $alumno;
    }

    public function destroy(string $id)
    {
        $alumno=Alumno::destroy($id);
        return $alumno;
    }
}
