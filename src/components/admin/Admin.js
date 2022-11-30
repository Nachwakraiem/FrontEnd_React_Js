import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../redux/actionUser";
import Navbar from "../navbar/Navbar";
import { BsTrash } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Admin = () => {
  const { user } = useSelector((state) => state.userReducer);
  console.log(user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
      <Navbar />
      <div className="content-wrapper" style={{ color: "black" }}>
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                {/* <h1 className="m-0">Dashboard</h1> */}
                <div className="card">
                  <div
                    className="card-header"
                    style={{ background: "#009EFF" }}
                  >
                    {" "}
                    Liste des Clients
                  </div>
                  {/* <!-- /.card-header --> */}

                  {/* <!-- /.card-body --> */}
                </div>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active"></li>
                </ol>
              </div>

              <div className="card-body">
                <table
                  id="example1"
                  className="table table-bordered table-striped"
                >
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Nom</th>
                      <th>Prenom</th>
                      <th>Address</th>

                      <th>Edit Client</th>
                      <th>Delete Client</th>
                    </tr>
                  </thead>
                  {user &&
                    user.map((elt, key) => (
                      <tbody>
                        <tr>
                          <td>{elt.id}</td>
                          <td>{elt.nom}</td>
                          <td>{elt.prenom}</td>
                          <td> {elt.adress}</td>

                          <td>
                            {" "}
                            <Link
                              to={`http://localhost:8080/clients/edit/${elt.id}`}
                            >
                              {" "}
                              <button
                                style={{ border: "none", height: "10px" }}
                              >
                                <FaRegEdit color="green" />
                              </button>{" "}
                            </Link>{" "}
                          </td>
                          <td>
                            <button
                              style={{ border: "none", height: "10px" }}
                              onClick={() => dispatch(deleteUser(elt.id))}
                            >
                              <BsTrash color="red" />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
