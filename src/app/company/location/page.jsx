'use client';
import React from 'react';
import PageTitle from '@/app/_components/pageLayout/pageTitle';
import styles from '@/app/_styles/content.module.css';
import { Flex } from 'antd';
import SecondMenu from '@/app/_components/layouts/secondMenu';

export default function Location() {
    const secondMenuLinks = [
        { href: '/company/about', name: '소개' },
        { href: '/company/history', name: '연혁' },
        { href: '/company/news', name: '뉴스' },
        { href: '/company/location', name: '오시는 길' },
    ];
    return (
        <>
            <PageTitle
                BlueTitle={'Location'}
                MainTitle={'안내해드립니다.'}
                MainBoldTitle={'찾아오시는 길'}
            />
            <SecondMenu menuName={'올리브텍 소개'} links={secondMenuLinks} />
            <main className="main-content">
                <article className={styles.contentDivide}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.0585854375176!2d127.09198027668906!3d37.41209013296803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca7445e5fad67%3A0xbe24e5a632bb8541!2zKOyjvCnsmKzrpqzruIzthY0!5e0!3m2!1sko!2skr!4v1744099039291!5m2!1sko!2skr"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    ></iframe>
                </article>
                <article className={styles.contentDivide}>
                    <h2>주소</h2>
                    <p>
                        경기도 성남시 수정구 창업로 42, 530, 531호{' '}
                        <br className={styles.mobileBR} /> 판교 제2테크노밸리
                        <span className={styles.mobileNone}>(시흥동, 경기기업성장센터)</span>
                    </p>
                    <Flex className={styles.teleFaxEmail}>
                        <p>T. 031-726-4217</p>
                        <p>F. 031-726-4217</p>
                        <p>E. sales@olivetech.co.kr</p>
                    </Flex>
                </article>
                <article className={styles.contentDivide}>
                    <Flex className={styles.smDivide}>
                        <h3 className={styles.contentTitle}>
                            <b>버스를 이용하는 경우</b>
                        </h3>
                        <span>
                            <p>일반버스 : 55, 231, 310, 315, 382, 73-2, 87</p>
                            <p>광역버스 : 3100</p>
                        </span>
                    </Flex>
                    <Flex className={styles.smDivide}>
                        <h3 className={styles.contentTitle}>
                            <b>지하철을 이용하는 경우</b>
                        </h3>
                        <span>
                            <p>신분당선 : 판교역 2번출구</p>
                            <p>분당선 : 야탑역 이용</p>
                        </span>
                    </Flex>
                    <Flex className={styles.smDivide}>
                        <h3 className={styles.contentTitle}>
                            <b>자가용을 이용하는 경우</b>
                        </h3>
                        <span>
                            <p>
                                경부고속도로 진출 후 여수 교차로에서 서울, 판교 방향 시흥 사거리에서
                                기업지원허브 방면으로 우회전
                            </p>
                            <p>기업성장센터 지하주차장 주차</p>
                        </span>
                    </Flex>
                </article>
            </main>
        </>
    );
}
