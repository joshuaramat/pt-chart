import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'

import { Bar } from 'react-chartjs-2'
import patientData from '../data/patientData'

ChartJS.register(
  BarElement, CategoryScale, LinearScale, Tooltip, Legend
)

const Chart = () => {
  const [chartData, setChartData] = useState(patientData);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (formSubmitted) {
      setChartData(patientData);
      setFormSubmitted(false);
    }
  }, [formSubmitted, patientData]);

  const options = {}
  console.log('patient data', patientData)


  return (
    <div>
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        Patient Volume Today
      </h1>
      <div
        style = {{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Bar
          data = { chartData }
          options = { options }
        />
      </div>
    </div>
  )
}

export default Chart