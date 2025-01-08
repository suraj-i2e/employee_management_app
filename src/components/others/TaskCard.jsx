import React from 'react'

const TaskCard = () => {
  return (
    <div className="flex flex-wrap mt-20 justify-between gap-2">
    <div className="rounded-xl w-full sm:w-[35%] md:w-[22%] py-6 px-9 bg-red-400">
      <h2 className="text-3xl font-semibold">0</h2>
      <h3 className="text-xl font-medium">New Task</h3>
    </div>
    <div className="rounded-xl w-full sm:w-[35%] md:w-[22%] py-6 px-9 bg-blue-400">
      <h2 className="text-3xl font-semibold">0</h2>
      <h3 className="text-xl font-medium">New Task</h3>
    </div>
    <div className="rounded-xl w-full sm:w-[35%] md:w-[22%] py-6 px-9 bg-green-400">
      <h2 className="text-3xl font-semibold">0</h2>
      <h3 className="text-xl font-medium">New Task</h3>
    </div>
    <div className="rounded-xl w-full sm:w-[35%] md:w-[22%] py-6 px-9 bg-orange-400">
      <h2 className="text-3xl font-semibold">0</h2>
      <h3 className="text-xl font-medium">New Task</h3>
    </div>
  </div>
  )
}

export default TaskCard
