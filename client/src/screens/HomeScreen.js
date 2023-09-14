import React from 'react'
import Register from '../components/Register'


function HomeScreen() {
  return (
    <div className='ml-64'>
        <div>
        <h1 className='text-4xl py-8 mb-10 bg-slate-500 text-white'>Expense Tracker</h1>
        <div className='grid grid-cols-1 xl:grid-cols-2  mx-10 md:auto-cols-min items-center' >
            <h1 className='border text-center p-3 text-3xl'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchange
            </h1>
            <Register />
        </div>

        {/* <Form prop={incomes} onSubmit={handleFormSubmit} onDelete={deleteHandler} typeOfForm={typeOfForm}/> */}
      </div>
       
    </div>
  )
}

export default HomeScreen