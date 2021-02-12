import {
    GET_ALL_ERRORS,
    CREATE_EMPLOYEE,
    GET_EMPLOYEE
   } from "../type";
 
   import axios from 'axios'

   import {  isLoading,clearErrors} from './loadingActions'
  

 
 
   export const createEmployee =  (employee) =>async (dispatch) => {
    dispatch(clearErrors())
    dispatch(isLoading(true))
  
    try {
        const data =  await axios.post(`/api/employees`,employee)
        
        dispatch(isLoading(false))
        console.log(data.data)
     
      
     
        
        
        
       
        
    } catch (errors) {
        dispatch(isLoading(false))
        console.log(errors.response.data)
        dispatch({
            type: GET_ALL_ERRORS,
            payload: errors.response.data
        })
        
        
    }
}

export const getEmployees =  () =>async (dispatch) => {
    dispatch(clearErrors())
    
    
    try {
        dispatch(isLoading(true))
      const employees  = await axios.get("/api/employees")
      console.log(employees)   
      dispatch(isLoading(false))
       
      dispatch({
        type: GET_EMPLOYEE,
        payload: employees.data
    });
      
       
        
    } catch (errors) {
     
       
     console.log(errors.response.data)
      
       
     dispatch(isLoading(false))
       
        
        
    }
}