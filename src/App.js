import React, { useState } from 'react';
import PatientVolumeChart from './components/PatientVolumeChart';
import PatientVolumeForm from './components/PatientVolumeForm';
import Hero from './components/Hero/Hero';
import Navigation from './components/Navigation/Navigation';

import patientData from './data/patientData';

function App() {
  const [frData, setFrData] = useState(patientData.datasets[0].data);
  const [dbData, setDbData] = useState(patientData.datasets[0].data);
  const [frPatientVolume, setFrPatientVolume] = useState(
    localStorage.getItem('frPatientVolume')
      ? JSON.parse(localStorage.getItem('frPatientVolume'))
      : patientData
  );
  const [dbPatientVolume, setDbPatientVolume] = useState(
    localStorage.getItem('dbPatientVolume')
      ? JSON.parse(localStorage.getItem('dbPatientVolume'))
      : patientData
  );
  const [activeLocation, setActiveLocation] = useState('');

  function updatePatientVolume(location, newData, setPatientVolume, patientVolumeData) {
    const newPatientVolume = {
      ...patientVolumeData,
      datasets: [
        {
          ...patientVolumeData.datasets[0],
          data: newData.map(Number) // Convert string array to number array
        }
      ]
    };
    setPatientVolume(newPatientVolume);
    localStorage.setItem(`${location}PatientVolume`, JSON.stringify(newPatientVolume));
  }
  
  const handleFormSubmit = (location, newData) => {
    if (location === 'Fremont') {
      updatePatientVolume(location, newData, setFrPatientVolume, frPatientVolume);
    } else if (location === 'Dublin') {
      updatePatientVolume(location, newData, setDbPatientVolume, dbPatientVolume);
    }
  };

  return (
    <div>
      <Navigation onLocationSelect={setActiveLocation} />
      <Hero onLocationSelect={setActiveLocation} />

      {activeLocation === 'Fremont' && (
        <>
          <PatientVolumeChart 
            {...{patientData: frPatientVolume, location: 'Fremont'}}
          />
          <PatientVolumeForm 
            labels={patientData.labels} 
            data={frData} 
            setData={setFrData}
            onSubmit={handleFormSubmit}
            location='Fremont'
          />
        </>
      )}
    
      {activeLocation === 'Dublin' && (
        <>
          <PatientVolumeChart 
            {...{patientData: dbPatientVolume, location: 'Dublin'}}
          />
          <PatientVolumeForm 
            labels={patientData.labels} 
            data={dbData}
            setData={setDbData}
            onSubmit={handleFormSubmit}
            location='Dublin'
          />
        </>
      )}
    </div>
  );
}

export default App;
