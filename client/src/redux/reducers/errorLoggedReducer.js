import {
  AUTH_ERROR,
  CLEAR_AUTH_ERROR,
  LOGGED_USER,
  LOGIN_SUCCESS,
  LOADED_USERNAME,
} from "../actions/Types";

const initialState = {
  id: null,
  message: null,
  status: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_ERROR:
      return {
        id: "LOGGED_FAIL",
        message: action.payload.message,
        status: action.payload.status,
      };
    case CLEAR_AUTH_ERROR:
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        id: null,
        message: null,
        status: null,
      };

    default:
      return state;
  }
}
