// src/components/VideoList.tsx
import React, { useEffect, useState } from 'react';
import { Video } from '../types/video';
import { getVideos } from '../services/videoService';
import VideoCard from './VideoCard';
import './VideoList.css'; // Add appropriate styles

const VideoList: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        getVideos().then(setVideos);
    }, []);

    return (
        <div className="video-list">
            {videos.map(video => (
                <VideoCard key={video.id} video={video} />
            ))}
        </div>
    );
};

export default VideoList;
