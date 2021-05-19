import {
  DELETE_EMPLOYEE,
  GET_EMPLOYEE,
    
 
  } from "../type";
import { deleteEmployee, details } from "./employeeDataUtils";
const initialState= {
    employee: '',
    employees : []
}
const contentsReducer = (state=initialState, action) => {
    switch(action.type){
      
          case GET_EMPLOYEE: {
            return {
              ...state,
              employee: details(action.payload),
              employees: action.payload
            };
          }
          case DELETE_EMPLOYEE: {
            return {
              ...state,
              employees: deleteEmployee(action.payload,state.employees) 
            };
          }
        

          
         
        
        default : 
        return state;
    }
};
export default contentsReducer