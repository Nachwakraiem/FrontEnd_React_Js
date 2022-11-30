import {
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  EDIT_USER_FAIL,
  EDIT_USER_SUCCESS,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from "../ActionTypes";

const init = {
  user: [],
  userFiles: [],
  error: null,
  token: localStorage.getItem("token"),
  isAuth: false,
};

export const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case LOGIN:
      // case GET_PROFILE:

      return {
        ...state,
        // loading: true,
      };
    case EDIT_USER_FAIL:
    case ADD_USER_FAIL:
    case DELETE_USER_FAIL:
    case GET_USER_FAIL:
    case LOGIN_FAIL:
      // case GET_PROFILE_FAIL:

      return {
        ...state,
        loading: false,
        error: payload,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: payload.user,
        token: payload.token,
        isAuth: true,
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: state.user.map((el) => (el.id === payload.id ? payload : el)),
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: state.user.filter((el) => el.id !== payload),
        error: null,
      };

    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: [...state.user, payload],
      };

    default:
      return state;
  }
};
export default userReducer;
