export const createReport = (project1) => {
    return (dispatch, getState,{getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('reportes').add({
            ...project1,
            createdAt: new Date()
        }).then(()=>{
            dispatch({ type: 'CREATE_REPORT', project1 });
        }).catch((err)=>{
            dispatch({type: 'CREATE_REPORT_ERROR', err});
        })
    }
};