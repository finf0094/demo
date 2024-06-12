import React, { useState } from 'react';
import { Container, Image, SimpleGrid, Select } from '@mantine/core';

const images = [
    { src: 'public/images/1.jpg', location: 'Астана' },
    { src: 'public/images/2.jpg', location: 'Астана' },
    { src: 'public/images/3.jpg', location: 'Атырау' },
    { src: 'public/images/4.jpg', location: 'Алматы' },
    { src: 'public/images/5.jpg', location: 'Атырау' },
    { src: 'public/images/6.jpg', location: 'Астана' },
    { src: 'public/images/7.jpg', location: 'Алматы' },
    { src: 'public/images/8.jpg', location: 'Астана' },
    { src: 'public/images/9.jpg', location: 'Атырау' },
    { src: 'public/images/10.jpg', location: 'Алматы' },
    { src: 'public/images/11.jpg', location: 'Атырау' },
    { src: 'public/images/12.jpg', location: 'Алматы' },
];

export function Gallery() {
    const [selectedLocation, setSelectedLocation] = useState('All');

    const filteredImages = selectedLocation === 'All' ? images : images.filter(image => image.location === selectedLocation);

    return (
        <Container size="xl">
            <Select
              data={['All', 'Астана', 'Атырау', 'Алматы']}
              value={selectedLocation}
              onChange={value => value && setSelectedLocation(value)}
              style={{ marginBottom: '20px' }}
              mt={20}
            />

            <SimpleGrid
              cols={3}
              spacing="md"
              pt={20}
            >
                {filteredImages.map((image, index) => (
                    <Image key={index} src={image.src} alt={`Gallery image ${index + 1}`} h={200} radius="md" />
                ))}
            </SimpleGrid>
        </Container>
    );
}
