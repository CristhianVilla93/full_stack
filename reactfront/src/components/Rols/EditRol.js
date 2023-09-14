import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/rol/'



const EditRol = () => {
    
  const [rol, setRol] = useState("")

const navigate = useNavigate();
const {id}=useParams()

    const update = async (e)=>{
        e.preventDefault()
        await axios.put(`${endpoint}${id}`,{
          rol: rol,
        })
        navigate('/rol/dashboard') 
    }

    useEffect(()=>{
        const getProductById = async()=>{
            const response = await axios.get(`${endpoint}${id}`)
            setRol(response.data.rol)
        }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps

    },[])

  return (
    <div>
      <h3>Editar  Roles</h3>
      <form class=" p-3 d-flex justify-content-center align-items-center flex-column" onSubmit={update}>
        
        <div className="mb-3">
          <label className="form-label">Rol</label>
          <input
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
      
        <button type="submit" className="btn btn-primary">Editar</button>

      </form>
    </div>
  )
}

export default EditRol