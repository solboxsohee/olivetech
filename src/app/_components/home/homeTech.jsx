import React from 'react';
import HomeTitle from '@/app/_components/home/homeTitle';
import { Flex } from 'antd';
import styles from '@/app/_styles/home.module.css';

export default function HomeTech() {
    return (
        <article className={styles.homeTech}>
            <div className="main-content">
                <HomeTitle
                    engTitle="Technology"
                    korTitle="국내 최다의 고객, 시장 점유율이 증명하는 올리브텍의 기술력"
                    isWhite={true}
                />
                <Flex wrap justify="space-between" style={{ marginTop: 60 }}>
                    <section>
                        <Flex vertical align="center" justify="center">
                            <p className={styles.countNum}>500+</p>
                            <p className={styles.countName}>WORM스토리지 도입 고객</p>
                        </Flex>
                    </section>
                    <section>
                        <Flex vertical align="center" justify="center">
                            <p className={styles.countNum}>10</p>
                            <p className={styles.countName}>기술 관련 특허</p>
                        </Flex>
                    </section>
                    <section>
                        <Flex vertical align="center" justify="center">
                            <p className={styles.countNum}>5천만+</p>
                            <p className={styles.countName}>마이데이터 월 처리 건</p>
                        </Flex>
                    </section>
                    <section>
                        <Flex vertical align="center" justify="center">
                            <p className={styles.countNum}>95%</p>
                            <p className={styles.countName}>마이데이터 시장 점유율</p>
                        </Flex>
                    </section>
                </Flex>
            </div>
        </article>
    );
}
