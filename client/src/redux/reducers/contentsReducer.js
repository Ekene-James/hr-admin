import {
    GET_CONTENTS,
    
 
  } from "../type";
const initialState= {
    contents: ''
}
const contentsReducer = (state=initialState, action) => {
    switch(action.type){
      
          case GET_CONTENTS: {
            return {
              ...state,
              contents: action.payload
            };
          }
          
         
        
        default : 
        return state;
    }
};
export default contentsReducer