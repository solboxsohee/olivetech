import React from 'react';

export default function Menu() {
    return (
        <ul className='menu_style'>
            <li>솔루션
                <ul className='sec_menu'>
                    <li>WORM 스토리지</li>
                    <li>보안저장소(PDS)</li>
                </ul>
            </li>
            <li>고객 사례
                <ul className='sec_menu'>
                    <li>고객사</li>
                    <li>적용 사례</li>
                </ul>
            </li> 
            <li>고객 지원
                <ul className='sec_menu'>
                    <li>소개 자료</li>
                    <li>기술 자료</li>
                    <li>S/W 다운로드</li>
                    <li>FAQ</li>
                </ul>
            </li>
            <li>올리브텍 소개
                <ul className='sec_menu'>
                    <li>소개</li>
                    <li>연혁</li>
                    <li>뉴스</li>
                    <li>오시는 길</li>
                </ul>
            </li>
        </ul>
    );
}

