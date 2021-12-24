import reducer from './reducers';
import saga from './sagas';

const store = {};
let currentState = {};

const setCurrentState = (newState) => (currentState = newState);

const initStore = () => {
  const initState = reducer();
  Object.keys(initState).forEach((reducerId) => {
    Object.keys(initState[reducerId]).forEach(
      (state) => (store[state] = { value: initState[reducerId][state], callback: new Set() })
    );
  });
  setCurrentState(initState);
};

const executeCallbacks = (state) => {
  store[state].callback.forEach((fn) => fn(store[state].value));
};

const diffing = (newState) => {
  Object.keys(currentState).forEach((reducerId) => {
    Object.keys(currentState[reducerId]).forEach((state) => {
      if (currentState[reducerId][state] === newState[reducerId][state]) return;
      if (JSON.stringify(currentState[reducerId][state]) === JSON.stringify(newState[reducerId][state]))
        return;
      store[state].value = newState[reducerId][state];
      executeCallbacks(state);
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

const unSubscribe = (state, callback) => store[state].callback.delete(callback);

const getState = (state) => store[state].value;

export { initStore, dispatch, subscribe, unSubscribe, getState };
