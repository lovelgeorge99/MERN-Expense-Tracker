import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { Link,useParams,useNavigate } from 'react-router-dom'

import { login } from '../actions/userAction'

function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const navigate=useNavigate()
  const redirect='/dashboard'
  console.log(redirect)
  const userLogin = useSelector(state=>state.userLogin)
  const {error,loading,userInfo}=userLogin

  const dispatch=useDispatch()

  useEffect(()=>{
    if(userInfo){
      navigate(redirect)
    }
   },[navigate,userInfo,redirect])

  const submitHandler=(e)=>{
    e.preventDefault()
    dispatch(login(email,password))
  }
  
  return (
    <div className=''>
              <h1 className='text-4xl py-10 bg-slate-800 text-white'>MoneyMate.com</h1>

      
        
    
      <form className='w-96 p-10 border m-10 mx-auto container shadow-md' onSubmit={submitHandler}>
        <div class="mb-6 ">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 text-left ">Your email</label>
          <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 text-left ">Your password</label>
          <input  onChange={(e)=>setPassword(e.target.value)}  type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
        </div>
  
        <button type="submit" class="w-full mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center">Log In</button>
       
        {loading ? 
        <div className='flex justify-center'>
          <svg class="mr-5 h-7 w-7 animate-spin text-green" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        </div>
        : <div>{error}</div>}

        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="/register" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div>
      </form>

    </div>
  )
}

export default Login