import ReactDOM from 'react-dom';
import App from './App.js';
import { Provider } from 'react-redux';
import React from 'react';
import { applyMiddleware, createStore } from 'redux';

const defaultState = { 
  appName: 'conduit',
  articles: null
 };
 
const reducer = function(state = defaultState, action) {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, checked: !state.checked };
  }
  return state;
}

const store = createStore(reducer);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
