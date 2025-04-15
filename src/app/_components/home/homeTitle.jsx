import React from 'react';
import styles from '@/app/_styles/home.module.css';

export default function HomeTitle({ engTitle, korTitle }) {
    return (
        <article className={styles.homeTitle}>
            <h2>{engTitle}</h2>
            <h1>{korTitle}</h1>
        </article>
    );
}
