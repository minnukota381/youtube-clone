// src/components/VideoList.tsx
import React, { useEffect, useState } from 'react';
import { Video } from '../types/video';
import { searchVideos } from '../services/videoService';
import VideoCard from './VideoCard';
import './VideoList.css';

const VideoList: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const fetchedVideos = await searchVideos('7ghhRHRP6t4', 10);
                setVideos(fetchedVideos);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchVideos();
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
