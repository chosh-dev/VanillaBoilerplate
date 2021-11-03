import authReducer from './auth';

export default (state, action) => {
  const combineReducers = (reducers) => {
    const newState = {};

    Object.keys(reducers).forEach((key) => {
      const previousState = state?.[key];
      const reducer = reducers[key];
      newState[key] = reducer(previousState, action);
    });
    return newState;
  };

  return combineReducers({ authReducer });
};
