import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render() {
        const { authError, auth } = this.props;
        if(auth.uid) return <Redirect to= '/'/>

        return (
            <div className="container" style={{padding: '20px 0'}}>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Correo Electronico</label>
                        <input type="email" className="form-control" id="email" placeholder="Ingresa tu Correo" onChange={this.handleChange} />
                        <small id="emailtHelp" className="form-text text-muted">No comparta esta información con gente extraña!</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-danger">Ingresar</button>
                    <div role="alert">
                        {authError ? <p  className="alert alert-danger">{authError}</p>:null }
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signIn: (creds) => dispatch (signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
