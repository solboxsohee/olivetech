'use client';
import React from 'react';
import { Carousel } from 'antd';
import styles from '@/app/_styles/home.module.css';
import Image from 'next/image';
import Storage from '$/landing/security_storage.png';
import Mydata from '$/landing/mydata.png';

export default function HomeCarousel() {
    return (
        <>
            <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={8000}>
                <article className={styles.banner}>
                    <div className={styles.bannerContent}>
                        <section className={styles.bannerCopy}>
                            <div>
                                <h1>
                                    500개 이상의 기업이 선택한
                                    <br />
                                    <span className={styles.highlight}>
                                        대한민국 대표 보안 스토리지
                                    </span>
                                </h1>
                                <p>
                                    올리브텍은 데이터 무단삭제 및 변조를 방지하는 보안 스토리지 OS
                                    원천 기술을 바탕으로 WORM 스토리지 솔루션 및 공공 마이데이터
                                    본인정보 보안저장소(PDS) 솔루션 시장을 선도하고 있습니다.
                                </p>
                            </div>
                        </section>
                        <section className={styles.bannerImgWrap}>
                            <Image
                                src={Storage}
                                alt="olivetech"
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'right top' }}
                            />
                        </section>
                    </div>
                </article>
                <article className={styles.banner}>
                    <div className={styles.bannerContent}>
                        <section className={styles.bannerCopy}>
                            <div>
                                <h1>
                                    95%의 점유율로 검증된
                                    <br />
                                    <span className={styles.highlight}>
                                        공공 마이데이터 PDS 솔루션
                                    </span>
                                </h1>
                                <p>
                                    PDS(Personal Data Store)는 공공마이데이터 서비스 이용기관이
                                    의무적으로  구비하여야 하는 “본인정보 보안저장소”입니다.
                                    올리브텍은 이 분야의 개척자로 95% 이상의 시장 점유율을 보유하고
                                    있습니다.
                                </p>
                            </div>
                        </section>
                        <section className={styles.bannerSecondImgWrap}>
                            <Image
                                src={Mydata}
                                alt="olivetech"
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                            />
                        </section>
                    </div>
                </article>
            </Carousel>
        </>
    );
}
