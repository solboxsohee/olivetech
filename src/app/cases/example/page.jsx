'use client';
import React from 'react';
import PageTitle from '@/app/_components/pageLayout/pageTitle';
import { Flex } from 'antd';
import CardNews from '@/app/_components/cards/cardNews';
import SecondMenu from '@/app/_components/layouts/secondMenu';

export default function Example() {
    const secondMenuLinks = [
        { href: '/cases/client', name: 'WORM 스토리지' },
        { href: '/cases/pdsClient', name: 'SecuPDS' },
        { href: '/cases/example', name: '적용 사례' },
    ];
    return (
        <>
            <PageTitle
                BlueTitle={'Case Study'}
                MainTitle={'올리브텍의 기술로'}
                MainBoldTitle={'솔루션을 제시합니다.'}
            />
            <SecondMenu menuName={'고객 사례'} links={secondMenuLinks} />
            <main className="main-content">
                <Flex justify="space-between" wrap data-aos="fade-up">
                    <CardNews
                        imgSrc="/cases/mydata.jpg"
                        cardHead="[행정안전부] 공공마이데이터 유통 시스템 구축·운영 "
                        cardDate="2024-01-01"
                        cardLink="/cases/example/adm"
                    />
                    <CardNews
                        imgSrc="/cases/pohang.jpg"
                        cardHead="[포항테크노파크] 2024년 제조업 AI 융합 기반 조성"
                        cardDate="2024-01-01"
                        cardLink="/cases/example/pohang"
                    />
                    <CardNews
                        imgSrc="/cases/gyeongsang.png"
                        cardHead="[경상남도] 공공마이데이터 활용서비스 확대, 지원"
                        cardDate="2024-01-01"
                        cardLink="/cases/example/gyeongsang"
                    />
                </Flex>
            </main>
        </>
    );
}
