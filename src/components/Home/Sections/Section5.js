import React, { Component } from 'react'

class Section5 extends Component {
    state = {
        title: '',
        selection: '',
        name_report: '',
        date: '',
        content:''
        
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
    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.setState({image: e.target.result});
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      }
    render() {
        return (
            <div className="section5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="content col-md-6 col-sm-12 text-right">
                            <p><span>Reporta</span> tus <br /> propias <br /> experiencias</p>
                        </div>
                        <div className="content col-md-6 col-sm-12">
                            <form onSubmit={this.handleSubmit}>
                                <input className="texto" type="text" id="title" placeholder="Titulo de mi reporte" onChange={this.handleChange} />
                                <select name="opciones" onChange={this.handleChange} id="selection">
                                    <option value="Daños">Daños a Estaciones</option>
                                    <option value="Objetos">Objetos perdidos</option>
                                    <option value="Reporte">Reporte de incidentes</option>
                                    <option value="Eventualidades">Eventualidades</option>
                                </select>
                                <input type="text" id="name_report" placeholder="Tu nombre" onChange={this.handleChange}/>
                                <input type="date" id="date" placeholder="" onChange={this.handleChange}/>
                                <input type="file" onChange={this.onImageChange} className="filetype" id="group_image"/>
                                <div className="content_foto">
                                    <img id="target" alt="tu foto" className="foto" src={this.state.image}/>
                                </div>
                                <textarea id="content" placeholder="Comenta tu publicación" onChange={this.handleChange}></textarea>
                                <input type="submit" value="¡Reportar!" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section5