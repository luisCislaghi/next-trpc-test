import React, { CSSProperties } from 'react';
import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import SideMenu from './menu';
import Logo from './logo';

const Main: React.FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  const headerStyle: CSSProperties = {
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#fff',
  };

  const contentStyle: CSSProperties = {
    margin: '24px 16px 0',
    overflow: 'initial',
  };

  const subContentStyle: CSSProperties = {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    minHeight: 'calc(100vh - 69px - 64px - 24px)',
  };

  const siderStyle: CSSProperties = {
    lineHeight: '120px',
    backgroundColor: '#fff',
  };

  const footerStyle: CSSProperties = {
    textAlign: 'center',
  };

  const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
  };

  return (
    <Layout style={layoutStyle} hasSider>
      <Sider width="20%" collapsible theme="light" style={siderStyle}>
        <Logo />
        <SideMenu />
      </Sider>
      <Layout>
        <Header style={headerStyle}></Header>
        <Content style={contentStyle}>
          <div style={subContentStyle}>{children}</div>
        </Content>
        <Footer style={footerStyle}>@Luis Cislaghi 2024</Footer>
      </Layout>
    </Layout>
  );
};

export default Main;
