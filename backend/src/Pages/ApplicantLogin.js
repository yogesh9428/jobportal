import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/ApplicantLogin.css';  // Import the CSS for styling

const ApplicantLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Both email and password are required");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/applicants/login', { email, password });

            if (response.status === 200) {
                navigate('/applicant-registration');
            }
        } catch (err) {
            setError("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="applicant-login-container">
            <h2>Applicant Login</h2>
            <form onSubmit={handleLogin}>
                <div className="input-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                {error && <div className="error-message">{error}</div>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default ApplicantLogin;
