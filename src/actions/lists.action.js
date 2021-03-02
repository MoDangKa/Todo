import { LISTS_ACTION} from "./index";

export const setState = (payload) => ({
  type: LISTS_ACTION,
  payload,
});

export const edit = (payload) => {
  return (dispatch) => {
    dispatch(setState(payload));
  };
};

