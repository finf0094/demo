import React from 'react';
import { Tabs } from '@mantine/core';
import { Gallery } from '../Gallery/Gallery';
import { Overview } from '../Overview/Overview';
import { News } from '../News/News';
import { ReviewList } from '../ReviewList/ReviewList';
import { UpcomingEvents } from '../UpcomingEvents/UpcomingEvents';

export function InfoTabs() {
    return (
        <Tabs variant="outline" radius="md" defaultValue="gallery" style={{ paddingTop: 140 }}>
            <Tabs.List justify="center">
                <Tabs.Tab value="overview">Обзор</Tabs.Tab>
                <Tabs.Tab value="review">Отзывы</Tabs.Tab>
                <Tabs.Tab value="gallery">Галерея</Tabs.Tab>
                <Tabs.Tab value="news">Новости</Tabs.Tab>
                <Tabs.Tab value="events">Мероприятия</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="overview">
                <Overview />
            </Tabs.Panel>
            <Tabs.Panel value="review">
                <ReviewList />
            </Tabs.Panel>
            <Tabs.Panel value="gallery">
                <Gallery />
            </Tabs.Panel>
            <Tabs.Panel value="news">
                <News />
            </Tabs.Panel>
            <Tabs.Panel value="events">
                <UpcomingEvents />
            </Tabs.Panel>
        </Tabs>
    );
}
