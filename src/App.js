import React from 'react';
import PatientVolumeChart from './components/PatientVolumeChart';
import PatientVolumeForm from './components/PatientVolumeForm';

import frPatientData from './data/frPatientData';
import dbPatientData from './data/dbPatientData';

function App() {

  return (
    <div>
      <PatientVolumeForm 
        labels={frPatientData.labels} 
        data={frPatientData.datasets[0].data} 
        location='Fremont'
      />
      <PatientVolumeForm 
        labels={dbPatientData.labels} 
        data={dbPatientData.datasets[0].data} 
        location='Dublin'
      />
      <PatientVolumeChart 
        patientData={frPatientData} 
        location='Fremont'
      />
      <PatientVolumeChart 
        patientData={dbPatientData} 
        location='Dublin'
      />
    </div>
  );
}

export default App;
