import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Project Orbital</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Single Point Conversions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">SE to SD</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">CI to SD</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">N to Percent</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Multi Point Conversions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Points to Mean / SD</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
