import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useForm from '../../../utils/hooks/useForm';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../../../context/AuthContext/AuthContext';

export const SignInForm = () => {

  const navigate = useNavigate()

  const authContext: any= React.useContext(AuthContext);

  const notifyLoginFail = (message:string) => toast.error(message);

  const [form, handlerForm] = useForm();

  async function sendForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/signin", form);
      loginSuccess(response);
    } catch (error) {
      loginError(error);
    }
  }

  function loginSuccess(response: any) {
    authContext.setToken(response.data.token)
    authContext.setUser(response.data.user)
    navigate("/")
    alert("Login feito com sucesso");
  }

  function loginError(error: any) {
    notifyLoginFail(error.response.data.message);
  }

  return (
    <div>
      <h1 className='text-5xl text-center py-1'>Login {authContext.token} </h1>
      <h1>{authContext.user?.name}</h1>
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
      <ToastContainer /> {/* Adicionando o ToastContainer aqui */}
    </div>
  );
};
