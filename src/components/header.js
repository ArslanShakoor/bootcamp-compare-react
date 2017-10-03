import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';

// <Nav>
//   <NavItem eventKey={1} href="#">Link</NavItem>
//   <NavItem eventKey={2} href="#">Link</NavItem>
//   <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//     <MenuItem eventKey={3.1}>Action</MenuItem>
//     <MenuItem eventKey={3.2}>Another action</MenuItem>
//     <MenuItem eventKey={3.3}>Something else here</MenuItem>
//     <MenuItem divider />
//     <MenuItem eventKey={3.3}>Separated link</MenuItem>
//   </NavDropdown>
// </Nav>
//<div className="nav-email">{localStorage.email.toUpperCase()}</div>
import { Navbar, Nav, NavItem, NavDropdown, Button, Jumbotron, MenuItem} from 'react-bootstrap';

export default class Header extends Component {

getTitle(){
  return(

    <span className="nav-email">{localStorage.email}</span>
  );
}

loginConfirm(){
  if(localStorage.email != "null"){
    return(
      <NavDropdown title={this.getTitle()} id="basic-nav-dropdown">
        <LinkContainer to="/ratings/user">
        <MenuItem >MY REVIEWS</MenuItem>
        </LinkContainer>
        <MenuItem divider />
        <LinkContainer to="/logout">
          <MenuItem >LOGOUT</MenuItem>
        </LinkContainer>
      </NavDropdown>
    );
  }
  else{
    return(
      <LinkContainer to="/login">
      <NavItem eventKey={2}>LOGIN</NavItem>
      </LinkContainer>
    );
  }
}

render() {

 console.log(this.props.session);
  const appNavbar = (
  <Navbar inverse fluid collapseOnSelect>
    <Navbar.Header>
      <LinkContainer to="/">
        <Navbar.Brand>
          CODE SCHOOL
        </Navbar.Brand>
      </LinkContainer>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>


      <div class="row">
        <Nav pullRight>

        <LinkContainer to="/camps/index">
          <NavItem eventKey={1} >BOOTCAMPS</NavItem>
        </LinkContainer>
          <LinkContainer to="/ratings/new">
            <NavItem eventKey={1} >SUBMIT A REVIEW</NavItem>
          </LinkContainer>
          {this.loginConfirm()}
          <MenuItem divider />
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
