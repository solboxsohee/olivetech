"use client";

import React from 'react';
import { Layout, Flex } from 'antd';
import Image from 'next/image';
import LogoBlue from '$/logo/logo_blue.svg';
import Menu from '@/app/_components/layouts/menu.jsx';

import '@/app/_styles/header.css';

const { Header } = Layout;


export default function MainHeader() {
    return (
        <>
            <Header className='header_style'>
                <Flex justify="space-between" align='center' style={{ width: "100%" }}>
                    <Image src={LogoBlue} alt='logo' width={187} />
                    <Menu />
                </Flex>
            </Header>   
        </>
    );
}

