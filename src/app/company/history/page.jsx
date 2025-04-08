'use client';
import React from 'react';
import PageTitle from '@/app/_components/pageLayout/pageTitle';
import PageImg from '@/app/_components/pageLayout/pageImg';
import styles from '@/app/_styles/content.module.css';
import { Flex } from 'antd';

export default function History() {
    return (
        <>
            <PageTitle
                BlueTitle={'History'}
                MainTitle={'끊임없는 혁신을 통해'}
                MainBoldTitle={'올리브텍을 만들어 갑니다.'}
            />
            <PageImg imgSrc={'historyImg'} />
            <main className="main-content">
                <Flex align="center" className={styles.contentDivide}>
                    <section className={styles.contentTitle}>
                        <h2 className={styles.blue}>2025</h2>
                    </section>
                    <section className={styles.contentParagraph}>
                        <ul>
                            <li>2. 공공마이데이터 임대PDS 데이터 자체 PDS 이관도구 개발</li>
                        </ul>
                    </section>
                </Flex>
                <Flex className={styles.contentDivide}>
                    <section className={styles.contentTitle}>
                        <h2 className={styles.blue}>2024</h2>
                    </section>
                    <section className={styles.contentParagraph}>
                        <ul>
                            <li>11. 근로복지공단 SecuPDS 도입</li>
                            <li>10. 건강보험공단 SecuPDS 도입</li>
                            <li>10. SecuPDS v1.0 조달우수제품지정서 취득</li>
                            <li>9. 한국자산관리공사 SecuPDS 도입</li>
                            <li>6. 국방부 스마트 인재관리시스템 SecuPDS 도입</li>
                            <li>6. 국무조정실 SecuPDS 도입</li>
                            <li>6. 차세대지방재정시스템 가상 WORM 110TB 도입</li>
                            <li>5. 한국전력공사 SecuPDS 도입</li>
                            <li>5. 신용보증재단중앙회 SecuPDS 도입</li>
                        </ul>
                    </section>
                </Flex>
                <Flex className={styles.contentDivide}>
                    <section className={styles.contentTitle}>
                        <h2 className={styles.blue}>2023</h2>
                    </section>
                    <section className={styles.contentParagraph}>
                        <ul>
                            <li>12. 한국고용정보원 SecuPDS 도입</li>
                            <li>11. 한국정보통신진흥협회(KAIT) SecuPDS 도입</li>
                            <li>10. 블록체인과 WORM 기술 융합한 무결성 보장기술 관련 특허 취득</li>
                            <li>10. 한국주택금융공사 SecuPDS 도입</li>
                            <li>10. 국민연금공단 SecuPDS 도입</li>
                            <li>9. 중소벤처기업진흥공단 SecuPDS 도입</li>
                            <li>8. 거제시 SecuPDS 도입</li>
                        </ul>
                    </section>
                </Flex>
                <Flex className={styles.contentDivide}>
                    <section className={styles.contentTitle}>
                        <h2 className={styles.blue}>2022</h2>
                    </section>
                    <section className={styles.contentParagraph}>
                        <ul>
                            <li>12. 국가정보자원관리원 임대PDS용 가상 WORM 100TB 도입</li>
                            <li>12. 강원도 SecuPDS 도입</li>
                            <li>11. 정부24 국가보조금 시스템 SecuPDS 도입</li>
                            <li>11. 더존비즈온(국방부 프로젝트) SecuPDS 도입</li>
                            <li>10. 부산시 SecuPDS 도입</li>
                            <li>9. 한국주택토지공사(LH) SecuPDS 도입</li>
                            <li>9. 성동구 SecuPDS 도입</li>
                            <li>9. 김해시 SecuPDS 도입</li>
                            <li>8. Compliance Clock 제공 기술 관련 특허 취득</li>
                            <li>
                                6. 영상데이터 저장 시스템에서 데이터 위.변조 방지 기술 관련 특허
                                취득
                            </li>
                            <li>6. 중소기업중앙회 SecuPDS 도입</li>
                            <li>5. 열람시간 제한 기반 데이터 보호 기술 관련 특허 취득</li>
                        </ul>
                    </section>
                </Flex>
                <Flex className={styles.contentDivide}>
                    <section className={styles.contentTitle}>
                        <h2 className={styles.blue}>2021</h2>
                    </section>
                    <section className={styles.contentParagraph}>
                        <ul>
                            <li>12. 데이터 유출 및 훼손방지 기술 관련 특허 취득</li>
                            <li>12. 세종시 SecuPDS 도입</li>
                            <li>11. 농림수산정보원 SecuPDS 도입</li>
                            <li>10. 경기도청 SecuPDS 도입</li>
                            <li>10. EVIAS v1.0 TTA VnV 성능 시험 인증</li>
                            <li>7. SecuPDS v1.0 GS 1등급 인증 취득</li>
                            <li>6. 컴퓨터 부문 직접생산증명확인서 취득</li>
                            <li>5. 매체 저장장치 부문 직접생산증명확인서 취득</li>
                            <li>4. 소프트웨어 유지 및 지원 부문 직접생산증명확인서 취득</li>
                        </ul>
                    </section>
                </Flex>
                <Flex className={styles.contentDivide}>
                    <section className={styles.contentTitle}>
                        <h2 className={styles.blue}>2020</h2>
                    </section>
                    <section className={styles.contentParagraph}>
                        <ul>
                            <li>12. 경기도 유망 중소기업 인증서 취득</li>
                            <li>12. 중소벤처기업부 중소기업기술혁신개발사업 과제 선정</li>
                            <li>
                                5. 이벤트 영상 탐지 및 블록체인 저장 프로그램 TTA VnV 성능 시험 인증
                            </li>
                            <li>2. NIPA 소프트웨어 고성장클럽200 사업 과제 선정</li>
                        </ul>
                    </section>
                </Flex>
                <Flex className={styles.contentDivide}>
                    <section className={styles.contentTitle}>
                        <h2 className={styles.blue}>2019</h2>
                    </section>
                    <section className={styles.contentParagraph}>
                        <ul>
                            <li>10. KOSA 주관 싱가포르 Cloud Expo ASIA 참가 사업자 선정</li>
                            <li>8. 머니투데이 대한민국 리딩 기업 대상 수상</li>
                            <li>6. 중소벤처기업부 창업성장기술개발사업 과제 선정</li>
                            <li>4. 기업부설연구소 인증</li>
                            <li>
                                2. WORM 스토리지에서 실시간 데이터 위.변조 방지 기록 관련 특허 취득
                            </li>
                        </ul>
                    </section>
                </Flex>
                <Flex align="center" className={styles.contentDivide}>
                    <section className={styles.contentTitle}>
                        <h2 className={styles.blue}>2018</h2>
                    </section>
                    <section className={styles.contentParagraph}>
                        <ul>
                            <li>
                                2. 객체기반 스토리지 인터페이스를 제공하는 방법 및 장치 관련 특허
                                취득
                            </li>
                        </ul>
                    </section>
                </Flex>
                <Flex className={styles.contentDivide}>
                    <section className={styles.contentTitle}>
                        <h2 className={styles.blue}>2017</h2>
                    </section>
                    <section className={styles.contentParagraph}>
                        <ul>
                            <li>12. WORM 스토리지 OS GS 1등급 인증 취득</li>
                            <li>9. IITP “공공부문 도입 ICT장비 TOP 10” 선정</li>
                            <li>6. 인천기술지주 창업도약패키지 사업 과제 선정</li>
                            <li>5. CISMA-8000T8 제품 TTA VnV 성능 시험 인증</li>
                        </ul>
                    </section>
                </Flex>
                <Flex className={styles.contentDivide}>
                    <section className={styles.contentTitle}>
                        <h2 className={styles.blue}>2016</h2>
                    </section>
                    <section className={styles.contentParagraph}>
                        <ul>
                            <li>9. 중소벤처기업부 제품공정기술개선사업 과제 선정</li>
                            <li>
                                4. 국각기록원 표준기록관리시스템 호환 아카이빙 스토리지 인증 취득
                            </li>
                        </ul>
                    </section>
                </Flex>
                <Flex className={styles.contentDivide}>
                    <section className={styles.contentTitle}>
                        <h2 className={styles.blue}>2015</h2>
                    </section>
                    <section className={styles.contentParagraph}>
                        <ul>
                            <li>9. IITP 글로벌 딜리버리 과제 콘소시엄 사업자 선정</li>
                            <li>2. 기술보증기금 기술신용평가(TCB) 3등급 인증</li>
                        </ul>
                    </section>
                </Flex>
                <Flex align="center" className={styles.contentDivide}>
                    <section className={styles.contentTitle}>
                        <h2 className={styles.blue}>2014</h2>
                    </section>
                    <section className={styles.contentParagraph}>
                        <ul>
                            <li>6. 벤처기업인증</li>
                        </ul>
                    </section>
                </Flex>
                <Flex className={styles.contentDivide}>
                    <section className={styles.contentTitle}>
                        <h2 className={styles.blue}>2013</h2>
                    </section>
                    <section className={styles.contentParagraph}>
                        <ul>
                            <li>9. 중소벤처기업부 산학연협력기술개발사업 과제 선정</li>
                            <li>5. 연구개발전담부서 인증</li>
                            <li>4. ㈜올리브텍 법인 설립</li>
                        </ul>
                    </section>
                </Flex>
            </main>
        </>
    );
}
