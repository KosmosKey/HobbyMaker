import { GET_HOBBIES } from "../actions/Types";
import { UPDATE_SUCCESS, DELETE_ITEM, ADD_HOBBY } from "../actions/modalTypes";

const initalState = {
  itemsHobbies: null,
  itemsLoading: true,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_HOBBIES:
      return {
        ...state,
        itemsHobbies: action.payload,
        itemsLoading: false,
      };

    case UPDATE_SUCCESS:
      return {
        ...state,
        itemsHobbies: [...state.itemsHobbies],
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

    default:
      return state;
  }
}
