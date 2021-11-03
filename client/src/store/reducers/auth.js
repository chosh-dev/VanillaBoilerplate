import { REQUEST_LOGIN } from '../types';

const initState = {
  count: 0,
};

export default (state = initState, action = {}) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};
