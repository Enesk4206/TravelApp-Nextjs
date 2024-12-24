import React from 'react'
import {FaCalendarWeek, FaMap} from "react-icons/fa"
import {FaUserGroup} from "react-icons/fa6"
const SearchBox = () => {
  return (
      <div className='bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 
      lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-8 mt-4 sm:mt-12 w-[90%] sm:w-[80%]'>
          {/* 1st Search Input */}
          <div className='flex items-center space-x-6'>
              <FaMap className='size-6 text-blue-600' />
              <div>
                  <p className='text-lg font-medium mb-[0.2rem]'>Location</p>
                  <input type="text" placeholder='Where are you going?' className='outline-none border-none placeholder:text-gray-800' />
              </div>
          </div>
          {/* 2nd search input */}
          <div className='flex items-center space-x-6 '>
              <FaCalendarWeek className='size-6 text-blue-600' />
              <div>
                  <p className='text-lg font-medium mb-[0.2rem]'>Start Date</p>
                  <input type="date" className='outline-none border-none' />
              </div>
          </div>
          {/* 3rd search input */}
          <div className='flex items-center space-x-6 '>
              <FaCalendarWeek className='size-6 text-blue-600' />
              <div>
                  <p className='text-lg font-medium mb-[0.2rem]'>End Date</p>
                  <input type="date" className='outline-none border-none' />
              </div>
          </div>

          {/* 4th search input */}
          <div className='flex items-center space-x-6 '>
              <FaUserGroup className='size-6 text-blue-600' />
              <div>
                  <p className='text-lg font-medium mb-[0.2rem]'>Guest</p>
                  <p className='text-base font-normal'>1 Guest 1 Room</p>
              </div>
          </div>
    </div>
  )
}

export default SearchBox