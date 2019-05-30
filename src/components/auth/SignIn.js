import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        usuario: '',
        password: ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div className="container" style={{padding: '20px 0'}}>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="usuario">Nombre de usuario</label>
                        <input type="text" className="form-control" id="usuario" placeholder="Ingresa tu usuario" onChange={this.handleChange} />
                        <small id="usuariotHelp" className="form-text text-muted">No comparta esta información con gente extraña!</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-danger">Ingresar</button>
                </form>
            </div>
        )
    }
}

export default SignIn
