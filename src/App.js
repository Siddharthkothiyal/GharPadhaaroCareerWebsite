import React from 'react';
// import { HashRouter as Router } from 'react-router-dom';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import JobListings from './components/CareerPortal/JobListing/JobListings';

import './App.css';
import CareerPortal from './components/CareerPortal';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import LandingPage from './components/LandingPage/LandingPage';



import StudentsPage from './components/CareerPortal/StudentsPage/StudentsPage';

// import JobCategory from './components/CareerPortal/JobListing/JobCategory';
// import JobLocation from './components/CareerPortal/JobListing/JobLocation';



function App() {
  return (
    <Router>
      <div className="App">
        

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/careers" element={<CareerPortal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* <Route path="/jobs/:category" element={<JobCategory />} />
          <Route path="/jobs/location/:location" element={<JobLocation />} /> */}
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/job-listings" element={<JobListings />} />



          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
