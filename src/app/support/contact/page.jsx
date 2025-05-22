'use client';
import React from 'react';
import PageTitle from '@/app/_components/pageLayout/pageTitle';
import PageImg from '@/app/_components/pageLayout/pageImg';
import { Checkbox, Form, Input, Flex, Button } from 'antd';
import '@/app/_styles/form.css';
import SecondMenu from '@/app/_components/layouts/secondMenu';

export default function ContactForm() {
    const secondMenuLinks = [
        { href: '', name: '소개자료' },
        { href: '', name: '기술자료' },
        { href: '', name: 'S/W 다운로드' },
        { href: '/support/faq', name: 'FAQ' },
        { href: '/support/contact', name: '문의하기' },
    ];
    return (
        <>
            <PageTitle
                BlueTitle={'Contact'}
                MainTitle={'올리브텍 전문가들과'}
                MainBoldTitle={'함께 하세요.'}
            />
            <SecondMenu menuName={'고객 지원'} links={secondMenuLinks} border={false} />
            <PageImg imgSrc={'contactImg'} />
            <main className="main-content">
                <h2>궁금한 문의사항을 남겨주세요</h2>
                <Form
                    labelCol={{ flex: '200px' }}
                    labelAlign="left"
                    labelWrap
                    wrapperCol={{ flex: 1 }}
                    colon={false}
                    className="formBox"
                >
                    <Form.Item
                        label="이름"
                        name="name"
                        rules={[{ required: true, message: '이름 입력은 필수입니다.' }]}
                        className="formItemStyle"
                    >
                        <Input placeholder="이름을 입력하세요" />
                    </Form.Item>
                    <Form.Item
                        label="연락처"
                        name="phone"
                        rules={[{ required: true, message: '연락처 입력은 필수입니다.' }]}
                        className="formItemStyle"
                    >
                        <Input placeholder="연락처를 입력하세요" />
                    </Form.Item>
                    <Form.Item
                        label="이메일"
                        name="email"
                        rules={[{ required: true, message: '이메일 입력은 필수입니다.' }]}
                        className="formItemStyle"
                    >
                        <Input placeholder="이메일을 입력하세요" />
                    </Form.Item>
                    <Form.Item
                        label="회사명"
                        name="email"
                        rules={[{ required: false }]}
                        className="formItemStyle"
                    >
                        <Input placeholder="회사 이름을 입력하세요" />
                    </Form.Item>
                    <Form.Item
                        label="문의 내용"
                        name="email"
                        rules={[{ required: false }]}
                        className="formItemStyle"
                    >
                        <Input placeholder="문의 내용을 입력하세요." />
                    </Form.Item>
                    <Form.Item
                        label={
                            <span style={{ lineHeight: 1.5 }}>
                                개인정보 수집 및<br className="mobileBR" />
                                이용에 관한 동의
                            </span>
                        }
                        name="agreement"
                        rules={[
                            { required: true, message: '개인정보 수집 및 이용에 동의해주세요.' },
                        ]}
                        className="formItemStyle"
                    >
                        <Flex vertical>
                            <article className="infoBox">
                                <b>[수집하는 개인정보 항목]</b>
                                <br />
                                회사는 서비스 상담 등을 위해 아래와 같은 개인정보를 수집하고
                                있습니다. <br />
                                • 수집 항목: 회사명, 성명, 직위, 산업군, 휴대전화번호, 이메일,
                                웹사이트 URL, 문의 서비스 <br />
                                • 개인정보 수집 방법: 웹사이트 <br />
                                <br />
                                <b>[개인정보의 수집 및 이용목적]</b>
                                <br /> 회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.{' '}
                                <br />
                                • 서비스 상담 <br />
                                • 관련 자료, 신규 서비스 등 광고 정보 전달 <br />
                                <br />
                                <b>[개인정보의 보유 및 이용기간]</b>
                                <br /> • 회사는 해당 정보를 개인정보의 수집 및 이용 목적의 달성을
                                위해 필요한 기간 동안 보유합니다.
                            </article>
                            <Checkbox>
                                <p>
                                    개인정보 수집 및 이용에 동의합니다.{' '}
                                    <span style={{ color: '#E51D25' }}>(필수)</span>
                                </p>
                            </Checkbox>
                        </Flex>
                    </Form.Item>
                    <Form.Item
                        label="자동입력방지문자"
                        name="blockRobot"
                        rules={[{ required: true, message: '스팸방지 문자를 입력해주세요.' }]}
                        className="formItemStyle"
                    >
                        <section className="captchaSection">
                            <img src="/form/captcha.gif" alt="captcha" width={310} />
                        </section>
                    </Form.Item>
                    <Form.Item name="button" className="mg-6">
                        <Flex className="buttonWrap">
                            <Button type="primary">등록</Button>
                            <Button>취소</Button>
                        </Flex>
                    </Form.Item>
                </Form>
            </main>
        </>
    );
}
