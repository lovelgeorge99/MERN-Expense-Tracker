import {React,useEffect} from 'react'
import Graph from '../components/Graph';
import History from '../components/History';

import { useDispatch,useSelector} from 'react-redux'
import { listIncomes } from '../actions/incomeActions'
import { listExpenses } from '../actions/expenseActions'

import LineGraph from '../components/LineGraph';
import Loader from '../components/Loader';

// import ChartGraph from '../components/ChartGraph';


function Dashboard() {
 
  const dispatch=useDispatch()
  useEffect(()=>{

    
    dispatch(listIncomes())
    dispatch(listExpenses())
    
  },[dispatch])
  
  const incomeList=useSelector(state => state.incomeList)
  const {incomeerror,incomeLoading,incomes}=incomeList

  const expenseList=useSelector(state => state.expenseList)
  const {error,loading,expenses}=expenseList
  

  // Assuming incomes and expenses are defined as arrays somewhere in your code

// Check if incomes and expenses are defined before using reduce
  const totalIncome = incomes ? incomes.reduce((total, item) => total + item.amount, 0) : 0;
  const totalExpense = expenses ? expenses.reduce((total, item) => total + item.amount, 0) : 0;
  console.log(totalIncome)

  return (
    <div>
      {loading  ? <Loader />:
        error ? <h1>{error}</h1>:
        <div className=' text-center drop-shadow-lg text-gray-800  sm:ml-64'>
      <div className='flex  flex-wrap justify-center text-2xl py-8 mb-10 bg-slate-800 text-white'>
      <h1 className=' bg-white text-black p-3 border rounded-xl m-5 font-extrabold'>Accounst Balance :  <span className='text-green-500'>$ {totalIncome-totalExpense}</span></h1>
        <h1 className='bg-gray-100 text-black p-3 border rounded-xl m-5 font-extrabold'>Total Income : <span className='text-blue-500'>$ {totalIncome}</span></h1>
        <h1 className='bg-gray-100 text-black p-3 border rounded-xl m-5 font-extrabold'>Total Expense : <span className='text-red-500'>$ {totalExpense}</span></h1>
      </div>
     


      <div className='grid  md:grid-cols-3 gap-4'>
       <Graph income={totalIncome} expense={totalExpense} />
     
     <div className='grid  md:grid-cols-1 gap-4'>
       <LineGraph transaction={incomes} type={'Income'}/>
       <LineGraph transaction={expenses} type={'Expense'} />
       </div>

       <History incomes={incomes} expenses={expenses} />
      
       
      
      </div>
     

        </div>
      }
    
   
    
    </div>
  )
}

export default Dashboard