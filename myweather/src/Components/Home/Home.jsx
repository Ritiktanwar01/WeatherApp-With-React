import React from 'react'
import { FaLocationCrosshairs } from "react-icons/fa6";
import Cards from '../Cards/Cards'

const Home = () => {
  return (
    <div>
      <div className="cards-sec">
        <div className="tittle"><p>Results for</p> <span><FaLocationCrosshairs /></span> <span><h4>Hodal</h4></span></div>
        <Cards />
      </div>
      <div className="news-sec">

      </div>
    </div>
  )
}

export default Home