'use client';
import React from 'react';
import PageTitle from '@/app/_components/pageLayout/pageTitle';
import PageImg from '@/app/_components/pageLayout/pageImg';
import { Flex, Button } from 'antd';
import styles from '@/app/_styles/content.module.css';

export default function About() {
    return (
        <>
            <PageTitle
                BlueTitle={'About Us'}
                MainTitle={'데이터 경제를 선도하는'}
                MainBoldTitle={'핵심 보안스토리지 솔루션을 제공합니다.'}
            />
            <PageImg imgSrc={'aboutImg'} />
            <main className="main-content">
                <Flex className={styles.subContent}>
                    <section className={styles.contentTitle}>
                        <h2>우리의 비전</h2>
                    </section>
                    <section className={styles.contentParagraph}>
                        <p>
                            <b>
                                올리브텍 솔루션을 통해 우리는 데이터를 안전하게 저장, 보호, 활용할
                                수 있습니다.
                            </b>
                        </p>
                        <br />
                        <p>
                            인공지능 및 데이터 경제 시대에 가장 가치 있는 자원은 데이터 입니다.
                            우리는 일찍이 데이터가 미래 경제의 핵심 자원임을 인식하고 기술을 준비해
                            왔습니다. 올리브텍은 데이터 스토리지 원천기술을 바탕으로 고객의 핵심
                            데이터 보호와 활용 가치를 선도하겠습니다.
                        </p>
                    </section>
                </Flex>
                <Flex className={styles.subContent}>
                    <section className={styles.contentTitle}>
                        <h2>우리가 하는 일</h2>
                    </section>
                    <section className={styles.contentParagraph}>
                        <p>
                            <b>
                                올리브텍 솔루션을 통해 우리는 올리브텍은 대용량 NAS, WORM 스토리지
                                솔루션과 공공마이데이터 서비스의 핵심 기술인 본인정보
                                보안저장소(PDS) 기술을 제공합니다. 안전하게 저장, 보호, 활용할 수
                                있습니다.
                            </b>
                            <br />
                            <br />
                            올리브텍은 10여개의 핵심특허를 기반으로 국내 최초로 개발한 보안 WORM
                            스토리지 OS를 기반으로 한 On-Premise 및 Cloud 환경을 위한 다양한 종류의
                            보안 스토리지 솔루션을 제공합니다.
                            <br />
                            <br />
                            국내 보안 WORM 스토리지 기술 및 솔루션을 최초로 개발한 올리브텍의 보안
                            스토리지 솔루션은 공공, 국방, 제조, 의료, 금융 등 전 산업분야에 걸친
                            500여 고객들이 핵심 데이터 보호 및 데이터 컴플라이언스 준수를 위해
                            활용하고 있습니다.
                            <br />
                            <br />
                            또한 구비서류제로를 통한 국민 생활 혁신을 지향하는 국가의 핵심 과제인
                            공공마이데이터 서비스에 필수적인 솔루션인 본인정보 보안저장소 기술을
                            최초로 개발하였으며 행정안전부 공공마이데이터 유통 센터 및 대부분의
                            이용기관들이 당사의 보안저장소 솔루션을 사용하고 있습니다.
                            <br />
                            <br />
                            올리브텍은 그동안 축적한 고성능 데이터 스토리지 기술 및 스토리지
                            보안기술을 더욱 고도화하고, 생성형 AI 기술을 스토리지에 융합함으로써
                            다가오는 AI 시대에 저장된 데이터의 활용 가치를 극대화 하는 솔루션을
                            제공할 수 있도록 노력하고 있습니다. 저장, 보안, 활용 가치를 동시에
                            제공하는 차별화된 스토리지 솔루션을 통해 데이터 경제시대와
                            인공지능시대를 맞이하는 고객들이 당사의 솔루션을 통해 앞서가는 경쟁력을
                            갖출 수 있도록 최선의 노력을 다 하겠습니다.
                        </p>
                    </section>
                </Flex>
                <Flex className={styles.subContent} vertical>
                    <section>
                        <h2>기업 정보</h2>
                    </section>
                    <section>
                        <table className={styles.infoTable}>
                            <tbody>
                                <tr>
                                    <td className={styles.tableTitle}>
                                        <b>회사명</b>
                                    </td>
                                    <td className={styles.tableContents}>올리브텍</td>
                                    <td className={styles.tableTitle}>
                                        <b>대표 이사</b>
                                    </td>
                                    <td className={styles.tableContents}>임장식</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>설립일</b>
                                    </td>
                                    <td>2013년 4월 1일</td>
                                    <td>
                                        <b>사업자번호</b>
                                    </td>
                                    <td>144-81-11596</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>주요 사업</b>
                                    </td>
                                    <td>컴퓨터용 보안 스토리지</td>
                                    <td>
                                        <b>주소</b>
                                    </td>
                                    <td>
                                        경기도 성남시 수정구 창업로 42, 530호 (경기기업성장센터)
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>홈페이지</b>
                                    </td>
                                    <td>www.olivetech.co.kr</td>
                                    <td>
                                        <b>대표번호</b>
                                    </td>
                                    <td>031-726-4217</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </Flex>
                <Flex className={styles.subContent}>
                    <section className={styles.halfFlex}>
                        <h2>회사소개서</h2>
                        <Button type="primary">회사 소개서 다운로드</Button>
                    </section>
                    <section className={styles.halfFlex}>
                        <h2>CI</h2>
                        <Flex gap={10}>
                            <Button type="primary">로고.eps</Button>
                            <Button type="primary">로고.png</Button>
                        </Flex>
                    </section>
                </Flex>
            </main>
        </>
    );
}
