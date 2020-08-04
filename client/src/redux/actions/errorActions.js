import { GET_ERRORS, CLEAR_ERRORS } from "./Types";

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
