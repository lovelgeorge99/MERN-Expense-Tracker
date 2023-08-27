import axios from 'axios';

import {
    EXPENSE_LIST_REQUEST,
    EXPENSE_LIST_SUCCESS,
    EXPENSE_LIST_FAIL,

    ADD_EXPENSE_LIST_SUCCESS,
    ADD_EXPENSE_LIST_REQUEST,
    ADD_EXPENSE_LIST_FAIL,

    EXPENSE_DELETE_REQUEST,
    EXPENSE_DELETE_SUCCESS,
    EXPENSE_DELETE_FAIL,

} from '../constansts/expenseConstansts'


export const listExpenses= () => async (dispatch) =>{
    try{
        
        dispatch({type:EXPENSE_LIST_REQUEST})

       const{data}= await axios.get('http://localhost:5000/api/get-expenses'); //testing locally

      
        dispatch({
            type:EXPENSE_LIST_SUCCESS,
            payload:data
        })

    }catch(error){
        dispatch({
            type:EXPENSE_LIST_FAIL,
            payload:error.response && error.response.data.detail 
            ? error.response.data.detail //message
            : error.message
        })
    }
}

export const addExpense =(formData)=> async(dispatch)=>{
    try{
        
        dispatch({type:ADD_EXPENSE_LIST_REQUEST})

        const config={
            headers:{
                'Content-type':'application/json'
            }
        }

        const{data}= await axios.post(
            // 'http://localhost:8000/api/users/register/',

             'http://localhost:5000/api/add-expense/',
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
            type:ADD_EXPENSE_LIST_SUCCESS,
            payload:data
        })

        

        

    }catch(error){
        dispatch({
            type:ADD_EXPENSE_LIST_FAIL,
            payload:error.response && error.response.data.detail 
            ? error.response.data.detail //message
            : error.message
        })
    }

}


export const deleteExpense =(id)=> async(dispatch)=>{
    try{
        
        dispatch({type:EXPENSE_DELETE_REQUEST})

        

        const config={
            headers:{
                'Content-type':'application/json',
                
            }
        }
       
        const{data}= await axios.delete(
            `http://localhost:5000/api/delete-expense/${id}`,
            config
            
            );

        dispatch({
            type:EXPENSE_DELETE_SUCCESS,
            payload:data
        })
       
    }catch(error){
        dispatch({
            type:EXPENSE_DELETE_FAIL,
            payload:error.response && error.response.data.detail 
            ? error.response.data.detail //message
            : error.message
        })
    }

}