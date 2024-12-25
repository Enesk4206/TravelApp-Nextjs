import Link from 'next/link'
import React from 'react'
import {FaTwitter,FaFacebook,FaDribbble} from "react-icons/fa"
const Footer = () => {
  return (
      <div className='pt-16 pb-16'>
          <div className='w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
              {/* 1st part */}
              <div className='space-y-5'>
                  <h1 className='text-lg font-bold'>Company</h1>
                  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>About Us</p>
                  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Careers</p>
                  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Blogs</p>
                  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Gift Cards</p>
                  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Magazine</p>
              </div>
                 {/* 2nd part */}
                 <div className='space-y-5'>
                  <h1 className='text-lg font-bold'>Support</h1>
                  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Contact</p>
                  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Legal Notice</p>
                  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Privacy Police</p>
                  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Terms & Conditions</p>
                  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Sitemap</p>
              </div>
                 {/* 3rd part */}
                 <div className='space-y-5'>
                  <h1 className='text-lg font-bold'>Other Services</h1>
                  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Car Hire</p>
                  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Activity Finder</p>
                  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Tour List</p>
                  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Flight Finder</p>
                  <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Travel Agents</p>
              </div>
                 {/* 4th part */}
              <div>
                  <h1 className='text-lg font-bold '>Contact Us</h1>
                  <div className='mt-6'>
                      <h1 className='text-sm text-gray-600'>Our Mobile Number</h1>
                      <h1 className='text-base font-bold text-blue-950 mt-1'>+012 123 4567</h1>
                  </div>
                  <div className='mt-6'>
                      <h1 className='text-sm text-gray-600'>Our Email</h1>
                      <h1 className='text-base font-bold text-blue-950 mt-1'>example@gmail.com</h1>
                  </div>
                </div>
          </div>
          {/* Bottom Sections */}
          <div className='mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
              <p className='text-center md:text-left'>Copyright C 2024 Enes Kaya . All rights reserved</p>
              <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                  <span>Social:</span>
                  <Link className='text-gray-500 hover:text-gray-800' href={"#"}><FaTwitter/></Link>
                  <Link className='text-gray-500 hover:text-gray-800' href={"#"}><FaFacebook/></Link>
                  <Link className='text-gray-500 hover:text-gray-800' href={"#"}><FaDribbble/></Link>
              </div>
          </div>
    </div>
  )
}

export default Footer