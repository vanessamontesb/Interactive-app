import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import './components.css/Navbar.css'

class Landing extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
  
    })
  }

  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    
    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    )

    return (
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4"> {userLink}</div>
        </div>
       <nav className="navbar navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="userIcon"><i className="fas fa-user-circle icon"></i>
            {this.state.first_name} {this.state.last_name}</div>
        </nav>
      </div>
       
    )
  }
}

export default withRouter(Landing)
