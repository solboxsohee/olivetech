import React from 'react';
import styles from '@/app/_styles/solutions.module.css';
import PageTitle from '@/app/_components/pageLayout/pageTitle';
import PageImg from '@/app/_components/pageLayout/pageImg';
import SecondMenu from '@/app/_components/layouts/secondMenu';

export default function GovMarket() {
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
            <PageImg imgSrc={'mallImg'} />
            <main className="main-content">
                <section className={styles.solLayout}>
                    <h1 className={styles.solTitle}>조달등록제품</h1>
                    <article className={styles.solTxt}>
                        <p>
                            올리브텍은 물리적 WORM 스토리지와 가상 WORM 스토리지 제품을 조달청
                            사이트를 통해 구매할 수 있게 제공합니다.
                            <br />
                            물리적 WORM 스토리지는 조달청에 등록된 유일한 전용 WORM 스토리지 제품
                            이며 가상 WORM 스토리지는 조달청에 등록된 유일한 가상 WORM 스토리지
                            어플라이언스 제품입니다.
                        </p>
                    </article>
                </section>
                <section className={styles.solLayout}>
                    <h1 className={styles.solTitle}>
                        물리적 WORM
                        <br />
                        스토리지
                    </h1>
                    <div className={styles.solTxt} style={{ flexWrap: 'wrap' }}>
                        <article style={{ width: '45%' }}>
                            <h2 className={styles.smallTitle}>
                                모델명 F5200-12WP, 24TB/96GB(캐시)
                            </h2>
                            <div className={styles.modelSpecWrap}>
                                <table className={styles.modelSpec}>
                                    <tbody>
                                        <tr>
                                            <td>· 형상</td>
                                            <td>2U 12-Bay 랙-마운트 타입</td>
                                        </tr>
                                        <tr>
                                            <td>· 용량</td>
                                            <td>물리적 24TB, 가용 18TB</td>
                                        </tr>
                                        <tr>
                                            <td>· 물품식별번호</td>
                                            <td>25709515</td>
                                        </tr>
                                        <tr>
                                            <td>· 공급조건</td>
                                            <td>다수공급자계약</td>
                                        </tr>
                                        <tr>
                                            <td>· 가격</td>
                                            <td>42,000,000원</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </article>
                        <article style={{ width: '45%' }}>
                            <h2 className={styles.smallTitle}>
                                모델명 F5200-12WP, 96TB/96GB(캐시)
                            </h2>
                            <table className={styles.modelSpec}>
                                <tbody>
                                    <tr>
                                        <td>· 형상</td>
                                        <td>2U 12-Bay 랙-마운트 타입</td>
                                    </tr>
                                    <tr>
                                        <td>· 용량</td>
                                        <td>물리적 96TB, 가용 72TB</td>
                                    </tr>
                                    <tr>
                                        <td>· 물품식별번호</td>
                                        <td>25709513</td>
                                    </tr>
                                    <tr>
                                        <td>· 공급조건</td>
                                        <td>다수공급자계약</td>
                                    </tr>
                                    <tr>
                                        <td>· 가격</td>
                                        <td>49,800,000원</td>
                                    </tr>
                                </tbody>
                            </table>
                        </article>
                        <p style={{ marginTop: 20 }}>
                            <a href="https://shop.g2b.go.kr/" target="_blank">
                                조달청 나라장터 종합쇼핑몰(https://shop.g2b.go.kr/)
                            </a>
                            에서 “올리브텍” 검색 후 “디스크어레이“ 클릭
                        </p>
                    </div>
                </section>
                <section className={styles.solLayout}>
                    <h1 className={styles.solTitle}>가상 WORM 스토리지</h1>
                    <article className={styles.solTxt} style={{ flexDirection: 'column' }}>
                        <h2 className={styles.smallTitle}>모델명 Splentec Storage v4.1, 10TB</h2>
                        <table className={styles.modelSpec}>
                            <tbody>
                                <tr>
                                    <td>· 형상</td>
                                    <td>가상 WORM 스토리지 어플라이언스 소프트웨어</td>
                                </tr>
                                <tr>
                                    <td>· 용량 라이선스</td>
                                    <td>10TB</td>
                                </tr>
                                <tr>
                                    <td>· 물품식별번호</td>
                                    <td>23910303</td>
                                </tr>
                                <tr>
                                    <td>· 공급조건</td>
                                    <td>3자단가계약</td>
                                </tr>
                                <tr>
                                    <td>· 가격</td>
                                    <td>26,000.000원</td>
                                </tr>
                            </tbody>
                        </table>
                        <p style={{ marginTop: 30 }}>
                            <a href="https://digitalmall.g2b.go.kr/" target="_blank">
                                조달청 디지털서비스몰(https://digitalmall.g2b.go.kr/)
                            </a>
                            에서 “올리브텍” 검색
                        </p>
                    </article>
                </section>
            </main>
        </>
    );
}
