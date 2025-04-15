'use client';

import MainHeader from '@/app/_components/layouts/header';
import MainFooter from '@/app/_components/layouts/footer';
import { ConfigProvider } from 'antd';

const configProviderTheme = {
    token: {
        colorPrimary: '#00A0E9',
        controlHeight: 47,
        borderRadius: 6,
    },
    components: {
        Button: {
            paddingBlock: 300,
            paddingInline: 50,
            contentFontSize: 18,
        },
        Form: {
            labelFontSize: 18,
        },
    },
};

export default function HomeLayout({ children }) {
    return (
        <ConfigProvider theme={configProviderTheme}>
            <main className="main-layout">
                <MainHeader />
                <article style={{ flex: 1 }}>{children}</article>
                <MainFooter />
            </main>
        </ConfigProvider>
    );
}
