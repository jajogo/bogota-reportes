import React, { Component } from 'react'

class Section3 extends Component {
        state = {
            usuario: '',
            password: ''
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
                <div className="section3">
                    <div className="container-fluid">
                        <div className="row justify-content-between ">
                            <div className="content text-right col-md-6 col-sm-12">
                                <h3>Inicia sesión</h3>
                                <p>Para que compartas</p>
                                <p>Tus experiencias</p>
                            </div>
                            <div className="content col-md-6 col-sm-12">
                                <form onSubmit={this.handleSubmit}>
                                    <input type="text" id="usuario" placeholder="Usuario" onChange={this.handleChange} />
                                    <input type="password" id="password" placeholder="Contraseña" onChange={this.handleChange} />
                                    <input type="submit" value="Ingresar" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Section3
