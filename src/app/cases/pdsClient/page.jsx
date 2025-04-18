'use client';
import React from 'react';
import PageTitle from '@/app/_components/pageLayout/pageTitle';
import Image from 'next/image';
import styles from '@/app/_styles/customer.module.css';
import SecondMenu from '@/app/_components/layouts/secondMenu';

export default function PdsClient() {
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
                                src={'/customer/secupds/gov (1).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/gov (2).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/gov (3).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/gov (4).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/gov (5).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/gov (6).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/gov (7).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/gov (8).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/gov (9).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/gov (10).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/gov (11).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/gov (12).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/gov (13).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/gov (14).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/gov (15).jpg'}
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
                                src={'/customer/secupds/pub (1).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/pub (2).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/pub (3).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/pub (4).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/pub (5).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/pub (6).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/pub (7).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/pub (8).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/pub (9).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/pub (10).jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </section>
                </article>
                <article className={styles.logoCategory}>
                    <h1 className={styles.logoHead}>금융</h1>
                    <section className={styles.logoWrap}>
                        <div className={styles.logoBox}>
                            <Image
                                src={'/customer/secupds/koreg.jpg'}
                                alt="logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </section>
                </article>
            </main>
        </>
    );
}
