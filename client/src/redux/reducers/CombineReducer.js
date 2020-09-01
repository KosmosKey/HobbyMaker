import { combineReducers } from "redux";
import reducer from "./reducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import errorLoggedReducer from "./errorLoggedReducer";
import hobbiesReducer from "./hobbiesReducer";
import errorUpdate from "./errorHobbiesReducer";
import errorUpdatePassword from "./errorUpdatePassword";
import messagesReducer from "./messagesReducer";

export default combineReducers({
  nav: reducer,
  auth: authReducer,
  error: errorReducer,
  loggedError: errorLoggedReducer,
  hobbies: hobbiesReducer,
  hobbyErr: errorUpdate,
  passwordErr: errorUpdatePassword,
  generalMessages: messagesReducer,
});
