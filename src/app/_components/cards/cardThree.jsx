'use client';
import React from 'react';
import Image from 'next/image';
import styles from '@/app/_styles/card.module.css';
import Link from 'next/link';

export default function CardThree({ cardLink, imgSrc, cardHead }) {
    return (
        <Link href={cardLink} className={styles.cardThree}>
            <div className={styles.imgThreeWrap}>
                <Image
                    className={styles.cardImg}
                    src={imgSrc}
                    alt="img"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <h1 className={styles.cardHead}>{cardHead}</h1>
        </Link>
    );
}
