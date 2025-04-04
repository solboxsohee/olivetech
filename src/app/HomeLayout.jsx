'use client';

import MainHeader from '@/app/_components/layouts/header';
import MainFooter from '@/app/_components/layouts/footer';

export default function HomeLayout({ children }) {
    return (
        <main>
            <MainHeader />
            <article>{children}</article>
            <MainFooter />
        </main>
    );
}
