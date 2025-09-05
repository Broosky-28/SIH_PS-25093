// src/component/Login.js
import React, { useState } from 'react';
import { Paper, Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Demo users including recruiter
  const users = [
    { username: 'student', password: '1234', role: 'student' },
    { username: 'faculty', password: '4321', role: 'faculty' },
    { username: 'recruiter', password: '5678', role: 'recruiter' } // new recruiter
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem('ssh_user', JSON.stringify(user));

      if (user.role === 'student') {
        navigate('/dashboard', { state: { username: user.username } });
      } else if (user.role === 'faculty') {
        navigate('/faculty', { state: { username: user.username } });
      } else if (user.role === 'recruiter') {
        navigate('/recruiter', { state: { username: user.username } });
      }
    } else {
      alert('Invalid username or password.\nTry: student/1234, faculty/4321, recruiter/5678');
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Paper elevation={3} className="login-card" sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>Login - Smart Student Hub</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mb: 2 }}
            autoFocus
          />
          <TextField
            label="Password"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Box textAlign="center">
            <Button variant="contained" type="submit">Login</Button>
          </Box>
        </form>
        <Typography variant="caption" display="block" mt={2}>
          Demo Accounts → <br />
          <strong>Student:</strong> student / 1234 <br />
          <strong>Faculty:</strong> faculty / 4321 <br />
          <strong>Recruiter:</strong> recruiter / 5678
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
