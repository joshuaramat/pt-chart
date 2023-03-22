import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

import { Bar } from 'react-chartjs-2';


ChartJS.register(
  BarElement, CategoryScale, LinearScale, Tooltip, Legend
)

const PatientVolumeChart = ({patientData, location}) => {
  const options = {}

  return (
    <div>
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {location}
      </h1>
      <div
        style = {{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Bar
          data = { patientData }
          options = { options }
        />
      </div>
    </div>
  )
}

export default PatientVolumeChart