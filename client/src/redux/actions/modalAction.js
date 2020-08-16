import axios from "axios";
import { UPDATE_ERROR, UPDATE_SUCCESS, CLEAR_ERRORS } from "./modalTypes";

export const clearErrorUpdateHobby = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const errorUpdateHobby = (message, status) => {
  return {
    type: UPDATE_ERROR,
    payload: { message, status },
  };
};

export const updateHobby = (id, body) => (dispatch) => {
  axios
    .put(`http://localhost:5000/api/user/${id}`, body)
    .then((res) => {
      dispatch({
        type: UPDATE_SUCCESS,
        payload: res.data,
      });
      dispatch(clearErrorUpdateHobby());
    })
    .catch((err) => {
      dispatch(
        errorUpdateHobby(err.response.data.message, err.response.status)
      );
    });
};
