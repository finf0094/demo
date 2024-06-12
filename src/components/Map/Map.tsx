import React from 'react';
import styles from './Map.module.css';

export const Map = () => (
    <div className={styles.map}>
        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
        <iframe
          src="https://www.google.com/maps/d/embed?mid=19HYBq8lxB1LbuHp-VGMz39YLPNs&hl=ru&ehbc=2E312F"
          width="100%"
          height="700">
        </iframe>
    </div>
);
