import React from 'react';
import { Collapse, ConfigProvider } from 'antd';
import { RightOutlined } from '@ant-design/icons';

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
                <p>WORM 스토리지는 일반 NAS 스토리지 기능을 제공하나요?</p>
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
                    <b>WORM 스토리지는 WORM 볼륨, NAS 볼륨, iSCSI 볼륨을 생성할 수 있으며</b> 무단
                    삭제 및 변조 방지 기능은 WORM 볼륨에 대해서만 유효한 기능입니다. NAS 볼륨은 일반
                    NAS 와 동일한 방식으로 사용할 수 있습니다. <br /> 그 밖에 일반적인 NAS가
                    제공하는 기능은 모두 제공합니다.
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
                <p>
                    WORM 볼륨에 저장된 파일에 설정된 보존기간이 경과하기 전에는 어떠한 권한으로도
                    삭제 및 수정이 불가능한가요?
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
                    수퍼-유저, 관리자, 제조사 엔지니어 포함 어떤 권한으로도 삭제 및 수정이
                    불가능합니다.
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
                <p>파일에 설정된 보존기간의 변경이 가능한가요?</p>
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
                <p>한번 설정된 보존 기간은 변경이 불가능합니다.</p>
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
                <p>보존기간이 경과한 파일은 어떻게 처리가 가능한가요?</p>
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
                    보존기간이 경과한 파일은 수정은 불가능하고 삭제만 가능합니다. 삭제 후 공간을
                    재활용할 수 있습니다.
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
                    {' '}
                    시스템 시간을 변경해서 보존기간을 무력화하려는 시도에 대해 어떻게 대응이
                    가능한가요?
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
                    결론적으로, 시스템 변경으로 보존 기간을 무력화할 수 없습니다.
                    <br />
                    WORM 볼륨 생성시 <b>Compliance Clock 옵션을 선택하면</b> 보존기간의 경과여부를
                    관리자도 수정이 불가능한 별도의 보존기간 관리용 시간에 따라 판단합니다.
                </p>
            </article>
        ),
    },
    {
        key: '6',
        label: (
            <article style={{ display: 'flex' }}>
                <p>
                    <span
                        style={{ color: '#00A0E9', fontWeight: 500, fontSize: 20, marginRight: 15 }}
                    >
                        Q.
                    </span>
                </p>
                <p>WORM 파일과 일반 파일이 같은 볼륨에 동시에 존재할 수 있나요?</p>
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
                    예. 동시에 존재할 수 있습니다. <br /> WORM 볼륨에 파일을 저장하더라도 WORM
                    파일로 확정하는 명령(Trigger)를 파일에 가하기 전에는 일반 파일과 동일하게 수정과
                    삭제가 가능합니다.
                </p>
            </article>
        ),
    },
    {
        key: '7',
        label: (
            <article style={{ display: 'flex' }}>
                <p>
                    <span
                        style={{ color: '#00A0E9', fontWeight: 500, fontSize: 20, marginRight: 15 }}
                    >
                        Q.
                    </span>
                </p>
                <p>국가기록원 표준기록관리시스템(RMS) 호환 API를 제공하나요?</p>
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
                    올리브텍 WORM 스토리지는 RMS 호환 API를 지원하며, 국가기록원으로부터 RMS 호환
                    아카이빙 스토리지 인증을 받았습니다.
                </p>
            </article>
        ),
    },
    {
        key: '8',
        label: (
            <article style={{ display: 'flex' }}>
                <p>
                    <span
                        style={{ color: '#00A0E9', fontWeight: 500, fontSize: 20, marginRight: 15 }}
                    >
                        Q.
                    </span>
                </p>
                <p>WORM 파일은 랜섬웨어에 감염되지 않나요?</p>
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
                <p>WORM 파일은 랜섬웨어가 삭제하거나 암호화할 수 없습니다.</p>
            </article>
        ),
    },
    {
        key: '9',
        label: (
            <article style={{ display: 'flex' }}>
                <p>
                    <span
                        style={{ color: '#00A0E9', fontWeight: 500, fontSize: 20, marginRight: 15 }}
                    >
                        Q.
                    </span>
                </p>
                <p>상용 백업 솔루션의 백업 장치로 WORM 스토리지를 사용할 수 있나요?</p>
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
                    Veritas, Veeam, CommVault 등 <b>대부분의 상용 백업솔루션과 연동이 가능하며</b>,
                    WORM 볼륨에 백업된 데이터는 랜섬웨어 등의 악성소프트웨어로부터 안전하게
                    보호됩니다.
                </p>
            </article>
        ),
    },
    {
        key: '10',
        label: (
            <article style={{ display: 'flex' }}>
                <p>
                    <span
                        style={{ color: '#00A0E9', fontWeight: 500, fontSize: 20, marginRight: 15 }}
                    >
                        Q.
                    </span>
                </p>
                <p>퍼블릭 클라우드 환경에서 WORM 스토리지는 어떻게 사용할 수 있나요?</p>
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
                    가상서버와 가상디스크를 구매하고 가상서버에 올리브텍의 <b>WORM 스토리지 OS</b>를
                    탑재합니다. <br /> WORM 스토리지 라이선스와 필요한 WORM 볼륨 용량 라이선스는
                    올리브텍으로부터 구매하여 BYOL 라이선스 형식으로 활성화 합니다.
                </p>
            </article>
        ),
    },
    {
        key: '11',
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
                    {' '}
                    불가피한 사유로 보존기간 경과 전에 파일을 폐기하여야 하는 경우에 대처할 방법이
                    있습니까?
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
                    개인정보 삭제요청, 계약 철회 등으로 관련된 데이터를 보존기간 경과전에 폐기할
                    필요가 있는 업무 환경에서는 WORM 볼륨을 생성할 때{' '}
                    <b>특수삭제(Privileged Delete)</b>
                    옵션을 선택해서 볼륨을 생성할 수 있습니다. <br /> 이 옵션으로 생성한 WORM 볼륨에
                    저장된 WORM 파일은 특수한 절차를 거쳐서 파일을 폐기하고 폐기 기록은 삭제
                    불가능하게 남기는 기능을 제공합니다.
                </p>
            </article>
        ),
    },
];

export default function FaqWormStorage() {
    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Collapse: {
                            colorBorder: '#e8e7e7',
                        },
                    },
                }}
            >
                <Collapse
                    defaultActiveKey={['1']}
                    items={items}
                    bordered={false}
                    expandIcon={({ isActive }) => <RightOutlined rotate={isActive ? 90 : -90} />}
                />
            </ConfigProvider>
        </>
    );
}
