/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from '../../components/About';
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
              <li><Link to={'/stats'} className="nav-link"> Stats </Link></li>
              <li><Link to={'/'} className="nav-link"> About </Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path={'/stats'} component={Stats} />
            <Route exact path={'/'} component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
