import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import memberService from '../services/memberService';
import Member from './Member';


function MemberList() {
    const navigate = useNavigate();
    const [members, setmembers] = useState(null);
    const [loading, setloading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            setloading(true);
            try {
                const response = await memberService.getMembers();
                setmembers(response.data);
            } catch (error) {
                console.log(error);
            }
            setloading(false);
        };
        fetchData();
    }, [])
    const deleteMember = (e, id) => {
        e.preventDefault();
        memberService.deleteMember(id)
            .then((res) => {
                if (members) {
                    setmembers((prevElement) => {
                        return prevElement.filter((member) => member.id !== id);
                    })
                }

            });
    }

    return (
        <div className="container min-w-full mx-auto my-8 scroll-smooth">

            <div className="h-12 px-5">
                <button onClick={() => navigate("/add")} className="rounded bg-slate-800 text-xs px-4 py-2 text-white hover:bg-slate-600 font-semibold">Add Member</button>
            </div>

            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg mx-4">
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-50 dark:bg-gray-800 shadow mb-2 z-10">
                        <tr>
                            <th className="px-4 pr-20 py-3.5 text-sm font-normal  text-left rtl:text-right text-gray-700 dark:text-gray-400">#Code</th>
                            <th className="px-4 pr-20 py-3.5 text-sm font-normal  text-left rtl:text-right text-gray-500 dark:text-gray-400">Role</th>
                            <th className="px-4 pr-20 py-3.5 text-sm font-normal  text-left rtl:text-right text-gray-500 dark:text-gray-400">Status</th>
                            <th className="px-4 pr-20 py-3.5 text-sm font-normal  text-left rtl:text-right text-gray-500 dark:text-gray-400">Profile</th>
                            <th className="px-4 pr-20 py-3.5 text-sm font-normal  text-left rtl:text-right text-gray-500 dark:text-gray-400">Tasks end</th>
                            <th className="px-4 pr-20 py-3.5 text-sm font-normal  text-rleft   text-gray-500 dark:text-gray-400"></th>
                        </tr>
                    </thead>
                    {!loading && (<tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900 mt-5">
                        {members.map((member) => (
                            <Member key={member.id} member={member} deleteMember={deleteMember} />
                        ))}


                    </tbody>)}
                </table>
            </div>
        </div>
    )
}

export default MemberList