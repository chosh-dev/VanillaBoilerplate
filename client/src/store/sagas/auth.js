import * as api from '../apis';
import { dispatch } from '_store';
import { loginSuccess } from '_actions';
import { REQUEST_LOGIN } from '../types';

const login = async (action) => {
  try {
    const res = await api.login({ id: action.payload.id });
    if (res.ok) {
      dispatch(loginSuccess(true));
    } else {
      const { msg } = await res.json();
      console.log('saga작동! api 실패!');
    }
  } catch (error) {
    console.log('saga작동! api 실패!');
  }
};

export default (action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      login(action);
      break;
  }
};
