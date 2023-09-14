import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/persona/'



const EditPersona = () => {
    
  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [state, setEstate] = useState(0)
  const [create_by, setCreate_by] = useState("")
  const [update_by, setUpdate_by] = useState("")
const navigate = useNavigate();
const {id}=useParams()

    const update = async (e)=>{
        e.preventDefault()
        await axios.put(`${endpoint}${id}`,{
          name: name,
          lastname:lastname,
          state:state,
          create_by:create_by,
         update_by:update_by
        })
        navigate('/persona/dashboard') 
    }

    useEffect(()=>{
        const getProductById = async()=>{
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name)
            setLastname(response.data.lastname )
            setEstate(response.data.state)
            setCreate_by(response.data.create_by)
            setUpdate_by(response.data.update_by)
        }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps

    },[])

  return (
    <div>
      <h3>Editar Persona</h3>
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
          <label className="form-label">State</label>
          <input
            value={state}
            onChange={(e) => setEstate(e.target.value)}
            type="number"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Create by</label>
          <input
            value={create_by}
            onChange={(e) => setCreate_by(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Update by</label>
          <input
            value={update_by}
            onChange={(e) => setUpdate_by(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Editar</button>

      </form>
    </div>
  )
}

export default EditPersona