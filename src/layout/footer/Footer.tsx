import { Text, Container, ActionIcon, Group, rem, Image } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './Footer.module.css';

const data = [
  {
    title: 'О нас',
    links: [
      { label: 'Главная', link: '#' },
      { label: 'Список Музеев', link: '#' },
    ],
  },
  {
    title: 'Режим работы',
    links: [
      { label: 'Понедельник - Пятница: 9:00 - 18:00', link: '#' },
      { label: 'Суббота: 10:00 - 16:00', link: '#' },
      { label: 'Воскресенье: выходной', link: '#' },
    ],
  },
  {
    title: 'Контакты',
    links: [
      { label: 'Почта: hello@email.com', link: '#' },
      { label: 'Телефон: +7 (777) 777 77 77', link: '#' },
      { label: 'Адрес: Атырау Сатпаева 3333', link: '#' },
      { label: 'Рабочее время 8 a.m. – 11 p.m.', link: '#' },
    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image width={30} height={30} src="public/images/logo.png" />
          <Text size="xs" color="dimmed" className={classes.description}>
            Описания для сайта
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2024 PSVK. Все права защищены.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
