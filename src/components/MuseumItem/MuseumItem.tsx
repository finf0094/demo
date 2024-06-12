import React, { useState } from 'react';
import { Card, Image, Text, Badge, Button, Group, Modal, Rating } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import styles from './MuseumItem.module.css';

interface MuseumItemProps {
    image: string;
    name: string;
    description: string;
    location: string;
    gallery: string[];
    history: string;
    notableExhibits: string;
    visitingHours: string;
    contactInfo: string;
    rating: number;
}

export function MuseumItem({
                               image,
                               name,
                               description,
                               location,
                               gallery,
                               history,
                               notableExhibits,
                               visitingHours,
                               contactInfo,
                               rating,
                           }: MuseumItemProps) {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Image src={image} height={160} alt={name} />
                </Card.Section>

                <Rating
                  value={rating}
                  size="sm"
                  color="yellow"
                  variant="active"
                  style={{ marginTop: '8px' }}
                />

                <Group mt="md" mb="xs">
                    <Text w={500}>{name}</Text>
                    <Badge color="pink" variant="light">
                        {location}
                    </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                    {description}
                </Text>

                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="md"
                  onClick={() => setOpened(true)}
                >
                    Подробнее
                </Button>
            </Card>

            <Modal
              opened={opened}
              onClose={() => setOpened(false)}
              title={name}
              size="lg"
            >
                <Carousel withIndicators height={400}>
                    {gallery.map((src, index) => (
                        <Carousel.Slide key={index}>
                            <Image className={styles.image} src={src} alt={`Gallery image ${index + 1}`} />
                        </Carousel.Slide>
                    ))}
                </Carousel>

                <Text size="sm" color="dimmed" mt="md">
                    {description}
                </Text>

                <Text size="md" mt="md">
                    <strong>История:</strong> {history}
                </Text>

                <Text size="md" mt="md">
                    <strong>Известные экспонаты:</strong> {notableExhibits}
                </Text>

                <Text size="md" mt="md">
                    <strong>Часы работы:</strong> {visitingHours}
                </Text>

                <Text size="md" mt="md">
                    <strong>Контактная информация:</strong> {contactInfo}
                </Text>
            </Modal>
        </>
    );
}
