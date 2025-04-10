'use client';
import React from 'react';
import Image from 'next/image';
import styles from '@/app/_styles/card.module.css';

export default function CardNews({ imgSrc, cardHead, cardDate }) {
    return (
        <article className={styles.cardNews}>
            <div className={styles.imgWrap}>
                <Image
                    className={styles.cardImg}
                    src={imgSrc}
                    alt="img"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <h1 className={styles.cardHead}>{cardHead}</h1>
            <p className={styles.cardDate}>{cardDate}</p>
        </article>
    );
}
