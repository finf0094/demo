import React, {useRef} from 'react';
import YouTube from 'react-youtube';
import { Carousel } from '@mantine/carousel';
import styles from './Overview.module.css';

const items = [
    { src: '3mWhu95oIsQ' },
    { src: 'hPge9W1emZI' },
    { src: 'N9BMlyiSNeU' },
];

export function Overview() {
    return (
        <div className={styles.overview}>
            <Carousel
              withIndicators
              slideGap="md"
              loop
              align="start"
            >
                {items.map((item) => (
                    <Carousel.Slide key={item.src}>
                        <YouTube videoId={item.src} />
                    </Carousel.Slide>
                ))}
            </Carousel>
        </div>
    );
}
