'use client';

import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import MainHeader from '@/app/_components/layouts/header';
import MainFooter from '@/app/_components/layouts/footer';

export default function HomeLayout({ children }) {
    return (
        <Layout>
            <MainHeader />
                <Content style={{ background: '#ddd', minHeight: '100vh' }}>
                    {children}
                </Content>
            <MainFooter />
        </Layout>
    );
}