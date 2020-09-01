import {
  GET_GENERAL_MESSAGE,
  ADD_GENERAL_MESSAGE,
  DELETE_GENERAL_MESSAGE,
} from "../actions/messagesTypes";

const initalState = {
  loading: true,
  GeneralChat: null,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_GENERAL_MESSAGE:
      return {
        ...state,
        loading: false,
        GeneralChat: action.payload,
      };

    case ADD_GENERAL_MESSAGE:
      return {
        ...state,
        GeneralChat: [action.payload, ...state.GeneralChat],
      };

    case DELETE_GENERAL_MESSAGE:
      return {
        ...state,
        GeneralChat: state.GeneralChat.filter(
          ({ _id }) => _id !== action.payload
        ),
      };

    default:
      return state;
  }
}
