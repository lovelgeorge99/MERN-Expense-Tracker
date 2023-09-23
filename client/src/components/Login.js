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
       {error}
        
    
      <form className='w-96 p-10 border m-10 mx-auto container shadow-md' onSubmit={submitHandler}>
        <div class="mb-6 ">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 text-left ">Your email</label>
          <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 text-left ">Your password</label>
          <input  onChange={(e)=>setPassword(e.target.value)}  type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
        </div>
  
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Log In</button>
          <a
          href='/'>
          {/* to={'/register'}>  */}
          Register
        </a>
      </form>

    </div>
  )
}

export default Login