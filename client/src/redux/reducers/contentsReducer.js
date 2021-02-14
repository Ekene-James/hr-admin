import {
  GET_EMPLOYEE,
    
 
  } from "../type";
import { details } from "./employeeDataUtils";
const initialState= {
    employee: ''
}
const contentsReducer = (state=initialState, action) => {
    switch(action.type){
      
          case GET_EMPLOYEE: {
            return {
              ...state,
              employee: details(action.payload)
            };
          }
          
         
        
        default : 
        return state;
    }
};
export default contentsReducer