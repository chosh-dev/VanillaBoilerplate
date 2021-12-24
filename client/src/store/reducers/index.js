import authReducer from './auth';
import countReducer from './count';

const reducerList = [
  { id: 'auth', reducer: authReducer },
  { id: 'count', reducer: countReducer },
];

const combineReducers = (state, action) => {
  const newState = {};

  reducerList.forEach(({ id, reducer }) => {
    newState[id] = reducer(state?.[id], action);
  });

  return newState;
};

export default combineReducers;
