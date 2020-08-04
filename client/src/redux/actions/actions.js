import { CLOSE_NAVIGATIONBAR, OPEN_NAVIGATIONBAR, GET_ERRORS } from "./Types";
import { REGISTRATION_SUCCESS } from "./Types";
import { getErrors } from "../actions/errorActions";
import axios from "axios";

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

export const registerUser = (config) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/user/Register", config)
    .then((res) => {
      dispatch({
        type: REGISTRATION_SUCCESS,
      });
    })
    .catch((err) => {
      if (err)
        return dispatch(getErrors(err.response.data, err.response.status));
    });
};
