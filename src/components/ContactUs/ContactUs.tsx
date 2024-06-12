import React, { useState } from 'react';
import {
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
    Notification,
} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { ContactIconsList } from './ContactIcons';
import styles from './ContactUs.module.css'; // Убедитесь, что путь к CSS файлу верный

const social = [
    {
        Icon: IconBrandTwitter,
        link: 'https://twitter.com/example',
    },
    {
        Icon: IconBrandYoutube,
        link: 'https://youtube.com/example',
    },
    {
        Icon: IconBrandInstagram,
        link: 'https://www.instagram.com/caspian_college/',
    },
];

export function ContactUs() {
    const [showNotification, setShowNotification] = useState(false);

    const handleSendMessage = () => {
        setShowNotification(true);

        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    const socialIcons = social.map(({
                                        Icon,
                                        link,
                                    }, index) => (
        <a href={link}>
            <ActionIcon key={index} size={28} className={styles.social} variant="transparent" rel="noopener noreferrer">
                <Icon size="1.4rem" stroke={1.5} />
            </ActionIcon>
        </a>
    ));

    return (
        <div className={styles.wrapper}>
            <SimpleGrid
              cols={{
                    base: 1,
                    sm: 2,
                }}
              spacing={50}>
                <div>
                    <Title className={styles.title}>Связаться с нами</Title>
                    <Text className={styles.description} mt="sm" mb={30}>
                        Оставьте свой адрес электронной почты, и мы свяжемся с вами в течение 24 часов.
                    </Text>

                    <ContactIconsList />

                    <Group mt="xl">{socialIcons}</Group>
                </div>
                <div className={styles.form}>
                    <TextInput
                      label="Почта"
                      placeholder="your@email.com"
                      required
                      classNames={{
                            input: styles.input,
                            label: styles.inputLabel,
                        }}
                    />
                    <TextInput
                      label="Имя"
                      placeholder="Кулуш Асхат"
                      mt="md"
                      classNames={{
                            input: styles.input,
                            label: styles.inputLabel,
                        }}
                    />
                    <Textarea
                      required
                      label="Ваше сообщение"
                      placeholder="Я хочу посетить Музей"
                      minRows={4}
                      mt="md"
                      classNames={{
                            input: styles.input,
                            label: styles.inputLabel,
                        }}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button className={styles.control} onClick={handleSendMessage}>
                            Отправить сообщение
                        </Button>
                    </Group>
                </div>
            </SimpleGrid>

            {showNotification && (
                <Notification
                  title="Сообщение отправлено"
                  color="teal"
                  onClose={() => setShowNotification(false)}
                  mt={20}
                >
                    Ваше сообщение успешно отправлено!
                </Notification>
            )}
        </div>
    );
}
