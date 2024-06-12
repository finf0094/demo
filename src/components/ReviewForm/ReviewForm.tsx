import React, { FormEvent, useState } from 'react';
import { TextInput, Button, Textarea } from '@mantine/core';
import { Review } from '@/types';

interface ReviewFormProps {
    onSubmit: (review: Omit<Review, 'id' | 'createdAt'>) => void;
}

export const ReviewForm = ({ onSubmit }: ReviewFormProps) => {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !review) return;

        onSubmit({ name, review });
        setName('');
        setReview('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              label="Name"
              required
            />
            <Textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Your Review"
              label="Review"
              required
            />
            <Button type="submit" variant="outline" color="blue" fullWidth mt={10}>
                Submit Review
            </Button>
        </form>
    );
};
