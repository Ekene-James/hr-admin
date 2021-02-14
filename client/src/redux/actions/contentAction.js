import {
    GET_ALL_ERRORS,
    CREATE_EMPLOYEE,
    GET_EMPLOYEE
   } from "../type";
 
   import axios from 'axios'

   import {  isLoading,clearErrors} from './loadingActions'
  


 
 
   export const createEmployee =  (datas,reset,history) =>async (dispatch) => {
    dispatch(clearErrors())
    dispatch(isLoading(true))
    console.log(datas)
    
    
  
    try {
        const data =  await axios.post(`/api/employees`,datas)
        
        dispatch(isLoading(false))
        console.log(data.data)
        reset()
        alert( 'Form Submit Success!!!')
        history.push('/human-resource/employees-management')
      
    } catch (errors) {
        dispatch(isLoading(false))
        console.error(errors.response.data.error)
        alert( 'Something went wrong, this is mostly due to total neglect of some fields or Network connection')
        dispatch({
            type: GET_ALL_ERRORS,
            payload: errors.response.data
        })
        
        
    }
}

export const getEmployees =  () =>async (dispatch) => {
    dispatch(clearErrors())
    
    dispatch(isLoading(true))
    
    try {
      const employees  = await axios.get("/api/employees")
      
      dispatch(isLoading(false))
       
      dispatch({
        type: GET_EMPLOYEE,
        payload: employees.data
    });
      
       
        
    } catch (errors) {
     
        alert( 'Something went wrong, try refreshing the page or check your network')
     console.error(errors.response.data)
      
       
     dispatch(isLoading(false))
       
        
        
    }
}