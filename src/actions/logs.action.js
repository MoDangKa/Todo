import { LOGS_ACTION } from "./index";

export const setState = (payload) => ({
  type: LOGS_ACTION,
  payload,
});

export const edit = (payload) => {
  return (dispatch) => {
    dispatch(setState(payload));
  };
};
