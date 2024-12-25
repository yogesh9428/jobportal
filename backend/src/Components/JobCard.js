// src/Components/JobCard.js

import React from 'react';
import '../styles/JobCard.css'; // Create and style the JobCard here

const JobCard = ({ job }) => {
    return (
        <div className="job-card">
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
        </div>
    );
};

export default JobCard;
