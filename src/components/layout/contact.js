import React from 'react'
import { Link } from 'react-router-dom'

function contact() {
    return (
        <div>
            <div className="section_contact text-center">
                <h3>Contact</h3>
                <div className="row">
                    <div className="izq col-md-6 col-sm-12 text-center">
                        <p>Llena el siguiente formulario para ponernos en contacto contigo cuanto antes, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem aliquam necessitatibus aliquid, assumenda qui enim. Lorem ipsum aerat, debitis alias, illo laborum error tempora ut consequuntur vitae modi id ab hic! Vel perferendis ad delectus maxime nobis assumenda atque dolor laborum incidunt quibusdam, aliquid qui sed odit doloremque impedit. Molestias facere sunt at itaque voluptas, assumenda cupiditate nesciunt sint quasi ex porro saepe enim corrupti dolorum similique ipsum. Sint asperiores similique, illo non aliquid at aspernatur excepturi ea soluta consequuntur dicta ad impedit odio tenetur ullam quidem numquam atque voluptas exercitationem porro ducimus! Minima, rem inventore</p>
                        <div className="mas_t">
                            <p>O unete en nuestras redes:</p>
                            <ul>
                                <li><Link to="/"><i className="fab fa-facebook-f"></i></Link>
                                </li>
                                <li><Link to="/"><i className="fab fa-twitter"></i></Link>
                                </li>
                                <li><Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                                </li>
                                <li><Link to="/"><i className="fab fa-instagram"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="der col-md-6 col-sm-12">
                        <form action="">
                            <input type="text" placeholder="Nombre" />
                            <input type="email" placeholder="Correo" />
                            <textarea name="" id="" cols="30" rows="10" placeholder="Escriba aqui su mensaje"></textarea>
                            <input type="submit" value="Enviar" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact
