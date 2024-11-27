import React from 'react';
import { Layout } from 'antd';

import Headers from './component/header/Header.jsx';
import SideBar from './component/content/Sidebar.jsx';
import Footers from './component/footer/Footer.jsx';
import Contents from './component/content/Content.jsx';

const DefaultLayout = ({ children }) => {
  return (
    <Layout>
      <Headers />
      <Layout>
        <SideBar />
        <Contents>{children}</Contents>
      </Layout>
      <Footers />
    </Layout>
  );
};
export default DefaultLayout;
