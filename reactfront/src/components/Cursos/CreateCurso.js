import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8000/api/curso"

const CreateCurso = () => {
  const [materia, setMateria] = useState("")
  const [alumnos_materia, setAlumnos_materia] = useState(0)
  
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault()
    await axios.post(endpoint, {
      materia: materia,
      alumnos_materia: alumnos_materia,

    })
    navigate("/curso/dashboard")
  }
  return (
    <div>
      <h3>Create Cursos</h3>
      <form class=" p-3 d-flex justify-content-center align-items-center flex-column" onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Materias</label>
          <input
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Cantidad de Alumnos</label>
          <input
            value={alumnos_materia}
            onChange={(e) => setAlumnos_materia(e.target.value)}
            type="number"
            className="form-control"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Crear</button>

      </form>
    </div>
  )
}

export default CreateCurso
