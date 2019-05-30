import React from 'react'
import { NavLink } from 'react-router-dom'


const SignedInLinks = () =>{
    return(
        <ul className="nav navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/create">Nuevo Reporte</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Cerrar Sesion</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/">NN</NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinks;