import React, { useState } from 'react';
import './loginform.css';
import user_img from "./images/user_img.png";
import password from "./images/password.png";
import email from "./images/email.png";


const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the user data to the handleLogin function
    handleLogin({ username, password });
  };

  return (
    <div className='container'>
    <div>
    <img src = {user_img} alt="" className='profile'/><br />
    <h1 className='heading'>Log in</h1><br />
    <form onSubmit={handleSubmit} className='.login-form'>
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='input-field'
      />
      </div>
      <div>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='input-field'
      />
      </div>
      <div className='loginButton'>
    <button type='submit'>Login</button>
    </div>
    </form>
    </div>
    </div>
  );
};

export default LoginForm;
