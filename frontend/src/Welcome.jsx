import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem('username') || 'Guest';

    // Dynamic State
    const [currentTime, setCurrentTime] = useState(new Date());

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const getGreeting = () => {
        const hour = currentTime.getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 18) return 'Good Afternoon';
        return 'Good Evening';
    };

    const handleLogout = () => {
        // "Remember username after successful login for subsequent logins."
        // We won't clear localStorage entirely, just navigate away.
        navigate('/');
    };

    return (
        <div className="welcome-card glass-panel">
            <div className="success-icon">✨</div>
            <h1 className="title">{getGreeting()}, <span className="highlight">{username}</span>!</h1>
            <p className="subtitle">You have successfully logged in.</p>

            <div className="dynamic-info" style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: '500', color: 'var(--primary)' }}>
                    {currentTime.toLocaleTimeString()}
                </p>
                <p style={{ margin: '0.5rem 0 0 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    {currentTime.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
            </div>

            <button onClick={handleLogout} className="logout-btn base-anim">
                Logout
            </button>
        </div>
    );
};

export default Welcome;
