import React from 'react';
import HomeTitle from '@/app/_components/home/homeTitle';
import { Flex } from 'antd';
import styles from '@/app/_styles/home.module.css';
// 카운팅 애니메이션 구현
import { useState, useEffect, useRef } from 'react';

const Counter = ({ start, end, duration }) => {
    const [count, setCount] = useState(start);
    const startTimeRef = useRef(null);

    const updateCount = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTimeRef.current;
        const progress = Math.min(elapsedTime / duration, 1); // 1이 최대값

        const currentCount = Math.floor(start + (end - start) * progress);
        setCount(currentCount);

        if (progress < 1) {
            requestAnimationFrame(updateCount);
        }
    };

    useEffect(() => {
        if (start !== end) {
            startTimeRef.current = Date.now();
            requestAnimationFrame(updateCount);
        }
    }, [start, end, duration]);

    return <p className={styles.countNum}>{count}</p>;
};

export default function HomeTech() {
    const [inView, setInView] = useState(false);
    const observerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
            } else {
                setInView(false); // 스크롤 시 다시 상태 초기화
            }
        });

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, []);

    useEffect(() => {}, [inView]);

    return (
        <article className={styles.homeTech} ref={observerRef}>
            <div className="main-content">
                <HomeTitle
                    engTitle="Technology"
                    korTitle="국내 최다의 고객, 시장 점유율이 증명하는 올리브텍의 기술력"
                    isWhite={true}
                />
                <Flex wrap justify="space-between" style={{ marginTop: 60 }}>
                    <section className="count_one">
                        <Flex vertical align="center" justify="center">
                            <h1 className={styles.inline}>
                                {inView && <Counter start={0} end={500} duration={1000} />}
                                <span className={styles.count_txt}>+</span>
                            </h1>
                            <p className={styles.countName}>WORM스토리지 도입 고객</p>
                        </Flex>
                    </section>
                    <section className="count_two">
                        <Flex vertical align="center" justify="center">
                            <h1 className={styles.inline}>
                                {inView && <Counter start={0} end={10} duration={1000} />}
                            </h1>
                            <p className={styles.countName}>기술 관련 특허</p>
                        </Flex>
                    </section>
                    <section className="count_three">
                        <Flex vertical align="center" justify="center">
                            <h1 className={styles.inline}>
                                {inView && <Counter start={0} end={5} duration={1000} />}
                                <span className={styles.count_txt}>천만+</span>
                            </h1>
                            <p className={styles.countName}>마이데이터 월 처리 건</p>
                        </Flex>
                    </section>
                    <section className={styles.count_four}>
                        <Flex vertical align="center" justify="center">
                            <h1 className={styles.inline}>
                                {inView && <Counter start={0} end={95} duration={1000} />}
                                <span className={styles.count_txt}>%</span>
                            </h1>
                            <p className={styles.countName}>마이데이터 시장 점유율</p>
                        </Flex>
                    </section>
                </Flex>
            </div>
        </article>
    );
}
