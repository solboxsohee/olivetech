'use client';
import React from 'react';
import { Tabs } from 'antd';
import PageTitle from '@/app/_components/pageLayout/pageTitle';
import FaqWormStorage from '@/app/_components/faq/faqWormStorage';
import SecuPds from '@/app/_components/faq/secuPds';

const items = [
    {
        key: '1',
        label: <p>WORM Storage</p>,
        children: <FaqWormStorage />,
    },
    {
        key: '2',
        label: <p>SecuPDS</p>,
        children: <SecuPds />,
    },
];

export default function Faq() {
    return (
        <>
            <PageTitle
                BlueTitle={'FAQ'}
                MainTitle={'자주 찾는 질문'}
                MainBoldTitle={'궁금한 사항을 확인하세요.'}
            />
            <main className="main-content">
                <Tabs defaultActiveKey="1" items={items} />
            </main>
        </>
    );
}
