'use client';
import React from 'react';
import HomeCarousel from '@/app/_components/home/homeCarousel';
import HomeTitle from '@/app/_components/home/homeTitle';
import HomeNews from '@/app/_components/home/homeNews';
import HomeCase from '@/app/_components/home/homeCase';
import HomeSolution from '@/app/_components/home/homeSolution';
import HomeTech from '@/app/_components/home/homeTech';

export default function HomePage() {
    return (
        <>
            <HomeCarousel />
            <HomeTitle engTitle={'Solutions'} korTitle={'스토리지 보안 기술을 선도합니다.'} />
            <HomeSolution />
            <HomeTitle engTitle={'Case Study'} korTitle={'다양한 분야에서 함께 합니다.'} />
            <HomeCase />
            <HomeTech />
            <HomeTitle engTitle={'News'} korTitle={'올리브텍 소식을 알려드립니다'} />
            <HomeNews />
            <HomeTitle engTitle={'Customer'} korTitle={'함께 도약하고 성장합니다.'} />
        </>
    );
}
