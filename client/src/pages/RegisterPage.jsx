// src/pages/RegisterPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, TextField, Button } from '@mui/material';
import { theme } from '../utils/theme';

import formStyles from '../assets/pages/FormPage.module.css';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email,    setEmail]    = useState('');
  const [message,  setMessage]  = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('http://localhost:8000/api/auth/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email }),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage('Registered successfully. Please login.');
        navigate('/login');
      } else {
        setMessage(data.detail || 'Registration error');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An unexpected error occurred');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={formStyles.formContainer}>
        <h2 className={formStyles.formTitle}>Create an Account</h2>

        <form onSubmit={handleRegister}>
          <div className={formStyles.inputField}>
            <TextField
              label="Username"
              color="gray"
              variant="outlined"
              fullWidth
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={formStyles.inputField}>
            <TextField
              label="Password"
              color="gray"
              variant="outlined"
              fullWidth
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={formStyles.inputField}>
            <TextField
              label="Email (optional)"
              color="gray"
              variant="outlined"
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {message && <p style={{ color: 'red' }}>{message}</p>}

          <div className={formStyles.actionButtons}>
            <Button
              color="gray"
              variant="contained"
              type="submit"
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default RegisterPage;
