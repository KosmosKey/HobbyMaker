import { CLOSE_NAVIGATIONBAR, OPEN_NAVIGATIONBAR } from "./Types";

export const openNavBar = () => {
  return {
    type: OPEN_NAVIGATIONBAR,
  };
};

export const closeNavBar = () => {
  return {
    type: CLOSE_NAVIGATIONBAR,
  };
};
