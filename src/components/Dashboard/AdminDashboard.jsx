import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'

const AdminDashboard = () => {
  return (
    <div className='p-10 h-screen'>
      <Header/>
      <CreateTask/>
    </div>
  )
}

export default AdminDashboard
