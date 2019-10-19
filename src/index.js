import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import clockReducer from './reducers/clockReducer';

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//create your Redux store and pass it the reducer
const store = createStore(
  clockReducer,
  enhancers
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
