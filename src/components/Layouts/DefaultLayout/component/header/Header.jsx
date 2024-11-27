import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

import Avatars from './Avatar';
import Menus from './Menu';
import Searchs from './Search';
const { Header } = Layout;

function Headers() {
  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        position: 'fixed',
        insetInlineStart: 0,
        top: 0,
        zIndex: 1000,
        backgroundColor: '#001529',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
      }}
    >
      <div className='demo-logo' style={{ color: 'white', fontWeight: 'bolder', fontSize: '20px' }}>
        <Link to='/'>RJS</Link>
      </div>
      <Menus />
      <Searchs />
      <Avatars />
    </Header>
  );
}

export default Headers;
