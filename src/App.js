import React, { useState } from 'react';
import PatientVolumeChart from './components/PatientVolumeChart';
import PatientVolumeForm from './components/PatientVolumeForm';

import frPatientData from './data/frPatientData';
import dbPatientData from './data/dbPatientData';

function App() {
  const [frPatientVolume, setFrPatientVolume] = useState(frPatientData);
  const [dbPatientVolume, setDbPatientVolume] = useState(dbPatientData);

  const handleFormSubmit = (location, newData) => {
    if (location === 'Fremont') {
      setFrPatientVolume(prevState => ({
        ...prevState,
        datasets: [
          {
            ...prevState.datasets[0],
            data: newData
          }
        ]
      }));
    } else if (location === 'Dublin') {
      setDbPatientVolume(prevState => ({
        ...prevState,
        datasets: [
          {
            ...prevState.datasets[0],
            data: newData
          }
        ]
      }));
    }
  };
  

  return (
    <div>
      <PatientVolumeForm 
        labels={frPatientData.labels} 
        data={frPatientData.datasets[0].data} 
        location='Fremont'
        onSubmit={handleFormSubmit}
      />
      <PatientVolumeForm 
        labels={dbPatientData.labels} 
        data={dbPatientData.datasets[0].data} 
        location='Dublin'
        onSubmit={handleFormSubmit}
      />
      <PatientVolumeChart 
        patientData={frPatientVolume} 
        location='Fremont'
      />
      <PatientVolumeChart 
        patientData={dbPatientVolume} 
        location='Dublin'
      />
    </div>
  );
}

export default App;
