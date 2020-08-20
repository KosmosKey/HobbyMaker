import axios from "axios";
import {
  UPDATE_ERROR,
  UPDATE_SUCCESS,
  CLEAR_ERRORS,
  DELETE_ITEM,
  ADD_HOBBY,
  ADD_GOOD_HOBBY,
  DELETE_GOOD_HOBBY,
} from "./modalTypes";

export const clearErrorUpdateHobby = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const deleteHobby = (id) => (dispatch) => {
  axios.delete(`http://localhost:5000/api/user/${id}`).then((res) => {
    dispatch({
      type: DELETE_ITEM,
      payload: id,
    });
  });
};

export const addHobby = (value) => (dispatch, getState) => {
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
    .post("http://localhost:5000/api/user/Todo", value, config)
    .then((res) => {
      dispatch({
        type: ADD_HOBBY,
        payload: res.data,
      });
    });
};

export const errorUpdateHobby = (message, status) => {
  return {
    type: UPDATE_ERROR,
    payload: { message, status },
  };
};

export const updateHobby = (id, body) => (dispatch) => {
  axios.put(`http://localhost:5000/api/user/${id}`, body).then((res) => {
    dispatch({
      type: UPDATE_SUCCESS,
      payload: res.data,
    });
  });
};

export const addGoodHobby = (value) => (dispatch, getState) => {
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
    .post("http://localhost:5000/api/user/Good", value, config)
    .then((res) => {
      dispatch({
        type: ADD_GOOD_HOBBY,
        payload: res.data,
      });
    });
};

export const deleteGoodHobby = (id) => (dispatch) => {
  axios.delete(`http://localhost:5000/api/user/Good/${id}`).then((res) => {
    dispatch({
      type: DELETE_GOOD_HOBBY,
      payload: id,
    });
  });
};
