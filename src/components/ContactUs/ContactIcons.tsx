import React from 'react';
import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import styles from './ContactIcons.module.css'; // Убедитесь, что путь к CSS файлу верный

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={styles.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={styles.title}>
          {title}
        </Text>
        <Text className={styles.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: 'Почта', description: 'hello@email.com', icon: IconAt },
  { title: 'Телефон', description: '+7 (777) 777 77 77', icon: IconPhone },
  { title: 'Адрес', description: 'Атырау Сатпаева 3333', icon: IconMapPin },
  { title: 'Рабочее время', description: '8 a.m. – 11 p.m.', icon: IconSun },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}
