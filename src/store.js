// import { legacy_createStore as createStore, compose } from 'redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import rootReducer from './reducer';
// import {
//   sayHiOnDispatch,
//   includeMeaningOfLife
// } from './exampleAddons/enhancers'

import { print1, print2, print3 } from './exampleAddons/middleware';

const middlewareEnhancer = applyMiddleware(print1, print2, print3);

// Pass enhancer as the second arg, since there's no preloadedState
const store = createStore(rootReducer, middlewareEnhancer);

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