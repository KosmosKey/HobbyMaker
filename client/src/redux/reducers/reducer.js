import { CLOSE_NAVIGATIONBAR, OPEN_NAVIGATIONBAR } from "../actions/Types";

const initalState = {
  open: false,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case OPEN_NAVIGATIONBAR:
      return {
        open: !state.open,
      };

    case CLOSE_NAVIGATIONBAR:
      return {
        open: !state.open,
      };

    default:
      return state;
  }
}
