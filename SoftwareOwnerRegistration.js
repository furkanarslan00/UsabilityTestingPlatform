import React, { useState } from 'react';
import './SoftwareOwnerRegistration.css';

function SoftwareOwnerRegistration() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    gender: '',
    city: '',
    extraDetails: '',
    software: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, like sending data to backend
    console.log(formData);
    setSuccessMessage('Request created successfully!');
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className="SoftwareOwnerRegistration">
      <h2>Software Owner Registration</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Name Surname:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="software">Software Selection:</label>
          <select id="software" name="software" value={formData.software} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="software1">Software 1</option>
            <option value="software2">Software 2</option>
            <option value="software3">Software 3</option>
          </select>
        </div>
        <div>
          <label htmlFor="extraDetails">Extra Details:</label>
        </div>
        <div>
          <textarea id="extraDetails" name="extraDetails" value={formData.extraDetails} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default SoftwareOwnerRegistration;
