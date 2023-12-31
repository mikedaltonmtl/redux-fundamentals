import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import './api/server';

import store from './store';


console.log('Dispatching action');
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' });
console.log('Dispatch complete');

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// log: 'Hi!'

console.log('State after dispatch: ', store.getState())
// log: {todos: [...], filters: {status, colors}, meaningOfLife: 42}

/*
// Log the initial state
console.log('Initial state: ', store.getState());
// {todos: [....], filters: {status, colors}}

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
);

// Now, dispatch some actions
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' });
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' });
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' });

store.dispatch({ type: 'todos/todoToggled', payload: 0 });
store.dispatch({ type: 'todos/todoToggled', payload: 1 });

store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' });

store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: { color: 'red', changeType: 'added' }
});

// Stop listening to state updates
unsubscribe();

// Dispatch one more action to see what happens
store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' });
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
