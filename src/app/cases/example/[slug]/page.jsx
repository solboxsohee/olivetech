import React from 'react';
import { Flex } from 'antd';
import { notFound } from 'next/navigation';
import exampleData from '@/data/exampleData';
import Image from 'next/image';
import styles from '@/app/_styles/view.module.css';

export function generateStaticParams() {
    return Object.keys(exampleData).map((slug) => ({ slug }));
}

export default function CardDetail({ params }) {
    const { slug } = params;
    const example = exampleData[slug];

    if (!example) return notFound();

    return (
        <main className="main-content">
            <article className={styles.viewSummary}>
                <section>
                    <Flex align="center" gap={60}>
                        <h2 className={styles.companyName}>{example.companyName}</h2>
                        <table className={styles.viewTable}>
                            <tbody>
                                <tr>
                                    <td>
                                        <b>산업군</b>
                                    </td>
                                    <td>{example.business}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>웹사이트</b>
                                    </td>
                                    <td>{example.website}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>적용 서비스</b>
                                    </td>
                                    <td>{example.service}</td>
                                </tr>
                            </tbody>
                        </table>
                    </Flex>
                </section>
                <section>
                    <Image
                        src={example.logoSrc}
                        alt="logo"
                        width={260}
                        height={0}
                        style={{ height: 'auto' }}
                    />
                </section>
            </article>
            <article className={styles.viewArticle}>
                <h1>{example.title}</h1>
                <h3>도입 배경</h3>
                <p style={{ whiteSpace: 'pre-line' }}>{example.intro}</p>
                <h3>도입 효과</h3>
                <p style={{ whiteSpace: 'pre-line' }}>{example.content}</p>
                <h3>적용 서비스</h3>
                {example.useService && (
                    <ul>
                        {example.useService.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                )}
            </article>
        </main>
    );
}
