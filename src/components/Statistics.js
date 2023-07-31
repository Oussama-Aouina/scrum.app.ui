import React from 'react'

function Statistics() {
  return (
      <div className='px-3 py-2 rounded-lg bg-slate-200 shadow'>
          {/* Add productivity statistics here */}
          <h2 className='text-xl font-bold text-slate-800 ml-4'>Statistics of the week:</h2>
          <div className='flex justify-start text-slate-800 font-medium'>
              <div className="bg-white rounded-lg shadow-lg py-2 px-4 flex-col m-4">
                  <div className="flex items-center justify-between">
                      <h2 className="font-bold text-sm text-indigo-600 mr-3">Total tasks:</h2>
                      <span className="text-sm font-medium text-gray-800">30</span>
                  </div>
                  <div className="flex items-center text-right text-sm justify-end mt-2 ">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                      <span className="font-bold text-sm text-gray-500 ml-0.5">3%</span>
                  </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg py-2 px-4 flex-col m-4">
                  <div className="flex items-center justify-between">
                      <h2 className="font-bold text-sm text-green-600 mr-3">Finished tasks:</h2>
                      <span className="text-sm font-medium text-gray-800">30</span>
                  </div>
                  <div className="flex items-center text-right text-sm justify-end mt-2 ">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                      <span className="font-bold text-sm text-gray-500 ml-0.5">3%</span>
                  </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg py-2 px-4 flex-col m-4">
                  <div className="flex items-center justify-between">
                      <h2 className="font-bold text-sm text-amber-600 mr-3">Current tasks:</h2>
                      <span className="text-sm font-medium text-gray-800">30</span>
                  </div>
                  <div className="flex items-center text-right text-sm justify-end mt-2 ">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                      <span className="font-bold text-sm text-gray-500 ml-0.5">3%</span>
                  </div>
              </div>
          </div>

      </div>
  )
}

export default Statistics