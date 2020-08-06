import {
  AUTH_ERROR,
  CLEAR_AUTH_ERROR,
  LOGGED_USER,
  LOADED_USERNAME,
} from "../actions/Types";

const initialState = {
  message: {},
  status: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_ERROR:
      return {
        message: action.payload.message,
        status: action.payload.status,
      };
    case CLEAR_AUTH_ERROR:
    case LOGGED_USER:
    case LOADED_USERNAME:
      return {
        message: {},
        status: null,
      };

    default:
      return state;
  }
}
