import * as type from '../types';

export const requestLogin = (payload) => ({ type: type.REQUEST_LOGIN, payload });
export const loginSuccess = (payload) => ({ type: type.LOGIN_SUCCESS, payload });
export const countUp = (payload) => ({ type: type.COUNT_UP, payload });
