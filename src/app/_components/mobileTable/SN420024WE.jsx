'use client';
import React from 'react';
import styles from '@/app/_styles/solutions.module.css';

export default function SN420024WE() {
    return (
        <>
            <table className={styles.solTable}>
                <thead>
                    <tr>
                        <th colSpan={2} style={{ width: '40%' }}>
                            모델
                        </th>
                        <td className={styles.modelNum} style={{ width: '60%' }}>
                            SN4200-24WE
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colSpan={2}>샤시</th>
                        <td className={styles.evenRow}>4U/24 Disk Bay</td>
                    </tr>
                    <tr>
                        <th colSpan={2}>CPU</th>

                        <td className={styles.evenRow}>멀티코어 XEON 2개</td>
                    </tr>
                    <tr>
                        <th colSpan={2}>Memory</th>

                        <td className={styles.evenRow}>64GB ~</td>
                    </tr>
                    <tr>
                        <th colSpan={2}>RAID 제어기</th>
                        <td>Hardware RAID Controller with BBU, RAID Level 0,1,5,6,50,60 지원</td>
                    </tr>
                    <tr>
                        <th colSpan={2}>Power Supply</th>
                        <td>1+1 Dual Redundant Power Supply</td>
                    </tr>
                    <tr>
                        <th colSpan={2}>Network Interface</th>
                        <td>기본: 1GbE x 2Port, 확장: 10GbE, 40GbE UTP/Fibre 추가 가능</td>
                    </tr>
                    <tr>
                        <th rowSpan={4}>디스크</th>
                        <th>Type</th>
                        <td>기본: NL-SAS 72200RPM HDD, 옵션: SSD 선택가능</td>
                    </tr>
                    <tr>
                        <th>기본용량</th>
                        <td>28TB ~ 432TB</td>
                    </tr>
                    <tr>
                        <th>확장옵션</th>
                        <td>24 Disk JBOD(최대 432TB), 36 Disk JBOD(최대 648TB) x 4대 확장 지원</td>
                    </tr>
                    <tr>
                        <th>최대용량</th>
                        <td className={styles.evenRow}>3,024TB</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
