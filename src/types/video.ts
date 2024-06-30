// src/types/video.ts
export interface Video {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    url: string;
    comments: Comment[];
}

export interface Comment {
    id: string;
    text: string;
    author: string; // Add the author property
}
