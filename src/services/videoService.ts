// src/services/videoService.ts
import axios from 'axios';
import { Video } from '../types/video';

export const getVideos = async (): Promise<Video[]> => {
    const response = await axios.get('/mockData/videos.json'); // Adjust the path to your mock data
    return response.data;
};
