"use client";

import React from 'react';
import { Layout } from 'antd';
const { Header } = Layout;


export default function MainHeader() {
    return (
        <>
            <Header>
                <h1 style={{ color: "#fff" }}>나는 메인 헤더</h1>
            </Header>   
        </>
    );
}

