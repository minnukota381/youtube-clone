// src/components/VideoCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Video } from '../types/video';
import './VideoCard.css'; // Add appropriate styles

interface VideoCardProps {
    video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => (
    <div className="video-card">
        <Link to={`/video/${video.id}`}>
            <img src={video.thumbnail} alt={video.title} />
            <div className="video-info">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
            </div>
        </Link>
    </div>
);

export default VideoCard;
