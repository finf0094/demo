import React, { useState } from 'react';
import { SimpleGrid, Container, Title, Text, Select } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { MuseumItem } from '../MuseumItem/MuseumItem';

const museums = [
    {
        image: 'public/images/1.jpg',
        name: 'Museum 1',
        description: 'This is a description of Museum 1.',
        location: 'City A',
        history: 'Museum 1 was established in 1900 and has a rich history.',
        notableExhibits: 'Exhibit A, Exhibit B',
        visitingHours: 'Mon-Fri: 9am-5pm',
        contactInfo: 'Phone: 123-456-7890, Email: info@museum1.com',
        rating: 3,
        category: 'Исторический музей',
    },
    {
        image: 'public/images/2.jpg',
        name: 'Museum 2',
        description: 'This is a description of Museum 2.',
        location: 'City B',
        history: 'Museum 2 was founded in 1920 and is known for its collection of modern art.',
        notableExhibits: 'Exhibit C, Exhibit D',
        visitingHours: 'Tue-Sun: 10am-6pm',
        contactInfo: 'Phone: 098-765-4321, Email: info@museum2.com',
        rating: 5,
        category: 'Искусство современности',
    },
    {
        image: 'public/images/3.jpg',
        name: 'Museum 3',
        description: 'This is a description of Museum 3.',
        location: 'City C',
        history: 'Museum 3 is a landmark with a focus on local history.',
        notableExhibits: 'Exhibit E, Exhibit F',
        visitingHours: 'Wed-Sun: 10am-5pm',
        contactInfo: 'Phone: 111-222-3333, Email: info@museum3.com',
        rating: 4.2,
        category: 'Национальный парк',
    },
    {
        image: 'public/images/4.jpg',
        name: 'Museum 4',
        description: 'This is a description of Museum 4.',
        location: 'City D',
        history: 'Museum 4 offers a unique view of the 19th century.',
        notableExhibits: 'Exhibit G, Exhibit H',
        visitingHours: 'Mon-Sat: 9am-4pm',
        contactInfo: 'Phone: 444-555-6666, Email: info@museum4.com',
        rating: 4.1,
        category: 'Искусство современности',
    },
];

const categories = ['Все', 'Исторический музей', 'Искусство современности', 'Национальный парк'];

export function MuseumList() {
    const gallery = museums.map(item => item.image);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [selectedCategory, setSelectedCategory] = useState('Все');

    const filteredMuseums = selectedCategory === 'Все' ? museums : museums.filter(museum => museum.category === selectedCategory);

    return (
        <Container>
            <Title ta="center" mt={50}>
                Список{' '}
                <Text
                  inherit
                  variant="gradient"
                  component="span"
                  gradient={{
                        from: 'blue',
                        to: 'yellow',
                    }}>
                    Музеев
                </Text>
            </Title>
            <Select
              mt={20}
              value={selectedCategory}
              onChange={value => value && setSelectedCategory(value)}
              data={categories}
            />
            <SimpleGrid
              cols={isMobile ? 1 : 3}
              spacing="lg"
              mt={30}
            >
                {filteredMuseums.map((museum, index) => (
                    <div key={index}>
                        <MuseumItem
                          rating={museum.rating}
                          gallery={gallery}
                          image={museum.image}
                          name={museum.name}
                          description={museum.description}
                          location={museum.location}
                          history={museum.history}
                          notableExhibits={museum.notableExhibits}
                          visitingHours={museum.visitingHours}
                          contactInfo={museum.contactInfo}
                        />
                    </div>
                ))}
            </SimpleGrid>
        </Container>
    );
}
