import React, { Component } from 'react'
import ReportList from './ReportList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class ShowReports extends Component{
    render(){
        //console.log(this.props)
        const { projects1, auth } = this.props;
        if(!auth.uid) return <Redirect to= '/signin'/>
        return(
            <div>
                <ReportList  projects1 ={projects1}/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state)
    return{
        projects1: state.firestore.ordered.reportes,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'reportes'}
    ])
)(ShowReports);