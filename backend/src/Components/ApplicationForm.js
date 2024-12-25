import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ApplicantForm.css'


const ApplicantForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [qualification, setQualification] = useState('');
    const [jobApplied, setJobApplied] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const validateForm = () => {
        if (!name || !email || !phoneNumber || !qualification || !jobApplied) {
            return 'All fields are required';
        }
        if (!/^[0-9]{10}$/.test(phoneNumber)) {
            return 'Phone number must be 10 digits';
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            return 'Invalid email address';
        }
        return ''; // no error
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setErrorMessage(validationError);
            setSuccessMessage('');
            return;
        }

        setLoading(true);
        setErrorMessage('');
        setSuccessMessage(''); // Clear previous success message

        try {
            const response = await axios.post('http://localhost:8080/api/applicants', {
                name,
                email,
                phoneNumber,
                qualification,
                jobApplied
            });

            console.log('Applicant submitted successfully:', response.data);
            setSuccessMessage('Registration successful! You can now log in.');
            setName('');
            setEmail('');
            setPhoneNumber('');
            setQualification('');
            setJobApplied('');
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage('Failed to submit form. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <h2>Applicant Registration</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Qualification:</label>
                    <input
                        type="text"
                        placeholder="Enter your qualification"
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Job Applied For (Job Title):</label>
                    <input
                        type="text"
                        placeholder="Enter job title"
                        value={jobApplied}
                        onChange={(e) => setJobApplied(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default ApplicantForm;
