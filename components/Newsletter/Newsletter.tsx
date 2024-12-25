import React from 'react'
import { BsEnvelopePaper } from 'react-icons/bs'

const Newsletter = () => {
  return (
      <div className='bg-black pt-16 pb-16 flex items-center justify-center w-full flex-col'>
          <BsEnvelopePaper className='size-16 mt-20 text-white ' />
          <h1 className='text-lg sm:text-xl md:text-2xl text-white font-semibold mt-10 tracking-widest'>Your Travel Journey Start Here</h1>
          <p className='mt-3 text-white text-xs sm:text-sm'>Sign up and we&apos;ll send the best deals to you </p>
          {/* subscriptions input and buttons */}
          <div className='w-full'>
              <input type="text"
                  className='bg-white px-6 py-3.5 mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none'
                  placeholder='E-Mail'
              />
              <button
                  className='bg-white hover:bg-blue-950  transition-all duration-200 hover:text-white
                  px-6 py-3.5 mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none'
              >
                  Subscribe
              </button>
          </div>
    </div>
  )
}

export default Newsletter