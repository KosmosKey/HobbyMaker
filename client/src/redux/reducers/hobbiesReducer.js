import { GET_HOBBIES } from "../actions/Types";

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

    default:
      return state;
  }
}
