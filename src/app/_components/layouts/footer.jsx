import React from 'react';

import {Flex} from 'antd';
import Image from 'next/image';
import LogoBlue from '$/logo/logo_blue.svg';
import '@/app/_styles/footer.css'


export default function MainFooter() {
    return (
        <footer className='footer_style'>
            <Flex vertical justify='center' align='center' gap={20}>
                <Image src={LogoBlue} alt='logo' width={123}/>
                <Flex vertical align='center' gap={8}>
                    <p>경기도 성남시 수정구 창업로 42, 5층 530,531호 판교제2테크노밸리(시흥동, 경기기업성장센터)</p>
                    <Flex>
                        <p>T. 031-726-4217</p>
                        <p>F. 031-726-4217</p>
                        <p>E. sales@olivetech.co.kr</p>
                    </Flex>
                </Flex>
                <p><b>개인정보처리방침</b></p>
                <p>ⓒOlivetech Inc. All right reserved.</p>
            </Flex>
        </footer>
    );
}

