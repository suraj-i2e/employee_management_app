import React from 'react'
import { useSelector } from 'react-redux'

const TaskList = () => {

    const {loggedInUser}= useSelector(state=>state.user)

  return (
    <div id='tasklist' className='flex overflow-x-auto items-center justify-start gap-5 flex-nowrap md:h-[55%] h-[45%] w-full py-5 mt-10'>

        {
            loggedInUser && loggedInUser.tasks.map((task,i)=>{
                return (
                    <div key={i} className='relative flex-shrink-0 h-full w-[250px] p-5 md:w-[300px] bg-orange-400 rounded-xl'>
                        <div className='flex justify-between items-center'>
                            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                            <h4 className='text-sm'>{task.taskDate}</h4>
                        </div>
                        <h2 className='mt-5 text-lg md:text-2xl font-semibold'>{task.taskTitle}</h2>
                        <p className='text-sm mt-2'>
                          {task.taskDescription}    
                        </p>
                        <div className='flex mt-4 absolute bottom-10 gap-5'>
                            <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Complete</button>
                            <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TaskList
