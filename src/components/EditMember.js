import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import memberService from '../services/memberService';

function EditMember() {
    const { id } = useParams();
    const [member, setmember] = useState({
        firstName: "",
        lastName: "",
        email: "",
        img: "",
        post: "",
        tasks: [],
    });
    const navigate = useNavigate();
    function handlechange(e) {
        const value = e.target.value;
        setmember({ ...member, [e.target.name]: value });
        console.log(member);
    }

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await memberService.getMember(id);
                setmember(response.data);
            } catch (error) {
                console.log(error);
            }

        };
        fetchData();
    }, [id])

    const editMember = (e, id) => {
        e.preventDefault();

        memberService.updateMember(id, member)
            .then((res) => {
                navigate('/');
            }).catch((err) => {
                console.log(err);
            }
            );

    }
    return (
        <div className="flex flex-col items-center max-w-2xl justify-center w-full h-full container shadow border-b mx-auto px-5">
            <div className="font-normal text-slate-700 text-3xl mt-10 tracking-wider pb-4 ">
                <h1 className="">Edit member</h1>
            </div>
            <div className="max-w-2xl  mx-auto flex justify-center  flew-wrap-reverse box-border text-center items-center container ">
                <div className="w-full h-full flex flex-col items-center justify-center   rounded-lg" >
                    <img src={member.img} className="w-60 h-60 rounded-full border-gray-700 shadow  border-collapse border-dashed object-cover " />
                </div>

                <div className="px-8  box-border h-max container w-1/2 ">

                    <div className="items-center justify-center my-4 box-border  container text-left">
                        <label className="block text-gray-500 text-sm font-normal my-2">
                            First name
                        </label>
                        <input type="text"
                            name='firstName'
                            value={member.firstName}
                            onChange={(e) => handlechange(e)}
                            className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        <label className="block text-gray-500 text-sm font-normal my-2">
                            Last name
                        </label>
                        <input type="text"
                            name='lastName'
                            value={member.lastName}
                            onChange={(e) => handlechange(e)}
                            className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        <label className="block text-gray-500 text-sm font-normal my-2">
                            Email
                        </label>
                        <input type="email"
                            name='email'
                            value={member.email}
                            onChange={(e) => handlechange(e)}
                            className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        <label className="block text-gray-500 text-sm font-normal my-2">
                            Post
                        </label>
                        <input type="text"
                            name='post'
                            value={member.post}
                            onChange={(e) => handlechange(e)}
                            className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center w-full h-full text-right">
                <div className="items-center justify-center w-full h-14 my-4 box-border space-x-5 pt-4">
                    <button onClick={(e, id) => editMember(e, member.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded ">
                        Update
                    </button>
                    <button onClick={() => navigate('/')} className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded ">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditMember