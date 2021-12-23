import { LOGIN_SUCCESS } from '../types';

const initState = {
  loginSuccess: false,
};

export default (state = initState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, loginSuccess: true };
    default:
      return state;
  }
};
