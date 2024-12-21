"use client";
import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'

const ResponsiveNavbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handNavShow = () => setShowNav(true)
  const handleCloseNav = ()=> setShowNav(false)
  return (
    <div>
      <Navbar openNav={ handNavShow} />
      <MobileNavbar showNav={ showNav} closeNav={handleCloseNav} />
    </div>
  )
}

export default ResponsiveNavbar