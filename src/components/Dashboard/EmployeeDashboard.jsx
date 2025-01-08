import React from 'react'
import Header from '../others/Header'
import TaskCard from '../others/TaskCard'
import TaskList from '../others/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header/>
      <TaskCard/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
