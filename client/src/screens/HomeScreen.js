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

  const transactions =[
    {
      "amount": 300,
      "date": "2023-04-16T16:33:05.000Z"
    },
    {
      "amount": 500,
      "date": "2023-04-23T16:43:23.968Z",
     
    },
    {
      "amount": 450,
      "date": "2023-05-01T16:33:05.000Z"
    },
    {
      "amount": 500,
      "date": "2023-05-15T16:33:05.000Z"
    }

  ]

  
  return (
    <div className='sm:ml-64'>
        <div>
        <h1 className='text-4xl py-10 bg-slate-800 text-white'>MoneyMate.com</h1>
        <div className='grid grid-cols-1 xl:grid-cols-3   mx-10 md:auto-cols-min md:mt-24 mt-10' >
           <div className=' text-left'>
            <h1 className='md:text-7xl text-6xl font-extrabold text-purple-700 '>
              Track Everything Here 
            </h1>
           
           {/* <h1 className='  p-3 text-3xl'>
           Money Mate is not just an expense tracker; it's your financial partner on the road to financial success.
           </h1> */}
           
          <ul class="space-y-4 text-left   text-2xl font-extrabold ">
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
          <a href='/login'>
          <button type="submit"  class="m-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>

          </a>
           
           <a href='/register'>
           <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register new account</button>
           </a>



           
           </div>
           <Graph income={800} expense={500}/>
          <div>
          <LineGraph transaction={transactions} type={'Income'} />
           <LineGraph transaction={transactions} type={'Expense'} />
          </div>

            
            {/* <Register /> */}
           
        </div>

        {/* <Form prop={incomes} onSubmit={handleFormSubmit} onDelete={deleteHandler} typeOfForm={typeOfForm}/> */}
      </div>
       
    </div>
  )
}

export default HomeScreen