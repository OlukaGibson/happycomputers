import React from 'react'
import Background from "../assets/lastpagebackground.png"

const Contact = () => {
  return (
    <div className="relative flex flex-col bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: `url(${Background})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="absolute bottom-0 w-full flex justify-center items-center">
        <div className="flex flex-col items-center py-14 px-20 w-full bg-black bg-opacity-55 text-white">
        <footer className="absolute bottom-0 w-full text-white bg-black bg-opacity-75 p-4 flex justify-around">
        <div>
          <h3 className="font-bold">Explore</h3>
          <ul>
            <li>Our Services</li>
            <li>Specification</li>
            <li>Production</li>
            <li>Production</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Account</h3>
          <ul>
            <li>My Account</li>
            <li>Registration</li>
            <li>Home Tutorials</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Location</h3>
          <p>+256 785333586</p>
          <p>Nakawa, Kampala</p>
          <p>shopme@gmail.com</p>
        </div>
      </footer>
        </div>
      </div>
    </div>
  )
}

export default Contact
