import axios from "axios";
import {
  GET_GENERAL_MESSAGE,
  ADD_GENERAL_MESSAGE,
  DELETE_GENERAL_MESSAGE,
  GET_TOTAL_MESSAGE,
  ADD_TOTAL_MESSAGE,
  DELETE_TOTAL_MESSAGE,
} from "./messagesTypes";

export const getGeneralChat = () => (dispatch) => {
  axios.get("http://localhost:5000/api/messages").then((res) => {
    dispatch({
      type: GET_GENERAL_MESSAGE,
      payload: res.data,
    });
  });
};

export const addGeneralChat = (body) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/messages/TotalHobbyMessage", body)
    .then((res) => {
      dispatch({
        type: ADD_GENERAL_MESSAGE,
        payload: res.data,
      });
    });
};

export const deleteGeneralChat = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/api/messages/TotalHobbyMessage/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_GENERAL_MESSAGE,
        payload: id,
      });
    });
};

export const getTotalHobbiesChat = () => (dispatch) => {
  axios.get("http://localhost:5000/api/messages/Total").then((res) => {
    dispatch({
      type: GET_TOTAL_MESSAGE,
      payload: res.data,
    });
  });
};
