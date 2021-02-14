import {
   SET_CURRENT_USER,
   LOGOUT,
   AUTH_ERROR
  } from "../type";
  import setAuthToken from '../../utils/setAuthToken'
  import axios from 'axios'
  import jwt_decode from 'jwt-decode'
  import { isLoading, clearErrors} from './loadingActions'

  export const setCurrentUser = decoded =>dispatch=> {
   return dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
    });
  };
  




export const login =  (cred,history,reset) =>async (dispatch) => {
    console.log('in login')
    dispatch(clearErrors())
    try {
        dispatch(isLoading(true))
        const user = await axios.post("/api/auth/login",cred)
        
        const { token,type } = user.data;
        
        
        localStorage.setItem("jwtToken", token);
        //set token as auth header using axios
        setAuthToken(token);
        const decoded = jwt_decode(token);
        const data ={
            decoded,
            type
        }
        reset()
        dispatch(isLoading(false))
        dispatch({
            type: SET_CURRENT_USER,
            payload: data
        });
      
        history.push("/")
       
        
    } catch (errors) {
        console.log(errors)
       
        dispatch(isLoading(false))
        dispatch({
            type: AUTH_ERROR,
            payload: errors.response.data.error
        })
        
        
    }
}

export const logOut = () => dispatch => {
    dispatch(clearErrors())
    try {
      
        //clear local storage
        localStorage.removeItem("jwtToken");
        //clear authHeader
        setAuthToken(false);
        //reset state to its initial value (i.e isAuthenticated :false, and user: {} ), by dispatchin an empty obj as parameter to store via setcurrentUser func as dis wud return empty obj in 'isEmpty()',wic mks isAuthenticated(false) nd "user : {}"
      
        return dispatch({
            type: LOGOUT
           
        });
        
    } catch (error) {
        console.error(error.response)
    }
        
  };
export const resetToken = () => dispatch => {
    try {
      
        //clear local storage
        const token = localStorage.getItem("jwtToken");
        //clear authHeader
        setAuthToken(token);
        //reset state to its initial value (i.e isAuthenticated :false, and user: {} ), by dispatchin an empty obj as parameter to store via setcurrentUser func as dis wud return empty obj in 'isEmpty()',wic mks isAuthenticated(false) nd "user : {}"
      
        
        
    } catch (error) {
        console.error(error.response)
    }
        
  };

  export const registerUser =  (cred,history) =>async (dispatch) => {
    dispatch(clearErrors())
    
    
    try {
        dispatch(isLoading(true))
      const register  = await axios.post("/api/auth/register",cred)
      console.log(register)   
      dispatch(isLoading(false))
       
      
        history.push("/login")
       
        
    } catch (errors) {
     
       
     console.log(errors.response.data)
      
       
     dispatch(isLoading(false))
       
        
        
    }
}
