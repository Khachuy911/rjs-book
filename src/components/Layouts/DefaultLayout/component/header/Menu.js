import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

function Menus() {
  const items1 = ['HOME', 'SHOPPING CART', 'FLASH SALE', 'UPLOAD'].map((key) => {
    let path;
    switch (key) {
      case 'SHOPPING CART':
        path = '/';
        break;
      case 'FLASH SALE':
        path = '/';
        break;
      case 'UPLOAD':
        path = '/uploads';
        break;
      default:
        path = '/';
        break;
    }
    return {
      key,
      label: <Link to={path}>{key}</Link>,
      style: { minWidth: '130px', textAlign: 'center' }
    };
  });
  return (
    <Menu
      theme='dark'
      mode='horizontal'
      defaultSelectedKeys={['HOME']}
      items={items1}
      style={{
        flex: 1,
        minWidth: 100,
        justifyContent: 'center',
        justifyItems: 'center'
      }}
    />
  );
}

export default Menus;
