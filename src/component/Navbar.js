// src/component/Navbar.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("ssh_user"); // clear saved user
    navigate("/login");
  };

  return (
    <AppBar position="static" sx={{ background: "#1565c0" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left side - App Name */}
        <Typography variant="h6" component="div">
          Smart Student Hub
        </Typography>

        {/* Right side - Navigation Buttons */}
        <Box>
          <Button color="inherit" component={Link} to="/dashboard">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/portfolio">
            Portfolio
          </Button>
          <Button color="inherit" component={Link} to="/personaldocs">
            Personal Docs
          </Button>
          <Button color="inherit" component={Link} to="/faculty">
            Faculty
          </Button>
          <Button color="inherit" component={Link} to="/recruiter">
            Recruiter
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
