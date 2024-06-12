import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll, useSpring,
    useTransform,
    useVelocity,
    wrap,
} from 'framer-motion';
import { useRef } from 'react';
import { Text } from '@mantine/core';

import styles from './ParallaxText.module.css'

interface ParallaxTextProps {
    children: string;
    baseVelocity: number;
}

export function ParallaxText({ children, baseVelocity }: ParallaxTextProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className={styles.parallax}>
            <motion.div className={styles.scroller} style={{ x }}>
                <Text size="xl" className={styles.title}>
                    {children} {children} {children} {children}
                </Text>
            </motion.div>
        </div>
    );
}
