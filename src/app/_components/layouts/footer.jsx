import React from 'react';

import { Flex } from 'antd';
import Image from 'next/image';
import LogoBlue from '$/logo/logo_blue.svg';
import '@/app/_styles/footer.css';
import Link from 'next/link';

export default function MainFooter() {
    return (
        <footer className="footer_style">
            <Flex vertical justify="center" align="center" gap={20}>
                <Image src={LogoBlue} alt="logo" width={123} />
                <Flex vertical align="center" gap={8}>
                    <p className="footer_addr">
                        경기도 성남시 수정구 창업로 42, <br /> 530-531호 판교제2테크노밸리
                        <span className="mb_del">(시흥동, 경기기업성장센터)</span>
                    </p>
                    <div className="footer_contact">
                        <p>
                            <b>T.</b> 031-726-4217
                        </p>
                        <p>
                            <b>F.</b> 031-726-4217
                        </p>
                        <p>
                            <b>E.</b> sales@olivetech.co.kr
                        </p>
                    </div>
                </Flex>
                <Link href="/privacy">
                    <p>
                        <b>개인정보처리방침</b>
                    </p>
                </Link>
                <p className="footer_copyright">ⓒOlivetech Inc. All right reserved.</p>
            </Flex>
        </footer>
    );
}
