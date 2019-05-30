import React, { Component } from 'react'

class Section4 extends Component {
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
        console.log(this.state)
    }
    render() {
        return (
            <div className="section4 text-center">
                <h3 className="title">Aun no tienes cuenta?</h3>
                <div className="row justify-content-between">
                    <div className="content col-md-6 col-sm-12">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" id="name" placeholder="Tu nombre" onChange={this.handleChange} />
                            <input type="email" id="email" placeholder="Correo Electronico" onChange={this.handleChange} />
                            <input type="text" id="usuario" placeholder="Nombre de tu cuenta" onChange={this.handleChange} />
                            <input type="password" id="password" placeholder="Contraseña" onChange={this.handleChange} />
                            <input type="password" id="confpassword" placeholder="Confirma tu contraseña" onChange={this.handleChange} />
                            <input type="submit" value="¡Yo Quiero reportar!" />
                        </form>
                    </div>
                    <div className="content text-left col-md-6 col-sm-12">
                        <h3>¡Registrate ya!</h3>
                        <p>¡Forma parte de nuestra <br /> comunidad de reporteros <br /> con un click!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section4
