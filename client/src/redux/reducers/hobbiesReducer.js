import { GET_HOBBIES } from "../actions/Types";
import {
  UPDATE_SUCCESS,
  DELETE_ITEM,
  ADD_HOBBY,
  ADD_GOOD_HOBBY,
  DELETE_GOOD_HOBBY,
  ADD_BAD_HOBBY,
  DELETE_BAD_HOBBY,
} from "../actions/modalTypes";

const initalState = {
  itemsHobbies: null,
  badItems: null,
  goodItems: null,
  itemsLoading: true,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_HOBBIES:
      return {
        ...state,
        itemsHobbies: action.payload.items,
        badItems: action.payload.badItems,
        goodItems: action.payload.goodItems,
        itemsLoading: false,
      };

    case UPDATE_SUCCESS:
      return {
        ...state,
        itemsHobbies: state.itemsHobbies.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };

    case ADD_HOBBY:
      return {
        ...state,
        itemsHobbies: [action.payload, ...state.itemsHobbies],
      };

    case DELETE_ITEM:
      return {
        ...state,
        itemsHobbies: state.itemsHobbies.filter(
          (item) => item._id !== action.payload
        ),
      };

    case DELETE_GOOD_HOBBY:
      return {
        ...state,
        goodItems: state.goodItems.filter(
          (item) => item._id !== action.payload
        ),
      };

    case ADD_GOOD_HOBBY:
      return {
        ...state,
        goodItems: [action.payload, ...state.goodItems],
      };

    case ADD_BAD_HOBBY:
      return {
        ...state,
        badItems: [action.payload, ...state.badItems],
      };

    case DELETE_BAD_HOBBY:
      return {
        ...state,
        badItems: state.badItems.filter((item) => item._id !== action.payload),
      };

    default:
      return state;
  }
}
