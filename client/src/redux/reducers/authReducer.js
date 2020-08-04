import {
  LOGIN_SUCCESS,
  REGISTRATION_SUCCESS,
  GET_ERRORS,
} from "../actions/Types";

const initalState = {
  token: localStorage.getItem("token"),
  Authenticated: null,
  registeredSuccessful: false,
  user: null,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        Authenticated: true,
        user: action.payload,
      };

    case GET_ERRORS:
      return {
        registeredSuccessful: false,
      };

    case REGISTRATION_SUCCESS:
      return {
        registeredSuccessful: true,
      };

    default:
      return state;
  }
}
