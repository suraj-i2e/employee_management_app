import React from 'react'
import { useSelector } from 'react-redux'

const TaskCard = () => {

  const {loggedInUser}= useSelector(state=>state.user)

  return (
    <div className="flex flex-wrap mt-20 justify-between gap-2">
      <div className="rounded-xl w-full sm:w-[35%] md:w-[22%] py-6 px-9 bg-red-400">
        <h2 className="text-3xl font-semibold">{loggedInUser?loggedInUser.taskCounts.active:0}</h2>
        <h3 className="text-xl font-medium">Active Task</h3>
      </div>
      <div className="rounded-xl w-full sm:w-[35%] md:w-[22%] py-6 px-9 bg-blue-400">
        <h2 className="text-3xl font-semibold">{loggedInUser?loggedInUser.taskCounts.newTask:0}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-full sm:w-[35%] md:w-[22%] py-6 px-9 bg-green-400">
        <h2 className="text-3xl font-semibold">{loggedInUser?loggedInUser.taskCounts.completed:0}</h2>
        <h3 className="text-xl font-medium">Completed</h3>
      </div>
      <div className="rounded-xl w-full sm:w-[35%] md:w-[22%] py-6 px-9 bg-orange-400">
        <h2 className="text-3xl font-semibold">{loggedInUser?loggedInUser.taskCounts.failed:0}</h2>
        <h3 className="text-xl font-medium">Failed</h3>
      </div>
    </div>
  )
}

export default TaskCard
