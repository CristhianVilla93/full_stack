import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8000/api/rol"

const CreateRol = () => {
  const [rol, setRol] = useState("")

const navigate = useNavigate();
  const store = async (e) => {
    e.preventDefault()
    await axios.post(endpoint, {
      rol: rol,

    })
    navigate('/rol/dashboard')
  }
  return (
    <div>
      <h3>CREAR ROLES</h3>
      <form class=" p-3 d-flex justify-content-center align-items-center flex-column" onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">ROL</label>
          <input
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Crear</button>

      </form>
    </div>
  )
}

export default CreateRol
