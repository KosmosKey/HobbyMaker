import { GET_HOBBIES } from "../actions/Types";
import { UPDATE_SUCCESS } from "../actions/modalTypes";

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

    default:
      return state;
  }
}
