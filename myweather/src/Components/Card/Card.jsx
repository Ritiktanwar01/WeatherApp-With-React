import React from 'react'
import CardImage from '../CardImage/CardImage'

const Card = () => {
  return (
    <div className='card'>
      <div className="card-image">
        <img src="https://th.bing.com/th?id=ORMS.9adba3c6713213e78572612048239fd9&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0" alt="weather card" />
      </div>
      <div className="card-text-weather">
        <div className="card-all-day">
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
        </div>
      </div>
    </div>
  )
}

export default Card