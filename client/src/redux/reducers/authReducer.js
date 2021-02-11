import {
  SET_CURRENT_USER,
  LOGOUT
 
  } from "../type";
const initialState= {
    isAuthenticated : false,
    user: {}
    
}
const authReducer = (state=initialState, action) => {
    switch(action.type){
    
        case SET_CURRENT_USER: {
            return {
              ...state,
              isAuthenticated: true,
              user: action.payload
             
            };
          }
        
     
        case LOGOUT: {
            return {
              ...state,
              isAuthenticated: false,
              user:null
            };
          }
        
        default : 
        return state;
    }
};
export default authReducer