import {
  LOGIN_SUCCESS,
  REGISTRATION_SUCCESS,
  GET_ERRORS,
  AUTH_ERROR,
  LOADED_USERNAME,
} from "../actions/Types";

const initalState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  registeredSuccessful: false,
  isLoading: true,
  user: [],
};

export default function (state = initalState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
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

    case LOADED_USERNAME:
      return {
        ...state,
        isLoading: !state.isLoading,
        user: action.payload,
      };

    case REGISTRATION_SUCCESS:
      return {
        registeredSuccessful: true,
      };

    default:
      return state;
  }
}
