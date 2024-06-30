// src/pages/Profile.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import VideoDetail from './VideoDetail';

const Profile: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/video/:id" element={<VideoDetail />} />
            </Routes>
        </Router>
    );
};

export default Profile;
