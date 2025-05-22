'use client';
import React from 'react';
import styles from '@/app/_styles/solutions.module.css';

export default function SN4200NG() {
    return (
        <>
            <table className={styles.solTable}>
                <thead>
                    <tr>
                        <th colSpan={2} style={{ width: '40%' }}>
                            모델
                        </th>
                        <td className={styles.modelNum} style={{ width: '60%' }}>
                            NS4200-NG
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colSpan={2}>샤시</th>
                        <td className={styles.evenRow}>2U/WORM Gateway</td>
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
                        <td className={styles.evenRow} rowSpan={4}>
                            SAN외장 RAID 스토리지 접속 지원 16Gb Dual-Port FC HBA x 2장 기본 장착
                        </td>
                    </tr>
                    <tr>
                        <th>기본용량</th>
                    </tr>
                    <tr>
                        <th>확장옵션</th>
                    </tr>
                    <tr>
                        <th>최대용량</th>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
