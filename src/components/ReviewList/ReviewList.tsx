import React from 'react';
import { Button, Container, SimpleGrid, Modal } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { useSelector, useDispatch } from 'react-redux';
import { getReviews, createReview } from '@/store/slice/reviewSlice';
import { ReviewItem } from '../ReviewItem/ReviewItem';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { Review } from '@/types';

export const ReviewList = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const reviews = useSelector(getReviews);
    const dispatch = useDispatch();

    const [opened, { toggle }] = useDisclosure(false);

    const handleReviewSubmit = (reviewData: Omit<Review, 'id' | 'createdAt'>) => {
        dispatch(createReview(reviewData));
        toggle();
    };

    return (
        <Container size="xl">
            <SimpleGrid cols={isMobile ? 1 : 3} spacing="lg" mt={30}>
                {reviews.map(review => (
                    <ReviewItem key={review.id} item={review} />
                ))}
            </SimpleGrid>
            <Button variant="outline" color="blue" fullWidth mt={30} onClick={toggle}>
                Оставить отзыв
            </Button>
            <Modal
              opened={opened}
              onClose={toggle}
              title="Leave a Review"
              size="sm"
            >
                <ReviewForm onSubmit={handleReviewSubmit} />
            </Modal>
        </Container>
    );
};
