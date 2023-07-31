import React from 'react'

function FinishedTask(task) {
  return (
      <li key={task.task.id}className='flex flex-col  shadow border px-2 py-2 rounded-sm w-60 mr-2 mb-1 bg-gray-200'>
          <h2 className=' text-base line-through text-gray-700 font-bold mb-2 decoration-slice'>{task.task.title}</h2>
          <p className=' text-xs text-gray-700 font-light  line-through'>{task.task.description}</p>
          <div className="flex p-1 mt-3  text-xs text-gray-600">
              Finished: {task.task.endDate}
          </div>
      </li>
  )
}

export default FinishedTask