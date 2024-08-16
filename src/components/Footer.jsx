import React from 'react'
import Break from './Break'

const Footer = () => {
  return (
    <div className="relative flex flex-col bg-cover bg-center bg-no-repeat">
      <Break />
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="absolute bottom-0 w-full flex justify-center items-center">
        <div className="flex flex-col items-center py-14 px-20 w-full bg-black text-white">
            <footer className="absolute bottom-0 w-full text-white bg-black p-4 flex justify-around">
                <div>
                    <h3 className="font-bold">Explore</h3>
                    <ul>
                        <li>Computers</li>
                        <li>Services</li>
                        <li>Accessories</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold">Connect</h3>
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>TikTok</li>
                        <li>YouTube</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold">Location</h3>
                    <p>Nalubega Complex, G06</p>
                    <p>Kampala</p>
                    <p>+256 785333586</p>
                    <p>hckampala@gmail.com</p>
                </div>
            </footer>
        </div>
    </div>
    </div>
    
  )
}

export default Footer