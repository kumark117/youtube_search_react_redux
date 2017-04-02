import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import App from './components/app';
import rootReducer from './reducers';


const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  )
);

ReactDOM.render(
  <div>

  <Provider store={store}>
  <App />
  </Provider>

  </div>
  , document.querySelector('.container'));
