// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './scenes';
//
// ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './scenes';
import Store from './store';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Store)}>
    <App />
  </Provider>
  , document.getElementById('root'));
