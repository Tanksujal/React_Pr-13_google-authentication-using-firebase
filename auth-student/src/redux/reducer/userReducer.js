let inlitiazeState = {
    stdlist : [],
    error : null
}
const StudentReducer = (state=inlitiazeState,action) => {
    switch(action.type){
        case 'ADDSTD' : 
        
        return{
            ...state,
            stdlist : [...state.stdlist,action.payload],
            error : null,
        }
        case  'ADDSTD_ERROR' : 
        return {
            ...state,
            error : action.payload,
        }
        default : 
        return state;
    }
}
export default StudentReducer