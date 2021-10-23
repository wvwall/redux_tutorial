const redux = require("redux");

const createStore = redux.createStore;

// REDUCER

const initialState = {
  counter: 1,
};
const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENTA") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "AUMENTA") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  return state;
};

// ACTIONS

const aumenta = () => {
  return {
    type: "AUMENTA",
    value: 4,
  };
};
const incrementa = () => {
  return {
    type: "INCREMENTA",
  };
};

// STORE
const store = createStore(reducer);
console.log(store.getState());

// SUBSCRIPTION
store.subscribe(() => {
  console.log("from sub", store.getState());
});

// DISPATCH ACTION

store.dispatch(aumenta());
console.log(store.getState());
store.dispatch(incrementa());
console.log(store.getState());
