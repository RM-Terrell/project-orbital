import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Switch, Route, Link } from 'react-router-dom';

import SemSD from '../sem_sd/SemSd';
import CiSD from '../ci_sd/CiSd';
import MultipointMeanSD from '../multipoint_m_sd/MultipointMeanSd';
import NToPercent from '../n_percent/NPercent';
import Home from '../home/home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  return (
    <div>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">Project Orbital</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Single Point Conversions" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/sem_sd">SEM SD</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="ci_sd">CI / SD</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="n_to_percent">N to Percent</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Multi Point Conversions" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="multipoint_mean_sd">Points to Mean / SD</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sem_sd" component={SemSD} />
          <Route exact path="/ci_sd" component={CiSD} />
          <Route exact path="/multipoint_mean_sd" component={MultipointMeanSD} />
          <Route exact path="/n_to_percent" component={NToPercent} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
