import React from 'react'
import Register from '../components/Register'
import Graph from '../components/Graph'
import LineGraph from '../components/LineGraph'


function HomeScreen() {
  const data = {
    labels: ['Income $'+800,'Expense $'+500],
    datasets: [{
      label: 'Expense Chart',
      data: [500, 500],
      backgroundColor: [
        '#3F9B0B',
        '#C11B17',
       
      ],
      hoverOffset: 4
    }]
  };
  return (
    <div className='sm:ml-64'>
        <div>
        <h1 className='text-4xl py-10 mb-10 bg-slate-800 text-white'>MoneyMate.com</h1>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-32  mx-10 md:auto-cols-min items-center mt-32' >
           <div className=' text-left'>
            <h1 className=' text-7xl font-extrabold text-purple-700 '>
              Track Everything Here 
            </h1>
           
           <h1 className='  p-3 text-3xl'>
           Money Mate is not just an expense tracker; it's your financial partner on the road to financial success.
           </h1>
           
          <ul class="space-y-4 text-left   text-2xl font-extrabold">
              <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>Visualizing  using charts and graphs</span>
              </li>
              <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>Expense Tracking</span>
              </li>
              <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>Income Management</span>
              </li>
              <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>Transaction History </span>
              </li>
              <li class="flex items-center space-x-3">
                  <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>Secure Cloud Storage</span>
              </li>
          </ul>


           
           </div>
           <Graph income={800} expense={500}/>
           {/* <LineGraph /> */}
            
            {/* <Register /> */}
           
        </div>

        {/* <Form prop={incomes} onSubmit={handleFormSubmit} onDelete={deleteHandler} typeOfForm={typeOfForm}/> */}
      </div>
       
    </div>
  )
}

export default HomeScreen