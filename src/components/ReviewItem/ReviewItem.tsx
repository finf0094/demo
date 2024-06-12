import { Text, Avatar, Group, TypographyStylesProvider, Paper } from '@mantine/core';
import styles from './ReviewItem.module.css';
import { Review } from '@/types';

interface ReviewItemProps {
    item: Review
}

export function ReviewItem({ item }: ReviewItemProps) {
    const {
        createdAt,
        name,
        review,
        src,
    } = item;
    const formattedDate = createdAt.toLocaleString();

    return (
        <Paper withBorder radius="md" className={styles.comment}>
            <Group>
                <Avatar
                  src={src}
                  alt="Jacob Warnhalter"
                  radius="xl"
                />
                <div>
                    <Text fz="sm">{name}</Text>
                    <Text fz="xs" c="dimmed">
                        {formattedDate}
                    </Text>
                </div>
            </Group>
            <TypographyStylesProvider className={styles.body}>
                <Text className={styles.contet}>{review}</Text>
            </TypographyStylesProvider>
        </Paper>
    );
}
