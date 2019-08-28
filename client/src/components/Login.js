import React, { Component } from 'react'
import { login } from './UserFunctions'
import { Link } from 'react-router-dom'
import login_photo from './login_photo.png'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if (res) {
        this.props.history.push(`/profile`)
      }
    })
  }

  render() {
    return (
      <div className="container login">
        <div className="row">
        <div className = " col-md-3 mt-2 imgContainer"><img src={login_photo} class="imgLogin" alt="Responsive image"></img></div>
          <div className="col-md-3 mt-2 mx-auto">
          <div className="center"></div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Ingresa tu correo electrónico"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Ingresa tu contraseña"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <input type="checkbox"/>
              <label>Recordar cuenta</label>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                INICIAR SESIÓN 
              </button>
            </form>
            <p> ¿Has olvidado tu contraseña?</p>
           
          <Link to="/register" className="nav-link">
            Registrate ahora GRATIS
          </Link>
        
          </div>
        </div>
      </div>
    )
  }
}

export default Login
