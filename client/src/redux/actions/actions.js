import {
  CLOSE_NAVIGATIONBAR,
  OPEN_NAVIGATIONBAR,
  LOGIN_SUCCESS,
  LOADED_USERNAME,
  GET_HOBBIES,
  UPDATED_USER,
  FINISHED,
  LOGOUT,
  WELCOME,
} from "./Types";
import { REGISTRATION_SUCCESS } from "./Types";
import {
  getErrors,
  clearErrors,
  authErrors,
  clearAuthErrors,
} from "../actions/errorActions";
import axios from "axios";
import {
  UPDATE_PASSWORD,
  ERROR_UPDATE_PASSWORD,
  REMOVE_ERROR_UDPATE,
} from "./modalTypes";

export const welcomeTrue = () => {
  return {
    type: WELCOME,
  };
};

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

export const updateUser = (id, body) => (dispatch) => {
  axios
    .put(`http://localhost:5000/api/user/updateUser/${id}`, body)
    .then((res) => {
      dispatch({
        type: UPDATED_USER,
        payload: res.data,
      });
    });
};

export const updateUserFalse = () => {
  return {
    type: FINISHED,
  };
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

  axios
    .get("http://localhost:5000/api/user", config)
    .then((res) => {
      dispatch({
        type: LOADED_USERNAME,
        payload: res.data,
      });
      dispatch(getHobbies());
    })
    .catch((err) => {
      console.log(err);
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
        authErrors(err.response.data.message, err.response.status)
      );
    });
};

export const updateErrorPassword = (message, status) => {
  return {
    type: ERROR_UPDATE_PASSWORD,
    payload: { message, status },
  };
};

export const errorUpdateRemove = () => {
  return {
    type: REMOVE_ERROR_UDPATE,
  };
};

export const updateUserPassword = (id, body) => (dispatch) => {
  axios
    .put(`http://localhost:5000/api/user/Password/${id}`, body)
    .then((res) => {
      dispatch({
        type: UPDATE_PASSWORD,
        payload: res.data,
      });
      dispatch(errorUpdateRemove());
    })
    .catch((err) => {
      return dispatch(
        updateErrorPassword(err.response.data.message, err.response.status)
      );
    });
};

export const logOut = () => {
  return {
    type: LOGOUT,
  };
};
