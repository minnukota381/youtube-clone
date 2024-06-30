// src/pages/Home.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import VideoList from '../components/VideoList';
import './Home.css';

const Home: React.FC = () => (
    <div className="home">
        <Navbar />
        <div className="home-content">
            <Sidebar />
            <VideoList />
        </div>
    </div>
);

export default Home;
