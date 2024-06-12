import React, { useState, useEffect, RefObject } from 'react';
import { Container, Group, Burger, Image, Text, Drawer, Portal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';

interface HeaderSimpleProps {
    museumRefs: RefObject<HTMLDivElement>[];
    contactRef: RefObject<HTMLDivElement>;
    infoTabsRef: RefObject<HTMLDivElement>;
}

const links = [
    {
        link: '#main',
        label: 'Главное',
    },
    {
        link: '#about-us',
        label: 'О нас',
    },
    {
        link: '#museum-list',
        label: 'Список музеев',
    },
    {
        link: '#contact-us',
        label: 'Связаться с нами',
    },
    {
        link: '#info-tabs',
        label: 'Информация',
    },
];

const contactInfo = [
    {
        value: '+7 (777) 777-77-77',
    },
    {
        value: 'knowledge@mail.ru',
    },
];

export function Header({
                           museumRefs,
                           contactRef,
                           infoTabsRef,
                       }: HeaderSimpleProps) {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const scrollToSection = (index: number) => {
        if (index === 0) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        } else if (index === 1) {
            document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
        } else if (index === 2) {
            museumRefs[0]?.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (index === 3) {
            contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (index === 4) {
            infoTabsRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        const mainSection = document.getElementById('main');
        const aboutUsSection = document.getElementById('about-us');
        const museumListSection = document.getElementById('museum-list');
        const contactSection = document.getElementById('contact-us');
        const infoTabsSection = document.getElementById('info-tabs');

        if (
            mainSection &&
            aboutUsSection &&
            museumListSection &&
            contactSection &&
            infoTabsSection
        ) {
            if (scrollPosition < aboutUsSection.offsetTop) {
                setActive('#main');
            } else if (scrollPosition < museumListSection.offsetTop) {
                setActive('#about-us');
            } else if (scrollPosition < contactSection.offsetTop) {
                setActive('#museum-list');
            } else if (scrollPosition < infoTabsSection.offsetTop) {
                setActive('#contact-us');
            } else {
                setActive('#info-tabs');
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const items = links.map((link, index) => (
        <a
          key={link.label}
          href={link.link}
          className={classes.link}
          data-active={active === link.link || undefined}
          onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
                scrollToSection(index);
            }}
        >
            {link.label}
        </a>
    ));

    const contactItems = contactInfo.map((info) => (
        <Text size="sm">{info.value}</Text>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <Image src="public/images/logo.png" width={50} height={50} />
                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>
                <Group gap={5} visibleFrom="xs">
                    {contactItems}
                </Group>
                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
            <Portal>
                <Drawer
                  opened={opened}
                  onClose={toggle}
                  position="left"
                  size="lg"
                >
                    <Group grow gap={5} className={classes.burgerMenu}>
                        {items}
                    </Group>
                </Drawer>
            </Portal>
        </header>
    );
}
