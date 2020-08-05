import { AUTH_ERROR, CLEAR_AUTH_ERROR } from "../actions/Types";

const initialState = {
  message: null,
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
      return {
        message: null,
        status: null,
      };

    default:
      return state;
  }
}
