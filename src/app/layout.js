import '@/app/_styles/global.css';
import HomeLayout from '@/app/HomeLayout.jsx';
import AOSInit from '@/app/_components/AOSInit';

export const metadata = {
    title: '올리브텍 - 스토리지 보안 솔루션',
    description: '올리브텍의 WORM 스토리지 및 보안 PDS 솔루션을 소개합니다.',
    keywords: ['올리브텍', '보안스토리지', 'WORM', 'SecuPDS', 'PDS 솔루션'],
    openGraph: {
        title: '올리브텍',
        description: '공공 및 기업 보안 스토리지 솔루션',
        url: 'https://soheedu.com',
        siteName: 'Olivetech',
        locale: 'ko_KR',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <AOSInit />
                <HomeLayout>{children}</HomeLayout>
            </body>
        </html>
    );
}
