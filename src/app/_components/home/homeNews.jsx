'use client';
import React from 'react';
import { Flex } from 'antd';
import CardThree from '@/app/_components/cards/cardThree';

export default function HomeNews() {
    return (
        <section className="main-content">
            <Flex gap={30}>
                <CardThree
                    imgSrc="/news/koreg.png"
                    cardHead="신용보증재단중앙회, 공공마이데이터 서비스에 SecuPDS 솔루션 도입"
                    cardLink="company/news/koreg"
                />
                <CardThree
                    imgSrc="/news/youth.jpg"
                    cardHead="국무조정실, ‘온통청년’ 플랫폼에 SecuPDS 솔루션 도입"
                    cardLink="company/news/youth"
                />
                <CardThree
                    imgSrc="/news/kamco.jpg"
                    cardHead="자산관리공사(캠코), 채무조정신청 서비스에 SecuPDS 솔루션 도입"
                    cardLink="company/news/kamco"
                />
            </Flex>
        </section>
    );
}
