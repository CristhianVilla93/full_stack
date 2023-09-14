import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/alumno/'



const EditAlumno = () => {
    
  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [contrase, setContrase] = useState("")
const navigate = useNavigate();
const {id}=useParams()

    const update = async (e)=>{
        e.preventDefault()
        await axios.put(`${endpoint}${id}`,{
          name: name,
          lastname:lastname,
          email:email,
          contrase: contrase
        })
        navigate('/') 
    }

    useEffect(()=>{
        const getProductById = async()=>{
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name)
            setLastname(response.data.lastname )
            setEmail(response.data.email)
            setContrase(response.data.contrase)
        }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps

    },[])

  return (
    <div>
      <h3>Editar Alumnos</h3>
      <form class=" p-3 d-flex justify-content-center align-items-center flex-column" onSubmit={update}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido</label>
          <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            value={contrase}
            onChange={(e) => setContrase(e.target.value)}
            type="password"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Editar</button>

      </form>
    </div>
  )
}

export default EditAlumno