import React, { useEffect, useState } from "react";
import Navbar from "../../navbar/Navbar";
import { BsTrash } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompte, getCompte } from "../../../redux/actionCompte";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const ListCompte = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompte());
  }, []);
  const { compte } = useSelector((state) => state.compteReducer);

  const deleteUnCompte = (rib) => {
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
          dispatch(deleteCompte(rib));
          dispatch(getCompte());
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
  const [searchCompte, setSearchCompte] = useState("");
  const searchAccount = compte.filter(
    (compte) =>
      compte.client.nom.toLowerCase().includes(searchCompte.toLowerCase()) ||
      compte.client.prenom.toLowerCase().includes(searchCompte.toLowerCase())
  );
  const handleChange = (e) => {
    setSearchCompte(e.target.value);
  };
  return (
    <div>
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
                      <h1>LISTE DES COMPTES</h1>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <input
                      type="text"
                      placeholder="Search compte"
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
                        <th>rib</th>
                        <th>Nom & Prenom </th>

                        <th>Solde</th>

                        <th>Edit Client</th>
                        <th>Delete Client</th>
                      </tr>
                    </thead>
                    {searchAccount &&
                      searchAccount.map((elt, key) => (
                        <tbody>
                          <tr>
                            <td>{elt.rib}</td>
                            <td>{`${elt.client.nom} ${elt.client.prenom}`}</td>

                            <td>{elt.solde}</td>
                            <td>
                              {" "}
                              <Link to={`/editcompte/${elt.rib}`}>
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
                                onClick={() => deleteUnCompte(elt.rib)}
                              >
                                <BsTrash color="red" />

                                <delete />
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
    </div>
  );
};

export default ListCompte;
