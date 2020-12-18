import React from "react";
import {Link, withRouter} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import NavDropdown from 'react-bootstrap/NavDropdown'
import { Container } from "react-bootstrap";

export default class NavbarElement extends React.Component{
  render(){
    return(
      <React.Fragment>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">TeamTechKenya</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 

  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href='/'>Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/blog">Blog</Nav.Link>
      <NavDropdown title="Services" id="collasible-nav-dropdown">
        <NavDropdown.Item><Link></Link></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Service2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Service3</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Service4</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">MeetUs</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Account
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

      </React.Fragment>
    )
  }
}

