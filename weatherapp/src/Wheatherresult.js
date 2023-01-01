import React from 'react'
import "./wheather.css"

function Wheatherresult({date,mintemp,maxtemp,condition,icon}) {
  return (
    <div className='result'>
    <h2>{date}</h2>
    <ul>
        <li><img src={icon} alt=''></img></li>
        <li>{condition}</li>
        <li>{mintemp}C/{maxtemp}</li>
    </ul>
    </div>
    
  )
}

export default Wheatherresult