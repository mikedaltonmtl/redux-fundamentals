import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import { print1, print2, print3 } from './exampleAddons/middleware';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';

// import { legacy_createStore as createStore, compose } from 'redux';
// import {
//   sayHiOnDispatch,
//   includeMeaningOfLife
// } from './exampleAddons/enhancers';

const composedEnhancer = composeWithDevTools(
  // EXAMPLE: Add whatever middleware you actually want to use here
  applyMiddleware(print1, print2, print3)
  // other store enhancers if any
)

const store = createStore(rootReducer, composedEnhancer)



// const middlewareEnhancer = applyMiddleware(print1, print2, print3);

// Pass enhancer as the second arg, since there's no preloadedState
// const store = createStore(rootReducer, middlewareEnhancer);

export default store;

/*
const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife);

let preloadedState;
const persistedTodosString = localStorage.getItem('todos');

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
};

// const store = createStore(rootReducer, preloadedState);
const store = createStore(rootReducer, preloadedState, composedEnhancer);

export default store;
*/