import { combineReducers } from "redux";
import reducer from "./reducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  nav: reducer,
  auth: authReducer,
  error: errorReducer,
});
