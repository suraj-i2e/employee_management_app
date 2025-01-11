import React from 'react'
import { useSelector } from 'react-redux'

const AllTask = () => {

  const {users} = useSelector(state=>state.user);

  return (
    <div id='tasklist' className='bg-[#1c1c1c] p-5 rounded mt-5 h-60'>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5'>Employee Name</h2>
        <h3 className='w-1/5'>New Task</h3>
        <h5 className='w-1/5'>Active Task</h5>
        <h5 className='w-1/5'>Completed</h5>
        <h5 className='w-1/5'>Failed</h5>
      </div>
      <div id='tasklist' className='h-[80%] overflow-auto'>
        {
          users && users.filter(user=>!user.email.includes('admin'))
            .map(user=>{
            
            return (
              <div key={user.id} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='w-1/5'>{user.firstName}</h2>
                <h3 className='w-1/5'>{user.taskCounts.newTask}</h3>
                <h5 className='w-1/5'>{user.taskCounts.active}</h5>
                <h5 className='w-1/5'>{user.taskCounts.completed}</h5>
                <h5 className='w-1/5'>{user.taskCounts.failed}</h5>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AllTask
