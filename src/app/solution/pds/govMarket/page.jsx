import React from 'react';
import styles from '@/app/_styles/solutions.module.css';
import PageTitle from '@/app/_components/pageLayout/pageTitle';
import PageImg from '@/app/_components/pageLayout/pageImg';
import SecondMenu from '@/app/_components/layouts/secondMenu';

export default function GovMarket() {
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
            <PageImg imgSrc={'mallImg'} />
            <main className="main-content">
                <section className={styles.solLayout}>
                    <h1 className={styles.solTitle}>조달등록제품</h1>
                    <article className={styles.solTxt} data-aos="fade-up">
                        <p>
                            SecuPDS v1.0 소프트웨어는 조달청 디지털서비스몰에서 구매를 하실 수
                            있으며, SecuPDS v1.0 탑재에 최적화된 전용 서버인 A5000 서버는 나라장터
                            종합쇼핑몰에서 구매하실 수 있습니다.
                        </p>
                    </article>
                </section>
                <section className={styles.solLayout}>
                    <h1 className={styles.solTitle}>
                        SecuPDS
                        <br />
                        v1.0
                    </h1>
                    <article
                        className={styles.solTxt}
                        style={{ flexDirection: 'column' }}
                        data-aos="fade-up"
                    >
                        <h2 className={styles.smallTitle}>모델명 Splentec Storage v4.1, 10TB</h2>
                        <table className={styles.modelSpec}>
                            <tbody>
                                <tr>
                                    <td>· 용도</td>
                                    <td>공공마이데이터 이용기관 보안저장소 구축용 소프트웨어</td>
                                </tr>
                                <tr>
                                    <td>· 묶음정보 저장 용량 라이선스</td>
                                    <td>10TB</td>
                                </tr>
                                <tr>
                                    <td>· 물품식별번호</td>
                                    <td>2264437</td>
                                </tr>
                                <tr>
                                    <td>· 공급조건</td>
                                    <td>3자단가계약</td>
                                </tr>
                                <tr>
                                    <td>· 가격</td>
                                    <td>54,500,000원</td>
                                </tr>
                            </tbody>
                        </table>
                        <p style={{ marginTop: 30 }}>
                            <a href="https://digitalmall.g2b.go.kr/">
                                조달청 디지털서비스몰(https://digitalmall.g2b.go.kr/)
                            </a>
                            에서 “올리브텍” 검색
                        </p>
                    </article>
                </section>
                <section className={styles.solLayout}>
                    <h1 className={styles.solTitle}>
                        SecuPDS v1.0
                        <br />
                        전용 서버
                    </h1>
                    <article
                        className={styles.solTxt}
                        style={{ flexDirection: 'column' }}
                        data-aos="fade-up"
                    >
                        <h2 className={styles.smallTitle}>모델명 A5000-</h2>
                        <table className={styles.modelSpec}>
                            <tbody>
                                <tr>
                                    <td>· 형상</td>
                                    <td>2U 12-Bay 랙-마운트 타입</td>
                                </tr>
                                <tr>
                                    <td>· 용량</td>
                                    <td>물리적 20TB, 가용 10.8TB</td>
                                </tr>
                                <tr>
                                    <td>· 물품식별번호</td>
                                    <td>24733025</td>
                                </tr>
                                <tr>
                                    <td>· 공급조건</td>
                                    <td>중소기업간경쟁지정제품</td>
                                </tr>
                                <tr>
                                    <td>· 가격</td>
                                    <td>23,500,000원</td>
                                </tr>
                            </tbody>
                        </table>
                        <p style={{ marginTop: 30 }}>
                            <a href="https://digitalmall.g2b.go.kr/">
                                조달청 나라장터 종합쇼핑몰(https://shop.g2b.go.kr/)
                            </a>
                            에서 “올리브텍” 검색 후 “컴퓨터서버“ 클릭
                        </p>
                    </article>
                </section>
            </main>
        </>
    );
}
