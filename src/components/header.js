import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';


import { Navbar, Nav, NavItem, NavDropdown, Button, Jumbotron, MenuItem} from 'react-bootstrap';

class Header extends Component {

render() {

  const appNavbar = (
  <Navbar inverse fluid collapseOnSelect>
    <Navbar.Header>
        <Navbar.Brand>
          <a href="#">CODE SCHOOL</a>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>

        <div class="row">
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Link Right</NavItem>
          <LinkContainer to="/login">
          <NavItem eventKey={2} >Login</NavItem>
          </LinkContainer>
           

        </Nav>
        </div>
      
    </Navbar.Collapse>
</Navbar>
);

    return (
    <div>
      {appNavbar}
    </div>
    );
  }
}

export default Header;
 