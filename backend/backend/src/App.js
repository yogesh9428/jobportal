import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/Homepage';
import JobListing from './Pages/JobListing';
import Footer from './Components/Footer';
import Login from './Pages/login';
import EmployerLogin from './Pages/EmployerLogin';
import ApplicantLogin from './Pages/ApplicantLogin';
import ApplicantForm from './Components/ApplicationForm';
import EmployerForm from './Components/EmployerForm';
// import NotFound from './Components/NotFound'; // Add this for 404 handling

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/job-listings" element={<JobListing />} />
                <Route path="/employer-login" element={<EmployerLogin />} />
                <Route path="/applicant-login" element={<ApplicantLogin />} />
                <Route path="/applicant-registration" element={<ApplicantForm />} />
                <Route path="/employer-registration" element={<EmployerForm />} />
                
                {/* 404 page for any other unmatched routes */}
                {/* <Route path="*" element={<NotFound />} />cm */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
