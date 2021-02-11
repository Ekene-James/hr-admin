import {
    GET_PLAYLIST,
    AUTH_ERROR,
    GET_COURSE,
    PLAYLIST_VIDEOS,
    GET_ALL_ERRORS,
    GET_VIDEO
   } from "../type";
 
   import axios from 'axios'

   import { isBtnLoading, isLoading, stopBtnLoading, stopLoading,clearErrors, success} from './loadingActions'
   export const getVideo = (id) => async (dispatch) => {
       
       dispatch(clearErrors())
    try {
        
       dispatch(isLoading())
        const data =  await axios.get(`/api/instructor/lecture/${id}`)
     
     
        dispatch(stopLoading())
      dispatch({
          type: GET_VIDEO,
          payload: data.data
      });    
    } catch (errors) {
    console.log(errors)
       
        dispatch(stopLoading())
        dispatch({
            type: GET_ALL_ERRORS,
            payload: errors
        })
        
        
    }
   
   }
   export const getNext = (id,history) => async (dispatch) => {
       
       dispatch(clearErrors())
    try {
       dispatch(isLoading())
        const data =  await axios.get(`/api/instructor/lecture/${id}`)
     
     
        dispatch(stopLoading())
      dispatch({
          type: GET_VIDEO,
          payload: data.data
      });
      history.push(`/single-video/${id}`)    
    } catch (errors) {
    console.log(errors)
       
        dispatch(stopLoading())
        dispatch({
            type: GET_ALL_ERRORS,
            payload: errors.response
        })
        
        
    }
   
   }
   export const postVideos =  (vid) =>async (dispatch) => {
    dispatch(clearErrors())
    dispatch(success(false))
  
    try {
        dispatch(isBtnLoading())
        const data =  await axios.post(`/api/instructor/lecture`,vid)
     
     
        dispatch(stopBtnLoading())
        dispatch(success(true))
      dispatch({
          type: GET_PLAYLIST,
          payload: data.data
      });
        
        
        
       
        
    } catch (errors) {
    console.log(errors)
       
        dispatch(stopBtnLoading())
        dispatch({
            type: GET_ALL_ERRORS,
            payload: errors.response
        })
        
        
    }
}
   export const getPlaylists =  (id) =>async (dispatch) => {
    
    dispatch(clearErrors())
    dispatch(success(false))
    try {
        dispatch(isLoading())
        const data =  await axios.get(`/api/instructor/playlists/${id}`)
     
     
      dispatch(stopLoading())
      dispatch({
          type: GET_PLAYLIST,
          payload: data.data
      });
        
        
        
       
        
    } catch (errors) {
        
       
        dispatch(stopLoading())
        dispatch({
            type: GET_ALL_ERRORS,
            payload: errors.response
        })
        
        
    }
}
   export const createPlaylist =  (course) =>async (dispatch) => {
    dispatch(clearErrors())
    dispatch(success(false))
  
    try {
        dispatch(isLoading())
        const data =  await axios.post("/api/instructor/playlist",course)
     
     
      dispatch(stopLoading())
      dispatch({
          type: GET_PLAYLIST,
          payload: data.data
      });
        
        
        
       
        
    } catch (errors) {
        dispatch(stopLoading())
        dispatch({
            type: GET_ALL_ERRORS,
            payload: errors.response
        })
        
        
    }
}

export const createCourse =  (data,history) =>async (dispatch) => {
    dispatch(clearErrors())
    try {
        
          dispatch(isBtnLoading())
          const course= await axios.post("/api/instructor/createCourse",data)
       
          dispatch(stopBtnLoading())
        dispatch({
            type: GET_COURSE,
            payload: course.data
        });
        history.push(`/video-upload/${course.data._id}`)
      
        
        
       
        
    } catch (errors) {
        dispatch(stopBtnLoading())
        dispatch({
            type: GET_ALL_ERRORS,
            payload: errors.response
        })
        
        
    }
}