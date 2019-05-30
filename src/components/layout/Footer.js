import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer id="footer">
        <div className="fondo">
            <div className="contenido">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <ul>
                                <li><Link to="/">soporte</Link></li>
                                <li><Link to="/"> transmilenio</Link></li>
                                <li><Link to="/"> Contactenos</Link></li>
                                <li><Link to="/"> recursos</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <p>Dirección calle 26# 30-46 oficina No. 35</p>
                            <p>Telefono: 216 878 5634 - 345 3456</p>
                            <p>Correo: reportatumismo@transmilenio.com.co</p>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <p>Siguenos en nuestras redes</p>
                            <div className="redes">
                                <Link to="/"> <i className="fab fa-facebook-square"></i></Link>
                                <Link to="/"> <i className="fab fa-twitter-square"></i></Link>
                                <Link to="/"> <i className="fab fa-linkedin"></i></Link>
                                <Link to="/"> <i className="fab fa-github-square"></i></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
                <div className="contenido2 text-center">
                    <p>Copyright 2019 Transmilenio - Todos los derechos reservados. Términos y Condiciones</p>
                </div>
    </footer>
    )
}

export default Footer
