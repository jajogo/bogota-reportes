import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createReport } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateReport extends Component {
    state = {
        titleReport: '',
        selection: '',
        author: '',
        image: '',
        content: ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.createReport(this.state)
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
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to= '/signin'/>
        return (
            <div className="container" style={{padding: '20px 0'}}>
                <form onSubmit={this.handleSubmit} className="formReport">
                    <div className="form-group">
                        <label htmlFor="titlereport">Titulo del reporte</label>
                        <input type="text" className="form-control" id="titleReport" placeholder="Titulo" onChange={this.handleChange} />
                        <small id="usuariotHelp" className="form-text text-muted">Usa un titulo llamativo!</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="selection">Tipo de reporte</label>
                        <select onChange={this.handleChange} id="selection" className="form-control">
                            <option value="Daños a Estaciones">Daños a Estaciones</option>
                            <option value="Objetos perdidos">Objetos perdidos</option>
                            <option value="Reporte de incidentes">Reporte de incidentes</option>
                            <option value="Eventualidades Eventualidades">Eventualidades</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Tu nombre</label>
                        <input type="text" id="author" className="form-control" placeholder="Tu nombre" onChange={this.handleChange} />
                    </div>
                    <div className="form-group" style={{overflow: 'hidden'}}>
                        <label htmlFor="image">Tu foto</label> <br/>
                        <input type="file" className="form-control-file filetype" placeholder="foto" onChange={this.onImageChange} id="image" />
                        <div className="content_foto">
                            <img id="target" className="foto" src={this.state.image} alt="tu foto" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Tu Reporte</label>
                        <textarea id="content" className="form-control" placeholder="Comenta tu publicación" onChange={this.handleChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-danger">Ingresar</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createReport: (project1) => dispatch(createReport(project1))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateReport)
