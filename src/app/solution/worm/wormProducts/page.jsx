import React from 'react';
import styles from '@/app/_styles/solutions.module.css';
import PageTitle from '@/app/_components/pageLayout/pageTitle';
import PageImg from '@/app/_components/pageLayout/pageImg';
import SecondMenu from '@/app/_components/layouts/secondMenu';

export default function WormProducts() {
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
                        물리적 WORM
                        <br />
                        스토리지
                    </h1>
                    <article
                        className={styles.solTxt}
                        style={{ flexDirection: 'column' }}
                        data-aos="fade-up"
                    >
                        <p>
                            산업 표준 19인치 랙-마운트 타입의 고성능 대용량 WORM 스토리지 시스템으로
                            주요 파트의 이중화를 통해 뛰어난 신뢰성을 제공하며 고성능 하드웨어 및
                            BBU를 탑재한 전용 RAID 제어기를 통해 뛰어난 성능을 제공합니다. <br />
                            최대 4대의 JBOD(Just Bunch of Disk) 확장 모듈을 통해 3PB 이상의 대용량
                            구성이 가능하며 실시간 복제 및 이를 기반으로 한 HA 구성을 통해 높은
                            서비스 가용성을 제공할 수 있습니다.
                        </p>
                        <div className={styles.solTableWrap}>
                            <table className={styles.solTable}>
                                <thead>
                                    <tr>
                                        <th colSpan={2} style={{ width: '20%' }}>
                                            모델
                                        </th>
                                        <td className={styles.modelNum} style={{ width: '20%' }}>
                                            DF4200-12WE
                                        </td>
                                        <td className={styles.modelNum} style={{ width: '20%' }}>
                                            DF4200-24WE
                                        </td>
                                        <td className={styles.modelNum} style={{ width: '20%' }}>
                                            DF4200-36WE
                                        </td>
                                        <td className={styles.modelNum} style={{ width: '20%' }}>
                                            DF4200-WG
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th colSpan={2}>샤시</th>
                                        <td>2U/12 Disk Bay</td>
                                        <td className={styles.evenRow}>4U/24 Disk Bay</td>
                                        <td>4U/36 Disk Bay</td>
                                        <td className={styles.evenRow}>2U/WORM Gateway</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}>CPU</th>
                                        <td>멀티코어 XEON 1개</td>
                                        <td className={styles.evenRow}>멀티코어 XEON 2개</td>
                                        <td>멀티코어 XEON 2개</td>
                                        <td className={styles.evenRow}>멀티코어 XEON 2개</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}>Memory</th>
                                        <td>32GB ~</td>
                                        <td className={styles.evenRow}>64GB ~</td>
                                        <td>64GB ~</td>
                                        <td className={styles.evenRow}>64GB ~</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}>RAID 제어기</th>
                                        <td colSpan={4}>
                                            Hardware RAID Controller with BBU, RAID Level
                                            0,1,5,6,50,60 지원
                                        </td>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}>Power Supply</th>
                                        <td colSpan={4}>1+1 Dual Redundant Power Supply</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}>Network Interface</th>
                                        <td colSpan={4}>
                                            기본: 1GbE x 2Port, 확장: 10GbE, 40GbE UTP/Fibre 추가
                                            가능
                                        </td>
                                    </tr>
                                    <tr>
                                        <th rowSpan={4}>디스크</th>
                                        <th>Type</th>
                                        <td colSpan={3}>
                                            기본: NL-SAS 72200RPM HDD, 옵션: SSD 선택가능
                                        </td>
                                        <td className={styles.evenRow} rowSpan={4}>
                                            SAN외장 RAID 스토리지 접속 지원 16Gb Dual-Port FC HBA x
                                            2장 기본 장착
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>기본용량</th>
                                        <td>24TB ~ 216TB</td>
                                        <td className={styles.evenRow}>28TB ~ 432TB</td>
                                        <td>72TB ~ 648TB</td>
                                    </tr>
                                    <tr>
                                        <th>확장옵션</th>
                                        <td colSpan={3}>
                                            24 Disk JBOD(최대 432TB), 36 Disk JBOD(최대 648TB) x 4대
                                            확장 지원
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>최대용량</th>
                                        <td>2,808TB</td>
                                        <td className={styles.evenRow}>3,024TB</td>
                                        <td>3,240TB</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </article>
                </section>
                <section className={styles.solLayout}>
                    <h1 className={styles.solTitle}>가상 WORM 스토리지</h1>
                    <article
                        className={styles.solTxt}
                        data-aos="fade-up"
                        style={{ flexDirection: 'column' }}
                    >
                        <p>
                            프라이빗 클라우드 및 퍼블릭 클라우드에 생성한 가상머신을 WORM 스토리지로
                            구성할 수 있습니다. vSphere, Xen, Hyper-V, KVM, Oracle VirtualBox 및
                            Nutanix 포함 HCI 플랫폼 등 대부분의 프라이비트 클라우드 환경과 AWS,
                            Azure, Naver Cloud, KT Cloud, NHN Cloud 등 대표적인 국내외 퍼블릭
                            클라우드 환경을 지원합니다. <br />
                            라이선스는 기본 엔진 라이선스에 더하여 WORM 볼륨을 구성할 수 있는 용량에
                            대한 라이선스를 1TB 단위로 구매할 수 있습니다.
                        </p>

                        <div style={{ marginTop: 45 }}>
                            <img src="/systemflow/V-WORM.svg" alt="v-worm" width={'100%'} />
                        </div>
                    </article>
                </section>
                <section className={styles.solLayout}>
                    <h1 className={styles.solTitle}>
                        IFS Linux
                        <br />
                        솔루션
                    </h1>
                    <article
                        className={styles.solTxt}
                        data-aos="fade-up"
                        style={{ flexDirection: 'column' }}
                    >
                        <p>
                            대부분의 범용 리눅스 배포판이 설치된 물리적,가상 서버의 로컬 스토리지에
                            IFS(Immutable File System,변경불가 파일시스템) 즉 보존기간 동안 데이터를
                            삭제.변경할 수 없는 WORM 볼륨을 생성할 수 있는 기능을 제공합니다.
                            <br />
                            기존 리눅스 배포판과 완벽하게 호환성을 유지하므로 리눅스를 기반으로 하는
                            솔루션들은 기존 사용환경과 100% 호환성을 유지하면서도 보안 WORM 파티션을
                            생성하여 데이터 훼손 방지 용도나 컴플라이언스 데이터 저장 용도로 활용할
                            수 있습니다.
                            <br />
                            Rocky Linux, Oracle Linux, Redhat Enterprise Linux, Ubuntu Linux 등
                            대부분의 범용 Linux 배포판을 지원합니다. 라이선스는 기본 OS 라이선스에
                            더하여 WORM 볼륨을 구성할 수 있는 용량에 대한 라이선스를 1TB 단위로
                            구매할 수 있습니다.
                        </p>
                        <div style={{ marginTop: 45 }}>
                            <img src="/systemflow/IFS.svg" alt="ifs" />
                        </div>
                    </article>
                </section>
                <section className={styles.solLayout}>
                    <h1 className={styles.solTitle}>
                        범용 NAS
                        <br />
                        스토리지
                    </h1>
                    <article
                        className={styles.solTxt}
                        style={{ flexDirection: 'column' }}
                        data-aos="fade-up"
                    >
                        <p>
                            산업 표준 19인치 랙-마운트 타입의 고성능 대용량 NAS 스토리지 시스템으로
                            주요 파트의 이중화를 통해 뛰어난 신뢰성을 제공하며 고성능 하드웨어 및
                            BBU를 탑재한 전용 RAID 제어기를 통해 뛰어난 성능을 제공합니다. <br />
                            최대 4대의 JBOD(Just Bunch of Disk) 확장 모듈을 통해 3PB 이상의 대용량
                            구성이 가능하며 실시간 복제 및 이를 기반으로 한 HA 구성을 통해 높은
                            서비스 가용성을 제공할 수 있습니다. <br />
                            유료로 제공되는 WORM 라이선스 구매를 통해 WORM 스토리지로 업그레이드가
                            가능합니다.
                        </p>
                        <div className={styles.solTableWrap}>
                            <table className={styles.solTable}>
                                <thead>
                                    <tr>
                                        <th colSpan={2} style={{ width: '20%' }}>
                                            모델
                                        </th>
                                        <td className={styles.modelNum} style={{ width: '20%' }}>
                                            SN4200-12WE
                                        </td>
                                        <td className={styles.modelNum} style={{ width: '20%' }}>
                                            SN4200-24WE
                                        </td>
                                        <td className={styles.modelNum} style={{ width: '20%' }}>
                                            SN4200-36WE
                                        </td>
                                        <td className={styles.modelNum} style={{ width: '20%' }}>
                                            NS4200-NG
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th colSpan={2}>샤시</th>
                                        <td>2U/12 Disk Bay</td>
                                        <td className={styles.evenRow}>4U/24 Disk Bay</td>
                                        <td>4U/36 Disk Bay</td>
                                        <td className={styles.evenRow}>2U/WORM Gateway</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}>CPU</th>
                                        <td>멀티코어 XEON 1개</td>
                                        <td className={styles.evenRow}>멀티코어 XEON 2개</td>
                                        <td>멀티코어 XEON 2개</td>
                                        <td className={styles.evenRow}>멀티코어 XEON 2개</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}>Memory</th>
                                        <td>32GB ~</td>
                                        <td className={styles.evenRow}>64GB ~</td>
                                        <td>64GB ~</td>
                                        <td className={styles.evenRow}>64GB ~</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}>RAID 제어기</th>
                                        <td colSpan={4}>
                                            Hardware RAID Controller with BBU, RAID Level
                                            0,1,5,6,50,60 지원
                                        </td>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}>Power Supply</th>
                                        <td colSpan={4}>1+1 Dual Redundant Power Supply</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}>Network Interface</th>
                                        <td colSpan={4}>
                                            기본: 1GbE x 2Port, 확장: 10GbE, 40GbE UTP/Fibre 추가
                                            가능
                                        </td>
                                    </tr>
                                    <tr>
                                        <th rowSpan={4}>디스크</th>
                                        <th>Type</th>
                                        <td colSpan={3}>
                                            기본: NL-SAS 72200RPM HDD, 옵션: SSD 선택가능
                                        </td>
                                        <td className={styles.evenRow} rowSpan={4}>
                                            SAN외장 RAID 스토리지 접속 지원 16Gb Dual-Port FC HBA x
                                            2장 기본 장착
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>기본용량</th>
                                        <td>24TB ~ 216TB</td>
                                        <td className={styles.evenRow}>28TB ~ 432TB</td>
                                        <td>72TB ~ 648TB</td>
                                    </tr>
                                    <tr>
                                        <th>확장옵션</th>
                                        <td colSpan={3}>
                                            24 Disk JBOD(최대 432TB), 36 Disk JBOD(최대 648TB) x 4대
                                            확장 지원
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>최대용량</th>
                                        <td>2,808TB</td>
                                        <td className={styles.evenRow}>3,024TB</td>
                                        <td>3,240TB</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
}
