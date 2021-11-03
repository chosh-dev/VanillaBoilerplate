import * as type from '../types';

export const requestLogin = (payload) => ({ type: type.REQUEST_LOGIN, payload });
export const loginSuccess = (payload) => ({ type: type.LOGIN_SUCCESS, payload });
