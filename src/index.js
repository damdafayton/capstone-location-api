import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft, faMicrophone, faGear, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

import store from './redux/configureStore';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './bootstrap';

library.add(faAngleLeft, faMicrophone, faGear, faCircleArrowRight);

const githubBasename = process.env.REACT_APP_BASENAME || '/';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={githubBasename}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
