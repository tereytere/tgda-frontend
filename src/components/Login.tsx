import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login', {
        username,
        password,
      }, { withCredentials: true });

      console.log(response.data);
      // Handle successful login
      navigate('/');
    } catch (error) {
      console.error('Error logging in', error);
      // Handle login error
    }
  };

  return (
    <div className='login'>
      <div className='login-box'>
        <div className='login-header'>Login</div>
        <form onSubmit={handleSubmit} className='inputs'>
          <input
            className='inputs-bar'
            placeholder='Enter your username'
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className='inputs-bar'
            placeholder='Enter your password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='submit-button' type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
