// src/components/VideoCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Video } from '../types/video';
import { fetchRelatedVideos } from '../services/videoService'; // Import your video service function
import './VideoCard.css';

interface VideoCardProps {
    video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
    const [relatedVideos, setRelatedVideos] = React.useState<Video[]>([]);

    React.useEffect(() => {
        const fetchRelated = async () => {
            try {
                const videos = await fetchRelatedVideos(video.id, 10); // Fetch related videos based on video.id, adjust maxResults as needed
                setRelatedVideos(videos);
            } catch (error) {
                console.error('Error fetching related videos:', error);
            }
        };

        fetchRelated();
    }, [video.id]);

    return (
        <div className="video-card">
            <Link to={`/video/${video.id}`}>
                <img src={video.thumbnail} alt={video.title} />
                <div className="video-info">
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                </div>
            </Link>
            {/* Display related videos here */}
            {relatedVideos.length > 0 && (
                <div className="related-videos">
                    <h4>Related Videos</h4>
                    <ul>
                        {relatedVideos.map((relatedVideo) => (
                            <li key={relatedVideo.id}>
                                <Link to={`/video/${relatedVideo.id}`}>
                                    <img src={relatedVideo.thumbnail} alt={relatedVideo.title} />
                                    <div className="related-video-info">
                                        <h5>{relatedVideo.title}</h5>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default VideoCard;
