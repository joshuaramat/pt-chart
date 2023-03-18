import React, { useState } from 'react';
import Chart from './components/Chart'
import PatientVolumeForm from './components/PatientVolumeForm';

import patientData from './data/patientData';

function App() {
  const [updatedPatientData, setUpdatedPatientData] = useState(patientData);

  const handleSubmit = (formData) => {
    const newData = {...patientData};
    newData.datasets[0].data = formData;
    setUpdatedPatientData(newData);
  }

  return (
    <div>
      <Chart patientData={updatedPatientData}  />
      <PatientVolumeForm onPatientDataUpdate={handleSubmit} />
    </div>
  );
}

export default App;
