import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

ReactDOM.render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('root')
);
