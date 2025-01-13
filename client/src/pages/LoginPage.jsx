// src/pages/LoginPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// MUI imports
import { ThemeProvider, TextField, Button } from '@mui/material';
import { theme } from '../utils/theme';

// Our form-specific styles
import formStyles from '../assets/pages/FormPage.module.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message,  setMessage]  = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('http://localhost:8000/api/auth/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        // Save token, go to main page
        localStorage.setItem('authToken', data.token);
        navigate('/');
      } else {
        setMessage(data.detail || 'Login error');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An unexpected error occurred');
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={formStyles.formContainer}>
        <h2 className={formStyles.formTitle}>Welcome Back!</h2>

        <form onSubmit={handleLogin}>
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

          {message && <p style={{ color: 'red' }}>{message}</p>}

          <div className={formStyles.actionButtons}>
            {/* MUI Button, same color=gray and variant=contained as in GeneratePage */}
            <Button
              color="gray"
              variant="contained"
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>

        {/* "Don't have an account?" link */}
        <div className={formStyles.linkButton}>
          <button onClick={goToRegister}>Create New Account</button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default LoginPage;
