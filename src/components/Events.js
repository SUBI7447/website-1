import React from 'react'
import './Events.css'
import day_3 from '../assets/day_3.jpg'


const Events = () => {
  return (
    <div className='event'>
      <span className='title'>Events</span>
      <div className='event-content'>

        <div className='posters'>
          <img src={day_3} alt="day_3" />

        </div>
        <a className="reg-button" href="https://docs.google.com/forms/d/e/1FAIpQLSdq2EoDe8JRW5uBniYG9OPC3lGcQ3mXszfkGhdZ32cYTbhQsg/viewform" target="_blank">Register now</a>
      </div>
    </div>

  )
}

export default Events
