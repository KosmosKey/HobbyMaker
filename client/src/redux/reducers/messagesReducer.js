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
  GET_BADHOBBY_MESSAGES,
  POST_BADHOBBY_MESSAGES,
  DELETE_BADHOBBY_MESSAGES,
  GET_OTHERMESSAGES,
  POST_OTHERMESSAGES,
  DELETE_OTHERMESSAGES,
} from "../actions/messagesTypes";

const initalState = {
  loading: true,
  GeneralChat: null,
  TotalChat: null,
  loadingTotal: true,
  goodMessages: null,
  loadingGood: true,
  badMessages: null,
  loadingBad: true,
  otherMessages: null,
  loadingOther: null,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_OTHERMESSAGES:
      return {
        ...state,
        otherMessages: action.payload,
        loadingOther: false,
      };

    case POST_OTHERMESSAGES:
      return {
        ...state,
        otherMessages: [action.payload, ...state.otherMessages],
      };

    case DELETE_OTHERMESSAGES:
      return {
        ...state,
        otherMessages: state.otherMessages.filter(
          ({ _id }) => _id !== action.payload
        ),
      };

    case GET_BADHOBBY_MESSAGES:
      return {
        ...state,
        badMessages: action.payload,
        loadingBad: false,
      };

    case POST_BADHOBBY_MESSAGES:
      return {
        ...state,
        badMessages: [action.payload, ...state.badMessages],
      };

    case DELETE_BADHOBBY_MESSAGES:
      return {
        ...state,
        badMessages: state.badMessages.filter(
          ({ _id }) => _id !== action.payload
        ),
      };

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
