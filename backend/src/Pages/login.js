import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';  // Ensure you have styles for this page

const Login = () => {
    const [role, setRole] = useState('');
    const navigate = useNavigate();  // Initialize the navigate hook for redirection

    const handleRoleSelection = (role) => {
        setRole(role);  // Sets the role to either "applicant" or "employer"
        if (role === 'applicant') {
            navigate('/applicant-login');
        } else if (role === 'employer') {
            navigate('/employer-login');
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <div className="role-selection">
                <button onClick={() => handleRoleSelection('applicant')} className="role-button">
                    Applicant Login
                </button>
                <button onClick={() => handleRoleSelection('employer')} className="role-button">
                    Employer Login
                </button>
            </div>
        </div>
    );
};

export default Login;
