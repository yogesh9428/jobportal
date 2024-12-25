import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/EmployerLogin.css';  // Import the CSS for styling

const EmployerLogin = () => {
    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!employeeId || !password) {
            setError("Both employee ID and password are required");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/employers/login', { employeeId, password });

            if (response.status === 200) {
                navigate('/employer-registration');
            }
        } catch (err) {
            setError("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="login-form-container">
            <h2>Employer Login</h2>
            <form onSubmit={handleLogin}>
                <div className="input-group">
                    <label>Employee ID:</label>
                    <input
                        type="text"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                        placeholder="Enter your Employee ID"
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

export default EmployerLogin;
