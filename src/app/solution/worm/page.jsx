'use client';
import React from 'react';
import PageTitle from '@/app/_components/pageLayout/pageTitle';
import PageImg from '@/app/_components/pageLayout/pageImg';
import styles from '@/app/_styles/solutions.module.css';
import SecondMenu from '@/app/_components/layouts/secondMenu';

export default function Worm() {
    const secondMenuLinks = [
        { href: '/solution/worm', name: '개요 및 핵심기술' },
        { href: '/solution/worm/wormProducts', name: '제품 및 솔루션' },
        { href: '/solution/worm/govMarket', name: '조달등록제품' },
    ];
    return (
        <>
            <PageTitle
                BlueTitle={'Solutions'}
                MainTitle={'고성능 보안 네트워크 스토리지'}
                MainBoldTitle={'데이터 원본을 안전하게 보호합니다.'}
            />
            <SecondMenu menuName={'WORM 스토리지'} links={secondMenuLinks} border={false} />
            <PageImg imgSrc={'wormImg'} />
            <main className="main-content">
                <section className={styles.solLayout}>
                    <h1 className={styles.solTitle}>
                        WORM
                        <br />
                        스토리지
                    </h1>
                    <div
                        className={styles.solTxt}
                        data-aos="fade-up"
                        style={{ flexDirection: 'column' }}
                    >
                        <article>
                            <p>
                                보안의 궁극적 목적은 조직의 핵심 데이터를 보호하는 것입니다. <br />
                                스토리지에 저장된 데이터는 악성프로그램, 랜섬웨어, 외부 해커,
                                내부자에 의해 끊임없는 삭제.변조 위협에 노출되어 있습니다.
                                <br />
                                디지털 데이터는 권한을 가진 사용자에 의한 삭제.변조를 막을 수
                                없습니다. 이는 조직의 핵심 데이터에 대한 손실로 인한 막대한 피해,
                                법적으로 규정된 데이터 보존 규정 위배 등의 심각한 사태를 야기할 수
                                있습니다.
                            </p>
                            <br />
                            <p>
                                올리브텍 WORM(Write-Once Read-Many) 스토리지는 자체 개발한 보안
                                스토리지 OS를 기반으로 한 고성능 보안 스토리지 솔루션으로 데이터에
                                지정된 보존기간 동안 관리자를 포함한 어떠한 권한으로도 데이터를
                                삭제하거나 변조할 수 없도록 하는 기능을 통해 데이터 훼손방지 및
                                데이터 컨플라이언스 기능을 완벽하게 제공합니다.
                            </p>
                            <p>
                                올리브텍 엔터프라이즈 스토리지 브랜드로는 Splentec 을 사용하고
                                있으며 Splentec은 “Splendid Technology” 를 의미합니다.
                            </p>
                        </article>
                        <div style={{ marginTop: 45 }}>
                            <img
                                src="/systemflow/immutable.svg"
                                alt="worm storage"
                                style={{ width: '100%' }}
                            />
                        </div>
                    </div>
                </section>
                <section className={styles.solLayout}>
                    <h1 className={styles.solTitle}>보안스토리지 OS</h1>
                    <article className={styles.solTxt} data-aos="fade-up">
                        <p>
                            WORM 스토리지의 핵심 기술은 최신 개방형 Linux 기반으로 개발, GS 1등급
                            인증을 받은 보안 스토리지 OS입니다.
                            <br />
                            국내 최초로 개발된 보안 스토리지 OS는 다수의 핵심 특허를 기반으로 하고
                            있으며 데이터의 삭제 및 변조를 방지하는 WORM 스토리지 핵심기능을
                            제공합니다.
                            <br /> 보안 스토리지 OS는 일반적인 NAS 스토리지 기능을 기본으로 제공하고
                            있으며, 유료 WORM 라이선스를 통해 WORM 스토리지 기능을 제공하도록
                            업그레이드가 가능합니다. 보안 스토리지 OS는 물리적 서버, 가상 서버,
                            클라우드 서버 및 범용 리눅스에 탑재하여 어떠한 환경에서나 WORM 스토리지
                            기능을 사용할 수 있게 해 주는 유연성을 제공합니다.
                        </p>
                    </article>
                </section>
                <section className={styles.solLayout}>
                    <h1 className={styles.solTitle}>OS 주요 기능</h1>
                    <div className={styles.solTxt} data-aos="fade-up">
                        <article>
                            <h2 className={styles.smallTitle}>기본 NAS 스토리지 기능</h2>
                            <ul>
                                <li>리눅스 기반 스토리지 전용 OS</li>
                                <li>OS 이중화 설치</li>
                                <li>볼륨, 네트워크, 사용자, 성능 관리</li>
                                <li>S/W RAID, H/W RAID 지원</li>
                                <li>iSCSI, NAS, WORM 볼륨 제공</li>
                                <li>실시간 볼륨 단위 원격 복제</li>
                                <li>스케쥴 파일/폴더 단위 원격 복제</li>
                                <li>H.A 고가용성 구성 기능</li>
                                <li>실시간 볼륨 암호화</li>
                            </ul>
                        </article>
                        <article>
                            <h2 className={styles.smallTitle}>보안 WORM 스토리지 기능</h2>
                            <ul>
                                <li>보안 WORM 볼륨 생성 기능</li>
                                <li>WORM 기능 커널 내부 하드코딩</li>
                                <li>개별 파일 단위 보존기간 지정</li>
                                <li>볼륨 단위 디폴트 보존기간 지정</li>
                                <li>보존기간 보호용 Compliance Clock</li>
                                <li>무결성 검증용 SHA-256 기반 디지털 지문</li>
                                <li>실시간 삭제.변조 방지 기록 방법 제공</li>
                                <li>WORM 파일 특수삭제 기능</li>
                                <li>WORM 속성 포함 데이터 원격 복제 기능</li>
                            </ul>
                        </article>
                    </div>
                </section>
                <section className={styles.solLayout}>
                    <h1 className={styles.solTitle}>구성 및 활용</h1>
                    <article className={styles.solTxt} data-aos="fade-up">
                        <p>
                            WORM 스토리지 OS는 물리적 서버, vSphere, XEN, Hyper-V, Virtual Box, KVM,
                            HCI 등 대부분의 가상화 환경을 지원하며 NAVER, NHN, KT, AWS, Azure,
                            Google Cloud 등의 퍼블릭 클라우드 환경에도 설치 운영 가능합니다.
                        </p>
                    </article>
                </section>
                <section className={styles.solLayout}>
                    <h1 className={styles.solTitle}>주요 활용 분야</h1>
                    <article className={styles.solTxt} data-aos="fade-up">
                        <ul>
                            <li>보안 파일 서버 – 랜섬웨어 대비, 의도적/우발적 삭제.변조 방지</li>
                            <li>로그 원본 보존 – 내부통제, 보안사고추적, 부인방지,감사</li>
                            <li>랜섬웨어대비 안전한 백업 – 백업 데이터 삭제.변조 방지</li>
                            <li>금융기록물 – 비대면, 페이퍼리스 업무 확산, 컴플라이언스 준수</li>
                            <li>공공기록물 – 국가기록물, RMS, 스캔데이터</li>
                            <li>법적규정준수 – 개인정보접속기록,OT/SCADA 망 로그</li>
                            <li>콜센터 – 계약 녹취 보존, 사후 분쟁 해결 근거</li>
                            <li>의료 부문 – ISMS 인증, 진료기록/영상 데이터</li>
                            <li>연구소 – 각종 실험,임상 데이터 보호, 무결성 증명</li>
                            <li>장기기록물 보존 – 대학교 학적부 등</li>
                            <li>기타 – 이-메일 아카이빙, 스마트 팩토리 로그</li>
                        </ul>
                    </article>
                </section>
                <section className={styles.solLayout}>
                    <h1 className={styles.solTitle}>관련 문서</h1>
                    <article className={styles.solTxt} data-aos="fade-up">
                        <p>올리브텍 스토리지 제품 소개서</p>
                    </article>
                </section>
            </main>
        </>
    );
}
