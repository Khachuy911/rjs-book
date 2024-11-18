import React from 'react';
import { Layout } from 'antd';

import Headers from './component/header/Header';
import SideBar from './component/content/Sidebar';
import Contents from './component/content/Content';

const DefaultLayout = ({ children }) => {
  return (
    <Layout>
      <Headers />
      <Layout>
        <SideBar />
        <Contents>{children}</Contents>
      </Layout>
    </Layout>
  );
};
export default DefaultLayout;
