import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import './PatientVolumeChart.css'


ChartJS.register(
  BarElement, CategoryScale, LinearScale, Tooltip, Legend
)

const PatientVolumeChart = ({patientData, location}) => {
  const options = {}

  return (
    <div className='PatientvolumeChart'>
      <h1>
        {location}
      </h1>
      <Bar
        data = { patientData }
        options = { options }
        style={{ maxWidth: '95%' }}
      />
    </div>
  )
}

export default PatientVolumeChart