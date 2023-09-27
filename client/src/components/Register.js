import React, { useState ,useEffect} from 'react'
import { register } from '../actions/userAction'
import { useDispatch,useSelector} from 'react-redux'
import {useNavigate } from 'react-router-dom'


function Register() {
   const [name,setName]=useState('');
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   const [confirmPassword,setConfirmPassword]=useState('');

   const [message,setMessage]=useState('');

   const dispatch=useDispatch();
   const navigate=useNavigate()
   const redirect=navigate.search ? navigate.search.split('=')[1]: '/dashboard'
   

   const userRegister = useSelector(state=>state.userRegister)
    const {error,loading,userInfo}=userRegister
    useEffect(()=>{
      if(userInfo){
        navigate(redirect)
      }
    },[navigate,userInfo,redirect])

  const submitHandler=(e) =>{ 
    setMessage('');
    e.preventDefault()
    if(password!=confirmPassword){
      setMessage('Password Do Not Match');
    }
    else{
      dispatch(register(name,email,password))
    }
    
   
    }
  return (
    
    <div className=''>
    
    <h1 className='text-4xl py-10 bg-slate-800 text-white'>MoneyMate.com</h1>

      <form className='md:w-[60%] w-96 p-10 border m-10 mx-auto container shadow-md text-left' onSubmit={submitHandler}>
        <h1 className=' font-extrabold mb-6'>Register New Account</h1>
          <div class="mb-6">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Your name</label>
            <input type="name" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Jane Doe" required value={name}  onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="name@flowbite.com" required value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
            <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " required  value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div class="mb-6">
            <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 ">Re-Enter  password</label>
            <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
          </div>

        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register new account</button>
        {loading ? 
        <div className='flex justify-center'>
          <svg class="mr-5 h-7 w-7 animate-spin text-green" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        </div>
        : message !=  '' ? <div className="mt-3" >{message}</div> 
        :<div className="text-black m-4">{error}</div>
        }
      </form>
      
        </div>
  )
}

export default Register