import React from 'react'
import { Link } from 'react-router-dom'
export const SignInForm = () => {
  return (
    <div>
      <h1 className='text-5xl text-center py-1'>Login</h1>
      <form action='#' className='grid grid-cols-2 gap-5 p-3'>
    
      <div className='h-12 bg-red-600 col-span-2'>
      <input placeholder='Email or Trainer Name' type="text" name="" id="" className='w-full h-full border border-gray-400 py-1 px-2 w-full' />
      </div>
      <div className='h-12 bg-red-600 col-span-2'>
      <input placeholder='Password' type="password" name="" id="" className='w-full h-full border border-gray-400 py-1 px-2 w-full' />
      </div>
    </form>

    <div className='text-center mb-1'>
    <a className="mt-2 inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl hover:scale-[1.02]"
    href="#">
    Sign up for free
    </a>
    </div>
    
    <div className='text-center'>
    <Link to="/sign-up">Don't have an account yet, click here to create one.</Link>
    </div>
    </div>
  )
}
