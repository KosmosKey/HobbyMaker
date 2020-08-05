import { combineReducers } from "redux";
import reducer from "./reducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import errorLoggedReducer from "./errorLoggedReducer";

export default combineReducers({
  nav: reducer,
  auth: authReducer,
  error: errorReducer,
  loggedError: errorLoggedReducer,
});
