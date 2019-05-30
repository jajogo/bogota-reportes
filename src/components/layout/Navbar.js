import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import Collapse from './Collapse'
import Toggle from './Toggle'

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar_home justify-content-between">
            <Link className="navbar-brand col-5" to="/"><img src={logo} alt="logo" style={{width: '150px'}} /></Link>
            <Collapse/>
            <Toggle />
        </nav>
    )
}

export default Navbar;