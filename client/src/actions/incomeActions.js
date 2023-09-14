import axios from 'axios';

import {
    INCOME_LIST_REQUEST,
    INCOME_LIST_SUCCESS,
    INCOME_LIST_FAIL,

    ADD_INCOME_LIST_SUCCESS,
    ADD_INCOME_LIST_REQUEST,
    ADD_INCOME_LIST_FAIL,

    INCOME_DELETE_REQUEST,
    INCOME_DELETE_SUCCESS,
    INCOME_DELETE_FAIL,

} from '../constansts/incomeConstants'


export const listIncomes= () => async (dispatch) =>{
    try{
        
        dispatch({type:INCOME_LIST_REQUEST})

        const{data}= await axios.get('http://localhost:5000/api/get-incomes'); //testing locally
        

      
        dispatch({
            type:INCOME_LIST_SUCCESS,
            payload:data
        })

    }catch(error){
        dispatch({
            type:INCOME_LIST_FAIL,
            payload:error.response && error.response.data.detail 
            ? error.response.data.detail //message
            : error.message
        })
    }
}

export const addIncome =(formData)=> async(dispatch)=>{
    try{
        
        dispatch({type:ADD_INCOME_LIST_REQUEST})

        const config={
            headers:{
                'Content-type':'application/json'
            }
        }

        const{data}= await axios.post(
            // 'http://localhost:8000/api/users/register/',

             'http://localhost:5000/api/add-income/',
            {'title':formData.title,
             'amount':formData.amount,
             'type':formData.type,
             'category':formData.category,
             'description':formData.description,
             'date':formData.date
            },
            config
            
            );

        dispatch({
            type:ADD_INCOME_LIST_SUCCESS,
            payload:data
        })

        

        

    }catch(error){
        dispatch({
            type:ADD_INCOME_LIST_FAIL,
            payload:error.response && error.response.data.detail 
            ? error.response.data.detail //message
            : error.message
        })
    }

}


export const deleteIncome =(id)=> async(dispatch)=>{
    try{
        
        dispatch({type:INCOME_DELETE_REQUEST})

        

        const config={
            headers:{
                'Content-type':'application/json',
                
            }
        }
       
        const{data}= await axios.delete(
            `http://localhost:5000/api/delete-income/${id}`,
            config
            
            );

        dispatch({
            type:INCOME_DELETE_SUCCESS,
            payload:data
        })
       
    }catch(error){
        dispatch({
            type:INCOME_DELETE_FAIL,
            payload:error.response && error.response.data.detail 
            ? error.response.data.detail //message
            : error.message
        })
    }

}