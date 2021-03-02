import { LOGS_ACTION } from "../actions";

const initialState = { logs: [] };

const logs = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGS_ACTION:
      return { ...state, logs: payload };
    default:
      return state;
  }
};

export default logs;
