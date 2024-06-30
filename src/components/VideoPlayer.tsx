// src/components/VideoPlayer.tsx
import React from 'react';
import ReactPlayer from 'react-player';
import { Video } from '../types/video';

interface VideoPlayerProps {
    video: Video;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => (
    <div>
        <ReactPlayer url={video.url} controls />
        <h2>{video.title}</h2>
        <p>{video.description}</p>
    </div>
);

export default VideoPlayer;
