import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/ShowAlumnos.css";


const endpoint = "http://localhost:8000/api";

const ShowAlumnos = () => {
  const [alumnos, setAlumnos] = useState([]);
  useEffect(() => {
    getAllAlumnos();
  }, []);

  const getAllAlumnos = async () => {
    const response = await axios.get(`${endpoint}/alumnos`);
    setAlumnos(response.data);
  };

  const deleteAlumno = async (id) => {
    await axios.delete(`${endpoint}/alumno/${id}`);
    getAllAlumnos();
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
            <h1 class="text1">Universidad</h1>
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
              href="/docente/dashboard"
            >
              <img src="/imagen/permisos.svg" alt="" />
              Maestros
            </a>
            <a
              class="linkone"
              href="/"
            >
              <img src="/imagen/maestros.svg" alt="" />
              Alumnos
            </a>
            <a
              class="linkone"
              href="/curso/dashboard"
            >
              <img src="/imagen/alumnos.svg" alt="" />
              Cursos
            </a>
            <a
              class="linkone"
              href="/src/administrador/clases/connection/connection_clases.php"
            >
              <img src="/imagen/clases.svg" alt="" />
              Clases
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
                <h2>Alumnos</h2>
              </div>

              <div>
                <div className="h-14 flex items-center content-center justify-end gap-1">
                  <label for="search">Search: </label>
                  <input
                    classname="border rounded h-10"
                    type="text"
                    id="search"
                    name=""
                  />
                </div>
                <div classname="flex items-center content-center justify-center justify-items-center">
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Link
                      to="/alumno/create"
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
                        <th>Email</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      {alumnos.map((alumno) => (
                        <tr key={alumno.id}>
                          <td>{alumno.name}</td>
                          <td>{alumno.lastname}</td>
                          <td>{alumno.email}</td>
                          <td>{alumno.contrase}</td>
                          <td>
                            <Link
                              to={`/alumno/edit/${alumno.id}`}
                              className="btn btn-warning"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => deleteAlumno(alumno.id)}
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </td>
                          <td></td>
                          <td></td>
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

export default ShowAlumnos;
