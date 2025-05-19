'use client';
import React from 'react';
import PageTitle from '@/app/_components/pageLayout/pageTitle';
import { Flex } from 'antd';
import CardNews from '@/app/_components/cards/cardNews';
import SecondMenu from '@/app/_components/layouts/secondMenu';

export default function News() {
    const secondMenuLinks = [
        { href: '/company/about', name: '소개' },
        { href: '/company/history', name: '연혁' },
        { href: '/company/news', name: '뉴스' },
        { href: '/company/location', name: '오시는 길' },
    ];
    return (
        <>
            <PageTitle
                BlueTitle={'News'}
                MainTitle={'올리브텍의 새로운 소식을'}
                MainBoldTitle={'알려드립니다.'}
            />
            <SecondMenu menuName={'올리브텍 소개'} links={secondMenuLinks} />
            <main className="main-content">
                <Flex justify="space-between" wrap>
                    <CardNews
                        imgSrc="/news/koreg.png"
                        cardHead="신용보증재단중앙회, 공공마이데이터 서비스에 SecuPDS 솔루션 도입"
                        cardDate="2024-01-01"
                        cardLink="/company/news/koreg"
                    />
                    <CardNews
                        imgSrc="/news/youth.jpg"
                        cardHead="국무조정실, ‘온통청년’ 플랫폼에 SecuPDS 솔루션 도입"
                        cardDate="2024-01-01"
                        cardLink="/company/news/youth"
                    />
                    <CardNews
                        imgSrc="/news/kamco.jpg"
                        cardHead="자산관리공사(캠코), 채무조정신청 서비스에 SecuPDS 솔루션 도입"
                        cardDate="2024-01-01"
                        cardLink="/company/news/kamco"
                    />
                    <CardNews
                        imgSrc="/news/work.jpg"
                        cardHead="근로복지공단, 산재보상 서비스에 SecuPDS 솔루션 도입"
                        cardDate="2024-01-01"
                        cardLink="/company/news/work"
                    />
                    <CardNews
                        imgSrc="/news/lh.jpg"
                        cardHead="LH,임대주택 신청 서비스에 SecuPDS 솔루션 도입"
                        cardDate="2024-01-01"
                        cardLink="/company/news/lh"
                    />
                    <CardNews
                        imgSrc="/news/products.jpg"
                        cardHead="올리브텍 PDS 솔루션 SecuPDS v1.0 조달청 우수제품 지정"
                        cardDate="2024-01-01"
                        cardLink="/company/news/products"
                    />
                </Flex>
            </main>
        </>
    );
}
