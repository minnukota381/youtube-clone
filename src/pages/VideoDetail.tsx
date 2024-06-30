// src/pages/VideoDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Video } from '../types/video';
import { getVideos } from '../services/videoService';
import VideoPlayer from '../components/VideoPlayer';
import CommentSection from '../components/CommentSection';

const VideoDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [video, setVideo] = useState<Video | null>(null);

    useEffect(() => {
        getVideos().then(videos => {
            const selectedVideo = videos.find(video => video.id === id);
            setVideo(selectedVideo || null);
        });
    }, [id]);

    if (!video) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <VideoPlayer video={video} />
            <CommentSection comments={video.comments} />
        </div>
    );
};

export default VideoDetail;
