import { Title, Text, Container } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import classes from './Welcome.module.css';

const items = [
    {
        src: 'public/images/1.jpg',
        altText: 'Slide 1',
        caption: 'Slide 1 Description',
    },
    {
        src: 'public/images/2.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2 Description',
    },
    {
        src: 'public/images/3.jpg',
        altText: 'Slide 3',
        caption: 'Slide 3 Description',
    },
];

export function Welcome() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
    return (
        <Container mx="auto">
            <Title className={classes.title} ta="center" mt={100}>
                Добро{' '}
                <Text
                  inherit
                  variant="gradient"
                  component="span"
                  gradient={{
                        from: 'blue',
                        to: 'yellow',
                    }}>
                    пожаловать
                </Text>
            </Title>
            <Carousel
              withIndicators
              height={400}
              slideSize="100%"
              slideGap="md"
              loop
              align="start"
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
              style={{ maxWidth: '100%', overflow: 'hidden' }}
            >
                {items.map((item, index) => (
                    <Carousel.Slide key={index}>
                        <img
                          src={item.src}
                          alt={item.altText}
                          style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                            }} />
                        <div className={classes.carouselCaption}>
                            <h3>{item.altText}</h3>
                            <p>{item.caption}</p>
                        </div>
                    </Carousel.Slide>
                ))}
            </Carousel>
        </Container>
    );
}
