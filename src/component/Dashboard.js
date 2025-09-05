// src/components/Dashboard.js
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container, Typography, Button, Grid, Card, CardContent,
  TextField, Chip, Box
} from "@mui/material";
import "../App.css";

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username || "Student";

  const [activityCount, setActivityCount] = useState(0);
  const [approved, setApproved] = useState(0);
  const [progress, setProgress] = useState(0);

  const addActivity = () => setActivityCount(activityCount + 1);
  const approveActivity = () => setApproved(approved + 1);
  const updateProgress = (e) => setProgress(Number(e.target.value));

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
        <Typography variant="h4">Welcome, {username} 👋</Typography>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Profile"
          className="profile-pic"
        />
      </Box>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Activity Tracker</Typography>
              <Button onClick={addActivity} variant="contained" sx={{ m: 1 }}>
                Add Activity
              </Button>
              <Button onClick={approveActivity} variant="outlined" sx={{ m: 1 }}>
                Approve Activity
              </Button>
              <Box mt={2}>
                <Chip label={`Total: ${activityCount}`} color="primary" sx={{ m: 0.5 }} />
                <Chip label={`Approved: ${approved}`} color="success" sx={{ m: 0.5 }} />
                <Chip label={`Progress: ${progress}%`} sx={{ m: 0.5 }} />
              </Box>
              <TextField
                type="number"
                label="Update Progress (%)"
                onChange={updateProgress}
                sx={{ mt: 2 }}
                fullWidth
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Portfolio</Typography>
              <Button
                variant="contained"
                onClick={() => navigate("/portfolio")}
              >
                View Portfolio
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Personal Documents</Typography>
              <Button
                variant="outlined"
                onClick={() => navigate("/personaldocs")}
              >
                Go to Docs
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
