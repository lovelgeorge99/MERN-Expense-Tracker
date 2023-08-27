import React ,{useEffect,useState}from 'react'
import  Form  from '../components/Form'

import { useDispatch,useSelector} from 'react-redux'
import {listIncomes,addIncome,deleteIncome} from '../actions/incomeActions'
import Loader from '../components/Loader'

function Income() {

  const dispatch=useDispatch()

  const incomeList=useSelector(state => state.incomeList)
  const {error,loading,incomes}=incomeList
  


  const typeOfForm={
    'type':'Income',
    'options':["Salary", "Gift", "Interest", "Other"],
    'color':'green',
    'sign':'+'
    

}

  // console.log(incomes);
  const totalAmount = incomes.reduce((total, item) => total + item.amount, 0);

  useEffect(()=>{
    
    dispatch(listIncomes())
    
  },[dispatch])




  const handleFormSubmit = (formData) => {
   
    console.log('Form Data:', formData);
    dispatch(addIncome(formData))
    .then(() => {
      dispatch(listIncomes()); // Fetch the updated list of incomes
    })
    .catch(error => {
      console.error('Error adding income:', error);
    });
    
    
  };
  const deleteHandler=(id) =>{
    if(window.confirm('Are you sure you want to delete')){
        dispatch(deleteIncome(id))
        .then(() => {
            dispatch(listIncomes()); // Fetch the updated list of incomes
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
        <h1 className='text-4xl py-8 mb-10 bg-slate-800 text-white rounded'>Total Income : <span className='font-bold text-green-600'>+ ${totalAmount}</span> </h1>

        <Form prop={incomes} onSubmit={handleFormSubmit} onDelete={deleteHandler} typeOfForm={typeOfForm}/>
      </div>
      }
      
      
      
    </div>
  )
}

export default Income