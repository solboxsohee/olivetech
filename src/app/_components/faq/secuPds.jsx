import React from 'react';
import { Collapse } from 'antd';

const items = [
    {
        key: '1',
        label: (
            <article style={{ display: 'flex' }}>
                <p>
                    <span
                        style={{ color: '#00A0E9', fontWeight: 500, fontSize: 20, marginRight: 15 }}
                    >
                        Q.
                    </span>
                </p>
                <p>SecuPDS는 행정안전부 고시안의 본인정보 보안저장소 규격을 100% 지원합니까?</p>
            </article>
        ),
        children: (
            <article className="answer">
                <p>
                    <span
                        style={{
                            color: 'transparent',
                            fontWeight: 500,
                            fontSize: 20,
                            marginRight: 15,
                        }}
                    >
                        A.
                    </span>
                </p>
                <p>
                    {' '}
                    예, 100% 지원합니다. 30여 이용기관 이상에 설치 되어 운영되고 있으며
                    공공마이데이터 사업단이 수행하는 보안저장소 점검 체크리스트에 따른 보안저장소
                    기능 점검을 완벽하게 통과하였습니다.
                </p>
            </article>
        ),
    },
    {
        key: '2',
        label: (
            <article style={{ display: 'flex' }}>
                <p>
                    <span
                        style={{ color: '#00A0E9', fontWeight: 500, fontSize: 20, marginRight: 15 }}
                    >
                        Q.
                    </span>
                </p>
                <p>SecuPDS 설치 운영이 가능한 환경은 무엇입니까?</p>
            </article>
        ),
        children: (
            <article className="answer">
                <p>
                    <span
                        style={{
                            color: 'transparent',
                            fontWeight: 500,
                            fontSize: 20,
                            marginRight: 15,
                        }}
                    >
                        A.
                    </span>
                </p>
                <p>
                    범용 Linux 설치가 가능한 물리적 서버, 가상 서버, 퍼블릭 클라우드, HCI 플랫폼에
                    모두 설치 운영이 가능합니다. 물리적 서버를 신규로 도입하려는 고객은 SecuPDS
                    운영에 최적화된 전용 서버인 올리브텍의 A5000 서버를 구매할 수도 있습니다.
                </p>
            </article>
        ),
    },
    {
        key: '3',
        label: (
            <article style={{ display: 'flex' }}>
                <p>
                    <span
                        style={{ color: '#00A0E9', fontWeight: 500, fontSize: 20, marginRight: 15 }}
                    >
                        Q.
                    </span>
                </p>
                <p>SecuPDS는 전체 시스템의 이중화 서비스를 제공합니까?</p>
            </article>
        ),
        children: (
            <article className="answer">
                <p>
                    <span
                        style={{
                            color: 'transparent',
                            fontWeight: 500,
                            fontSize: 20,
                            marginRight: 15,
                        }}
                    >
                        A.
                    </span>
                </p>
                <p>
                    SecuPDS는 자체 내장된 실시간 복제 및 H.A 기능을 통해 시스템 이중화 및 고가용성
                    서비스를 기본으로 제공합니다.
                </p>
            </article>
        ),
    },
    {
        key: '4',
        label: (
            <article style={{ display: 'flex' }}>
                <p>
                    <span
                        style={{ color: '#00A0E9', fontWeight: 500, fontSize: 20, marginRight: 15 }}
                    >
                        Q.
                    </span>
                </p>
                <p>SecuPDS와 이용기관 업무시스템 간의 연동은 어떻게 이루어 집니까?</p>
            </article>
        ),
        children: (
            <article className="answer">
                <p>
                    <span
                        style={{
                            color: 'transparent',
                            fontWeight: 500,
                            fontSize: 20,
                            marginRight: 15,
                        }}
                    >
                        A.
                    </span>
                </p>
                <p>
                    SecuPDS가 제공하는 묶음정보 저장,조회,유통정지,이력조회 라는 SecuPDS API를 통해
                    간편하게 연동할 수 있습니다.
                </p>
            </article>
        ),
    },
    {
        key: '5',
        label: (
            <article style={{ display: 'flex' }}>
                <p>
                    <span
                        style={{ color: '#00A0E9', fontWeight: 500, fontSize: 20, marginRight: 15 }}
                    >
                        Q.
                    </span>
                </p>
                <p>
                    행정안전부 마이데이터 유통센터에서 운용 중인 임대 PDS를 자체 구축한 SecuPDS로
                    전환할 경우 데이터 이관은 어떻게 합니까?
                </p>
            </article>
        ),
        children: (
            <article className="answer">
                <p>
                    <span
                        style={{
                            color: 'transparent',
                            fontWeight: 500,
                            fontSize: 20,
                            marginRight: 15,
                        }}
                    >
                        A.
                    </span>
                </p>
                <p>
                    마이데이터 유통센터의 임대 PDS는 올리브텍의 PDS기술과 WORM 스토리지 기술을
                    기반으로 구축 되었습니다. <br /> SecuPDS를 도입하여 자체 PDS를 구축할 경우
                    네트워크를 통해 데이터를 안전하게 이관하는 도구를 제공합니다.
                </p>
            </article>
        ),
    },
];

export default function SecuPds() {
    return (
        <>
            <Collapse defaultActiveKey={['1']} items={items} bordered={false} />
        </>
    );
}
