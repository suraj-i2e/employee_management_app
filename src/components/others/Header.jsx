import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../context/AuthSlice';

const Header = () => {

  const {loggedInUser,role}=useSelector(state=>state.user);
  const dispatch= useDispatch();

  // console.log(loggedInUser);
  

  return (
    <div className='flex justify-between items-end'>
      {
      role=='admin'?
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Admin 👋</span></h1>
        :
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{loggedInUser?loggedInUser.firstName:'Suraj'} 👋</span></h1>
      }
      <button onClick={()=>dispatch(logout())} className='bg-red-500 text-white text-lg font-medium px-4 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
