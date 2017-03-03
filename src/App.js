import React, { Component } from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router';
import Header from './components/Header.js';

export default class App extends Component {
  render() {
    return <div>
      <Header/>
      <div className="container">
        {this.props.children}
      </div>
    </div>;
  }
}
