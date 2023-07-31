import React from 'react'


const NavBar = () => {

    return (
        <div className="bg-slate-800 shadow border-b flex justify-between sticky  items-center top-0 left-0">
            <div className="flex items-center ml-4 text-white font-extrabold text-2xl w-full">
                ScrumFlow Tracker
            </div>
            <div className="h-16 w-full flex items-center pl-4 hover:cursor-pointer">
                <p className="text-white font-bold"></p>
            </div>
            
            <div className ="flex items-center pr-10 text-right mr-3">
                <button type="button" class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                    <span class="sr-only">Notifications</span>
                    <div class="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 border-1 border-white rounded-full top-1 right-0 dark:border-gray-900">20</div>
                </button>
                <div>
                    <h2 className="text-sm font-medium text-gray-100 dark:text-white w-full block" >Samir Mejri</h2>
                    <p className="text-xs font-normal text-gray-600 dark:text-gray-400 w-full">smejri@smartup.tn</p>
                </div>
                <img className="object-cover ml-2 w-9 h-9 rounded-full" src="http://localhost:8080/images/28f7b98d-f753-4281-b24d-88344d3726e4_download (4).jpeg" alt=""/>
                
            </div>
        </div>
    )
}

export default NavBar