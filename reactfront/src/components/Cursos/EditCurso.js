import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/curso/'



const EditCurso = () => {
    
const [materia, setMateria] = useState("")
const [alumnos_materia, setAlumnos_materia] = useState(0)
const navigate = useNavigate();
const {id}=useParams()

    const update = async (e)=>{
        e.preventDefault()
        await axios.put(`${endpoint}${id}`,{
            materia: materia,
            alumnos_materia: alumnos_materia,
        })
        navigate('/curso/dashboard') 
    }

    useEffect(()=>{
        const getProductById = async()=>{
            const response = await axios.get(`${endpoint}${id}`)
            setMateria(response.data.materia)
            setAlumnos_materia(response.data.alumnos_materia)
        }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps

    },[])

  return (
    <div>
      <h3>Edit Cursos</h3>
      <form class=" p-3 d-flex justify-content-center align-items-center flex-column" onSubmit={update}>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            value={alumnos_materia}
            onChange={(e) => setAlumnos_materia(e.target.value)}
            type="number"
            className="form-control"
          />
       
        </div>
        <button type="submit" className="btn btn-primary">Editar</button>

      </form>
    </div>
  )
}

export default EditCurso