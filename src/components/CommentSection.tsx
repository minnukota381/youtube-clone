// src/components/CommentSection.tsx
import React from 'react';
import { Comment } from '../types/video';

interface CommentSectionProps {
    comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => (
    <div>
        <h3>Comments</h3>
        {comments.map(comment => (
            <div key={comment.id}>
                <p>{comment.text}</p>
                <small>{comment.author}</small>
            </div>
        ))}
    </div>
);

export default CommentSection;
