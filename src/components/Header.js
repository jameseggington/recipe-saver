import React, {Component} from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return <div>
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Recipes</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    </div>;
  }
}
