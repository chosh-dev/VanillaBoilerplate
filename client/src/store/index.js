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

const executeCallbacks = (state, oldValue, newValue) => {
  store[state].callback.forEach((fn) => fn(oldValue, newValue));
};

const diffing = (newState) => {
  Object.keys(currentState).forEach((reducerId) => {
    Object.keys(currentState[reducerId]).forEach((state) => {
      const oldValue = currentState[reducerId][state];
      const newValue = newState[reducerId][state];
      if (oldValue === newValue) return;
      if (JSON.stringify(oldValue) === JSON.stringify(newValue)) return;
      store[state].value = newValue;
      executeCallbacks(state, oldValue, newValue);
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
