import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/ShowPersonas.css";


const endpoint = "http://localhost:8000/api";

const ShowPersonas = () => {
  const [personas, setPersonas] = useState([]);
  useEffect(() => {
    getAllPersonas();
  }, []);

  const getAllPersonas = async () => {
    const response = await axios.get(`${endpoint}/personas`);
    setPersonas(response.data);
  };

  const deletePersona = async (id) => {
    await axios.delete(`${endpoint}/persona/${id}`);
    getAllPersonas();
  };

  return (
    <>
      <div class="cuadroprim">
        <div class="cuadroone">
          <div class="cuadroone1">
            <img
              class="w-7 h-7 rounded-full m-1"
              src="/IMG/logo3.jpg"
              alt="logo"
            />
            <h1 class="text1">Tablas</h1>
          </div>

          <hr />
          <div>
            <h1 class="text1">Admin</h1>
            <p>Administrador</p>
          </div>
          <hr />
          <div class="cuadroone2">
            <h1 class="text1">MENU ADMINISTRACION</h1>
            <a
              class="linkone"
              href="/rol/dashboard"
            >
              <img src="/imagen/clases.svg" alt="" />
              Roles
            </a>
            <a
              class="linkone"
              href="/usuario/dashboard"
            >
              <img src="/imagen/clases.svg" alt="" />
              Usuarios
            </a>
            <a
              class="linkone"
              href="/"
            >
              <img src="/imagen/clases.svg" alt="" />
              Bitacoras
            </a>
            <a
              class="linkone"
              href="/enlace/dashboard"
            >
              <img src="/imagen/clases.svg" alt="" />
              Enlaces
            </a>
            <a
              class="linkone"
              href="/persona/dashboard"
            >
              <img src="/imagen/clases.svg" alt="" />
              Personas
            </a>
          </div>
        </div>
        <div class="cuadrotwo">
          <nav classname="">
            <ul class="ulcuadrotwo">
              <li class="licuadrotwo1">
                <img src="/imagen/menu.svg" alt="" />
                Home
              </li>
              <li>
                <p class="primerp" >mes correo</p>

                <div class="divcuadrotwo1" id="cuadrodesple">
                  <ul>
                    <li>
                      <a
                        class="flex  items-center content-center gap-3"
                        href="#"
                      >
                        <img src="/imagen/person-circle.svg" alt="" />{" "}
                        <span>Perfil</span>
                      </a>
                    </li>
                  </ul>
                  <a
                    classname="flex  items-center content-center gap-3"
                    href="/src/logout.php"
                  >
                    <img src="/imagen/input.svg" alt="" /> <span>Logout</span>
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          
            
            <div>
              <div classname="flex items-center content-center justify-between py-3">
                <h2>Personas</h2>
              </div>

              <div>
               
                <div classname="flex items-center content-center justify-center justify-items-center">
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Link
                      to="/persona/create"
                      className="btn btn-secondary btn-lg mt-2 mb-2 text-white"
                    >
                      Create
                    </Link>
                  </div>

                
                  <table className="table table-striped">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Estado</th>
                        <th>Create_by</th>
                        <th>Update_by</th>
                        <th>Operaciones</th>

                      </tr>
                    </thead>
                    <tbody>
                      {personas.map((persona) => (
                        <tr key={persona.id}>
                          <td>{persona.name}</td>
                          <td>{persona.lastname}</td>
                          <td>{persona.state}</td>
                          <td>{persona.create_by}</td>
                          <td>{persona.update_by}</td>
                          
                          <td>
                            <Link
                              to={`/persona/edit/${persona.id}`}
                              className="btn btn-warning"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => deletePersona(persona.id)}
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default ShowPersonas;
