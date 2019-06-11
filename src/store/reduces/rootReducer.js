import authReducer from './authRedducer'
import projectReducer1 from './PorjectReducer1'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import {firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    project1: projectReducer1,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;