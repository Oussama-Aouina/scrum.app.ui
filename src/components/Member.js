import React from 'react'
import { useNavigate } from 'react-router-dom'
import Status from './Status'

function Member({ member, deleteMember }) {
  const navigate = useNavigate();
  const editMember = (e, id) => {
    e.preventDefault();
    navigate(`/profile/${id}`);
  }
  return (
    <tr key={member.id}>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap"># {member.id}</td>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">{member.post}</td>

      {/* <td class="px-3 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
          <h2 class="text-sm font-normal">{member.status}</h2>
        </div>
      </td> */}
      <Status status={member.status} />
      <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <img className="object-cover w-8 h-8 rounded-full" src={member.img} alt=""></img>
          <div>
            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">{member.firstName} {member.lastName}</h2>
            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">{member.email}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500  dark:text-gray-300 whitespace-nowrap">{member.expectedEnd ? member.expectedEnd : "-"}</td>

      <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
        <div className='flex justify-center align-middle items-center flex-auto'>
          <div onClick={(e, id) => editMember(e, member.id)} className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-amber-500 mx-3 dark:bg-gray-800 hover:text-amber-700 hover:cursor-pointer">

            <h2 className="text-sm font-normal">Check workflow</h2>
          </div>
          <div onClick={(e, id) => { deleteMember(e, member.id) }} className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-red-500 mx-3 dark:bg-gray-800 hover:text-red-700 hover:cursor-pointer">

            <h2 className="text-sm font-normal">Kick out</h2>
          </div>
          {/* <a className='text-satle-400 hover:text-satle-800 text-sm font-thin hover:cursor-pointer' href='#'>Edit</a>
          <a className='text-satle-400 hover:text-satle-800 text-sm font-thin hover:cursor-pointer' href='#'>delete</a> */}
        </div>
      </td>
    </tr>
  )
}

export default Member