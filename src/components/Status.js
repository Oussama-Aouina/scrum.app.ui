import React from 'react'

function Status({ status }) {
    return (

        ((status === "Free") && (<td className="px-3 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/20 dark:bg-gray-800">
                <h2 className="text-sm font-normal">{status}</h2>
            </div>
        </td>)) ||
        ((status === "Overwhelmed") && (<td className="px-3 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-red-500 bg-red-100/70 dark:bg-gray-800">
                <h2 className="text-sm font-normal">{status}</h2>
            </div>
        </td>)) ||
        ((status === "Almost free") && (<td className="px-3 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-green-500 bg-green-100/20 dark:bg-gray-800">
                <h2 className="text-sm font-normal">{status}</h2>
            </div>
        </td>)) ||
        ((status === "Busy") && (<td className="px-3 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-yellow-500 bg-yellow-100/20 dark:bg-gray-800">
                <h2 className="text-sm font-normal">{status}</h2>
            </div>
        </td>))


    )
}

export default Status