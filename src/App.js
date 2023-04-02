import React, { useState } from 'react';
import PatientVolumeChart from './components/PatientVolumeChart/PatientVolumeChart';
import PatientVolumeForm from './components/PatientVolumeForm/PatientVolumeForm';
import Hero from './components/Hero/Hero';
import Navigation from './components/Navigation/Navigation';

import patientData from './data/patientData';

function App() {
  const defaultData = patientData.datasets[0].data;

  const [frData, setFrData] = useState(defaultData);
  const [dbData, setDbData] = useState(defaultData);

  const [FremontPatientVolume, setFremontPatientVolume] = useState(() => {
    const savedData = localStorage.getItem('FremontPatientVolume');
    return savedData ? JSON.parse(savedData) : patientData;
  });
  const [DublinPatientVolume, setDublinPatientVolume] = useState(() => {
    const savedData = localStorage.getItem('DublinPatientVolume');
    return savedData ? JSON.parse(savedData) : patientData;
  });
  
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

    localStorage.setItem(`${location}PatientVolume`, JSON.stringify(newPatientVolume));
    setPatientVolume(newPatientVolume);
  
    return newPatientVolume;
  }
  
  
  const handleFormSubmit = (location, newData) => {
    if (location === 'Fremont') {
      updatePatientVolume(location, newData, setFremontPatientVolume, FremontPatientVolume);
    } else if (location === 'Dublin') {
      updatePatientVolume(location, newData, setDublinPatientVolume, DublinPatientVolume);
    }
  };

  const handleLocationSelect = (location) => {
    setActiveLocation(location);
  }

  return (
    <div>
      <Navigation 
        onLocationSelect={handleLocationSelect}
        activeLocation={activeLocation}
      />
      {activeLocation === '' && (
      <Hero
        onLocationSelect={handleLocationSelect}
        activeLocation={activeLocation}
      />
    )}

      {activeLocation === 'Fremont' && (
        <>
          <PatientVolumeChart 
            patientData={FremontPatientVolume}
            location={activeLocation}
          />
          <PatientVolumeForm 
            labels={patientData.labels} 
            data={frData} 
            setData={setFrData}
            onSubmit={handleFormSubmit}
            location={activeLocation}
          />
        </>
      )}
    
      {activeLocation === 'Dublin' && (
        <>
          <PatientVolumeChart 
            patientData={DublinPatientVolume}
            location={activeLocation}
          />
          <PatientVolumeForm 
            labels={patientData.labels} 
            data={dbData}
            setData={setDbData}
            onSubmit={handleFormSubmit}
            location={activeLocation}
          />
        </>
      )}
    </div>
  );
}

export default App;
