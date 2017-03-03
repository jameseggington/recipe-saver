import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';

import App from './App';
import './index.css';
import routes from './routes';
import app from './reducer';

var store = createStore(app);

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById('root')
);
