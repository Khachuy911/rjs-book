import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';

function Menus() {
  const location = useLocation();
  const items1 = ['HOME', 'SHOPPING CART', 'FLASH SALE', 'UPLOAD'].map((key) => {
    let path;
    switch (key) {
      case 'SHOPPING CART':
        path = '/carts';
        break;
      case 'FLASH SALE':
        path = '/sales';
        break;
      case 'UPLOAD':
        path = '/uploads';
        break;
      default:
        path = '/';
        break;
    }
    return {
      key: path,
      label: <Link to={path}>{key}</Link>,
      style: { minWidth: '130px', textAlign: 'center' }
    };
  });
  return (
    <Menu
      theme='dark'
      mode='horizontal'
      selectedKeys={[location.pathname]}
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
