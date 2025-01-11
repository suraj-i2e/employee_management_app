import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './context/localStorage'

import { useSelector } from 'react-redux';

const App = () => {


  const { isLoggedIn,role, users } = useSelector(state => state.user);

  setLocalStorage();
  console.log('isLoggedIn: ', isLoggedIn);

  return (
    <div>
      { !isLoggedIn?
        (<Login/>)
        :
        (role=='admin'?<AdminDashboard/>:<EmployeeDashboard/>)
      }
  
    </div>
  )
}

export default App
