import reducer from './reducers';
import saga from './sagas';

const store = {};
let currentState = {};

const setCurrentState = (newState) => (currentState = newState);

const initStore = () => {
  const initState = reducer();
  Object.keys(initState).forEach((reducer) => {
    Object.keys(initState[reducer]).forEach(
      (state) => (store[state] = { value: initState[reducer][state], callback: new Set() })
    );
  });
  setCurrentState(initState);
};

const excuteCallbacks = (state) => {
  store[state].callback.forEach((fn) => fn(store[state].value));
};

const diffing = (newState) => {
  Object.keys(currentState).forEach((reducer) => {
    Object.keys(currentState[reducer]).forEach((state) => {
      if (currentState[reducer][state] === newState[reducer][state]) return;
      if (JSON.stringify(currentState[reducer][state]) === JSON.stringify(newState[reducer][state])) return;
      store[state].value = newState[reducer][state];
      excuteCallbacks(state);
    });
  });
};

const dispatch = (action) => {
  saga(action);
  const newState = reducer(currentState, action);
  diffing(newState);
  setCurrentState(newState);
};

const subscribe = (state, callback) => {
  store[state].callback.add(callback);
  return store[state].value;
};

const getState = (state) => store[state].value;

export { initStore, store, dispatch, subscribe, getState };
