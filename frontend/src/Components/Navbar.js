import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/Navbar.css';

const Navbar = ({userType}) => {
    return (
        <nav className="navbar">
            <div className="navbar-logo"> {/* Updated className */}
                <h2>Job Portal</h2>
            </div>
            <ul className="navbar-links"> {/* Updated className */}
                <li>  <Link to="/"> Home </Link> </li>
                <li> <Link to="/job-listings"> Job Listings </Link> </li>
                <li> <Link to="/login">Login</Link> </li>
                {userType === 'applicant' && <li><Link to="/applicant-form">Applicant Form</Link></li>}
                {userType === 'employer' && <li><Link to="/employer-form">Employer Form</Link></li>}
            
            </ul>
        </nav>
    );
};

export default Navbar;
