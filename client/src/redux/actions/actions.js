import {
  CLOSE_NAVIGATIONBAR,
  OPEN_NAVIGATIONBAR,
  LOGIN_SUCCESS,
} from "./Types";
import { REGISTRATION_SUCCESS } from "./Types";
import {
  getErrors,
  clearErrors,
  authErrors,
  clearAuthErrors,
} from "../actions/errorActions";
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
      dispatch(clearErrors());
    })
    .catch((err) => {
      if (err)
        return dispatch(
          getErrors(err.response.data.message, err.response.status)
        );
    });
};

export const loadUser = (id) => {
  axios.get("http://localhost:5000/api/user", id).then((user) => {
    console.log(user);
  });
};

export const loggedUser = (user) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/user/Login", user)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(clearAuthErrors());
    })
    .catch((err) => {
      if (err)
        return dispatch(
          authErrors(err.response.data.message, err.response.status)
        );
    });
};
