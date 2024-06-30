import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Video } from '../types/video';
import { searchVideos } from '../services/videoService';
import VideoPlayer from '../components/VideoPlayer';
import CommentSection from '../components/CommentSection'; // Adjust import as needed

const VideoDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [video, setVideo] = useState<Video | null>(null);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                if (!id) return;

                const videos = await searchVideos(id, 10); // Adjust maxResults as needed
                const selectedVideo = videos.find(video => video.id === id);
                setVideo(selectedVideo || null);
            } catch (error) {
                console.error('Error fetching video:', error);
            }
        };

        fetchVideo();
    }, [id]);

    if (!video) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{video.title}</h2>
            <p>{video.description}</p>
            <img src={video.thumbnail} alt={video.title} />
            <a href={video.url} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
            <VideoPlayer video={video} />
            {/* Ensure CommentSection expects videoId */}
            <CommentSection videoId={video.id} />
        </div>
    );
};

export default VideoDetail;
