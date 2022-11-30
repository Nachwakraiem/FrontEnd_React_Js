import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { BsTrash } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../redux/actionUser";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ListClient = () => {
  const { user } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const [searchClient, setSearchClient] = useState("");
  const clientSearch = user.filter(
    (user) =>
      user.nom.toLowerCase().includes(searchClient.toLowerCase()) ||
      user.prenom.toLowerCase().includes(searchClient.toLowerCase())
  );
  const handleChange = (e) => {
    setSearchClient(e.target.value);
  };
  const deleteUnClient = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteUser(id));
          dispatch(getUsers());
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your account has been deleted.",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your account is safe :)",
            "error"
          );
        }
      });
  };
  return (
    <div>
      <Navbar />
      <div className="content-wrapper" style={{ color: "black" }}>
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <div className="card" style={{ marginLeft: "200px" }}>
                  <div className="card-header" style={{ marginLeft: "50px" }}>
                    {" "}
                    <h1>LISTE DES CLIENTS</h1>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <input
                    type="text"
                    placeholder="Search client"
                    className="form-control"
                    onChange={handleChange}
                  />
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
                  {clientSearch &&
                    clientSearch.map((elt, key) => (
                      <tbody>
                        <tr>
                          <td>{elt.id}</td>
                          <td>{elt.nom}</td>
                          <td>{elt.prenom}</td>
                          <td> {elt.adress}</td>

                          <td>
                            {" "}
                            <Link to={`/edituser/${elt.id}`}>
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
                              onClick={() => deleteUnClient(elt.id)}
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

export default ListClient;
