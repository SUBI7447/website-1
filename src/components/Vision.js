import React from 'react'
import './Vision.css'
import logo from '../assets/MLSA.png'

const Vision = () => {
    const array1 =[{"img":"", "title":"", "info":""},
    {"img":"", "title":"", "info":""},
    {"img":"", "title":"", "info":""}]


  return (
    <div className='vision'>
      <span className='vision-header'>Microsoft Learn Student Club MIT ADT</span>
      <div className='vision-line'>&#x2022; Build the Future &#x2022; &emsp; &emsp; &#x2022; Grow your community &#x2022; </div>
        <div className='vision-ambassador-logo'>
        <div className='vision-statement'></div>
        <div className='vision-info'></div>
      </div>
      <div className='vision-pic'></div>
    </div>
  )
}

export default Vision
