import React from 'react';
import styles from '@/app/_styles/solutions.module.css';
import PageTitle from '@/app/_components/pageLayout/pageTitle';
import PageImg from '@/app/_components/pageLayout/pageImg';
import SecondMenu from '@/app/_components/layouts/secondMenu';

export default function SecuPDS() {
    const secondMenuLinks = [
        { href: '/solution/pds', name: '공공 마이데이터 및 PDS' },
        { href: '/solution/pds/secuPds', name: 'SecuPDS' },
        { href: '/solution/pds/govMarket', name: '조달등록제품' },
    ];
    return (
        <>
            <PageTitle
                BlueTitle={'Solutions'}
                MainTitle={'공공 마이데이터 솔루션으로'}
                MainBoldTitle={'안전한 데이터 연계와 혁신을 지원합니다.'}
            />
            <SecondMenu menuName={'보안저장소(PDS)'} links={secondMenuLinks} border={false} />
            <PageImg imgSrc={'aboutImg'} />
            <main className="main-content">
                <section className={styles.solLayout}>
                    <h1 className={styles.solTitle}>SecuPDS v1.0</h1>
                    <article className={styles.solTxt}>
                        <p>
                            SecuPDS v1.0은 공공마이데이터 이용기관 보안저장소(PDS)를 구축할 수 있게
                            해 주는 소프트웨어 솔루션입니다. <br />
                            SecuPDS v1.0은 올리브텍의 원천기술인 보안 WORM 스토리지 기술을 바탕으로
                            행정안전부 본인정보 보안저장소 규격을 100% 충족합니다. 올리브텍 PDS
                            기술은 공공마이데이터 유통센터의 임대 PDS를 통해 검증된 월 5천만 건
                            이상의 묶음정보를 처리하는 안정성과 성능을 갖추고 있으며 이용기관 PDS
                            시장의 95% 이상을 확보하고 있습니다.
                        </p>
                    </article>
                </section>
                <section className={styles.solLayout}>
                    <h1 className={styles.solTitle}>주요 기능</h1>
                    <div className={styles.solTxt}>
                        <article>
                            <h2 className={styles.smallTitle}>보안 저장소 서버 기능</h2>
                            <ul>
                                <li>묶음정보 및 이력정보 안전 저장</li>
                                <li>실시간 복제 및 HA</li>
                            </ul>
                        </article>
                        <article>
                            <h2 className={styles.smallTitle}>SecuPDS 관리 서버 기능</h2>
                            <ul>
                                <li>Web 기반 SecuPDS 관리도구</li>
                                <li>SecuPDS 외부 인터페이스 API</li>
                                <li>실시간 복제 및 HA</li>
                            </ul>
                        </article>
                        <article>
                            <h2 className={styles.smallTitle}> SecuPDS 관리도구 주요 기능</h2>
                            <ul>
                                <li>묶음정보 목록관리, 검색, 폐기, 자동삭제</li>
                                <li>묶음정보 저장,조회,폐기,삭제이력 관리</li>
                                <li>각종 통계 및 대시보드</li>
                            </ul>
                        </article>
                    </div>
                </section>
                <section className={styles.solLayout}>
                    <h1 className={styles.solTitle}>특장점</h1>
                    <article className={styles.solTxt}>
                        <ul>
                            <li>GS 1등급 인증 및 우수조달제품 인증</li>
                            <li>PDS 솔루션 분야 95% 이상의 압도적 시장 점유율</li>
                            <li>
                                물리적 서버, 가상 서버, 클라우드 서버 환경에서 모두 설치, 운영 가능
                            </li>
                            <li>
                                실시간 복제 및 H.A 기반 이중화 구성으로 고가용성 PDS 서비스 기본
                                제공
                            </li>
                            <li>SecuPDS API를 통한 신속한 업무솔루션 통합</li>
                            <li>
                                마이데이터 임대 PDS 솔루션 개발 업체 - 고성능, 월간 5천만 건 이상
                                처리 기술
                            </li>
                            <li>임대 PDS에서 자체 PDS전환 지원 - 데이터 이관도구 및 서비스 제공</li>
                            <li>SecuPDS 운영에 최적화된 서버 모델 A5000 제공</li>
                            <li>나라장터 쇼핑몰을 통한 편리한 구매</li>
                        </ul>
                    </article>
                </section>
            </main>
        </>
    );
}
