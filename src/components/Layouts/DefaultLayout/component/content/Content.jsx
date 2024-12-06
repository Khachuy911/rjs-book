import React from 'react';
import { Layout, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';

function Contents({ children }) {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();
  return (
    <Layout
      cla
      style={{
        marginLeft: 195,
        marginTop: 30,
        padding: '0 10px'
      }}
    >
      <Content
        style={{
          padding: 24,
          margin: 0,
          background: colorBgContainer,
          borderRadius: borderRadiusLG
        }}
      >
        {children}
      </Content>
    </Layout>
  );
}

export default Contents;
