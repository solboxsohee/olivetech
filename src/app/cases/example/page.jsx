'use client';
import React from 'react';
import PageTitle from '@/app/_components/pageLayout/pageTitle';
import { Flex } from 'antd';
import CardNews from '@/app/_components/cards/cardNews';

export default function Example() {
    return (
        <>
            <PageTitle
                BlueTitle={'Case Study'}
                MainTitle={'올리브텍의 기술로'}
                MainBoldTitle={'솔루션을 제시합니다.'}
            />
            <main className="main-content">
                <Flex justify="space-between" wrap>
                    <CardNews
                        imgSrc="/cases/mydata.jpg"
                        cardHead="[행정안전부] 공공마이데이터 유통 시스템 구축·운영 "
                        cardDate="2024-01-01"
                        cardLink="example/adm"
                    />
                    <CardNews
                        imgSrc="/cases/pohang.jpg"
                        cardHead="[포항테크노파크] 2024년 제조업 AI 융합 기반 조성"
                        cardDate="2024-01-01"
                        cardLink="example/pohang"
                    />
                    <CardNews
                        imgSrc="/cases/gyeongsang.png"
                        cardHead="[경상남도] 공공마이데이터 활용서비스 확대, 지원"
                        cardDate="2024-01-01"
                        cardLink="example/gyeongsang"
                    />
                </Flex>
            </main>
        </>
    );
}
