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
   const redirect=navigate.search ? navigate.search.split('=')[1]: '/'
   

   const userRegister = useSelector(state=>state.userRegister)
    const {error,loading,userInfo}=userRegister
    useEffect(()=>{
      if(userInfo){
        navigate(redirect)
      }
    },[navigate,userInfo,redirect])

  const submitHandler=(e) =>{ 
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
    

      <form className='border p-3 text-left' onSubmit={submitHandler}>
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
      </form>
      
        </div>
  )
}

export default Register