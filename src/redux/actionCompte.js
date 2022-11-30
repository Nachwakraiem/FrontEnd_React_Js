import axios from "axios";
import {
  ADD_COMPTE,
  ADD_COMPTE_FAIL,
  ADD_COMPTE_SUCCESS,
  DELETE_COMPTE_FAIL,
  EDIT_COMPTE,
  EDIT_COMPTE_FAIL,
  EDIT_COMPTE_SUCCESS,
  GET_COMPTE_FAIL,
  GET_COMPTE_SUCCESS,
} from "./ActionTypes";

//get client

export const getCompte = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/comptes/all`);
    console.log(res);
    dispatch({
      type: GET_COMPTE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_COMPTE_FAIL,
      payload: error.response.data,
    });
  }
};
//delete compte
export const deleteCompte = (rib) => async (dispatch) => {
  try {
    console.log(rib);
    axios.delete(`http://localhost:8080/comptes/delete/${rib}`);

    dispatch(getCompte());
  } catch (error) {
    dispatch({
      type: DELETE_COMPTE_FAIL,
      payload: error.response.data,
    });
  }
};
//edit compte
export const editCompte = (editedCompte, navigate) => async (dispatch) => {
  dispatch({
    type: EDIT_COMPTE,
  });
  try {
    const res = await axios.put(
      `http://localhost:8080/comptes/edit/${editedCompte.rib}`,
      { solde: editedCompte.solde }
    );

    dispatch({
      type: EDIT_COMPTE_SUCCESS,
      payload: res.data,
    });
    navigate("/listcompte");
  } catch (error) {
    dispatch({
      type: EDIT_COMPTE_FAIL,
      payload: error.response.data,
    });
  }
};
//add client
export const addcompte = (newCompte, navigate) => async (dispatch) => {
  dispatch({ type: ADD_COMPTE });

  try {
    const res = await axios.post(
      "http://localhost:8080/comptes/save",
      newCompte
    );

    dispatch({ type: ADD_COMPTE_SUCCESS, payload: res.data });
    navigate("/listcompte");
  } catch (error) {
    dispatch({
      type: ADD_COMPTE_FAIL,
      payload: error.response.data,
    });
  }
};
