import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <Route exact path="/" component={Register} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
