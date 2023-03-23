import React, { useState } from 'react';

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
    console.log('handleSubmit called')
    console.log('patientVolume', patientVolume)
  };

  return (
    <form 
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
      }}
    >
      <h3>{location}</h3>
      {labels.map((label, index) => (
        <div key={index}>
          <label htmlFor={`hour${index}`}>{label}</label>
          <input
            id={`hour${index}`}
            type="number"
            min="0"
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
