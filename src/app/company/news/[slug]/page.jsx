import React from 'react';
import { notFound } from 'next/navigation';
import newsData from '@/data/newsData';
import style from '@/app/_styles/view.module.css';
import Image from 'next/image';

export function generateStaticParams() {
    return Object.keys(newsData).map((slug) => ({ slug }));
}

export default function CardDetail({ params }) {
    const { slug } = params;
    const news = newsData[slug];

    if (!news) return notFound();

    return (
        <main className="main-content">
            <article className={style.viewNews}>
                <h1>{news.title}</h1>
                <p className={style.date}>{news.date}</p>
                <div className={style.imgWrap}>
                    <Image
                        src={news.imgSrc}
                        alt="news_image"
                        fill
                        style={{ objectFit: 'contain', objectPosition: 'left' }}
                    />
                </div>
                <p style={{ whiteSpace: 'pre-line' }}>{news.content}</p>
            </article>
        </main>
    );
}
