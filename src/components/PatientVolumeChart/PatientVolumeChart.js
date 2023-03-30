import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import './PatientVolumeChart.css'


ChartJS.register(
  BarElement, CategoryScale, LinearScale, Tooltip, Legend
)

const PatientVolumeChart = ({patientData, location}) => {
  const options = {
    maintainAspectRation: false,
    borderRadius: 10,
    scales: {
      y: {
        suggestedMax: Math.max(...patientData.datasets[0].data) + 1,
        ticks: {
          stepSize: 1,
          precision: 0,
        }
      }
    }
  }

  return (
    <div className='PatientvolumeChart'>
      <h1>
        {location}
      </h1>
      <Bar
        data = { patientData }
        width={100}
        height={35}
        options = { options }
      />
    </div>
  )
}

export default PatientVolumeChart