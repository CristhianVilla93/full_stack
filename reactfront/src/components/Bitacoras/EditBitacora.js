import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/bitacora/'



const EditBitacora = () => {
    
  const [navegador, setNavegador] = useState("")
  const [bitacora, setBitacora] = useState("")
  const [created_at, setCreated_at] = useState("")

  const [usuario, setUsuario] = useState("")
  

  const {id}=useParams()

   

    useEffect(()=>{
        const getProductById = async()=>{
            const response = await axios.get(`${endpoint}${id}`)
            setNavegador(response.data.navegador)
            setBitacora(response.data.bitacora )
            setCreated_at(response.data.created_at)
        }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps

    },[])

  return (
    <div>
      <h3>Mostrar Bitacora</h3>
      <form class=" p-3 d-flex justify-content-center align-items-center flex-column">
      {/* <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            type="text"
            className="form-control"
          />
        </div> */}

        <div className="mb-3">
          <label className="form-label">Navegador</label>
          <input
            value={navegador}
            onChange={(e) => setNavegador(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Bitacora</label>
          <input
            value={bitacora}
            onChange={(e) => setBitacora(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Creacion</label>
          <input
            value={created_at}
            onChange={(e) => setCreated_at(e.target.value)}
            type=""
            className="form-control"
          />
        </div>

        <button className="btn btn-primary"><a className="text-white" href="/">Volver</a></button>

      </form>
    </div>
  )
}

export default EditBitacora