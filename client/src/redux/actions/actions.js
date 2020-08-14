import {
  CLOSE_NAVIGATIONBAR,
  OPEN_NAVIGATIONBAR,
  LOGIN_SUCCESS,
  LOADED_USERNAME,
  GET_HOBBIES,
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

export const getHobbies = () => (dispatch, getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  axios.get("http://localhost:5000/api/user/Todo", config).then((res) => {
    dispatch({ type: GET_HOBBIES, payload: res.data });
  });
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

export const loadUser = () => (dispatch, getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  axios.get("http://localhost:5000/api/user", config).then((res) => {
    dispatch({
      type: LOADED_USERNAME,
      payload: res.data,
    });
    dispatch(getHobbies());
  });
};

export const loggedUser = (user) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/user/Login", user)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(clearAuthErrors());
    })
    .catch((err) => {
      return dispatch(
        authErrors(err.response.data.message, err.response.status),
        console.log(err)
      );
    });
};
