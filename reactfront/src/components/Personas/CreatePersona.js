import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8000/api/persona"

const CreatePersona = () => {
  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [state, setEstate] = useState(0)
  const [create_by, setCreate_by] = useState(0)
  const [update_by, setUpdate_by] = useState(0)
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault()
    await axios.post(endpoint, {
      name: name,
      lastname:lastname,
      state:state,
      create_by:create_by,
      update_by:update_by
    })
    navigate("/persona/dashboard")
  }
  return (
    <div>
      <h3>CREAR PERSONAS</h3>
      <form class=" p-3 d-flex justify-content-center align-items-center flex-column" onSubmit={store}>
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
          <label className="form-label">Estate</label>
          <input
            value={state}
            onChange={(e) => setEstate(e.target.value)}
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Created by</label>
          <input
            value={create_by}
            onChange={(e) => setCreate_by(e.target.value)}
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Update by</label>
          <input
            value={update_by}
            onChange={(e) => setUpdate_by(e.target.value)}
            type="number"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">Crear</button>

      </form>
    </div>
  )
}

export default CreatePersona
