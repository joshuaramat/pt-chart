import React, { useState } from 'react';
import './PatientVolumeForm.css';

const PatientVolumeForm = ({ labels, data, location, onSubmit }) => {
  const [patientVolume, setPatientVolume] = useState(data);

  const handleChange = (event, index) => {
    const newValue = parseInt(event.target.value);
    const newPatientVolume = [...patientVolume];
    if (isNaN(newValue)) {
      newPatientVolume[index] = 0;
    } else {
      newPatientVolume[index] = newValue;
    }
    setPatientVolume(newPatientVolume);
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(location, patientVolume);
  };

  return (
    <form 
      className='PatientVolumeForm'
      onSubmit={handleSubmit}
    >
      {labels.map((label, index) => (
        <div key={index} className='input-container'>
          <label htmlFor={`hour${index}`}>{label}</label>
          <input
            id={`hour${index}`}
            type="number"
            min=""
            max="999"
            value={patientVolume[index]}
            onChange={(event) => handleChange(event, index)}
          />
        </div>
      ))}
      <button type="submit">Update</button>
    </form>
  );
};

export default PatientVolumeForm;
