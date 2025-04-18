'use client';
import React from 'react';
import PageTitle from '@/app/_components/pageLayout/pageTitle';
import Image from 'next/image';
import styles from '@/app/_styles/customer.module.css';
import SecondMenu from '@/app/_components/layouts/secondMenu';

export default function Client() {
    const secondMenuLinks = [
        { href: '/cases/client', name: 'WORM 스토리지' },
        { href: '/cases/pdsClient', name: 'SecuPDS' },
        { href: '/cases/example', name: '적용 사례' },
    ];
    return (
        <>
            <PageTitle
                BlueTitle={'Customers'}
                MainTitle={'더 큰 성취를 향해'}
                MainBoldTitle={'함께 나아갑니다.'}
            />
            <SecondMenu menuName={'고객 사례'} links={secondMenuLinks} />
            <main className="main-content">
                <article className={styles.logoCategory}>
                    <h1 className={styles.logoHead}>정부기관</h1>
                    <section className={styles.logoWrap}>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/govern/govern (1).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/govern/govern (2).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/govern/govern (3).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/govern/govern (4).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/govern/govern (5).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/govern/govern (6).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/govern/govern (7).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/govern/govern (8).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/govern/govern (9).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/govern/govern (10).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/govern/govern (11).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/govern/govern (12).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/govern/govern (13).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/govern/govern (14).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/govern/govern (15).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/govern/govern (16).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/govern/govern (17).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/govern/govern (18).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/govern/govern (19).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/govern/govern (20).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </section>
                </article>
                <article className={styles.logoCategory}>
                    <h1 className={styles.logoHead}>공공기관</h1>
                    <section className={styles.logoWrap}>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (1).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (2).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (3).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (4).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (5).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (6).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (7).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (8).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (9).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (10).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (11).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (12).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (13).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (14).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (15).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (16).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (17).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (18).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (19).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (20).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (21).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (22).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (23).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (24).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (25).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (26).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (27).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (28).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (29).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (30).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (31).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (32).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (33).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (34).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (35).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (36).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (37).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (38).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (39).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (40).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (41).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (42).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (43).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (44).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (45).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/public/customer (46).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </section>
                </article>
                <article className={styles.logoCategory}>
                    <h1 className={styles.logoHead}>지자체</h1>
                    <section className={styles.logoWrap}>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/local/local (1).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/local/local (2).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/local/local (3).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/local/local (4).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/local/local (5).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/local/local (6).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/local/local (7).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/local/local (8).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/local/local (9).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/local/local (10).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/local/local (11).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/local/local (12).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/local/local (13).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/local/local (14).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/local/local (15).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/local/local (16).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/local/local (17).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/local/local (18).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/local/local (19).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </section>
                </article>
                <article className={styles.logoCategory}>
                    <h1 className={styles.logoHead}>교육청</h1>
                    <section className={styles.logoWrap}>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/oe/oe (1).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/oe/oe (2).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/oe/oe (3).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/oe/oe (4).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/oe/oe (5).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/oe/oe (6).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/oe/oe (7).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/oe/oe (8).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/oe/oe (9).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/oe/oe (10).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/oe/oe (11).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/oe/oe (12).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/oe/oe (13).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/oe/oe (14).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/oe/oe (15).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/oe/oe (16).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/oe/oe (17).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                    </section>
                </article>
                <article className={styles.logoCategory}>
                    <h1 className={styles.logoHead}>학교 · 의료</h1>
                    <section className={styles.logoWrap}>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/medi/medi (1).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/medi/medi (2).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/medi/medi (3).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/medi/medi (4).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/medi/medi (5).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/medi/medi (6).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/medi/medi (7).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/medi/medi (8).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/medi/medi (9).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/medi/medi (10).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/medi/medi (11).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/medi/medi (12).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/medi/medi (13).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                    </section>
                </article>
                <article className={styles.logoCategory}>
                    <h1 className={styles.logoHead}>제조 · 유통</h1>
                    <section className={styles.logoWrap}>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (1).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (2).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (3).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (4).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (5).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (6).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (7).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (8).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (9).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (10).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (11).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (12).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (13).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (14).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (15).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (16).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (17).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (18).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (19).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (20).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (21).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (22).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (23).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (24).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (25).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (26).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (27).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (28).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (29).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (30).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (31).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (32).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (33).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (34).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (35).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (36).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (37).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (38).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (39).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (40).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (41).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (42).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (43).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (44).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (45).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/manufac/manufac (46).jpg'}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt="logo"
                            />
                        </div>
                    </section>
                </article>
            </main>
        </>
    );
}
