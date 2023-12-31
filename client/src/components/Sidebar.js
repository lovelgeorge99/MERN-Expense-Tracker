import React,{useEffect, useState} from 'react'
import Graph from './Graph';
import { Link ,NavLink,useNavigate} from 'react-router-dom';   
import { LinkContainer } from 'react-router-bootstrap'
import {logout} from '../actions/userAction'
import { useDispatch,useSelector} from 'react-redux'


function Sidebar() {

  let [open,setOpen]=useState(true);

   const userLogin=useSelector(state=>state.userLogin)
   const {userInfo}=userLogin;
   const dispatch=useDispatch()
   const navigate=useNavigate()
   
   const [loggedIn,setLoggedIn]=useState(false);

   useEffect(()=>{
      
      if(userInfo) 
      {
          setLoggedIn(true)
      }
      else{
          setLoggedIn(false)
      }

      const handleClickOutside = (event) => {
        if (!open && !document.getElementById('navbar').contains(event.target)) {
          setOpen(true);
        }
      };
  
      // Add the event listener when the component mounts
      document.addEventListener('mousedown', handleClickOutside);
  
      // Clean up the event listener when the component unmounts
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };

    },[dispatch,navigate,userInfo,open])
   
  
  

 const logoutHandler=()=>{
    dispatch(logout())
    
    navigate('/')
  }
  
   let option1=[
    
      {
      name:"Home",
      svg:
         <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400  dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
         <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
         <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
         </svg>,
      to:'/'},

      {name:"About",
      svg:
      <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400  dark:group-hover:text-white" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9h2v5m-2 0h4M9.408 5.5h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>,
      color:'text-red-500',size:'w-10'},
      {name:"Login",
      svg:
      <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400  dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
      </svg>,
      to:'/login'},
      {name:"Contact Us",
      svg:
      <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400  dark:group-hover:text-white" fill="none" viewBox="0 0 20 16">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"/>
    </svg>,
     to:'/contact',
      color:'text-red-500',size:'w-10'},
   ]

   let option2=[
      {
      name:"Dashoard",
      svg:
         <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400  dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
         <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
         <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
         </svg>,
      to:'/dashboard'},
        

      {name:"Income",
      svg:
      <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400  dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
      <path d="M18.972.863a.913.913 0 0 0-.041-.207.956.956 0 0 0-.107-.19 1.01 1.01 0 0 0-.065-.116c-.008-.01-.02-.013-.028-.022a1.008 1.008 0 0 0-.174-.137 1.085 1.085 0 0 0-.141-.095 1.051 1.051 0 0 0-.171-.047.985.985 0 0 0-.207-.041C18.025.007 18.014 0 18 0h-3.207a1 1 0 1 0 0 2h.5l-4.552 3.9-3.5-.874a1 1 0 0 0-.867.189l-5 4a1 1 0 0 0 1.25 1.562L7.238 7.09l3.52.88a1 1 0 0 0 .892-.211L17 3.173v1.034a1 1 0 0 0 2 0V1a.9.9 0 0 0-.028-.137ZM13.5 9a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm.24 4.591a3.112 3.112 0 0 1 1.935 1.374 2.036 2.036 0 0 1 .234 1.584 2.255 2.255 0 0 1-1.374 1.469.982.982 0 0 1-1.953.09 2.943 2.943 0 0 1-1.475-.92 1 1 0 0 1 1.536-1.283.953.953 0 0 0 .507.29.778.778 0 0 0 .831-.18 1.108 1.108 0 0 0-.714-.481 3.105 3.105 0 0 1-1.934-1.374 2.042 2.042 0 0 1-.233-1.584 2.264 2.264 0 0 1 1.45-1.493v-.03a1 1 0 0 1 2 0c.517.159.98.457 1.337.862a1.002 1.002 0 1 1-1.524 1.3.962.962 0 0 0-.507-.286.775.775 0 0 0-.829.18 1.113 1.113 0 0 0 .713.482ZM6 20a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1Zm-4 0a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1Z"/>
      </svg>,
      to:'/income'
      },
      {name:"Expense",
      svg:
         <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400  dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
         <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
         </svg>,
      to:'/expense'
      },
      {name:"Logout",
      svg:
      <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400  dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 16">
    <path d="M12.5 3.046H10v-.928A2.12 2.12 0 0 0 8.8.164a1.828 1.828 0 0 0-1.985.311l-5.109 4.49a2.2 2.2 0 0 0 0 3.24L6.815 12.7a1.83 1.83 0 0 0 1.986.31A2.122 2.122 0 0 0 10 11.051v-.928h1a2.026 2.026 0 0 1 2 2.047V15a.999.999 0 0 0 1.276.961A6.593 6.593 0 0 0 12.5 3.046Z"/>
  </svg>,
      to:'/logout'
      },
      {name:"Contact Us",
      svg:
      <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400  dark:group-hover:text-white" fill="none" viewBox="0 0 20 16">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"/>
  </svg>,
    to:'/contact',
      color:'text-red-500',size:'w-10'}
   ]
   let option= loggedIn ? option2 : option1
  return (
    <div className='bg-slate-800'>

{/* <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="flex items-center p-2  ml-3 text-sm  rounded-lg sm:hidden ">
  
<svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
  </svg>
</button> */}
 <div onClick={()=>setOpen(!open)} className={`z-50  text-3xl absolute left-5 top-6 cursor-pointer md:hidden ${open ? '':'hidden'}`}>
          <svg  class="w-6 h-6 text-white  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
  </svg>
    </div>

{/* <nav id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar"> */}
<nav id="navbar" class={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform md:translate-x-0 ${open ? '-translate-x-full':'sm:translate-x-0'} `}>

   
          
   <div class="h-full px-3 py-4 overflow-y-auto bg-slate-800  ">
   <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
   <svg class="w-5 h-5 dark:text-gray-800 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
  </svg>
    </div>
      <ul class="space-y-2 font-medium transition-all-duration-500 ease-in">
      
      {
         option.map((op)=>(
         //    <li>
         //    <Link to={op.to} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
         //       {op.svg}
         //       <span class=" flex-1 ml-3">{op.name}</span>
         //    </Link>
         // </li>
         <li>
      {op.name === "Logout" ? (
         <div  onClick={logoutHandler} class="flex items-center p-2 cursor-pointer  hover:bg-slate-700 text-white rounded-lg   group">
        <button>
          {op.svg}
          
        </button>
        <span class=" flex-1 ml-3">{op.name}</span></div>
      ) : (
        <Link to={op.to} class="flex items-center p-2 text-white hover:bg-slate-700 rounded-lg group">
          {op.svg}
          <span class=" flex-1 ml-3">{op.name}</span>
        </Link>
      )}
    </li>

         
         ))
      }

      </ul>
   </div>
</nav>






    </div>
  )
}

export default Sidebar


