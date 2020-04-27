/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../../components/Home';
import Stats from '../../components/Stats';
/* eslint-enable object-curly-newline */

class App extends Component {
  render() {
    const text = 'Welcome to Project Orbital';
    return (
      <Router>
        <div>
          <nav className="navbar">
            <div className="logo">{text}</div>
            <ul className="navbar-nav">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/stats'} className="nav-link"> Stats </Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route path={'/stats'} component={Stats} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
