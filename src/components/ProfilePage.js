import React from 'react';
import Resume from './Resume';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import memberService from '../services/memberService';
import { useNavigate } from 'react-router-dom';
import Statistics from './Statistics';
import CurrentTask from './CurrentTask';
import FinishedTask from './FinishedTask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ProfilePage = () => {
    const { id } = useParams();
    /* const id = 48; */
    const [member, setmember] = useState({
        firstName: "",
        lastName: "",
        email: "",
        img: "",
        post: "",
        tasks: [],
    });
    const navigate = useNavigate();
    const [tasks, setTasks] = useState(member.tasks);
    const deleteTask = (e,taskId) => {
        e.preventDefault();
        memberService.deleteTask(taskId)
            .then(() => {
                if(member.tasks){
                // If the deletion is successful, update the list of tasks in the state
                    setTasks((prevTasks) => {return prevTasks.filter((task) => task.id !== taskId)});
                }
            })
            .catch((error) => {
                // Handle error if the deletion fails
                console.error(error);
            });
    }
    const editTask = (e, taskId,updatedtask) => {
        e.preventDefault();
        const task = tasks.find((task) => task.id === taskId);
        console.log(task);
        memberService.editTask(taskId,updatedtask)
            .then((res) => {
                console.log(res.data);
                setTasks((prevTasks) => {
                    return prevTasks.map((task) => {
                        if (task.id === taskId) {
                            return res.data;
                        } else {
                            return task;
                        }
                    });
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const [status, setstatus] = useState();
    useEffect(() => {
        setTasks(member.tasks);
        setstatus(member.status);
    }, [member.tasks]);
    const saveTask = (e, task) => {
        e.preventDefault();
        console.log(task);
        memberService.addTask(member.id,task)
            .then((res) => {
                setTasks((prevTasks) => { return [...prevTasks, res.data] });
            }).catch((error) => {
                console.log(error);
            }
            );
    };
   
    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await memberService.getMember(id);
                setmember(response.data);
                setstatus(response.data.status);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div className='flex-col bg-gray-100 pb-8 pt-1'>
            <div className="flex justify-start mx-3 mt-50">
                <FontAwesomeIcon icon={faArrowLeft} className='hover:cursor-pointer' onClick={() => { navigate('/'); }} />
            </div>
            <div className="flex justify-center items-start h-full  p-2">
                {/* Left section */}
                <div className="w-1/2 pr-1 ">
                    <div className="mb-2 ">
                        {/* Add additional member information here */}
                        <Resume member={member} saveTask={saveTask} status={status} editTask={editTask}/>
                    </div>
                    <Statistics />
                </div>

                {/* Right section */}
                <div className="w-1/2 py-5 px-3 bg-white border rounded-lg shadow">
                    <h3 className="text-xl font-bold mb-2 text-amber-500">Current Tasks</h3>
                    <div className="h-48 overflow-y-auto mb-8 ">
                        {/* Add current tasks here */}
                        <ul className='flex justify-start p-1 items-center flex-wrap'>
                            {(tasks) && tasks.filter((task) => { return task.finished === false; }).map((task) => (
                                <CurrentTask task={task} deleteTask={deleteTask} editTask={editTask} />
                            ))}
                            {/* ... */}
                        </ul>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-green-500">Finished Tasks</h3>
                    <div className="h-48 overflow-y-auto ">
                        {/* Add completed tasks here */}
                        <ul className='flex justify-start p-1 items-center flex-wrap'>
                            {(tasks) && tasks.filter((task) => { return task.finished === !false; }).map((task) => (
                                <FinishedTask task={task} />
                            ))}
                            {/* ... */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
