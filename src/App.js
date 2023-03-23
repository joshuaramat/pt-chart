import React, { useState } from 'react';
import PatientVolumeChart from './components/PatientVolumeChart';
import PatientVolumeForm from './components/PatientVolumeForm';
import Hero from './components/Hero/Hero';

import frPatientData from './data/frPatientData';
import dbPatientData from './data/dbPatientData';

function App() {
  const [frPatientVolume, setFrPatientVolume] = useState(
    localStorage.getItem('frPatientVolume')
      ? JSON.parse(localStorage.getItem('frPatientVolume'))
      : frPatientData
  );
  const [dbPatientVolume, setDbPatientVolume] = useState(
    localStorage.getItem('dbPatientVolume')
      ? JSON.parse(localStorage.getItem('dbPatientVolume'))
      : dbPatientData
  );
  

  const handleFormSubmit = (location, newData) => {
    if (location === 'Fremont') {
      const newFrPatientVolume = {
        ...frPatientVolume,
        datasets: [
          {
            ...frPatientVolume.datasets[0],
            data: newData
          }
        ]
      };
      setFrPatientVolume(newFrPatientVolume);
      localStorage.setItem('frPatientVolume', JSON.stringify(newFrPatientVolume));
    } else if (location === 'Dublin') {
      const newDbPatientVolume = {
        ...dbPatientVolume,
        datasets: [
          {
            ...dbPatientVolume.datasets[0],
            data: newData
          }
        ]
      };
      setDbPatientVolume(newDbPatientVolume);
      localStorage.setItem('dbPatientVolume', JSON.stringify(newDbPatientVolume));
    }
  };
  
  

  return (
    <div>
      <Hero />
      <PatientVolumeChart 
        patientData={frPatientVolume} 
        location='Fremont'
      />
      <PatientVolumeForm 
        labels={frPatientData.labels} 
        data={frPatientData.datasets[0].data} 
        onSubmit={handleFormSubmit}
      />
      <hr />
      <PatientVolumeChart 
        patientData={dbPatientVolume} 
        location='Dublin'
      />
      <PatientVolumeForm 
        labels={dbPatientData.labels} 
        data={dbPatientData.datasets[0].data}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default App;
