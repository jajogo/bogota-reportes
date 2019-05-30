import React from 'react';
import { NavLink } from 'react-router-dom';


const SignedOutLinks = () =>{
    return(
        <ul className="nav navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/signup">Registrarse</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/signin">Iniciar Sesion</NavLink>
            </li>
        </ul>
    )
}

export default SignedOutLinks;