import { ParallaxText } from '../ParallaxText/ParallaxText';

import styles from './ParallaxSection.module.css';

export const ParallaxSection = () => (
    <section className={styles.section}>
            <ParallaxText baseVelocity={-5}>Скидки 50% на все билеты музеи</ParallaxText>
            <ParallaxText baseVelocity={5}>Нас посещают более 500 человек за день</ParallaxText>
    </section>
);
