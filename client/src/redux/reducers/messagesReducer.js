import {
  GET_GENERAL_MESSAGE,
  ADD_GENERAL_MESSAGE,
  DELETE_GENERAL_MESSAGE,
  GET_TOTAL_MESSAGE,
  ADD_TOTAL_MESSAGE,
  DELETE_TOTAL_MESSAGE,
  GET_GOOD_MESSAGES,
  DELETE_GOOD_MESSAGES,
  ADD_GOOD_MESSAGES,
} from "../actions/messagesTypes";

const initalState = {
  loading: true,
  GeneralChat: null,
  TotalChat: null,
  loadingTotal: true,
  goodMessages: null,
  loadingGood: true,
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

    case GET_TOTAL_MESSAGE:
      return {
        ...state,
        TotalChat: action.payload,
        loadingTotal: false,
      };

    case ADD_TOTAL_MESSAGE:
      return {
        ...state,
        TotalChat: [action.payload, ...state.TotalChat],
      };

    case DELETE_TOTAL_MESSAGE:
      return {
        ...state,
        TotalChat: state.TotalChat.filter(({ _id }) => _id !== action.payload),
      };

    case GET_GOOD_MESSAGES:
      return {
        ...state,
        goodMessages: action.payload,
        loadingGood: false,
      };

    case ADD_GOOD_MESSAGES:
      return {
        ...state,
        goodMessages: [action.payload, ...state.goodMessages],
      };

    case DELETE_GOOD_MESSAGES:
      return {
        ...state,
        goodMessages: state.goodMessages.filter(
          ({ _id }) => _id !== action.payload
        ),
      };

    default:
      return state;
  }
}
