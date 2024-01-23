import React from 'react'
import { PiSunBold } from "react-icons/pi";
import { FaLocationCrosshairs } from "react-icons/fa6";
import Demo from '../Location/Demo';


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <h2>Accu Weather</h2>
      </div>
      <div className="right-nav">
        <div className="search-box">
          <input type="text" />
          <button>Search</button>
          <div className="search-suggestion">
              <button>Use Current Location <span><FaLocationCrosshairs /><Demo /></span></button>
          </div>
        </div>
        <div className="day-night">
            <PiSunBold  className='iconDayNight'/>
        </div>
      </div>
    </nav>
  )
}

export default NavBar