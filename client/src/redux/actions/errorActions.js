import {
  GET_ERRORS,
  CLEAR_ERRORS,
  AUTH_ERROR,
  CLEAR_AUTH_ERROR,
} from "./Types";

export const getErrors = (message, status) => {
  return {
    type: GET_ERRORS,
    payload: { message, status },
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const authErrors = (message, status) => {
  return {
    type: AUTH_ERROR,
    payload: {
      message,
      status,
    },
  };
};

export const clearAuthErrors = () => {
  return {
    type: CLEAR_AUTH_ERROR,
  };
};
