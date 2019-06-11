import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'


const SignedInLinks = (props) =>{
    return(
        <ul className="nav navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/create">Nuevo Reporte</NavLink>
            </li>
            <li className="nav-item">
                <a href="#" onClick={props.signOut} className="nav-link" to="/">Cerrar Sesion</a>
            </li>
            <li className="nav-item">
                <NavLink className="btn btn-danger" to="/">{
                    props.profile.usuario
                }</NavLink>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);