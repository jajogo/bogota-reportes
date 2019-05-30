import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Toggle = () =>{
    return(
        <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Quienes Somos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/explorar">Explorar</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Contact</Link>
                </li>
                
            </ul>
            <SignedInLinks />
            <SignedOutLinks />
        </div>
    )
}

export default Toggle