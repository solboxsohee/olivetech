'use client';
import React from 'react';
import PageTitle from '@/app/_components/pageLayout/pageTitle';
import PageImg from '@/app/_components/pageLayout/pageImg';
import styles from '@/app/_styles/solutions.module.css';

export default function PDS() {
    return (
        <>
            <PageTitle
                BlueTitle={'Solutions'}
                MainTitle={'공공 마이데이터 솔루션으로'}
                MainBoldTitle={'안전한 데이터 연계와 혁신을 지원합니다.'}
            />
            <PageImg imgSrc={'aboutImg'} />
            <main className="main-content">
                <section className={styles.solLayout}>
                    <h1 className={styles.solTitle}>공공마이데이터 서비스</h1>
                    <article className={styles.solTxt}>
                        <p>
                            공공 ,민간 기관의 서비스를 이용할 때 개인이나 기업이 제출해야 하는
                            민원서류 중 해당 업무에 필요한 정보만 선별하여 (예: 주민등록등본에서
                            민원인 성명, 세대주 여부 만 선택) 하나의 “묶음정보(꾸러미, XML)”로
                            만들어 이용기관에 전송하여 주는 서비스입니다. 정보주체는 이용기관에
                            정보활용에 대한 동의만 하면 되고 이용기관의 업무에 필요한 모든 정보는
                            공공마이데이터 유통체계를 통해 API를 통해 전송 받아 자동으로 업무를
                            처리할 수 있게 되며, 정보주체는 업무에 필요한 민원서류를 별도로 제출할
                            필요가 없어지게 된다.
                        </p>
                    </article>
                </section>
                <section className={styles.solLayout}>
                    <h1 className={styles.solTitle}>본인정보 보안저장소</h1>
                    <article className={styles.solTxt}>
                        <p>
                            이용기관이 정보주체의 동의 하에 발급 받은 묶음정보 및 이용내역은
                            본인정보 보안저장소(PDS, Personal Data Store)에 저장 관리하도록
                            행정안전부 관련 고시안(“본인에 관한 행정정보의 제공 등에 관한 고시”) 제
                            27조에 의해 의무화 되어 있으며 본인정보 보안저장소에 대한 상세 규격은
                            고시안 “별표 6”에 상세하게 규정되어 있습니다. 다음은 이용기관 중 하나인
                            경상남도의 지원사업신청에 적용된 공공마이데이터 서비스 연계 시스템과 PDS
                            구성 사례입니다.
                        </p>
                    </article>
                </section>
            </main>
        </>
    );
}
