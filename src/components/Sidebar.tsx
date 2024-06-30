// src/components/Sidebar.tsx
import React from 'react';
// import './Sidebar.css'; // Add appropriate styles

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-item">Home</div>
            <div className="sidebar-item">Trending</div>
            <div className="sidebar-item">Subscriptions</div>
            <div className="sidebar-item">Library</div>
            <div className="sidebar-item">History</div>
        </div>
    );
};

export default Sidebar;
