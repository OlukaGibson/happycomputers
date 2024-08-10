import React from 'react'
import Footer from './Footer'
import Background from "../assets/lastpagebackground.png"

const Contact = () => {
  return (
    <div className="relative flex flex-col bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: `url(${Background})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <Footer />
    </div>
  )
}

export default Contact
