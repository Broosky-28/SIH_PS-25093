// src/components/RecruiterPortfolio.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { sampleStudent } from '../data';
import { Typography, Box, Chip } from '@mui/material';

const RecruiterPortfolio = () => {
  const { username } = useParams();
  const s = sampleStudent.username === username ? sampleStudent : null;

  if (!s) return <Typography variant="h6">Student not found</Typography>;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>{s.name}'s Portfolio</Typography>

      <Box mt={2} textAlign="center">
        <img src={s.profilePic} alt="Profile" className="profile-pic" />
      </Box>

      <Box mt={3}>
        <Typography variant="h6">Academic Info</Typography>
        <Typography variant="body2">GPA: <strong>{s.academic?.GPA ?? 'N/A'}</strong></Typography>
        <Typography variant="body2">Credits: <strong>{s.academic?.credits ?? 'N/A'}</strong></Typography>
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
    </Box>
  );
};

export default RecruiterPortfolio;
