import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const ReportDetail = (props) => {
    const { reporte, auth } = props;
    if(!auth.uid) return <Redirect to= '/signin'/>
    if(reporte){
        return (
            <div className="card mb-3">
            <img className="card-img-top" src={reporte.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{reporte.title}</h5>
                    <p className="card-text">{reporte.content}</p>
                    <p className="card-text"><small className="text-muted">eeh</small></p>
                </div>
            </div>
        )
    }else{
        return (
            <div>
                <p>Loading project....</p>
            </div>
            )
    }
}

const mapStateToProps = (state, ownProps)=>{
    const id = ownProps.match.params.id;
    const reportes = state.firestore.data.reportes;
    const reporte = reportes ? reportes[id]:null
    return{
        reporte:reporte,
        auth: state.firebase.auth
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'reportes'}
    ])
)(ReportDetail)