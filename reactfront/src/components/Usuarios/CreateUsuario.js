import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




// const endpoint = "http://localhost:8000/api/usuario"

const CreateUsuario = () => {
  // const [usuario, setUsuario] = useState("")

// const navigate = useNavigate();

//   const store = async (e) => {
//     e.preventDefault()
//     await axios.post(endpoint, {
//       usuario: usuario,
   
//     })
//     navigate("/usuario/dashboard")
//   }
  return (
    <div>
      <h3>Create Usuarios</h3>
      <form class=" p-3 d-flex justify-content-center align-items-center flex-column" 
      method="post" action="http://localhost:8000/api/usuario" >
        {/* <div className="mb-3">
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
        </div> */}
        <div className="mb-3">
          <label className="form-label">Usuario</label>
          <input
          name="usuario"
            // value={usuario}
            // onChange={(e) => setUsuario(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
          name="name"
            // value={usuario}
            // onChange={(e) => setUsuario(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Apellido</label>
          <input
          name="lastname"
            // value={usuario}
            // onChange={(e) => setUsuario(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">Crear</button>

      </form>
    </div>
  )

}
export default CreateUsuario
