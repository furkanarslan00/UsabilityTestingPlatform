import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (username === "admin@gmail.com" && password === "admin") {
      navigate('/admin-panel');
    } else {
      onLogin(username, password);
      navigate('/home');
    }
  };

  return (
    <div className="login-container">
      <h2>LOGIN</h2>
      <div className="image-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Login_Berufsbildung_Logo.svg/512px-Login_Berufsbildung_Logo.svg.png?20160922184337" alt="Login Image" />
      </div>
      <div className="form-group">
        <form onSubmit={handleSubmit}>
          <label>
            E-Mail:
            <input required type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Password:
            <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            
          </label>
          <button type="submit">Login</button>
          <Link to="/register" className="register-button">Register</Link>
          <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
