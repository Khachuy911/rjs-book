import { Layout, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';

function Contents({ children }) {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();
  return (
    <Layout
      style={{
        padding: '0 24px 24px'
      }}
    >
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 640,
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
