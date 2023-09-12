import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login';


import ShowAlumnos from './components/Alumnos/ShowAlumnos';
import CreateAlumno from './components/Alumnos/CreateAlumno';
import EditAlumno from './components/Alumnos/EditAlumno';

import ShowDocentes from './components/Docentes/ShowDocentes';
import CreateDocente from './components/Docentes/CreateDocente';
import EditDocente from './components/Docentes/EditDocente';

import ShowCursos from './components/Cursos/ShowCursos';
import CreateCurso from './components/Cursos/CreateCurso';
import EditCurso from './components/Cursos/EditCurso';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Login/>}/> */}

      
        <Route path='/' element={<ShowAlumnos/>}/>
        <Route path='/alumno/create' element={<CreateAlumno/>}/>
        <Route path='/alumno/edit/:id' element={<EditAlumno/>}/>

   
        <Route path='/docente/dashboard' element={<ShowDocentes/>}/>
        <Route path='/docente/create' element={<CreateDocente/>}/>
        <Route path='/docente/edit/:id' element={<EditDocente/>}/>


        <Route path='/curso/dashboard' element={<ShowCursos/>}/>
        <Route path='/curso/create' element={<CreateCurso/>}/>
        <Route path='/curso/edit/:id' element={<EditCurso/>}/>





      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
