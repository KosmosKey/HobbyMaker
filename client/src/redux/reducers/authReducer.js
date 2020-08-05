import {
  LOGIN_SUCCESS,
  REGISTRATION_SUCCESS,
  GET_ERRORS,
  AUTH_ERROR,
} from "../actions/Types";

const initalState = {
  isAuthenticated: false,
  registeredSuccessful: false,
  user: null,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };

    case AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
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
