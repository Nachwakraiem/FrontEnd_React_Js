import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../redux/actionUser";
import Navbar from "../navbar/Navbar";

const AddClient = () => {
  const { user } = useSelector((state) => state.userReducer);
  console.log(user);
  const navigate = useNavigate();
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adress, setAdress] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { nom, prenom, adress };

    dispatch(addUser(newUser, navigate));

    setNom("");
    setPrenom("");
    setAdress("");
  };
  return (
    <div>
      <Navbar />

      <section className="content">
        <div className="container-fluid">
          <div className="row">
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
                        <h2>ADD CLIENT</h2>
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        style={{ marginRight: "500px" }}
                        for="exampleInputPassword1"
                      >
                        Nom
                      </label>
                      <input
                        type="nom"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        style={{ marginRight: "500px" }}
                        for="exampleInputPassword1"
                      >
                        Prenom
                      </label>
                      <input
                        type="prenom"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="prenom"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        style={{ marginRight: "500px" }}
                        for="exampleInputEmail1"
                      >
                        {" "}
                        address
                      </label>
                      <input
                        type="address"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter address"
                        value={adress}
                        onChange={(e) => setAdress(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="card-footer">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      to="/ListClient"
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

export default AddClient;
