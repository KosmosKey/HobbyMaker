import {
  LOGIN_SUCCESS,
  REGISTRATION_SUCCESS,
  GET_ERRORS,
  AUTH_ERROR,
  LOADED_USERNAME,
  REFRESH_TOKEN,
} from "../actions/Types";

const initalState = {
  token: localStorage.getItem("token"),
  // refreshToken: localStorage.getItem("refreshToken"),
  isAuthenticated: false,
  registeredSuccessful: false,
  isLoading: true,
  user: [],
};

export default function (state = initalState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      // localStorage.setItem("refreshToken", action.payload.refreshToken);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };

    case REFRESH_TOKEN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
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
        ...action.payload,
        user: action.payload,
        isLoading: false,
        isAuthenticated: true,
      };

    case REGISTRATION_SUCCESS:
      return {
        registeredSuccessful: true,
      };

    default:
      return state;
  }
}
