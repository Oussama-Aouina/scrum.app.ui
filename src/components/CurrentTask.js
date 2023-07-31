
import React from 'react'
import EditTask from './EditTask';
import { useState } from 'react';

function CurrentTask({task, deleteTask, editTask}) {
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <li key={task.id} className='flex flex-col  shadow border px-2 py-2 rounded-sm w-60 mr-2 mb-1 '>
            <h2 className=' text-base  font-bold mb-2'>{task.title}</h2>
            <p className=' text-xs font-light'>{task.description}</p>
            <h4 className='text-xs font-thin mt-3 '>Deadline:{task.endDate}</h4>
            <div className="flex p-1 mt-3">
                <div className="w-1/2 text-center text-xs text-amber-700 hover:text-amber-300 ">
                    <button className='w-full border-r-2' onClick={togglePopup}>Edit </button>
                    <EditTask prevTask={ task} show={showPopup} onClose={togglePopup} id={task.id}  editTask={editTask}>
                    </EditTask>
                </div>
                <div className="w-1/2 text-center text-xs text-red-700 hover:text-red-500">
                    <button className='w-full' onClick={(e) => { deleteTask(e, task.id) }}>Delete </button>
                </div>
            </div>
        </li>
    )
}

export default CurrentTask