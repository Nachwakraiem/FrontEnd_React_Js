import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../redux/actionUser";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import Navbar from "../navbar/Navbar";

const EditUser = () => {
  const { user } = useSelector((state) => state.userReducer);
  const { id } = useParams();
  const [userEdit, setUserEdit] = useState(user.find((el) => el.id == id));
  useEffect(() => {
    setUserEdit(user.find((el) => el.id == id));
  }, [id]);

  const [nom, setNom] = useState(userEdit.nom);
  const [prenom, setPrenom] = useState(userEdit.prenom);
  const [adress, setAdress] = useState(userEdit.adress);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newOne = {
      nom,
      prenom,
      adress,

      id: userEdit.id,
    };

    dispatch(editUser(newOne, navigate));
  };
  return (
    <div>
      <Navbar />
      <form style={{ width: "1000px", marginLeft: "250px" }}>
        <div className="card-body">
          <div className="card-header" style={{ background: "#009EFF" }}>
            {" "}
            Modifier un Client
          </div>
          <div className="form-group">
            <label style={{ marginRight: "500px" }} for="exampleInputPassword1">
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
            <label style={{ marginRight: "500px" }} for="exampleInputPassword1">
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
            <label style={{ marginRight: "500px" }} for="exampleInputEmail1">
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
        {/* <!-- /.card-body --> */}

        <div className="card-footer">
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

export default EditUser;
