import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'

import { Bar } from 'react-chartjs-2'

import patientData from '../data/patientData'

ChartJS.register(
  BarElement, CategoryScale, LinearScale, Tooltip, Legend
)

const Chart = () => {
  const options = {

  }
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
          data = { patientData }
          options = { options }
        />
      </div>
      <p>Check it out! I did it!</p>
    </div>
  )
}

export default Chart