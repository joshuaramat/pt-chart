import React from 'react'
import './Hero.css';

function Hero() {
  return (
    <div className='Hero'>
      <h1>Patient Volume Visualizer</h1>
      <p>
        With just a few clicks, you can access valuable data for both Fremont and Dublin locations. Say goodbye to the hassle of manual scheduling and hello to easy, data-driven decisions. We're excited to offer this tool to streamline our internal processes and help our team work more efficiently. So go ahead and dive in, the data is waiting for you!
      </p>
      <span>
        <h2>Active Clinic</h2>
        <select>
          <option value="" disabled selected>Please choose a clinic</option>
          <option value="Fremont">Fremont</option>
          <option value="Dublin">Dublin</option>
        </select>
      </span>
    </div>
  )
}

export default Hero;