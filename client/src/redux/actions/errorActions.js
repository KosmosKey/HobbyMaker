import { GET_ERRORS } from "./Types";

export const getErrors = (message, status) => {
  return {
    type: GET_ERRORS,
    payload: { message, status },
  };
};
