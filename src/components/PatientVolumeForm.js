import React, { useState } from 'react';

const PatientVolumeForm = ({ labels, data, location, onSubmit }) => {
  const [patientVolume, setPatientVolume] = useState(data);

  const handleChange = (event, index) => {
    const newPatientVolume = [...patientVolume];
    newPatientVolume[index] = parseInt(event.target.value);
    setPatientVolume(newPatientVolume);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(location, patientVolume);
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
            max="99"
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
