// src/components/Navbar.tsx
import React from 'react';
import './Navbar.css'; // Add appropriate styles

const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">YouTube Clone</div>
            <div className="navbar-search">
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </div>
            <div className="navbar-icons">
                <span>Icon1</span>
                <span>Icon2</span>
                <span>Icon3</span>
            </div>
        </div>
    );
};

export default Navbar;
