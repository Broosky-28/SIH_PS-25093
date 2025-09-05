// src/components/RecruiterView.js
import React from 'react';
import { Paper, Typography, Box, Chip } from '@mui/material';
import { QRCodeCanvas } from 'qrcode.react';
import { sampleStudent } from '../data';

const RecruiterView = () => {
  const s = sampleStudent; // single student for prototype
  const portfolioUrl = `${window.location.origin}/recruiter/${s.username}`;

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Recruiter View - Verified Portfolio
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Candidate: <strong>{s.name}</strong>
      </Typography>

      <Box mt={2} textAlign="center">
        <img src={s.profilePic} alt="Profile" className="profile-pic" />
      </Box>

      <Box mt={3}>
        <Typography variant="h6">Academic Info</Typography>
        <Typography variant="body2">
          GPA: <strong>{s.academic?.GPA ?? 'N/A'}</strong>
        </Typography>
        <Typography variant="body2">
          Credits: <strong>{s.academic?.credits ?? 'N/A'}</strong>
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="h6">Verified Activities</Typography>
        <ul className="activity-list">
          {s.activities
            .filter(a => a.status === 'Approved')
            .map(a => (
              <li key={a.id}>
                <strong>{a.title}</strong> • {a.type} • {a.date}
                <Chip label="Verified" color="success" size="small" sx={{ ml: 1 }} />
              </li>
          ))}
        </ul>
      </Box>

      <Box mt={4} textAlign="center">
        <Typography variant="subtitle1">Scan to View Portfolio</Typography>
        <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">
          <QRCodeCanvas value={portfolioUrl} size={160} bgColor="#f4f9ff" fgColor="#1565c0" />
        </a>
        <Typography variant="caption" display="block" mt={1}>
          {portfolioUrl}
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="body2" color="textSecondary">
          * This portfolio is system-verified via Smart Student Hub (SIH 2025 Prototype).
        </Typography>
      </Box>
    </Paper>
  );
};

export default RecruiterView;
