'use client';
import React from 'react';
import styles from '@/app/_styles/home.module.css';
import Image from 'next/image';
import Mydata from '$/cases/mydata.jpg';
import Pohang from '$/cases/pohang.jpg';
import Link from 'next/link';

export default function HomeCase() {
    return (
        <article className="main-content">
            <Link href="/cases/example/adm">
                <section className={styles.caseStudy}>
                    <div className={styles.caseImgWrap}>
                        <Image src={Mydata} alt="cases" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className={styles.caseText}>
                        <h1>[행정안전부] 공공마이데이터 유통 시스템 구축 및 운영</h1>
                        <p>
                            국민의 데이터 주권 강화 및 구비서류 감축을 위해 2020년부터 정보주체의
                            요구에 따라 행정·공공기관이 보유한 본인정보를 본인 또는 제3자에게
                            제공하는 공공 마이데이터 사업이 진행되고 있습니다. 정보주체가 공공·민간
                            서비스 신청 시 필요한 행정서류를 전산으로 전송하도록 함으로써, 자원 절감
                            및 중복요구 제로화 등을 통한 업무 처리 효율성 증대를 목표로 하고 있으며
                            공공부문 기업정보 제공 서비스 적용을 위하여 본인정보 제공요구 권리주체를
                            법인·단체로 확대 적용 추진하고 있습니다. 국가정보자원관리원 광주센터에
                            구축된 행정안전부의 공공마이데이터 유통 시스템은 이용기관이 요청한
                            정보주체의 본인정보를 묶음정보로 제공하여 주는 시스템입니다.
                            공공마이데이터 유통시스템에는 이용기관들에 제공된 묶음정보를 일정기간
                            안전하게 보존하기위한 임대 보안저장소(PDS) 시스템이 구축되어 있으며
                            보안저장소는 올리브텍의 WORM 스토리지와 올리브텍이 개발한 PDS 솔루션을
                            기반으로 운영되고 있습니다.
                        </p>
                    </div>
                </section>
            </Link>
            <Link href="/cases/example/pohang">
                <section className={styles.caseStudy}>
                    <div className={styles.caseImgWrap} style={{ order: 2 }}>
                        <Image src={Pohang} alt="cases" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className={styles.caseText} style={{ order: 1 }}>
                        <h1>[포항테크노파크] 2024년 제조업 AI 융합 기반조성 GPU서버 인프라 구축</h1>
                        <p>
                            포항테크노파크는 경상북도 내 철강산업 분야 중소기업의 제조현안 해결을
                            위한 AI융합기술 장비(고성능 GPU서버 등) 지원 인프라 구축사업을
                            진행하였습니다. 본 사업은 지역 제조 기업의 AI모델 및 서비스 검증에 활용,
                            AI 솔루션 개발 및 실증 지원을 통한 AI 기업의 역량 강화 지원하는 것이
                            목적입니다. NVIDIA 고성능 GPU 서버, 이의 활용을 위한 고성능
                            워크스테이션과 함께 올리브텍의 고성능 대용량 WORM 스토리지를 학습데이터
                            축적 및 데이터 보호를 위해 도입하였습니다.
                        </p>
                    </div>
                </section>
            </Link>
        </article>
    );
}
