import React, { useState } from "react";
import patientData from "../data/patientData";

const PatientVolumeForm = (props) => {
  const [formData, setFormData] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const hours = patientData.labels;

  const handleInputChange = (e,index) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      const newData = [...prevFormData];
      newData[index] = parseInt(value);
      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {...patientData};
    newData.datasets[0].data = formData;
    props.onPatientDataUpdate(newData);
    setFormSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      {hours.map((hour, index) => (
        <label key={hour}>
          {hour}
          <input
            type="number"
            name={hour}
            value={formData[index] || patientData.datasets[0].data[index]}
            onChange={(e) => handleInputChange(e, index)}
          />
        </label>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default PatientVolumeForm;