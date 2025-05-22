import React from 'react';
import styles from '@/app/_styles/home.module.css';
import Link from 'next/link';

export default function HomeSolution() {
    return (
        <article className="main-content" data-aos="fade-up">
            <div className={styles.solutionWrap}>
                <Link href="/solution/worm/">
                    <section className={styles.wormCard} style={{ width: '100%' }}>
                        <h1 className={styles.cardTitle}>보안 WORM스토리지</h1>
                        <p className={styles.cardTxt}>
                            올리브텍 보안 WORM 스토리지는 데이터 무단 삭제 및 변조 방지 기능을 통해
                            조직의 핵심 데이터 및 컴플라이언스 데이터를 보호합니다.
                        </p>
                        <ul
                            className={styles.solMenu}
                            style={{ display: 'flex', justifyContent: 'space-between' }}
                        >
                            <div style={{ width: '48%' }}>
                                <li>물리적 WORM 스토리지</li>
                                <li>가상 WORM 스토리지</li>
                            </div>
                            <div style={{ width: '48%' }}>
                                <li>리눅스 WORM 스토리지</li>
                                <li>NAS</li>
                            </div>
                        </ul>
                    </section>
                </Link>
                <Link href="solution/pds">
                    <section className={styles.pdsCard} style={{ width: '100%' }}>
                        <h1 className={styles.cardTitle}>공공 마이데이터 PDS</h1>
                        <p className={styles.cardTxt}>
                            SecuPDS 공공마이데이터 PDS 솔루션으로 행정안전부 고시안의 “본인정보
                            보안저장소” 규격을 100% 만족합니다.
                        </p>
                        <ul className={styles.solMenu}>
                            <li>SecuPDS v1.0 Solution Suite </li>
                            <li>SecuPDS 전용 서버 A5000</li>
                        </ul>
                    </section>
                </Link>
            </div>
        </article>
    );
}
