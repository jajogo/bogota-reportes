const initState = {
    projects1:[
        {
            id: '',
            selection:'',
            image: '',
            title: '',
            author: '',
            content: ''
        }
    ]
}

const projectReducer1 = (state = initState, action) =>{
    switch (action.type){
        case 'CREATE_REPORT':
        console.log('created report', action.project1);
        return state;
        case 'CREATE_REPORT_ERROR':
        console.log('create report error', action.err);
        return state;
        default:
        return state;
    }
}

export default projectReducer1;