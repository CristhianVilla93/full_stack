import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/usuario/'



const EditUsuario = () => {
    
  const [usuario, setUsuario] = useState("")

const navigate = useNavigate();
const {id}=useParams()

    const update = async (e)=>{
        e.preventDefault()
        await axios.put(`${endpoint}${id}`,{
          usuario: usuario,

        })
        navigate('/usuario/dashboard') 
    }

    useEffect(()=>{
        const getProductById = async()=>{
            const response = await axios.get(`${endpoint}${id}`)
            setUsuario(response.data.usuario)

        }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps

    },[])

  return (
    <div>
      <h3>Editar Usuarios</h3>
      <form class=" p-3 d-flex justify-content-center align-items-center flex-column" onSubmit={update}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        {/* <div className="mb-3">
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
        </div> */}
        <button type="submit" className="btn btn-primary">Editar</button>

      </form>
    </div>
  )
}

export default EditUsuario