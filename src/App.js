// src/App.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './component/Navbar';
import Dashboard from './component/Dashboard';
import Portfolio from './component/Portfolio';
import PersonalDocs from './component/PersonalDocs';
import Login from './component/Login';
import FacultyDashboard from './component/FacultyDashboard';
import RecruiterView from './component/RecruiterView';
import RecruiterPortfolio from './component/RecruiterPortfolio'; // ✅ new import
import ProtectedRoute from './component/ProtectedRoute'; // ✅ existing import

// Wrapper to hide Navbar on Login page
function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route 
          path="/dashboard" 
          element={<ProtectedRoute><Dashboard /></ProtectedRoute>} 
        />
        <Route 
          path="/portfolio" 
          element={<ProtectedRoute><Portfolio /></ProtectedRoute>} 
        />
        <Route 
          path="/personaldocs" 
          element={<ProtectedRoute><PersonalDocs /></ProtectedRoute>} 
        />
        <Route 
          path="/faculty" 
          element={<ProtectedRoute><FacultyDashboard /></ProtectedRoute>} 
        />
        <Route 
          path="/recruiter" 
          element={<ProtectedRoute><RecruiterView /></ProtectedRoute>} 
        />

        {/* Recruiter dynamic portfolio route */}
        <Route 
          path="/recruiter/:username" 
          element={<RecruiterPortfolio />} 
        />

      </Routes>
    </>
  );
}

function App() {
  return <Layout />;
}

export default App;
