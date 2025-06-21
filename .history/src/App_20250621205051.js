import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import CareerPortal from './components/CareerPortal';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import JobListings from './components/CareerPortal/JobListing/JobListings';
import StudentsPage from './components/CareerPortal/StudentsPage/StudentsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/careers" element={<CareerPortal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/job-listings" element={<JobListings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
