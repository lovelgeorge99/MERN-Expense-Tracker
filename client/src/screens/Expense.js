import React ,{useEffect,useState}from 'react'
import  Form  from '../components/Form'

import { useDispatch,useSelector} from 'react-redux'
import {listExpenses,addExpense,deleteExpense} from '../actions/expenseActions'

import Loader from '../components/Loader'

function Expense() {
    const dispatch=useDispatch()

  const expenseList=useSelector(state => state.expenseList)
  const {error,loading,expenses}=expenseList
  const typeOfForm={
    'type':'Expense',
    'options':["Rent", "Mobility", "Wifi", "Travel"],
    'color':'red',
    'sign':'-'
    

}

  // console.log(expenses);
  const totalAmount = expenses.reduce((total, item) => total + item.amount, 0);

  useEffect(()=>{
    
    dispatch(listExpenses())
    
  },[dispatch])




  const handleFormSubmit = (formData) => {
   
    console.log('Form Data:', formData);
    dispatch(addExpense(formData))
    .then(() => {
      dispatch(listExpenses()); // Fetch the updated list of incomes
    })
    .catch(error => {
      console.error('Error adding income:', error);
    });
    
    
  };
  const deleteHandler=(id) =>{
    if(window.confirm('Are you sure you want to delete')){
        dispatch(deleteExpense(id))
        .then(() => {
            dispatch(listExpenses()); // Fetch the updated list of incomes
          })
          .catch(error => {
            console.error('Error adding income:', error);
          });
    }
    
    // console.log('delete',id)
}
  return (
    <div className=' text-center drop-shadow-lg text-gray-800  sm:ml-64'>
    {loading ? 
      <Loader />
    :
    <div>
      <h1 className='text-4xl py-8 mb-10 bg-slate-800 text-white rounded'>Total Expense : <span className='font-bold text-red-600'> - {totalAmount}</span> </h1>

      <Form prop={expenses} onSubmit={handleFormSubmit} onDelete={deleteHandler} typeOfForm={typeOfForm}/>
    </div>
    }
    
    
    
  </div>
  )
}

export default Expense