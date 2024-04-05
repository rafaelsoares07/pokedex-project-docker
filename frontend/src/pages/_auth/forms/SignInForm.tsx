import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../../utils/hooks/useForm'
import axios from 'axios'

export const SignInForm = () => {

  const [form, handlerForm] = useForm()

  async function sendForm(e: any) {
    e.preventDefault();
    console.log(form)
    try {
      const response = await axios.post("http://localhost:3000/signin", form)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }





  return (
    <div>
      <h1 className='text-5xl text-center py-1'>Login</h1>
      <form onSubmit={sendForm} className='grid grid-cols-2 gap-5 p-3'>

        <div className='h-12 bg-red-600 col-span-2'>
          <input onChange={handlerForm} placeholder='Email or Trainer Name' type="text" name="email" id="" className='w-full h-full border border-gray-400 py-1 px-2 w-full' />
        </div>
        <div className='h-12 bg-red-600 col-span-2'>
          <input onChange={handlerForm} placeholder='Password' type="password" name="password" id="" className='w-full h-full border border-gray-400 py-1 px-2 w-full' />
        </div>
        <button type='submit' className="mt-2 inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl hover:scale-[1.02]">
          Sign up for free
        </button>
      </form>

      <div className='text-center'>
        <Link to="/sign-up">Don't have an account yet, click here to create one.</Link>
      </div>
    </div>
  )
}
