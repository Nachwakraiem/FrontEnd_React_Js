import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addcompte } from "../../../redux/actionCompte";
import Navbar from "../../navbar/Navbar";
import { getUsers } from "../../../redux/actionUser";
const AddCompte = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userReducer);

  const [rib, setRib] = useState("");
  const [client, setClient] = useState("");
  const [solde, setSolde] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    //navigate("/listcompte");
    const newCompte = { rib, id: client, solde };

    dispatch(addcompte(newCompte, navigate));

    setRib("");
    setClient("");
    setSolde("");
  };
  console.log(rib, solde, client);
  return (
    <div>
      <Navbar />

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {/* <!-- left column --> */}
            <div className="col-md-6" style={{ marginLeft: "250px" }}>
              <div style={{ color: "black" }}>
                <form>
                  <div className="card-body">
                    <div className="card" style={{ paddingLeft: "150px" }}>
                      <div
                        className="card-header"
                        style={{ marginLeft: "50px" }}
                      >
                        {" "}
                        <h2>ADD COMPTE</h2>
                      </div>
                    </div>

                    <div className="form-group">
                      <label
                        style={{ marginRight: "500px" }}
                        for="exampleInputPassword1"
                      >
                        Client
                      </label>

                      <select
                        className="form-control"
                        onChange={(e) => setClient(e.target.value)}
                      >
                        <option>Select client</option>
                        {user.map((user) => {
                          return (
                            <option value={user.id}>
                              {`${user.nom} ${user.prenom}`}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="form-group">
                      <label
                        style={{ marginRight: "500px" }}
                        for="exampleInputEmail1"
                      >
                        {" "}
                        Solde
                      </label>
                      <input
                        type="float"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="sold"
                        value={solde}
                        onChange={(e) => setSolde(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* <!-- /.card-body --> */}

                  <div className="card-footer">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      to="/listcompte"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddCompte;
