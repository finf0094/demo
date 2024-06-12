import { SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import { useState } from 'react';
import styles from './News.module.css';
import { SearchInput } from '@/components/SearchInput/SearchInput';

const mockdata = [
    {
        title: 'Новая выставка: Древние артефакты в Метрополитен-музее',
        image: 'public/images/1.jpg',
        date: '5 июня 2024 года',
    },
    {
        title: 'Виртуальный тур: Исследуйте ренессансные шедевры Лувра',
        image: 'public/images/2.jpg',
        date: '10 июня 2024 года',
    },
    {
        title: 'Названа сумма страховки самой загадочной картины Леонардо да Винчи',
        image: 'public/images/3.jpg',
        date: '12 июня 2024 года',
    },
    {
        title: 'Предстоящее событие: Симпозиум по современному искусству в Тейт Модерн',
        image: 'public/images/4.jpg',
        date: '18 июня 2024 года',
    },
    {
        title: 'Эксклюзивный просмотр: Египетские сокровища в Британском музее',
        image: 'public/images/5.jpg',
        date: '25 июня 2024 года',
    },
];

export function News() {
    const [searchText, setSearchText] = useState('');

    const filteredData = mockdata.filter(article =>
        article.title.toLowerCase().includes(searchText.toLowerCase())
    );

    const cards = filteredData.map((article) => (
        <Card key={article.title} p="md" radius="md" component="a" href="#" className={styles.card}>
            <AspectRatio ratio={1920 / 1080}>
                <Image src={article.image} />
            </AspectRatio>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
                {article.date}
            </Text>
            <Text className={styles.title} mt={5}>
                {article.title}
            </Text>
        </Card>
    ));

    return (
        <Container py="xl">
            <SearchInput
              placeholder="Поиск музеев..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <SimpleGrid cols={{
                base: 1,
                sm: 2,
            }}>{cards}
            </SimpleGrid>
        </Container>
    );
}
