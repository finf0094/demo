import React from 'react';
import { Container, Title, Text, List, ThemeIcon } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import styles from './AboutUs.module.css';

export function AboutUs() {
  return (
    <Container className={styles.wrapper}>
      <Title className={styles.title}>О нас</Title>
      <Text className={styles.description}>
        Мы предоставляем подробную информацию о музеях и их коллекциях. Наша миссия:
      </Text>
      <List
        spacing="sm"
        size="md"
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconCheck size="1rem" />
          </ThemeIcon>
        }
      >
        <List.Item>Поддержка культурного наследия</List.Item>
        <List.Item>Информирование о новых выставках</List.Item>
        <List.Item>Обеспечение удобного доступа к информации о музеях</List.Item>
        <List.Item>Продвижение культурного образования</List.Item>
      </List>
    </Container>
  );
}
