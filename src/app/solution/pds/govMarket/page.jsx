import React from 'react';
import styles from '@/app/_styles/solutions.module.css';

export default function GovMarket() {
    return (
        <main className="main-content">
            <section className={styles.solLayout}>
                <h1 className={styles.solTitle}>조달등록제품</h1>
                <article className={styles.solTxt}>
                    <p>
                        SecuPDS v1.0 소프트웨어는 조달청 디지털서비스몰에서 구매를 하실 수 있으며,
                        SecuPDS v1.0 탑재에 최적화된 전용 서버인 A5000 서버는 나라장터
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
                <article className={styles.solTxt} style={{ flexDirection: 'column' }}>
                    <h2 className={styles.smallTitle}>모델명 Splentec Storage v4.1, 10TB</h2>
                    <table className={styles.modelSpec}>
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
                <article className={styles.solTxt} style={{ flexDirection: 'column' }}>
                    <h2 className={styles.smallTitle}>모델명 A5000-</h2>
                    <table className={styles.modelSpec}>
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
    );
}
