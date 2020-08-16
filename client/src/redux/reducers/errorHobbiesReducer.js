import { UPDATE_ERROR, CLEAR_ERRORS } from "../actions/modalTypes";

const initalState = {
  id: null,
  message: null,
  status: null,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case UPDATE_ERROR:
      return {
        id: "FAILED",
        message: action.payload.message,
        status: action.payload.status,
      };
    case CLEAR_ERRORS:
      return {
        id: null,
        message: null,
        status: null,
      };

    default:
      return state;
  }
}
