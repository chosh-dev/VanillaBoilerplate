import { COUNT_UP } from '../types';

const initState = {
  count: 0,
};

export default (state = initState, action = {}) => {
  switch (action.type) {
    case COUNT_UP:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};
