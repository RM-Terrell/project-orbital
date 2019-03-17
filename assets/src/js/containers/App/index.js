import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Title from '../../components/Title';
import Home from '../../components/Home'
import Calculator from '../../components/Calculator'

class App extends Component {
  render () {
    const text = 'Project Orbital';
    return (
      <Router>
        <div>
          <h2>Welcome to Project Orbital</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/calculator'} className="nav-link">Calculator</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/calculator' component={Calculator} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;