import { combineReducers } from "redux";

import userReducer from "./userReducer";
import compteReducer from "./compteReducer"

export default combineReducers({  userReducer , compteReducer});
