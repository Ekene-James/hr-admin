import {
  GET_EMPLOYEE,
    
 
  } from "../type";
const initialState= {
    employee: ''
}
const contentsReducer = (state=initialState, action) => {
    switch(action.type){
      
          case GET_EMPLOYEE: {
            return {
              ...state,
              employee: action.payload
            };
          }
          
         
        
        default : 
        return state;
    }
};
export default contentsReducer