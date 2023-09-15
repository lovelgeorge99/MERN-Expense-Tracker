import axios from 'axios';
import{
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,

    USER_LOGOUT,

} from '../constansts/userConstants'


export const login =(email,password)=> async(dispatch)=>{
    try{
        
        dispatch({type:USER_LOGIN_REQUEST})

        const config={
            headers:{
                'Content-type':'application/json'
            }
        }

        const{data}= await axios.post(
            'http://localhost:5000/api/login',

              
            {'email':email,'password':password},
            config
            
            );

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo',JSON.stringify(data))

    }catch(error){
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error.response && error.response.data.detail 
            ? error.response.data.detail //message
            : error.message
        })
    }

}

export const logout= ()=>(dispatch)=>{
    localStorage.removeItem('userInfo')
    dispatch({type:USER_LOGOUT})


}

export const register =(name,email,password)=> async(dispatch)=>{
    try{
        
        dispatch({type:REGISTER_USER_REQUEST})

        const config={
            headers:{
                'Content-type':'application/json'
            }
        }

        const{data}= await axios.post(
            // 'http://localhost:8000/api/users/register/',

             'http://localhost:5000/api/register',
            {'name':name,'email':email,'password':password},
            config
            
            );

        dispatch({
            type:REGISTER_USER_SUCCESS,
            payload:data
        })
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo',JSON.stringify(data))

    }catch(error){
        dispatch({
            type:REGISTER_USER_FAIL,
            payload:error.response && error.response.data.detail 
            ? error.response.data.detail //message
            : error.message
        })
    }

}