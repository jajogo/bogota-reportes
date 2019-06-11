import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
    state = {
        name: '',
        email: '',
        usuario: '',
        password: '',
        confpassword:''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.signUp(this.state)
    }
    render() {
        const { auth, authError } = this.props;
        if(auth.uid) return <Redirect to= '/'/>
        return (
            <div className="container" style={{padding: '20px 0'}}>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="text">Nombre Completo</label>
                        <input type="text" className="form-control" id="name" placeholder="Ingresa tu Nombre" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Dirección de correo</label>
                        <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo" onChange={this.handleChange} />
                        <small id="emailHelp" className="form-text text-muted">Usa tu correo personal!</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="usuario">Nombre de usuario</label>
                        <input type="text" className="form-control" id="usuario" placeholder="Ingresa tu usuario" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confpassword">Confirma Contraseña</label>
                        <input type="password" className="form-control" id="confpassword" placeholder="Confirma tu contraseña" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-danger">Registrarse</button>
                    <div role="alert">
                        {authError ? <p  className="alert alert-danger">{authError}</p>:null }
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(SignUp)