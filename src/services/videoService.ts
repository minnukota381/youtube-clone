import axios from 'axios';
import { Video } from '../types/video';

const API_URL = 'https://youtube-v31.p.rapidapi.com';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

if (!API_KEY) {
    throw new Error('REACT_APP_YOUTUBE_API_KEY is not defined in the environment variables.');
}

const headers = {
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
    'x-rapidapi-key': API_KEY,
};

interface VideoItem {
    id: string;
    snippet: {
        title: string;
        description: string;
        thumbnails: {
            default: {
                url: string;
            };
        };
    };
}

export const searchVideos = async (relatedToVideoId: string, maxResults: number): Promise<Video[]> => {
    try {
        const response = await axios.get(`${API_URL}/search`, {
            headers,
            params: {
                relatedToVideoId,
                part: 'id,snippet',
                type: 'video',
                maxResults,
            },
        });

        const videos: Video[] = response.data.items.map((item: VideoItem) => ({
            id: item.id,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.default.url,
            url: `https://www.youtube.com/watch?v=${item.id}`,
            comments: [],
        }));

        return videos;
    } catch (error) {
        console.error('Error fetching videos:', error);
        return [];
    }
};

export const fetchRelatedVideos = async (relatedToVideoId: string, maxResults: number): Promise<Video[]> => {
    try {
        const response = await axios.get(`${API_URL}/search`, {
            headers,
            params: {
                relatedToVideoId,
                part: 'id,snippet',
                type: 'video',
                maxResults,
            },
        });

        const videos: Video[] = response.data.items.map((item: VideoItem) => ({
            id: item.id,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.default.url,
            url: `https://www.youtube.com/watch?v=${item.id}`,
            comments: [],
        }));

        return videos;
    } catch (error) {
        console.error('Error fetching related videos:', error);
        return [];
    }
};
