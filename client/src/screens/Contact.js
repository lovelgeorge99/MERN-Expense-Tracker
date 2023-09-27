import React, { useRef, useState }  from 'react'
import emailjs from '@emailjs/browser';


function Contact() {
   const form = useRef();
   const [message,setMessage]=useState('Send Message');
   const sendEmail = (e) => {
      e.preventDefault();
      setMessage('Sending');
  
      emailjs
      .sendForm(
        'reactMailer', 
        'template_htvnlsw', 
        form.current,
         'ED2xfxix5EX1wFYe3')
        .then((result) => {
          setMessage('Message Sent');
            console.log(result.text);
        }, (error) => {
            setMessage('Error');
            console.log(error.text);
        });
        form.current.reset();
        
    };
  return (
    <div>
              <h1 className='text-4xl py-10 bg-slate-800 text-white'>MoneyMate.com</h1>

    <form ref={form} onSubmit={sendEmail} class=" text-left md:w-[50%] w-96 p-10 border m-10 mx-auto container shadow-md">
      <div class="mb-6">
         <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
         <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
      </div>
      <div class="mb-6">
         <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
         <input type="text" id="subject" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Let us know how we can help you" required />
      </div>
      <div class="mb-6">
         <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
         <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
      </div>
      {/* <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block">Send message</button> */}
      {message === "Send Message" ? 
    <button type="submit" class="flex items-center font-bold rounded-lg bg-blue-700 hover:bg-blue-700  px-4 py-2 text-white">
        <span class="font-medium"> {message}  </span>
      </button>
    :message === "Sending" ?
      <button class="flex items-center font-bold rounded-lg bg-blue-700 hover:bg-blue-700  px-4 py-2 text-white" disabled>
        {message} 
      <svg class="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
        </button>
    :message === "Message Sent" ?
    <div className='flex'>
       <button type="submit" class="flex items-center font-bold rounded-lg bg-blue-700 hover:bg-blue-700  px-4 py-2 text-white">
        <span class="font-medium"> Send Message  </span>
      </button>
      <span className='p-3 text-green-500'> Your message has been sent</span>
      </div>
      
        
    :
      <div className='flex'>
      <button type="submit" class="flex items-center font-bold rounded-lg bg-blue-500 hover:bg-blue-700  px-4 py-2 text-white">
      <span class="font-medium"> Send Message  </span>
    </button>
    <span className='p-3 text-red-500'> Message not sent. Try Again!</span>
   </div>
  }

   </form>
    
    </div>
  )
}

export default Contact