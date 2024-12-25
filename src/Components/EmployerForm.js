import React, { useState } from 'react';
import axios from 'axios';
import JobCard from './JobCard'; // Assuming you have this component to display job
import '../styles/EmployerForm.css'
const EmployerForm = () => {
    const [companyName, setCompanyName] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    // Job-related state
    const [job, setJob] = useState({
        title: '',
        description: '',
        location: '',
        type: '',  // e.g., Full-time, Part-time
        salary: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [jobs, setJobs] = useState([]); // To store and display posted jobs

    // Validation for the form fields
    const validateForm = () => {
        if (!companyName || !contactNumber) {
            return 'Company name and contact number are required';
        }
        if (!/^[0-9]{10}$/.test(contactNumber)) {
            return 'Contact number must be 10 digits';
        }
        if (!job.title || !job.description || !job.location || !job.type || !job.salary) {
            return 'All job details are required';
        }
        return ''; // no error
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setErrorMessage(validationError);
            return;
        }

        setLoading(true);
        setErrorMessage(''); // Clear previous error

        try {
            // Post the job with employer details
            const jobResponse = await axios.post('http://localhost:8080/api/jobs', {
                companyName,
                contactNumber,
                ...job  // Spread job data
            });

            console.log('Job posted successfully:', jobResponse.data);
            
            // Add the new job to the jobs list (JobCard component will display it)
            setJobs([...jobs, jobResponse.data]);

            // Optionally reset the job form
            setJob({
                title: '',
                description: '',
                location: '',
                type: '',
                salary: ''
            });

        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage('Failed to submit form. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // Handle change for job-related fields
    const handleJobChange = (e) => {
        setJob({
            ...job,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="form-container">
            <h2>Job Post</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                {/* Employer Information */}
                <div className="input-group">
                    <label>Company Name:</label>
                    <input
                        type="text"
                        placeholder="Enter your company name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Contact Number:</label>
                    <input
                        type="text"
                        placeholder="Enter your contact number"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        required
                    />
                </div>

                {/* Job Details */}
                <div className="input-group">
                    <label>Job Title:</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter job title"
                        value={job.title}
                        onChange={handleJobChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Job Description:</label>
                    <textarea
                        name="description"
                        placeholder="Enter job description"
                        value={job.description}
                        onChange={handleJobChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Location:</label>
                    <input
                        type="text"
                        name="location"
                        placeholder="Enter job location"
                        value={job.location}
                        onChange={handleJobChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Job Type:</label>
                    <select
                        name="type"
                        value={job.type}
                        onChange={handleJobChange}
                        required
                    >
                        <option value="">Select Job Type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                    </select>
                </div>
                <div className="input-group">
                    <label>Salary:</label>
                    <input
                        type="number"
                        name="salary"
                        placeholder="Enter salary"
                        value={job.salary}
                        onChange={handleJobChange}
                        required
                    />
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>

            {/* Display job cards here */}
            <div className="job-list">
                {jobs.map((jobItem, index) => (
                    <JobCard key={index} job={jobItem} />
                ))}
            </div>
        </div>
    );
};

export default EmployerForm;
