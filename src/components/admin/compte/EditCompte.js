import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { editCompte, getCompte } from "../../../redux/actionCompte";

import { useParams } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
const EditCompte = () => {
  const { rib } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompte());
  }, []);

  const { compte } = useSelector((state) => state.compteReducer);

  //const [rib, setRib] = useState(compte.rib);
  const [compteEdit, setCompteEdit] = useState(
    compte.find((el) => el.rib == rib)
  );
  useEffect(() => {
    setCompteEdit(compte.find((el) => el.rib == rib));
  }, [rib]);

  const [solde, setSolde] = useState(compteEdit.solde);
  const [client, setClient] = useState(
    `${compteEdit.client.nom} ${compteEdit.client.prenom}`
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOne = {
      solde,
      rib: compteEdit.rib,
    };

    dispatch(editCompte(newOne, navigate));
  };
  return (
    <div>
      <Navbar />
      <form style={{ width: "1000px", marginLeft: "250px" }}>
        <div className="card-body">
          <div className="card-header" style={{ background: "#009EFF" }}>
            {" "}
            Modifier un Compte
          </div>
          <div className="form-group">
            <label style={{ marginRight: "500px" }} for="exampleInputPassword1">
              Rib
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Nom"
              disabled={true}
              value={rib}
            />
          </div>
          <div className="form-group">
            <label style={{ marginRight: "500px" }} for="exampleInputPassword1">
              Client
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Nom"
              disabled={true}
              value={client}
            />
          </div>

          <div className="form-group">
            <label style={{ marginRight: "500px" }} for="exampleInputEmail1">
              {" "}
              Solde
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter address"
              value={solde}
              onChange={(e) => setSolde(e.target.value)}
            />
          </div>
        </div>
        {/* <!-- /.card-body --> */}

        <div className="card-footer">
          <Link to="/listcompte"></Link>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCompte;
