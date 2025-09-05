// src/components/FacultyDashboard.js
import React, { useState } from 'react';
import { Paper, Typography, Box, Button, Grid } from '@mui/material';
import { sampleStudent } from '../data';

const FacultyDashboard = () => {
  const [activities, setActivities] = useState(sampleStudent.activities);

  const handleApproval = (id, status) => {
    const updated = activities.map(a =>
      a.id === id ? { ...a, status } : a
    );
    setActivities(updated);
    alert(`Activity ${status}`);
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Faculty Dashboard - Approvals
      </Typography>
      <Typography variant="body2" gutterBottom>
        Review and approve student-submitted activities for authenticity.
      </Typography>

      <Box mt={3}>
        {activities.map((a) => (
          <Paper key={a.id} sx={{ mb: 2, p: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs={8}>
                <Typography variant="subtitle1"><strong>{a.title}</strong></Typography>
                <Typography variant="body2">Type: {a.type}</Typography>
                <Typography variant="body2">Date: {a.date}</Typography>
                <Typography variant="body2">Status: <strong>{a.status}</strong></Typography>
              </Grid>
              <Grid item xs={4} textAlign="right">
                {a.status === 'Pending' ? (
                  <>
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      sx={{ mr: 1 }}
                      onClick={() => handleApproval(a.id, 'Approved')}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleApproval(a.id, 'Rejected')}
                    >
                      Reject
                    </Button>
                  </>
                ) : (
                  <Typography
                    variant="body2"
                    color={a.status === 'Approved' ? 'green' : 'red'}
                  >
                    {a.status}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
    </Paper>
  );
};
  
export default FacultyDashboard;
