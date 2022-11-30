//user log in

import axios from "axios";
import {
  ADD_USER,
  ADD_USER_FAIL,
  DELETE_USER_FAIL,
  EDIT_USER,
  EDIT_USER_FAIL,
  EDIT_USER_SUCCESS,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
} from "./ActionTypes";

export const userLogin = (loginUser, navigate) => async (dispatch) => {
  dispatch({ type: LOGIN });
  try {
    const res = await axios.post("/user/login", loginUser);
    localStorage.setItem("token", res.data.token);

    if (res.status === 203) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      navigate("/admin");
      window.location.reload(false);
    }
  } catch (error) {
    alert(error.response.data.msg);
  }
};
//get client

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8080/clients/all");
    dispatch({
      type: GET_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_FAIL,
      payload: error.response.data,
    });
  }
};
//delete client
export const deleteUser = (id) => async (dispatch) => {
  try {
    axios.delete(`http://localhost:8080/clients/delete/${id}`);

    dispatch(getUsers());
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.response.data,
    });
  }
};
//edit client
export const editUser = (editedUser, navigate) => async (dispatch) => {
  dispatch({
    type: EDIT_USER,
  });
  try {
    const res = await axios.put(
      `http://localhost:8080/clients/edit/${editedUser.id}`,
      editedUser
    );

    dispatch({
      type: EDIT_USER_SUCCESS,
      payload: res.data,
    });
    navigate("/");
  } catch (error) {
    dispatch({
      type: EDIT_USER_FAIL,
      payload: error.response.data,
    });
  }
};
//add client
export const addUser = (newUser, navigate) => async (dispatch) => {
  dispatch({ type: ADD_USER });
  try {
    const res = await axios.post("http://localhost:8080/clients/save", newUser);
    // console.log(res.data);
    dispatch(
      getUsers()
      // type: ADD_SUCCESS,
      // payload: res.data,
    );
    navigate("/");
  } catch (error) {
    dispatch({
      type: ADD_USER_FAIL,
      payload: error.response.data,
    });
  }
};
