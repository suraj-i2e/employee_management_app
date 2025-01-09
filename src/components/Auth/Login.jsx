import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { login } from '../../context/AuthSlice';

const Login = () => {

    const [email,setEmail]=useState('');
    const [password, setPassword]= useState('');
    const dispatch = useDispatch();
    const{error}=useSelector(state=>state.user);

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(login({email,password}));
        setEmail('');
        setPassword('');
    }
     
    {error && alert(error)}

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl' >
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder='Enter your Email' className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-xl py-3 px-5 rounded-full placeholder:text-gray-600' />
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder='Enter Password' className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-xl py-3 px-5 mt-3 rounded-full placeholder:text-gray-600' />
                <button type='submit' className='text-white border-none outline-none bg-emerald-600 hover:bg-emerald-700 text-lg py-2 px-8 mt-7 w-full rounded-full'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login
