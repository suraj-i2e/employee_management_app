import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = () => {
  return (
    <div className='p-10 h-screen'>
      <Header/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
