import { LISTS_ACTION } from "../actions";

const initialState = { lists: [] };

const Lists = (state = initialState, { type, payload }) => {
  switch (type) {
    case LISTS_ACTION:
      return { ...state, lists: payload };
    default:
      return state;
  }
};

export default Lists;