import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8000/api/docente"

const CreateDocente = () => {
  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [contrase, setContrase] = useState("")
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault()
    await axios.post(endpoint, {
      name: name,
      lastname:lastname,
      email:email,
      contrase: contrase
    })
    navigate("/docente/dashboard")
  }
  return (
    <div>
      <h3>Create Docentes</h3>
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
          <label className="form-label">Email</label>
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

        <button type="submit" className="btn btn-primary">Crear</button>

      </form>
    </div>
  )
}

export default CreateDocente
