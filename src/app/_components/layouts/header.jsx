'use client';

import React from 'react';
import { Layout, Flex } from 'antd';
import Image from 'next/image';
import LogoBlue from '$/logo/logo_blue.svg';
import Menu from '@/app/_components/layouts/menu.jsx';
import styles from '@/app/_styles/MainHeader.module.css';
import Link from 'next/link';

const { Header } = Layout;

export default function MainHeader() {
    return (
        <>
            <Header className={styles.header} style={{ padding: 0 }}>
                <Flex justify="space-between" align="center" style={{ width: '88%' }}>
                    <Link href="/">
                        <Image src={LogoBlue} alt="logo" width={187} />
                    </Link>
                    <Menu />
                </Flex>
            </Header>
        </>
    );
}
