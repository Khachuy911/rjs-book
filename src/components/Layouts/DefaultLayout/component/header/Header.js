import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

import Avatars from './Avatar';
import Menus from './Menu';
const { Header } = Layout;

function Headers() {
  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className='demo-logo' style={{ color: 'white', fontWeight: 'bolder', fontSize: '20px' }}>
        <Link to='/'>RJS</Link>
      </div>
      <Menus />
      <div>
        <Avatars />
      </div>
    </Header>
  );
}

export default Headers;
