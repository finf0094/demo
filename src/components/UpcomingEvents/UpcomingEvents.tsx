import React from 'react';
import {Card, Text, Badge, Grid, Container} from '@mantine/core';

const eventList = [
    { title: 'Конференция', date: '2024-07-15', location: 'City Hall' },
    { title: 'Воркшоп', date: '2024-08-10', location: 'Convention Center' },
    { title: 'Семинар', date: '2024-09-05', location: 'Community Center' },
    { title: 'Конференция', date: '2024-09-05', location: 'Convention Center' },
    { title: 'Воркшоп', date: '2024-09-05', location: 'City Hall' },
];

export const UpcomingEvents = () => (
        <Container style={{ marginTop: 20 }}>
            <h2>Upcoming Events</h2>
            <Grid>
                {eventList.map((event, index) => (
                    <Grid.Col span={4} key={index}>
                        <Card shadow="sm" style={{ marginBottom: 20 }}>
                            <Text size="xl" w={500} style={{ marginBottom: 10 }}>
                                {event.title}
                            </Text>
                            <Text size="sm" color="gray" style={{ marginBottom: 5 }}>
                                Дата: {event.date}
                            </Text>
                            <Text size="sm" color="gray">
                                Локация: {event.location}
                            </Text>
                            <Badge color="blue" style={{ marginTop: 10 }}>Ожидается</Badge>
                        </Card>
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    );
