"use client";
import { Layout } from 'antd';
import MainHeader from './_components/layouts/header';

import { Content } from 'antd/es/layout/layout';
import MainFooter from './_components/layouts/footer';

export default function Home({Children}) {
  return (
  <Layout>
    <MainHeader />
    <Content>
      {Children}
    </Content>
    <MainFooter/>
  </Layout>
);
}