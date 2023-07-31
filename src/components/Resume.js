import React from 'react'
import EmailWithCopyIcon from './EmailWithCopyIcon'
import Status from './Status'
import { useNavigate } from 'react-router-dom'
import Popup from './Popup'
import { useState } from 'react'

function Resume({ member ,saveTask,status}) {
    
    
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    const navigate = useNavigate();
    const editProfile = (e, id) => {
        e.preventDefault();
        navigate(`/edit/${id}`);
    }
    
    return (
        <div className='flex-col'>
            <div className="w-full  bg-gradient-to-t from-slate-800 to-slate-700  shadow rounded-lg text-white">
                <Status status={status} />
                <img className="w-32 h-32 mx-auto rounded-full  border-8 border-white" src={member.img} alt="" />
                <div className="text-center mt-2 text-3xl font-bold ">{member.firstName} {member.lastName}</div>
                <div className="text-center mt-2"><EmailWithCopyIcon email={member.email} /></div>
                <div className="text-center font-normal text-lg">{member.post}</div>

                <div className="px-6 text-center mt-2 font-light text-sm">
                    <p>
                    </p>
                </div>
                <hr className="mt-8" />
                <div className="flex p-4">
                    <div className="w-1/2 text-center text-amber-500 hover:text-amber-700 ">
                        <button onClick={(e, id) => editProfile(e, member.id)} className='w-full border-r-2'>Edit Profile</button>
                    </div>
                    <div className="w-1/2 text-center text-green-500 hover:text-green-700">
                        <button onClick={togglePopup} className='w-full'>Add task</button>
                        <Popup show={showPopup} onClose={togglePopup} id={member.id} addTask={saveTask}>
                        </Popup>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume