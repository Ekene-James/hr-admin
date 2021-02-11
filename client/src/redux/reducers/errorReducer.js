import {AUTH_ERROR,GET_ALL_ERRORS,CLEAR_ERRORS} from '../type'
const initialState= {
    
    authError:'',
    errors : ''
}
const errorReducer = (state=initialState, action) => {
    switch(action.type){
      
     
          case AUTH_ERROR: {
            return {
              ...state,
              authError : action.payload
              
            };
          }
          case GET_ALL_ERRORS: {
            return {
              ...state,
              errors : action.payload
             
            };
          }
          case CLEAR_ERRORS: {
            return {
              authError:'',
              errors:''
             
            };
          }
        default : 
        return state;
    }
};
export default errorReducer