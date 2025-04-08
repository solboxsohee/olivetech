import React from 'react';

import Link from 'next/link';
import styles from '@/app/_styles/menu.module.css';

export default function Menu() {
    return (
        <div className={styles.navContainer}>
            <ul className={styles.menuTrigger}>
                <li>솔루션</li>
                <li>고객 사례</li>
                <li>고객 지원</li>
                <li>올리브텍 소개</li>
            </ul>

            <div className={styles.megaMenu}>
                <div className={styles.column}>
                    <Link href="/solution/worm">WORM 스토리지</Link>
                    <Link href="/solution/pds">보안저장소(PDS)</Link>
                </div>
                <div className={styles.column}>
                    <Link href="/cases/client">고객사</Link>
                    <Link href="/cases/example">적용 사례</Link>
                </div>
                <div className={styles.column}>
                    <Link href="/support/intro">소개 자료</Link>
                    <Link href="/support/tech">기술 자료</Link>
                    <Link href="/support/download">S/W 다운로드</Link>
                    <Link href="/support/faq">FAQ</Link>
                    <Link href="/support/contact">문의하기</Link>
                </div>
                <div className={styles.column}>
                    <Link href="/company/about">소개</Link>
                    <Link href="/company/history">연혁</Link>
                    <Link href="/company/news">뉴스</Link>
                    <Link href="/company/location">오시는 길</Link>
                </div>
            </div>
        </div>
    );
}
