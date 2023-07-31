import React from 'react';
import { useState } from 'react';

const Popup = ({ show, onClose, id ,addTask}) => {
    const [task, settask] = useState({
        id: "",
        title: "",
        description: "",
        endDate: "",
    });
    
    function handlechange(e) {
        const value = e.target.value;
        settask({ ...task, [e.target.name]: value });
    }

    const saveTask = (e) => {
        addTask(e, task);
        clear();
        onClose();
    };
    const clear = () => {
        
        settask({
            id: "",
            title: "",
            description: "",
            endDate: "",
        });
    };

    if (!show) return null;


    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="bg-black bg-opacity-50  absolute w-full h-full " onClick={onClose}></div>
            <div className="bg-white w-1/3 bg-opacity-80 backdrop-blur-sm rounded-lg p-5 z-10 text-left">
                <button className="mb-4 justify-center items-center flex  bg-red-500 hover:bg-red-700 w-5 h-5 rounded-full text-white text-lg font-medium" onClick={onClose}>
                    &times;
                </button>

                <h2 className="text-5xl drop-shadow-lg font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500">New task</h2>
                <p className='text-xs'>Please ensure the information is conveyed with utmost precision and accuracy.</p>
                <label className="block text-gray-600 text-sm font-normal my-2  ">
                    Title
                </label>
                <input type="text"
                    name='title'
                    value={task.title}
                    onChange={(e) => handlechange(e)}
                    required
                    placeholder="Type the title here..."
                    className="appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none text-xs" autoFocus />
                <label className="block text-gray-600 text-sm font-normal my-2">
                    Desciption
                </label>
                <div class="w-full h-32 border rounded-lg overflow-hidden ">
                    <textarea
                        name='description'
                        value={task.description}
                        onChange={(e) => handlechange(e)}
                        required
                        className="w-full h-full resize-none py-2 px-4 text-sm outline-none overflow-y-scroll text-black" placeholder="Type or paste your text here..."></textarea>
                </div>
                <label className="block text-gray-600 text-sm font-normal my-2">
                    Deadline
                </label>
                <input type="date"
                    name='endDate'
                    value={task.deadline}
                    onChange={(e) => handlechange(e)}
                    required
                    className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <div className="flex justify-center items-center w-full h-full text-right">
                    <div className="items-center justify-center w-full h-14 my-4 box-border space-x-5 pt-4">
                        <button type='submit'
                            onClick={saveTask}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded ">
                            Save
                        </button>
                        <button
                            onClick={clear}
                            className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded ">
                            Clear
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Popup;
