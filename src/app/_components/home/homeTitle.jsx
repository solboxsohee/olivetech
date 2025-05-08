import React from 'react';
import styles from '@/app/_styles/home.module.css';

export default function HomeTitle({ engTitle, korTitle, isWhite }) {
    const h1Style = {
        color: isWhite ? '#fff' : '#333',
    };

    return (
        <article className={styles.homeTitle}>
            <h2>{engTitle}</h2>
            <h1 style={h1Style}>{korTitle}</h1>
        </article>
    );
}
