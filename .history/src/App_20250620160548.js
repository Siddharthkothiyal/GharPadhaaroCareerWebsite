import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CareerPortal from './components/CareerPortal';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import LandingPage from './components/LandingPage/LandingPage';

import JobCategory from './components/CareerPortal/JobListing/JobCategory';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/careers" element={<CareerPortal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/jobs/:category" element={<JobCategory />} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
