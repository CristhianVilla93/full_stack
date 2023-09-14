import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Login from './components/Login';


// import ShowAlumnos from './components/Alumnos/ShowAlumnos';
// import CreateAlumno from './components/Alumnos/CreateAlumno';
// import EditAlumno from './components/Alumnos/EditAlumno';

// import ShowDocentes from './components/Docentes/ShowDocentes';
// import CreateDocente from './components/Docentes/CreateDocente';
// import EditDocente from './components/Docentes/EditDocente';

// import ShowCursos from './components/Cursos/ShowCursos';
// import CreateCurso from './components/Cursos/CreateCurso';
// import EditCurso from './components/Cursos/EditCurso';

import ShowBitacoras from './components/Bitacoras/ShowBitacoras';
import CreateBitacora from './components/Bitacoras/CreateBitacora';
import EditBitacora from './components/Bitacoras/EditBitacora';

import ShowEnlaces from './components/Enlaces/ShowEnlaces';
import CreateEnlace from './components/Enlaces/CreateEnlace';
import EditEnlace from './components/Enlaces/EditEnlace';

import ShowPersonas from './components/Personas/ShowPersonas';
import CreatePersona from './components/Personas/CreatePersona';
import EditPersona from './components/Personas/EditPersona';

import ShowRols from './components/Rols/ShowRols';
import CreateRol from './components/Rols/CreateRol';
import EditRol from './components/Rols/EditRol';

import ShowUsuarios from './components/Usuarios/ShowUsuarios';
import CreateUsuario from './components/Usuarios/CreateUsuario';
import EditUsuario from './components/Usuarios/EditUsuario';

import ShowPaginas from './components/Paginas/ShowPaginas';
import CreatePagina from './components/Paginas/CreatePagina';
import EditPagina from './components/Paginas/EditPagina';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Login/>}/>

      
        <Route path='' element={<ShowAlumnos/>}/>
        <Route path='/alumno/create' element={<CreateAlumno/>}/>
        <Route path='/alumno/edit/:id' element={<EditAlumno/>}/>

   
        <Route path='/docente/dashboard' element={<ShowDocentes/>}/>
        <Route path='/docente/create' element={<CreateDocente/>}/>
        <Route path='/docente/edit/:id' element={<EditDocente/>}/>


        <Route path='/curso/dashboard' element={<ShowCursos/>}/>
        <Route path='/curso/create' element={<CreateCurso/>}/>
        <Route path='/curso/edit/:id' element={<EditCurso/>}/> */}


        <Route path='/' element={<ShowBitacoras/>}/>
        <Route path='/bitacora/create' element={<CreateBitacora/>}/>
        <Route path='/bitacora/edit/:id' element={<EditBitacora/>}/>

        <Route path='/enlace/dashboard' element={<ShowEnlaces/>}/>
        <Route path='/enlace/create' element={<CreateEnlace/>}/>
        <Route path='/enlace/edit/:id' element={<EditEnlace/>}/>

        <Route path='/persona/dashboard' element={<ShowPersonas/>}/>
        <Route path='/persona/create' element={<CreatePersona/>}/>
        <Route path='/persona/edit/:id' element={<EditPersona/>}/>

        <Route path='/rol/dashboard' element={<ShowRols/>}/>
        <Route path='/rol/create' element={<CreateRol/>}/>
        <Route path='/rol/edit/:id' element={<EditRol/>}/>

        <Route path='/usuario/dashboard' element={<ShowUsuarios/>}/>
        <Route path='/usuario/create' element={<CreateUsuario/>}/>
        <Route path='/usuario/edit/:id' element={<EditUsuario/>}/>

        <Route path='/pagina/dashboard' element={<ShowPaginas/>}/>
        <Route path='/pagina/create' element={<CreatePagina/>}/>
        <Route path='/pagina/edit/:id' element={<EditPagina/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
