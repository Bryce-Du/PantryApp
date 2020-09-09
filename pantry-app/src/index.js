import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import './index.css';
import App from './App';
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/index'
import { BrowserRouter as Router } from 'react-router-dom'

export const BASE_URL = process.env.NODE_ENV === 'production' ? "https://agile-hamlet-86698.herokuapp.com/" : "http://localhost:3001"
console.log(process.env.NODE_ENV)
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
