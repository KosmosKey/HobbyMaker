import { GET_ERRORS, CLEAR_ERRORS } from "../actions/Types";

const initalState = {
  message: null,
  status: null,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        status: action.payload.status,
        message: action.payload.message,
      };

    case CLEAR_ERRORS:
      return {
        message: null,
        status: null,
      };

    default:
      return state;
  }
}
