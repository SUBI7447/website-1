import React from 'react'
import './Vision.css'
import logo from '../assets/MLSA.png'

const Vision = () => {
    const array1 =[{"img":"", "title":"", "info":""},
    {"img":"", "title":"", "info":""},
    {"img":"", "title":"", "info":""}]


  return (
    <div className='vision'>
      <span className='vision-header'>MLSC MIT ADT</span>
      <div className='vision-line'>&#x2022; Build the Future &#x2022; &emsp; &emsp; &#x2022; Grow your community &#x2022; &emsp; &emsp; &#x2022; Become an Ambassador &#x2022;&emsp; &emsp; &#x2022; Fly on the cloud &#x2022;</div>
        <div className='vision-ambassador'>
        <div className='vision-statement'>Join Us and Become an MLSA</div>
        <div className='vision-info'>Achieve more with unique opportunities to build AI-driven solutions, explore cutting-edge technology, lead local communities, and grow online presence.<br/>Develop professional skills that align with your interests and aspirations.<br/>Share ideas, solve challenges, and expand your circle of influence.</div>
      </div>
      <div className='vision-pic'></div>
    </div>
  )
}

export default Vision
