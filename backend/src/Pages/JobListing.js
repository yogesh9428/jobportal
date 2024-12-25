// src/Pages/JobListing.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from '../Components/JobCard'; // Import JobCard
import '../styles/JobListing.css'; // Import CSS

const JobListing = () => {
    const [jobs, setJobs] = useState([]); // State for job data
    const [error, setError] = useState(false); // State for error handling
    const [loading, setLoading] = useState(true); // State for loading

    useEffect(() => {
        axios.get('http://localhost:8080/api/jobs') // API call
            .then(response => {
                console.log('Job Listings:', response.data);
                setJobs(response.data); // Set the fetched jobs
                setLoading(false); // Disable loading
            })
            .catch(err => {
                console.error('Error fetching job listings:', err); // Log error
                setError(true); // Set error state to true
                setLoading(false); // Disable loading
            });
    }, []);

    console.log('Current jobs:', jobs);
    
    if (error) {
        return <div className="error-message">Error fetching job listings. Please try again later.</div>;
    }

    // Display loading message while data is being fetched
    if (loading) {
        return <div className="loading-message">Loading job listings...</div>;
    }

    return (
        <div className="job-listing-container">
            <h1>Job Listings</h1>
            <div className="job-list">
                {jobs.map(job => (
                    <JobCard key={job.id} job={job} /> // Render a JobCard for each job
                ))}
            </div>
        </div>
    );
};

export default JobListing;
