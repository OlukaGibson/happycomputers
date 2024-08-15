import React from 'react'
import Computersdisplay from '../Computersdisplay'
import Navbar from '../Navbar'

const Computers = () => {
  return (
    <div className="overflow-x-hidden text-nuetral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 left-0 w-full z-50">
            <Navbar />
        </div>
      <Computersdisplay />
    </div>
  )
}

export default Computers