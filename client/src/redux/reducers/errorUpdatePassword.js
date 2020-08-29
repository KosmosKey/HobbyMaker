import {
  ERROR_UPDATE_PASSWORD,
  REMOVE_ERROR_UDPATE,
} from "../actions/modalTypes";

const initalState = {
  message: null,
  status: null,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case ERROR_UPDATE_PASSWORD:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
      };

    case REMOVE_ERROR_UDPATE:
      return {
        ...state,
        message: null,
        status: null,
      };

    default:
      return state;
  }
}
