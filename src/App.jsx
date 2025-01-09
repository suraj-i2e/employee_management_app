import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './context/localStorage'

import { useSelector } from 'react-redux';

const App = () => {

  const [user,setUser]=useState(null);

  const { isLoggedIn,role, users } = useSelector(state => state.user);

  // const handleLogin=(email,password)=>{
  //   if(email== 'admin@me.com' && password==123){
  //     setUser('admin')
  //   }else if(email == 'user@me.com' && password==123){
  //     setUser('employee')
  //   }else{
  //     alert("Invalid Credentials");
  //   }
  // }

  setLocalStorage();

  return (
    <div>
      {!isLoggedIn?<Login/>:''}
      {role=='admin'?<AdminDashboard/>:<EmployeeDashboard/>}
    </div>
  )
}

export default App
