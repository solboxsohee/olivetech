'use client';
import React from 'react';
import Image from 'next/image';
import styles from '@/app/_styles/card.module.css';
import Link from 'next/link';

export default function cardNews({ cardLink, imgSrc, cardHead, cardDate }) {
    return (
        <Link href={cardLink} className={styles.cardNews}>
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
        </Link>
    );
}
