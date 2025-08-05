import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Forgot password form submitted:', { email });
   
    navigate('/password-reset-confirm');
  };

  return (
    <div className="forgot-password-wrapper">
      <h2 className="forgot-password-wrapper-heading">Forgot Password</h2>
      <p className="forgot-password-wrapper-paragraph">Enter your email address below to reset your password.</p>
      <form onSubmit={handleSubmit}>
        <div className="forgot-password-wrapper-form-group">
          <label htmlFor="email" className="forgot-password-wrapper-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="forgot-password-wrapper-input"
            required
          />
        </div>
        <button type="submit" className="forgot-password-wrapper-button">Reset Password</button>
      </form>
      <Link to="/login" className="forgot-password-wrapper-link">Remembered your password? Login</Link>
    </div>
  );
};

export default ForgotPassword;
