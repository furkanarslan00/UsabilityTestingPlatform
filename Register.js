import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !city || !gender) {
      setError('Please fill in all fields.');
      return;
    }

    console.log(`Registering with name: ${name}, email: ${email}, password: ${password}, city: ${city}, gender: ${gender}`);
    setRegistrationSuccess(true);
    setError('');
    // Register işlemi burada gerçekleştirilebilir
  };

  return (
    <div className="register-container">
      <div className="info-box">
        {registrationSuccess && <p className="success-message">Record created successfully</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="image-container">
        <img src="https://png.pngtree.com/png-clipart/20221006/original/pngtree-transparent-register-now-banner-png-image_8661213.png" alt="Register Image" />
      </div>
      <div className="form-group">
        <form onSubmit={handleRegister}>
          <div>
            <label htmlFor="name">Name Surname:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
