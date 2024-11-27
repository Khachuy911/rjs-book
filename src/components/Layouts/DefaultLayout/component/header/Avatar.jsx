import { Avatar, Badge, Button, Dropdown, Space } from 'antd';
import React, { useState } from 'react';

import { DownOutlined } from '@ant-design/icons';
import {
  UserOutlined,
  SettingOutlined,
  LoginOutlined,
  LogoutOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Avatars = () => {
  const [open, setOpen] = useState(false);

  const isAuth = () => {
    const tokenStr = sessionStorage.getItem('token');
    const token = JSON.parse(tokenStr);
    return token ? true : false;
  };

  const handleMenuClick = (e) => {
    if (e.key === '5') {
      setOpen(false);
    }
  };
  const handleOpenChange = (nextOpen, info) => {
    if (info.source === 'trigger' || nextOpen) {
      setOpen(nextOpen);
    }
  };
  const items = [
    {
      label: <Link to='/'>Profile</Link>,
      key: '1',
      icon: <UserOutlined />,
      style: { width: '100px' },
      visible: true
    },
    {
      label: 'Setting',
      key: '4',
      icon: <SettingOutlined />,
      visible: true
    },
    {
      label: <Link to='/login'>Login</Link>,
      key: '2',
      icon: <LoginOutlined />,
      visible: !isAuth()
    },
    {
      label: <Link to='/login'>Logout</Link>,
      key: '3',
      icon: <LogoutOutlined />,
      visible: isAuth()
    },

    {
      type: 'divider',
      visible: true
    },
    {
      label: 'Close',
      key: '5',
      icon: <CloseOutlined />,
      visible: true
    }
  ];

  const itemFilter = items.filter((item) => item.visible);
  if (isAuth()) {
    return (
      <Dropdown
        menu={{
          items: itemFilter,
          onClick: handleMenuClick
        }}
        onOpenChange={handleOpenChange}
        open={open}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <Space size={24}>
              <Badge dot>
                <Avatar
                  style={{
                    backgroundColor: '#1677ff'
                  }}
                  shape='vertical'
                  icon={<UserOutlined />}
                />
              </Badge>
            </Space>
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    );
  } else {
    return (
      <Button color='primary' variant='solid' loading={false}>
        <Link to='/login'> Signin/ Signup Now !</Link>
      </Button>
    );
  }
};
export default Avatars;
