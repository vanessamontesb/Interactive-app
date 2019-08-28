import React, { Component } from 'react'
import { register } from './UserFunctions'
import { Link } from 'react-router-dom'
import login_photo from './login_photo.png'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      celular:'',
      user_name:'',
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

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      celular:this.state.celular,
      user_name:this.state.user_name,
      password: this.state.password
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
  
      <div className="container">
        <div className="row">
           <div className = " col-md-3 mt-2 imgContainer"><img src={login_photo} class="img" alt="Responsive image"></img></div>
             <div className="col-md-3 mt-2 mx-auto">
               <form noValidate onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">  Nombre</label>
                    <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    placeholder="Ingresa tu nombre"
                    value={this.state.first_name}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="name">Apellido</label>
                    <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    placeholder="Ingresa tu apellido"
                    value={this.state.last_name}
                    onChange={this.onChange}
                  />
                  </div>
                  <div className="form-group">
                    <label htmlFor="celular">Celular</label>
                  <input
                    type="text"
                    className="form-control"
                    name="celular"
                    placeholder="Ingresa tu celular"
                    value={this.state.celular}
                    onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="user_name">Nombre de usuario</label>
                      <input
                        type="text"
                        className="form-control"
                        name="user_name"
                        placeholder="Ingresa tu nombre de usuario"
                        value={this.state.user_name}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Correo electrónico</label>
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
                        placeholder="Contraseña"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
                    </div>
                    <label>Acepto las condiciones del servicio</label>
                    <input
                      type="checkbox"
                    />
                    <button
                      type="submit"
                      className="btn btn-lg btn-primary btn-block"
                    >
                      REGISTRATE GRATIS
                    </button>
                  </form>
            <Link to="/login" className="nav-link">
            ¿Ya tienes cuenta?-Iniciar sesion 
          </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
