import React from 'react';
import '../styles/Homepage.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <div className="home-banner">
                <h1>Welcome to JobPortal</h1>
                <p>Your gateway to exciting career opportunities!</p>
                <a href="/job-listings" className="get-started-btn">Get Started</a>
            </div>
        </div>
    );
};

export default HomePage;
